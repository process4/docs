(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory() :
    typeof define === 'function' && define.amd ? define(factory) :
    (factory());
  }(this, (function () { 'use strict';
  
    function styleInject(css, ref) {
      if ( ref === void 0 ) ref = {};
      var insertAt = ref.insertAt;
  
      if (!css || typeof document === 'undefined') { return; }
  
      var head = document.head || document.getElementsByTagName('head')[0];
      var style = document.createElement('style');
      style.type = 'text/css';
  
      if (insertAt === 'top') {
        if (head.firstChild) {
          head.insertBefore(style, head.firstChild);
        } else {
          head.appendChild(style);
        }
      } else {
        head.appendChild(style);
      }
  
      if (style.styleSheet) {
        style.styleSheet.cssText = css;
      } else {
        style.appendChild(document.createTextNode(css));
      }
    }
  
    var css = ".sidebar-nav li {\n  position: relative;\n  margin: 0;\n}\n.sidebar-nav a {\n  text-decoration: none;\n  padding-left: 8px;\n}\n.sidebar-nav > ul > li > ul a::before {\n  content: '';\n  display: block;\n  position: absolute;\n  top: 0;\n  left: 0;\n  height: 15px;\n  width: 6px;\n  border-left: 1px solid #e7e7eb;\n  border-bottom: 1px solid #e7e7eb;\n}\n.sidebar-nav > ul > li > ul a::after {\n  content: '';\n  display: block;\n  position: absolute;\n  top: 0;\n  left: 0;\n  bottom: 0;\n  width: 6px;\n  border-left: 1px solid #e7e7eb;\n}\n.sidebar-nav li:last-child > a::after {\n  display: none;\n}\n\n.sidebar-nav .app-sub-sidebar a::before,\n.sidebar-nav .app-sub-sidebar a::after {\n  display: none;\n}\n\n.app-sub-sidebar li::before {\n  content: '#';\n}\n\n.sidebar-nav a:hover {\n  background: #eff1f3;\n}\n.sidebar-nav > ul > li > ul > li ul {\n  display: none;\n}\n\n.app-sub-sidebar {\n  display: none;\n}\n.app-sub-sidebar.open {\n  display: block;\n}\n\n.sidebar-nav .open > ul:not(.app-sub-sidebar),\n.sidebar-nav .active > ul {\n  display: block;\n}\n\n.active + ul.app-sub-sidebar {\n  display: block;\n}\n";
    styleInject(css);
  
    $docsify.plugins = [function (hook, vm) {
      hook.doneEach(function (html, next) {
        var el = document.querySelector('.sidebar-nav .active');
  
        if (el) {
          el.classList.add('open');
  
          while (el.className !== 'sidebar-nav') {
            if (el.parentElement.tagName === 'LI' || el.parentElement.className === 'app-sub-sidebar') {
              el.parentElement.classList.add('open');
            }
  
            el = el.parentElement;
          }
        }
  
        next(html);
      });
    }].concat($docsify.plugins || []);
    window.addEventListener('hashchange', function (e) {
      requestAnimationFrame(function () {
        var el = document.querySelector('.sidebar-nav .active');
  
        if (el) {
          el.parentElement.parentElement.querySelectorAll('.app-sub-sidebar').forEach(function (dom) {
            return dom.classList.remove('open');
          });
  
          if (el.parentElement.tagName === 'LI' || el.parentElement.className === 'app-sub-sidebar') {
            el.parentElement.classList.add('open');
          }
        }
      });
    });
    document.addEventListener('scroll', function (e) {
      requestAnimationFrame(function () {
        var el = document.querySelector('.app-sub-sidebar > .active');
  
        if (el) {
          el.parentElement.parentElement.querySelectorAll('.app-sub-sidebar').forEach(function (dom) {
            return dom.classList.remove('open');
          });
  
          while (el.parentElement.classList.contains('app-sub-sidebar')) {
            el.parentElement.classList.add('open');
            el = el.parentElement;
          }
        }
      });
    }, false);
    document.addEventListener('DOMContentLoaded', function () {
      document.querySelector('.sidebar-nav').addEventListener('click', function (e) {
        if (e.target.tagName === 'A') {
          var elp = e.target.parentElement;
  
          if (elp.tagName === 'LI') {
            if (elp.classList.contains('active')) {
              requestAnimationFrame(function () {
                elp.classList.remove('active');
                elp.classList.remove('open');
                elp.classList.add('hold');
              });
            } else {
              requestAnimationFrame(function () {
                if (elp.classList.contains('hold')) {
                  elp.classList.add('active');
                  elp.classList.remove('hold');
                }
              });
            }
          }
        }
      }, true);
    });
  
  })));
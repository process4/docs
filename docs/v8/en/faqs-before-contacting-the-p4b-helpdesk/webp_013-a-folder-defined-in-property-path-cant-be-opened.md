### Problem

You have defined a path to a folder in Modeller via property with the
type PATH. After publishing the model in web, you cannot access the
folder. After clicking on the link defined in the property with the type
PATH, a blanc website is opened in IE9 and in Firefox.

### Solutions

**IE9**: When clicking on the path link, press the ***Shift ***button.
The folder should open.

**Firefox**: Install a special *Noscript* add-on
<https://addons.mozilla.org/en-US/firefox/addon/noscript/>. In the
plugin configuration, the checkbox "Allow local links" should be ticked.

![](//images.ctfassets.net/utx1h0gfm1om/4atj6vsDwAw40WO0OgkKki/3541ece2b61b098952eff70177e8c7a0/328922.png)

 

**Chrome:** Run chrome with` --disable-web-security` flag enabled (e.g.
edit shortcut and add `--disable-web-security` in the end, see
screenshot). **WARNING**: this can be potentially dangerous as it
disables chrome security (do it only at your own risk).

![](//images.ctfassets.net/utx1h0gfm1om/BHGiK5WckS4GMEmiS0aGI/2d99e411091f368caeb439c61224b5b2/328908.png)

 

 



<hr style="padding-top:2rem" />
<a href="https://github.com/process4/docs/issues" target="_blank" class="bgw btn btn-primary btn-lg shadow-sm">Report an issue</a>
<a href="https://github.com/process4/docs" target="_blank" class="bgw btn btn-primary btn-lg shadow-sm" style="margin-left:10px;">View source code</a>
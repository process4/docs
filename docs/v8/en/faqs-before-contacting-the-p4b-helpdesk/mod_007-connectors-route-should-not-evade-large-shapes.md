### Problem

A large shape exists on which you have placed small shapes. When you try
to connect them with other shapes, the connector routes around the large
shape, instead of linking the beginning to the end.

![](//images.ctfassets.net/utx1h0gfm1om/1BGdXKjsE8saosM0KS4Iec/676fd3fc520d494a9c6b4cabdeb473e7/328377.png)

### Solution

Switch to the **Developer mode**, ***File- Options -Advanced - Run in
developer mode***. Select the large shape and on  the Developer tab
click ***Behavior*** button and select ***Placement*** tab in tne
Behavior window. Select under **Placement bahavior** "Do not lay out and
route around".

![](//images.ctfassets.net/utx1h0gfm1om/4VUvDDfi5ySk0wWcOeKSiQ/6a5ca73b6d7be89c22e1993ba4e5dbb4/329368.png)

If the large shape is a p4b object and you use it from stencil, than it
is reasonable to perform this process for the master shape too.


<hr style="padding-top:2rem" />
<a href="https://github.com/process4/docs/issues" target="_blank" class="bgw btn btn-primary btn-lg shadow-sm">Report an issue</a>
<a href="https://github.com/process4/docs" target="_blank" class="bgw btn btn-primary btn-lg shadow-sm" style="margin-left:10px;">View source code</a>
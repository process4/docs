### Problem

You open a diagram in Web Portal and click on an object. Result: page
cannot be found.

### Reasons

1. The shape has not been created correctly.  
2. You click on the empty space on the object and not on the text.

![](//images.ctfassets.net/utx1h0gfm1om/74gjAf5ivYsY6A4M4oCI2k/a6b56c048a4c4a12bdb47ba3a04715c5/327984.png) ![](//images.ctfassets.net/utx1h0gfm1om/6ASwMANpOE6mSSSOMGgUyE/3e163c36bb236ac09a76ffadc4bb2ba5/327985.png)

 

### Solution

Edit your shape in Visio. Open ShapeSheet Window for the shape and
remove "PhoenixObjectGUID" from the shape and from all sub-shapes if the
shape is grouped. Update all diagrams using the shape and then publish
again.

![](//images.ctfassets.net/utx1h0gfm1om/1arwCFp7LIyuEgqSO8aa8o/ab3243461720f4c9506f72c41383a312/327986.png)

 


<hr style="padding-top:2rem" />
<a href="https://github.com/process4/docs/issues" target="_blank" class="bgw btn btn-primary btn-lg shadow-sm">Report an issue</a>
<a href="https://github.com/process4/docs" target="_blank" class="bgw btn btn-primary btn-lg shadow-sm" style="margin-left:10px;">View source code</a>
### Problem

You drag a shape on a diagram but the p4b-object is not created: object
properties are not opened.

### Solution

1. Check that you have a class with the name exactly like the name of
the shape. To be sure, copy the name of the shape, go to the Designer
and paste the name of the shape in the class name. Save the stencil,
save the diagram, close and open it again. Try to drag the shape on the
diagram. If this does not solve the problem, than see point 2.

2. Open the diagram. Select ***Developer*** tab and click on ***Document
Stencil***.

![](//images.ctfassets.net/utx1h0gfm1om/6Yk4MZ64OAK8OsMScswYY2/b4f969b6d3e5f1bd047d9b2205ad37c0/329601.png)

 

Delete all shapes in the Document stencil.

![](//images.ctfassets.net/utx1h0gfm1om/6pYe7lCKbei8aW2WsqQ6k4/007f32a92813d497681e83a096eed017/329595.png)

Close the document stencil, save the diagram, close and open the
diagram. Try to drag a shape. It should work now.

### Reason (for point 2)

Most probably you have opened an existing diagram with shapes on it,
edited the master shape and then tried to put the shape (of changed
master shape) on the diagram. So there are 2 different shapes for one
class: your old shape and your new shape. You should delete old shapes
in the cash (**document stencil**) to work properly with process4.biz.


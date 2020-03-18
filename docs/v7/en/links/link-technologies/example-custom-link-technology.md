Custom technology allows you to define on your own way, how objects
should be linked to diagrams, using Formula Script (in the condition
field).  
Here is an example of a custom technology.  
We want to link the object class ***Role*** with the object class
***Activity*** via RACI objects. Here RACI objects lie on the horizontal
and vertical intersection between roles and activities (see picture
below):


We create a custom technology for the class ***Activity:*** 

![](//images.ctfassets.net/utx1h0gfm1om/5EurUOuwko6sG8WKms6imG/00b299b470de3bd545ceb22396da1fcc/328797.png)

In the field condition, we write the following script: 

![](//images.ctfassets.net/utx1h0gfm1om/6FgEqTylJSESm2SgW4iKsm/5825148a268901d605937efdb6de5d58/328823.png)

This script finds on the diagram the coordinates of the class
***Activity*** and ***Role.*** Then the script searches for the objects
of the class RACI. If a RACI object lies on the vertical line to the
class ***Activity*** and on the horizontal line to the class
***Role,*** the objects of the classes A***ctivity*** and ***Role*** are
linked to the association object R, A, C or I. 

 

 
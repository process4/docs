First define a link type, which should be assigned under the indirect
technology to two specific classes. Create a new type in the Designer
under the item ***link types*** or edit an existing entry.  
 

Please make sure to define an association class when creating the link
type. The indirect technology aims to link objects via connectors and to
interpret the logic element (e.g. AND, OR, XOR), which lies between
these objects on a diagram, as an association object of this relation.
If you leave the field for the selection of an association class empty,
when you create the link type, the object of any class lying between
linked objects is regarded as an association object. However, when you
define a specific association class for the selected link type, the
indirect link is only then created, when an object of that association
class lies between two linked objects and is connected via connectors.  

An example follows.

Please create a special link type (here indirectly linked) to be used
with the indirect link technology. As association class, gateway was
chosen in this case. 

![](//images.ctfassets.net/utx1h0gfm1om/6K57vmZXDqkqw84c8KCkuo/341ea33263081639b1bec8da67fc6b7c/328890.png)

Create a rule for the created link type (indirectly linked) and assign
it to the link of two classes (in this case between the main process and
main process). Activate the indirect link technology using the
previously defined link type for linking objects of the class main
process.

![](//images.ctfassets.net/utx1h0gfm1om/3HAFSVJP7GAGgwiaO2GSCK/b96f144671062faabd30137e80fa98ce/328876.png)

Then, when you combine several objects of the above-defined classes
using connectors and a logic element (here XOR) on the diagram, this
relation is automatically recognised and stored in the database. 

![](//images.ctfassets.net/utx1h0gfm1om/tVNX8p1DP2GKomqOUaYku/b92fb2877c8fe85b59eb34dc29fa5493/329306.png)

![](//images.ctfassets.net/utx1h0gfm1om/39HyUHeeGQIGeKEG62AwI/3e8c8c3cfcd137baad3a2be18e34483b/329302.png)

The object XOR1, of the class gateway that is located between the linked
objects of the class main process, is identified as an association
object.

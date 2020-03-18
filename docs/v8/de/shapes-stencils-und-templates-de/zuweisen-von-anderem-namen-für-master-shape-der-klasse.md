A connection between the master shape and the p4b class (in other words,
when dropping the shapes on the diagram, objects of the p4b class are
created) can be set up in the following way:

1.  The Standard variant: the master shape and the p4b class have the
    same name (as described in chapter "Shapes, Stencils & Templates").
2.  Several master shapes can represent a class, when the property "is a
    master shape" is set to true (as described in the section "[Multiple
    Shapes for a single Class](multiple-shapes-for-a-single-class)"). 
3.  A master shape and the P4B class may also have different names.

The description of this variant can be found below.  
In our example, we have created a class with the name and DB name "A" in
the designer. In stencil, we have created a shape with the name "B". Now
we want that the characteristics of the master shape "B" belong to the
class "A".

<div class="info">
Note:  
To be able to see ShapeSheet of a Master Shape, Visio has to be run in
[developer mode](https://msdn.microsoft.com/en-us/library/office/ff765465.aspx) (*File* &gt; *Options* &gt; *Advanced* &gt; *Run in developer mode*).
</div>

  
In the ShapeSheet of the Master Shape "B", we add a new user-defined
cell named "P4BClass". In the value column (value) the DB name of the
desired class (in our example "A") should be mentioned.

![](//images.ctfassets.net/utx1h0gfm1om/5I1GEk1wbKEkcYcgKIW4oI/2c9aa9e38d6101a6979377a3633bf044/328710.png)

Now when we drop the shape "B" onto the diagram, it belongs to the class
"A".

![](//images.ctfassets.net/utx1h0gfm1om/5Ad2lmYwrm0KqAoKIoWQCS/51a3cf2152c1d23131818b94b351bcb6/328712.png)

 

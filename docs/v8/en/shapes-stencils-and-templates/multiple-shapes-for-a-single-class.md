In typical standard use of process4.biz one shape from the stencil is
assigned to exactly one class and all the objects in the repository.

With Smart Shapes you can configure process4.biz in a way that several
shapes from the Stencil are precisely assigned to a class, but the
assignment of the each shape to an object of this class depends on a
selected property value of the object.   
The shape appearing respectively on the diagram for an object of a class
should be able to change with respect to the property "is a
Master-Shape". Therefore, there should be several shapes in the stencil
by which the objects of a class (in our example: the Class "Activity")
can be represented. If one of these shapes is dragged from the stencil
to the diagram, it automatically belongs to the Class "Activity".

1.  Create in the Designer a new property (e.g. property group
    "Definition") for the class "activity" with the name of your choice
    and Db name. Set the special field "is a master shape" to TRUE in
    this property. Put the property type to "ENUM", through which the
    tab ***ENUM elements*** is*** ***activated.  
    ![](//images.ctfassets.net/utx1h0gfm1om/6IEChYhmk8IesKkoMiEMoY/18d2c40c0d38492bf2e1d4076e498718/328718.png)
2.  Create in designer for "ENUM", in the tab ENUM items, the
    corresponding parameters which should match the names of each
    "activity" shape to be dragged. Create for example the following
    parameters (e.g. "Activity", "Decision", "Event"):  
      
    ![](//images.ctfassets.net/utx1h0gfm1om/2CiXy9827W4cU8OUGwgEKA/f4d7c50efbb27a022cb9159616d3c61d/328720.png)
3.  If you drag now the shape "Decision"  from the stencil onto the
    diagram in Modeler, it will automatically belong to the class
    "Activity", as well as the shapes (=*activity types*) "Activity" and
    "Event", whereby when changing the property "Activity type" in an
    object of the class "Activity" the shape changes optically between
    these 3 shapes. 

-   The shape "Decision" is dragged on the diagram and in the properties
    window of the object the value "Decision" stands under the property
    "Activity type".  
      
    ![](//images.ctfassets.net/utx1h0gfm1om/3I6DUHJy4UWMuaY2OuqSe0/a0c4bbde449867fee676c3e6d6f38b53/328722.png)
-   The property value "Decision" is changed for the property "Activity
    type" to "Event", whereby the shape is accordingly adjusted to a
    rectangle on the diagram, without being dragged from the stencil.
    Nevertheless, the class remains as "Activity" and the name of the
    object also remains the same.  
    ![](//images.ctfassets.net/utx1h0gfm1om/3LMIuHJVm0WUEE264gqWIE/a8b11de05ce9176a98e1bf7bbc1199f2/328708.png)

 

### Definition

Shape-specific [properties](property-group-and-property) are properties that
permit the attribution of [objects](object) based
on [shape](shapes-stencils-and-templates).


![](//images.ctfassets.net/utx1h0gfm1om/2kuvIzJG6gGGs2UsgmqQGG/07fb863fefecfb42e0aa853d6a35cab6/329216.png)  


*Display the shape data*

These properties can be controlled in [Database
Designer](database-designer), via the property "Shape-specific" in
the [properties window](properties-dialog-box). Shape-specific property
can **only** be set for properties of property groups of a class (e.g.
for a new property of *Definition* property group of *Activity* class)
and **not** properties of a class.

![](//images.ctfassets.net/utx1h0gfm1om/22QGUJAzoAyQQAMqEIwcOc/c959a16795b84811c78d9f48f5272d2e/329218.png)

For shape-specific properties, all features of normal properties (e.g.
mandatory; see [Creating a new Property](creating-a-new-property)), and
separate [system properties](system-properties) (Shape: Geometry and
Shape: diagram) are available.

In order to be able to trace
the [shape](shapes-stencils-and-templates) belonging to a shape-specific
property, i.e. to know the number of a shape on a [diagram](diagram) (as
it appears in the [properties window](properties-dialog-box)), the
function "shape data" can be used in the context menu of a shape.

Attention:

A property that is already associated with a master shape, cannot be
shape-specific in any way. Therefore this option is hidden, as soon as
"Shape-specific" is set to "true".

#### Example-Application

A particular activity is subject to a certain risk, depending on where
and when it is carried out.

As this is always the same activity (= the same [object](object) of
the [class](class) "Activity"), but the risk varies, this is a classic
case of a shape-specific property.

The following procedure is necessary:

1.  [Create a new Property](creating-a-new-property) in
    the [class](class) "activity" for the desired [Unit](unit)  
    (e.g. "Risk" with the Enum items "Low, Medium, High")
2.  Set the property "risk" you have just created to
    "Shape-specific=True"

**Result:** You now have the option to equip the created property "risk"
you just created with the desired value in the section "Shape-specific"
in the [properties window](properties-dialog-box) for objects of the
Class "Activity". This value can vary according to shape, i.e. for each
occurrence of an object of that class on a diagram, and thus the varying
risk of this activity can be recorded accurately.

See also: [Displaying Properties as Visio Data
Graphics](displaying-properties-as-visio-data-graphics)



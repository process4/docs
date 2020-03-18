-   [Definition](#definition)
    -   [Heredity](#heredity)
-   [Creating an object](#creating-an-object)
-   [Place an object on a diagram](#place-an-object-on-a-diagram)
    -   [New Object](#new-object)
    -   [Existing Item](#existing-item)
        -   [Shape-specific data](#shape-specific-data)
-   [Copy & move objects](#copy--move-objects)
-   [Object links](#object-links)


### Definition

Objects are correspondences of real and/or abstract (business) objects
(e.g. location, role, site, server, process, function, etc.). They are
organised in the [repository](repository) in [classes](class) and are
represented as green cubes.

Objects are data descriptions
(by [properties](property-group-and-property) and their characteristics), to
which [Shapes](shapes-stencils-and-templates) (i.e. graphical
representatives) are assigned in the modeling. An object can be used on
multiple diagrams (or frequently also on a diagram) over and over again.
This means that all the shapes of an object of a class have always the
same properties, resulting in freedom from redundancies.

#### Heredity

The term heredity does not entail object orientation in relation to
objects (that would mean that a new object has all the characteristics
and abilities of the superordinate base object); rather it means that
this object is also available in other units apart from the originating
unit.

Changes to inherited objects thus have a direct effect on the concrete
object (at its creation location).

In principle, all objects and diagrams are passed up and down along the
branched hierarchy tree. The display of inherited objects (and the
access to it) is, however, related to [user
rights](permissions) and [filter settings](search-and-filters).

### Creating an object

1.  Mark the desired [class](class) in which you want to create a new
    object.

2.  Open the context menu (right-click) of the class or of the object
    window, and select the  function "New".

   <div class="success">
  <h2>Alternative:</h2>

  Click on the menu bar in the [repository](repository) on the button
  "New".
    </div> 

3.  The [properties window](properties-dialog-box) appears.
4.  Enter a name, and the desired property values for the object.

### Place an object on a diagram

#### New Object

1.  Select the desired [shape](shapes-stencils-and-templates) from
    the [template](shapes-stencils-and-templates) which corresponds to
    a [class](class) in the database.
2.  Drag this shape on the page.
3.  Select "Create a new object" in the Object Selection window.
4.  A new object of this class is created, the [properties
    window](properties-dialog-box) appears.
5.  Enter a name, and the desired property values for the object.

<div class="info">
Note:

You can also set up shapes in your stencil which do not correspond to
any particular class and then place the shapes on the page. In this
case, it is then a purely graphical representation (e.g. for
supplementing) on the specific diagram *without any reference in the
database.*
  </div>
  

#### Existing Item

1.  Select the desired [class](class) in [Little
    repository](graphical-visio-modeler).
2.  Select the desired object in this class.
3.  Drag the object to the page, holding the left mouse button.
4.  A shape of the selected object is created on the page and takes over
    automatically its graphic features and
    all [properties](property-group-property) of the object.

##### Shape-specific data

When (same) shape instances of an object that occur several times in a
model should have properties applying only to a specific place on
exactly one diagram, shape-specific properties can be used. The values
of these shape-specific properties are assigned and stored exclusively
by Shape.

See: [Shape-Specific Properties](shape-specific-properties)

### Copy & move objects

See: [Cut, Copy, Paste & Special](cut-copy-paste-and-special)

### Object links

See: [Links](links)

*![](//images.ctfassets.net/utx1h0gfm1om/1hi5jy4a0cEIsO4Y6sW0UG/b24121e9455538d30602535b207c3ba3/329254.png)*

*Creating a new object*

  


![](//images.ctfassets.net/utx1h0gfm1om/1DVGKgYOeIOcIcgcmUiCII/56342fe47e1a2b06bb10e671e6832c09/329258.png)

*Place a new object on a diagram*
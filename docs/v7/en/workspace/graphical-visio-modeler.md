-   [Navigation in Graphical Visio Modeler](#navigation-in-graphical-visio-modeler)
    -   [Smart tags](#smart-tags)
-   [Little Repository](#little-repository)
    -   [Functions of little repository](#functions-of-little-repository)
-   [Properties Explorer](#properties-explorer)
    -   [Edit properties](#edit-properties)
-   [Diagram Info](#diagram-info)
-   [Context Menu Items](#context-menu-items)
    -   [Cut, Copy & Paste](#cut-copy-paste)
    -   [Delete](#delete)
        -   [Ghost Shapes](#ghost-shapes)
    -   [Replace objects](#replace-objects)
-   [Visio function Undo/Redo](#visio-function-undoredo)

 

Through the Graphical Visio Modeler you can model diagrams with the
known functions and user interface of Microsoft Visio. Here you are
directly connected to the database.

By default, the Graphical Visio Modeler is comprised of a repository
window ("Little Repository"), an open template (= Stencil) and the
shapes contained therein, with which you can work on this diagram.
Stencils and their shapes are freely definable and determine your
specific modelling method = the notation with which you build a model.
See: [Shapes, Stencils & Templates](shapes-stencils-and-templates)

### Navigation in Graphical Visio Modeler

The Graphical Visio Modeler contains one or more
open [diagrams](diagram) for the editing which can be simultaneously
open. Similarly to other Microsoft Office applications, you can select
this window via the "Window" menu.

The symbols "Next Diagram" or "Previous Diagram" enable you to navigate
through the diagrams and switch between open ones. 

![](//images.ctfassets.net/utx1h0gfm1om/508DLDE3zGWKeUImSCm0au/843d4065a7b1cb2a5a63b4e4c18b41c4/329610.png)

The context menu of the opened diagram supports you in the orientation
and navigation within the model  structure. Right-clicking on an empty
area of the drawing sheet displays the hierarchy in the predecessor
diagrams (Parents) or the successor diagrams (Children). Selecting a
diagram from the list opens the diagram in Graphical Visio Modeler and
this can then be edited as an active drawing sheet.


![](//images.ctfassets.net/utx1h0gfm1om/4y00oBpez64MCSoSagk0c/9640389df10b0f937062b4cf107098c0/329605.png)

*View of an open chart in the Graphical Visio Modeler*

#### Smart tags

Smart tags are displayed on the [diagrams](diagram) of
the [objects](object) and result from [links between objects and
diagrams](linking-objects-with-diagrams) or
[Files](linking-objects-with-files), or have been created by adding a
link to an object. They are also used to navigate between diagrams in
the Graphical Visio Modeler: clicking on the (or one of the) elements
stored in a smart tag opens the corresponding item.

The relationship between the individual diagrams in the hierarchical
tree structure (see [Repository](repository)) is displayed in the Smart
Tags by small arrows.

-   An arrow pointing upwards marks a hierarchically superordinate
    diagram (parent diagram).
-   A horizontal line marks equal hierarchical level or a lack of a
    hierarchical relationship.
-   An arrow pointing downwards marks a hierarchically subordinate chart
    (Child-diagram).



### Little Repository

You can use the small Repository window at the bottom left for the
search for existing [objects](object) that have already been created in
the database. These existing objects can then be brought onto the
drawing sheet through drag & drop from the Little repository and thus be
used repeatedly. This functionality displays the basis of the
redundancy-free modelling enabled through
[process4.biz](http://process4.biz).

By reusing existing objects you can not only model more quickly, because
you save the repeated occurrence of the same object, but also changes
made to the properties of an object are passed to [diagrams](diagram) in
which the modified object is used. You can follow in the Unit column in
which unit was created the object originally.


![](//images.ctfassets.net/utx1h0gfm1om/2iby8CJ1OsGOOMKaGIggU2/c5cf9a01144b8a6509f91ec08ab16c20/329534.png)

#### Functions of little repository

-   Click the button  ![](//images.ctfassets.net/utx1h0gfm1om/5Z88aqxkSkIQcQK6UkYS2M/47fe6e5bbe67a5f7fd825edcb1a475e3/329584.png) to update the
    information displayed in Little repository.
-   The Filter button (![](//images.ctfassets.net/utx1h0gfm1om/1lLWuoCUYYGeYIgOuyEaqO/7633f9b5ff0a0aa201cf42572f460fea/329406.png)) facilitates
    the search for objects either through the restriction to a class
    from a class list or a selected unit or by text-searching part of
    the name of an object across all classes.
-   By activating the heredity filter
    (![](//images.ctfassets.net/utx1h0gfm1om/2zlwHbCBu0KKqS8OGKqMOm/95e1ff292a6b20a02e839884db06ba5e/329412.png)) all inherited objects in the
    small Repository that do not have their origin in the same unit of
    the currently open diagram can be hidden. Also, it is possible to
    hide objects from parallel unit, but when this filter is disabled
    the hide objects from parent units and hide objects from child units
    will be disabled too.  Moreover, you can also hide classes without
    objects, as well as those classes to which no master shapes in the
    stencils have been assigned. Hidden objects can be displayed through
    the option "Show hidden items" in Little repository. 
-   Through the buttons ![](//images.ctfassets.net/utx1h0gfm1om/1OicrhcrEo82s0WC6qYiYi/20ed4f823ae061d5db1d65109f4bfd7d/329418.png), you can open
    the hierarchy tree in Little repository (in order to see all
    objects) and close it (so that only the classes are visible).
-   Clicking on the column header name, sorts objects in ascending or
    descending order within each class
-   By default, the column name and unit are displayed in the small
    Repository. You can also show all other property columns for objects
    in the small Repository. Right-click on the column and select Show
    Column. You can hide displayed columns again as well.
-   Using the option "Show: All Classes" you can display only a selected
    category in the repository. When a class is selected, you can show
    class-specific column properties by right-clicking on the column (as
    described in the previous point) and selecting Show Column from the
    menu. 
-   With the option "Show only used objects", the object display in
    Little repository can be regulated so that only those objects that
    are used in the currently open diagram are shown.
-   You can select all object-related functions in the Little repository
    via the context menu for objects.
-   On the bottom right you can see the number of objects in the folded
    class(es).


 ### Properties Explorer

Through the properties Explorer window, the properties of the diagram,
or the objects used in this diagram can be viewed and edited directly.

If your mouse is on the diagram, a window opens after activating this
button, in which the diagram properties can be edited. Clicking on the
"Info" tab, shows names, [units](unit) and [classes](class) of all
objects used on the diagram. Clicking on an object in the "Info" tab,
opens its properties, clicking on the column headers Name, Unit or
Class, sorts all elements according to the corresponding criterion in
alphabetical order.

If instead of the diagram a specific object is selected on the chart,
all its properties are displayed in the Properties Explorer window and
can be edited there also. The "Info" tab shows in this case the objects
linked with the selected objects and the use of the object on other
diagrams. Clicking on these entries opens the corresponding [properties
window](properties-dialog-box) or diagram.

![](//images.ctfassets.net/utx1h0gfm1om/6RSEbeir6gYcsO4iSaSY8y/3e19b53a7862bd5fd46e66a0ed194048/329562.png)

*The properties Explorer in Graphical Visio Modeler*

#### Edit properties

If an entry or a change in properties explorer has to be confirmed and
stored in the properties, confirm the changes by pressing the Enter key.
To discard applied changes, press Escape. You can edit changes in the
properties explorer window through the Undo and Redo buttons (Visio).

### Diagram Info

The diagram information window tracks to which other diagrams the
opened [diagram](diagram) has hierarchical relationships. That is, you
can see their parent and child diagrams in tree view and switch between
these diagrams by double-clicking. The diagram info window displays all
diagrams from the Unit of the open diagram and that is the difference to
the "Open Diagram" button - this function shows the entire diagram
hierarchy of your model in a tree structure and therefore may be
somewhat less clear.

### Context Menu Items

By right-clicking on an object on a diagram, you access the context
menu, where the basic functionalities of Visio and
the process4.biz functions are available. In this way new diagrams
linked directly to an object can be created or [Object
Properties](properties-dialog-box) can be displayed.

![](//images.ctfassets.net/utx1h0gfm1om/164ERhEIY6qEQU2KmiiOsg/5b7627c5c9503d9368d6d4c5066069eb/329568.png)

*The diagram information window*

 
#### Cut, Copy & Paste

You can cut, copy and paste [objects](object) of a [diagram](diagram) or
multiple diagrams within a database and between different databases via
the cache.

-   Graphic copy <span class="underline">of the same object</span>  
    If you want to display the same object repeatedly on a diagram, use
    the &lt;Ctrl + Drag & Drop&gt;. This creates a new graphical
    representation of an existing object in the diagram.
-   Graphic copy <span class="underline">with a new object</span>  
    If you want to create a new object with the very same shape (=
    object of the same class) on a diagram, use &lt;Ctrl + C&gt; to copy
    and press &lt;Ctrl + V&gt; to paste, or the corresponding context
    menu items.

See also: When a shape is pasted to a diagram (Database settings)

#### Delete

Through the Delete function in the context menu, a dialog box for the
selected object opens whereby you can decide whether the object should
be removed only from the diagram or be deleted from the database too.
This dialogue also appears when you use the Delete key. If the object
has references with other objects or diagrams, another dialog box
appears providing information on the existing links.

See also: When a shape is deleted from a diagram (Database settings)

##### Ghost Shapes

When a [shape](shapes-stencils-and-templates) on a diagram exists no longer
in the database (e.g. because it was deleted), it is a ghost shape with
missing object reference. Therefore it is marked with a red exclamation
mark, offering the possibility to repair this ghost shape. You can
either delete the selected ghost shape in the dialog box (or even also
all such shapes), or remove only the exclamation tag and leave the shape
on the diagram. Alternatively, you can also select a suitable object
from the repository to be newly connected to the ghost shape on the
diagram.

#### Replace objects

It is possible to replace an [object](object) (and optionally also all
its instances) on a [diagram](diagram) with another object. This feature
is accessed via the entry "Select a process4.biz object ..." from the
context menu for objects:

In the opened window an object can be selected with which the existing
object is to be replaced.

Optionally, all instances of the selected object on the opened diagram
can be replaced in a single step.

### Visio function Undo/Redo

Similar to Visio, you can use the functions Undo and Redo
in process4.biz diagrams. The Undo function deletes objects from the
database, the Redo function restores them. It is no longer possible to
undo changes after saving the diagram or updating the database (e.g.
with the Update button in Little repository).

![](//images.ctfassets.net/utx1h0gfm1om/5UK2hXZstyWweMwwoa46EM/608fef8c6997337c5a6b54b5e29b61d0/329496.png)

![](//images.ctfassets.net/utx1h0gfm1om/3nEVbeU5IccQA8W2sCM46G/b6d5b8845027ae06490c8a9ecb2a32ec/329576.png)
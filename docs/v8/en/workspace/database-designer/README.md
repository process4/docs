-   [Designer components](#designer-components)
    -   [Navigation window](#navigation-window)
    -   [Display window](#display-window)
-   [Designer functions](#designer-functions)
    -   [Creating/editing a design
        element](#creatingediting-a-design-element)
    -   [Cut, Copy & Paste](#cut-copy-paste)
    -   [Edit with F2](#edit-with-f2)
    -   [Design elements lock &
        unlock ](#design-elements-lock--unlock)
    -   [Delete Design Elements](#delete-design-elements)

 

The Database Designer sets [Units](unit), [classes](class), [properties
and property groups](property-group-and-property) and manages all [link
technologies and types](links) and [validation
scripts](validation-scripts) and [tags](tags). This means that the
Database Designer provides and manages in this way the database
structure for the [repository](repository).

### Designer components

#### Navigation window

The navigation structure in the Designer window is similar to the
navigation in the [repository](repository). The left navigation window
shows the unit hierarchy tree. If a unit is selected there, the
corresponding [property groups](property-group-and-property) appear listed
in the right window. When clicking in the left window on a class, there
are two ways to show the contents of the [class](class), which can be
set with the filter option "List the contents":

-   Auto: In the right window, the properties of the selected class
    groups are displayed.

-   Properties: In the right window appear always all the properties,
    when you click on data, classes, property groups. This feature
    therefore enables you to look at all the properties of the entire
    database without dividing them into classes or property groups. This
    helps you e.g. to determine if there are duplicates.

At the top of the navigation window, all units and some other design
elements are listed that are relevant for all units:

-   System classes  
    These classes are shown in orange and are valid for the entire
    database. If you edit such a class (e.g. add
    a [property](property-group-and-property)), changes apply to
    all [objects](object) of the database. If, for example, [property
    groups](property-group-and-property) or properties of
    the [class](class) "diagram" are created in the upper unit, then
    they are automatically visible in all diagram classes of all units.
    The inheritance functionality for the structures of the design
    elements is kept similarly to the inheritance of objects in
    the [repository](repository) maintained.
-   Tag classes  
    Under the item tag classes, you can extend the system class tag to
    property groups or  properties or create new tag classes.
    See: [Tags](tags)
-   Color Settings  
    Here you can create new rules governing the display colors of
    attributes in the repository; see: [Coloring data
    fields](coloring-data-fields)
-   Linking rules  
    Here a table shows which link types are used for the links of which
    classes and which link technology is activated. You can also create
    a new link between two classes here.
-   Query classes  
    Here you can create classes for the [Query Builder](querybuilder),
    rename or delete them.

At the bottom of the navigation window, you will see the following
elements grouped per Unit:

-   Data-branch  
    All objects of a unit are assigned to the data-branch of this Unit.
    They each contain property groups and each property group contains
    the corresponding properties. User-created classes, property groups
    and properties are displayed in blue.
-   Diagram-branch  
    Here diagram classes are listed with their property groups and
    properties.
-   System classes  
    System classes are created by the system and can be processed
    limitedly. The two system classes Diagram General and General object
    are available in each unit and can be changed only for the unit. In
    the General object class you can e.g. create a property group or
    property which will be visible as a system entry in all other
    classes of this unit (and its Child Units). Such property groups and
    properties can also be created for the class General Diagram.

-   Validation Scripts  
    Under the item validation scripts freely definable rules for the
    validation of diagrams can be created. These scripts can, depending
    on the method used in each unit, be unit-specific.
-   Link types  
    The available link types can be defined and managed here. These
    apply to the entire database (not unit specific) and describe the
    relationships between objects of two classes. Therefore, specifying
    a link type is mandatory when choosing the link technology.
    See: [links](links)

#### Display window

The display window in Designer is maintained similarly to the object
window in the Repository. For a more detailed description
see: [Repository object window](repository).



![](//images.ctfassets.net/utx1h0gfm1om/246yaO79g4yC0iEgEGyoAq/494bc453d59268e76a3c16f622ab0004/329533.png)

*The Database Designer*

![](//images.ctfassets.net/utx1h0gfm1om/4bY9Zf0j4I0Aqw4E8maIcS/3476f964ba317d2b830dfcdb83069202/329539.png)

*List of [link rules](link-rules)*

### Designer functions

#### Creating/editing a design element

Design elements can be created and/or edited either on the toolbar or
from the context menu. To edit the properties use the button Properties
and to create a new design element the button New in the toolbar or the
context menu.

See also: [Class](class) and [Property Group &
Property](property-group-and-property)

#### Cut, Copy & Paste

Just as repository objects, design elements (classes, property groups
and properties) can be cut, copied and pasted within units, between
units and even between databases. The special functions Copy To, Move
To, Copy Special and Paste Special, can be used as in the repository. If
you want to move a class to another unit, objects of this class will
also be automatically moved. It is also possible to cut Units or to copy
and then paste them to any place of the unit hierarchy structure (only
the top unit cannot be replaced or moved). All objects and diagrams are
copied or moved too.

For further details on this topic, see: [Cut, Copy, Paste &
Special](cut-copy-paste-and-special)

#### Edit with F2

You can edit the names of classes and property groups in the tree in the
designer using the F2 key, or by clicking 2 times again (not double).
Prerequisite for this is that the Units were previously locked or the
option "Allow edit without locking (the designer)" is enabled
(see: [Database settings](database-settings)) and that you have Edit and
design rights for each Unit. The following names can be edited:

-   [Units](unit)
-   all [classes](class)
-   [Property Groups](property-group-and-property)

#### Design elements lock & unlock 

See: [Locking/Unlocking the Design
Elements](locking-unlocking-the-database-structure)

#### Delete Design Elements

If you want to delete an existing design element in the designer,
proceed as follows:

1.  Use the left mouse button to select the object in the right window
    table (optional: select multiple consecutive objects holding the
    Shift key or select individual objects with the Ctrl key).
2.  Click the Delete function, either in the context menu or on the
    toolbar.

Please note:

-   You can only delete those design elements for which this function is
    made available by the system.
-   In the case of design elements that were already in use in diagrams
    and therefore have entries in the repository, a warning message
    listing these objects appears. You can confirm or reject the
    deletion (including the removal of all object references).
-   In the case of design elements that are already in use and which
    also have links between objects of different design elements, a
    warning message appears before deletion so you can reverse it..

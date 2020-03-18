-   [Repository Components](#repository-components)
    -   [Navigation window](#navigation-window)
    -   [Object Window](#object-window)
        -   [View Settings](#view-settings)
        -   [Manage columns in the object
            window](#manage-columns-in-the-object-window)
    -   [Object Explorer](#object-explorer)
    -   [Property Sheet](#property-sheet)
-   [Repository Functions](#repository-functions)
    -   [Create/edit an object](#createedit-an-object)
        -   [Multiple selection](#multiple-selection)
    -   [Cut, Copy & Paste](#cut-copy--paste)
    -   [Edit with F2](#edit-with-f2)
    -   [Database Update](#database-update)
    -   [Deleting an object in the
        repository](#deleting-an-object-in-the-repository)
    -   [Show object use in
        diagrams](#show-object-use-in-diagrams)

The repository is an SQL Server-based and highly customisable users
database, in which all [objects](objects), their data content, and the diagrams are
stored. The repository is a central basis component of process4.biz,
without which the software cannot be run.

In the repository, all objects are placed in a hierarchical structure.
This hierarchical (tree) structure allows both a view of the data and
diagrams of a unit , as well as on the existing data and diagrams that
are inherited from structurally higher or lower units. The data are
grouped in classes, which provides a tabular view of assigned objects.
Some classes are system classes with system property groups (e.g.:
definition, description, help, administration, etc.) and therefore are
automatically included in all hierarchical structures. The severity of
existing system classes depends on the method that you want to use
(RACI, BPMN, EPC, Catalyst or EAM or if you are also using reference
models, as COBIT5, Dynamics AX/NAV, etc. or a proprietary method).

The visibility of objects and diagrams in the repository, can be
controlled by [Search, Filters and Unit Filters](search-and-filters). The context menu for editing data objects or diagrams can be accessed anytime by right clicking on the respective item.

### Repository Components

#### Navigation window

The navigation window contains the hierarchical tree structure and is
used for navigation within the (company) structure, which you build or
track with units and classes and their properties and diagrams.

If you select a class of a Unit, the window to the right lists
the objects of this class and their properties in tabular form. The
number of objects in a class of the selected unit is already
pre-displayed in the navigation window - activity \[53\] therefore means
that there are 53 properties in the class activity in the selected unit.

The number of diagrams in the selected Unit is displayed in a bracket
behind the class diagram in the navigation window. If you select the
class diagram in the navigation window, you can track in which order
diagrams follow each other (top diagram, parent diagram, child diagram).
In the diagram hierarchy tree are listed all the diagrams of the highest
hierarchy level. Their respective branches can open like folders in
Windows Explorer.

The diagram hierarchy is created, when you associate one parent diagram
object with one or more subordinated diagrams; see: Linking Objects with
Diagrams. If a diagram has several parent diagrams (i.e. there is a link
to this diagram from objects of several diagrams), the following
diagram is displayed in the tree under any parent diagrams.

![](//images.ctfassets.net/utx1h0gfm1om/6Ch6oqwrLiSYmuUUmy88iK/8c14c86a1a2d0e9e12a53c98164a1d9b/329642.png)

*The navigation pane in the repository*

#### Object Window

All objects of a selected class in the left navigation window appear in
the right object window in tabular form along with their properties.
They can be opened for editing by double-clicking or from the context
menu (right click-&gt; Properties). Data objects are represented by a
green cube symbol , diagrams with a read diagram symbol .

-   If these symbols have an additional small red triangle in the top
    left, they are inherited objects from a higher hierarchical level.
    If the red triangle is in the bottom right, then the corresponding
    element is in a subordinate hierarchy level.
-   If one of the symbols is marked with a blue bar, it means that the
    object in question is linked to a file.
-   If one of the symbols is marked with an orange bar, it means that
    the object in question is synchronised with SharePoint.
-   If one of the symbols is supplemented with a small green lock, it is
    currently being edited by the current user.
-   If one of the symbols is supplemented with a small yellow lock, this
    object or diagram was just created or edited and the changes have
    not yet been stored in the database.
-   The symbol color is grey, if access is not given to the Unit.
-   The symbol is grey and has a small lock when an object is being
    edited by another user, so that the current user can not edit those
    objects at the moment. An administrator can unlock such diagrams or
    objects, when s/he right-clicks on it and unlocks the function under
    the context menu item. The diagram or object is then unlocked and
    made available to all users again.
-   Association Classes (see link types) appear in purple, association
    objects are colored in lila.
-   In addition, labels made of the approval management can be displayed
    as symbols of objects and/or diagrams on the bottom left.

##### View Settings

-   Large Icons: to enlarge the icons, no properties are displayed.
-   List: displays only the object names in list form.
-   Details: shows all attributes of the objects.

##### Manage columns in the object window

You can move the columns of the object window with the mouse via drag
and drop. Process4.biz remembers the order of the columns, and the
individual showing or hiding of existing columns. Each column in the
table can be modified in the Database Designer; there you can create
also new columns (=properties).

Move the cursor between the property columns to change the column width
and tighten the limit mark in the desired direction. Right-click on the
name of each column, so that you can manage, hide or show the columns.

-   Hide the column X: You can hide the selected column (all columns
    except the column "Name"). It is hidden, not deleted, and can be
    restored any time.
-   Show hidden column: With this menu item you have the chance to show
    single or via "Show all columns" all previously hidden columns
    again.
-   Column selection Manager: You can move all columns (properties),
    that you want to hide, to the column selection manager.
-   Fix the layout: Select one of the options described below in this
    context menu item by right-clicking on a column in the object window
    before making changes to the column. This changes the view settings
    depending on the selected option to apply to all classes of this
    unit, to a certain class in all units or to the selected class in
    the selected Unit.
-   Fix the current layout for all classes in Unit X: You can only
    select this option, if a Unit or Data is selected in the left tree
    structure. The column changes are saved for all classes of the
    selected unit.
-   Fix the current layout for class A in all units: Activate this
    option, when the column changes for a specific class on all units
    within the inheritance hierarchy.
-   Fix the current layout for class A in Unit XY: Activate this option,
    if you want to display column changes for a specific class only in
    the selected unit.
-   Save the layout: Once you have made all the column changes, you can
    save the layout as "\* .xml" file.
-   Loading a Layout: The saved layout can then be loaded for another
    database, unit or class through this command. All data stored in the
    layout settings will be applied here.
-   Reset the layout: This option restores all the columns to the
    default status, if for example the order of the columns was changed
    using drag & drop or individual columns have been hidden.

 
#### Object Explorer

In Object Explorer, you can follow different links, after selecting an
object or diagram: dependencies, file links and object links.

1.  Show dependencies of an object  
    You can keep track which objects are linked with which other objects
    through which [link type](link-types). This option is only available
    for objects. In Object Explorer, you can see all of the objects
    linked with the selected object, sorted by the assigned link-type.
    The greyed symbols for linked objects show in the Object Explorer
    that the link was created automatically and cannot be deleted. For
    manually linked objects green symbols are used.
2.  Show File links  
    In this tab you can keep track which objects or diagrams are linked
    to which files or with which objects or diagrams the files uploaded
    in the database are linked. (See: [Upload & Link
    Files](linking-objects-with-files)).
3.  Object links  
    When you select an object in the repository, it displays with which
    diagrams it is linked. Clicking the "+" sign next to the diagram,
    will show you which objects are used on this diagram and which
    diagrams are linked with these objects.   
    If you select a diagram, it shows which objects are used on this
    diagram and to what other diagrams these objects are linked.
    
![](//images.ctfassets.net/utx1h0gfm1om/10poJJtZnoa4cyiyqA8SMA/d704204ba42f2b107a345aa1aacef540/329649.png)

*The Object Explorer in the repository*

![](//images.ctfassets.net/utx1h0gfm1om/4hGegHyhP2WCqQAm8wIYQc/2e5e73a4bc21622e4d9a541fba8eb02e/329662.png)

*The Attribute Information Sheet*

#### Property Sheet

You can edit the properties of objects and diagrams with the help of the
property sheet: edit work here functions exactly as in a
normal [properties window](properties-dialog-box).

### Repository Functions

#### Create/edit an object

Objects and diagrams can be created and/or edited either on the toolbar
or from the context menu. Use the button Properties to edit or the
button New to create a new design element in the toolbar or the context
menu.

See also:   [Creating a new object in the repository](object)

##### Multiple selection

If multiple [objects](object) are selected in the repository, for all
these objects existing [properties](property-group-and-property) can be
edited via the [Properties window](properties-dialog-box).

For different (=for all selected objects) property values, the place
holder "&lt;Multiple Selection&gt;" appears instead of the property
value. Now, if a certain value is set, this will apply to all selected
objects.

<div class="info">
Working with the multiple selection is possible only via the properties
window in the repository. The properties explorer as well as the
property sheet can display the attributes of multiple selected objects,
but do not allow processing.
  </div>

![](//images.ctfassets.net/utx1h0gfm1om/7o9nnAFTdmm0a4Ukcy0wC4/c764515b5e9e8960817342f26a8b635a/329615.png)

#### Cut, Copy & Paste

See: [Cut, Copy, Paste & Special](cut-copy-paste-and-special)

#### Edit with F2

You can edit the names of objects in the tree in the repository using
the F2 key, or clicking twice (not double). Prerequisites for this are
that the Units were previously locked or the option "Allow edit without
locking (the designer)" is enabled (see: [Database
settings](database-settings)) and that you have Edit and design rights
for each Unit. The following names can be edited:

-   [Units](unit)
-   [Classes](class)
-   [Diagrams](diagram)

#### Database Update

If multiple users are simultaneously in the model database, we recommend
updating the database contents on a regular basis:

The upgrade process in the repository functions as follows:

-   When you select a class in the repository and click Update, <span
    class="underline">only objects of that class</span> are updated.
-   If you select a diagram and click Update, <span
    class="underline">all diagrams of this Unit</span> are updated.
-   If you select a unit and click Update, <span class="underline">all
    objects and diagrams of this Unit</span> will be updated.
-   If you select Top Unit and click Update, <span class="underline">all
    objects and diagrams</span> are updated <span class="underline">in
    the repository.</span>

#### Deleting an object in the repository

If you want to delete an object in the repository, proceed as follows:

1.  Mark the object with the left mouse button.
2.  Select the Delete icon on the toolbar, or open the context menu with
    the right mouse button and select the function Delete.

When the object to be deleted is already used on a diagram or has object
links, a corresponding warning message appears. If you confirm the
deletion, all references in this window or links to the object are
automatically removed. The deleted object remains in the diagrams at the
moment known as Ghost Shape (marked with a red exclamation "!").

#### Show object use in diagrams

With this function from the context menu, you can check in
which [diagrams](diagram) the selected [object](object) is used. In each
case, it automatically opens the first diagram-page sheet with a click
on the listed diagram(s), on which the object is used.
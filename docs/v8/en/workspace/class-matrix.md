-   [Settings](#settings)
-   [Functions](#functions)
    -   [Edit the link rules](#edit-the-link-rules)
    -   [Removing link technologies and types](#removing-link-technologies-and-types)
    -   [Edit Class X](#edit-class-x)
    -   [Copy the cell data paste the copied cell data](#copy-the-cell-data-paste-the-copied-cell-data)
    -   [Assign link technologies](#assign-link-technologies)
    -   [Clear links](#clear-links)
-   [Export to Excel](#export-to-excel)

 
You can use [link technologies and types](links) defined in
the [designer](database-designer) and assigned to the
individual [classes](class) with the classes-matrix in the form of a
table for the entire model. If you want to edit the entries too, for
example by assigning link types comfortably over the appropriate cell to
two classes, then [lock your
database](locking-unlocking-the-database-structure) in Designer. The
Matrix class can be opened via the corresponding menu item in the main
menu of process4.biz.


![](//images.ctfassets.net/utx1h0gfm1om/4ZRT8PZm4geaqAs6msCKO4/944128930e07af7c90be1e4c51a3163d/329599.png)
 

### Settings

In the left window you can select which link types and technologies
should be used in the class selection. As a result, all classes are
listed with a set link type and technology rule set.

Select then if conditions or messages should be displayed in the matrix.
Use the option "Show only classes with defined link", to select, whether
all classes (when deactivated), or classes with the selected link
technologies and types (when activated) should be displayed.

Select via a two-hierarchy tree window which classes of the selected
units should be displayed in the rows or columns of the table. Empty
rows or columns that have no assigned link technology and/or link
type, can be hidden by checking the box "Hide empty rows/columns".

<div class="tip">
If you want a table with all possible link types or link technologies to
be displayed, choose "any" in the field link types or link technologies.

In the table shown on the right, you can then check for which two
classes a link type and/or link technology have been set at the
intersection of this cell.
</div>

### Functions

Assuming that the database structure has been locked in the designer and
the user has the appropriate rights, the class Matrix not only allows
for comfortable viewing of the activated linking rules, but enables also
the user to process them together with the characteristics of the
respective classes. Right-click on the selected cell and select from the
popup menu the desired action.

#### Edit the link rules

With this option, you can assign to two or more selected classes
(readable through the row or column of the selected cell) a link
technology and a link type and edit and delete existing rules for [link
technologies and types](Links).

#### Removing link technologies and types

All rule sets for link technologies and types between the selected
classes are completely deleted.

#### Edit Class X

The [properties](property-group-and-property) of any class X located in the
selected row or column, are opened and can be edited.

#### Copy the cell data paste the copied cell data

It is possible to copy the contents of a cell with the defined link
technologies and types and add it to another cell (multiple selection
with Ctrl and Shift are possible). Copying/pasting the cell data also
works between two databases. The prerequisite for this is that the
copied link type exists in the target database already.

You can apply all these functions for several selected cells
simultaneously or for all classes of the selected row or column. Select
for example the row or column of a particular class in order to remove
via the context menu on the right-click button all assigned link types
with other classes.

#### Assign link technologies

Using the class matrix, you have the ability to assign link types and
link technologies to all classes in the database. This can be defined in
the top-left cell at the intersection of the column &lt;to any&gt; and
the row &lt;from any&gt;.   
The link types "linked with" and "linked to/linked from" are enabled by
default between all classes of the database and thus are available for
the linking of objects (manually or automatically). In addition, you can
set more link types and activate them via class matrix for the entire
database as well as delete existing rule sets by right-clicking on the
selected cell and selecting the desired option.

#### Clear links

Deleting all registered link types disables the linking between objects
of different classes, unless a special link type has been created for
this class.

### Export to Excel

Clicking on "Open the matrix in Excel", enables you to export the
selected view of the class matrix in Excel. This function is only
available in the Professional Edition and provided that the license for
the [Query Builder](querybuilder) has been activated.

-   [Settings](#settings)
    -   [Link Type](#link-type)
    -   [Show properties of the
        association](#show-properties-of-the-association)
    -   [Blank Rows / Hide Columns](#blank-rows--hide-columns)
    -   [Select Classes in the Unit Hierarchy
        Tree](#select-classes-in-the-unit-hierarchy-tree)
    -   [Name Filter](#name-filter)
-   [Features](#features)
    -   [Linking Selected Objects](#linking-selected-objects)
    -   [Select Association Objects for Selected Link(s)](#select-association-objects-for-selected-links)
    -   [Edit Association Objects for Selected Links](#edit-association-objects-for-selected-links)
    -   [Remove Selected Link](#remove-selected-link)
    -   [Edit Object X](#edit-object-x)
-   [Excel Export](#excel-export)


The link matrix can be accessed from the process4.biz menu band, shows
the [Object links](links) of [objects](object) of
all [classes](class) in tabular form and enables you to edit the objects
as well as edit their links.

### Settings

#### Link Type

Select one or more link types that are to be displayed in the table. If
you want to display properties with all the object links, click "Select
All".

#### Show properties of the association

Select this option if one or more attributes of the association object
are to be displayed for the link. By default, the matrix displays the
name of association objects that are used for the connection of the two
objects (e.g. R, A, C, I). If an association class is predefined, but no
association object has been allocated for the link, a question mark
appears next to the link icon.

Next to the name other attributes of the association class can be
displayed. You can display for example the description of the
association objects that are used:

1.  Select in the [Database Designer](database-designer), the class that
    serves as association class (e.g. R, A, C, I)
2.  Select a property of this class that has to be displayed in the
    link matrix (e.g. description)
3.  Set the value "Visible in Link Matrix" in the characteristics of the
    property to "True"
    
    
    
![](//images.ctfassets.net/utx1h0gfm1om/33jnoZhsGs4kuCiAuiOwYg/bf07fa7b10859f7dcf207add053b5472/329593.png)


**Fit cells in their size**

This feature allows you to change the size of the cells automatically so
that the text is displayed in full.

#### Blank Rows / Hide Columns

Select this check box so that empty rows or columns that do not contain
object links are hidden.

#### Select Classes in the Unit Hierarchy Tree

Depending on the selected [link type](link-types) a dynamically adjusted
hierarchy tree with the linked classes is generated for both the row and
column selection of the matrix. Select those classes whose object links
you want to display in the matrix. Only those classes and objects are
displayed that use the selected link type.

#### Name Filter

Use this option to filter objects in rows or columns of the link matrix
by name or name parts. In Table View, on the right window you will see
in the form of a matrix, the names of classes and their objects, and
their object links.

### Features

By right-clicking the following functions can be used in the
link matrix:

#### Linking Selected Objects

With a simple click on the selected empty cell, a manual link between
two objects can be created. It is also possible to select multiple cells
using multiple selection to define new links or to remove them.

If you want to link two objects in a class for which more than one type
of link are set, first select these two link types. If you right-click
then on the cell at the intersection between two objects, a window
appears where you can select with which type of link those items should
be linked.

#### Select Association Objects for Selected Link(s)

This option is only activated when there is a manual link between two
objects and at least one object has been created in the association
class, which can be used as a connecting element for this link type. By
clicking on this option, you can select one or more association objects
for the existing link.

#### Edit Association Objects for Selected Links

This option allows you to change the properties of association objects
in use.

#### Remove Selected Link

This function allows you to delete a manual link between two objects.

#### Edit Object X

Open the [Properties window](properties-dialog-box) of the object in
the selected row or column.

### Excel Export

You can export the configured view of the link matrix to Excel: Click on
"Open the matrix in Excel." This option is only available in the
Professional Edition and provided that the license for the [Query
Builder](querybuilder) has been activated.


<hr style="padding-top:2rem" />
<a href="https://github.com/process4/docs/issues" target="_blank" class="bgw btn btn-primary btn-lg shadow-sm">Report an issue</a>
<a href="https://github.com/process4/docs" target="_blank" class="bgw btn btn-primary btn-lg shadow-sm" style="margin-left:10px;">View source code</a>
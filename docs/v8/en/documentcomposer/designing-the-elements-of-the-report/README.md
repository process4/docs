
-   [Filter by Unit](#filter-by-unit)
-   [Class (optional)](#class-optional)
-   [Object (Selection for the option class)](#object-selection-for-the-option-class)
-   [Diagram (Optional)](#diagram-optional)
-   [Class (Selection for the option diagram)](#class-selection-for-the-option-diagram)
-   [Remove Prefixed Object Numbers](#remove-prefixed-object-numbers)
-   [Show the Class Name](#show-the-class-name)
-   [Use also Linked Objects that do not lie on any tree part of the diagram](#use-also-linked-objects-that-do-not-lie-on-any-tree-part-of-the-diagram)
-   [Use also indirect link types](#use-also-indirect-link-types)
-   [Remove empty data fields in the properties table](#remove-empty-data-fields-in-the-properties-table)
-   [Show the first field name in the query list](#show-the-first-field-name-in-the-query-list)
-   [Arrange as necessary](#arrange-as-necessary)
-   [Remove empty data fields in queries](#remove-empty-data-fields-in-queries)
-   [Select the properties to be used for the report (window part 1)](#select-the-properties-to-be-used-for-the-report-window-part-1)
-   [Selection of the chapter classes (window part 2)](#selection-of-the-chapter-classes-window-part-2)
-   [Selection of the link type for the direct link between the objects
    (window part 3)](#selection-of-the-link-type-for-the-direct-link-between-the-objects-window-part-3)
-   [View structure of the report and define specific sections for the
    chapter Report (window part 4)](#view-structure-of-the-report-and-define-specific-sections-for-the-chapter-report-window-part-4)
-   [Designing the contents of the selected part (window part 5)](#designing-the-contents-of-the-selected-part-window-part-5)
-   [Publish only selected Visio pages](#publish-only-selected-visio-pages)

The next step of the wizard helps you design the report.

![doc composer](//images.ctfassets.net/6mz8d8cle1nl/1uJA5cB7HDNEBYTFtBDkSD/dfc359232f4ad96323194aaca5c85d62/doc_composer.png)

### Filter by Unit

You can select those units whose the objects/diagrams are to be listed.

### Class (optional)

Select the category for the document structure.

### Object (Selection for the option class)

Select the object which should be the root node of the document
structure.

### Diagram (Optional)

Select the start diagram for the document structure.

### Class (Selection for the option diagram)

Select the class of the object to create the document structure.

### Remove Prefixed Object Numbers

Object numbers are removed from the objects, if objects have been
renumbered on the diagrams by the renumbering wizard. Therefore names
such as "1.1 any object name" are adjusted, by removing the number from
the object name.

### Show the Class Name

Class names are shown in square brackets before the object name (e.g.
\[Chapter\]). Note that this is does not affect the presence of the
objects on the report.

### Use also Linked Objects that do not lie on any tree part of the diagram

This option allows you to include such items in the report that are
linked by means of a direct link type with an object of the class
chapter and are not used on any diagram tree.

### Use also indirect link types

This option allows you to include such items in the report that are
linked with an object of the class Chapter by means of the indirect link
type.

### Remove empty data fields in the properties table

Empty results in the property lists are suppressed.

### Show the first field name in the query list

With the use of a query list, the field names are displayed.

### Arrange as necessary

This checkbox activates the semi-automatic arrangement of the structure.
Normally, the structure is automatically read out from the structure of
the objects from the diagrams. If you tick this checkbox, however, the
arrangement will not start until you click the button located at the
bottom.

### Remove empty data fields in queries

Empty results in the query lists are suppressed.

### Select the properties to be used for the report (window part 1)

In this selection you can see the properties of the selected chapter
classes. You can choose which additional properties (e.g. property group
Description and its properties such as "preceding text" and "following
text") can be used for the report.

### Selection of the chapter classes (window part 2)

Here you can choose which classes can be used for the chapter list (for
automatic structure on the left).

### Selection of the link type for the direct link between the objects (window part 3)

Here you can choose which link type is used for the automatic generation
of the structure.

### View structure of the report and define specific sections for the chapter Report (window part 4)

Here you can see the actual generated structure of the document and
select any chapter to define its contents separately.  
Different icons show whether a particular content has been defined for
these chapters:

![](//images.ctfassets.net/utx1h0gfm1om/6ayFY23wmQIcqqyouSC4ak/8d39d4dc21ebe48a54e58bc3ae6ec982/329626.png) - No specific content defined (only
text properties are published).

 ![](//images.ctfassets.net/utx1h0gfm1om/5koedrYdossgcymiCAAAam/fa8fe6456b3093420aadfbbe9d1ae62e/329619.png)- A diagram is linked to this chapter
and will be added to the Report.

![](//images.ctfassets.net/utx1h0gfm1om/6gyQklTGBaWIuq80sAmm2q/30242b40b6363608ad6368c20f2e868c/328670.png) - A query is added to this chapter
(see Window Part 5 for more info).

![](//images.ctfassets.net/utx1h0gfm1om/LxcVf6sQ2iymGSymWm4a2/7fe8aeec465f24558915df1cf6f34a16/328668.png) - A diagram and a query are added to
this chapter.

![](//images.ctfassets.net/utx1h0gfm1om/ZtRcWUbXyKCmms8Y4sSOK/3a0a0d77cb73da5f98f7214b358140ed/329612.png)- A file is attached to this chapter

![](//images.ctfassets.net/utx1h0gfm1om/6PjzGrquvC0mAoemOmeiGO/07d05b986611b1c4a700641455b100f0/329606.png) -  A diagram and a file are added to
this chapter.

### Designing the contents of the selected part (window part 5)

In general, a Document Composer report includes either object-based or
query-based content. See also the description in the following chapters.

### Publish only selected Visio pages

Here you can choose which Visio pages should be included in the report.


<hr style="padding-top:2rem" />
<a href="https://github.com/process4/docs/issues" target="_blank" class="bgw btn btn-primary btn-lg shadow-sm">Report an issue</a>
<a href="https://github.com/process4/docs" target="_blank" class="bgw btn btn-primary btn-lg shadow-sm" style="margin-left:10px;">View source code</a>
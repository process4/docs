
-   [Definition](#definition)
    -   [Condition](#condition)
    -   [Include in text search](#include-in-text-search)
    -   [Show in Tootlip](#show-in-tootlip)
    -   [Number of Lines](#number-of-lines)
-   [Approval Management](#approval-management)
-   [Description](#description)
    -   [Description](#description-1)
-   [Visio](#visio)
    -   [Shape-specific](#shape-specific)
    -   [Is a master shape](#is-a-master-shape)
    -   [Visio Shape's target cell](#visio-shapes-target-cell)
    -   [Visio values Balance Mode](#visio-values-balance-mode)
    -   [Synchronization](#synchronization)
    -   [Assigning p4b ENUM to Visio FixedList ](#assigning-p4b-enum-to-visio-fixedlist)
    -   [Allow FixedList update](#allow-fixedlist-update)
-   [Validation](#validation)
-   [Web publication](#web-publication)
    -   [Web View Publisher](#web-view-publisher)
    -   [Activate the "Property Search"](#activate-the-property-search)
-   [Administration](#administration)
    -   [Editable/Visible](#editablevisible)
    -   [Visible in link matrix](#visible-in-link-matrix)
    -   [Closed by default](#closed-by-default)
-   [Create System Properties Automatically](#create-system-properties-automatically)
    -   [Tags](#tags)
    -   [Disable for Web Publication](#disable-for-web-publication)
    -   [Publishing: E-mail Feedback](#publishing-e-mail-feedback)
    -   [Shape: geometry (x, y, w, h) and Shape: Diagram](#shape-geometry-x-y-w-h-and-shape-diagram)
    -   [Timelines properties](#timelines-properties)
    -   [Orgchart: Position Type](#orgchart-position-type)
    -   [SureStep](#sure-step)

 

An overview of the system properties arranged according to property
group follows.

Complements the basic procedure for [creating a new property](creating-a-new-property).

See also: [System Properties for Diagrams](system-properties-for-diagrams/)


![](//images.ctfassets.net/utx1h0gfm1om/4F1JzdY0HKe4UsaEoSiqKg/193c90ca1cb2add6cd90f270d54482e2/329342.png)


### Definition

#### Condition

See: [Conditions](conditions)

#### Include in text search

Includes the property in the [search function](search-filters) in the
whole system.

#### Show in Tootlip

Shows the property by mouse-over on
a [Shape](shapes-stencils-and-templates) as Visio or Tooltip in the [web
publication](webpublisher).

<div class="info">
Note:

Visio tooltips must be separately activated in the [database
settings](database-settings).
  </div>

#### Number of Lines

This property is only available for the property type "text" and allows
you to specify how many lines of the respective text property should be
displayed by default in the [properties window](properties-dialog-box).
The default value for this property is 4 lines (= current size of the
text box), the maximum value is 19 lines. Invalid values are
automatically set to the default value of "4".

### Approval Management

If the [approval
management](approval-management) for [objects](object) has been enabled,
the respective properties are available here.

See in detail: [System Properties for
Diagrams](system-properties-for-diagrams)

### Description

#### Description

Allows you to define a description for a property. This (explanatory)
description of each property then appears at the bottom of
the Properties window, when the property is selected.

### Visio

#### Shape-specific

Setting the value to "true" makes the property shape-specific

See: [Shape-specific properties](shape-specific-properties)

#### Is a master shape

This property should be set to "true" if you assign [several shapes of
the same class](multiple-shapes-for-a-single-class). The property "is a
master shape", can be set for each [property
type](property-group-property); it is most reasonable to use it  for the
property types "enum" and "formula".

#### Visio Shape's target cell

Displays a visio cell (in the ShapeSheet of
a [shape](shapes-stencils-and-templates)), in which the value of the
selected property is synchronized. This functionality can be used for
example to display the selected property on shapes and/or templates.

See: [equip master shapes with
properties](creating-new-master-shapes) and [Creating and Adjusting
Templates](creating-and-editing-templates)

#### Visio values Balance Mode

This property can have one of the following values: 

-   Use Shape settings: The value is displayed in the Shape Data dialog
    as it is (String, Bool etc.)
-   Use Text: The value is displayed as text, regardless of how it has
    been defined in the Shape Data dialogue
-   Use value with type: The value is displayed as a series, regardless
    of how it has been defined in the Shape Data dialogue (can e.g. be
    used for ENUM and datetime properties)

#### Synchronization

The [Graphical Visio Modeler](graphical-visio-modeler) can be set so
that the [properties](property-group-and-property) are synchronized with the
associated Visio shape data. This means that when a user makes changes
to the data in Visio, the data changes are automatically updated
in [process4.biz](http://process4.biz/) (and vice versa). Each property
can be defined either as a "push" value (= acceptance), or as a "pull"
value (= query) from Visio shape data to the repository.

<div class="info">
Note:

Object properties are only displayed in the Visio shape data, if they
have been selected in the dialogue box "Equip the Shapes with p4b
properties".
  </div>

-   **P4B =&gt; Visio:** the value of a property is accepted as the
    value in the associated Shape Data Field. If you change the value of
    the Visio shape data, this is ignored in process4.biz.
-   **Visio =&gt; P4B:** properties are read-only and can only be
    changed in the window Visio Shape Data. This option is used for
    example to integrate external data.
-   **P4B &lt;=&gt; Visio:** the value of a property is copied into the
    corresponding shape data field and vice versa it is synchronized
    back.


#### Assigning p4b ENUM to Visio FixedList 

Enables synchronization of Enum properties with the Visio Fixed-List
property.

<div class="error">

Caution:

This setting should be set to "True", so that the P4B/BPMN
synchronization can run properly.
 
 </div>
  
![](//images.ctfassets.net/utx1h0gfm1om/75Sfajhom4YsuqioScmmyW/9f46a646cdb0eda47e59b32de9c0c53f/329344.png)


#### Allow FixedList update

Enables updating Visio of Visio Fixed-List property of Enum properties.

### Validation

See: [Validate property values](properties-dialog-box)

### Web publication

#### Web View Publisher

If the property is set to "true", the property in the web portal will be
displayed in the object and diagram properties. If you do not want to
display the property in the Web portal, select "False".

#### Activate the "Property Search"

Allows you to search for this property in the web publication or
prevents the search.

### Administration

#### Editable/Visible

For [classes](class) and [properties](property-group-and-property), the
properties "Visible" and "Editable" are available, for [property
groups](property-group-and-property) there is only the property "Visible".

<div class="info">

By default, these properties are always set to "true" and have an impact
on the [repository](repository) and the [WebPublisher](webpublisher).
  </div>

If you set the property "Visible" for a class, a property group or
property to "false", these items are made invisible in the repository
and the web portal for all users. However, if you display a property on
a [shape](shapes-stencils-and-templates) or a [diagram](diagram) as Visio
fields (or Visio Data Graphics), the invisible properties remain visible
(for these shapes).

If you set the property "Editable" for a property to false, this
property will be read-only in the repository and the web portal for all
users.

#### Visible in link matrix

With the property "Visible in link matrix", you can specify whether the
value of this property will appear in the [link
matrix](link-matrix) along with the object name.

#### Closed by default

In the [properties window](properties-dialog-box) of property groups,
there is also the property "Closed by default". If you set this property
to "true", this property group appears closed by default.

### Create System Properties Automatically

It is possible to create some system properties automatically in [the
Database Designer](database-designer) through the context menu of a
(system) [class](class).

<div class="warning">
<h3>Attention:</h3>

When automatically created system properties are first added to specific
classes, but later also to system classes (General diagram and object),
duplicates of these properties (incl. their values, e.g. assigned tags)
may appear.These dual properties can be removed from the specific
classes again (certainly only after examining the property values of the
relevant properties!)
  </div>

![](//images.ctfassets.net/utx1h0gfm1om/3oyAavOJW0YqKokKG4WKms/e7ee073a1a4b6357172af31ef1dd92c5/329214.png)

*Automatically Creating System Properties*

#### Tags

This property allows you to assign metadata to objects of several
classes.

See: [Tags](tags)

#### Disable for Web Publication

This property allows you to mark objects and diagrams, which should not
be published to the portal.

#### Publishing: E-mail Feedback

This diagram property offers the possibility to leave a feedback e-mail
address in the web publication per diagram.

#### Shape: geometry (x, y, w, h) and Shape: Diagram

The properties "Shape diagram", "Shape height", "Shape width", "Shape X"
and "Shape Y", are [shape-specific](shape-specific-properties) and
contain information about each shape assigned to an [object](object).

-   The "Shape diagram" property indicates the name of the diagram on
    which the shape is used.
-   The properties "Shape height" and "Shape width", indicate the height
    and width of the shape.
-   The properties "Shape X" and "Shape Y", indicate the coordinates of
    the shape (from the upper left corner of the diagram).

#### Timelines properties

These properties enable the creation of [timeline
diagrams](timeline-diagram). You can use the properties as needed for a
specific class, for all objects in the database (via the object class
system), or for all diagrams (System class Diagram). To do this, select
the class in the Designer, right-click on it and select the desired
property under "Advanced Properties". A message appears to inform you
that the property has been created.

#### Orgchart: Position Type

This property adds organizational properties for the selected class,
thus enabling the use of organization diagrams.

#### SureStep

This property is used for the [extension
module](process4.biz_Extension_Modules) [SureStep](file:///S:/confluence/pages/createpage.action?spaceKey=DOC&title=SureStep&linkCreation=true&fromPageId=3637340).


<hr style="padding-top:2rem" />
<a href="https://github.com/process4/docs/issues" target="_blank" class="bgw btn btn-primary btn-lg shadow-sm">Report an issue</a>
<a href="https://github.com/process4/docs" target="_blank" class="bgw btn btn-primary btn-lg shadow-sm" style="margin-left:10px;">View source code</a>
-   [Definition](#definition)
-   [Property Types](#property-types)
    -   [String](#string)
    -   [Text](#text)
    -   [Integer](#integer)
    -   [Double](#double)
    -   [DateTime](#datetime)
    -   [Bool](#bool)
    -   [Enum](#enum)
    -   [Hyperlink](#hyperlink)
    -   [Path](#path)
    -   [Formula](#formula)
    -   [Linked Element Selector](#linked-element-selector)
        -   [Object type data object](#object-type-data-object)
        -   [Object type diagram](#object-type-diagram)
        -   [Object type files](#object-type-files)
    -   [User selector](#user-selector)
-   [Multiple selection](#multiple-selection)
-   [Show properties in the Shape context menu](#show-properties-in-the-shape-context-menu)
    -   [Notes](#notes)


### Definition

What is a property group?

-   A property group summarises multiple properties together in a group
    and stands hierarchically between the [class](class) and the
    property.

What is a property?

-   A property is a descriptive data field for [objects](object) of
    a [class](class). Properties are divided into groups of properties
    and are hierarchically created under them.

Property groups and properties are managed per [class](class) in
the [Database Designer](database-digner) and can be created there.
Attributes can also be [shape-specific](shapes-stencils-and-templates),
enabling the attribution of objects according
to [shape](shapes-stencils-and-templates).

### Property Types

When [creating a new property](creating-a-new-property) in the [Database
Designer](database-designer), the property type can be set according to
the requirements for the corresponding property. 

The following property types are available: 

#### String

The property type String allows single-line text as a property value
(max. 255 characters).

#### Text

Allows you to enter multiple lines of text. Paragraphs can be set by
pressing Ctrl + Enter, bulleted text or the like can e.g. be pasted from
MS Word.

#### Integer

The property type "integer" allows only an integer (positive or
negative) as a value.

#### Double

Allow only floating point values as property value.

#### DateTime

Allows a date, time, or the combination of date and time as property
value.

#### Bool

Allows the values "true" and "false" for a property; if neither of these
two values is selected, the value of the property is left blank =
undefined.

#### Enum

With this property type, selectable values can be freely defined; in
the [properties window](properties-dialog-box) of the property, a new
tab called "Enum items" is displayed. These values can be defined there
and they should be available for objects of this class under this
property.

Each enum member has a Db-name that is unique and does not depend on the
database language. For enum items, it is also possible
set [conditions](conditions). Using the button "Move Up" and "Down", you
can specify the order of the Enum items. With the button "Open / close
all", you can open at once all enum items and close them again.

If multiple values are to be simultaneously selected for an Enum
property, use additionally the property multiple selection.

#### Hyperlink

The property type Hyperlink can be used to direct to online resources
(Intranet udgl.), network resources (files on network shares) or local
files and programs. Hyperlinks created in this way can be used
on [diagram](diagram), in the [repository](repository) as well as
the [extension modules](process4.biz_Extension_Modules).

The syntax of a link property looks like this:

**Hyperlink Syntax**

``` powershell
Online resources LinkName | http://url.com network resources - files LinkName | \\share\folder\file.pdf Local files LinkName | \\computer\share drive $\folder\file.pdf hyperlinks to programs (only from process4.biz) MS Word, hyperlink to a Chapter Link Name | Word://c:\Example.doc TOC21 Notepad (only process4.biz) Link Name | notepad.exe C:\text.txt
```

Hyperlinks can be set not only manually, but also via the button "Edit
the path" for each property in the [properties
window](properties-dialog-box). [Predefined paths](database-settings)
in the database settings can be used for simplification when creating
hyperlinks.

In the properties of an object, stored hyperlinks (or paths) on the file
server are represented on the [diagrams](diagram) graphically by
Smart-Tags. Under the smart tag of the object, only the name of the
hyperlink you assigned is displayed for better overview.

By clicking on the desired link, you are directed to the specified
address or open the saved file / directory on your file server. The
hyperlinks function can be used of course with a web portal created with
the [WebPublisher](webpublisher).

#### Path

Properties of the property type path work as hyperlink properties;
however, they direct to directories rather than to specific files.

**Path syntax**

``` java
Network resources - Directories Link name | \\share\folder\Local Folders link name | \\computer\share drive $\folder\
```

Just as hyperlinks, paths can be set not only manually, but also have
the button "Edit the path" for each property in the [properties
window](properties-dialog-box). In the database settings, [pre-defined
paths](database-settings) can be used for simplification when creating
paths.

#### Formula

See: [Property Type: Formula](property-type-formula)

#### Linked Element Selector

##### Object type data object

Via the linked Element Selector for [data objects](object), you can create
an automatic association with linked objects and display their names
below this property. This automatic selection of objects for the linked
Element Selector can be restricted to one or more [classes](class) and /
or [link types](link-types) (and/or association classes). 

<div class="warning">
If a link between objects relevant to a linked Element selector is deleted,
the linked object from the corresponding property disappears
automatically
  </div>

If you want several objects to be displayed simultaneously with a
property of that property type, set the property "Multiselect" to
"true".

If you want make linked element selector property editable in the property sheet set to “true”   property “Editable” in the Administration section. In this case only one link type should be selected for this property and non or one association object is selected for the property.  

##### Object type diagram

With the linked Element selector for [diagrams](diagram), you can create an
automatic association to diagrams linked with an [object](object), or to
diagrams on which the object is used, and display its name in this
property. The selection of diagrams for this property can be limited via
the [diagram classes](class).

If you want to link multiple diagrams simultaneously with a property of
that property type, set the property "multiple selection" to "true".

If you want make linked element selector property editable in the property sheet set to “true”   property “Editable” in the Administration section. As a diagram link type selected “Linked to diagram”. 

##### Object type files

With the linked Element selector for files  , you can create an automatic
association to files linked with an object, or to diagrams on which the
object is used, and display its name in this property. The selection of
files for this property can be limited via the file classes.

If you want to link multiple files simultaneously with a property of
that property type, set the property "multiple selection" to "true".

#### User selector

A property of this type allows the referencing of users
(see [permissions](permissions)) as a property value. The selection of
available values for properties of this type can be restricted to native
process4.biz users, Windows users, and/or Windows user groups.


![](//images.ctfassets.net/utx1h0gfm1om/3yfGHG0lq0Y2YswAyeCWOW/23c99b506f73a3c8a65fd47c405aa5ea/329451.png)

 

**View all properties in the property group "definition" of the class
"activity" in the [Database Designer](database-designer)**

 

*![](//images.ctfassets.net/utx1h0gfm1om/7xU14wshHOW2sWwiSIMAg8/d91ace43a69de9374d48dfa28db3b9cc/329454.png)*

*Selection of the property type*

### Multiple selection

For the property types enum, user selector and linked Element selector, the
system property "Multiselect" can be defined. If you set this to "true",
the simultaneous selection of several values for properties of these
property types is allowed with corresponding objects.

If the multiple selection of a property is set to=True, values have been
set for the property and the property changes later again to multiple
selection=False, the following occurs:

1.  If only one value is specified for the property, that value is
    preserved after the change.
2.  If multiple values are specified for this property, the value after
    the change will be empty.

### Show properties in the Shape context menu

It is possible to display Bool and Enum properties in the context menu
of a [Shape](shapes-stencils-and-templates) of the
appropriate [class](class) and to make them selectable from then
onwards.

This function is managed via the property "Show in shape-context menu"
which is available for all Bool and Enum properties in the [Properties
window](properties-dialog-box). The order of properties is taken from
top to bottom from the structure of property groups and properties in
the Properties window and can be controlled via the property "priority"
of the respective properties - the lower the value, the further up the
property is listed.

#### Notes

-   If an Enum property is a mandatory field, an empty value cannot be
    set for this property via the context menu.
-   Bool properties cannot be assigned an empty value via the context
    menu, regardless of whether they are a mandatory field or not.

 

![](//images.ctfassets.net/utx1h0gfm1om/5jn7MRQeRy2Q8Eg6AusMUI/53e619e47f02b156365647875237cf51/329226.png)

*Multiple selection* 
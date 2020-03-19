-   [Search](#search)
-   [Filter](#filter)
-   [Unit filter](#unit-filter)
    -   [Heredity](#heredity)
    -   [Diagram Use](#diagram-use)
    -   [Approval Management](#approval-management)
    -   [Visibility](#visibility)

### Search

You can search for objects and diagrams in
the [repository](repository) and in [Little
repository](graphical-visio-modeler) as well as in the [Database
Designer](database-designer). If you enter a text in the search box,
items are filtered according this text, and results are highlighted in
yellow.

You can create a new or already
existing [property](graphical-visio-modeler) each time for the search or
remove it from the search. This functionality is controlled by the
system property "include in text search"; the default value of the
property is set to "true".

### Filter

Content can be filtered in the repository / designer according to
different parameters. Click on the "Filter". In this way, you can search
according to criteria (e.g.class, unit, etc.) and/or self-selected
strings.

-   You can also use the fields &lt;not empty&gt; and &lt;empty&gt; to
    search for all matching property fields.
-   Each column of the table (= property of an object) can be filtered
    separately.
-   Various column filters can be set simultaneously too.
-   Large and small letters are regarded as one and the same symbol.

<div class="success">
  
Each object has also a property named "[Unit](unit)" so that you can
sort the objects at various levels according to their original unit.
Click on the column header to sort, a small triangle icon informs about
the sort order of each column.
 
 </div>

![](//images.ctfassets.net/utx1h0gfm1om/m2yYG1zHtmUKiuQ6ucUWK/a84306ef1afc830b18c8615f49b5d328/329236.png)

*Filter*


![](//images.ctfassets.net/utx1h0gfm1om/4gEk9KsyfCyMoiMAk0o6A8/bbb323562adea149667621692564eb1d/329238.png)

*The Unit filter in [Repository](repository)*

### Unit filter

The unit filter provides the filter for the following categories:

#### Heredity

-   Hide the items of the Parent Units  
    All inherited items from higher hierarchy levels (objects and
    diagrams) are hidden. This is useful if you are in a lower hierarchy
    level, in which there are many "inherited" objects.
-   Hide the items of the Child Units  
    All items (objects and diagrams) originating from units of lower
    hierarchy levels are hidden. This is useful if you are currently in
    a higher hierarchy level and you do not want to see objects
    inherited from deeper units.
-   Hide the diagrams from parent units in the tree  
    All diagrams inherited from higher hierarchy level are hidden in the
    diagram tree.
-   Hide the diagrams from child units in the tree  
    All diagrams originating from units in lower hierarchy levels are
    hidden in the diagram tree.

#### Diagram Use

-   Hide the objects that are used on diagrams   
    Hides all objects that are used in diagrams. This feature is useful
    if you e.g. want to change / delete all objects that are not used in
    diagrams.
-   Hide the objects that are not used on diagrams  
    Hides all objects that are not used on diagrams.

#### Approval Management

-   Hide all approved objects and diagrams  
    This function can be used to quickly find all objects and diagrams
    that have not yet been approved by an authorized person.
-   Hide all objects and diagrams that are unapproved   
    This option makes it possible to display all objects and diagrams
    that have been approved and are released.
-   Hide specific non-approved objects and diagrams   
    This function hides unapproved objects and diagrams of a certain
    category.

See: [Approval Management](approval-management)

#### Visibility

-   Both options ("Show hidden items" and "Show only hidden items") are
    disabled.  
    Items are only visible in the [repository](repository) and in
    the [Database Designer](database-designer).
-   Show hidden items  
    All hidden items are (greyed out) displayed along with the visible
    items.
-   Show only hidden items  
    Only hidden items are displayed.

See also: [Visibility Settings](visibility-settings)
<hr style="padding-top:2rem" />
<a href="https://github.com/process4/docs/issues" target="_blank" class="bgw btn btn-primary btn-lg shadow-sm">Report an issue</a>
<a href="https://github.com/process4/docs" target="_blank" class="bgw btn btn-primary btn-lg shadow-sm" style="margin-left:10px;">View source code</a>
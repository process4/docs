-   [Object-based content](#object-based-content)
    -   [Text Block](#text-block)
    -   [Table of Contents](#table-of-contents)
    -   [Diagram](#diagram)
    -   [Objects of class](#objects-of-class)
    -   [Query](#query)
    -   [Table of objects of class](#table-of-objects-of-class)
-   [Query-based content](#query-based-content)
    -   [Text Block](#text-block-1)
    -   [Table of Contents](#table-of-contents-1)
    -   [Diagram](#diagram-1)
    -   [Objects of a class](#objects-of-a-class)
    -   [Query](#query-1)


## Object-based content

### Text Block

![](//images.ctfassets.net/utx1h0gfm1om/14tP0vIXGAocQAOYkIkekC/249c47f1c2dc0424dba4cf9c649a3314/329190.png)

Content: List of properties of the current object.  
Display Type:

-   As a value style: P4B\_TextBlock
-   As a value with field identifiers style: P4B\_TextBlockNamed

Value: property name (if selected) and value of the property. The
property belongs to the current object.


### Table of Contents

![](//images.ctfassets.net/utx1h0gfm1om/1ePjICFQ2u4soYaGCoIQQ0/839c725188df3235f5eae312fe6f341f/329188.png)

 

Content: -  
Display Type:

-   Selected properties
-   Selected properties divided by property groups
-   Selected properties (with no text block) *(remove properties that
    are already used in the current block as a "text block")*
-   Selected properties (with/without text block) divided by property
    groups *(remove properties that are already used in the current
    block as a "text block")*

Style: P4B\_ObjectTable  
Value: Two two-column tables - the first column contains the property
name, the second one contains the property value. Table belongs to the
current object.

### Diagram

![](//images.ctfassets.net/utx1h0gfm1om/4Mt4XtXla8YQgcM8s0YS62/ba5d8b4bbab9f3e43478690b6b686ca0/329492.png)

 

Contents: List of diagrams linked to the current object.  
Display Type: -  
Style: P4B\_Diagram (for diagrams linked to the current object) or   
P4B\_Root\_Diagram (for root diagram with document tree)

### Objects of class

![](//images.ctfassets.net/utx1h0gfm1om/6ect7GTQdOCEkwmemAMK2a/f2429253455ebcb35e70d51f012ae3fb/329483.png)

 

Content: diagram linked to the current object  
Display Type:

-   List of classes of objects used on the diagram

Style: P4B\_ObjectTable  
Value: Two two-column tables - the first column contains the class name,
the second column contains a list of object names.

### Query

![](//images.ctfassets.net/utx1h0gfm1om/44BpUoEgpGSSSmkG6oCq0s/b166d5de77f4f0a96ad3548d6788f3c1/329503.png)

 

Content: list of queries  
Display Type:

-   As table Style: P4B\_QueryTable *(multi-column table; first line
    contains the name of the column)*
-   As paragraph Style: P4B\_QueryParagraphItem *(each cell of the query
    is shown as a separate paragraph)*
-   As a list of numbers Style: P4B\_QueryList (for list)
    and P4B\_QueryListItem (other entries) (The rows of the query are
    displayed as a list of style *P4B\_QueryList; each cell of a row is
    displayed as a paragraph with a list of style P4B\_QueryListItem)*
-   As a list of numbers and field identifiers
    Style: P4B\_QueryList (for list)
    and P4B\_QueryNamedListItemCaption with P4B\_QueryNamedListItem (other
    items) *(The rows of the query is displayed as a list with
    Style P4B\_QueryList; each cell of a row is displayed as a paragraph
    with a list - name of the column with
    style P4B\_QueryNamedListItemCaption and the value of the cell with
    style P4B\_QueryNamedListItem)*
-   As a bulleted list style: P4B\_QueryBulletList (for list)
    and P4B\_QueryListItem (other entries) *(The rows of the query are
    displayed as a list of style P4B\_QueryList; every cell of a row is
    displayed as a paragraph with a list of style P4B\_QueryListItem)*
-   As a bulleted list and field identifiers
    Style: P4B\_QueryBulletList (for list)
    and P4B\_QueryNamedListItemCaption with P4B\_QueryNamedListItem (other
    entries) *(The rows of the query are displayed as a list with
    Style P4B\_QueryBulletList; each cell of a row is displayed as a
    paragraph with a list - name of the column with
    style P4B\_QueryNamedListItemCaption and the value of the cell with
    style P4B\_QueryNamedListItem)*

  
Table Style: P4B\_QueryTable  
Lists Style: P4B\_QueryList, P4B\_QueryBulletList  
Paragraph Style: P4B\_QueryParagraphItem, P4B\_QueryListItem,
P4B\_QueryNamedListItemCaption

 

### Table of objects of class

![](//images.ctfassets.net/utx1h0gfm1om/6p8GWfXWRqy6oCYusqcmou/10b4207e8599bb335fe47b9d1d649552/329478.png)

Content: diagram linked to the current object

Display Type:

-   List of tables of these objects with properties

 

Style: P4B\_ObjectTable  
Value: List of two-column tables - the first column contains the name of
the object property, the second column contains value of the property.

## Query-based content

### Text Block

![](//images.ctfassets.net/utx1h0gfm1om/2lOXsWQ6d682aMCAIW22iq/479bce30192060295c3c8bf951c0b950/329071.png)

Contents: List of columns with current query.  
Display Type:

-   As a value style: P4B\_TextBlock
-   As a value with field identifiers style: P4B\_TextBlockNamed

Value: column name (if selected) and the value of the column and row.
Column is part of the current query.

### Table of Contents

![](//images.ctfassets.net/utx1h0gfm1om/20TrFUEhlG6SqmaGQqUg8K/c8ba42ee09905e43dd46791f97864fea/329073.png)

Content: -  
Display Type:

-   Selected properties
-   Selected properties divided by property groups

Style: P4B\_ObjectTable  
Value: Two two-column tables - the first column contains the property
name, the second column contains the property value. Table belongs to
the current object.

### Diagram

![](//images.ctfassets.net/utx1h0gfm1om/5FBPpbDRXqIEiscM2aaMWi/a097b3f80966ef50cf77175a9f599d9d/329075.png)

Content: -  
Display Type: -  
Style: P4B\_Diagram (for a diagram of the current row of the query)

### Objects of a class

Not yet defined.

### Query

![](//images.ctfassets.net/utx1h0gfm1om/519xMy1Bv2uwgQUUWQoMi4/91aeca2862c07d11643f7039e9158d26/329077.png)

Content: list of queries  
Display Type:

-   As table style: P4B\_QueryTable *(multi-column table; first line
    contains the name of the column)*
-   As paragraph Style: P4B\_QueryParagraphItem *(each cell of the query
    is shown as a separate paragraph)*
-   As a list of numbers style: P4B\_QueryList (for list)
    and P4B\_QueryListItem (other entries) (The rows of the query are
    displayed as a list of style *P4B\_QueryList; each cell of a row is
    displayed as a paragraph with a list of style P4B\_QueryListItem)*
-   As a list of numbers and field identifiers
    style: P4B\_QueryList *be* (for list)
    and P4B\_QueryNamedListItemCaption with P4B\_QueryNamedListItem (other
    entries) *(The rows of the query are displayed as a list with
    Style P4B\_QueryList; each cell of a row is displayed as a paragraph
    with a list - name of the column with
    style P4B\_QueryNamedListItemCaption and the value of the cell with
    style P4B\_QueryNamedListItem)*
-   As a bulleted list style: P4B\_QueryBulletList (for list)
    and P4B\_QueryListItem (other entries) *(The rows of the query are
    displayed as a list of style P4B\_QueryList; every cell of a row is
    displayed as a paragraph with a list of style P4B\_QueryListItem)*
-   As a bulleted list and field identifiers
    style: P4B\_QueryBulletList *be* (for list)
    and P4B\_QueryNamedListItemCaption with P4B\_QueryNamedListItem (other
    entries) *(The rows of the query are displayed as a list with
    Style P4B\_QueryBulletList; each cell of a row is displayed as a
    paragraph with a list - name of the column with
    style P4B\_QueryNamedListItemCaption and the value of the cell with
    style P4B\_QueryNamedListItem)*

 

Table style: P4B\_QueryTable  
List style: P4B\_QueryList, P4B\_QueryBulletList  
Paragraph style: P4B\_QueryParagraphItem, P4B\_QueryListItem,
P4B\_QueryNamedListItemCaption

 
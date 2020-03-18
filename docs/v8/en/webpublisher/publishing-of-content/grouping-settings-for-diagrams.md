-   [Display of Units](#display-of-units)
    -   [No Units](#no-units)
    -   [Group by Unit](#group-by-unit)
    -   [Create Unit Hierarchy](#create-unit-hierarchy)
-   [Display for diagrams](#display-for-diagrams)
    -   [Generate a diagram tree](#generate-a-diagram-tree)
    -   [Group diagrams by](#group-diagrams-by)
-   [Collapse root (diagrams) node by default](#collapse-root-diagrams-node-by-default)



![](//images.ctfassets.net/utx1h0gfm1om/2zJgBIxhsgG0K2GAusoiSU/1c27b4eedb38965d9740d793f992fa47/328838.png)


### Display of Units

It is possible to group diagrams in the Web publisher by units in the
following way:

#### No Units

Diagrams are not grouped by unit

#### Group by Unit

Diagrams are grouped by units that are listed in alphabetical order.

#### Create Unit Hierarchy

Diagrams are grouped by units that are listed in a hierarchy (as in the
repository).

-   **Include empty units**  
    This option allows you to publish empty units with no diagrams.

### Display for diagrams

#### Generate a diagram tree

Similarly to the repository, a diagram hierarchy tree can be generated
on the Web Portal, displaying diagram links graphically. In contrast to
the repository, only diagrams in the selected unit are displayed in the
tree and no inherited diagrams. Each diagram is displayed only once on
the web.

#### Group diagrams by

Alternatively to a tree diagram, diagrams as well as objects can be
grouped according to the following criteria

-   **Diagram Classes**  
    This option allows you to group diagrams by diagram classes.
-   **Diagram Property**  
    This option allows you to group all diagrams by an enumerator
    property. Prozess4.biz has a numerator property ("enumerator" - or
    ENUM property) called "Type", by which all diagrams can be grouped.
    You can also create another numerator property for the class
    "diagram" in Designer, which you can find and edit limitedly under
    system classes. If you specify a specific numerator value in the
    repository for each diagram, diagrams are grouped in the portal
    according to these values.
-   **Group Diagrams Alphabetically**  
    If you select this option, the diagrams are grouped alphabetically.
    Determine the number of diagrams per alphabetical group. We
    recommend that you select this option for large databases with many
    diagrams per class.

<div class="info">
If you enable the option "Group diagrams by" and choose no grouping
criteria, diagrams are published in the form of a list.
  </div>

### Collapse root (diagrams) node by default

If you enable this option for diagrams, the diagram branch in the web
portal collapses by default.

 



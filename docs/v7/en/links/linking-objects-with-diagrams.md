-   [Link an object to a diagram](#link-an-object-to-a-diagram)
    -   [Link an object with a new diagram](#link-an-object-with-a-new-diagram)
-   [TreeLink and Reference Link](#treelink-and-reference-link)
    -   [TreeLink](#treelink)
    -   [Reference Link](#referencelink)
-   [Restricting the link between object and diagram](#restricting-the-link-between-object-and-diagram)
    -   [Allow link to diagram](#allow-link-to-diagram)
    -   [Activated diagram classes](#activated-diagram-classes)

 
Links between [objects](object) and [diagrams](diagram), can be used to
navigate between diagrams and thus are used primarily for the
structuring of the model. This affects, among other things, the
hierarchical tree structure (= the "tree") displayed in the navigation
window of the [Repository](repository): this tree is created based on
the individual [links](links) between objects and diagrams and changes
also accordingly.

Links between objects and diagrams are represented
by [Smart-Tags](graphical-visio-modeler) in [diagrams](diagram) in
the [Graphical Visio Modeler](graphical-visio-modeler) and optionally
also in the [web publication](working-with-the-web-publication). When an
object is linked to a diagram, a smart tag is displayed for each graphic
instance (=modelled, existing on a diagram) of the object that lists
those diagrams with which the object is linked.

![](//images.ctfassets.net/utx1h0gfm1om/4l6JPmoiUwS0gYe8SKmmkk/e2b94c315448fe83a89e256b4b09dfba/328820.png)

*Display of diagram links in an object properties window.*

### Link an object to a diagram

To link an existing [object](object) to an existing [diagram](diagram),
proceed as follows:

1.  Mark the desired object in the [repository](repository).
2.  Open the context menu with the right mouse button.
3.  Select the function "Link to diagram".
4.  The tab "diagram links" in the [properties
    window](properties-dialog-box) of the selected object opens.
    1.  In the upper part of the window, the existing links to diagrams
        are displayed.
    2.  In the lower part of the window, these diagrams are displayed,
        which can be linked to the selected object.
5.  Select the diagram that you want to link to the initially selected
    object.
6.  Click on the button "Link".
7.  The link is created and displayed in the upper part of the
    window.   
    The column "Show In the Tree" indicates, whether it is a link to a
    TreeLink or a Reference Link. See: [TreeLink and Reference
    Link](linking-objects-with-diagrams)
8.  Close the Properties window by clicking on "OK".

As an alternative to this procedure, links can be created between
diagrams and objects via the "Object links" in the diagram properties
window. Here, an object can be selected to be linked to the
corresponding diagram. If the selected object is already linked to other
diagrams, these links are also displayed.

#### Link an object with a new diagram


To link an existing [object](object) to a new [diagram](diagram),
proceed as follows:

1.  Mark the desired object in the [repository](repository).
2.  Open the context menu with the right mouse button.
3.  Select the function "New linked diagram".
4.  Select the [template](shapes-stencils-and-templates) for the newly
    created diagram.
5.  A [properties window](properties-dialog-box) for the new diagram is
    displayed the diagram properties can be edited.
6.  Clicking on "OK" opens the newly created diagram which is ready for
    modelling.

<div class="note">
Note:

Via the function "New linked diagram", created links between object and
diagram are interpreted as TreeLink by default. If this is not desired,
the respective TreeLink must be canceled manually.
  </div>

 ![](//images.ctfassets.net/utx1h0gfm1om/4i1nDQKkog6SScUqOAOsGS/59697eb1a30f3ec1ac2441a525a2d5b3/328822.png)

*Create a new linked diagram.*

### TreeLink and Reference Link

Via the checkbox in the column "Show In the Tree", available for
[links](links) between objects and diagrams, you can control whether the
respective link is a TreeLink or a Reference Link.


#### TreeLink

-   TreeLinks are links between objects and diagrams that affect the
    tree.
-   In order for a link to be treated as TreeLink, the checkbox "Show In
    the Tree" must be checked.

If a link between an object "A" (located on diagram "D\_A") and a
diagram "B" is created as a TreeLink, this means that the diagram "B"
linked with the object "A" is displayed hierarchically one level below
the diagram "D\_A", on which the object "A" is used.

If there are multiple diagrams on which the object "A" is used, you can
decide by ticking the checkbox "Show In the Tree" per diagram whether
the link should be a TreeLink or not.

 
![](//images.ctfassets.net/utx1h0gfm1om/6PiOQoPSLKk6SCggeG8koU/9776469e3f76d167bda1f7fc8af2c63f/328824.png)

*Example TreeLink: Process Landscape -&gt; Direct delivery
(hierarchically descending)*



#### Reference Link

-   Reference links are links between objects and diagrams that do not
    affect the tree.
-   In order for a link to be treated as a Reference Link, the checkbox
    "Show In the Tree" must remain empty.

If a link between an object "A" and a diagram "B" is created as a
Reference Link, this means that the link between the object "A" and the
diagram "B" appears exclusively in the diagram or Object Properties. The
object refers or links only to the diagram (or vice versa), and the link
is not considered for the tree.

If there are multiple diagrams on which the object "A" is used, you can
decide by leaving the checkbox "Show In the Tree" empty per diagram
whether the link should be a ReferenceLink or not.

![](//images.ctfassets.net/utx1h0gfm1om/74OyedrM5Oe6yCegmsoGwU/417455bec47673f5964504082b2e1808/328826.png)

*Example Reference Link: Process Landscape -&gt; Direct delivery (no
hierarchical relationship)*

### Restricting the link between object and diagram

Through the following system properties of a [class](class) in
the [Database Designer](database-designer), links between objects and
diagrams can be restricted.

#### Allow link to diagram

If this property is set for a class to "false", objects of this class
can (no longer) be linked to diagrams.

#### Activated diagram classes

Here can be set that objects of each class can be linked only to
diagrams of a specific diagram class (multiple selection is possible).

Thus it can be set, for example, for a consistent model, that objects of
the class "process" can only be linked with diagrams of the diagram
class "process", which in turn uses
the [template](creating-and-editing-templates) *Prozess.vstx.*


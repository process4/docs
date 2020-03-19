-   [Direct (direct link)](#direct-direct-link)
-   [Indirect (indirect link)](#indirect-indirect-link)
-   [Swimlane](#swimlane)
    -   [Stack all Shapes](#stack-all-shapes)
-   [XY](#xy)
-   [RACI](#raci)
-   [Drag & drop](#drag--drop)
    -   [Only link](#only-link)
-   [Intersection](#intersection)
-   [Containment ](#containment)
-   [X-technology](#x-technology)
-   [Y Technology](#y-technology)
-   [Manual](#manual)
-   [Custom](#custom)
-   [VisioCallout](#visiocallout)
-   [Visio Container](#visio-container)



This article describes the available link technologies in process4.biz
which are used together with [link types](link-types) in [link
rules](link-rules).

[Conditions for link rules](conditions-for-link-rules) as well
as [scripts for validation (testing methods)](validation-scripts) can be
created.

*![](//images.ctfassets.net/utx1h0gfm1om/1LAbhVrWDaWWW48CcoiO4K/82bbcfc00a091a4761ecd36a28250be6/328892.png) Selection of link technology when creating a new [link rule](link-rules)*

### Direct (direct link)

When two [objects](object) are connected directly with a connector, an
object link is automatically generated in the database.

The adhesion of the connector to a connection point first of the one and
then the other object creates the from-to relationship in the database.
Whether the connector is shown on the [diagram](diagram) as a line, as a
two-sided arrow or as an arrow with tip pointing to the one or the other
direction plays a role: in the first case, the direction "both" is set
(= "from" and "to") and in the latter "to" or "from", depending on the
direction of the tip.

In the demo database: assign during the activation of the technology of
the respective [classes](class) in the [Database
Designer](database-designer) the [link type](link-types) "linked
to/linked from".  
If you want the direction of the connection between two different
classes to adapt according to the change of the direction of the arrow,
you should link each corresponding class directly with the two link
types "linked to" and "linked from" respectively.

For application examples of the link technology described here,
see [Example: Direct Link Technology](example-direct-link-technology).

### Indirect (indirect link)

Two objects are connected "indirectly" to each other via several
connectors through a decision object.

This configuration automatically creates an object link of the selected
link type between the two objects whereby not all links are explicitly
registered with the decision object - in other words, all individual
connectors between the objects are seen as a common overall connector.
The logical item (or any object of [process4.biz](https://process4.biz)
database between objects of indirectly linked classes) is in this case
is stored as an association object.

If you want to determine the association class of this object relation
specifically, it should be previously defined via the link type, which
you assigned in the framework of the indirect link technology.

For application examples of the link technology described here,
see [Example: Indirect Link Technology](example-indirect-link-technology).

### Swimlane

When two [objects](object) (completely or partially overlapping) lie on
top of each other on a [diagram](diagram), this configuration creates an
automatic object link of this type between the two objects. A small
overlap area is therefore already sufficient to create a link.

For application examples of the link technology described here,
see [Example: Swimlane](example-swimlane).

#### Stack all Shapes

When multiple [shapes](shapes-stencils-and-templates) lie on top of each
other or are stacked, you can decide with this option if a link should
be created between all these shapes (= "true"), or only for each
directly overlapping or touching shape (= "false").

If such a shape stack consists of objects of several classes, a
respective [link rule](link-rules) should be set for each combination of
these [classes](class) (using the swim lane technology) in order to
avoid unwanted or duplicate links between the objects.

### XY

Objects from classes where this technology is activated are analyzed on
the [diagram](diagram) along the horizontal X-axis (horizontal from left
to right) and the vertical Y-axis (vertical from bottom to top). When
other objects exist in the created "space" (along the X and Y axis of
the output objects), an automatic link is created.

This technology is mainly used for the Enterprise Architecture
Management to depict value chains with underlying supporting
applications.

For application examples of the link technology described here,
see [Example: XY Technology](example-xy-technology).

### RACI

The RACI matrix is a special form of responsibility matrix in which
there are four types of responsibilities:

<table>
<colgroup>
<col style="width: 33%" />
<col style="width: 33%" />
<col style="width: 33%" />
</colgroup>
<thead>
<tr class="header">
<th> </th>
<th>Stands for</th>
<th>Meaning</th>
</tr>
</thead>
<tbody>
<tr class="odd">
<td><p>R</p></td>
<td><p><em>Responsible</em></p></td>
<td><p>responsible for disciplinary purposes</p></td>
</tr>
<tr class="even">
<td><p>A</p></td>
<td><p><em>Accountable</em></p></td>
<td><p>responsible in terms of cost unit or cost center</p></td>
</tr>
<tr class="odd">
<td><p>C</p></td>
<td><p><em>Consulted</em></p></td>
<td><p>responsible in technical matters</p></td>
</tr>
<tr class="even">
<td><p>I</p></td>
<td><p><em>Informed</em></p></td>
<td><p>requires the information for other responsibilities</p></td>
</tr>
</tbody>
</table>

[Objects](object) from [classes](class) for which this technology is
used, are analyzed on an imaginary X axis (horizontally from left to
right). If two of these RACI objects are on the same horizontal axis, an
automatic link between the two objects is created (even if other objects
are in-between). At the same time relations are created automatically to
other defined objects (e.g.: "R", "A", "C" and "I"), which e.g. cross
right as 90 ° degree rotated vertical swimlane the X-axis of the RACI
objects. These relations are created as entires of the [link
type](link-types) RACI with the corresponding association objects of the
class RACI.

By using this technology, threefold object links are created
automatically. For example, objects which describe an activity can be
linked with a function (position or role), to which the scope of your
responsibility according to RACI is assigned at the same time.

For application examples of the link technology described here,
see [Example: RACI](example-raci).

### Drag & drop

This technology allows you to link [objects](object) on
a [diagram](diagram) manually by dragging an object from the [little
repository](graphical-visio-modeler) on another object on the diagram,
while holding down the Shift key.

If a [link rule](link-rules) has been set for this technology, objects
that you drop on each other with &lt;Shift + Drag & Drop&gt; are
manually linked to each other. The window used to define the object
links more closely will not be displayed.

If no link rule has been set for this technology, no manual link is
created.

See also: [Link Objects Manually](manual-object-links)

#### Only link

This property is only available, when drag & drop is chosen as the link
technology.

If the property value is set to "false" (default), the respective object
that has been pulled out of the Little repository is placed on the
diagram. Otherwise (set to "true"), only a link between the objects is
created, but no new shape is placed on the diagram.

### Intersection

With this link technology, [objects](object) are only linked if they
intersect.

<div class="info">
Note:

This means that the frame or edges of the respective objects have to
intersect = overlap, in order for this link to be registered.
</div>

### Containment 

With this link technology, [objects](object) are only linked when an
object (or several objects) is placed within the frame or edge of
another object, i.e. it is enclosed by another object.

<div class="info">
Note:

Does not work when the edges of the objects touch or intersect.
  </div>

### X-technology

[Objects](object) from [classes](class) for which this technology is
used, are analyzed on the diagram along the horizontal X-axis
(horizontal from left to right). As soon as other objects of the target
class of the [link rule](link-rules) exist along this X-axis, an
automatic link is created.

### Y Technology

[Objects](object) from [classes](class) for which this technology is
used, are analyzed on the diagram along the vertical Y axis (vertical
from bottom to top). As soon as other objects of the target class of
the [link rule](link-rules) exist along this Y axis, an automatic link
is created.

### Manual

This technology allows a manual link of [objects](object) regardless of
their position on a [diagram](diagram). You can link an object to
another via the [properties window](properties-dialog-box) link. 

See also: [Link Objects Manually](manual-object-links)

### Custom

This link technology allows you to define via formulas or scripts, on
your own way, how objects should be linked to diagrams.

For application examples of the link technology described here,
see [Example: Custom Link Technology](example-custom-link-technology).

### VisioCallout

The VisioCallout technology, works for the Visio callout shapes. If this
link technology is activated for the [classes](class) "A" and
"B", [objects](object) of these classes are linked together, if the
object "B" is a callout shape of "A".

For application examples of the link technology described here,
see [Example: VisioCallout](example-visiocallout).

### Visio Container

The VisioCallout technology works for Visio container shapes. When the
link technology is activated for the [class](class) "C" and
"D", [objects](object) of these classes are linked to each other, if the
"D" shape is a container containing the object "C".

For application examples of the link technology described here,
see [Example: VisioContainer](example-visiocontainer){.unresolved}.
<hr style="padding-top:2rem" />
<a href="https://github.com/process4/docs/issues" target="_blank" class="bgw btn btn-primary btn-lg shadow-sm">Report an issue</a>
<a href="https://github.com/process4/docs" target="_blank" class="bgw btn btn-primary btn-lg shadow-sm" style="margin-left:10px;">View source code</a>
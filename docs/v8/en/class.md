-   [Definition](#definition)
-   [Diagram Classes](#diagram-classes)
-   [File Classes](#file-classes)


### Definition

An (object) class is basically a group or category
for [objects](object).

Classes are therefore data groups that are displayed below the data
hierarchy branches of a unit in the [repository](repository) or in
the [Database Designer](database-designer). The creation and management
of classes takes place in the designer.

Each [unit](unit) can contain any number of classes, which in turn can
contain any number of objects. Classes of higher or deeper hierarchy
levels inherit their structural elements ([Property Group &
Property](property-group-and-property)) hierarchically to each
selected [unit](unit); If necessary, the display of these inherited
elements can be controlled with the appropriate unit filters
in [Database Designer](database-designer).

### Diagram Classes

[Diagrams](diagram) belong to diagram classes, where diagram-specific
properties and diagram templates are stored. As for object classes, you
can create [property groups and properties](property-group-and-property) for
diagram classes. For each diagram class,
a [template](Shapes_Stencils_Templates) (or more) can also be selected,
which should be available for the creation of a diagram of this class.

To create a diagram class, right-click on the diagram branch of a unit
in the [Database Designer](Database_Designer) and select "New". In the
properties of the newly created class diagram, you can select which
template/s should be applied for this class. The list of templates
depends on the template path from a unit - i.e., this list is generated
from the templates located in the folder, where the [template path of
the unit](shapes-stencils-and-templates) is displayed. If you have defined a
template for a class diagram and then create a new chart, the
corresponding diagram class is set automatically, i.e.according to the
selected template.

### File Classes

Uploaded files to the database belong to file classes in which
file-specific properties (e.g.size, path, etc.) have been stored. These
file classes allow a basic categorization of uploaded documents. As for
object classes, you can create [property groups and
properties](shapes-stencils-and-templates) for diagram classes.

<div class="error">
Caution:

If no file class exists in a model or a database, no files can be
uploaded to the database!
  </div>

![](//images.ctfassets.net/utx1h0gfm1om/55fqycgMxac2aUykgU2i0I/8ee5f67a7ceb5ae2acd6674b187f1daf/329445.png)

*Selection of the Diagram Class*



![](//images.ctfassets.net/utx1h0gfm1om/3SGGnVzOI8o6oYsqwCyQgW/9856d0f58b385de134b9575181b45d4d/329448.png)

*Classes under the data-hierarchy branch of the Unit "0.organizational
structure" in [Database Designer](database-designer)*


<hr style="padding-top:2rem" />
<a href="https://github.com/process4/docs/issues" target="_blank" class="bgw btn btn-primary btn-lg shadow-sm">Report an issue</a>
<a href="https://github.com/process4/docs" target="_blank" class="bgw btn btn-primary btn-lg shadow-sm" style="margin-left:10px;">View source code</a>
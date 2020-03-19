-   [Link technologies](#link-technologies)
-   [Link Types](#link-types)
-   [Automatic Link](#automatic-link)
    -   [Delete Automatic Links](#delete-automatic-links)
    -   [Stop Automatic Links](#stop-automatic-links)
-   [Manual links](#manual-links)


[Objects](object) can be linked with other objects multiple times and
via different types of links. Linked objects can be viewed in
[Repository](repository). Links are defined by [Link Types](link-types)
and [Link Rules](link-rules). Both of them are managed through [Database
designer](database-designer) and can have
different [properties](property-group-and-property) (and corresponding
values). So they are meaningful components of models and a valuable
basis for evaluations.

### Link technologies

In process4.biz, there are different types of link technologies, with
which objects can be related. In some link technologies, "association
objects" can be used - these are objects belonging to a third
(uninvolved) [class](class) and through which the link can be described
with additional information.

![](//images.ctfassets.net/utx1h0gfm1om/3EWjgGvKyI8KsyCCsSUMYK/162d47a0ec84d641a74af1ab15682ee1/328842.png)

 
*Features a [combination rule](link-rules) indicates link type and linking technology*

See in detail: [link Technologies](link-technologies)

### Link Types

Link types are the various relationships (= relations) between
two [objects](object) that can be freely defined (e.g. "linked with",
"linked from", "linked to", "used in", etc.) and thus create the
relationships between objects of two [classes](class). They are defined
in the [Database Designer](database-designer) and can be used - after
appropriate configuration - by the automatic linking of objects
on [diagrams](diagram) or manually in the [repository](repository). For
each pair of [classes](class), one or more shorcut types can be defined.

See in detail: [link Types](link-types)

### Automatic Link

Automatic links via [link rules](link-rules) serve to
combine [objects](object) (on diagrams, i.e. in the course of modelling)
automatically with other objects in the database.

Such links are created automatically according to the position of the
objects on diagrams and are accepted in the [Database
Designer](database-designer) for and between the individual classes,
which then apply to their objects. The arrangement of the
individual [shapes](shapes-stencils-and-templates) (= object instances) and
their position(s) to each other on the respective diagram are read
(=interpreted) by [process4.biz](http://process4.biz). Similarly to
the [link technologies](link-technologies) created for the respective
classes, the relationships between the respective objects are then
stored in the database. These links can then be used for evaluations in
the [extension modules](process4.biz_Extension_Modules).

<div class="info">
<h3>Note:</h3>

When a [link rule](link-rules) for automatic links is to be used between
objects, first the [link type](link-types) must be defined.
  </div>

#### Delete Automatic Links

Automatic links cannot be deleted manually. They are automatically
deleted (during diagram saving), when for example, the position of the
objects is changed on the diagram. If two objects are automatically
linked, the deletion behavior of the link can be defined in the [object
properties](properties-dialog-box). By default it is set to
"Automatic", which means that each link is automatically deleted, when
the conditions for this automatic link are no longer valid (e.g.: the
object was removed from the diagram, the position of the object has
changed, or the rule for automatic [link
technology](link-technologies) in the designer has changed).

If the deletion behavior is set to "Manual", the link exists always,
even if the link technology itself is no longer valid, on which the link
was created in the DB. Therefore, these automatic links created during
the reading of the diagrams can be selectively "overruled".

Note that automatic links are written only with the graphical modelling
in the repository, but you can link objects manually in repository to
each other ad libitum. This can be used for example, when objects have
no graphical representation on a diagram, but are nonetheless driven in
the repository and should also be linked.

<div class="warning">

Changing the deletion behavior from "Automatic" to "Manual" for a link
creates a special case:

First, a graphical representation of the objects continues to exist, and
so does the object link - irrespective of a change of this graphic
representation.
  </div>

#### Stop Automatic Links

The diagram property "Automatic links" created from the system in
the [repository](repository) allows (or prohibits) the automatic link
for a selected [diagram](diagram).

You can choose per diagram and also separately per page of this diagram
whether the automatic [link technologies](link-technologies) should
apply or not.

Set the value for this parameter in the [properties
window](properties-dialog-box) of the diagram either to "True" or
"False".

### Manual links

Apart from automatic links, you can also link manually objects with
other objects and/or diagrams or files.

See:

-   [Link Objects Manually](manual-object-links)
-   [Linking Objects with Diagrams](linking-objects-with-diagrams)
-   [Linking Objects with Files](linking-objects-with-files)

![](//images.ctfassets.net/utx1h0gfm1om/3ErhVhPZxYgKqiiegCKCac/a88acefe5ad0d8f0fc0914660bf63842/328898.png)

<hr style="padding-top:2rem" />
<a href="https://github.com/process4/docs/issues" target="_blank" class="bgw btn btn-primary btn-lg shadow-sm">Report an issue</a>
<a href="https://github.com/process4/docs" target="_blank" class="bgw btn btn-primary btn-lg shadow-sm" style="margin-left:10px;">View source code</a>
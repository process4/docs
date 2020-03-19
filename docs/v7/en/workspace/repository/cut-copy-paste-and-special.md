-   [Detailed Description](#detailed-description)
    -   [Copy/Cut/Paste within a database](#copycutpaste-within-a-database)
    -   [Copy/Cut/Paste between two databases](#copycutpaste-between-two-databases)
-   [Special Functions](#special-functions)
    -   [Copy Special](#copy-special)
    -   [Comments](#comments)


You can use the familiar Microsoft Office functions Cut, Copy and Paste
within a unit, between units and even between different databases
(opened at 2 process4.biz instances).

If you copy an [object](object) (or a [diagram](diagram) with objects)
and want to paste it to a database (or to a [unit](unit)),
the [class](class) of the object to be inserted is created
automatically, if it does not exist already.


### Detailed Description

#### Copy/Cut/Paste within a database


<table>
<colgroup>
<col style="width: 25%" />
<col style="width: 25%" />
<col style="width: 25%" />
<col style="width: 25%" />
</colgroup>
<thead>
<tr class="header">
<th><p><strong>Action</strong></p></th>
<th><p><strong>from parent to child unit</strong></p></th>
<th><p><strong>from Child- to Parent Unit</strong></p></th>
<th><p><strong>between two parallel units</strong></p></th>
</tr>
</thead>
<tbody>
<tr class="odd">
<td><p><strong>Copy / Paste (=Copy to)</strong></p></td>
<td><ol>
<li>In the source unit no changes are made to the objects.</li>
<li>In the target unit, the new (pasted) object with the new name (object name+number, e.g. Note 1) is created.</li>
<li>This new (pasted) object has the same object and diagram links as the original object.</li>
<li>This new (pasted) object has a new UUID and a new ID.</li>
<li>In the diagrams in both units no changes occur.</li>
</ol></td>
<td><ol>
<li>In the source unit no changes are made to the objects.</li>
<li>In the target unit, the new (pasted) object with the new name (object name+number, e.g. Note 1) is created.</li>
<li>This new (pasted) object has the same object and diagram links as the original object.</li>
<li>This new (pasted) object has a new UUID and a new ID.</li>
<li>In the diagrams in both units no changes occur.</li>
<li>If the class of the copied object does not exist in the target unit, the class will be moved after pasting into the target unit. The Unit-affiliation of the objects does not change.</li>
</ol></td>
<td><ol>
<li>In the source unit no changes are made to the objects.</li>
<li>In the target unit, the new (pasted) object with the same name will be created.</li>
<li>This new (pasted) object has the same links as the original object.</li>
<li>This new (pasted) object has a new UUID and a new ID.</li>
<li>In the diagrams in both units no changes occur.</li>
<li>If the class of the copied object does not exist in the parallel unit, the class will be moved after pasting into the upper unit, which is the parent unit for these two units.</li>
</ol></td>
</tr>
<tr class="even">
<td><strong> Cut/Paste (= Move to)</strong></td>
<td><ol>
<li>The source object disappears from the source unit.</li>
<li>The (moved) object is created with the same properties as the original object (name, links, UUID) but with a new ID in the target unit.</li>
<li>This new (pasted) object has the same links as the original object.</li>
<li>Instead of the cut object, the new (shifted) object is used on all diagrams.</li>
</ol></td>
<td><ol>
<li>The source object disappears from the source unit.</li>
<li>The (moved) object is created with the same properties as the original object (name, links, UUID) but with a new ID in the target unit.</li>
<li>Instead of the cut object, the new (shifted) object is used on all diagrams.</li>
<li>If the class of the copied object does not exist in the target unit, the class will be moved after pasting into the target unit. The Unit-affiliation of the objects does not change.</li>
</ol></td>
<td><ol>
<li>The source object disappears from the source unit.</li>
<li>In the target unit, the new object with the same name name is created.</li>
<li>This new (pasted) object has the same links as the original object.</li>
<li>This new (pasted) object has a new UUID and a new ID.</li>
<li>Ghost shapes appear on diagrams in the source unit, because the object was cut, i.e. removed.</li>
<li>If the class of the copied object does not exist in the parallel unit, the class will be moved after pasting into the upper unit, which is the parent unit for these two units.</li>
</ol></td>
</tr>
</tbody>
</table>

#### Copy/Cut/Paste between two databases

<table>
<colgroup>
<col style="width: 25%" />
<col style="width: 25%" />
<col style="width: 25%" />
<col style="width: 25%" />
</colgroup>
<thead>
<tr class="header">
<th><strong>Action</strong></th>
<th><p><strong>Target class with the same name, same UUID and same ID exists in the target unit</strong></p></th>
<th><p><strong>Target class does not exist in the target unit</strong></p></th>
<th><p><strong>Class with the same name but different UUID and ID exists in the target unit</strong></p></th>
</tr>
</thead>
<tbody>
<tr class="odd">
<td><p><strong>Copy / Paste (= Copy to)</strong></p></td>
<td><ol>
<li>In the source unit no changes are made to the objects.</li>
<li>In the target unit, the new (pasted) object with the same name is created.</li>
<li>This new (pasted) object has the same object and diagram links as the original object, if these objects and diagrams exist in the DB.</li>
<li>However, this new (pasted) object has the same UUID but a new ID.</li>
<li>In the diagrams in both units no changes occur.</li>
</ol></td>
<td><ol>
<li>In the source unit no changes are made to the objects.</li>
<li>In the target unit, the new class and the new (pasted) object is created with the same name.</li>
<li>This new (pasted) object has the same object and diagram links as the original object, if these objects and diagrams exist in the DB.</li>
<li>However, this new (pasted) object has the same UUID but a new ID.</li>
<li>In the diagrams in both units no changes occur.</li>
</ol></td>
<td><ol>
<li>In the source unit no changes are made to the objects.</li>
<li>In the target unit, the new class with a number as Postfix and the new (pasted) object with the same name are created.</li>
<li>This new (pasted) object has the same object and diagram links as the original object, if these objects and diagrams exist in the DB.</li>
<li>However, this new (pasted) object has the same UUID but a new ID.</li>
<li>In the diagrams in both units no changes occur.</li>
</ol></td>
</tr>
<tr class="even">
<td><p><strong>Cut / Paste (= Move to)</strong></p></td>
<td><ol>
<li>The source object disappears from the source unit.</li>
<li>In the target unit, the new (pasted) object with the same name is created.</li>
<li>This new (pasted) object has the same object and diagram links as the original object, if these objects and diagrams exist in the DB.</li>
<li>However, this new (pasted) object has the same UUID but a new ID.</li>
<li>Ghost shapes appear on diagrams in the source unit, because the object was cut, i.e. removed.</li>
</ol></td>
<td><ol>
<li>The source object disappears from the source unit.</li>
<li>In the target unit, the new class and the new (=pasted) object are created with the same name.</li>
<li>This new (pasted) object has the same object and diagram links as the original object, if these objects and diagrams exist in the DB.</li>
<li>However, this new (pasted) object has the same UUID but a new ID.</li>
<li>Ghost shapes appear on diagrams in the source unit, because the object was cut, i.e. removed.</li>
</ol></td>
<td><ol>
<li>The source object disappears from the source unit.</li>
<li>In the target unit, the new class with a number as Postfix and the new (pasted) object with the same name are created.</li>
<li>This new (pasted) object has the same object and diagram links as the original object, when these objects and diagrams exist in the DB.</li>
<li>However, this new (pasted) object has the same UUID but a new ID.</li>
<li>Ghost shapes appear on diagrams in the source unit, because the object was cut, i.e. removed.</li>
</ol></td>
</tr>
</tbody>
</table>

### Special Functions

Process4.biz offers under "Special" in the context menu additional
functions for cutting, copying and pasting:

-   Copy to: allows pre-selection of the target unit for copying
-   Move to: You can move an object (or a class, a property, a property
    group) from one unit to another unit. Note that when you move a
    class upward along the unit hierarchy (from the child to the Parent
    Unit) the objects of the class remain unchanged at the current
    position.
-   Copy Special: all objects linked with the objects and their classes
    as well as the diagram on which the object is used are copied. In
    linked diagrams all objects within them are copied along with their
    classes. All objects on a diagram to be copied are copied even if
    the corresponding Unit is not copied.
-   Paste Special: works in combination with Copy Special. If you have
    copied the linked objects using Copy special and then pasted them in
    the database using Paste Special, you can choose whether objects
    should be duplicated, updated or skipped, if they already exist in
    the target unit (or in the target database). You can e.g. avoid
    duplicates entirely or make them distinguishable by a
    prefix/postfix.

#### Copy Special

Copy Special/Paste Special between the units or databases works like
copy/paste. The special features of this function are described here:

**Use copy special/paste special for the first time** (the data linked
with the object does not exist in the target unit)

1.  No changes take place in the source-unit or database.
2.  The object to be copied is copied with the object and diagram links
    you have selected.
3.  After clicking on Paste or Paste Special, the object including all
    linked objects and diagrams in the target unit or database is
    pasted, provided that these objects do not exist there already.

**Use copy special/paste special for the second + time** (the data
linked with the object exist in the target unit already)

1.  No changes take place in the source-unit or database.
2.  The object to be copied is copied with the object and diagram links
    you have selected.
3.  After clicking on Paste special, a window appears where you can
    choose what to do with the already existing objects. The linked
    objects and diagrams, as well as the object to be copied itself can
    be skipped, updated or duplicated.

#### Comments

1.  All functions described above can also be used in the same way on
    design elements ([unit](unit) , [class](class) , [Property Groups &
    Property](property-group-and-property)). When you copy a class, its
    property groups and properties are also copied. If you want to copy
    a class with all [objects](object), use the copy special function
    for best results. When you cut a class, it will be cut with all the
    properties, but also objects and then pasted. The same applies to
    copying/cutting a unit, which can be pasted with all classes,
    property groups, properties, [link types](link-types) in any
    hierarchy level.
2.  Cut/copy/paste of design elements (units, classes, property groups,
    properties, link type) is only possible if the corresponding Unit is
    locked and the user has permissions on the Design Unit.
3.  If objects of [classes](class) were created in several
    hierarchically organized units and you move them from one class
    Grand-Parent Unit to a parent-Unit, the objects of the Child unit
    will remain in the child unit and will not be moved.
4.  Copying/pasting objects from one [class](class) to another class is
    not possible.
5.  Copying objects is only possible within a [class](class), which is
    displayed in different units as inherited, i.e. within a class with
    the same UUID.
6.  When you copy a diagram, it is copied along with [the stencils and
    templates](shapes-stencils-and-templates), as well as with all
    its [objects](object). If the [classes](class) of objects do not
    exist in the target [unit](unit) or database, they are automatically
    created.
7.  Copy/Cut/Paste can be used for objects on diagrams. When you cut an
    object from the diagram, you can choose whether the object should be
    deleted from the diagram or from the database. If the object is
    deleted from the database and then re-inserted, it will be marked as
    new. All properties, object and diagram links as well as UUID remain
    identical. Only the ID changes regarding the cut object.
8.  If you do not have permission to create or change objects in a
    specific Unit, you can copy objects, but you cannot cut or paste.
9.  When a [link type](link-types) is copied, link technologies are
    copied as well and pasted to the target database (if the respective
    classes are available).
10. When you copy a link type with an association class to another
    database, the association class is also copied to the other database
    (all [link technologies and types](links) are copied).
11. However, if you copy a class with a link type or a link technology
    rule set in another database, then only the class is pasted and
    provides in the target database only those [link technologies and
    types](links), which are available in the database.

 
<hr style="padding-top:2rem" />
<a href="https://github.com/process4/docs/issues" target="_blank" class="bgw btn btn-primary btn-lg shadow-sm">Report an issue</a>
<a href="https://github.com/process4/docs" target="_blank" class="bgw btn btn-primary btn-lg shadow-sm" style="margin-left:10px;">View source code</a>
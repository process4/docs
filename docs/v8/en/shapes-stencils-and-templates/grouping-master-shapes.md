Grouping shapes optimizes the Diagram-Modelling process, if for example
objects from several identical classes (in our example: "Process" and
"Application") have to be put in the same arrangement on diagrams again
and again. By using a group master shape, several shapes (objects) can
be placed with a single drag -& drop option at the same time in
predefined and pre-formatted combination on the diagram.

To group shapes in the master shape, you proceed as follows:

1.  Create in your stencil (template) a new master shape with an
    arbitrary name, which cannot be identical to class names in your
    database.
2.  Select the "Edit Master-Shape" function for the new Master Shape on
    the context menu, and drag two or more of the shapes (of different
    classes) existing in the stencil, which you want to group. 

    <div class="warning">
    Please note:

    The shape that is used in the group should not be equipped with p4b
    properties or shape data graphics that change the appearance of the
    shape. Classes whose property "Is master shape" is set to true,
    cannot be used for grouping. 
    </div>

3.  Mark each shape on the page of the group master shape and select the
    option ***Show Shape Sheet*** in Visio menu window. Enter through
    the context menu in the Shape Sheet a new section
    under ***User-defined cells*** with the name "P4BClass", and enter
    only the value of the DB class name of the shape being processed
    (for example: "Process" for the Shape "Process", see properties of a
    class to get exact name).
4.  Select now all shapes and group them (e.g.: "Shift + Ctrl + G" or
    right-click and choose *Group*) and save the changes to the new
    Group Master-Shape and Stencil. 
5.  When you drag now the newly created Group Master-Shape 2 properties
    dialogue boxes open on a diagram in a row  and each shape
    corresponds to the selected class (or the selected classes) and
    behaves as a Process4.biz object: it can be edited, copied, removed,
    and be linked to other objects and diagrams like any other object.

![](//images.ctfassets.net/utx1h0gfm1om/1SMlO1pLnOcWQm8Suae2eM/ac0f8b17c0152f39a68ca44b92b94feb/328714.png)


-   [Creating a New Manual Link](#creating-a-new-manual-link)
-   [Cancel Existing links](#cancel-existing-links)
-   [Link objects with Shift + Drag & Drop](#link-objects-with-shift--drag--drop)

 

Usually [objects](object) are linked automatically, i.e. through
directly modelling on [diagrams](diagram) in the [Graphical Visio
Modeler](graphical-visio-modeler).

### Creating a New Manual Link

If you link objects manually (e.g.in the [repository](repository)),
without a graphical representation of the two linked objects, proceed as
follows:

1.  Mark the desired object.
2.  Open the context menu with the right mouse button.
3.  Select the function "Link to object".
4.  The tab "Object Links" in the [properties
    window](properties-dialog-box) of the selected object opens.
    1.  In the upper window section existing links are displayed sorted
        according to [link types](link-types).
    2.  In the lower part of the window, these objects are displayed,
        which can be associated with the selected object.   
        If the [class](class), to which the selected object belongs, has
        no corresponding [link rule](link-rules) (= at least a link
        with [manual link technology](link-technologies)), this part of
        the window will be left blank.
5.  Select the object to which the initially selected object should be
    linked.
6.  Click on the button "Link".
7.  Select the [link type](link-types) for the link.  
    If necessary, an association object must be selected; if this is the
    case, the dialogue field expands and offers appropriate options.
8.  After confirming with "OK", the link is created and is displayed as
    a result in the "Object links" in the upper part of the window.
9.  Close the Properties window by clicking on "OK".

![](//images.ctfassets.net/utx1h0gfm1om/1wP4Um8Pvqg4S0yEeAA0io/1cc67f999840ed27ec97ed0ef4a93c6b/328834.png)

*The tab "Object links" in an object properties window.*

### Cancel Existing links

To remove existing manual links, proceed as follows:

1.  Open the [Properties window](properties-dialog-box) of the desired
    object.
2.  Select the tab "Object links".
3.  Select the desired link in the upper part of the window.  
    The registered changeable value in the column "deletion behavior,"
    provides information on whether a link can be currently manually
    deleted or not:
    1.  If the desired link has no entry, it can be canceled manually.
        The button "Unlink" is active.
    2.  If "Automatic" is set for the desired link, it cannot be deleted
        manually. The button "Unlink" is not active in this case.
4.  By clicking on the button "Unlink" the selected link is deleted.


### Link objects with Shift + Drag & Drop

Objects can be linked (on a [diagram](diagram) in the [Graphical Visio
Modeler](Graphical_Visio_Modeler)) by pressing the shift key and
dragging out of the [Little repository](graphical-visio-modeler).

To do this, select an existing [object](object) from the Little
repository and drag it while holding down the Shift key to another
object on the diagram. A window appears to select the [link
type](link-types) and optionally the association object.

In addition, the following options are available:

-   Create only the link, but no new shape  
    See: [Link Technologies](link-technologies)
-   Create a rule for this and do not ask next time  
    If you activate this option, the [link
    technology](link-technologies) "Drag & Drop" in the [Database
    Designer](database-designer) creates a corresponding rule for the
    classes used. If you re-link objects of these classes with Shift +
    Drag & Drop, no dialogue appears and the link is created
    automatically. If this option is disabled, process4.biz creates a
    link between the two objects, but no corresponding rule in the
    Designer. The dialogue window is called up at the next Drag & Drop
    link.

<div class="warning">
Caution:

If the Schwimlane technology is already enabled for the participating
classes, objects are automatically linked. Although Shift + drag & drop
is used, no dialogue appears for manual linking.
  </div>

![](//images.ctfassets.net/utx1h0gfm1om/3tRk9mDk7eEqEogeEEoc0M/baddb4d8fcdd3f902d2d5f1341e7c98c/328832.png)  

*Dialogue window of a Drag & Drop link.*

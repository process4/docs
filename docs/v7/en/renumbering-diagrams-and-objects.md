With the function ***Renumbering ..*** in the ribbon under "Update
diagrams", you can renumber objects across multiple diagrams and the
diagrams themselves. Diagrams and objects can be renumbered separately
or together. There are two main methods to number diagrams and objects. 

1. ***(Re)number the objects on a diagram first. After that the numbers
    of objects which are used for drill-down navigation shall be used
    for (re)numbering the child-diagrams.***

The numbering of the diagrams depends on the number of the object that
is linked with the diagrams. If an object called "1.8. Construction Orga
"is linked to a diagram, the diagram becomes in addition to their own
number, the number of the object ("1.8"). See the image below: 

![](//images.ctfassets.net/utx1h0gfm1om/43GL9hHJQ4amQYCOig8US4/b6065311acfa6c4c0c9afce6ca7ff507/329105.png)

2. (***Re)number the diagrams first. Then (re)number the objects which
exist on these diagrams and use the respective diagram's number for the
objects renumeration.***

Diagrams are first numbered in the order in which they appear in the
hierarchy tree. Objects are then renumbered independently on each
diagram. The diagram number is used for the object numbering. If the
diagram has the number "1.8." objects will receive the numbers 1.8.1,
1.8.2, 1.8.3, etc.. The image shows the numbering:

![](//images.ctfassets.net/utx1h0gfm1om/4XHfmyG5UQiCg0eAcwGqeY/ae362f65f616820afa212f9fa8286611/329107.png)

To select the Numbering function, proceed as follows:

1.  Right-click on the *Diagram* section of your choice on the left
    navigation window (or choose *Renumbering* on the top ribbon).
2.  Click on ***Renumbering...*** in the context menu.
3.  This opens the Renumbering wizard, where you can set the following
    settings: 

![](//images.ctfassets.net/utx1h0gfm1om/MbVOcTKbW68MYc4kMuU2O/7a184e7f363e5c2bb4aec48b650748e4/329115.png)

-   ***Start numbering from:***

Enter the number from which the numbering should begin.

You can select one of the numbering methods described above:
(***re)number the objects on a diagram first ***or*** (re)number the
diagrams first.***

-   ***Remove numbers***

With this option, you can remove any number of all diagrams and their
objects, which you select in the subsequent dialogue box. If you want
that existing numbers of diagrams or objects are changed during the
numbering (i.e., that they are updated), the following options of
database modifications should be activated:

-   ***Update object numbers***
-   ***Update diagram numbers***

Choose in the next step, all diagrams that you want to (re)number, or
where the numbering should be removed. The selection of diagrams
available in this screen depends on the selection you made previously
(single diagram or diagram branch). If you want to renumber only
diagrams of a particular unit, right-click on the diagram-branch of this
unit and select ***renumbering ...***.

![](//images.ctfassets.net/utx1h0gfm1om/3NqE93vLTq4UIOMisESSi/1a973a16c8814c8e8da5c78f03bdd42a/329101.png)

In the following window you can select the classes of the objects that
will be renumbered or of those objects whose numbering you want to
remove:

![](//images.ctfassets.net/utx1h0gfm1om/2IwwPIuiFGAgO6GQcgKM0S/aca6564c60c5ea78567a7388a6728607/329103.png)

When you click ***Next,*** the numbering starts. If you want to renumber
only diagrams, proceed as follows:

1.  Select in the renumbering wizard "Renumber first diagrams and then
    objects".
2.  Disable the option "Update object numbers".
3.  Select diagrams you want renumber.
4.  Select all classes. Diagrams are numbered according to the principle
    of the hierarchy tree.

If you only want to renumber objects in all diagrams:

1.  Select in the renumbering wizard "Renumber first objects and then
    diagrams".
2.  Disable the option "Update diagram numbers".
3.  Select all the diagrams.
4.  Select the classes of the objects you want renumber. 

If you want to renumber objects on a single diagram, right-click on the
appropriate diagram and select ***Renumbering ..*** from the context
menu. The renumbering wizard starts, but in this case only a reduced
number of classes and their objects appears according to the object use
on this diagram.

The numbering of objects depends on the directions of the object links.
When objects A and B are linked automatically or manually and the
direction has been set between them (with "from" or "to"), the two
objects in the diagram are linked accordingly (1.A 2.B in the direction
of A&gt; B (A to B) and 1.B, 2.A in the direction of A &lt;B (B to A)).
If the direction is set to "both" or the two objects are not linked,
they will be numbered by default from left to right and from top to
bottom on the diagram.

 

<hr style="padding-top:2rem" />
<a href="https://github.com/process4/docs/issues" target="_blank" class="bgw btn btn-primary btn-lg shadow-sm">Report an issue</a>
<a href="https://github.com/process4/docs" target="_blank" class="bgw btn btn-primary btn-lg shadow-sm" style="margin-left:10px;">View source code</a>
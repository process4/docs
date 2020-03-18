### Feature description

In p4b it is possible to change the image of an icon associated with a
particular file type on the published site.

### Solution

-   In Visio, open the file **publish.vss** located in the folder
    **C:\\Program Files (x86)\\process4biz\\Extensions\\Publisher
    Server\\generate**. First copy this file to another folder (make a
    backup). In this file you can find the master shape which
    corresponds to the file type you want to edit (or add a new one).
-   Edit the stencil, open this master shape (double-click on it),
    choose this shape/image on the sheet and define the type size.
    Please note that you should not change the shape size.
-   Save changes.

If you publish again, the type size of descriptions will be changed as
you have defined it.

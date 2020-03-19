### Feature description

In p4b it is possible to change font/type size of tooltips such as
property descriptions and diagram choices via Smarttags.

### Solution

-   In Visio, open the file **publish.vss** located in the folder
    ***C:\\Program Files\\process4biz\\Extensions\\Publisher
    Server\\generate***. First copy this file to another folder (make a
    backup). In this file you can find the master shape **Tooltip**.
-   Edit the stencil, open this master shape (doubble-click on it),
    choose this shape on the sheet and define the type size. Please note
    that you should not change the shape size.
-   Save changes.

If you publish again, the type size of the descriptions will be changed
as you have defined it.

<hr style="padding-top:2rem" />
<a href="https://github.com/process4/docs/issues" target="_blank" class="bgw btn btn-primary btn-lg shadow-sm">Report an issue</a>
<a href="https://github.com/process4/docs" target="_blank" class="bgw btn btn-primary btn-lg shadow-sm" style="margin-left:10px;">View source code</a>
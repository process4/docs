-   [Upload files to the database](#upload-files-to-the-database)
    -   [Context menu of files](#context-menu-of-files)
-   [Link files](#link-files)
    -   [Cancel existing File links](#cancel-existing-file-links)


In [process4.biz](http://process4.biz/) it is possible to link files
with [objects](object) and [diagrams](diagram).

Files are either referenced
through [properties](property-group-and-property) of the type "Hyperlink" or
"path", but they can also be uploaded directly into the database and
then be linked. Both of these variants result in a [smart
tag](/graphical-visio-modelerr) on each object.

### Upload files to the database

To upload files to the database, proceed as follows:

1.  Select in the [repository](repository) the [File class](class) where
    the file should be available.  
    If you have not created any individual file classes, the
    generic [class](class) "File" is only available.

   <div class="warning">
   Note:

    If no single class file exists, no files can be uploaded to the
    database!
   </div>

2.  Open the context menu (right mouse button), and select the "New"
    function.

    <div class=""success">
  
    Alternative:

    Click on the button "New" in the menu bar in
    the [repository](repository).
    </div>

3.  The dialogue for selecting the file appears.   
    Optionally, you can decide here through a checkbox that the file
    will be referenced in the database, without having been actually
    uploaded.  
    ![](//images.ctfassets.net/utx1h0gfm1om/5PKNB4t4buIoCOAoyQcsag/15df549969e5f9374bcabaef7e18b7d9/328816.png)
4.  The [properties window](properties-dialog-box) of the uploaded or
    referenced file appears.  
    The following [properties](property-group-and-property)) are available
    specifically for files:
    1.  Name  
        Here a (new) name can be assigned to the file; by default, the
        name of the file selected in Step 3 is taken.
    2.  Unit  
        Indicates where this file will be created in the unit hierarchy
    3.  Class  
        The required [file class](class) can be selected.
    4.  Is a link  
        Indicates according to the selection in step 3, whether the file
        is uploaded or referenced.

    5.  File size  
        Indicates the file size in bytes.
    6.  Original path  
        Indicates the path from where the file has been uploaded.

5.  By clicking "OK", the process is complete. The file is now available
    in the database.

<div class="success">
Alternative:

As an alternative to this procedure, the function "upload a file (and
link)" can be selected from the context menu of objects and diagrams. If
you use this function, the uploaded or referenced file is linked
directly to the selected object or diagram.
</div>

#### Context menu of files

In the context menu for uploaded files, you have the following
file-specific functions:

-   Re-upload file   
    If an existing file has been modified, you can use this option to
    re-upload (and replace) the file.
-   Save the file(s) on a drive  
    Downloads the selected file/s from the database.

### Link files

To link files to [objects](object) or [diagrams](diagram),
proceed (similarly to the necessary procedure in order [to link objects
manually](manual-object-links)) as follows:

1.  Mark the desired object or diagram.
2.  Open the context menu by right-clicking and select "Properties". 
3.  The tab "Files" shows in the upper part of the window all existing
    links to files, as well as in the lower part of the window all those
    files that can yet be linked.
4.  Select the file or object which should be linked with the initially
    selected object.
5.  Click on the button "Link".
6.  Close the Properties window by clicking on "OK".

Any number of files can be linked to an object or diagram; to do this,
repeat step 4 and 5 for all other files.

#### Cancel existing File links

1.  Open the [Properties window](properties-dialog-box) of the desired
    object.
2.  Select the tab "files".
3.  Select the desired link in the upper part of the window.
4.  By clicking on the button "Unlink" the selected link is deleted.
 

![](//images.ctfassets.net/utx1h0gfm1om/4mQ64jCSz6QogQCcoGO8y4/9627fdde98aeb9d143cfe7d1f831aefd/328818.png)

*The properties window of an uploaded file.*

 

![](//images.ctfassets.net/utx1h0gfm1om/4n8AuKYk76ke8iUEii6oYc/47283b54e5c806f34161b9c6e619ff33/328804.png)

*File links of the object "Send offer".*
<hr style="padding-top:2rem" />
<a href="https://github.com/process4/docs/issues" target="_blank" class="bgw btn btn-primary btn-lg shadow-sm">Report an issue</a>
<a href="https://github.com/process4/docs" target="_blank" class="bgw btn btn-primary btn-lg shadow-sm" style="margin-left:10px;">View source code</a>
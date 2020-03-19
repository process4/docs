This option allows you to choose whether your diagrams and/or templates
and stencils should be saved as Visio files in a directory on the hard
disk, directly into the SQL Server database as BLOB (= Binary Large
OBjects), or in a SharePoint document library (applies only to
diagrams). To start the Diagram Storage wizard you need to click *Change
the diagram storage* button.

![](//images.ctfassets.net/utx1h0gfm1om/5sP3NBhpbUKgc2IqUSikm8/2ad32a9554a82bb420835ffc92e438d5/329366.png)

 

 

After that you will be able to select the options for the storage of
diagrams:

1.  Select the diagram file format from the drop-down list:  
    -   Visio 2003-2010 (\* .vsd) - a standard diagram format for Visio
        2003 to 2010.
    -   Visio 2013 - 2016 (\* .vsdx / \* vsdm.) - new format for
        diagrams in Visio 2013 - \* .vsdx for normal diagrams, \* .vsdm
        for diagrams with Macros.
    -   Visio Web Drawing (\* .vdw) - a special format for the display
        of diagrams in SharePoint, suitable for Visio
        diagrams 2003-2010.

![](//images.ctfassets.net/utx1h0gfm1om/6bpLDIs30AC6wKOEq262wE/98315bf1ce8da097a74c8725e52d6d9b/329377.png)
     
2.  Select the the path where the diagrams will be stored:  
    -   Store the diagrams in a directory of your file system as regular
        Visio files  - option moves all diagrams in the folder you
        configured as diagrams directory for the current database.
        Clicking the button *Browse... *opens the window where user can
        choose the path to store the diagrams.
    -   Store the diagrams in the database (in the SQL-Server)
        directly - option moves all diagrams directly into the database.
    -   Store the diagrams in a SharePoint library -  option moves all
        diagrams to the selected SharePoint document library. In this
        case user has to specify the site, library and Synchronization
        rule.
        


![](//images.ctfassets.net/utx1h0gfm1om/cuWqtvyGS4CGoES2go4CQ/3f3c6ec08164d6b3735656d1d0aeafd0/329386.png)
          
3.  In the window of the wizard you can select the options for the
    storage of templates:  
    -   Store the templates in a directory of your file system as
        regular Visio files  - option moves all diagrams in the folder
        you configured as diagrams directory for the current database.
        Clicking the button *Browse... *opens the window where user can
        choose the path to store the diagrams.
    -   Store the templates in the database (in the SQL - Server)
        directly - option moves all diagrams directly into the database.
    -   Store the templates in a SharePoint library -  option moves all
        diagrams to the selected SharePoint document library. In this
        case user has to specify the site and library.

     



<hr style="padding-top:2rem" />
<a href="https://github.com/process4/docs/issues" target="_blank" class="bgw btn btn-primary btn-lg shadow-sm">Report an issue</a>
<a href="https://github.com/process4/docs" target="_blank" class="bgw btn btn-primary btn-lg shadow-sm" style="margin-left:10px;">View source code</a>
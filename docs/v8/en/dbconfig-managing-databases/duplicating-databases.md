Existing databases can be duplicated as follows through the "Duplicate"
button in [DBConfig](Installation-DbConfig: Managing Databases):

1.  Select the database to be duplicated or the relevant connection
    profile. 
2.  Click on the button "Duplicate".
3.  In the open window, you have the following options to duplicate the
    selected database: Click "Duplicate"
    -   Database Server: specifies the SQL server where the database
        duplicate is to be created.
    -   Optional: use the current Windows user (for this user the
        corresponding rights to the selected SQL Server are required;
        see [Login as a Windows user](#the-necessary-rights) ).

    -   Username: Enter your username for the SQL Server.
    -   Password: enter your password for the SQL Server.
    -   New Profile Name: enter a name for the automatically
        created [DBConfig](#){.unresolved} connection profile of the
        duplicated database.
    -   New Database Name: Enter here the desired name of the duplicated
        database in SQL Server.
    -   Data Path/Log Path: is automatically filled according to the
        selected SQL Server with its default paths, but can be changed
        if necessary. The button "D" in front of the box restores the
        default values if necessary.
    -   Temporary Backup Folder: enter a folder, which may be used
        by DBConfig for the necessary, temporary backup of the database
        to be duplicated.
    -   Duplicate Diagrams: offers the possibility to
        duplicate [diagrams](basic-diagrams) too.
        -   Diagram Path: enter the desired diagram path of the
            duplicated database.
    -   Duplicate Stencils and Templates: provides the ability to
        duplicate the [stencils and templates](#shape) too.
        -   Stencil Path: enter the desired stencil path of the
            duplicated database.

4.  Click on the button Duplicate.
5.  The database selected in step 1 will now be duplicated according to
    the options you have selected.

![](//images.ctfassets.net/utx1h0gfm1om/1gSxsNLEvksGG2Q2EEck0m/45902a931ef6c6731f2d6b80f01e4288/329376.png)

With this function, you can restore databases (also without stencils and
diagrams) from previous backup copies and also from previous releases.

Additionally you have the option to restore at anytime the p4b
demonstration database and an empty database as a new profile. The
standard diagram and templates directories are filled out
automatically (according to the defined standard folder, see Configuring
Database Connections)
![](//images.ctfassets.net/utx1h0gfm1om/1xcRhDbtooE64UUeWiY8sg/a66fcc742c1f9cb43456409ce95822b1/329370.png)

### Restoring a Database

-   Database Server: select the name of the SQL database server. With
    the search you can find all present (visible) SQL Servers in the LAN

    <div class="warning">
    <strong> Attention: 
      </strong>

    When restoring databases on non-local SQL servers, appropriate user
    rights are required. Please clarify this for corresponding projects
    in advance with your SQL administrator and make sure that the
    necessary rights are available.
      </div>

-   Optional: use the current Windows user (for this user the
    corresponding rights to the selected SQL Server are required;
    see Login as Windows user).

-   Username: Enter your username for the SQL Server
-   Password: enter your password for the SQL Server
-   Database name: Enter the desired database name
-   Database file: select the database file (with the extension \* .db),
    wherefrom you want to restore

    <div class="note">
    <strong>Note: 
      </strong>

    If the restored database backup is located on a network share, the
    user group "Everyone" on the respective network share should have
    read & write permissions.
      </div>


-   Database Folder: Specifies the folder where the SQL Server files of
    your database will be saved; it is filled automatically or through
    the "D" button in front of the input field
-   Use this archive with diagrams for the backup: this path is filled
    automatically, provided that an archived folder with process4.biz
    diagrams is found in the directory of the DB backup file.
    Alternatively, you can also select another archive or disable this
    option, if the relevant diagrams are already unpacked. During the
    restoration, the diagrams with an activated check-box are
    automatically extracted in the destination folder (= diagram path).
-   Diagram Path: select the folder in which the process4.biz diagrams
    of the restored database are to be found. If .zip files for
    diagrams were automatically found, they are unpacked through the
    restoration in the specified folder.
-   Use this archive with stencils for the backup: as with the diagram
    archive, an archive with process4.biz stencils can be unpacked
    automatically in a selectable destination folder (= stencil path)
    with this option. Even if the .zip file is empty, a stencil path is
    created.
-   Stencil Path: select the destination folder for the process4.biz
    stencils of the database to be restored.
-   To perform the restore, click Restore.
<hr style="padding-top:2rem" />
<a href="https://github.com/process4/docs/issues" target="_blank" class="bgw btn btn-primary btn-lg shadow-sm">Report an issue</a>
<a href="https://github.com/process4/docs" target="_blank" class="bgw btn btn-primary btn-lg shadow-sm" style="margin-left:10px;">View source code</a>
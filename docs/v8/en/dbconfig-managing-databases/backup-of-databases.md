-   [Create Backup](#create-backup)
-   [Delete Backup](#delete-backup)
-   [Restore Backup](#restore-backup)


[DBConfig](installation-dbconfig: managing databases) can be used to create backups of your
databases, including stencils, templates and diagrams.

This process optimizes the backup and enables a simple version
management of an entire process4.biz databases. The backup copies can be
easily recovered with DBConfig.

### Create Backup

Click the Backup/Versions button if you want to create the backup of a
selected database.

First select the desired database connection profile for the backup and
follow these steps, when filling in the fields in this dialog box:

1.  Select Add to store the backup information to a selected profile
2.  Since release 5.3.1, there is a default folder for database backups.
    This backup folder is pre-selected by default, but you can specify a
    different backup path by searching or creating a new folder. The
    selected backup folder is stored per database profile so that you
    can skip this point during further backups and only need to add more
    specific backup information.

   <div class="warning"> 
  <strong>Attention:</strong>

       If the SQL server is not running locally and you want to create a
    backup on your PC remotely from a central database on the LAN via
    Backup/Versions, enter a network path (eg.: \\\\MyComputer\\Backup
    folder) for the backup folder on your computer (otherwise DbConfig
    would try to do the backup on a directory of the SQL server via the
    folder C:\\Backup).
   </div>

3.  Fill in the fields "Created by" (mandatory) and description
    (optional), where needed, to manage your database versions. The
    field "created on" is automatically filled with the system time of
    process4.biz.

4.  If you then click the Add button, the backup of your database,
    including diagrams and templates will be created in the specified
    backup folders.

5.  Only after having correctly added the database for backup to the
    backup list, confirm the execution of the backup by clicking on OK
    and exit the dialog box.


![](//images.ctfassets.net/utx1h0gfm1om/6uODobValGgys88u0GKwCC/e3321e16d1b2809447d7b41da7db3607/329636.png)

 

### Delete Backup

You can delete the already created backups by selecting the backup entry
and click Remove. The backup entry will be deleted in the backup list
and the database file (\* .db or \* .bak) will be removed from the
backup folder on the hard disk. If you enable the respective option,
diagrams (\* .vsd), stencils (\* .vss) and templates (\* .vst) are
removed too from the backup directory.

### Restore Backup

If you want to restore the already created backup copy including the
stencils, templates and diagrams, select the backup copy and click the
Restore button on the subsequent dialog of the button Backup / Versions.

You can select one of the following functions to restore the database
from the backup:

-   Restoring to the same memory locations and data overwrite: the
    database is created in the existing profile. The existing database
    is overwritten by the database from the backup. The stencils,
    templates and diagrams will be overwritten by the corresponding
    files from the backup.
-   Restoring to a newly defined storage location: the database is
    created in a new profile. Select in which folder the backed-up
    diagrams and stencils are to be stored for the new profile.

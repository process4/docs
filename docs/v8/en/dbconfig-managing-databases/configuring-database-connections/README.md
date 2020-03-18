-   [DBConfig menu](#dbconfig-menu)
    -   [Database backup
        procedures](#database-backup-procedures)
    -   [Changing the
        password](#changing-the-password)
    -   [Choose a set with
        profiles](#choose-a-set-with-profiles)
    -   [Select the default
        values](#select-the-default-values)
        -   [Default SQL
            Server](#default-sql-server)
        -   [Default path for
            restore](#default-path-for-restore)
        -   [Default path for
            backups](#default-path-for-backups)
        -   [Default path for temporary
            backup](#default-path-for-temporary-backup)
    -   [Start or finish
        Log](#start-or-finish-Log)
    -   [Resetting the password for the admin user of this
        database](#resetting-the-password-for-the-admin-user-of-this-database)
-   [Database
    profiles](#database-profiles)
    -   [Add](#add)
    -   [Remove](#remove)
    -   [Testing](#testing)
    -   [Backup/Versions - Restore -
        Duplicate](#backupversions---restore---duplicate)
-   [Connection
    Configuration](#connection-configuration)
    -   [Profile Name](#profile-name)
    -   [Database
        server](#database-server)
    -   [Database Name](#database-name)
    -   [Use the integrated security of Windows
        NT](#use-the-integrated-security-of-windows-nt)
    -   [Username](#user-name)
    -   [Password](#password)
    -   [Diagrams path](#diagrams-path)
    -   [Stencils path](#stencils-path)
### DBConfig menu

#### Database backup procedures

-   Restore Database - see Restoring Databases
-   Database backup - as opposed to the function Backup of Databases,
    this option allows you to create only a \* .db file without diagrams
    and stencils.

#### Changing the password

Here you can change the password for DBConfig.

#### Choose a set with profiles

Use this feature to make pre-configured database profiles available to
all other process4.biz Clients with matching paths for diagrams and
stencils on a common, centrally stored .XML profile file.

Enter the DB connection profiles on a process4.biz client via DBConfig
and place the \* .xml file in a central folder on your LAN, which can be
accessed by all p4b users. Then enter the path and file name of your XML
profile file in the DBConfig of your clients, in order to make the
pre-configured database connections available to them.

#### Select the default values

From the top menu bar choose Profiles &gt; Choose the default values...
It opens the following window:

  

##### Default SQL Server

Here, a default value can be set for the standard SQL Server in order
for this selection to be displayed as already pre-populated in
other DBConfig functions (eg. Restoring Databases).

By ticking the "Please do check the SQL-Servers compatibility with the
system requirements" checks whether SQL-Server is compatible with
process4biz database. It can be useful when working with COPY\_ONLY
backups. Uncheck this if you want to use your database on an older
version of SQL-Server.

##### Default path for restore

Here you can determine the folder that is automatically used when you
restore the demo or empty database. Diagrams and stencils of the
restored database are stored here by default. You can switch manually,
if necessary, when restoring this folder.

##### Default path for backups

Here you can specify a default directory, which is used for local backup
of your process4.biz databases, including diagrams and stencils via
Backup/Versions. If you do not specify a specific folder, backups are
stored by default in the folder
"C:\\Users\\Public\\Documents\\Process4.biz Data\\Backups".

##### Default path for temporary backup

Sets the path for any temporary backups (e.g. necessary to duplicate
databases). After the installation, this default path is set here:

``` java
C:\Users\user\AppData\Local\Temp\process4biz_backup
```

#### Start or finish Log

If there are problems with the DBConfig, you can start the program
together with a protocol. Then a "Log.txt" file is automatically created
under the installation folder "...\\process4\\DBConfig\\", which you can
send to the [Helpdesk](faqs-before-contacting-the-p4b-helpdesk) for fault analysis.

#### Resetting the password for the admin user of this database

This function resets the password for the user "Admin", which you use to
login in the selected database in the process4.biz client.

<div class="info">
Two users can not start DbConfig at the same time.
  </div>

 

![](//images.ctfassets.net/utx1h0gfm1om/3Y8eumJelOOKuYMQOmMU20/52361614d8bd334386adf1fe300b22f6/329616.png)

 

### Database profiles

#### Add

Adds a new, empty database connection profile and can be used for
example to connect databases created in the SQL Management Studio
with process4.biz.

#### Remove

Removes an existing connection profile, and optionally also the database
with SQL Server, as well as all diagrams and stencils of the profile.
The option "Remove the database backups" can only be used if backups
from this database have already been created with DBConfig.

#### Testing

Tests the selected connection profile and access to the SQL server. In
addition, it checks what rights the user has with respect to the
selected database on the server (e.g.: "db\_datareader" and/or
"db\_datawriter") and about size of the selected database.

![](//images.ctfassets.net/utx1h0gfm1om/38MKjY8ljaE8sseAcMMsOI/ac2d93fc1dae8e0bce73f50b1dffa55d/329380.png)

#### Backup/Versions - Restore - Duplicate

These functions are described separately in the relevant articles:

-   Backup of Databases
-   Restoring Databases
-   Duplicating Databases

### Connection Configuration

#### Profile Name

That name is defined, which is displayed by login in process4.biz for
the selection of the database.

#### Database server

Please enter the name of the SQL server that (should) make the
process4.biz database(s) available. In case of a local SQL installation
on your computer, this name is either the computer name, the value
"(local)", or else the name you have chosen for your SQL instance.

<div class="sucsess">
If you do not specify any name, but click the Search button instead, all visible SQL Server on your local network can be found.
  </div>

#### Database Name

Please enter the name of your database in the SQL Server. When you click
on the Search button, all existing databases on your SQL Server are
found automatically, provided that you have already specified the
username and password.

#### Use the integrated security of Windows NT

The activation of this button creates the connection to the process4.biz
database under the current Windows username. In this case, you should
not fill in the fields username and password. Please note that the
Windows user must also be added to the SQL Server with the necessary
permissions for the database.

Information regarding the configuration of the SQL Server for the
registration as a Windows user is available here: Login as Windows User

#### Username

Here you enter the username used to access a database on the SQL server.
Note that this is not the same username that (should) enable(s) you to
login to databases at the start of process4.biz.

Information to configure the SQL Server to login as SQL user, can be
found here: Login as SQL-Server User

#### Password

Here you enter - as in the description username - the password necessary
to access the database in the SQL Server.

#### Diagrams path

Here you can determine where the directory diagrams should be saved
(select as desired). A separate directory should be selected on a
network server for each Pro database, so all users (in multiuser mode)
have access to it.

#### Stencils path

Here you specify the directory wherefrom the stencils  are loaded. These
templates should be in a central network location (especially if you are
going to adapt them to your needs or have already done so). All
process4.biz-users should have access to the network directory , unless
you use the BLOB functionality (Binary Large Objects), where the
stencils and the diagrams are additionally stored directly in the
database on the SQL Server. In the same directory, you should save your
Visio templates too.

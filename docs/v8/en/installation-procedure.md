- [Language selection](#language-selection)
- [Select Installation Type](#select-installation-type)
  - [Select Items](#select-items)
- [Database Profiles / DbConfig.xml](#database-profiles--dbconfigxml)
- [Other software components](#other-software-components)
  - [SQL](#sql)
  - [Adobe SVG Viewer](#adobe-svg-viewer)
- [Creating Databases](#creating-databases)
- [Enter License Key](#enter-license-key)
- [First Login](#first-login)


## Language selection

Via the process4.biz installer (\*.exe) you can
select the installation language; German, English, and French are the
available installation languages. This language choice concerns the
installation and sets the language for the first start of
process4.biz, the display language for the
interface and the content model. However, it can be changed anytime via
the [client settings](client-settings).

![329446](//images.ctfassets.net/utx1h0gfm1om/32sZRIn27Y6qkUQi08OqwY/b7df580ba3a75228b649a97e6d93d35f/329446.png)

<div class="info">
  <h3>Info</h3>
  
 If you use installation file with the \*.msi extension the default
language of OS language automatically will be set as a language of the
process4.biz modeler.
  
</div>


## Select Installation Type

Basically you can choose between an installation with default settings and Custom installation. 

![Setup](//images.ctfassets.net/6mz8d8cle1nl/2qx7tviPpva4l6WXkM8swm/a094a4622ef10b616c099c477bc24cb1/Setup.png)
 
If you selected Install now the process4.biz installation will be started and Setup settings cannot be changed during installation. But you always can change your installation if it necessary by starting process4.biz installer again. 
If you selected Custom you can choose between a client installation and an installation of the Server License Services (see Server license).
In the next installation step  you can select via the client installation the necessary components; the server license service is necessary for the management of server license and makes available the license to the centrally controlled p4b clients.



#### Select Items

-   p4b basic modules: core component, consisting of the repository, the
    designer and the Graphical Visio Modeler. It can be deselected for
    stand-alone installation of DBConfig.
-   DB update (DBUpgrade)
-   Dynamics AX: allows you to import data from the Microsoft Dynamics
    AX ERP system
-   ImportExportManager
-   Dynamics SureStep Reporter: enables automatic filling of Excel-based
    Dynamics Sure Step Gap-Fit reports
-   WordReporter
-   DocumentComposer
-   process4.biz CobiT / ITIL generates special reports on the Maturity
    Level of IT processes in your company, specified by the COBIT5
    reference model.
-   WebPublisher
-   QueryBuilder
-   SharePointSync: enables SharePoint Integration
-   TaskManagement: allows you to assign a task for the person in charge
    of an activity with a due date in Outlook.
-   RACI Reports: allows the creation of reports about the
    responsibility of the respective roles and functions in the
    activities of a process 
-   ActiveDirectory Import: Extension of a third party; the "Active
    Directory" can thus be visualized in process4.biz and its data is
    imported into the repository.
-   DBConfig: program for configuring the connection profile of your p4b
    databases on the SQL server.
-   Server Licensing: installs the server license service (see Server
    License)
-   Database: installs the demo database supplied with the respective
    release; in addition there is also an empty database available

Databases, which contain the Dynamics AX or NAV, or COBIT5 reference
model, are always supplied separately and are not part of the setup.

![Setup 2](//images.ctfassets.net/6mz8d8cle1nl/xJt3DKyzsedlDo876gfJL/712e6b9041ed27cfe20b71c66841d253/Setup_2.png)

*Selecting of the installed components*

### Database Profiles / DbConfig.xml

Specifies the location of DbConfig.xml where the database profiles are
stored.

**Path of the website**

``` java
C:\Program Data\process4\DbConfig.xml
```

If you enable "Copy the XML file of the profile and then use it
locally", the DbConfig.xml is copied to a local folder. All changes
applied during setup (e.g. during setup of the demo database) are saved
in this local XML file.

When the user opens the DBConfig on the client used for the
installation, the local XML file is opened and modified as applicable.
These changes are stored locally and are only visible to the respective
user. This option is suitable for multi-user installations, if users
have no permissions to a central drive (where the universal XML file is
located).

Note that this option is only available when you run the setup as an
administrator.

When upgrading an existing installation: Enter the path to your
previously used DbConfig.xml (together with all the already configured
connection profiles) to continue to use them.

See: [DbConfig: Managing Databases](dbconfig-managing-databases)

### Other software components

#### SQL

Only for demo installations!

Installs SQL 2008 Express for demonstration purposes for clients who do
not have a local SQL Server or an available SQL Server in the network.

#### Adobe SVG Viewer

Installs the Adobe SVG Viewer, which is necessary in old versions of
Internet Explorer for the display of SVG graphics. This option is
disabled by default because the display of SVG is supported natively
from Internet Explorer 9 and higher.
![329457](//images.ctfassets.net/utx1h0gfm1om/2lEE9m75za2gK6IiqyIGca/f964ac216785ad7a54716cf277143374/329457.png)

### Creating Databases

The setup of process4.biz provides you with the installation option to
import the available database (DEMO & EMPTY) directly to an available
SQL Server and automatically generates the database connection profile
for it.

1.  Define the name of the database
2.  Select the target SQL Server to restore the database (by default, a
    demo installation is assumed and therefore ".\\ SQLExpress is
    "preselected)
3.  Select whether to use your Windows NT authentication or SQL Server
    authentication: you can restore the Demo DB with the Windows NT
    authentication option by default. 

    <div class="info">
  <strong>   Please note:</strong>
  

- When a user of the Administrator group restores the DB and then another user wants to log in to the database, this other user must be added first as a user in SQL Server with the necessary permissions for the database
-  In Windows 7 and 8 even a user of the Administrator group must       first be added to the SQL Server with the appropriate permissions for the database in order to be able to restore the database with "Windows NT authentication".             
      
</div>

  
4.  As an alternative to Windows NT authentication, you can use the SQL
    Server authentication. In this case, enter your login information
    for the SQL Server (requires at least the server role "dbcreator"). 

  <div class="info"> 
  
  When you install SQL Express via the p4b setups and then wish to restore databases, please use the following login information:
     
    -   User: sa
    -   Password: Process4.biz
   
   </div>

5.  Check connection using "Test" button

The two database connection profiles of the EMPTY and DEMO database are
automatically saved in the previously stored or selected DbConfig.xml.

 

### License Information

During Custom setup you can select which kind of license you will use Online or Server and URL’s of licenses hosting server. As default it is set to Online license and with URL of hosting server at https://registration.process4.biz. 
 
 ![Setup 3](//images.ctfassets.net/6mz8d8cle1nl/3DqpvsxaeqH6VXdOttas5g/3fb5107fc4b64c5456fae6ee19023930/Setup_3.png)
 
<div class="info">
  
Type of license can be changed after installation in the License activation window and URL of license hosting server in the Client settings. 

</div>

More about Licensing you can read in the [Licensing](licensing) section


### First Login

To use process4.biz, login in a database is required.

<div class="warning">
 For the first login in an empty or Demo database the preconfigured user
"Admin" is used: the password for this user has to be empty during the
first login, but should be set immediately via the user
management.
</div>


After a successful login as process4.biz Admin, more process4.biz-
and/or Windows users (groups) can be added and the
respective permissions can be created and assigned.



<hr style="padding-top:2rem" />
<a href="https://github.com/process4/docs/issues" target="_blank" class="bgw btn btn-primary btn-lg shadow-sm">Report an issue</a>
<a href="https://github.com/process4/docs" target="_blank" class="bgw btn btn-primary btn-lg shadow-sm" style="margin-left:10px;">View source code</a>
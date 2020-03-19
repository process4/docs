Depending on your installation requirements and the purchased licenses,
we will provide you with different setup files:

-   We supply \* .exe files for the demo version, for the named user
    installation and for the Enterprise Portal Server.
-   For the concurrent user installation, there is also a \* .msi file
    that allows the use in LAN from a central location

The use of process4.biz on LAN via remote maintenance is possible
through an administrator in "silent mode". For this to happen, open the
\* .msi file delivered to you with the modifiable \* .bat file, where
you can put each relevant parameter for your installation. You can enter
an alternative parameter directly in the Windows command line.

For the correct and automatic creation of the installation parameters
for your individual \* .bat file, you can use our Wizard: Silent Mode
Installation Settings

In principle the following applies for the selection of components:

-    0 = do not install
-   1 = install

All parameters for the extensions listed below (except for
"INSTALL\_ACTIVE\_DIRECTORY") are installed by default. If you do not
want an extension to be installed, you must specify this additionally in
the command line with the parameter value "0". Please note that running
the "silent mode" installation is possible only as an administrator.

### Overview of installation parameters


| Parameter     | Description of the parameter     | Parameter Value (example)     |
| ---------- | ---------- | ---------- |
| INSTALL_DIR     | Enter here the place where you want to install process4.biz.      | ="C:\Program Files\process4\"     |
| PROFILES       | Select the storage location for the XML file of the profile       | ="C:\ProgramData\process4 "      |
| PROFILE_LOCAL       | Select the location for the local XML file of the profile       | = "C: \ Users \ Katya \ AppData \ Local \ process4     |
| DBCONFIG_PWD       | Enter the password for the DBConfig (optional)      | = "P4b"       |
| LANGUAGE_ID       | Select the language of the GUI that is displayed for the user on first login. (The user may later change the language in the application itself) Parameter "1031" -> for German Parameter "1033" -> for English Parameter "1036" -> for French     | = "1033"      |
| USE_SERVER_LICENSE       | Specify whether you want to use server licensing or not.      | = "1" - use; = "0" - do not use     |
| LICENSE_SERVER_NAME       | Enter the IP address or the name of that server on which the p4b license server program is running. (If the parameter USE_SERVER_LICENSE is activated)       | = "193.166.0.155" (The IP address is found automatically, when p4b has access from the virtual machine out to the server license program on host [= on the same PC]).       |
| INSTALL_LICENSE_SERVICE      | Define whether the license server is to be installed as a Windows service or not. This parameter should be activated only for the main computer (server) on which the service is started, and should be available for all other computers. (If the parameter USE_SERVER_LICENSE is activated)       | = "1" - install service; ="0"- do not install service      |
| LICENSE_USER_NAME      | Enter the license user name.       | ="John"      |
|License_Key       | 	Specify the license key.      | = "LX01-FK5R-RTS5 -…"      |
| INSTALL_DB      | Define here, which p4b databases you want to install automatically via script with the connection profile during setup. You can also install an empty database. "0" -> no DB install; "1" -> Install an empty database; "2" -> Install a Demo Database; "3" -> Install both (Demo and empty database)       | = "1"      |
| Concurrent License Server      | Name of the DB server (SQL Server) for the installation of the empty database       | = "MAURITIUS"      |
|     DB_SQL_AUTH_MODE   | Specify whether the SQL Server Authentication (with username and password) or Windows NT Integrated Security for SQL Server should be used for the SQL server access. The parameter is valid for the installation of the empty DB. "0" -> use Windows NT Use Diagram structure; "1" -> use SQL Server Authentication     | = "0" (When "1" is specified, a value should be assigned to the parameters DB_USER_NAME and DB_PASSWORD     |
| DB_USER_NAME      | Login for the DB-Server to install the empty DB.       | ="sa"       |
| DB_PASSWORD       | Password for the DB-Server to install the empty DB.       | ="123"      |
| INSTALL_DBCONFIG     | Decides whether DbConfig should be installed.       | ="1" – install; ="0" – do not install       |
| INSTALL_MODELER       | Decides whether process4.biz should be installed; enter "0" to install only DbConfig (e.g. on the SQL server).      | ="1" – install; ="0" – do not install       |
|INSTALL_WEB_PUBLISHER       | Web Publisher Extension       | = "1" - install;= "0" - do not install      |
| INSTALL_WEB_PUBLISHER_IIS_SUPPORT       | The parameter installs the "IIS 6 Management Compatibility". This option is necessary for a local p4b web portal to function properly on IIS 8.      | = "1" - install;= "0" - do not install       |
| INSTALL_SVG       | Select this option if you want to install the SVG viewer to display the diagrams in the web portal. (The SVG viewer is not necessary when using the IE9 +.)       | = "1" - install;= "0" - do not install       |
| INSTALL_AXAPTA       | Dynamics AX extension       | = "1" - install;= "0" - do not install       |
| INSTALL_EXCELIE_PPOINT       | Import-Export Manager (Excel, PowerPoint) Extensions      | = "1" - install;= "0" - do not install       |
| Word Template       | Word Template       | = "1" - install;= "0" - do not install       |
| INSTALL_COBIT_REPORTS       | Cobit Reports extension       | = "1" - install;= "0" - do not install       |
| INSTALL_ACTIVE_DIRECTORY      | Active Directory extension       | = "1" - install;= "0" - do not install      |
| INSTALL_SURE_STEP       | Dynamics Sure Step reporter extension       | = "1" - install;= "0" - do not install       |
| INSTALL_DOC_COMPOSER      | Document Composer extension     | = "1" - install;= "0" - do not install       |
| INSTALL_TASK_MGMT       | Task Management Extension       | = "1" - install;= "0" - do not install       |
| INSTALL_SP_SYNC       | SharePoint Integration       | = "1" - install;= "0" - do not install       |




 

Example:

    msiexec /i "process4biz_2014_620.msi" /qn LANGUAGE_ID="1031" TRANSFORM=:de-DE USE_SERVER_LICENSE="0" INSTALL_DBCONFIG="1" INSTALL_MODELER="1" INSTALL_LICENSE_SERVICE="0" INSTALL_DB="0" INSTALL_SVG="0" INSTALL_AXAPTA="0" INSTALL_EXCELIE_PPOINT="1" INSTALL_SURE_STEP="0" INSTALL_WORD_REPORTER="1" INSTALL_DOC_COMPOSER="1" INSTALL_COBIT_REPORTS="1" INSTALL_BPMN2_IE="0" INSTALL_WEB_PUBLISHER="1" INSTALL_TASK_MGMT="1" INSTALL_SP_SYNC="1"

*process4biz\_2014\_620.msi is only a variable - please enter the exact
file name*
<hr style="padding-top:2rem" />
<a href="https://github.com/process4/docs/issues" target="_blank" class="bgw btn btn-primary btn-lg shadow-sm">Report an issue</a>
<a href="https://github.com/process4/docs" target="_blank" class="bgw btn btn-primary btn-lg shadow-sm" style="margin-left:10px;">View source code</a>
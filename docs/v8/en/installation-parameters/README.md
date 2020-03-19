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

 

Example:

    msiexec /i "process4biz_2014_620.msi" /qn LANGUAGE_ID="1031" TRANSFORM=:de-DE USE_SERVER_LICENSE="0" INSTALL_DBCONFIG="1" INSTALL_MODELER="1" INSTALL_LICENSE_SERVICE="0" INSTALL_DB="0" INSTALL_SVG="0" INSTALL_AXAPTA="0" INSTALL_EXCELIE_PPOINT="1" INSTALL_SURE_STEP="0" INSTALL_WORD_REPORTER="1" INSTALL_DOC_COMPOSER="1" INSTALL_COBIT_REPORTS="1" INSTALL_BPMN2_IE="0" INSTALL_WEB_PUBLISHER="1" INSTALL_TASK_MGMT="1" INSTALL_SP_SYNC="1"

*process4biz\_2014\_620.msi is only a variable - please enter the exact
file name*
<hr style="padding-top:2rem" />
<a href="https://github.com/process4/docs/issues" target="_blank" class="bgw btn btn-primary btn-lg shadow-sm">Report an issue</a>
<a href="https://github.com/process4/docs" target="_blank" class="bgw btn btn-primary btn-lg shadow-sm" style="margin-left:10px;">View source code</a>
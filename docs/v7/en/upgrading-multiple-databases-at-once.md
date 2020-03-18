**DbUpgradeAll** is a standalone command line tool for upgrading
multiple databases at once. All databases of older versions will be
updated to the newest (current) version.
![](//images.ctfassets.net/utx1h0gfm1om/1bvalNyTr6oWySwyMgus6u/302269c4749b7125ba8bf63fc4749299/329537.png)

In tool comes with default installation package (v7.0.1.31983 and
above). It is important that you install *DbUpgrade* module in the
installation step (this module is installed by default if you choose
client installation. If you choose server installation, you have to
choose this module manually):  
  
![](//images.ctfassets.net/utx1h0gfm1om/5XIbMD9xo446GiqEmASIcs/8adb177ed246f2a025c7040275455e0a/329200.png)

After installation, the tool is located by default at: **C:\\Program
Files (x86)\\process4biz\\DBUpgrade\\DbUpgradeAll.exe **

 
**You do not need administrator rights to start the tool, but if you
want to have a log file, then you will need write-permissions on the
folder where DbUpgradeAll is located, i.e. where log file will be saved.**

DBUpgradeAll takes all databases that are saved in the DbConfig.xml file
(that can be changed in *Client Settings* menu in p4b) and tries to
upgrade them using connection settings provided in that file.

Important

If you are using ServerLicense model with ![](//images.ctfassets.net/utx1h0gfm1om/45jLjnTrew8MGeweUs2goy/7bf3853d2e53c4bff17c5f7750026380/329196.png) you must do the following:

1.  Copy DbConfig.xml file from the client to the (license) server
2.  Choose to import databases from this file:  
    ![](//images.ctfassets.net/utx1h0gfm1om/RudqLfMViMuqusM2kMgCq/ac32298fc274db6bab9a95e3f905dab2/329199.png)
3.  Mark databases you wish to be upgrade
4.  Click *Save*
5.  Run **DbUpgradeAll.exe** on the client machine

 

 

When you run the tool, it shows what has been updated or are there any
errors. On the screenshot on the right you see the output of the tool:

-   Section 1 shows how the tool was started, then it shows the current
    date (and the name of the log file that will be saved).
-   Section 2 shows upgrading process of one databases EMPTY6\_2. It
    shows current and destination versions of the database and
    successful completion of the upgrade
-   Section 3 shows an example when DbUpgradeAll cannot connect to the
    database

The tool accepts the following (optional) arguments:

-   **--NOLOG**  
    do not create a log file
-   **--USEBACKUP**  
    turns on backup with default backup location (usually C:\\Program
    Files\\Microsoft SQL Server\\MSSQL12.MSSQLSERVER\\MSSQL\\Backup). By
    default backup is off
-   **--BACKUPPATH=C:\\Temp\\DBBackup**  
    specifies the backup path (must be absolute path), where backup of
    databases will be saved.

 

After executing the tool, you will find a log file saved in the same
folder as the tool:

![](//images.ctfassets.net/utx1h0gfm1om/7wRDCSBAJOQeskcequkIoO/abfae7d230bba635c9fc785bd56b0d6e/329528.png)

 
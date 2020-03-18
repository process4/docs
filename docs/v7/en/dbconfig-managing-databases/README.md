The database configurator serves to create one or more connection settings between the process4.biz database/s on the SQL server and the client. These connection settings (local or for example stored on a
network share) are saved in an \* .xml file. In addition, the DBConfig offers the possibility to restore databases directly in the SQL Server (backup or duplicatation) without having to use SQL management tools or the console.

DBConfig can be started on the client PC either via

```
Start -> All Programs -> process4.biz -> process4.biz DBConfig
```

or directly from the directory

```
C:\Program Files\process4biz\DBConfig\process4_dbconfig.exe
```

When a user starts DBConfig, then the profiles file DbConfig.xml gets locked, meaning no external programs or other users may modify its contents. If another user tries to start DBConfig, he will get the following warning:

![](//images.ctfassets.net/utx1h0gfm1om/11YkSqR5Y6QOE2CGqY0qyo/5b85cb1484bb4325c041ce8d5e63158c/329462.png)

If a user chooses "No", the program will exit, if "Yes", then he will be prompted to choose another profiles file in the following dialog window:

![](//images.ctfassets.net/utx1h0gfm1om/6kH3sDlR84AykOGkI0mY8s/8b1b3f024e19f9fbc372ee1b6a87e699/329465.png)

### Related Topics

-   [process4.biz Installation](installation-requirements)
-   [Installation Procedure](installation-procedure)
-   [Upgrading an existing
    Installation](upgrading-an-existing-installation)
   
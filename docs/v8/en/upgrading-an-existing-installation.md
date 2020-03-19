-   [Installation](#installation)
    -   [Server License](#server-license)
-   [DBUpgrade](#dbupgrade)
    -   [Perform the
        DBUpgrade](#perform-the-dbupgrade)
-   [Licensing](#licensing)

In this article you will find the necessary steps to perform an upgrade
of an existing process4.biz installation from version 6.x to 7.x and
higher.

<div class="warning"> 
<h3>Attention:</h3> 
  

__The upgrade process cannot be undone.__


A database and the clients accessing it must always have the same release stand.

If you upgrade one of your clients and this requires upgrading the
database too (= DBUpgrade), then all other clients must be switched to
this higher version too in order to be able to continue to have access
to the database.

Please make sure that used p4b attributes are operated via "This.DBName"
in order for formulas and conditions of older releases to continue to
work after the upgrade. (see Property Type: Formula).

</div>

### Installation

This installation runs basically like a reinstall as described in detail in the article for the installation procedure.

![](//images.ctfassets.net/utx1h0gfm1om/rP6NNFeZs4MsEGGQwUoUm/933b165b92d56b5cf46903bfbf735e21/329609.png)

#### Server License

If you work with the server license, you should take into account that
during an upgrade of an existing installation, the server license
service must be raised to the appropriate release as well.

As in the case of the client, the installed server license service must
first be uninstalled and then reinstalled with the current version.

### DBUpgrade

The DBUpgrade or the database update wizard is launched automatically,
when you first log into a database from a previous
version. Alternatively, this wizard can also be opened manually via the
file "DbUpgrade.exe" from the installation directory (by default
"C:\\Programs\\process4biz\\DBUpgrade").

#### Perform the DBUpgrade

1. Select the database for which an upgrade is to be performed
2. Enter the credentials of a native process4.biz user, who has "Administrators" role (__not__ just "Admin" checkbox in _Roles and permissions_ section) 
<div class="warning">
    Here an NT authentication cannot be used.
</div>
      
3. Select the release build of the database selected previously, and the build on which the upgrade is to be performed (automatically filled by DBUpgrade)
4. Activate the appropriate option if you want to make a backup copy of the old database
5. Clicking on Next launches the desired DBUpgrade
6. After successfully upgrading the database, a message may appear stating that the diagrams must be updated too. The Wizard to update the diagrams can be launched directly from the warning message.


### Licensing

After a version upgrade, a new license key may be needed.

See: [Activation or Prolongation of Your License](activating-and-prolonging-your-license)
<hr style="padding-top:2rem" />
<a href="https://github.com/process4/docs/issues" target="_blank" class="bgw btn btn-primary btn-lg shadow-sm">Report an issue</a>
<a href="https://github.com/process4/docs" target="_blank" class="bgw btn btn-primary btn-lg shadow-sm" style="margin-left:10px;">View source code</a>
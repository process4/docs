-   [Creating a New Version](#creating-a-new-version)
-   [Restoring a Version](#restoring-a-version)
-   [Deleting a Version](#deleting-a-version)
-   [Versions Delta Report](#versions-delta-report)

In process4.biz user is able to create versions of whole database and
also to look through the differences between two versions.


### Creating a New Version

To create a new database version, proceed as follows:

1.  Select "Create a new version" from the dropdown menu under the
    *Versions* button.  
    Note: To create a new database version, the
    administration's [permission](permissions) is required.
2.  The versioning Wizard starts.
3.  Enter a name and a description (if necessary) for the version to be
    created.
4.  A version of the current database will be created.

![](//images.ctfassets.net/utx1h0gfm1om/4F12Ct9u6Qe0EUcIUko0GQ/bfb59760ac4857de933257ab557db8e0/328801.png)

*The Version Management in process4.biz menu*

### Restoring a Version

To restore an existing database version, proceed as follows:

1.  From the dropdown menu under the *Versions* button select "Restore
    full version."
2.  The versioning Wizard starts.
3.  Select the database version to be restored from the dropdown list.
4.  The selected database version will be restored and contains all
    elements, such as:  
    -   All [objects](object) and [diagrams](diagram)
    -   All items from the [Database Designer](database-designer)
    -   Users and Roles with the respective permissions
    -   Queries in [Query Builder](querybuilder)
    -   The sets of all [extension
        modules](process4.biz_Extension_Modules)
    -   [Stencils and templates](shapes-stencils-and-templates).

![](//images.ctfassets.net/utx1h0gfm1om/6gZSUcF1hmqcm86CK6es6G/1fef51cc89e93e125c270d487d309c98/328785.png)

*Restore the full version of the database window*

<div class="error">
Attention:

All items created after you create a version, will disappear when you
restore this version.

Please also note that no [system properties](system-properties) are
stored in the versions of a database.

An example: a user renames the system property "Name" to "Unit Name" and
then creates a version. After that, it will be renamed to "Full Name".
If the previously created version is now restored, the system property
is still "Full Name" (and not "unit name").
</div>

### Deleting a Version

To delete an existing database version, proceed as follows:

1.  From the dropdown menu under the *Versions* button select "Delete a
    version."

2.  The versioning Wizard starts.
3.  Select the version to be deleted.

4.  If you want to delete all versions at once mark the field *Delete
    all versions.*

5.  The selected version will be deleted.

![](//images.ctfassets.net/utx1h0gfm1om/6cut3k8pZmM0gg82gOaO6Y/b026d2670fcb7ba3a26edf57199e757a/328811.png)

*Delete the full version of the database window *



### Versions Delta Report

The Versions Delta Report makes it possible to compare changes between
different database versions. The differences between the current
restored version and version of a database selected in the Version Delta
Report wizard can be viewed and analyzed in a web-based report.

![](//images.ctfassets.net/utx1h0gfm1om/3Gbl75XOBqySAiUiOiOIEI/f7add2d5f08ffc08a0552d5f6c52cf0c/328793.png)

*Version Delta Report window *

To create a Version Delta Report, proceed as follows:

1.  From the dropdown menu under the *Versions* button select "Versions
    Delta Report".
2.  The versioning Wizard starts.
3.  Select the version that you want to compare with the current
    database version.
4.  Specify the directory where the delta report will be saved.  
    ![](//images.ctfassets.net/utx1h0gfm1om/5tG0hZlxFmEKAOiEYuImsG/4491d08c21a90c1db1a064869c790c1e/328805.png)
5.  Click Next to start generating the report. 
6.  The report is created.
7.  After clicking the button *Finish* the report will be opened in the
    default web browser.

Delta Report will be saved as html-page. In the Delta Report the
comparison between two database versions is presented.
All [objects](object) and [diagrams](diagram),
which have been changed, are listed in the tree shown in the left pane.
The objects and diagrams are displayed in different tabs.

New added object/diagram marked by
plus ![](//images.ctfassets.net/utx1h0gfm1om/6dazG1JsOcWiec00qOcSoO/be331e35158a4d8013c276bb9cee98e8/328732.png) , removed object/diagram marked
by cross ![](//images.ctfassets.net/utx1h0gfm1om/5DLrsr1FAcs48wcegQ0oKY/cb7179b2e9ff023deeb234c0ad0263fc/328734.png)  and edited object/diagram
marked by tick ![](//images.ctfassets.net/utx1h0gfm1om/1inmioXUuo6WiOK2QmCy24/4d049358cabdc963a6eaf1e61a5db4c2/328736.png) 
By clicking on the object/diagram user will see more detailed information about changes of this object/diagram. It presented in the form of a table and has three columns: name of the changed property, old value of the property and new value of the property. In addition, the Version Delta Report displays also information about the name of the database, from which the report has been generated, the name and the date of the version compared and date of the report creation.
  
![](//images.ctfassets.net/utx1h0gfm1om/2QeleQLweQ6AuO8mwGkiec/0ee678580a3b016c593565a798f22a49/328784.png)

*Version Delta Report page view*

<hr style="padding-top:2rem" />
<a href="https://github.com/process4/docs/issues" target="_blank" class="bgw btn btn-primary btn-lg shadow-sm">Report an issue</a>
<a href="https://github.com/process4/docs" target="_blank" class="bgw btn btn-primary btn-lg shadow-sm" style="margin-left:10px;">View source code</a>
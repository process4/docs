-   [Configure synchronization](#configure-synchronization)
    -   [Default property mapping](#default-property-mapping)
    -   [Manual execution](#manual-execution)
    -   [Automatic synchronization](#automatic-synchronization)

## Configure synchronization

 
<div class="info">
Important notice!

Before configuring SharePoint synchronization makes sure that timezone
is set correctly in SharePoint site settings (client and SharePoint must be set to the **same** timezone). This requirement is no longer needed for p4b v.7.0.3 and higher.
</div>

 

To use synchronization with SharePoint site user need to configure
synchronization and create synchronization rules. To make this settings
use '**Configuration of SharePoint Synchronization'** wizard.

![](//images.ctfassets.net/utx1h0gfm1om/7kabypUzUQaw0W4qIYemQI/04e9d50868fbcc6689c0d1551411bcde/329596.png)

In the wizard SharePoint connection information has to be specified.
Select the SharePoint site from the dropdown menu. If the site used as
diagram storage it will be marked by . After that, user needs to set the
rule of synchronization for selected site. To create new rule select
corresponding field in the wizard window and click **Next** button.

![](//images.ctfassets.net/utx1h0gfm1om/60Yz9qJTuowC86QIi2M64k/1954e47261294cd38f1982761cb4208e/329590.png)

In the next window of the wizard, enter the name of the rule and select
language of synchronization.

 ![](//images.ctfassets.net/utx1h0gfm1om/S2QJXB8KS2mcg8G0yksoS/2b529228cb6c900bbc48e8f1a756a4f9/329581.png)

Then the window where user can configure the synchronization will open.
The tree of available items and its properties are represented in the
left part of the window.  Synchronization properties of selected item
from the left part are represented in the right part of the window.
Objects, Files, Diagrams (in this case the Diagram Storage has to be
changed to the SharePoint library) and Object links can be synchronized.

-   **Data:** list of all available for synchronization object classes
    (objects of selected class will be synchronized along with
    properties).
-   **File:** list of all available for synchronization file classes
    (files of class will be synchronized along with properties; file
    data will be stored in SP). Any file class can be synchronized only
    by one rule, after it is included in any rule it will be not listed
    in any other rule setup.
-   **Diagram:** list of all available for synchronization diagram
    classes including system diagram class (properties of selected
    diagrams will be synchronized, diagram files is stored in SP). Note:
    **The diagrams are represented in the synchronization rule list only
    if SharePoint is used as diagram storage.**
-   **Link types:** list of all available for synchronization link types
    (object links of link type will be synchronized along with
    properties of association object).  
      
      
 ![](//images.ctfassets.net/utx1h0gfm1om/3WLh7dJ5BYAcqSseMAGqeW/22eb8b40c234204a7350d38493f6df5a/329565.png)
      
There is a list of property groups for files, diagrams and each class or
link type. Each property group contains list of user-created properties
(along with '**Name**', '**Description**' and for objects there is
additional property '**Unit**') of objects\\files\\diagrams that will be
synchronized for selected class, or for link type – properties of
association object along with '**To'** and '**From**' property of a
link.

User can specify additional synchronization properties (Synchronization
properties on the right part of the window). To specify new property
select element in tree and then set the following properties:

For classes and link types:

- **Direction:** to specify direction of synchronization for items of
selected class\\link type:

  -   **Process4.biz =&gt; SharePoint:** all data will always be
    transferred from [Process4.biz](http://Process4.biz) to SharePoint.
    Any item in SP that has not been synchronized previously will be
    ignored (and even deleted from SP list), any deleted from
    [Process4.biz](http://Process4.biz) item will always be deleted from
    SP and any new item in [Process4.biz](http://Process4.biz) will be
    created in SP.
  -   **Process4.biz &lt;= SharePoint:** all data will be always
    transferred from SharePoint to [Process4.biz](http://Process4.biz).
    Any item in [Process4.biz](http://Process4.biz) that have not been
    synchronized previously will be ignored, any deleted from SP item
    will always be deleted from SP and any new item in SP will be
    created in [Process4.biz](http://Process4.biz).
  -   **Process4.biz &lt;=&gt; SharePoint:** any item from
    [Process4.biz](http://Process4.biz) that has not been synchronized
    will be created in SP. Any item from SP that was not synchronized
    will be created in [Process4.biz](http://Process4.biz). For already
    existed sync relation between [Process4.biz](http://Process4.biz)
    item and SP item direction will be determine based on last
    modification time and last sync time. Item with nearest modification
    date will be used as From.

- **Unit:** specify unit for synchronization. This property available only
for object classes and allow to select any unit where current class is
available. During synchronization if unit is selected, only objects
stored in that selected unit will be synchronized, only properties that
are available in that unit will be synchronized, and new object will be
created in that unit. If unit does not actually contain current class
then all objects of that class will be synchronized with all properties,
and new objects will be created in a unit, where current class is
stored.

- **SP Pause the workflows:**  can be set to the True or False. This
property states if the workflow in SP should be paused during
synchronization.

- **SP Condition Property DbName (SP):** name of a field in SP list, value
from which will be used as a bool to determine if SP item should be
synchronized or not. If valued of that field of that item is true, then
synchronization can proceed.

- **SP Condition Property DbName (DB):** db name of a property of P4B
item, value of which will be used as a bool to determine if P4B item
should be synchronized or not. If valued of that property of that item
is true, then synchronization can proceed.

For properties:

- **Direction:**to specify direction of synchronization:

  -   **Inherited:** direction will be taken from class\\link type.
  -   **P4B =&gt; SharePoint:** all values will go from P4B to SP.
  -   **P4B &lt;= SharePoint:** all values will go from SP to P4B.
  -   **P4B &lt;=&gt; SharePoint:** direction will be determined based on
    modification and synchronization dates.

- **Auto-update in SP:** if that flag is set to the true , then on change
of synchronization configuration or on running of synchronization field
in SP list for that property will be updated to be in a sync with
editable, required, visible properties of that property along with list
for selection (for properties like enum).  
  
<div class="warning">
To change the values of the properties it has to be selected in the
first column.
  </div>

 

### **Default property mapping**

There are some predefined [Process4.biz](http://Process4.biz) properties
to SP field mapping. This properties cannot be turned off for
synchronization, while some of them cannot be changed to:

- Process4.biz **Name** property of objects and diagrams (and also for
links, if that link has association object) by default mapped to
**Title** SP field.

- Process4.biz **Name** property of files is mapped to **FileLeafRef** SP
field and this cannot be changed.

- When SP Approval management is used, there is also following properties:

  -   Process4.biz **ApprovalStatus** property of diagram is always mapped
    as \_**ModerationStatus** SP field and this cannot be changed;
  -   Process4.biz **ApprovalComment** property of diagram (if it is
    enabled in Approval management) is always mapped as
    \_**ModerationComments** SP field and this cannot be changed.

**Restrictions on synch directions**

Not every item can be synchronized in any directions. There are some
restrictions:

-   Any Approval management property for diagram, if SP Approval
    management is used, can be synchronized only in
    [Process4.biz](http://Process4.biz) &lt;= SP direction;
-   Approval Status property if Builtin Approval management is used, can
    be synchronized only in P4B =&gt; SP direction;
-   **Unit** property (one that represent a container for object) can be
    synchronized only in P4B =&gt; SP direction;
-   Properties with type formula can be synchronized only in P4B =&gt;
    SP direction;

**Linked Element Selector property restrictions**

There are some restrictions on Linked Element Selector property to be
able to synchronize it:

- it should have exactly one class specified;

- to be able to update that property value in P4B, this property should be
updatable in P4B property grid:

  -   if that property select diagrams, then it should select linked
    diagrams, not used on diagrams, and owner object of that property
    should be a data object;
  -   if this is a property for links between data objects, then exactly
    one link type should be specified, link type should not have
    automatic association and there should be no more than one
    association object;

**Links synchronization restrictions**

To be able to enable synchronization of link type following should be
satisfied:

-   To, From classes of that link type should be enabled for
    synchronization;
-   If link type use association class, that class should be enabled for
    synchronization too;
-   There should be exactly one Link Type Rule that allow linkage of
    that link type between exact To and From classes.

### **Manual execution**

User can carry out synchronization for any synchronization rule by
running a '**Synchronize with the SharePoint'** wizard.

![](//images.ctfassets.net/utx1h0gfm1om/5VPUZc5f7aCGsGWeCWAUua/911c9c881d61661305d2accd4b342734/329613.png)  
To run the synchronization user need to select the SharePoint site from
the dropdown menu and to specify the synchronization rule.

![](//images.ctfassets.net/utx1h0gfm1om/42TsTNsBK08gMGQ0UEgQGE/dbe70f5929b8685d9af489442ee367f6/329514.png)

For files synchronization has to be checked function '**Move the local
files to the SharePoint document libraries**'. When enabled for
synchronization file class contains files that are not actually linked
to files in the selected document library, then such files won’t be
synchronized. By enabling the function '**Move the local files to the
SharePoint document libraries**' (tick the checkbox), all such files
will be uploaded to the SharePoint (if user has access to this files). 

 ![](//images.ctfassets.net/utx1h0gfm1om/1UjEuVkAQMg6U6iceima6G/f36d2304cbcdeec13ed94323cce5d939/329509.png)

 

In the next window user can specify credentials for synchronization. In
addition, user can choose to use site credentials if it was allowed in
SharePoint site settings. In this case, credentials that was specified
when site was created will be used during synchronization. User can
provide his own credentials that will be stored for future use for that
site (and can be managed in **Manage SP passwords** wizard). In the
Modeler icons of synchronized objects will be marked by red line 
![](//images.ctfassets.net/utx1h0gfm1om/6MdWlHobdKs2meaYUgA4Iy/4cc12f5d7dc5c9296c8af18f598d4c46/329493.png)

### **Automatic synchronization**

Currently automatic synchronization performs only for diagrams and in
some way for files. (No objects and links because they can be used in as
many sync rules as anyone like, so without a way to select what exactly
to run, synchronization can become an issue).  
If automatic synchronization is enabled, then when **'Refresh'** button
is pressed in modeler diagram synchronization is executed.  
Automatic file synchronization work in a way that when user creates a
file in class where SharePoint synchronization is enabled, that file is
automatically uploaded to SharePoint and file from P4B will point to
that file from SP.

When diagram is opened or saved, synchronization of that single diagram
is executed. If diagram, that is being saved, contain shapes of objects
for classes of which SP **AutoBinding** is enabled in diagram sync rule,
then synchronization for that diagram sync rule is executed.

All of these automatic synchronizations does not provide possibility for
user to enter credentials for site. Following rule apply to credentials
selection:

-   site credentials will be used if site allow to use its credentials
    and any of the following is true:  
    -user credentials does not exist;  
    -last time user execute synchronization he choose to use sites
    credentials;
-   user credentials will be used in one of the following case:  
    -site does not allow to use its credentials;  
    -last time user runs synchronization he choose to use his own
    credentials.

<hr style="padding-top:2rem" />
<a href="https://github.com/process4/docs/issues" target="_blank" class="bgw btn btn-primary btn-lg shadow-sm">Report an issue</a>
<a href="https://github.com/process4/docs" target="_blank" class="bgw btn btn-primary btn-lg shadow-sm" style="margin-left:10px;">View source code</a>
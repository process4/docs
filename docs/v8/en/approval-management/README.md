-   [Approval management](#approval-management)
    -   [Activating the approval management](#activating-the-approval-management)
        -   [Draft Status](#draft-status)
        -   [Other settings](#other-settings)
    -   [Awarding an approval status](#awarding-an-approval-status)
        -   [Approving the
            diagram](#approving-the-diagram)
    -   [Diagram based approval](#diagram-based-approval)


The approval management allows user to use an effective licensing
concept for modelling process. In this way, you can determine which
changes require approval in the model and who is responsible for the
approval of these changes. There are two types of approval management
available for user: Native (build-in) and SharePoint.

*![](//images.ctfassets.net/utx1h0gfm1om/y3WWG07kkgkcUw6SOe86G/909bf87d0a4cebb22118c16756c0fe88/328096.png)  
*

*Managing approval management in the database settings*

### Activating the approval management

Approval management can be activated (or deactivated) in the database
settings by changing the kind of approval management in the drop-down
list. User from the “Administrators” group is able to activate or
deactivate approval management (see [Permissions](permissions)). When
the approval management is active, the button Approve is colored.

To configure the approval management, the following options are
available:

#### Draft Status

In the “Draft Status” section (on the right) up to 6 draft statuses can
be defined. The number of draft statuses can be selected from the
drop-down list under “Number of the draft statuses”.

Names of all approval, deletion or draft statuses can be changed and
draft statuses have individually adjustable colors. Corresponding draft
status color is displayed on the diagram icon in the repository. If the
diagram is approved or has no approval status it will be displayed
without the color mark.

![](//images.ctfassets.net/utx1h0gfm1om/52ciPhhdjWqQ6SumKUaG8S/e17c1ea30827694d69d67029816d729c/328095.png)

<div class="warning">
The diagrams created before activating the approval management have no
approval status until the status will be pointed out.
  </div>


#### Other settings

-   *The change of the date for the approval status is defined*

When the checkbox next to this option is marked, new
[property](property-group-and-property) “modification date” of the approval
status is added to the property group approval management. The date of
the last modification of the approval status can be set to Automatic or
Manual.

-   *Add property “Approval or deletion date” in the object’s properties
    to store automatically the last performed action.*

When the checkbox next to this option is marked, new property “Approval
or deletion” is added to the property group approval management. This
property shows the date of the last approval or deletion date of the
corresponding object. 

-   *Enable the expiry of your approvals. With default expiry date*

When the checkbox next to this option is marked, new property “expiry
date of approval” is added to the property group. This property allows
user to define the expiration date of the approval status of the
diagram. The diagram remains approved up to the specified date. After
that date, the status changes to the “expired approval”.  

-   *Enable the comment field in the approval dialogue*.

When the checkbox of this option is marked, additional field for
approval comment will be added. This field may be left blank.

-   *Enable the creation of new version snapshots only if all approval
    management statuses have been set to "approved".*

When the checkbox of this option is marked, the creation of new
[database versions](version-management) is forbidden if there are
unapproved diagrams.

-   *Allow on a per diagram selection basis to retain once approved
    diagrams in the WebPublisher.*

When the checkbox of this option is marked, new property "keep old if
not approved" is added to the diagram properties for which the approval
management is enabled. By activating this property, previously approved
diagram will be kept in the [web publication](webpublisher) if the
status of the diagram has changed since the last publication to a
non-approved.

![](//images.ctfassets.net/utx1h0gfm1om/4lLDKadLPyuCaW066U86Oc/52e4b38d1df22b81c9547644884497bd/328094.png)

*Dialogue box for the award or modification of the approvalstatus*

### Awarding an approval status

The approval status can be assigned when new or existing modified
diagram is saved. In addition, it is possible to assign approval status
manually through the context menu (right click on the diagram icon in
the [repository](repository) and choose “Change the approval status”).  

#### Approving the diagram

To start approval procedure, start Approval wizard by clicking the
button "Approve" or right clicking on the diagram icon in the repository
and choosing “Approve” from the context-menu. Before starting the
Approval wizard, all open diagrams in the modeler will be closed.

![](//images.ctfassets.net/utx1h0gfm1om/1LTGGwu1Zaasq8AW00QYkk/ac8d92b796003a0a04f7a887f114e30d/328090.png)

In the first case user is able to choose on the tree which diagrams
should be approved. Special properties allow sorting diagrams by class,
or show only diagrams based on a specific template, or with specified
approval status.


<div class="warning">
If all diagrams already approved there will be no diagrams listed in the
tree.
  </div>

If the diagram opened by another user, this diagram will be locked for
approval wizard and it will have gray icon with small lock on it.

After that, user needs to select options for approval by ticking
corresponding boxes:

-   *Refresh the database before approving*
-   *Create the approval history*
-   *Store a comment.* This option allows user to create a comment in
    the approval dialog. It is possible to create a comment in English,
    German and French languages by pressing *"*T*"* button. This option
    has to be activated in the Database settings on the Approvals tab.
-   *Set the date to.* This option shows the modification date and time.
    If in the Approvals settings “The change date for the approval
    status” is defined as Automatic this option is deactivated. When
    this setting defined as Manual user has to set the date of last
    modification manually.
-   *Set the approval expiry date to.* This option allows user to define
    the date when the approval status will expire. Option needs to be
    activated in the Database settings on the Approvals tab.

![](//images.ctfassets.net/utx1h0gfm1om/1gJEUDZmWsgeWAcYGmSgQG/37003f6a8ba5d9452d97a041b209561c/328087.png)

<div class="info">
When user [links files](linking-objects-with-files) to the diagram after
approving this diagram the approval status has to be set up and diagram
has to be approved again.
 </div>

<div class="info">
When user makes changes to the approved diagram (e.g [links
object](linking-objects-with-diagrams)) the approval status of the
diagram will change to “Work in progress” automatically.
  </div>

<div class="info">
When user restore the [version](version-management) created earlier
after approving the diagram the name of the current diagram changes and
as result it become unapproved.
  </div>

It is important to note that to change (e.g.link to some
[objects](linking-objects-with-diagrams)) approved diagrams that have
been deleted, the deletion operation has to be canceled or approval
status has to be set up. Otherwise, no changes of the diagram will be
saved and diagram will remain deleted.

When user approves deleted diagram, it will be deleted from the modeler
and database and all additional objects such as diagram links will be
deleted too.  

In case when user export data of the approved diagram to the Exel,
changes some properties of this diagram in the Exel file and import it
to the modeler through the [ImportExportManager](importexportmanager)
this diagram become unapproved.

 

### Diagram based approval

<div class="warning">
Available in 7.0.4 release-build and higher
  </div>

In 7.0.4. Release-build of modeler two types of Native Approval
management are available: full and light mode. If a User don’t want to
remove approval status when object changed in the Repository then
Diagram based approval (“light mode”) can be turned on. So all changes
on diagram will make diagram unapproved (it status automatically will be
set to “Work in progress”).

 ![](//images.ctfassets.net/utx1h0gfm1om/2zOMj9eKAcWeCsQOcQYCs0/426f9df3ae1310978e4ebf92fd91ae25/329436.png)

Changes of the objects in the Repository would not affect on approval
status of the diagram.

Only renaming diagram, changing diagram property value, linking diagram
to an object or to a file and uploading file to diagram will raise
Approval status dialog window but won't make it unapproved.

 

**Diagram** based approval:

||||
|--------------------------------------------------------------------------|-------------------------------------------------------------------------|-------------------------------------------------------------------------|
|<div></div>|**Currently opened diagram loses "Approved" status?**|**All other diagrams with the same object lose "Approved" status?**|
|**Object changed\* in repository**|![(error)](//images.ctfassets.net/utx1h0gfm1om/3zS48zTFpS6KQW2q8CqmwY/f5fdb5e565bf715650d1a1967ec8a93e/error.png)|![error](//images.ctfassets.net/utx1h0gfm1om/3zS48zTFpS6KQW2q8CqmwY/f5fdb5e565bf715650d1a1967ec8a93e/error.png)|
| **Object changed\* directly on the diagram (through properties window)** | ![check](//images.ctfassets.net/utx1h0gfm1om/4Y63ugxP7i8SK2YqEEo24S/80626f834bd7c04f000cf89712399533/check.png)|![error](//images.ctfassets.net/utx1h0gfm1om/3zS48zTFpS6KQW2q8CqmwY/f5fdb5e565bf715650d1a1967ec8a93e/error.png)|
|**An existing object is added to the diagram**|![check](//images.ctfassets.net/utx1h0gfm1om/4Y63ugxP7i8SK2YqEEo24S/80626f834bd7c04f000cf89712399533/check.png)|![error](//images.ctfassets.net/utx1h0gfm1om/3zS48zTFpS6KQW2q8CqmwY/f5fdb5e565bf715650d1a1967ec8a93e/error.png)|
  
<br />

**Database** based approval:

||||
|--------------------------------------------------------------------------|-----------------------------------------------------------------------|-------------------------------------------------------------------------|
|<div></div>|**Currently opened diagram loses "Approved" status?**|**All other diagrams with the same object lose "Approved" status?**|
| **Object changed\* in repository**|![check](//images.ctfassets.net/utx1h0gfm1om/4Y63ugxP7i8SK2YqEEo24S/80626f834bd7c04f000cf89712399533/check.png)|![check](//images.ctfassets.net/utx1h0gfm1om/4Y63ugxP7i8SK2YqEEo24S/80626f834bd7c04f000cf89712399533/check.png)|
|**Object changed\* directly on the diagram (through properties window)** | ![check](//images.ctfassets.net/utx1h0gfm1om/4Y63ugxP7i8SK2YqEEo24S/80626f834bd7c04f000cf89712399533/check.png)|![check](//images.ctfassets.net/utx1h0gfm1om/4Y63ugxP7i8SK2YqEEo24S/80626f834bd7c04f000cf89712399533/check.png)|
|**An existing object is added to the diagram**|![check](//images.ctfassets.net/utx1h0gfm1om/4Y63ugxP7i8SK2YqEEo24S/80626f834bd7c04f000cf89712399533/check.png)|![error](//images.ctfassets.net/utx1h0gfm1om/3zS48zTFpS6KQW2q8CqmwY/f5fdb5e565bf715650d1a1967ec8a93e/error.png)|
 

\* **changed** means e.g.: name change, new object link is created, new
link to a diagram created, some other property is changed


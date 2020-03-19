-   [Permissions Management](#permissions-management)
    -   [Permissions for users](#permissions-for-users)
        -   [Owners of elements](#owners-of-elements)
-   [Manage Users and Roles](#manage-users-and-roles)
    -   [Permissions for roles](#permissions-for-roles)
        -   [Administration](#administration)
        -   [Design](#design)
        -   [Create](#create)
        -   [Update](#update)
        -   [Delete](#delete)
        -   [Read](#read)
        -   [Read Approved](#read-approved)
        -   [Approve](#approve)
-   [Permissions for extensions](#permissions-for-extensions)
    -   [Versioning](#versioning)

 

Process4.biz allows you to manage user permissions in multi-user mode in
the following ways:

-   based on the rights concept in Microsoft SQL Server
-   with Windows-board resources (e.g. rights of a user in the domain)  
    The network administrator can provide each Windows user or the
    entire Windows user group in your LAN with process4.biz access
    rights. The user does not need then to enter any username or
    password at [login](login-logout/), but only choose a database.
-   over different license activations by [Named User
    Clients](licensing)
-   via process4.biz authorization management

![](//images.ctfassets.net/utx1h0gfm1om/5pwautIvn24uYAKWImAsW8/5d40ee1474fe9ea2cca3342db54fd900/329379.png)

*The native process4.biz permissions management*

### Permissions Management

1.  To manage user permissions with process4.biz, the authorization
    management must be selected first:  
     ![](//images.ctfassets.net/utx1h0gfm1om/AvDdU2WTm0QckcwqYOwMm/2ad43782885ac0b3ec93c42e20425069/329374.png)
2.  Management of permissions is divided into 3 sections:
    1.  Permissions for users
    2.  [Permissions for Sets](permissions-for-sets)
    3.  Permissions for extensions
3.  Permissions can also be directly managed for database elements via
    the [properties window](properties-dialog-box), under the tab
    "Permissions".

For the granting and managing of permissions, a user with administrative
rights (= a user who has been assigned a role with administrator
rights), calls the above functions. This member can then manage the
access rights for users and user groups within the units for which he
has this administration authorization.

The administration area always consists of three areas:

-   The list of users and user groups.
-   The list of roles with the related permissions (administration,
    design, delete, update, approve, etc.).
-   The unit structure with the display of the activated access rights
    to units, classes, properties and property groups for the user
    currently selected.   
    In this third window, only the result of the authorization granting
    is displayed and nothing can be edited.

<div class="info">
When you open the Permissions window for the first time, an automatic
update process is started and a progress bar appears at the bottom. This
process does not block the work and can also be canceled. During this
upgrade process, the Active Directory is checked and the user is updated
accordingly.
  </div>

#### Permissions for users

Users are managed in process4.biz according to roles that have different
permissions for one or more [units](unit), [classes](class), [property
groups](property-group-and-property) etc. A native process4.biz-user, or a
Windows user (or a Windows user group), which was created and added to
process4.biz, receives automatically the permissions for all roles to
which s/he belongs.

To assign users or user groups one or more roles, or to remove one or
more roles, proceed as follows:

1.  Click the user or user group name.
2.  Left-click and check or uncheck the relevant roles.

The user "Admin" and the role of "administrator" are firmly connected
with all access rights; no changes are possible here.

If multiple users are simultaneously logged into a database, the
administrator can track them: these users are marked in the
Administration window in bold.

##### Owners of elements

All elements (= classes and their objects, diagrams, files, design elements,
users and user groups, as well as sets) belong to an owner in the
process4.biz database. Owners of elements always have the rights to
read, update (change), and delete regarding their elements. This means
that even if a user has <span class="underline">no</span> rights for a
unit, but within this unit are objects that s/he owns, s/he can view
this unit (with "his/her" elements). 

### Manage Users and Roles

To add or remove users or roles or manage their properties, choose the
respective button in the toolbar of the administration window, or open
the context menu by right-clicking in the corresponding window for users
or user groups. You can change the password or create a new one by
selecting the password function in the user's context menu.

In the characteristics of the user, you can also enter details of the
users, which may facilitate the identification of the user or the query
of their login/logout status. In situations where the access rights of
users have to be locked for the units (e.g. in a database design
change), you can inform the users on time, as they can be easily
identified on the basis of the information entered in the
characteristics.

To create a user with his Windows user account, select the respective
toolbar button or "Adding a Windows User" from the context menu. You can
assign a role to a  Windows user, just like to any other user, edit it
there and remove it. If for example the username, description, or other
data from the Windows user have been changed in Active Directory, you
can update this data for the corresponding Windows user in process4.biz.
Click on the "Update" button under the Permissions tab.

<div class="success">
  
 You can also add multiple Windows users that belong to a Windows user
group at a single time. Select the corresponding icon or the "Adding a
Windows user group" from the context menu. You can assign a role to the
entire Windows user group as a single user, edit it and remove it.
  </div>

It is possible to convert native process4.biz users to Windows users and
Windows users to process4.biz users. Right-click on the user and select
"Convert to a Windows user" or "Convert to a process4.biz user". Since
release 5.3.1 it is possible to create users and roles by copying or
cutting either from one database to another, or even within the same
database. If you want for Example to add more users or roles that are
very similar and subsequently need to be only minimally adapted, it is
useful to use the to copy/paste function for users and roles:

-   The connection between the user and the role is maintained, as long
    as you copy the user within or to a database, where the linked role
    also exists.
-   The connection between the user and the role is lost - even within
    the same database, when you copy or cut and paste the role again.
    All properties of the pasted role are maintained.

#### Permissions for roles

To manage the permissions of roles:

1.  Click with the left mouse button on the desired role in the
    Administration window,
2.  Set in the right window the respective permissions in the desired
    units. You can set the status of a column (e.g. Administration or
    Design) via the context menu too (right-click on the icon).

![](//images.ctfassets.net/utx1h0gfm1om/4vt5wq1t3aoyQ682qoyuc0/1a0a838b6d00ac5602c2cfca6797df94/329249.png)

*The process4.biz authorization status*

<div class="info">
If the authorization status is inherited (grey background in the box),
this means that settings are taken from the parent field (= from the
fields for the parent unit or from the top row of the permissions for a
role).

When the authorization status in the parent field is changed, it changes
automatically in the inherited child field. The non-inherited
permissions status remain unchanged. The status "not activated" (white
box) is explicitly used to disable permission within an inheritance
structure.
</div>

![permissions files](//images.ctfassets.net/6mz8d8cle1nl/3l4Vqa9oqQDATIKRtsA9N3/82d75cc53e0fbec7c8c8d2db8444b828/permissions_files.png)

*Manage all permissions of a unit*

It is also possible to activate or deactivate **all** permissions for a
unit, class, property group or property at one time. Right-click on the
desired unit and select the appropriate option from the context menu:

-   Enable All - all permissions for the selected item will be enabled
-   Disable All - all permissions for the selected item will be
    disabled.
-   Remove all - all permissions for the selected item will be reset
    (the inherited permissions from the top are moved).

Permissions for system classes, property groups, and properties cannot
be set by the user. They are automatically granted to all users who have
permissions for the respective unit. Please note that permissions set
for Parent Units, are inherited by child units and their classes. If you
disable permissions for a Child unit, they are disabled only for the
classes created in this unit, but not for classes inherited from the
top.

![](//images.ctfassets.net/utx1h0gfm1om/3XBAEDksi42umQQ4OOqQIu/7b53db58bc43c28d9e19c8ed18b76fef/329349.png)

*Manage permissions*


##### Administration

The Admin user is included in each process4.biz database, its password
is empty at the beginning. The user Admin and the user group
administrator cannot be modified or deleted.

The administration authorization can only be granted for Units. If it
has been activated for a unit, then a user with this role can manage
user permissions as well as the authorization tab in the [properties of
an object](properties-dialog-box) in the unit granted for the
Administration. The users with an individual user role with
administrative permission can perform the following tasks:

-   Read / Update (Change) / delete / create users and user roles, which
    they own.
-   Change permissions of user roles for units, for which you have
    administrative permissions.
-   Change the class of objects and diagrams in the unit in which you
    have administrative permissions.

The users with an individual user role with Administration authorization
cannot perform all operations: there are tasks that can be performed
only by the user with the system user role "administrator":

-   Database-wide management of user permissions.
-   Calling the [database settings](database-settings).
-   Call up the wizard for setting the default language of the model
    under the database settings.
-   [Create new version of the database](version-management) and start
    the Version Delta Report.
-   Unlock units, objects and diagrams that have been locked by another
    user.
-   Remove protection off the diagrams, without entering a password.  
      
<div class="warning">
  
Only user with Administration permission is able to change class of
object, diagram or file.
  </div>

 

##### Design

The design permissions can only be granted for Units and allows a user
role to have access to all design works for the unit(s)
in process4.biz [Database Designer](database-designer).

Design works include creating / updating (changing) / deleting or
managing [units](unit), [classes](class), [properties and property
groups](property-group-and-property), [link types and link
technologies](links) in the [class
matrix](class-matrix),[tags](tags) and [validation
scripts](validation-scripts).

When a user has the design permissions on a unit, s/he can create /
update / delete in all child units, even if s/he has not been assigned
directly permissions to the child units. However, classes, property
groups, properties, link types, cross data and validation scripts cannot
be created/updated/deleted in the child units. If the design
authorization is activated, the update, delete, read and read approved
permissions are activated automatically.

##### Create

The Create authorization can be activated for units and classes and
allows a user role to create new [repository](repository) data in a unit
(objects and diagrams) or in a class (only objects). When a user has no
rights for a class or a unit, s/he cannot create objects neither in the
repository nor in the Little repository of [Graphical Visio
Modeler](graphical-visio-modeler). Taking a shape on the diagram, in
this case, results in an error message. The authorization for a class
can be activated in one Unit and deactivated in a
superordinate/subordinate unit. In this case, objects of a class can be
created only in a particular unit. If create permissions are granted,
the respective user role automatically receives the read and read
approved permissions.

##### Update

The Update permission can be enabled for **all** elements of the
database and allows a user role to change repository items of a unit
(objects, diagrams), a class (objects), as well as property values (that
appear in the repository). It also allows to link objects with other
objects. The [linking](links) between two objects requires that the user
has update permission for at least one object (or its class). If the
Update permission is granted, the user role automatically receives the
read and read approved permission and can edit properties of the object that can be edited. 

##### Delete

The Delete permission can be activated for units, classes, objects and
diagrams and allows a user role to delete objects or diagrams on the
structural level, on which the right was granted. When the delete
authorization has been defined, the user role receives automatically the
reading and read approved permission.

##### Read

The Read permission can be enabled for **all** elements of the database
and allows the user role to view the contents of objects and diagrams as
well as the property values of the relevant unit or Class in
the [repository](repository).

-   If a user does not have Read permission on a <span
    class="underline">unit,</span> this unit is not visible to him with
    all classes, objects and diagrams in the repository, as well as the
    designer. If this unit however has child units, for which the user
    has authorization rights, the unit is displayed in the hierarchy
    tree with the mark "no authorization".
-   If a user does not have Read permissions for a <span
    class="underline">class,</span> all objects of that class in the
    repository are invisible (however, the class itself remains visible
    in the repository and designer).
-   If a user does not have read rights for a <span
    class="underline">property group</span> and the associated
    properties, the property group itself is displayed as read-only in
    the Object Properties, under the mark \[protected\]. Property values
    are also marked as \[protected\].
-   When a user does not have read rights for an object or diagram, then
    the object or diagram is invisible in the Repository. However, if a
    diagram has some child-diagrams for which the user is authorized,
    the diagram is displayed in the diagram tree as "no authorization".
    The properties of this diagram can be opened, but the property
    values are invisible to the user.
-   Through this permission, it is possible to open both the class and
    the link matrix as read-only.

If the Reading permission is generally defined for a user role, it is
granted those rights automatically for all subordinate units; but this
can be selectively deactivated again. The Read permission is set
automatically when the Create, Update or Delete permission has been
granted. The Read permission on a unit cannot be removed when the
create, update, or delete permissions have been granted for the unit.
When the Read permission is defined, the user group is automatically
granted the read approved permission. 

**Warning:** The user role can only see a unit and its subordinates in
the repository, if it is
not [locked](locking-unlocking-the-database-structure).

##### Read Approved

Read approved is a minimum permission, which allows you to see objects
and diagrams with their [approval status](approval-management) set
to "approved" or with a blank status. The read approved permissions also
allow the [class matrix](class-matrix) and the [link
matrix](link-matrix) to be opened as read-only. The read approved
authorization is set automatically when the administration, create,
update, delete or read permission has been set.

##### Approve

The permission to approve may only be granted for a whole unit. Only
users with permission to approve can approve changes. In addition, the
update, reading and read approved permissions are automatically assigned
through the approve permission. If a user does not have permission to
approve and saves changes to an approved object or diagram, a dialog
will open to change the approval status, but cancelling is not possible
- the user must therefore select an option and confirm their selection.

 ### Permissions for extensions

Permissions can be assigned separately also for the use of
the process4.biz extension modules.
This can e.g. be necessary in order to grant or deny certain users the
use of individual extensions by [concurrent licensing](licensing).

<div class="info">
The access rights for extensions can be granted only for the entire
database and not for individual units. Only users who are members of
a user role, to which the appropriate permissions have been assigned,
can call and use the respective extension modules.
  </div>

#### Versioning

The authorization for the versioning of a model can be managed here.
However, here too the authorization can only be granted for the entire
database and not for individual units.

See also: [Version Management](version-management)

![permissions f ex](//images.ctfassets.net/6mz8d8cle1nl/4c6XeR8NhJdQOZO795WTMW/df17bca1b12223826c85ed6cda4fa487/permissions_f_ex.png)

*Permissions for extensios*
<hr style="padding-top:2rem" />
<a href="https://github.com/process4/docs/issues" target="_blank" class="bgw btn btn-primary btn-lg shadow-sm">Report an issue</a>
<a href="https://github.com/process4/docs" target="_blank" class="bgw btn btn-primary btn-lg shadow-sm" style="margin-left:10px;">View source code</a>
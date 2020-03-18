-   [Database activation
    process](#database-activation-process)
-   [Type of licenses](#type-of-licenses)
    -   [Named License](#named-license)
    -   [Database License](#database-license)
    -   [Server License](#server-license)
        -   [Server License
            configuration](#server-license-configuration)
            
## Database activation process

To obtain license for new database user has to create new database in
the DBConfig and after that connect to this database in the Modeler for
the first time.

 ![](//images.ctfassets.net/utx1h0gfm1om/5Pue4OomAg8mGOYwGsAQEa/fe6358f5247311dead954a4842a4745d/329177.png)

Online licensing window will be opened.  If user has already registered
on the site, then he needs to log in using email and password specified
during the registration, either use Google or Facebook service to log
in. If there is no account on the Online License site user has to
**[create new one.](online-license)**

After user logged in to the Online Licensing service the Database
license activation window will be opened. By clicking the button
Activate the license for created database will be generated on the
Online License Server. Then machine should be activated in the next
modal window. 

 ![](//images.ctfassets.net/utx1h0gfm1om/5RhZk2x5a8eu4qyiMcggui/0b36f1185d8b725cfc502bca7f90cf3c/329176.jpg)
![](//images.ctfassets.net/utx1h0gfm1om/aEl5MeazGSgm0kYGWuqMM/9dd314cd0e10f97f907f3ad17bc8f9ad/329179.jpg)

After that it will be listed in the list of the user licenses. As by
default type of license set to "Named", the user needs to contact Online
License service administrator (mylicense@process4.biz) to enable his
machine.

<div class="warning">
"Named license" will be created by default. If you would like to change
the license type, then contact online license service administrator
(mylicense@process4.biz)
  </div>


## Type of licenses

There are three different types of license available: Database License,
Server License and Named License. The type of license can be set up only
by Site Administrator.

### Named License

Named License is type of license that tied up with computer fingerprint.
Named License can be activated by Customer Administrator and after
license activation new users’ computers (machines) can be added. This
type of license ste by default when user activating database.

First of all user has to create new database has or restore it in the
DBConfig and to login to this database in the modeler.

 ![](//images.ctfassets.net/utx1h0gfm1om/6dkuGJiiGswSkwMiEaSmiO/bfc8a3f6887412f163a19cdbea0866f4/329178.png)

At the first attempt to login to the database user will be redirected to
the Online licensing service. If user has already registered on the
site, then he needs to log in using email and password specified during
the registration, either use Google or Facebook  service to log in. If
there is no account on the Online License site user has to [create new
one](online-license).

 
<div class="info">
Only Customer Administrator can activate license (see Login or
Registration section)
</div>

After logging in Online licensing window with information about database
will be opened. If user acts as administrator to several customers then
he should select corresponding associated customer from the dropdown
list.

After database license activation user activation window will be opened.
At this stage the machine with database will be activated and assigned
to the license.

<div class="warning">

The license linked to the machine fingerprint, not to the user.
 
 </div>
  
After activation process other machines can be linked with database.
Database has to be restored on the machines and login in the modeler.
User will be redirected to the Online licensing service where user need
to login or register to activate the machine.

<div class="info">

It is possible to login as a Customer Administrator (or one user)
to activate several machines.

</div>
    

After machine activation the name of the activated machine will be added
to the list of the machines associated with database license.

Customer Administrator is able to view the list of the machines and to
enable/disable it. To enable/disable machine go to the Machines tab on
the site and click on the name of the machine at the opened window
change the trigger Enabled to the proper position.

 

 ![](//images.ctfassets.net/utx1h0gfm1om/5JblOBlbPicaeWSACQ2qms/ea197fea48a35fd5be3ace4683406789/329191.png)

### Database License

The Database License is type of License when specific database is
licensed.  This is the standard type of license.  
The license is not connected with machine fingerprint and user can log
in to the database from any machine where it restored.

To change type of license from Named to Database contact Online License
site Administrator.

### Server License

Server license can be created by administrator user and can be used on
several computers. This type of license doesn’t work on virtual machine.
If the License Server application is installed on computer with
operating system Windows 8 or lower it is necessary to install Firewall
4.6.1.

To create Server license administrator user need to install License
Server application on the computer.

![](//images.ctfassets.net/utx1h0gfm1om/6QijZ3rMNaMYOqGmKsOoSA/a6fffea19f22bed4ff416e2362454bab/329189.png)

![](//images.ctfassets.net/utx1h0gfm1om/5a6SBy3VokqiYoCmKGGUUy/6f4ab412a6b2ad91d01f87f253ae199c/329152.png)

After installation it is necessary to import the database that user want
to make server (the database has to be already created) by entering
**License server management** menu and choosing **Import…**

The **Open** window will be opened. 

![](//images.ctfassets.net/utx1h0gfm1om/2vOTE3vjaAAGgIeKGuYQkC/06216aa17e4e8394eb48208cf2f51ef2/329155.png)

One or several databases that will be available from License Server have
to be selected from the list.  

![](//images.ctfassets.net/utx1h0gfm1om/6LrWrsEDfOE0iYgkGgoyOW/417693865ff73edeac4321badf2b87f0/329154.png)

After importing the database the server license activation has to be
carried out. User has to enter **File** menu and choosing **Activate
license…**

![](//images.ctfassets.net/utx1h0gfm1om/5wjMaYWRjOsUecosmEk2SI/175915396de6ced79f993acbe8ff387e/329157.jpg)

Activate License window will be opened. User has to Create new account
(see [**New user**](online-license) section) or Log in if already has one
by using an Email or Google or Facebook account.

Information about database displayed in the Activate License Window. If
user administrates several customers he has to choose corresponding to
this database **associated customer** from the dropdown list.

By clicking on the **Activate** button new server license will be
activated. 

After license activation the number of licenses in the
[Process4.biz](http://Process4.biz) License Server will be increased.
Now several users can have the access to the database with server
license on the network if License server application is installed on
user’s machine.

![](//images.ctfassets.net/utx1h0gfm1om/3ipIlQ2ChqYSC0AsK8YyiM/2175a03ca1745920119f37bfc35541a3/329156.png)

<div class="warning">
The number of database users working at the same time cannot exceed the
maximum number of Users allowed for this license.
  </div>

After license activation the license type has to be change in the
modeler. Open the License activation window and click the button
**Select licensing type**

![](//images.ctfassets.net/utx1h0gfm1om/3AJsCwRUkEK0QO0WSI6eu2/d1c5443c3dcb74a47624adf018be5c8f/329159.jpg)  

In the opened License activation window change the type of license from
ONLINE License to SERVER License and press the button **Next &gt;** .

Server licenses will be activated and user can login to the database in
the modeler. In the list of the databases only databases with server
license will be available.

#### Server License configuration

It is possible to configure License Server with static adress. In
License Server modal window open **License Server management...** menu
and select **Open configuration...** Here a User can set Server License
should use static adress.

![](//images.ctfassets.net/utx1h0gfm1om/6ik1ggesTKcMsiEiYg8QAW/38c645ae5440302d68037bca203e2052/329424.png)

This License Server address should be specified in **Client settings**
in the Modeler.

![](//images.ctfassets.net/utx1h0gfm1om/4i6kZuJoZiwGmWuAco6wSs/9817a390183df9f045faca0980cea481/329415.png)

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

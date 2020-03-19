Server license can be created by administrator user and can be used on several computers. This type of license doesn’t work on virtual machine. If the License Server application is installed on computer with operating system Windows 8 or lower it is necessary to install Firewall 4.6.1.

<div class="info">
  <h3>Important:</h3>

Version of License Server and Modeler may differ and it can lead to inconsistency in License Server operation. If on License Server start you receive the warning message, update your installation.
</div>


#### Installation

To install server license server on the computer that will be used for
licensing start the [process4.biz](http://process4.biz) setup
application. If you already installed Modeler on the computer you then
select Change function in the Setup window.

![](//images.ctfassets.net/utx1h0gfm1om/2E97DsIIgoeSAWoae0USea/207cae3d744a393735b6fa4cef5cbada/329438.png)

On the next installation page select the ServerLicensing and from the
drop-down menu select **Entire feature will be installed on local hard
drive**.

![](//images.ctfassets.net/utx1h0gfm1om/T27vrJmwmIMI8ECQOC8G8/795684f6710ec81d1f10d66d1f16d3b9/329432.png)

When the Server License service installed on the computer the server has
to be Started: **Start -&gt; process4.biz -&gt;
 process4.biz License Server x86 (or x64)**.

![Server License1](//images.ctfassets.net/6mz8d8cle1nl/2ddVOKQsstTugg1SNe1b2K/2e48ccd8f256ab06f51af168f7268fa4/Server_License1.png)



When Server License installed you need to request a Server license in the License server management by clicking Get a license... and enter user credentials on the online license site in the ActivateLicenseWindow. 

![Server License3](//images.ctfassets.net/6mz8d8cle1nl/7GEdTxiV7ekJxyM9N6lCDp/3667cfdf4ec54789adbb23c5683bb719/Server_License3.png)

If you are not registered on Online License site yet open menu of the ActivateLicenseWindow and click on Register and proceed with corresponding registration process. 

![Server License4](//images.ctfassets.net/6mz8d8cle1nl/6KMiA0CPh9IiXQ2lqWla4X/1a4f118e090c46f2e878b58f16c3da60/Server_License4.png)
 
Only after installation and getting license to current server you can import the database that you want to make server (the database has to be already created) by entering __License server management__ menu and choosing __Import…__ 
The __Open__ window will be opened. 

![Server License7](//images.ctfassets.net/6mz8d8cle1nl/64yFGuqp1nRID6RkViCRVA/5a3ee8525b050f854c8d57264e8a62e4/Server_License7.png)
 
One or several databases that will be available from License Server have to be selected from the list.  

![Server License8](//images.ctfassets.net/6mz8d8cle1nl/4jphtE3s157wW6Rr1lax7v/5634bca8fabb54dc0881603d756a0b5d/Server_License8.png)
 
After importing the database the server license activation has to be carried out. User has to enter __File__ menu and choosing __Activate license…__
 
![Server License9](//images.ctfassets.net/6mz8d8cle1nl/733HWCKakhXXZImRriMD1e/1bcb2700208f6bace9b37f5761da4ef9/Server_License9.png)

Activate License window will be opened. User has Log in on the Online License site by using an Email or Google or Facebook account.
Information about database displayed in the Activate License Window. If user administrates several customers he has to choose corresponding to this database __associated customer__ from the dropdown list.
By clicking on the __Activate__ button new server license will be activated. 
After license activation the number of licenses in the Process4.biz License Server will be increased. Now several users can have the access to the database with server license on the network if License server application is installed on user’s machine.

![Server License10](//images.ctfassets.net/6mz8d8cle1nl/ORE07jKdroxAkGOkF2NQ3/02e7f93345e1a35a90b9100f62b3d84a/Server_License10.png)
 
The number of database users working at the same time cannot exceed the maximum number of Users allowed for this license. 
After license activation the license type has to be change in the modeler. Open the License activation window and click the button __Select licensing type__. 

![Server License11](//images.ctfassets.net/6mz8d8cle1nl/6ZcDl8mGwnNqQyA27YAzwo/0c22791108a58759433ff94a516ade24/Server_License11.png)
 
In the opened License activation window change the type of license from ONLINE License to SERVER License and press the button Next > .
Server licenses will be activated and user can login to the database in the modeler. In the list of the databases only databases with server license will be available.

#### Server License configuration

It is possible to configure License Server with static adress. In License Server modal window open__ License Server management...__ menu and select __Open configuration...__ Here a User can set if Server License should use static address.

<div class="info">
  <h3>Note</h3>
To track down connections of Server License with Online license site check the box Enable logs in the Configuration window. Server license logs will be stored in the LicenseServer folder. 
</div>



![Server License12](//images.ctfassets.net/6mz8d8cle1nl/4yDIBukuCE2fNuZC9x7QZX/3f5428a541d0acd38a80c2fda5b4541a/Server_License12.png)
 
This License Server address should be specified in __Client settings__ in the Modeler.

![Server License13](//images.ctfassets.net/6mz8d8cle1nl/44BUhElYTaxx1VhZI9HbqY/cb61ccb2d96322f2439fe80916bdd584/Server_License13.png)


<hr style="padding-top:2rem" />
<a href="https://github.com/process4/docs/issues" target="_blank" class="bgw btn btn-primary btn-lg shadow-sm">Report an issue</a>
<a href="https://github.com/process4/docs" target="_blank" class="bgw btn btn-primary btn-lg shadow-sm" style="margin-left:10px;">View source code</a>
-   [Online License description](#online-license-description)
    -   [Port prerequisites](#port-prerequisites)
    -   [Registration process](#registration-process)
    -   [Managing Account](#managing-account)
    -   [Manage licenses](#manage-licenses)
    -   [Customer Administrator](#customer-administrator)
    -   [Licenses](#licenses)

## Online License description

Online License service allow users to get and manage licenses for
[Process4.biz](http://Process4.biz) MOD and EPS. All types of license
can be obtained by using the Online License Server in the internet. The
Online License allows customers and users to request
[process4.biz](http://process4.biz) license. Online License service
available to users of 7.0.1 release-build of porcess4.biz.

To make a request and manage the license user has to go through the
registration form on the website <https://registration.process4.biz/>.

### Port prerequisites

In order for license service to work, a client needs to be able to
access <https://registration.process4.biz> (i.e. port 443). 

For Server License the following ports need to be opened:

-   808 (TCP)
-   3702 (TCP + UDP)

### Registration process

Registration can be carried out in two ways: *Register a New User and
Customer* or *Register New User for existing Customer*. Select the first
option if the Customer hasn’t registered on the Online License service
yet.

 ![](//images.ctfassets.net/utx1h0gfm1om/43NfqMgmo8q8e8SG04yA66/6d03bd2437ad9e8474026f2bfcb66bbc/329542.png)

To register on the site user needs to fill in the following fields:

-   Name
-   Email that will be used as a Login name
-   Password (6 characters length minimum)
-   Confirm password
-   Mobile phone number (on which user receive security codes)
-   Customer name or Customer Reference ID (in case of registering for
    existing Customer)

After that user receive the security code sent to the phone and has to
enter it on the site. Then activation link will be sent to the specified
e-mail.

If a user is creating **New User and Customer**, then new customer will
be created and current user will be set as Administrator for this
Customer.



![](//images.ctfassets.net/utx1h0gfm1om/mpc4hZK0nIYqiquI4EuWa/39e8839ddeb6ffa0845dd083463e2d85/329556.jpg)

*Register a New User and Customer form*

### Managing Account

After registration on the site user can manage his personal account.

User can manage profile information:

-   Change password
-   External logins
-   Enable or disable two-factor authentication
-   Set and change Phone number
-   Remember browser

##### External logins

User can add Google or Facebook accounts for external authentication on
the Online License website. To specify the Facebook page, Google or
Microsoft account, enter to the account manager.

At the External Logins section press button **manage** and choose the
service you want to use for log in. User will be redirected to the
chosen site.

![](//images.ctfassets.net/utx1h0gfm1om/2FgAB5aMx220sYSEgcuyU/bd1a181a96071dd961714ccce761ab96/329169.jpg) User has to
enter the credentials at the corresponding service. Online License
application can use data from this service for logging on to the User’s
account on the Online License website.

##### Two-factor authentication

The two-factor authentication is provided to raise the security level of
the User’s account.. After standard login process User will get random
code by Email or text message (SMS) on his phone (if it’s specified).
This code has to be entered to the form on the login page. This is
necessary to protect the User’s account. Even if the Login and Password
are compromised the intruder won’t be able to get access to User’s
account. Only site Administrator can disable two-factor authentication.

##### Mobile phone Number

This function allow User to change mobile number on which security codes
will be send. Click Change and enter new Mobile phone number.

##### Remember browser

This function allows remembering browser for two-factor authentication.
User need not to authenticate with two stages each time when he uses the
same computer and same browser.

![](//images.ctfassets.net/utx1h0gfm1om/7E9M6tfyfekSOY2sac6uMi/73c33d697efddbb23953e67c3e380b21/329550.png)

*Manage account page*

### Manage licenses

In the profile user can view the list of licenses that are available for
him on the Licenses tab. The licenses can be sorted by the Customer
name, Product Key, Database ID, Active (True or False), user who Created
the license, Creation date or Expire date. It is possible to filter
licenses by Customer, for specified product (by product key), only
active or not active licenses, or licenses created by specified User by
choosing parameters from the corresponding dropdown menus.

 

### Customer Administrator

##### Edit customer

Customer Administrator can view General information of the Customer such
as Customer Reference ID that used to associate user with customer,
Maximum of licensed databases and whether customer is machine
administrator. On the second tab Customer Administrator can view list of
Customer’s users but cannot to change it. Several Customers can have the
same User as a Customer Administrator. On Licenses tab presented list of
customer’s licenses and Customer Administrator is able to deactivate it.
By clicking on Database ID Customer Administrator can view information
about license.

<div class="warning">
Customer Administrator cannot activate license back, make sure you
deactivating correct license
</div>
 

License template tab shows Customer Administrator set of bits which are
on or off for the license.

![](//images.ctfassets.net/utx1h0gfm1om/30x0DzpOogqccK4maMiG6i/a91bf0f324f0e772821cfdec7fef142f/329166.jpg)

### Licenses

Customer Administrator has access to Licenses tab where all Licenses of
the Customer are listed. The licenses can be sorted by the Customer
name, Product Key, Database ID, Active (True or False), user who Created
the license, Creation date or Expire date. It is possible to filter
licenses by Customer, for specified product (by product key), only
active or not active licenses, or licenses created by specified User by
choosing parameters from the corresponding dropdown menus.

 ![](//images.ctfassets.net/utx1h0gfm1om/7itLPOvRteKQ60iQi2Y6a4/e8800d37bdda021a3b7ea8ed7304f95e/329173.jpg)

By clicking on a database name Customer Administrator may see detailed
database license information such as general information, options,
license bits and list of users associated with this license. 

On the General Information tab the following information available for
Customer Administrator:

-   __Customer.__ Name of the Customer of this license. 
-   __Product.__ Type of the Product this license is associated with.
-   __Release-build.__ The release-build of the product for which the
    license is created.
-  __ Active.__ The trigger shows if this license is enabled at the
    moment.
-   __Extra Info (decimal).__ The decimal code that shows the bits
    activated for the license.
-   __Database ID.__ Database ID is a unique code that identifies the
    database.
-   __Database name.__ Name of database which Customer specify during
    database creation process.
-   __Types of License.__ The triggers shows what type of license it is.

 

On the License options tab the following information available for
Customer Administrator:

-   __Database users.__  The field shows maximum number of Users allowed
    working with the database at the same time.
-   __Domains.__ List of allowed domain names.
-   __Offline days.__ The number of days that shows how long user is
    allowed to work offline without connection to the Online License
    Server for checking the License.
-   __Expires.__ The date when the License will not be valid.
-   __Created.__ License creation date.
-   __Maximum diagrams.__ The maximum number of diagrams allowed for
    this database. If the number of diagrams is exceeded the user would
    not be able to create new diagram until some other diagram in the
    database will be deleted.
-   __Maximum objects__. The maximum number of objects allowed for this
    database. If the number of diagrams is exceeded the user would not
    be able to create new objects until some other object in the
    database will be deleted.
-   __Maximum files.__ The maximum number of files allowed for this
    database. If the number of diagrams is exceeded the user would not
    be able to create new files until some other file in the database
    will be deleted.

 

Also information about license bits, machines where this license
activated and historyof the license available for Customer Administrator
on corresponding tabs.

<div class="info">
The set of license bits can be established and changed only by Online
License Site Administrator
  </div>
To use SharePoint Synchronization user need to add already exiting
SharePoint site to the **SharePoint sites** list.  In the Database
settings select **SharePoint sites** tab. Here user can add new site,
edit or delete sites. If selected site is used for diagram storage, then
there are two kind of messages that appears for edit and delete actions.
That site cannot be deleted, so user just informed about that and
deletion is cancelled. And it is not recommended to edit such site
(because it may lead to not accessible diagrams), so user is asked if he
really want to edit that site.  
Site edition is performed in the following dialog.

To add new site to the list click the button **New…** 

 ![](//images.ctfassets.net/utx1h0gfm1om/2OoLQYjnRmqWA2qce0k0Kg/6300ca5f193f8d48540ed083b1742106/329161.png)

Edit the SharePoint site window will be opened.  User need to fill the
following fields:

- **Name**: The symbolic name for the site.

- **URL**: URL of the site.

- **Login credentials**: From the dropdown menu, user can select
credential type that will be used to authenticate with specified site.
There are three types:

  -   **Default credentials:** current windows-user credentials will be used (will be set on default).
  -   **Network credentials:** allow to use login and password of the
    SharePoint site (need to be specified).
  -   **Office365 credentials:** allow to use login and password of the
    Office365 (need to be specified). It is strongly recommended to use same Office account to log in to the SharePoint as used in Visio. 

- **Username:** login.

- **Password:** password.

- **Use the entered credentials as well for synchronization**: This
property determines if any user can use credentials entered above for
synchronization. If checked, user can use his own credentials, or select
to use credentials from site. Otherwise, user must provide credentials
to use synchronization.

- **Use as SharePoint site prefix in hyperlink properties:** there is a
functionality that hyperlink is marked in SmartTag if it's starts with
some predefined path. Now that functionality is extended to use list of
paths instead of only single one. To include SP site to that list one
should check this checkbox.

 ![](//images.ctfassets.net/utx1h0gfm1om/1bzu2DWZUu4EOcCIusq8ka/2da990920d3376b4f6db456e41240ded/329160.png)

 

Entered credentials will be used for any kind of configuration (whether
 for changing the diagram storage or for SP synchronization
configuration). User can use this credentails for synchronization if it
is allowed by the settings.

When user entered SharePoint site information and click OK button, the
connection to the site will be established. If information about site is
not correct, (URL cannot be resolved or there is no permission to access
the site under the specified credentials) the warning window will inform
user about this but by clicking “Yes” button the site information will
be saved anyway.

 


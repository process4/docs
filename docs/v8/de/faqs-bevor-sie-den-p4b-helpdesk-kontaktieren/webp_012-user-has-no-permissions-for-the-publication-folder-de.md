### Problem

You publish to the folder C:\\inetpub\\wwwroot. A message appears that
the user has no permissions for this folder. If you try to delete an
existing publication manually from this folder, the message "Access
denied" appears.

### Solution

The folder C:\\inetpub\\wwwroot is an IIS folder and could be blocked by
IIS. Restart the IIS and try to publish again.

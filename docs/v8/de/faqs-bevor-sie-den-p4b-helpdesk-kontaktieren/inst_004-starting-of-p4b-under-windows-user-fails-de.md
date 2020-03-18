### Problem

After roll-out of process4.biz with \*msi parameter, a simple windows
user starts Visio and see this message.

![](//images.ctfassets.net/utx1h0gfm1om/6LyIBTqBc4ScquGoSImqmS/6b0e844f0b000396521f973af7cfa4e5/328304.jpg)

After the Windows Administrator has started process4.biz once, a simple
Windows user can work with p4b.

Problem appears when

-   P4b is installed for the first time on a computer
-   Server License is installed
-   P4b is installed via \*msi file with parameters
-   Window user who starts p4b for the first time has no Admin rights

### Solution

Add this command to \*msi installation parameters:

"C:\\Programme\\process4biz\\Modeler\\P4B\_LicenseService.exe
QUIETEXIT".


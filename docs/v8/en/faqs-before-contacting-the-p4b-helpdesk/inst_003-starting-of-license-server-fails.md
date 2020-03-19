### Problem

You try to start the server license program from
***Start-Programs-Process4.biz-License Server-Start license server***
and receive a message that the log file cannot be written:

![](//images.ctfassets.net/utx1h0gfm1om/7qVuJCGBz288yMC6k8QOCC/d7895eb14404ec82428d2ba1643d7c2d/328004.png)

### Solution

You probably started it manually (and UAC is on).  
In this case, license server lacks the access rights to write to
"Program Files" folder (this folder is read-only for "normal users")  
Note that IF the license server is started BY SERVICE, there shall be no
such problem (in this case it will have all needed rights).

OR, it appears that there IS already a server running (probably run from
that service)  
So this file can be locked by that second instance of the server.  
This means also that it is possible that another instance of license
server had been already started from the Windows service, and it has
locked this file for itself.

To give all rights needed WHEN starting license server manually, you can
run License server from the menu using "Run As Administrator".


<hr style="padding-top:2rem" />
<a href="https://github.com/process4/docs/issues" target="_blank" class="bgw btn btn-primary btn-lg shadow-sm">Report an issue</a>
<a href="https://github.com/process4/docs" target="_blank" class="bgw btn btn-primary btn-lg shadow-sm" style="margin-left:10px;">View source code</a>
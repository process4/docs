### Problem

You publish a database in Web-Portal with WebPublisher, but the option
"Setup IIS website at target location" cannot be checked. What does this
mean and what are the consequences?

![](//images.ctfassets.net/utx1h0gfm1om/7GNqGRRE0EySscoWMwYwI8/a7eb74d7529c2fd44beface12f908517/328910.png)

 

### Reasons

This option is disabled, because IIS (Internet Information Services) are
not installed on your computer. IIS is a cost free part of Windows XP
PROFESSIONAL (not HOME edition) and can be installed anytime by using
your Windows Setup CD.

### Consequences

If you publish to your local computer and do not have another service
installed on localhost (e.g. Apache Webserver), it is necessary to
install IIS. Otherwise websites for the local portal cannot be generated
and opened.

If you do not publish on the local computer, but your Web-Server runs in
LAN, then you do not need to install IIS on your local computer and it
does not matter that this button is disabled. You can publish anyway if
you have WebPublisher licensing on your PC, but you have to move the
published files from your PC to the Webserver in the LAN. Please
note that IIS in this case do not have to be installed on the computer
where you publish your database content.


<hr style="padding-top:2rem" />
<a href="https://github.com/process4/docs/issues" target="_blank" class="bgw btn btn-primary btn-lg shadow-sm">Report an issue</a>
<a href="https://github.com/process4/docs" target="_blank" class="bgw btn btn-primary btn-lg shadow-sm" style="margin-left:10px;">View source code</a>
### Problem

Exception 0x800AC472 on export/import to/from Office 2013 document.

![](//images.ctfassets.net/utx1h0gfm1om/4wn1fjSnraAagWsGmKU40K/fbfbe7a03c93bf3ca6d25a36de9a038d/327976.png)
![](//images.ctfassets.net/utx1h0gfm1om/6U2ggdJWeIY6e8a80kYmGI/cf5394fe05e476fa3600ef8952ff99af/327977.png) 

### Reason

The problem is that the unregistered Office always shows a
message-window with a registering proposal, but this completely breaks
all "automation" stuff.This means: All invisible automation of object
handling from Excel, Word or Visio starts in background, which shows a
for the users invisible message-window that waits for their clicking of
a button, but instead crashes the automation link. This rises the error
with code "0x800AC472" representing a timeout exception.

### Solution

 It may be fixed later in some Office patch by Microsoft. 


<hr style="padding-top:2rem" />
<a href="https://github.com/process4/docs/issues" target="_blank" class="bgw btn btn-primary btn-lg shadow-sm">Report an issue</a>
<a href="https://github.com/process4/docs" target="_blank" class="bgw btn btn-primary btn-lg shadow-sm" style="margin-left:10px;">View source code</a>
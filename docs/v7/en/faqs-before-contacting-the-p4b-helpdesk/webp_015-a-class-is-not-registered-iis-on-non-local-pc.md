### Problem

You publish a model to the Webpublisher-Portal, but publishing is not
successful. In the log file you can see the following error message:  
"**Klasse nicht regiestriert. Failed to access MSAdminBase interface**"

![](//images.ctfassets.net/utx1h0gfm1om/2iWYAvWUCkcAQmOgwGAK8E/649801ed20992aa666f3e2467a3881e7/328312.png)

 

### Reasons

You publish a model to a non-local computer and at the same time you
check the "Setup IIS website at target location" flag. But the
Web-Publisher can create this website only locally.

### Solution

When you start the Web-Publisher and define the settings of the model
you want to publish, do not check the "Setup IIS website at target
location" flag. This means that for publishing you will use the already
existing website. You can define the location of this website in a
previous step of this dialog.

![](//images.ctfassets.net/utx1h0gfm1om/20ffVaQJIoE4sYE0emICKQ/e2063d4c9fec24234a05bd03deb68bcf/328313.png)

 

To update an existing web publication, select the respective web
publication from the WebPublisher. The following options are then
available:

### (Re-)publish the whole model

When this option is enabled, whole model will be published including
modified and not modified settings. The publication process will take
long time, especially for large database. 

### Incremental publication WITH modified settings (only applies to the new content)

When this option is enabled, only modified data will be updated in the
publication. This contributes to a considerably faster publication
process and is specifically recommended for large databases. This allows
you to continue or repair a paused publication, if it could not be fully
completed due to lack of resources. Modified settings will be applied
only to new content.

### Incremental publication WITHOUT modified settings

When this option is enabled, only modified data will be updated in the
publication. This contributes to a considerably faster publication
process and is specifically recommended for large databases. This allows
you to continue or repair a paused publication, if it could not be fully
completed due to lack of resources. In this case you can skip settings
of the publication and all new content will be published with previous
publication settings.

### Keep the previously as "Approved" published diagrams / objects even if their current status in the Modeler is not anymore approved

Enable this option to publish diagrams or objects in their last approved
status, even if it is not "Approved". Other settings regarding the
management of approved/unapproved content in the web publication are
described in [approval management](approval-management).

The update process runs automatically after selecting these options.

![](//images.ctfassets.net/utx1h0gfm1om/5A9hCQ4dFYOY6I2WAsKAGA/7d91cf3e8b063e202a4f02caf2525c26/329082.png)

 


<hr style="padding-top:2rem" />
<a href="https://github.com/process4/docs/issues" target="_blank" class="bgw btn btn-primary btn-lg shadow-sm">Report an issue</a>
<a href="https://github.com/process4/docs" target="_blank" class="bgw btn btn-primary btn-lg shadow-sm" style="margin-left:10px;">View source code</a>
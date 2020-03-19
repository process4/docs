SharePoint document library can be chosen as diagram storage. To do so
one should create a SP site in Db Settings and then execute '**Change
diagram storage**' wizard from *'Diagram'* part of the visio ribbon. In
that wizard there will be a page to select diagram storage, where SP
library can be specified.  
![](//images.ctfassets.net/utx1h0gfm1om/5ZppyPuxvGuMgcYSeCQQc6/3e562729ed5360b36755fa7ba22a2840/329498.png)

-   **Site:** user should choose from list of existed SP sites (if site
    is already used as diagram storage, it is specially marked).
-   **Library:** document library of the chosen site where user wants to
    store diagrams. List is filled with all document libraries of that
    site.
-   **Sync rule:** Select an existing rule or create a new one for
    selected site, where diagram synchronization can be configured. By
    default synchronization for diagram name is enabled (and cannot be
    disabled). User can change that value without changing of anything
    else to just to relocate diagram synchronization from one rule to
    another.

When wizard is successfully finished, all diagrams are moved to selected
document library of selected site. Selected rule (or new rule that was
created) is configured to perform diagram synchronization. User then can configure that rule to choose diagram properties to synchronize.

<div class="warning">
  <h3>Important</h3>
Deleted diagram in SharePoint would not be deleted from the Modeler.

If you want to change diagram storage from one SharePoint site to
another make sure all diagrams deleted in SharePoint are deleted in
Modeler too.
</div>

![](//images.ctfassets.net/utx1h0gfm1om/6BvnByGX9mUuu2IOouWeS0/c0aa150b88c2d68f4c2159cdf92771ae/329504.png)


<div class="info">
  <h3>Info</h3>
  After DB Upgrade SharePoint site got created without credentials. Enter valid credentials for the site to operate with diagrams stored in SharePoint site.    
</div>

<hr style="padding-top:2rem" />
<a href="https://github.com/process4/docs/issues" target="_blank" class="bgw btn btn-primary btn-lg shadow-sm">Report an issue</a>
<a href="https://github.com/process4/docs" target="_blank" class="bgw btn btn-primary btn-lg shadow-sm" style="margin-left:10px;">View source code</a>
## SharePoint Approval management

![](//images.ctfassets.net/utx1h0gfm1om/oGWoQPvzwWgk2UwiMm2cc/e5bdc146bf12c040e0d27ed6ba3de9e3/329158.png)

  
In the SharePoint Approval management approval statuses can set in the
SharePoint and then imported to the modeler.

First of all to set up SharePoint Approval manager user need to change
the diagram storage to SharePoint. After that in the Database settings
on the Approvals tab SharePoint Approval management will appear in the
Kind of approval management drop-down list.

When SharePoint Approval management selected make available settings:

-   *Enable the comment field in the approval dialogue*.

When the checkbox of this option is marked, additional field for
approval comment will be added. This field may be left blank.

-   *Enable the creation of new version snapshots only if all approval
    management statuses have been approved.*

When the checkbox of this option is marked, the creation of new
[database versions](version-management)
is forbidden if there are unapproved diagrams.

-   *Allow on a per diagram selection basis to retain once approved
    diagrams in the WebPublisher.*

When the checkbox of this option is marked, new property "keep old if
not approved" is added to the diagram properties for which the approval
management is enabled. By activating this property pre-approved diagrams
will be kept in the [web publication](webpublisher)
if the status of the diagram has changed since the last publication to a
non-approved.

After turning on SharePoint Approval management all diagrams stored in
the Share Point become approved.

<div class="info"> 
  To refresh approval statuses and changed properties of diagrams
user need to tick the checkbox “Update the SharePoint data as well when
the refresh button has been clicked” in the Client settings on Views
tab.
  </div>

There are four approval statuses available in the SharePoint Approval
Management:

-   *Approved*. The status means that diagram is accepted and approved
    (If diagram is approved in the SharePoint then there is no markup on
    the diagram’s icon in the modeler).
-   *Pending*. The status means that the diagram waiting for approval
-   *Draft*. This status is awarded to newly diagram and when work on
    the diagram is in progress
-   *Rejected.* This status means that the diagram is not accepted and
    not approved


<hr style="padding-top:2rem" />
<a href="https://github.com/process4/docs/issues" target="_blank" class="bgw btn btn-primary btn-lg shadow-sm">Report an issue</a>
<a href="https://github.com/process4/docs" target="_blank" class="bgw btn btn-primary btn-lg shadow-sm" style="margin-left:10px;">View source code</a>
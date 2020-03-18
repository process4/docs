URL (to Exchange Web Services), domain, login, password and version of
Exchange Server should be specified to link tasks with exchange. User
should have an **ApplicationImpersonation** role in exchange.

<div class="success">
  
How to setup that role in Exchange 2010 SP1 -
[msdn.microsoft.com/en-us/library/bb204095%28EXCHG.140%29.aspx](http://msdn.microsoft.com/en-us/library/bb204095%28EXCHG.140%29.aspx)
  
  </div>
  
  

Exchange version should be at least 2007 SP1 (all previous versions do
not support API).

![](//images.ctfassets.net/utx1h0gfm1om/2C1oU5FgSMoME8YSuE2OE4/6f650b3832ae5cedfa01aeb545723b77/328861.png)

Apparently, that version should be specified only to limit allowed
actions in API. But in TaskManagement all used functionality is
presented in 2007 SP1 version. Therefore,  apparently we can remove this
setting. "Check the certificate" option is also not important.

By enabling this option, certificate of exchange server will be tested
on connection. Connection will be allowed only for a server with valid
signed certificate or with self-signed certificate with untrusted root.
When creating a new task, the executor can be selected from the list of
known users.

When pressing "Load the contacts" button, this list is filled from
address book of the exchange user specified in settings for integration.
If "Forbid to edit the tasks in p4b which have already been sent to
Outlook (Exchange server)" is enabled, all tasks that were linked with
exchange tasks, cannot be edited in modeller. All those tasks should be
edited in exchange, and can be loaded from exchange to p4b.

"The deletion of a task in p4b shall remove it automatically as well
from the Exchange server" is for enabling automatic deletion of a task
from exchange when a linked task is deleted in p4b. So when a task is
deleted in p4b, p4b tries to delete the task from exchange as well. The
result of that deletion will not affect the initial task deletion in
p4b.

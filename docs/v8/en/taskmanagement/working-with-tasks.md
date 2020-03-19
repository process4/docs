## Object Context Menu

Select any data-object in repository or shape on diagram and right-click
on it. There is an item "Synchronize with exchange server" in context
menu. (This applies too for multiple object\\shape selection). Here
functions to work with tasks of selected object(s) can be found. Tasks
can be created, task data can be loaded from exchange or send to
exchange, and already linked tasks can be deleted from exchange.

![](//images.ctfassets.net/utx1h0gfm1om/27op81FPDW0aM2Qw2iKoEY/db240a94bc7a6b86ab0000eb5b7f7043/328851.png)


### Sending Data to Exchange

In order for a task to appear in exchange, it should be sent there using
the appropriate command from context menu. For each task not linked to
exchange from p4b, an appropriate task will be created in exchange,
filled with data from p4b task, and p4b task will become linked with
exchange. Executor will receive e-mail to its exchange e-mail address
informing it that a task was created for it from p4b. Data for each
linked task will be sent from p4b task to exchange task. Command
execution will affect all tasks of selected object(s).

![](//images.ctfassets.net/utx1h0gfm1om/6hi7g5rfa0Y4iguYIE6woo/82292ae0dd494bd2df873845f24b63d9/328865.png)


### Getting Data from Exchange

To get data from Exchange to link with exchange tasks use the command
"Refresh all tasks". Data for all tasks of selected object(s) linked
with exchange will be updated from exchange.

![](//images.ctfassets.net/utx1h0gfm1om/5gPSmHxXkIIOQw4WowSuwW/16f7fa90c623fa2e2c85cb537990ee14/328855.png)

### **Deleting Tasks from Exchange**

To delete all linked tasks of selected object(s) from exchange use the
command "Delete all tasks from Exchange server". All task owners in
exchange will receive an e-mail informing them that the task was
deleted.

## Task Creation

![workingwtaskM en](//images.ctfassets.net/6mz8d8cle1nl/6GWZZUXig99J6Eo4tAXiZF/1825bbb4d536ae860867f9ee727b02ce/workingwtaskM_en.png) 

Various properties should be filled while creating a new task in p4b.
E.g. executor (for integration with exchange e-mail in exchange server
should be used), subject, task description and many other task-related
properties (direct analog with task properties in exchange or outlook).
Also each p4b task has the property **Synch** **status**, where the
status of last synch operation is stored. It informs whether that task
is not linked with exchange at all, was successfully synched, or whether
synch failed on creation or data-exchange. The executor property can be
filled manually (and it is possible to specify not only the e-mail but
the name too – use **NAME &lt;E-MAIL&gt;** format). The executor can
also be selected from the list of previously loaded contacts from
exchange. To do this, use button "...". 

![workingwtaskM2 en](//images.ctfassets.net/6mz8d8cle1nl/4ER6dXmY7LZR2j7J7PCFVi/4fedc1e94bc84b3f35c2c2fb333dd6dd/workingwtaskM2_en.png)

In that dialog any previously
loaded contact can be selected and filled as executor for task.

## Viewing Tasks

In dependencies view or in the property explorer view of the modeller, a
tab named **Tasks** exists. Switch to that tab to find the list of all
tasks assigned to selected object(s) and be able to work with any single
task.  Here is presented a list of all tasks of currently selected
object(s) with some of their properties. By double-clicking on any task,
the refresh operation on that task is executed (the data for the task
will be loaded from exchange server). By right-clicking on any task (or
any empty space of that view), the context menu appears, where the
command for task management can be found. Two types of command exists –
the command that affects only selected tasks and the command affecting
all tasks in view. 

![](//images.ctfassets.net/utx1h0gfm1om/55f7HVyH6oEuwkQQeSoCGW/27df4fce7a03ac8c51f90f7f8510bcb8/328853.png)

 

### Properties

By using the command "Properties…" , a window similar to task creation
will be opened. All properties will be filled from the selected task.
Depending on the settings and task status (whether it is linked to
exchange or not) that data can be modified or will be available only in
read mode.

### Deleting Tasks from p4b

By using the command "Delete", selected tasks can be deleted from p4b.
Depending on the settings execution of this command, you can also try to
delete respective tasks from exchange (linked with tasks that are
currently being deleted). In this case, the executor of that
exchange-task will receive an e-mail about task deletion.

### Synchronize the Selected Task to Exchange

It works similarly to "Synchronize tasks", but instead sends data of
only selected tasks, while leaving all other tasks intact.

### Deleting Selected Tasks from Exchange

Like all other commands on selected tasks – works similarly to the all
tasks version, but only on selected tasks.

### Same as Object Context-Menu Commands

All other commands are exactly the same as context menu commands of
object(s) in repository or shapes in modeller.

<hr style="padding-top:2rem" />
<a href="https://github.com/process4/docs/issues" target="_blank" class="bgw btn btn-primary btn-lg shadow-sm">Report an issue</a>
<a href="https://github.com/process4/docs" target="_blank" class="bgw btn btn-primary btn-lg shadow-sm" style="margin-left:10px;">View source code</a>
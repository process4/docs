To work in the [Database Designer](database-designer) on design
elements, it is necessary that the administrator (or a user with design
rights), locks the needed unit first. Contents of locked units, then
while still be visible in the [repository](repository) but not editable
for the period of the lock.

#### Lock or Unlock a Unit

1.  Use the left mouse button, to chose the unit in the navigation pane
2.  Open the context menu with the right mouse button and then select
    the serren function (or unlock)

As a result, we now sent a message to all user, to inform them about the
lock and if necessary to give them the opportunity to still save their
current work. This message can be provided by the blocking users with a
maximum waiting time for the reply of the other users; after this
maximum waiting time, the unit is locked by the system.

The symbol of a locked unit receives after the successful blocking a
small lock and the symbols of the elements contained in this unit change
color from gray to colorful to indicate that they are now editable.
Units that have been locked by other users, are gray and also marked
with a small lock.

If the Admin clicks unlock, the corresponding unit will be unlocked and
all other users will be notified with a message.

![](//images.ctfassets.net/utx1h0gfm1om/uyYMGL0796eiwaK8ICIIW/bd52abf52e78ad856aae3ec4b3492819/329628.png)

*Locking the Database Structure*

#### Editing in the Designer without Locking

In the [database settings](database-settings) it can be defined, by
setting the appropriate hook, that editing the design elements should be
possible without locking. You save an extra step when configuring the
database structure, because you do not need to lock / unlock the units
for processing.

<div class="error">
Attention:

This option is recommended only for single-user installations, as the
simultaneous processing of the database structure in multi-user
operation may result in database conflicts.
</div>

![](//images.ctfassets.net/utx1h0gfm1om/2tnfPYtUDKO4sQm266CAEe/11bf29a96c2ef6047c44ff4e29d30130/329635.png)

*Global editing of design elements without blocking permit ([database
settings](database-settings))*
<hr style="padding-top:2rem" />
<a href="https://github.com/process4/docs/issues" target="_blank" class="bgw btn btn-primary btn-lg shadow-sm">Report an issue</a>
<a href="https://github.com/process4/docs" target="_blank" class="bgw btn btn-primary btn-lg shadow-sm" style="margin-left:10px;">View source code</a>
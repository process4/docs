Starting from the 7.0.2 release-build of Modeler User can check out
Server license. This functionality allow User to work with Server
license offline and without connection to License Server . The number of
offline days is defined in the license options.  It is not possible to
check out the license when there is 0 offline days is set for it. User
can check if it possible to check out the license in the license
activation window within the Client license information.

  
<div class="info">
Make sure that Server license is started or you can
connect to it.
  </div>

To check out the Server license User need to Login to necessary database
and open License activation window and click CheckOut button. After that
License for this database will be checked out by User.  

User can work offline without connection to Server license as many days
as Offline days set for this license in License options. When offline
days will go by Check out will be taken off from the license and User
won’t be able to work with current license.  

The Server License can be checked out several times if there are several
users allowed to work with this database. Every check out locks one slot
so the number of allowed users become one less.

When there is no necessity to have license checked out a User need to
open License activation window and click CheckIn button. Check out will
be removed from the current license.

<div class="warning">
If for current Server license  bit AnyDB is off the Modeler can’t work
with its own Databases. Modeler will take list of Databases from the
Server License application. So User can work with Modeler only with
connection to Server License unless the Database was checked out.
</div>
 


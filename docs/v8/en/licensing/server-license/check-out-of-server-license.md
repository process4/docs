Starting from the 7.0.2 release-build of Modeler User can check out
Server license. This functionality allow User to work with Server
license offline and without connection to License Server . The number of
offline days is defined in the license options.  It is not possible to
check out the license when there is 0 offline days is set for it. User
can check if it possible to check out the license in the license
activation window within the Client license information.

![Cherck out SL](//images.ctfassets.net/6mz8d8cle1nl/vGdebUecfPAxJ1ibNh47u/a1c2688bc869c9ce18e0ac540d8a4565/Cherck_out_SL.png)

<div class="info">
  
Make sure that [Server license](server-license) is started or you can
connect to it.

  </div>

To check out the Server license User need to Login to necessary database
and open License activation window and click CheckOut button. After that
License for this database will be checked out by User.  

![Cherck out SL 2](//images.ctfassets.net/6mz8d8cle1nl/RzHtHiK32b5ZvrZcXKE7y/74628f0bc5cf3445274f4114e817ece5/Cherck_out_SL_2.png)

User can work offline without connection to process4.biz Server License. The offline days are set in the license option. When the offline days are passed, user won’t be able to work offline and will be required to connect with license server.

If it is less than 1 day till license expiration day that was checked-outed warning message will appear in the modeler. 
When the license expired you will be logged out and current license will be checked in. 

The Server License can be checked out several times if there are several
users allowed to work with this database. Every check out locks one slot
so the number of allowed users become one less.

When there is no necessity to have license checked out a User need to
open License activation window and click CheckIn button. Check out will
be removed from the current license.



<div class="warning">

</div>
 
<div class="warning"> 
 <h3> Warning </h3>  
  
 Checked outed license should be checked in before Modeler updating.
  
  </div>

<hr style="padding-top:2rem" />
<a href="https://github.com/process4/docs/issues" target="_blank" class="bgw btn btn-primary btn-lg shadow-sm">Report an issue</a>
<a href="https://github.com/process4/docs" target="_blank" class="bgw btn btn-primary btn-lg shadow-sm" style="margin-left:10px;">View source code</a>
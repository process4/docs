### Problem

You are logging in to DBConfig for the first time and have to enter a
new password. However, the following error appears:

![](//images.ctfassets.net/utx1h0gfm1om/1Cr0SPsymgSQEIwyUSuc44/751333ea7e83cfdc3489f70168e0a01c/328321.png)

 

![](//images.ctfassets.net/utx1h0gfm1om/1W2ryCy29SWeyMO2UceIqK/e7e1ca95081e95a37cc8686c1784e914/328320.jpg)

### Reasons

You have logged in to Windows under a user, who does not possess
administration rights. This means that this user does not have
permission to write into the registry of Windows OS. That is why the new
password cannot be saved.

### Solution

You should try to log in to Windows under Administrator, start DBConfig
and enter the password. After that, you will be able to continue working
with DBConfig under the previous user.


<hr style="padding-top:2rem" />
<a href="https://github.com/process4/docs/issues" target="_blank" class="bgw btn btn-primary btn-lg shadow-sm">Report an issue</a>
<a href="https://github.com/process4/docs" target="_blank" class="bgw btn btn-primary btn-lg shadow-sm" style="margin-left:10px;">View source code</a>
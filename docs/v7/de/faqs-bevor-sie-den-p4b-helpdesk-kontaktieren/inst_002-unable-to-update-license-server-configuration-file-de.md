### Problem

On Windows Vista or Windows Server 2008 you start p4b and tick the
check-box "***Activate server licensing***" (server license program is
started somewhere in LAN). The message "License Server Configuration
cannot be updated" appears:

![](//images.ctfassets.net/utx1h0gfm1om/1gjrgJKfzQkqUmE0UkWQeM/930677231789f4d9499798fbab1c54f3/328015.png)

### Solution

You have not enough permissions to write the IP-address from server
license to the folder *Program Files/process4biz*. Simply start the
process4.biz as Administrator (right-click on process4.biz - ***Run as
administrator***).


<hr style="padding-top:2rem" />
<a href="https://github.com/process4/docs/issues" target="_blank" class="bgw btn btn-primary btn-lg shadow-sm">Report an issue</a>
<a href="https://github.com/process4/docs" target="_blank" class="bgw btn btn-primary btn-lg shadow-sm" style="margin-left:10px;">View source code</a>
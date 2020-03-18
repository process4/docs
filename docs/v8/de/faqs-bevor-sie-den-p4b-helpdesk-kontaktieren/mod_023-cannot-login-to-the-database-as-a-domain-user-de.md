### Problem

You are logged in to Windows as **Domain-User** and in process4.biz you
have created this windows user. However, if you try to login to
 process4.biz as Windows (Domain) user (when logging in you check **"Use
Windows NT integrated Security"** flag), this error message appears:  
**"Failed to authorize user. Either user name or password is not valid
for the database".**

![](//images.ctfassets.net/utx1h0gfm1om/6D9TzUoDMA0yWMKoIIsSe0/786cd21338077fd5b0861a14747c9aae/328269.png)

### Reasons

The most likely reason is that your Domain-User name begins with a small
letter and the Windows-User name that you have added to process4.biz
begins with capital letter. Or vice versa.

### Solution

1.  You can change the name of the Windows Domain-User  
    or
2.  Change the name of the Windows user in process4.biz via SQL Server.


### List of databases is not shown in the DBConfig

The SQLServer is installed in LAN and p4b with DBConfig is installed
local. In the DBConfig you can see the **Database server name** but
cannot see the list of databases.

![](//images.ctfassets.net/utx1h0gfm1om/3v3AzEZohiks4A4CGUuyUK/5964eb7d1603ec18131bb595e001309d/329410.png)

 

### Solution

You should start the **SQL Server Browser** and enable the **TCP/IP**
port.

Start the **SQL Server Configuration Manager** and open ***Properties***
for the **SQL Server Browser**.

![](//images.ctfassets.net/utx1h0gfm1om/6YqNqnW7OoKg240EuiCsIY/534b2cd183cb527d8c7e1e20c171bcf3/328028.png)

 

Set** **the **Start Mode** to ***Automatic*.**

**![](//images.ctfassets.net/utx1h0gfm1om/19O95jfAYcSyO2yks6U2Eq/a2291af34a752c0ba295ad8fd3bc68c5/328029.png)  
**

 

Start the **SQL Server Browser**.

![](//images.ctfassets.net/utx1h0gfm1om/2dhS9uWaXiCqMEeuoOmS6a/2e473a15a851b169202081c29ae943f4/328030.png)

 

Most probably you should also enable the **TCP/IP** port.

![](//images.ctfassets.net/utx1h0gfm1om/6Eu7f9IDn2Ok2G4GcyYquG/a313431dc44d2fe9439f6e3a7545a58a/328031.png)

 

And then restart the SQL Server.

![](//images.ctfassets.net/utx1h0gfm1om/1rn7Z4uOxe4csIsUGKCsOW/40522b8196fadee5b03190a15bce07ba/328032.png)

 


<hr style="padding-top:2rem" />
<a href="https://github.com/process4/docs/issues" target="_blank" class="bgw btn btn-primary btn-lg shadow-sm">Report an issue</a>
<a href="https://github.com/process4/docs" target="_blank" class="bgw btn btn-primary btn-lg shadow-sm" style="margin-left:10px;">View source code</a>
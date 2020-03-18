### Problem

You install the p4b setup and activate the installation of the demo or
the empty db. You enter the sql username (sa) and password. The
connection to SQL Server is successful.

!Install1.png! You proceed with the setup. During the installation, the
following message appears.

![](//images.ctfassets.net/utx1h0gfm1om/33ikI4Kbd6a0CYOUcyw8oO/7cf42e109458ea0f4efe2560cc893ca8/327993.png)

### Solution

The problem is caused due to misfit between the domain password policy
and the current password for "sa" SQL-user.  
Most probably, "sa" password has less characters as it is forced to use
by domain policy (7 characters):

![](//images.ctfassets.net/utx1h0gfm1om/eNmAbNsj28qWEoIQUkmwM/cea22128b4fc833f87c72d84159b1e30/327994.png)

If the policy password in Windows is enabled and the SQL user password
does not apply to policy, then during the installation of the
application an error occurs.

Here are two possible solutions:

1. Change domain policy. It is the most dangerous way and we do not
recommend it.

2. Change password for "sa" user - in this case it should be at least 7
characters long.

![](//images.ctfassets.net/utx1h0gfm1om/4k9Wqd7K1W8AaosamGeEIY/e3573ef782bbee51bc4a88ed78d17298/327995.png)

 


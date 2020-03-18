### Problem

If you experience one of the following situations, then read the solution below: 


- Execution of WordReporter does not finish completely, although progressbar has reached the end
- During execution of WordReporter you see a "Save as..." dialog window, asking you to save Word template

### Solution

Try deactivating all MS Word COM Add-ins. The list of all available Add-ins can be found in: File > Options > Add-ins > Manage COM Add-ins > GO... (at the bottom of the window).

In particular, we have found out that "Send to Bluetooth" causes problems:
![sendtobluetooth](//images.ctfassets.net/utx1h0gfm1om/4xFGZoAzFZKxw4tvNw1Ifx/aed6fd344af1e2730e42a5781eeee22b/sendtobluetooth.png)

Please be aware, that process4.biz support only standard installations of Microsoft Office, i.e. installations without any Add-ins. 
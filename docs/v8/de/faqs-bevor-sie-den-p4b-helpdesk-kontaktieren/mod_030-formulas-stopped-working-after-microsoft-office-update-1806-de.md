## Problem

After logging in to your database you receive a warning message at the
bottom that typically looks similar like the following example:

![](//images.ctfassets.net/utx1h0gfm1om/23cR2tWKIoKIWWY6iogYoc/1902437800f40e876be2041c60537029/329361.png)

Also, all of the formulas are not working and/or are shown incorrectly.

## Affected Visio Version

Before solving the problem, you should make sure that we are talking
about the same issue. Only the following Office and Visio Versions are
known to be affected by this issue  

-   **16.0.10228.20080**
-   **16.0.10228.20104**  
    **  
    **

To check your Visio Version Go to 

***File***

***Account***

***About Visio*** 

![](//images.ctfassets.net/utx1h0gfm1om/47UCwnsKZyqKOsMKk0kQey/66420d1df5c468b9d339d92fa443b9a0/329211.png)

If you have Version 16.0.10228.20080 or 16.0.0.10228.20104 then you are
affected,

If you have (future) higher versions you might be affected - future will
tell.

If you have a lower build you are not affected.

Like in the example above you most likely have received the 1806 update
as automatic update service (e.g. Monthly Channel) which is usually
unrecognized by its users, until it isn't.

You can check your Update Settings via

***File***

***Account***

If you see an Office Updates option like the example below then you use
C2R, Click-to-Run or 365, which by default means the updates of your
Visio are triggered by Microsoft remotely.  
***![](//images.ctfassets.net/utx1h0gfm1om/1LHSUyaZC0K4SGUQkYEUoA/2f072d990b10bfc0929c7527acd4e9fe/329212.png)***

Your Windows Version seems unrelevant, we have replicated the issue on
Windows 10 back to Windows 7.

The problem has wider affects than affecting Visio and process4.biz. It
is verified to have the same impact on all office components e.v.
Excel/Word/..., only Outlook seems unaffected. 

[https://social.msdn.microsoft.com/Forums/en-US/a4d67690-0e54-4f1e-8bb1-e6c9a433c99a/cannot-create-vbscript-engine-in-an-office-comaddin?forum=officegeneral](https://social.msdn.microsoft.com/Forums/en-US/a4d67690-0e54-4f1e-8bb1-e6c9a433c99a/cannot-create-vbscript-engine-in-an-office-comaddin?referrer=https://social.msdn.microsoft.com/Forums/en-US/a4d67690-0e54-4f1e-8bb1-e6c9a433c99a/cannot-create-vbscript-engine-in-an-office-comaddin?referrer=https://social.msdn.microsoft.com/Forums/en-US/a4d67690-0e54-4f1e-8bb1-e6c9a433c99a/cannot-create-vbscript-engine-in-an-office-comaddin?referrer=https://social.msdn.microsoft.com/Forums/en-US/a4d67690-0e54-4f1e-8bb1-e6c9a433c99a/cannot-create-vbscript-engine-in-an-office-comaddin?forum=officegeneral)

<https://support.microsoft.com/en-us/help/4058123/security-settings-for-com-objects-in-office>

***  
***

## **Solution**

The problem is caused by a Microsoft Office Update due to activation of
filtering (a.k.a. disallowing) of VBScript engine
usage. 16.0.10228.20080 does change the default filtering to on. The
installation of 16.0.0.10228.20104 explicitly turns on the
filtering (a.k.a. disallowing) of VBScript engine usage.

To continue to use Microsoft Office COM AddINs that make use of the
VBScript Engine, like the process4.biz Modeller in Microsoft Visio, you
need to update your registry to be able to continue to work after the
above mentioned Microsoft Office Updates. 

1.  download or create the file
    [process4FixPermissionForComAddINsGenerallyPlusVisioExplicit.reg](https://help.process4.biz/process4FixPermissionForComAddINsGenerallyPlusVisioExplicit.reg) with the following content:  

        Windows Registry Editor Version 5.00

        [HKEY_LOCAL_MACHINE\SOFTWARE\Microsoft\Office\ClickToRun\REGISTRY\MACHINE\Software\Microsoft\Office\16.0\Visio\Security]
        "ActivationFilter"=dword:00000000

        [HKEY_LOCAL_MACHINE\SOFTWARE\Wow6432Node\Microsoft\Office\ClickToRun\REGISTRY\MACHINE\Software\Microsoft\Office\16.0\Visio\Security]
        "ActivationFilter"=dword:00000000

        [HKEY_LOCAL_MACHINE\SOFTWARE\Microsoft\Office\ClickToRun\REGISTRY\MACHINE\Software\Microsoft\Office\16.0\Common\COM Compatibility\{B54F3741-5B07-11cf-A4B0-00AA004A55E8}]
        "ActivationFilterOverride"=dword:00000001

        [HKEY_LOCAL_MACHINE\SOFTWARE\Microsoft\Office\ClickToRun\REGISTRY\MACHINE\Software\Wow6432Node\Microsoft\Office\16.0\Common\COM Compatibility\{B54F3741-5B07-11cf-A4B0-00AA004A55E8}]
        "ActivationFilterOverride"=dword:00000001

         

2.  Run (double-click) the .reg file (you need local administrative
    permission / local elevated rights)
3.  If you want to get control when the next update hits you, you can
    change/turn off your Office Updates setting, or use Update
    Policies.  

         

Alternatively you can downgrade your Office to a previous version like
in this example to 1805:

1.  Use shortcut **Win + R**, type **cmd** and click **OK** to start the
    command line
2.  Change to directory where Office is installed by typing: **cd
    %programfiles%\\Common Files\\Microsoft Shared\\ClickToRun **
3.  Now execute command to downgrade Microsoft Office to the last
    version that is known to work: **officec2rclient.exe /update user
    updatetoversion=16.0.9330.2124 **
4.  process4.biz and other Office Add-INs are now working again. 
5.  Do not forget to **turn off** automatic Office Updates.  
      

 


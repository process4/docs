- [Introductory Remarks](#introductory-remarks)
- [Hardware Requirements](#hardware-requirements)
- [Software Requirements](#software-requirements)
  - [Microsoft Windows](#microsoft-windows)   
  - [Visio](#visio)
  - [Microsoft Office](#microsoft-office)
  - [Microsoft SQL Server](#microsoft-sql-server)
  - [.NET Framework](#net-framework)
  - [Browser](#browser)
  - [Sharepoint](#sharepoint)
- [ServerLicense](#serverlicense)


### Introductory Remarks

-   process4.biz installation files can be downloaded on the main page https://registration.process4.biz. Once you register, you will see downloads area.
-   For the installation of process4.biz and to change certain installation parameters (when using the \*.msi setup) Windows administrator privileges are required.
-   For the daily work with the p4b-Client normal Windows user rights are required.
-   The installation always includes all extension modules
-   Reference models are supplied by us either as separate databases, or
    are installed by our consulting partners in your existing
    database(s) on request.
-   Valid license keys are prolonged after the payment has been received.
-   The client automatically refreshes its license on each login attempt. You do not need to enter any license keys.
-   Important: all clients must be running the same process4.biz
    version. Installation of mixed process4.biz versions is not
    supported. Process4.biz client and process4.biz server must have the
    same version installed.


### Hardware Requirements

The process4.biz client computer must meet the following minimum
requirements:

-   2-GHz dual-core processor (x86 or x64)
-   2 GB RAM
-   250 MB free hard disk space
-   Monitor with a resolution of 1280 x 1024 (or better)

<div class="info">
  In general, the process4.biz Client demands the hardware requirements requested by the respective Microsoft Windows and Office releases in order to function properly. Please refer to the websites of Microsoft for the respective hardware requirements of the Microsoft products Visio and SQL Server.
  </div>
         
A database storage capacity of approx. 250 KB is recommended per diagram, if you want to store the diagrams via BLOB (Binary Large Objects) directly in the database, or approx. 200 KB per diagram, if you want to save them on a file server instead. The database itself will
occupy only about 500 MB even in the case of large installations and when storing the diagrams on the file server.

If your diagram or database needs more capacity than the sizes mentioned here, you are kindly requested to contact us as optimisation options for your diagrams are definitely available here, under Shapes, Stencils and Templates, or in the database for the underlying link technologies and they are worth-trying.

### Software Requirements

Process4.biz is not compatible with some other Visio add-ins, which can under seldom conditions lead to Visio crashes. If add-ins installed on your PC might cause problems, you will be notified with a warning message.

Information on how to disable Visio add-ins can be found here: [View, manage, and install add-ins in Office programs](https://support.office.com/en-us/article/View-manage-and-install-add-ins-in-Office-programs-16278816-1948-4028-91E5-76DCA5380F8D)

The use of most Process4.biz extension modules requires that you meet the software requirements described below. Microsoft software like SQL Server, Visio, or SharePoint Server and others can be purchased from us together with process4.biz at an especially low price, as the process4.biz GmbH is not only a "Microsoft Certified Partner" but also a "Microsoft Royalty Partner" too. This special contract allows us to sell the Microsoft software bundled with our software and on behalf of Microsoft license papers, and issue your license key. The rates we offer for these special Royalty licenses are almost always cheaper than the purchase prices of the largest international corporations or of the public domain. Contact us to obtain an offer.

#### Microsoft Windows

The following Microsoft Windows Server versions are required/supported:

-    Windows Server 2012 or 2016

and the following desktop versions are required/supported:

-    Windows 8.1 and Windows 10

Only __Professional Editions__ of Microsoft Windows are supported.

Installations using Windows Terminal Server, or Citrix, or other remote access technologies are technically possible, but are not supported by us and require their own licenses (process4.biz Database license). Installations in virtual machines based on a Microsoft OS put on a computer with Apple OS are not possible.

#### Visio

The following Visio versions are supported:

| Visio | Version/Build number |
| ------------- |-------------|
| 2016 Click-to-Run | version 1808 build 10730.20280 |
| 2016 | build 16.0.4266.1001 |
| 2019 Click-to-Run | version 1808 build 10341.20010 |
| 2019 | version 1808 build 10340.20017 |

<div class="info">
All clients running process4.biz must have the **same** Visio version installed. Installations of mixed versions are not supported and not recommended. Different Visio Editions Professional/Standard) can be installed and are supported.
</div>

#### Microsoft Office

The following MS Office versions are supported:
- 2013
- 2016
 
Additionally 2010 version was tested, but it is not officially supported.

#### Microsoft SQL Server 

The following MS SQL Server versions are supported: 
- 2016
- 2017
 
Additionaly, 2012 and 2014 versions were tested and work fine, but these versions are not officially supported.

<div class="warning">
Before you install new service packs for Windows or especially the SQL Server, it is recommended that you consult our helpdesk on whether they are supported by process4.biz.
</div>

#### .NET Framework

The following .Net components and versions are supported: 
- .Net Core 2.1
- .Net Framework 4.6.1
- .Net Framework 4.5.2.

#### Internet Information Services (IIS)

If you are planning to use ApprovalHistory extension, make sure that the __IIS Metabase and IIS 6 configuration compatibility__ feature is installed. 

![image](//images.ctfassets.net/6mz8d8cle1nl/3XT9M0zMT6nR7AulX3plIW/26825a9a028fe9d79f1b62d5feb1137f/image.png)

#### Browser

The following browsers are supported for publications created with the new Model Publisher: 
- Google Chrome (61.0.3163.100)
- Firefox (65.0.2)

Publications created with Web Publisher support only IE11.

#### SharePoint

The following Microsoft SharePoint versions are supported when using the optional process4.biz extension module SharePointSync:
- Microsoft SharePoint 2013
- Microsoft SharePoint 2016
- Microsoft SharePoint Online


### ServerLicense

ServerLicense (SL) does not have any special software requirements, except .Net Framework that is listed above.
<hr style="padding-top:2rem" />
<a href="https://github.com/process4/docs/issues" target="_blank" class="bgw btn btn-primary btn-lg shadow-sm">Report an issue</a>
<a href="https://github.com/process4/docs" target="_blank" class="bgw btn btn-primary btn-lg shadow-sm" style="margin-left:10px;">View source code</a>
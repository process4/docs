- [Introductory Remarks](#introductory-remarks)
- [System & Hardware Requirements](#system--hardware-requirements)
  - [The matching operating system](#the-matching-operating-system)   
  - [The correct SQL Server for the process4.biz database(s)](#the-correct-sql-server-for-the-process4biz-databases)
  - [.NET Framework](#net-framework)
  - [Browser](#browser)
  - [Microsoft Visio and Office](#microsoft-visio-and-office)
    - [Upgrade from Visio 2007 to Visio 2013](#upgrade-from-visio-2007-to-visio-2013)



### Introductory Remarks

-   For the installation of process4.biz and to change
    certain installation parameters (when using the \*.msi setup)
    Windows administrator privileges are required.
-   For the daily work with the p4b-Client normal Windows user rights
    are required.
-   The installation always includes all extension modules, except for
    the Data Synchronizer and for the EPS (Enterprise Portal Server)
    which require separate installation.
-   Reference models are supplied by us either as separate databases, or
    are installed by our consulting partners in your existing
    database(s) on request.
-   Valid license keys are always issued only after receipt of payment
    and their expiry date is the day when maintenance is payable.
-   The license key will be sent by mail or handed over personally or
    can be retrieved via Web (for versions below 7.0.1). Or license keys
    can be managed on the registration.process4.biz portal (for versions
    7.0.1 and above). 
-   Additional modules from other suppliers, require a separate
    installation and licensing by the third party, and in some cases by
    process4.biz as well.
-   Important: all clients must be running the same process4.biz
    version. Installation of mixed process4.biz versions is not
    supported. Process4.biz client and process4.biz server must have the
    same version installed.


### System & Hardware Requirements

The process4.biz client computer must meet the following minimum
requirements:

-   2-GHz dual-core processor (x86 or x64)
-   Microsoft Windows 8 or Windows 10 (x86 or x64)
-   2 GB RAM
-   250 MB free hard disk space
-   Monitor with a resolution of 1280 x 1024 (or better)


<div class="info">
  <strong>Info!</strong> In general, the process4.biz Client demands the hardware requirements
requested by the respective Microsoft Windows and Office releases in
order to function properly.Please refer to the websites of Microsoft for
the respective hardware requirements of the Microsoft products Visio and
SQL Server.
  </div>
      

         
A database storage capacity of approx. 250 KB is recommended per
diagram, if you want to store the diagrams via BLOB (Binary Large
Objects) directly in the database, or approx. 200 KB per diagram, if you
want to save them on a file server instead. The database itself will
occupy only about 500 MB even in the case of large installations and
when storing the diagrams on the file server.

If your diagram or database needs more capacity than the sizes mentioned
here, you are kindly requested to contact us as optimisation options for
your diagrams are definitely available here, under Shapes, Stencils and
Templates, or in the database for the underlying link technologies and
they are worth-trying.

#### The matching operating system

Process4.biz runs on the server operating systems with the corresponding
Service Packs

-    Windows Server 2014 or 2016

and on desktop operating systems of the Professional Editions

-    Windows 8 or Windows 10

We do not recommend the use of Windows Home or Media Center editions
(Windows 8, Windows 10), as, among other things, the necessary web
functionalities are not supported and several files are missing. Neither
do we recommend the use of Windows XP Professional, as they no longer
meet up to the modern requirements of our software. Therefore we cannot
offer support for these installations, even if it is highly likely that
they run flawlessly. When using Windows 8 and 10, you need to make sure
that you have installed the free IIS (Internet Information Services), if
you would like to make use of the Web publication functionalities of
process4.biz on the local computer with web server too. If the web
server runs on LAN, an installation of the IIS on your computer is not
necessary.

Installations using Windows Terminal Server, or Citrix, or other remote
access technologies are technically possible, but are not supported by
us and require their own licenses (process4.biz Concurrent Server
license). Installations in virtual machines based on a Microsoft OS put
on a computer with Apple OS are not possible.

#### The correct SQL Server for the process4.biz database(s)

The process4.biz databases which you use as Repository in combination
with the process4.biz client (always installed according to Visio 2013
\[32-bit or 64-bit\] or 2016 \[32-bit or 64-bit\]), run only on the SQL
Server 2014 and 2016 by Microsoft with their respective service packs.
Databases created on the SQL Server 2012 and restored and backed up,
cannot be restored to an SQL Server 2008. Database servers by other
manufacturers (eg.: Oracle, MySQL, or SQL2000) are not supported.

Please note that the installation of a SQL server in a LAN (eg. Standard
Edition) on a server operating system requires the use of other SQL
editions than the ones used for the installation of SQL Server on a
desktop operating system (eg. Standard "Personal" edition).

In addition there are demo installations that should be uninstalled
after the demo period, and even free demo SQL Server editions for
desktop (eg. SQL 2008 Express). Please ask your SQL administrator for
the different or necessary SQL Server Editions available in your
enterprise and ensure that you have the appropriate access to the SQL
Server with your p4b installation (client).

<div class="warning">
Before you install new service packs for Windows or especially the SQL
Server, it is recommended that you consult our helpdesk on whether they
are supported by process4.biz.
</div>

      
 

#### .NET Framework

The client as well as the EPS require .NET Framework 4.6.2 or higher.

#### Browser

As browser we recommend that you use at least the IE9 for the best
representation of the models on the Web following the publication via
the WebPublisher or via the EPS . Other browsers and other releases of
Internet Explorer may allow an almost flawless representation, but we do
not support them (e.g. compatibility-related support incidents).

#### Microsoft Visio and Office

process4.biz requires the installation of Microsoft Visio 2013 (32 or 64
bit) or Visio 2016 (32 or 64 bit) in Standard or Professional Edition,
including the latest service packs on the Client PC. The latest Visio
service packs should be installed. As of process4.biz Version 7.0.1 the
365 Versions of Visio and Office are supported.



<div class="info">
  <strong>Info!</strong>
All clients running process4.biz must have the **same** Visio version
installed (e.g. all clients running Visio 2013 or all clients running
Visio 2016). Installations of mixed versions are not supported and not
recommended. Different Visio Editions (Professional/Standard) can be
installed and are supported.
</div>




##### Upgrade from Visio 2007 to Visio 2013

Should you upgrade from Visio 2007 to the substantially more powerful
Visio 2013 which we recommend, then first uninstall process4.biz
(definitely back up all databases, stencils, templates and diagrams) and
then also uninstall the Visio 2007. Only then you can first install
Visio 2013 and then reinstall process4.biz. Please go analog when
upgrading from Visio 2007 to 2013 or 2016 and take into account the respective installation requirements.

The new features for the connection of external data (Excel, etc.) and
data graphics to the Visio shapes are available only in the Visio Professional 2013 or 2016.
Therefore, you can not use the Standard Editions of Visio 2013 to fully
benefit from the specially developed extensions of process4.biz. However
it is possible that many users use process4.biz with Visio Standard 2013
and that few others use Visio Professional 2013. In this case, the few
Visio Professional 2013 users can edit these advanced features (external
data, data graphics), make them available to the other users and ask
them to inspect them.


Compare Visio editions on the Microsoft Web site (eg.: Visio 
2013-2016): <https://products.office.com/en-us/visio/microsoft-visio-2013-visio-version-comparison>




Process4.biz is not compatible with some other Visio add-ins, which can
under seldom conditions lead to Visio crashes. If add-ins installed on
your PC might cause problems, you will be notified with a warning
message.

Information on how to disable Visio add-ins can be found
here: [View, manage, and install add-ins in Office programs](https://support.office.com/en-us/article/View-manage-and-install-add-ins-in-Office-programs-16278816-1948-4028-91E5-76DCA5380F8D)

The use of most Process4.biz extension modules requires that you have
Microsoft Office 2013 or 2016 installed. Microsoft software like SQL
Server, Visio, or SharePoint Server and others can be purchased from us
together with process4.biz at an especially low price, as the
process4.biz GmbH is not only a "Microsoft Certified Partner" but also a
"Microsoft Royalty Partner" too. This special contract allows us to sell
the Microsoft software bundled with our software and on behalf of
Microsoft license papers, and issue your license key. The rates we offer
for these special Royalty licenses are almost always cheaper than the
purchase prices of the largest international corporations or of the
public domain. Contact us to obtain an offer.


[1]: #InstallationRequirements-.NETFramework
[2]: #InstallationRequirements-Browser
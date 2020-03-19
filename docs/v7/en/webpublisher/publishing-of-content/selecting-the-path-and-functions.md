-   [Publication name](#publication-name)
-   [Website path](#website-path)
-   [Website address to be
    opened](#website-address-to-be-opened)
-   [Renewed Creation of Site Files](#renewed-creation-of-site-files)
-   [Site Language](#site-language)
-   [Site Script Type](#site-script-type)
-   [Site Settings](#site-settings)
    -   [Site Color Scheme](#site-color-scheme)
    -   [Tooltips Fade Time](#tooltips-fade-time)
    -   [Web Links](#web-links)
-   [Setup IIS web site at target location](#setup-iis-web-site-at-target-location)
    -   [Site name](#site-name)
    -   [Configure](#configure)


![](//images.ctfassets.net/utx1h0gfm1om/3F9LxbT8MMgmY0kG6Eio2e/483a2d56936348ae0362fd85045e38fb/328846.png)

### Publication name

Enter the name of your publication sets that appears as the name of the
model in the Web Portal. All settings that are defined in the next steps
will be stored in this set and can be reused. You can open and edit
properties from the set, by clicking on properties from the set. Already
created WebPublisher sets can be managed in p4b Modeller under
permissions for sets. If a user does not have "create" or modification
permissions for a set, s/he can create or modify publications, but
cannot save this publication set in the database. You can save the set
before completing the wizard, by clicking save.

### Website path

Enter the path (incl. web site or folder names) to save content
published as a web site (HTML and SVG files). Click search if you want
to define a path different from the proposed one. You can specify at
this point any file folder as a website path, provided you select HTML
as the Site Script Type in the next dialog box. Your published model can
then be opened without an installed web server via a browser (via the
file "index.htm") and can be burnt on a CD-ROM or DVD.

### Website address to be opened

Here you can define which web address should be opened after running the
Wizard WebPublisher. If the site was created on the IIS, you can change
the address by using the Edit button, so that the correct website opens
always automatically after running the wizard WebPublisher.

### Renewed Creation of Site Files

Enable this option if you want to define the global settings (language,
color theme, script type) for the website. Please note that these are
shared files used by all models of a site, which must therefore usually
be created only once. This option must be selected to create a new
website. In renewed republishing of existing publications, these details
are unnecessary.

### Site Language

You can select one of the available languages (German, English or
French) for the portal. All menus and commands will be displayed in this
language. You choose the model content language in the next dialog.

### Site Script Type

Here you can select the script language to be used: ideally ASP or
ASP.NET for IIS or PHP for the Apache webserver. For PHP, the necessary
adjustments should have been performed (see chapter PHP configuration of
the Web Publisher).   
You can publish your content as pure HTML files without publishing
server-site integration of a script language, if you choose the option
HTML under Site Script Type. In this case, you do not need an installed
IIS configuration on the target computer for your publication.

<div class="info">
Please note:

The search function in the portal cannot be used with pure HTML
publications. In addition, the option "Generate a load-delay optimized
tree" cannot be activated in one of the following dialog boxes of the
WebPublisher.
</div>


### Site Settings

#### Site Color Scheme

Here you can select one of the available color themes in the portal (you
can define your own color themes as well as adapt existing color themes;
see [creating a color theme](creating-a-color-theme) and [adjusting the
color theme](adjusting-the-color-theme)).

![](//images.ctfassets.net/utx1h0gfm1om/4Ypx8sAzFYI860WQseEsIO/fe40c54d42e9cbe8f69d0237736d0443/328848.png)


#### Tooltips Fade Time

Here you can change the fade time of the tooltips of object
descriptions.

#### Web Links

You can customise Web-links for the following buttons in the web portal:
Home, Contact, Help, as well as the e-mail address for the feedback
button. You can also remove the buttons that you do not need, by
unchecking the respective box.

### Setup IIS web site at target location

If you choose this option, (depending on the choice of name in the field
below) a site is either created locally (= on the localhost on your PC)
in IIS, or an already existing site with the same name is restored. For
the publication of the portal for a web server on the LAN, the box
should not be ticked (see section IIS: Setting up a local website).

#### Site name

Enter the desired name for the website, with which you can then open the
portal, for example locally at: http://localhost/\[Name of the page\],
on your computer.

#### Configure

If no IIS has been installed on your computer, this button is displayed
and you should first configure IIS and only then enable the option Setup
IIS website at target location. The "Configure" button is also
displayed, when the IIS has already been installed but some IIS
components are still missing. If you click on it, a message appears
informing you which components are now being installed automatically.
When the installation is complete, you can open the log file, by
clicking Show the installation log of the IIS. If you select ASP.NET as
Site Script Type, this technology should be configured correctly and
allowed in IIS. Otherwise, the configure button appears. Click configure
and all settings are performed automatically.

<hr style="padding-top:2rem" />
<a href="https://github.com/process4/docs/issues" target="_blank" class="bgw btn btn-primary btn-lg shadow-sm">Report an issue</a>
<a href="https://github.com/process4/docs" target="_blank" class="bgw btn btn-primary btn-lg shadow-sm" style="margin-left:10px;">View source code</a>
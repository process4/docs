- [V.8.0.8.37055 (11.09.2020)](#v808)
- [V.8.0.7.36862 (16.07.2020)](#v807)
- [V.8.0.6.36557 (27.04.2020)](#v806)
- [V.8.0.5.36272 (13.03.2020)](#v805)
- [V.8.0.4.36108 (20.02.2020)](#v804)
- [V.8.0.3.36003 (07.02.2020)](#v803)
- [V.8.0.2.35878 (23.01.2020)](#v802)
- [V.8.0.1.35746 (11.12.2019)](#v801)
- [V.8.0.0.35217 (16.09.2019)](#v800)
- [V.7.1.6.35216 (13.09.2019)](#v716)
- [V.7.1.5.34862 (11.07.2019)](#v715)
- [V.7.1.4.34379 (27.03.2019)](#v714)
- [V.7.1.3.33675 (19.11.2018)](#v713)
- [V.7.1.2.33586 (24.10.2018)](#v712)
- [V.7.1.1.33332 (01.08.2018)](#v711)
- [V.7.1.0.33187 (20.06.2018)](#v710)
- [V.7.0.8.32931 (14.06.2018)](#v708)
- [V.7.0.7.32716 (03.06.2018)](#v707)

## Release Notes

### V.8.0.8.37055 (11.09.2020) :id=v808

- ApprovalHistory: a diagram can be opened via direct link

### V.8.0.7.36862 (16.07.2020) :id=v807

- Fixed: Queries in QueryBuilder were incorrectly shown. Note: queries created in v8.0.6 must be recreated in v8.0.7
- Fixed: Labels in WebPublish Wizard worked vice versa
- Improved: ApprovalHistory can now open links with "current date" chosen by default

### V.8.0.6.36557 (27.04.2020) :id=v806

- Creating an ApprovalHistory snapshot no longer requires user to belong to administrators group
- Added Tags property to QueryBuilder (provided Tags is enabled for system classes) 

### V.8.0.5.36272 (13.03.2020) :id=v805

- Fixed: EULA acceptance algorithm sometimes worked incorrectly on some systems

### V.8.0.4.36108 (20.02.2020) :id=v804

- Fixed: Visio crashes during diagram update
- Improved: parsing of Smart-Tags in diagrams

### V.8.0.3.36003 (07.02.2020) :id=v803

- Fixed: SharePoint synchronization of links between files and objects
- Fixed: SharePoint synchronization could lead to Visio crash under certain conditions
- Fixed: bug with diagram template update
- Improved: ApprovalHistory configuration
- Improved: parsing grouped shapes to svg

### V.8.0.2.35878 (23.01.2020) :id=v802

- Performance of ApprovalWizard improved drastically
- Database no longer gets locked during approval process, locking mechanis improved
- It is now possible to copy existing publication in ModelPublisher (e.g. to change path)
- Linking objects to one another no longer triggers approval management dialog
- Files can now be copied to a separate folder in ModelPublisher publication
- Improved handling different types of files and links in ModelPublisher (e.g. NAV links)
- Removed warnings for old browsers from log files
- Fixed: renaming diagrams with F2 did not trigger approval management process

### V.8.0.1.35746 (11.12.2019) :id=v801

- DiagramUpdate wizard shows an appropriate warning when Visio Professional edition is required for an update
- WordReporter can now handle duplicate names in the diagram tree
- Extension windows remember their size
- Improved displaying text in SVG in ModelPublisher
- Client updates license information on every login, provided internet connection is available
- Improved client handling offline days 
- WebPublisher "incremental" and "republish the whole model" options work as expected
- Removed deprecated extensions from the setup
- ModelPublisher can update site settings without republishing the model
- Fixed a bug with PDF export in portrait mode
- Improved performace of DocumentComposer when all classes are equipped with Geometry
- Improved handling of NAV links in ModelPublisher
- Added ability to add special properties to multiple classes
- Removed checking DbConfig paths from client side

### V.8.0.0.35217 (16.09.2019) :id=v800

#### Key Features

- Model Publisher implemented as a new and revised way to publish the model for browser-based viewing
- Implemented an Approval History extension that works based on "Database" approval, i.e. "track every change". It provides browser-based insight into the version history generated as a result of the approval workflow
- Files node added to the WebPublication
- Added PDF export to WordReporter and PowerPoint export
- (Batch- ) PDF export for WordReporter was implemented
- Added File Objects to ImportExportManager. They can now be imported/exported/linked via Excel.
- "Tags" added to ImportExportManager
- Implemented Tags for Files
- Implemented links between File Objects, thereby allowing for (linked file) hierarchy creation and dependencies
- Implemented "lazy object locking" functionality that improves object locking behaviour in multi-user scenarios
- Implemented "Light" Approval Management: it's diagram-based and works in the same way as it worked in Release 6.2 and before
- Implemented SharePoint synchronization for LES properties of links between files
- Implemented SharePoint synchronization for Tags
- Implemented "one click" functionality for diagram-based DocumentComposer reports
- Now it is possible to save reports of the WordReporter, RACIReports, SureStep, IEM extensions directly to the database
- Improved handling of parallel units in ImportExportManager
- Improved quality of exported images in Word, PPT and PDF documents.
- Improved set handling performance for all extensions

#### Content

- ISO 9001 example content added to Demo Database
- Updated the Demo Database with new content and examples

#### DbConfig

- Improved the way that DbConfig validates SQL server file paths
- Fixed an issue with database connections initiated by DbConfig

#### DocumentComposer

- Option "Table of illustrations" added to DocumentComposer (requires that <P4B_TABLE_ILLUSTRATIONS> is found in the Word template)
- Fixed an issue regarding object sorting in reports
- Improved DocumentComposer performance
- Improved set handling performance for DocumentComposer
- Improved handling for diagrams with multiple pages/sheets in DocumentComposer
- Fixed an issue related to overwriting names of file objects stored in the database created by DocumentComposer
- Fixed an issue related to table display in DocumentComposer

#### GUI

- Fixed a GUI issue related to the process4.biz tab in Visio
- Fixed a translation issue related to object links created by Shift+Drag&Drop
- Incorrectly displayed inheritance markers on icons in the Tags window have been removed
- Fixed a GUI issue regarding the QueryBuilder button - it will now be hidden is the user doesn't have the necessary permissions to use it
- Fixed a GUI issue regarding administrative wizards -  they will now be hidden for non-admin users
- Fixed a GUI issue in the "Paste special" window
- Fixed an issue regarding Unit visibility
- Fixed a GUI issue regarding approval options and SharePointSync
- Fixed a GUI issue that could occur in the permission management window
- Fixed a GUI issue in DbConfig

#### ImportExportManager

- Fixed an issue with imported diagram tree links
- Fixed an issue related to the Excel import and approval management
- Fixed an issue related to the Excel import and shape-specific data

#### License

- User will be informed if the version of the License Server Service differs from the process4.biz version
- Improved License Server auto discovery
- Offline code activiation added for the Server License Service
- Improved the logging on the client side when using Server License
- Improved the way the client checks the time when connected to the License Server
- SERVER\ONLINE license services URLs will be saved/restored from previous installations
- Created an installation parameter for the License Server URL
- "Refresh license" functionality added to the License activation window.
- Fixed an issue related to changing settings in the Server License Service
- Improved an error message related to the Server License Service
- Fixed an issue during installation: if Server license is running, a warning message to stop it was added
- Selection of license type added to the Silent mode install generation page
- Fixed an issue with the license expiration warning for checked-out licenses
- Improved detection in case of multiple instances of the License Server running on the same network

#### Model

- File Objects were added to the Roles and Permissions management
- Removed the warning about diagrams being larger than A4, as it is no longer relevant
- Improved permission handling for Units
- Improved handling of DateTime property values when displayed as Shape Data on Diagrams
- The diagram storage wizard doesn't required Windows/AD admin rights anymore. P4b-model admin rights are still required to run the wizard.
- Improved the security for changing Administrator password
- Button “New” added to the Linked File Selector window
- Implemented auto-fit for the object explorer column width
- Made the data synchronization of the "Name" with the Visio cell "Label" optional
- “Manage tags…” functionality has been added to the Property sheet on the Tags tab
- Implemented copy, paste etc. operations for Files; "Special copy to/move to" options have not been added yet.
- Fixed an issue regarding permission handling and object display in the Repository
- Fixed a Visio crash regarding permission handling
- Fixed an issue regarding the Approval History permission
- Fixed an issue regarding permission handling and object display on diagrams
- Fixed an issue related to copying/pasting objects and approval management
- Fixed an issue related to object links and permissions
- Improved database connection handling during converting of diagram format from vsd into vsdx
- Improved permission handling when importing diagrams
- Fixed some inconsistencies related to user permissions
- Fixed an error when saving diagrams with multiple pages/sheets
- Fixed a Visio crash regarding pool/lane shapes
- Fixed an issue related to the "Changed at" property of diagrams
- Fixed Visio crash that could happen when updating the diagram storage
- Fixed permissions for file objects
- Fixed a possible Visio crash when managing templates
- Fixed an issue regarding file links not updating until user logout
- Fixed an issue regarding highlight rules
- Fixed an issue regarding the option "Re-use objects where possible" in the "Paste special" dialog
- Fixed an issue regarding the property "Template path" - it's not multilingual anymore
- Fixed an issue regarding copy/paste operations across parallel units
- Fixed an issue related to property DbName
- Fixed an issue related to File Object maintenance
- Fixed an issue regarding copy/paste operations: the object name will now be updated correctly in all languages
- A Visio VBA script to fix ghost shapes is available through helpdesk@process4.biz now

#### QueryBuilder

- Added the missing "Permissions" tab to Query Classes
- Improved permission handling in QueryBuilder
- Improved queries with source type "Generic File": all standard options have been added
- Fixed an issue regarding permission handling in QueryBuilder
- Fixed an issue regarding permission handling for Query Classes
- Fixed an issue regarding Read Only permission handling in QueryBuilder
- Fixed an issue regarding exported Excel files generated by QueryBuilder
- Fixed an issue with missing copy/move options for query results

#### RACI Report

- "Second sheet in RACI report renamed to KPI which contains the following columns know from the demo database: 
    - objects of class ""KPI"" 
    - object of the class ""Activity"" linked to these objects 
    - diagram name where ""Activity"" objects are used on 
    - value of property ""Compliance status"""
- Fixed a class selection error in the RACI reprot extension

#### Setup

- After Visio update 16.0.10228.20080 VBS formulas stopped to working. We added a fix for that to our setup that will be applied automatically if necessary
- Improved the setup: default and customized installation options for implemented
- Improved the setup wizard's window size
- Improved the setup
- Online License URL won't be removed by Windows installer "Repair" operations anymore
- Fixed a possible setup failure when DbConfig path points to a network resource

#### SharePoint

- Improved SharePointSync for Linked Element Selector properties
- Improved SharePointSync error display
- Improved logging for SharePointSync operations
- Added a warning in case SharePointSync is set up in a way that would use another Windows/AD user account than the one Visio is associated with
- Only users with Administration permissions can Configure the SharePoint Synchronization now
- Improved multi-language synchronization from SharePoint to the model database
- Fixed an error reg. SharePointSync and "Formula" Type properties
- Fixed an issue in SharePointSync related to the "Description" property
- Fixed an issue in SharePointSync related to diagram properties
- Fixed an issue regarding the direction property in SharePointSync rules
- Fixed an issue regarding SharePoint versioning and one directional SP->p4b synchronization
- Fixed an inconsistency in SharePoint synchronization that could occur for single diagrams when opening/saving them
- Fixed an issue that could cause the direction of SharePointSync rules to change without any user input
- Fixed an issue regarding the respective site's timezone that could occur in SharePointSync

#### Versioning

- Fixed an issue regarding missing diagrams in Version Delta Report

#### WebPublisher

- Fixed an issue where WebPublisher would publish diagrams that hadn't been changed since the last publication
- Improved WebPublisher: added a checkbox to generate a more detailed publication log
- Updated all icons used in WebPublisher's smart-tags and improved their quality.
- Improved linked content (documents, etc.) handling in WebPublisher
- The check box "Copy all attachment FROM THE DATABASE to the target location" in WebPublisher extension was renamed to “Show attached files in the smart-tag of object”
- Fixed an issue regarding the logging in WebPublisher
- Fixed an issue regarding paths to linked files in WebPublisher
- Improved File object handling in WebPublisher: Files Units outside the publication's scope but linked to published objects will not appear in the publication anymore
- Fixed an issue in diagram approval handling related to WebPublisher
- Fixed an issue with the "Keep old if not approved" option in WebPublisher
- Fixed an issue regarding the "Model Language" option in WebPublisher not having any effect
- Fixed an issue with linked object sorting in WebPublisher

#### Wizards

- Improved permission handling for Wizards
- Before extensions start, Users will now be informed about open diagrams which could lead to issues during report generation
- Wizard windows will now remember their size (if it was changed by the user)
- Improved performance for WebPublisher and ImportExportManager
- Hyperlinks can be exported as clickable links in the Word/Excel reports now
- Added a warning when creating a set in an extension while lacking permissions to save it afterwards
- Improved the "Save set" button: it will now be disabled in all extensions if there were no modifications since the set was saved last
- Fixed an issue in WordReporter and ImportExportManager that could occur when sorting content based on a DateTime value

#### WordReporter

- Fixed an issue with set visibility in WordReporter

#### Other

- Starting process4.biz will check whether or not VBScript works in order to prevent unintended behaviour
- Fixed an issue in DbUpgradeAll; it now takes the path to dbconfig.xml as a parameter
- Fixed an issue with the QlikView connector

### V.7.1.6.35216 (13.09.2019) :id=v716

 - Fixed handling of boolean values in QueryBuilder 
 - Fixed several WordReporter bugs
 - Fixed sorting of entities in WebPublisher and WordReporter extensions (objects/links are now always sorted alphabetically)
 - Improved synchronization with SharePoint 

### V.7.1.5.34862 (11.07.2019) :id=v715

- Fixed a possible error in DbUpgrade (when upgrading to DB-version 7.0.9.1)
- Improved batch diagram operations (i.e. change of diagram storage, diagram update)
- Fixed a possible crash of WebPublisher
- Fixed a possible error at the end of report generation in WordReporter
- Fixed a possible inconsistency regarding the Word template used by WordReporter

### V.7.1.4.34379 (27.03.2019) :id=v714

- Improved permission management for sets in all extensions
- Cached license information will now be removed when restoring a database using DbConfig

### V.7.1.3.33675 (19.11.2018) :id=v713

- Improved unit locking for designers
- Changelog publishing system introduced

### V.7.1.2.33586 (24.10.2018) :id=v712

- Improved handling of diagram pictures that were added to existing DocumentComposer set
- Links to files are now shown only if the file is in the unit selected to be published
- Converting diagrams format does not lock the database which leads to improved format conversion in big databases

### V.7.1.1.33332 (01.08.2018) :id=v711

- Implemented runtime check for required Visio component: VBScript Engine

### V.7.1.0.33187 (20.06.2018) :id=v710

- Everly line in table of contents of DocumentComposer generated report is now clickable
- Improved handling of unmodified diagrams in WebPublisher
- Button "Approve" is no longer visible if Aproval Management is deactivated

### V.7.0.8.32931 (14.06.2018) :id=v708

- Meta information in installer file updated

### V.7.0.7.32716 (03.06.2018) :id=v707

 - Improved SharePoint synchronization behavior
 - Option to "always generate log file" added to WebPublisher extension
<hr style="padding-top:2rem" />
<a href="https://github.com/process4/docs/issues" target="_blank" class="bgw btn btn-primary btn-lg shadow-sm">Report an issue</a>
<a href="https://github.com/process4/docs" target="_blank" class="bgw btn btn-primary btn-lg shadow-sm" style="margin-left:10px;">View source code</a>
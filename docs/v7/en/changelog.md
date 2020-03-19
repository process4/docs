
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
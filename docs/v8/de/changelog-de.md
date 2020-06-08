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

## Changelog

### V.8.0.6.36557 (27.04.2020) :id=v806

- Zum Erstellen eines ApprovalHistory-Snapshots ist es nicht mehr erforderlich, dass der Benutzer zur Gruppe der Administratoren gehört
- Tags-Propery zu QueryBuilder hinzugefügt (vorausgesetzt, Tags sind für Systemklassen aktiviert) 

### V.8.0.5.36272 (13.03.2020) :id=v805

- Fixed: EULA-Akzeptanz-Algorithmus funktionierte manchmal auf einigen Systemen fehlerhaft


### V.8.0.4.36108 (20.02.2020) :id=v804

- Fixed: Visio stürzt während der Diagramm-Aktualisierung unter Umständen ab
- Improved: Parsen von Smart-Tags in Diagrammen


### V.8.0.3.36003 (07.02.2020) :id=v803

- Fixed: SharePoint-Synchronisierung von Verknüpfungen zwischen Dateien und Objekten
- Fixed: Die SharePoint-Synchronisierung konnte unter bestimmten Bedingungen zum Absturz von Visio führen
- Fixed: Fehler bei der Aktualisierung der Diagrammvorlage
- Verbessert: ApprovalHistory-Konfiguration
- Verbessert: Parsen gruppierter Formen nach svg

### V.8.0.2.35878 (23.01.2020) :id=v802

- Performance vom ApprovalWizard drastisch verbessert
- Datenbank wird während des Genehmigungsprozesses nicht mehr gesperrt, Sperrmechanismus verbessert
- Es ist jetzt möglich, eine bestehende Publikation in ModelPublisher zu kopieren (z.B. um den Pfad zu ändern)
- Verknüpfen von Objekten miteinander löst keinen Dialog für die Genehmigungsmanagement mehr aus.
- Dateien können jetzt in einen separaten Ordner in der ModelPublisher-Publikation kopiert werden
- Verbesserte Handhabung verschiedener Dateitypen bzw. Links in ModelPublisher (z.B. NAV-Links)
- Warnungen für alte Browser aus den Log-Dateien entfernt
- Behoben: Das Umbenennen von Diagrammen mit F2 löste keinen Genehmigungsmanagementprozess aus.

### V.8.0.1.35746 (11.12.2019) :id=v801

- Der DiagramUpdate-Wizard zeigt eine entsprechende Warnung an, wenn die Visio Professional Edition für ein Update erforderlich ist
- WordReporter kann nun doppelte Namen im Diagrammbaum verarbeiten.
- Erweiterungsfenster merken sich ihre Größe
- Verbesserte Anzeige von Text in SVG in ModelPublisher
- Der Client aktualisiert die Lizenzinformationen bei jedem Login, sofern eine Internetverbindung verfügbar ist.
- Verbesserte Behandlung von Offline-Tagen 
- Die Optionen WebPublisher "inkrementell" und "das gesamte Modell neu veröffentlichen" funktionieren wie beschrieben
- Veraltete Erweiterungen aus dem Setup entfernt
- ModelPublisher kann die Seiteneinstellungen aktualisieren, ohne das Modell neu zu veröffentlichen
- Fehler beim PDF-Export im Hochformat behoben
- Verbesserte Performanz von DocumentComposer, wenn alle Klassen mit Geometrie ausgestattet sind
- Verbesserte Behandlung von NAV-Links in ModelPublisher
- Es wurde die Möglichkeit zugefügt, spezielle Eigenschaften zu mehreren Klassen hinzuzufügen
- Das Überprüfen von DbConfig-Pfaden auf der Clientseite wurde entfernt

### V.8.0.0.35217 (16.09.2019) :id=v800

#### Key Features

- Der "Model Publisher" wurde als neuer und überarbeiteter Weg, um das Modell für die browserbasierte Anzeige zu veröffentlichen implementiert
- Eine "Approval History" Erweiterung wurde geschaffen, die basierend auf dem „Datenbank-basierten“ Genehmigungsmgt. arbeitet. Sie bietet Browser-basierten Einblick in die Genehmigungs-Historie, die (optional) im Zuge des Genehmigungs-Workflows erzeugt wird
- Datei-Knoten in der Web-Publikation hinzugefügt
- PDF Export wurde zum WordReporter und Powerpoint-Export hinzugefügt
- (Batch-) PDF-Export für WordReporter wurde implementiert
- Datei-Objekte wurden zum ImportExportManager hinzugefügt. Sie können nun über Excel importiert / exportiert / verknüpft werden
- „Tags“ wurden zum ImportExportManager hinzugefügt
- Tags für Datei-Objekte wurden implementiert
- Verknüpfungen zwischen Dateiobjekten wurden implementiert, wodurch die Erstellung von (Datei) Hierarchien und Abhängigkeiten ermöglicht wird
- „Lazy Objekt Locking“ Funktionalität implementiert, die das Objekt-Sperrverhalten in Multi-User-Szenarien verbessert
- Diagramm-basiertes Genehmigungsmanagement implementiert: funktioniert auf die gleiche Art und Weise, wie es in Release 6.2 und davor funktioniert hat
- Sharepoint-Synchronisation für LES-Attribute zur Verknüpfung zwischen Datei-Objekten implementiert
- Sharepoint-Synchronisation für Tags implementiert
- „Ein Klick“ Funktionalität für Diagramm-basierte DocumentComposer Berichte wurde implementiert
- Es ist jetzt möglich, Reports aus dem WordReporter, RACI-Reports, SureStep und IEM direkt in der Datenbank zu speichern
- Verbesserte Verarbeitung von parallelen Units im ImportExportManager
- Verbesserte Qualität der exportierten Bilder in Word, PPT und PDF-Dokumenten.
- Verbesserte Set-Performance für alle Erweiterungen

#### Content

- Demo-Datenbank: ISO 9001 Beispiel Inhalte hinzugefügt
- Demo-Datenbank mit neuen Inhalten und Beispielen aktualisiert

#### DbConfig

- Verbesserte Prüfung der hinterlegten SQL-Server Pfade in DbConfig
- Ein Problem mit Datenbankverbindungen initiiert von DBConfig wurde behoben

#### DocumentComposer

- Abbildungsverzeichnis (Option „Tabelle der Abbildungen“) im DocumentComposer hinzugefügt (erfordert <P4B_TABLE_ILLUSTRATIONS> als Platzhalter in der Word-Vorlage)
- Objekt-Sortierung in einigen Reports wurde verbessert
- DocumentComposer Performance verbessert
- Set Handling im DocumentComposer verbessert
- Verbesserte Handhabung für Diagramme mit mehreren Seiten / Blätter im DocumentComposer
- Ein Problem im Zusammenhang mit dem Überschreiben von Dateinamen der direkt in derDatenbank gespeicherten DocumentComposer Reports wurde behoben
- Ein Problem im Zusammenhang mit Tabellenanzeige im DocumentComposer wurde behoben

#### GUI

- Es wurde ein GUI Problem im Zusammenhang mit der process4.biz Registerkarte in Visio behoben
- Es wurde ein Übersetzungsproblem in Bezug auf Objekt-Verknüpfungen, die via Shift + Drag & Drop erstellt wurden, behoben
- Falsch angezeigte Vererbungs-Markierungen auf Symbolen in den Tags-Fenstern wurden entfernt
- Es wurde ein GUI Problem in Bezug auf den QueryBuilder-Button behoben - er wird nun ausgeblendet, wenn der Benutzer nicht über die erforderlichen Berechtigungen verfügt, um ihn zu benutzen
- Alle administrativen Wizards werden jetzt für Nicht-Admin-Benutzer korrekt versteckt
- Es wurde ein GUI Problem im „Einfügen spezial“-Fenster behoben
- Ein Problem in Bezug auf die Sichtbarkeit von Units wurde behoben
- Es wurde ein GUI Problem in Bezug auf Genehmigungen und SharePointSync behoben
- Es wurde ein GUI-Problem behoben, das in der Rechteverwaltung auftreten konnte
- GUI Problem in DBConfig behoben

#### ImportExportManager

- Ein Problem mit importierten Diagramm-Verknüpfungen wurde behoben
- Ein Problem im Zusammenhang mit dem Excel Import und dem Genehmigungsmanagement wurde behoben
- Ein Problem im Zusammenhang mit dem Excel Import und shape-spezifischen Daten wurde behoben

#### Lizenz

- Der Benutzer wird nun informiert, wenn die Version des License Server Service sich von der process4.biz Version unterscheidet
- Verbesserte automatische Erkennung des Lizenzservers
- Offline-Code activiation für den Server License Service hinzugefügt
- Verbessern Protokollierung auf der Client-Seite, wenn Server-Lizenz verwendet wird
- Verbesserte Zeit-Überprüfung, wenn der Client mit dem Lizenzserver verbunden ist
- SERVER \ ONLINE Lizenz Dienst URLs werden von früheren Installationen gespeichert / wiederhergestellt
- Ein Installationsparameter für die Lizenzserver-URL wurde hinzugefügt
- „Refresh-Lizenz“ Funktionalität im Lizenzaktivierungs-Fenster hinzugefügt
- Ein Problem in Bezug auf das Ändern von Einstellungen im Server License Service wurde behoben
- Fehlermeldung bzgl. Server License Service verbessert
- Warnung bzgl. laufendem Lizenzserver während der Installation hinzugefügt
- Lizenztyp-Auswahl zur Silent-Mode Skript-Erstellungs-Seite hinzugefügt
- Ein Problem mit der Lizenz-Ablauf-Warnung für ausgecheckte Lizenzen wurde behoben
- Verbesserte Erkennung von mehreren Instanzen des Lizenzservers im selben Netzwerk

#### Modell

- Datei-Objekte wurden in der Berechtigungs-Verwaltung hinzugefügt
- Die "Diagramm ist größer als A4"-Warnung wurde entfernt, da sie nicht mehr relevant ist
- Verbesserte Handhabung von Berechtigungen für Units
- Verbesserte Handhabung von DateTime-Werten, wenn sie als Shape-Daten in Diagrammen angezeigt werden
- Der Diagramme-Abspeicherungs-Wizard erfordert keine Windows / AD Admin-Rechte mehr. P4b-Modell Admin-Rechte sind jedoch weiterhin erforderlich, um den Wizard zu starten.
- Verbesserte Sicherheit für das Ändern des Administrator-Passworts
- Schaltfläche „Neu“ im Auswahlfenster des Datei Selektors hinzugefügt
- Auto-Anpassung für die Spaltenbreite im Objekt-Explorer hinzugefügt
- Der Daten-Abgleich des „Namen“ mit der Visio-Shape-Zelle „Label“ ist nun optional ein- bzw. ausschaltbar
- „Manage Tags ...“ -Funktionalität wurde im Eigenschafts-Fenster auf der Registerkarte Tags hinzugefügt
- Kopieren, Einfügen usw. Operationen für Dateien hinzugefügt; „Kopieren spezial / verschieben nach“ Optionen derzeit nicht für Datei-Objekte verfügbar.
- Berichtigung der Handhabung von Berechtigungen und Objektanzeige im Repository
- Es wurde ein Visio Absturz in Bezug auf die Berechtigungs-Handhabung behoben
- Berichtigung der Handhabung von Berechtigungen in Bezug auf die Genehmigungs-Historie
- Berichtigung der Handhabung von Berechtigungen und Objektanzeige in Diagrammen
- Ein Problem im Zusammenhang mit Kopieren / Einfügen von Objekten und dem Genehmigungsmanagement wurde behoben
- Ein Problem im Zusammenhang mit Objektverknüpfungen und Berechtigungen wurde behoben
- Verbesserte Datenbankverbindung bei der Umwandlung von Diagrammformat vsd in vsdx
- Berichtigung der Handhabung von Berechtigungen beim Import von Diagrammen
- Einige Inkonsistenzen im Zusammenhang mit Benutzerberechtigungen wurden behoben
- Es wurde ein Fehler beim Abspeichern Diagramme mit mehreren Seiten / Blättern behoben
- Es wurde ein Visio Absturz in Bezug auf Pool / Lane Shapes behoben
- Ein Problem im Zusammenhang mit dem „Geändert am“ Attribut von Diagrammen wurde behoben
- Ein Visio Absturz bei der Änderung der Diagramm-Abspeicherung wurde behoben
- Einige Inkonsistenzen im Zusammenhang mit Berechtigungen für Dateiobjekte wurden behoben
- Ein möglicher Visio Absturz beim Ändern von Vorlagen wurde behoben
- Ein Problem in Bezug auf Datei-Links, die erst durch Benutzer Logout aktualisiert wurden, wurde behoben
- Ein Problem in Bezug auf Hervorhebungs-Regeln wurde behoben
- Ein Problem in Bezug auf die Option „Objekte wo immer möglich wiederverwenden“ im „Einfügen spezial“ Dialog wurde behoben
- Ein Problem in Bezug auf das Attribut „Template Pfad“ wurde behoben - es ist nun nicht mehr mehrsprachig
- Ein Problem in Bezug auf Kopieren / Einfügen-Operationen über parallele Units hinweg wurde behoben
- Ein Problem im Zusammenhang mit dem Attribut DbName wurde behoben
- Ein Problem im Zusammenhang mit der Pflege von Datei-Objekten wurde behoben
- Ein Problem in Bezug auf Kopieren / Einfügen wurde behoben: die Objektnamen werden nun korrekt in allen Sprachen aktualisiert
- Ein Visio VBA-Skript, um Geister-shapes zu reparieren, ist ab jetzt via helpdesk@process4.biz verfügbar


#### QueryBuilder

- Registerkarte „Berechtigungen“ zu Abfrage-Klassen hinzugefügt
- Verbesserte Handhabung von Berechtigungen im Querybuilder
- Verbesserte Abfragen mit Quelltyp „Generic File“: fehlende Standardoptionen wurden hinzugefügt
- Berichtigung der Handhabung von Berechtigungen im QueryBuilder
- Berichtigung der Handhabung von Berechtigungen für Abfrageklassen
- Ein Problem in Bezug auf Lese-Berechtigungen im QueryBuilder wurde behoben
- Ein Problem in Bezug auf exportierte Excel-Dateien aus dem QueryBuilder wurde behoben
- Ein Problem mit fehlenden Kopieren / Verschieben Optionen für die Abfrageergebnisse wurde behoben

#### RACI Report

- "Das zweite Blatt im RACI-Report wurde in ""KPI"" umbenannt und enthält die folgenden Spalten gem. der Demo-Datenbank:
    - Objekte der Klasse „KPI“
    - Objekt der Klasse „Aktivität“, die zu diesen Objekten verknüpft sind
    - Diagrammnamen, wo die „Aktivität“-Objekte verwendet werden
    - Wert der Eigenschaft „Compliance-Status“"
- Es wurde ein Fehler bei der Klassenauswahl in der RACI reprot Erweiterung behoben

#### Setup

- Nach Visio-Update 16.0.10228.20080 wurde die ausführung von VBS verhindert. Wir haben eine Lösung dafür integriert, die bei Bedarf auch automatisch vom Setup angewandt wird
- Setup verbessert: Standard- und Custom-Installationsoptionen implementiert
- Verbesserte Fenstergröße des Setup-Wizards
- Verbesserter Setup Wizard
- Online-Lizenz URL wird nicht mehr von Windows-Installer „Reparieren“ Operationen entfernt
- Ein möglicher Setup-Fehler, wenn der DBConfig Pfad zu einer Netzwerk-Ressource verweist, wurde behoben

#### SharePoint

- Verbesserte SharePointSync für verlinkte Element Selector Attribute
- Verbesserte SharePointSync Fehleranzeige
- Verbesserte Protokollierung für SharePointSync Operationen
- Hinzugefügt in einer Art und Weise eine Warnung bei SharePointSync eingerichtet ist, das ein anderes Fenster / AD-Benutzerkonto als das Visio verknüpft ist verwenden würde
- Nur mehr Benutzer mit Administratorrechten können die Sharepoint-Synchronisation konfigurieren
- Verbesserte mehrsprachige Synchronisation von Sharepoint in die Modelldatenbank
- Ein Fehler zgl. der SharePointSync von „Formel“ -Attributen wurde behoben
- Ein Problem im Modul SharePointSync und im Zusammenhang mit der Eigenschaft „Beschreibung“ wurde behoben
- Ein Problem im Modul SharePointSync und im Zusammenhang mit Diagrammeigenschaften wurde behoben
- Ein Problem in Bezug auf die Richtung in SharePointSync Regeln wurde behoben
- Ein Problem in Bezug auf die SharePoint-Versionierung und die Richtung SP-> p4b wurde behoben
- Eine Inkonsistenz in der Sharepoint-Synchronisation, die für einzelne Diagramme beim Öffnen / Speichern auftreten konnte, wurde behoben
- Ein Problem, das dazu führen konnten, dass sich die Richtung einer SharePointSync Regel ohne Benutzereingaben ändert, wurde behoben
- Ein Problem in Bezug auf die gesetzte Zeitzone, das in SharePointSync auftreten konnte, wurde behoben

#### Versionierung

- Ein Problem in Bezug auf fehlende Diagramme im Version Delta Report wurde behoben

#### WebPublisher

- Ein Problem im WebPublisher und in Bezug auf die Veröffentlichung von Diagrammen, die sich seit der letzten Veröffentlichung nicht geändert haben, wurde behoben
- Verbessertes Logging im WebPublisher: eine Checkbox, um ein detaillierteres Protokoll zu erstellen, wurde hinzugefügt
- Alle im WebPublisher verwendeten Smart-Tag-Icons wurden aktualisiert und in ihrer Qualität verbessert
- Verbesserte Handhabung von verlinkten Inhalte (Dokumente, etc.) im WebPublisher
- Die Option „Kopiere alle angefügten Dateien AUS DER DATENBANK zum Zielort“ wurde in „Angehängte Dateien im Smart-Tag des Objekts anzeigen“ umbenannt
- Ein Problem in Bezug auf die Protokollierung wurde behoben
- Ein Problem in Bezug auf Pfade zu verknüpften Dateien wurde behoben
- Verbesserte Datei-Objekt Handhabung: Datei-Objekte in Units außerhalb des Anwendungsbereichs der Veröffentlichung werden nicht mehr in der Publikation erscheinen
- Ein Problem im Zusammenhang mit der Handhabung von Diagramm-Genehmigungstatus wurde behoben
- Ein Problem mit der Option „alte beibehalten, wenn nicht genehmigt“wurde behoben
- Ein Problem in Bezug auf die „Modell Sprache“ Option wurde behoben
- Ein Problem mit der Sortierung von verknüpften Objekten wurde behoben

#### Wizards

- Verbesserte Handhabung von Berechtigungen für Wizards
- Vor dem Start von Erweiterungen, werden Benutzer jetzt über offene Diagramme informiert, die zu Problemen bei der Berichtsgenerierung führen könnten
- Wizard-Fenster speichern nun ihre Größe (wenn sie vom Benutzer geändert wurde)
- Verbesserte Performance für WebPublisher und ImportExportManager
- Hyperlinks können als anklickbare Links in Word-/Excel-Reports exportiert werden
- Eine Warnung wurde hinzugefügt, wenn ein Set in einer Erweiterung erstellt wird, obwohl die Berechtigung fehlt, es zu speichern
- Verbesserter „Set Speichern“ Button: er wird nun in allen Erweiterungen deaktiviert, wenn es keine Änderungen gab
- Ein Problem mit der Sortierung nach DateTime-Werten im WordReporter und ImportExportManager wurde behoben

#### WordReporter

- Ein Problem mit der Sichtbarkeit von Sets im WordReporter wurde behoben


#### Anderes

- Beim Start von process4.biz wird nun geprüft, ob VBScript funktioniert, um unerwünschtes Verhalten zu verhindern
- Ein Problem in DbUpgradeAll wurde behoben: es nimmt nun den Pfad zu dbconfig.xml als Parameter an
- Ein Problem mit dem QlikView Connector wurde behoben


### V.7.1.6.35216 (13.09.2019) :id=v716

 - Behandlung von booleschen Werten im QueryBuilder korrigiert 
 - Mehrere WordReporter-Fehler behoben
 - Korrigierte Sortierung von Entitäten in WebPublisher und WordReporter Erweiterungen (Objekte/Links werden nun immer alphabetisch sortiert)
 - Verbesserte Synchronisation mit SharePoint


### V.7.1.5.34862 (11.07.2019) :id=v715

- Ein möglicher DbUpgrade-Fehler (auf DB-Version 7.0.9.1) wurde behoben
- Batch-Diagramm Operationen (z.B. Änderung Speicherort, Diagramm-Update) wurden bzgl. der DB-Verbindung verbessert
- Ein möglicher Absturz des WebPublishers wurde behoben
- Ein möglicher Fehler am Ende der Report-Erstellung mit dem WordReporter wurde behoben
- Eine mögliche Inkonsistenz in Bezug auf das vom WordReporter verwendete Word-Template wurde behoben

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
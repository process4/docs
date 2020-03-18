
- [V.7.1.6.35216 (13.09.2019)](#v716)
- [V.7.1.5.34862 (11.07.2019)](#v715)
- [V.7.1.4.34379 (27.03.2019)](#v714)
- [V.7.1.3.33675 (19.11.2018)](#v713)
- [V.7.1.2.33586 (24.10.2018)](#v712)
- [V.7.1.1.33332 (01.08.2018)](#v711)
- [V.7.1.0.33187 (20.06.2018)](#v710)
- [V.7.0.8.32931 (14.06.2018)](#v708)
- [V.7.0.7.32716 (03.06.2018)](#v707)

## Versionshinweise

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

- Verbesserte Berechtigungsverwaltung für Sets in allen Erweiterungen
- Zwischengespeicherte Lizenzinformationen werden jetzt entfernt, wenn eine Datenbank mit DbConfig wiederhergestellt wird


### V.7.1.3.33675 (19.11.2018) :id=v713

- Unit-sperre für Designer verbessert
- Changelog-Veröffentlichungssystem eingeführt


### V.7.1.2.33586 (24.10.2018) :id=v712

- Verbesserte Behandlung von Diagrammbildern, die dem vorhandenen DocumentComposer-Set hinzugefügt wurden
- Links zu Dateien werden jetzt nur dann angezeigt, wenn sich die Datei in der Einheit befindet, die für die Veröffentlichung ausgewählt wurde
- Durch das Konvertieren des Diagrammformats wird die Datenbank nicht gesperrt. Dies führt zu einer verbesserten Formatkonvertierung in großen Datenbanken


### V.7.1.1.33332 (01.08.2018) :id=v711

- Laufzeitprüfung für erforderliche Visio-Komponente (VBScript Engine) implementiert


### V.7.1.0.33187 (20.06.2018) :id=v710

- Jede Zeile im Inhaltsverzeichnis des von DocumentComposer generierten Berichts kann jetzt angeklickt werden
- Verbesserte Handhabung von unveränderten Diagrammen in WebPublisher
- Der Button "Genehmigen" ist nicht mehr sichtbar wenn das Genehmigungsmanagement deaktiviert ist


### V.7.0.8.32931 (14.06.2018) :id=v708

- Metainformationen in der Installationsdatei aktualisiert


### V.7.0.7.32716 (03.06.2018) :id=v707

 - Verbessertes SharePoint-Synchronisationsverhalten
 - Option "Logdatei immer generieren" zur WebPublisher-Erweiterung hinzugefügt
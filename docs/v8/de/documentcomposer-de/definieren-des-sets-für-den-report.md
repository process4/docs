-   [Wähle ein Set](#wähle-ein-set)
    -   [Word Vorlage](#word-vorlage)
    -   [Word Dokument](#word-dokument)
    -   [Diagramme als embedded Visio](#diagramme-als-embedded-visio)
    -   [Diagramme als Bilder](#diagramme-als-bilder)
    -   [Inhaltsverzeichnis](#inhaltsverzeichnis)
    -   [Schaltflächen im unteren Teil](#schaltflächen-im-unteren-teil)
        -   [Hilfe](#hilfe)
        -   [Speichern](#speichern)
        -   [Speichern als](#speichernals)
        -   [Abbrechen](#abbrechen)
        -   [Zurück](#zurück)
        -   [Weiter und Fertigstellen](#weiter-und-fertigstellen)

------------------------------------------------------------------------

### Wähle ein Set

![Doc composer4](//images.ctfassets.net/6mz8d8cle1nl/4NcPDd8djnGorQbfLl3FUS/735cf0a226ec361c0b57295aa1c12649/Doc_composer4.png)

In einem "Set" werden die Einstellungen gespeichert für die Publikation
des Reports nach Word. Sie können entweder ein bereits existierendes Set
wählen oder Ihr eigenes durch Klicken auf Neu definieren.  
![Doc composer5](//images.ctfassets.net/6mz8d8cle1nl/6xZDvIOooi8uucZCbttVJT/5eb601a61748984cc9e46cb0f15683b8/Doc_composer5.png)
Im dann erscheinenden Fenster können Sie einen Setnamen so wie eine
Beschreibung eingeben sowie diese in andere Sprachen übersetzen. Dieses
Fenster können Sie noch mal abrufen, in dem Sie auf Setdetails bei einem
existierenden Set klicken. Das Übersetzungsfenster öffnen Sie mittels
der T-Schaltfläche. Schließlich können Sie nicht mehr benötigten Sets
auch entfernen.  
![Doc composer65](//images.ctfassets.net/6mz8d8cle1nl/1erzrAFMkxxy59n2jYgTbn/d872aeaf5750384845a486bb27e23df7/Doc_composer65.png)
 

Wenn das Set bereits gespeichert ist, wird es mit dem Symbol versehen.
![](//images.ctfassets.net/utx1h0gfm1om/2Yeigx3wkUgAioiY66O4eY/78d82ae086543c88587933b75dd9444e/329357.png)
Wenn es sich aber um ein neues Set handelt, wird es zusätzlich mit dem
Fragezeichen versehen.  

![Doc composer5 1](//images.ctfassets.net/6mz8d8cle1nl/4ldT1I0KVIkklMizDAmULl/fc102513b73c3e646954d2b43241e8d8/Doc_composer5_1.png)


#### Word Vorlage

Ihre gewünschten Einstellungen werden in einer Dokumentvorlage
"\*.dot"-Datei) bestimmt. Process4.biz stellt Ihnen eine Vorlage für
diese Zwecke in dem definierten Pfad zur Verfügung. Sie können diese
Datei vor der Publikation nach Ihren persönlichen Präferenzen anpassen
oder Ihre persönlichen Einstellungen in einer separaten Vorlage
speichern (siehe auch DocumentComposer Dokumentvorlage für Word).
Stellen Sie bei der Formatierung bitte sicher, dass die durch den
Document Composer generierten Inhalte nach der Title Page und dem
Management Summary eingefügt werden.

#### Report in einem Ordner speichern  auf einem Disk

Wählen Sie diese Checkbox, wenn Sie den Report auf einem Disk speichern wollen. In diesem Fall müssen sie den Namen der Datei und den Pfad des erstellten Reports definieren und diese werden auf dem Disk gespeichert. 

Report in einer Process4.biz Datenbank speichern
Wählen Sie diese Checkbox aus, wenn Sie die Datei direkt in der Process4.biz Datenbank speichern wollen. In diesem Fall müssen sie die Klasse und den Namen des Word-Dokuments definieren. Indem Sie auf Speichern als.. klicken, können Sie auswählen wo der Report gespeichert werden soll. Sie können auch eine bestehende Datei auswählen, die überschrieben werden kann. Wenn die Datei nicht überschrieben werden soll, geben Sie den Haken aus der Box „Überschreiben von existierenden Daten“ in der unteren linken Ecke weg und eine neue Datei mit dem selben Namen wird erstellt. 

<div class="info">
  Definieren Sie den Namen der Datei sowie den Pfad, wo der generierte Report gespeichert werden soll.</div>

#### Diagramme als embedded Visio

Diese Funktion ermöglicht den Export von process4.biz Diagrammen als
Visio-Objekte.

#### Diagramme als Bilder

Wenn Sie diese Option aktivieren, werden process4.biz Diagramme in den
Report als Bilder im PNG-Format eingefügt. Diagramme, die als
BLOB-Objekte direkt in der Datenbank gespeichert sind oder Passwort
geschützt sind (siehe Kapitel Diagramme schützen in dem
Benutzerhandbuch) können NUR als JPEG Bilder und nicht als Visio Objekte
exportiert werden.

#### Inhaltsverzeichnis

Aktivieren Sie diese Option, wenn Sie ein Inhaltsverzeichnis automatisch
generieren wollen. Dieses wird in den Report vor dem Inhalt eingefügt.

#### Abbildungsverzeichnis

Aktivieren Sie diese Option, wenn Sie ein Abbildungsverzeichnis automatisch
generieren wollen. Dieses wird an jener Stelle in den Report eingefügt, an der der Platzhalter <P4B_TABLE_ILLUSTRATIONS> in der Word-Vorlage gefunden wurde.

#### Schaltflächen im unteren Teil

 ![Doc composer9](//images.ctfassets.net/6mz8d8cle1nl/m8DPfmssY3jyNPdexzIGA/749c7af05ab5090e8e436c92bc0811c5/Doc_composer9.png)

##### Hilfe

Diese Schaltfläche öffnet die Help Page zum DocumentComposer.

##### Speichern

Klicken Sie auf dieser Schaltfläche, um das Set jederzeit während der
Wizardausführung und nicht nur am Ende des Exportprozesses zu speichern.

##### Speichern als

Speichern Sie das aktuelle Set als ein neues.

##### Abbrechen

Klicken Sie auf dieser Schaltfläche, um den Wizard ohne Änderungen zu
verlassen.

##### Zurück

Klicken Sie auf dieser Schaltfläche, um zurück zur vorigen Seite zu
kommen.

##### Weiter und Fertigstellen

Diese zwei Option stehen zur Verfügung, um den Dialog fortzusetzen:

-   Wenn Sie auf "Weiter" klicken, können Sie detaillierter auswählen,
    welcher Inhalt exportiert wird (siehe nächstes Kapitel). Ihre
    Selektion wird als Defaultselektion für weitere Exporte unter dem
    Set Namen, den Sie eingegeben haben, gespeichert.
-   Wenn Sie auf die Schaltfläche "Fertigstellen" klicken, wird der
    ausgewählte Report sofort generiert. In diesem Fall wird ein bereits
    gespeichertes Set verwendet. Dieses startet den Exportprozess mit
    den existierenden Seteinstellungen.



<hr style="padding-top:2rem" />
<a href="https://github.com/process4/docs/issues" target="_blank" class="bgw btn btn-primary btn-lg shadow-sm">Report an issue</a>
<a href="https://github.com/process4/docs" target="_blank" class="bgw btn btn-primary btn-lg shadow-sm" style="margin-left:10px;">View source code</a>
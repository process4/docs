

In diesem Fenster können Sie mit Hilfe von Filtern komfortabel
bestimmen, welche spezifischen Diagramme bzw. Objekte in das
Word-Dokument aufgenommen werden sollen. Aktivieren Sie Erweitertes
Filtern von Daten, um folgende Filter-Einstellungen zu definieren. Die
Filtereinstellungen werden via spezieller Formeln definiert.

In der Tabelle ***Angewendet** **auf** *legen Sie fest, ob die weiteren
Einstellungen nur zur Filterung von Objekten oder nur von Diagrammen
oder von Objekten und Diagrammen eingesetzt werden sollen.

In der Tabelle ***Bedingung* **können Sie folgende Bedingungen
definieren:

-   **Mit Eigentümer**

Selektieren Sie einen bestimmten Eigentümer, dessen Diagramme und/o der
Objekte angezeigt werden sollen. Als Eigentümer können beliebiger
Benutzer o der eine Windows-Benutzergruppe ausgewählt werden. Im letzten
Fall werden alle Objekte und Diagramme angezeigt, die im Eigentum der
Mitglieder dieser Gruppe sind.

-   **Erstellt durch**

Mit Hilfe dieser Option können Sie alle Objekte publizieren, die durch
einen bestimmten Benutzer oder Mitglieder einer bestimmten
Windows-Benutzergruppe erstellt wurden.

-   **Erstellt nach**

Nach dem ausgewählten Datum erstellte Objekte und/oder Diagramme sollen
publiziert werden.

-   **Erstellt vor**

Objekte und/oder Diagramme erstellt vor dem ausgewählten Datum sollen
publiziert werden. Definieren Sie bitte dabei immer +1 Tag. Ein Objekt
wurde z.B. am 20.09.08 erstellt, definieren Sie „erstellt vor 21.09.08",
um dieses Objekt in Report zu inkludieren.

-   **Geändert durch**

Sie haben die Möglichkeit, alle Objekte bzw. Diagramme und Objekte in
Form eines Word-Dokuments auszuwerten, die durch einen bestimmten
Benutzer oder Mitglieder einer bestimmten Windows-Benutzergruppe
verändert wurden.

-   **Geändert nach**

Nach dem ausgewählten Datum geänderte Objekte und/oder Diagramme so llen
publiziert werden.

-   **Geändert vor**

Vor dem ausgewählten Datum geänderte Objekte und/oder Diagramme sollen
publiziert werden.

![16-DE-1](//images.ctfassets.net/6mz8d8cle1nl/1tovzhdsuccukO8Quus8Mg/7b4086ea5be97a49f9aea24f3526616c/16-DE-1.png)

-   **Mit Genehmigungsmanagement**

Legen Sie mittels dieser Option fest, dass nur Diagramme und/oder
Objekte mit bestimmten Genehmigungsstatus in den Word-Report aufgenommen
werden sollen (Mehrfachselektion ist möglich in dem man mehrere Zeilen
mit „UND" anlegt).

-   ***Alle Status-Zustände***
-   ***Genehmigt***
-   ***Nicht genehmigte (alle außer genehmigten Diagrammen werden
    exportiert)***
-   ***Undefiniert***
-   ***Neu – Ist noch in Arbeit***
-   ***Neu – Braucht noch Verbesserung***
-   ***Neu – Wartet auf Genehmigung***
-   ***Aktualisiert – Ist noch in Arbeit***
-   ***Aktualisiert – Braucht noch Verbesserung***
-   ***Aktualisiert – Wartet auf Genehmigung***
-   ***Gelöscht***

Dieser Filter steht nur dann zur Verfügung, wenn in Ihrer Datenbank
das Genehmigungsmanagement aktiviert wurde, also ein entsprechendes
Attribut ( ApprovalStatus) bei einer der Objekt-Klassen oder Diagramme
vorhanden ist (siehe [Genehmigungsmanagement](Genehmigungsmanagement)).
Ansonsten ist diese Option ausgegraut.

-   **mit Tag**

Objekte und Diagramme mit ausgewählten Tags werden publiziert. Dieser
Filter ist nur verfügbar, wenn die ausgewählten Klassen das spezielle
Tag-Attribut beinhaltet.

-   **Erfüllen der Abfragekriterien**

Filtern von Daten kann auch auf einer Abfrage basiert werden, die mit
Hilfe vom process4. - Abfragegenerator erstellt wurde (siehe
[QueryBuilder](#){.unresolved}[).](http://www.process4.biz/HelpContent/540/ext-qb/de/)
Beachten Sie bitte, dass nur Abfragen mit dem Objekttyp " Generic
objects" für Excel Daten-Filtering.  
Die Bedingungen können via logischen Operator UND oder ODER kombiniert
werden. Klicken Sie auf „+" Zeichen, wenn Sie eine zusätzliche Bedingung
hinzufügen möchten und auf „-" Zeichen, wenn Sie die Bedingung löschen
möchten ![16-DE-2](//images.ctfassets.net/6mz8d8cle1nl/4fARURG2E0KOKUQeo8Ug4K/1064ecb1e79fe6a656d09340af3ac872/16-DE-2.png) .  
ODER bedeutet logische Summierung, UND – logische Multiplikation, was
auch bedeutet, dass UND mehr Priorität hat als ODER. Verwenden Sie
Klammer, um Priorität zu bestimmen.  
Zum Beispiel "A oder B und C" ist egal "A oder (B und C)".  
Beispiel: Alle Diagramme (mit Genehmigungsstatus = Neu ODER mit
Genehmigungsstatus = Aktualisiert) UND (mit Eigentümer = "Admin" ODER
mit Eigentümer = "User1"). Ergebnis: alle Diagramme, die von Benutzern
Admin oder User1 erstellt oder aktualisiert wurden.  
In der Tabelle Nicht können Sie Ausnahmen definieren. Sie können zum
Beispiel alle  
Objekte und Diagramme anzeigen, die von allen Benutzern außer Admin und
Designer geändert wurden. Die Formel lautet „NICHT geändert durch Admin
UND NICHT geändert durch Designer".

Im Bereich unten wird ein spezieller Text generiert, die alle
definierten Filter-Einstellungen beschreibt.  
![16-DE-3](//images.ctfassets.net/6mz8d8cle1nl/5HI2B6xK5UMiI4GeoCS4Q2/7fa6d292d7b7394ac259a7a7ffe59a65/16-DE-3.png)
  
Sie können die Reihenfolge der Regeln auch per drag & drop von der Zeile
ändern. Der einfachste Weg um dies zu erreichen ist, wenn Sie die Nummer
am Anfang der Zeile anklicken und dann die gesamte Zeile auf den neuen
Platz ziehen.

![16-DE-4](//images.ctfassets.net/6mz8d8cle1nl/7vduzUcUBUE0UCwwq2qCKc/41ee92c98761690702e0cbf4a6bf059f/16-DE-4.png)


<hr style="padding-top:2rem" />
<a href="https://github.com/process4/docs/issues" target="_blank" class="bgw btn btn-primary btn-lg shadow-sm">Report an issue</a>
<a href="https://github.com/process4/docs" target="_blank" class="bgw btn btn-primary btn-lg shadow-sm" style="margin-left:10px;">View source code</a>
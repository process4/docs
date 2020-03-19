-   [Definition](#definition)
-   [Diagramm-Klassen](#diagramm-klassen)
-   [Datei-Klassen](#datei-klassen)


### Definition

Eine (Objekt-) Klasse ist grundsätzlich als Gruppe oder Kategorie für
[Objekte](objekt) zu verstehen.

Klassen sind somit also Datengruppen, die unterhalb des
Daten-Hierarchieasts einer Unit im [Repository](repository-de) oder im
[Database Designer](database-designer-de) angezeigt werden. Das Erstellen
und Verwalten von Klassen, erfolgt dabei im Designer.

Jede [Unit](unit-de), kann beliebig viele Klassen enthalten, die wiederum
beliebig viele Objekte beinhalten können. Klassen höher oder tiefer
gelegener Hierarchieebenen, vererben ihre Strukturelemente
([Attributgruppen und Attribute](attributgruppe-und-attribut)) hierarchisch
an die jeweils ausgewählte [Unit](unit-de); falls erforderlich, lässt sich
die Anzeige dieser vererbten Elemente mit dem entsprechenden Unit Filter
im [Database Designer](database-designer-de) steuern.

### Diagramm-Klassen

[Diagramme](diagramm) gehören zu Diagramm-Klassen, in denen
diagrammspezifische Attribute und Diagramm-Vorlagen gespeichert sind.
Wie für Objekt-Klassen, können Sie für Diagramm-Klassen [Attributgruppen
und Attribute](attributgruppe-und-attribut) anlegen. Für jede
Diagramm-Klasse, kann man auch eine [Vorlage](shapes-stencils-und-templates-de)
(oder auch mehrere) auswählen, die dann für das Erstellen eines
Diagramms dieser Klasse zur Verfügung stehen soll.

![](//images.ctfassets.net/utx1h0gfm1om/5Ez7ai2J0IueOiMMysoeYi/ac54d87b211ca427dff4bbc6d345bc2d/1017716.png)

*Auswahl der Diagramm-Klasse*

Um eine Diagramm-Klasse zu erstellen, klicken Sie mit der rechten
Maustaste auf den Diagramm-Ast einer Unit im [Database
Designer](database-designer-de) und wählen dort "Neu" aus. In den
Eigenschaften der damit neu erstellten Diagramm-Klasse, können Sie
auswählen, welche Vorlage/n für diese Klasse angewendet werden sollen.
Die Liste der Vorlagen, hängt vom Schablonenpfad einer Unit ab - d.h.,
diese Liste wird aus den Vorlagen generiert, die in dem Ordner liegt,
auf den der [Schablonenpfad der Unit](shapes-stencils-und-templates-de)
zeigt. Wenn Sie eine Vorlage für eine Diagramm-Klasse definiert haben
und dann ein neues Diagramm erstellen, wird die entsprechende
Diagramm-Klasse automatisch, d.h., gemäß der ausgewählten Vorlage, für
das Diagramm gesetzt.

### Datei-Klassen

In die Datenbank hochgeladene Dateien, gehören zu Datei-Klassen, in
denen dateispezifische Attribute (z.B. Größe, Pfad, etc.) gespeichert
sind. Diese Datei-Klassen ermöglichen eine grundlegende Kategorisierung
der hochgeladenen Dokumente. Wie für Objekt-Klassen, können Sie für
Datei-Klassen im [Database Designer](database-designer-de) sämtliche
benötigten [Attributgruppen und Attribute](attributgruppe-und-attribut)
anlegen und verwalten.

**Achtung**: Falls für ein Modell bzw. eine Datenbank keine einzige
Datei-Klasse vorhanden ist, können auch keine [Dateien in die Datenbank
hochgeladen](objekte-mit-dateien-verknüpfen) werden!



![](//images.ctfassets.net/utx1h0gfm1om/6BEx9LK2nCQyCIIw8CW6ME/2a9fdfed98544d2cf903bc3245f699d2/1017712.png)

*Klassen unter dem Daten-Hierarchieast der Unit "0.Aufbauorganisation"
im* *[Database Designer](database-designer-de)*


<hr style="padding-top:2rem" />
<a href="https://github.com/process4/docs/issues" target="_blank" class="bgw btn btn-primary btn-lg shadow-sm">Report an issue</a>
<a href="https://github.com/process4/docs" target="_blank" class="bgw btn btn-primary btn-lg shadow-sm" style="margin-left:10px;">View source code</a>
-   [Aufbau des Dialogfensters](#aufbau-des-dialogfensters)
    -   [Attribute](#attribute)
        -   [Sektion Allgemein](#sektion-allgemein)
        -   [Sektion Shape-spezifisch](#sektion-shape-spezifisch)
    -   [Objektverknüpfungen](#objektverknüpfungen)
    -   [Diagrammverknüpfungen](#diagrammverknüpfungen)
    -   [Versionen](#versionen)
    -   [Dateien](#dateien)
    -   [Tags (optional)](#tags-optional)
    -   [Berechtigungen](#berechtigungen)
-   [Mehrere Instanzen von Eigeschafts-Fenstern](#mehrere-instanzen-von-eigeschafts-fenstern)

Das Eigenschafts-Fenster, dient der Anzeige der [Attributgruppen und
Attribute](attributgruppe-und-attribut) eines [Objekts](objekt) oder
[Diagramms](diagramm), steht aber auch (in reduzierter Form) für
Designelemente, Benutzer etc. zur Verfügung.

Das Dialogfenster kann auf folgende Arten angezeigt werden:

-   Markieren Sie ein Element mit der linken Maustaste und öffnen Sie
    mit der rechten Maustaste das Kontextmenü. Dort steht der Eintrag
    "Eigenschaften" zur Verfügung.
-   Doppelklicken Sie mit der linken Maustaste auf das gewünschte
    Element.
-   Verwenden Sie die Tastenkombination Alt+Enter.
-   Markieren Sie das gewünschte Element und klicken Sie auf den Button
    "Attribute" in der Symbolleiste.

### Aufbau des Dialogfensters

Das Dialogfenster Eigenschaften, hat standardmäßig 6 Reiter, optional
können [Tags](tags) als 7. Reiter angezeigt werden.

#### Attribute

##### Sektion Allgemein

Dieser Reiter zeigt [Attribute](attributgruppe-und-attribut) und deren Werte
bzw. Ausprägungen an.

Sofern ein Attribut in schwarzer Schriftfarbe erscheint, kann es
verändert werden. Erscheint es in grauer Farbe, ist es nicht
veränderbar. Wird ein Attribut in blauer Farbe angezeigt, handelt es
sich bei diesem Feld um ein Pflichtfeld, das ausgefüllt werden muss.

Attributwerte bzw. -ausprägungen, können - je nach den für das jeweilige
Attribut festgelegten
[Attributtypen](attributgruppe-und-attribut) - in
der linken Spalte des Eigenschafts-Fensters eingetragen bzw. ausgewählt
werden. Wenn Sie mehrzeilige Attributwerte eingeben möchten und einen
Zeilenumbruch brauchen, benutzen Sie dafür Strg+Enter. Das vom Benutzer
bearbeitete Attribut, wird jeweils mit einem grünen Haken markiert, so
lange das Eigenschafts-Fenster geöffnet ist.

Mit einem Klick auf die Schaltfläche OK, oder durch zweimaliges
Betätigen der Enter-Taste, speichern Sie die getätigten Änderungen in
der Datenbank. Die Schaltfläche Abbrechen, oder zweimaliges Drücken von
ESC, schließen das Eigenschafts-Fenster und verwerfen etwaige
Änderungen.

Wenn Sie den Wert eines Attributs löschen, können Sie diesen entweder
nur in der aktuellen Sprache, oder in allen Sprachen löschen. Diese
Auswahl ist in einem separaten Dialog möglich, der erscheint, wenn Sie
nach dem Löschen die Änderungen mit OK bestätigen.

<div class="info">

Beim Löschen eines Wertes nur in der Aktuellen Sprache (und bei
Vorhandensein eines entsprechenden Wertes in der Default-Sprache), wird
der Wert - trotz vorheriger Löschung - durch jenen der Default Sprache
ersetzt werden.
</div>

Ganz unten in dieser Sektion, befindet sich ein Anzeigefeld für die
(optional) im [Database Designer](database-designer-de) hinterlegten
Beschreibungen der Attribute. Siehe dazu:
[Systemattribute](systemattribute)


------------------------------------------------------------------------

![](//images.ctfassets.net/utx1h0gfm1om/1Z42HOBmiECeA0mSyEcOYY/6b076f1cda17e6de3b61e34be7a65d5c/1017996.png)

##### Sektion Shape-spezifisch

Zeigt die [Shape-spezifischen Attribute](shape-spezifische-attribute)
eines [Objekts](objekt) an und bietet die Möglichkeit, diese zu
verändern. Shape-spezifische Attribute, werden in dieser Sektion je nach
ihrem Auftreten auf Diagrammen angezeigt.

#### Objektverknüpfungen

Zeigt die [Verknüpfungen](verknüpfungen) zu Objekten an und bietet die
Möglichkeit, diese Verknüpfungen zu verwalten.

#### Diagrammverknüpfungen

Zeigt die [Verknüpfungen](verknüpfungen) eines Objekts
zu [Diagrammen](diagramm) an und bietet die Möglichkeit, diese
Verknüpfungen zu verwalten.

Siehe dazu: [Objekt mit Diagramm verknüpfen](objekte-mit-diagrammen-verknüpfen)

#### Versionen

Der Reiter Historie, dient dem [Versionsmanagement](versionsmanagement):
hier können Sie Versionsunterschiede für [Objekte](objekt) und
[Diagramme](diagramm) einsehen.

#### Dateien

Zeigt die Datei-[Verknüpfungen](verknüpfungen) eines Objekts oder
Diagramms an und bietet die Möglichkeit, diese Verknüpfungen zu
verwalten.

Siehe dazu: [Objekte mit Dateien verknüpfen](objekte-mit-diagrammen-verknüpfen)

#### Tags (optional)

Zeigt die [Tags](tags-de) des gewählten [Objekts](objekt) an, erlaubt aber
keine Bearbeitung der Tags - Änderungen können im Eigenschafts-Fenster
über den Reiter "Attribute" vorgenommen werden.

#### Berechtigungen

In diesem Reiter können [Berechtigungen](berechtigungen) für sämtliche
Elemente der Datenbank gesetzt werden. Die Vergabe von Berechtigungen,
ist dabei aber nur für von Benutzern erstellte Elemente möglich; für
System-Klassen, System-Attributgruppen und -Attribute, ist es nicht
erlaubt, die Berechtigungen zu ändern, weshalb dieser Reiter in deren
Eigenschafts-Fenster auch nicht existiert.

Voraussetzung für das Bearbeiten der Berechtigungen ist, dass der
jeweilige Benutzer Administrationsrechte für das entsprechende Objekt,
bzw. Design-Rechte für das Bearbeiten von Designelementen hat.

### Mehrere Instanzen von Eigeschafts-Fenstern

In einigen Fällen (z.B. [manuelle Objektverknüpfungen](objekte-manuell-verknüpfen)) ist es möglich,
mehrere Instanzen von Eigenschafts-Fenstern geöffnet zu haben. Für
diesen Sonderfall, gibt es folgendes zu beachten:

<div class="warning">

Änderungen, die in einem Folgefenster des ursprünglich geöffneten
Eigenschafts-Fensters gemacht wurden, werden nur dann übernommen, wenn
das ursprünglich geöffnete Eigenschafts-Fenster mit "OK" bestätigt wird.
Falls das ursprünglich geöffnete Eigenschafts-Fenster mit "Abbrechen"
geschlossen wird, werden auch all jene Änderungen, die in Folgefenstern
gemacht wurden, zurückgesetzt.

</div>

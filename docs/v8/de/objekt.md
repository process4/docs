-   [Definition](#definition)
    -   [Vererbung](#vererbung)
-   [Anlegen eines Objekts](#anlegen-eines-objekts)
-   [Ein Objekt auf einem Diagramm platzieren](#ein-objekt-auf-einem-diagramm-platzieren)
    -   [Neues Objekt](#neues-objekt)
    -   [Vorhandenes Objekt](#vorhandenes-objekt)
        -   [Shape-spezifische Daten](#shape-spezifische-daten)
-   [Objekte kopieren & verschieben](#objekte-kopieren--verschieben)
-   [Objektverknüpfungen](#objektverknüpfungen)


### Definition

Objekte sind Entsprechungen von realen und/oder abstrakten (Geschäfts-)
Objekten (z.B. Standort, Rolle, Stelle, Server, Prozess, Funktion,
etc.). Sie sind im [Repository](repository-de) in [Klassen](klasse)
organisiert und werden als grüne Würfel dargestellt.

Objekte sind Datenbeschreibungen (durch
[Attribute](attributgruppe-und-attribut) und deren Ausprägungen), denen in
der Modellierung [Shapes](shapes-stencils-und-templates-de) (also grafische
Repräsentanten) auf [Diagrammen](diagramm) zugeordnet werden. Ein Objekt
kann auf mehreren Diagrammen (oder auch auf einem Diagramm öfters) immer
wieder verwendet werden; das bedeutet, dass alle Shapes eines Objekts
einer Klasse, auch immer die selben Attribute haben, was widerum zur
Redundanzfreiheit führt.

#### Vererbung

Der Begriff Vererbung, stellt in Bezug auf Objekte keine Ableitung im
Sinne der Objektorientierung dar (das würde bedeuten, das ein neues
Objekt alle Merkmale und Fähigkeiten des übergeordneten Basisobjekts
besitzt), sondern bedeutet, dass dieses Objekt auch in anderen als der
Ursprungs-Unit zur Verfügung steht.

Änderungen an vererbten Objekten, wirken sich also direkt auf das
konkrete Objekt (an seinem Erstellungsort) aus.

Prinzipiell werden alle Objekte und Diagramme entlang des
verschachtelten Hierarchiebaums nach oben und unten vererbt. Die Anzeige
vererbter Objekte (bzw. der Zugriff darauf), ist allerdings an
[Benutzerrechte](berechtigungen) und
[Filtereinstellungen](suchen-und-filtern) gekoppelt .

### Anlegen eines Objekts

1.  Markieren Sie die gewünschte [Klasse](klasse), in der Sie ein neues
    Objekt anlegen wollen.

2.  Rufen Sie das Kontextmenü (rechte Maustaste) der Klasse, oder des
    Objektfensters, auf und wählen Sie die Funktion "Neu".

    <div class="success">
  <h2>Alternative:</h2>
    
    klicken Sie in der Menüleiste im [Repository](repository-de) auf die Schlatfläche "Neu".
    </div>

3.  Das [Eigenschafts-Fenster](eigenschaften-dialogfenster) erscheint.
4.  Geben Sie einen Namen, sowie die gewünschten Attributwerte für das
    Objekt ein.

### Ein Objekt auf einem Diagramm platzieren

#### Neues Objekt

1.  Wählen Sie das gewünschte [Shape](shapes-stencils-und-templates-de) aus der [Schablone](shapes-stencils-und-templates-de), das einer [Klasse](klasse) in der Datenbank entspricht.
2.  Ziehen Sie dieses Shape auf das Zeichenblatt
3.  Wählen Sie "Erstelle neues Objekt" im Objektauswahl-Fenster.
4.  Ein neues Objekt dieser Klasse wird erstellt, das
    [Eigenschafts-Fenster](eigenschaften-dialogfenster) erscheint.
5.  Geben Sie einen Namen, sowie die gewünschten Attributwerte für das
    Objekt ein.

<div class="info">
<h3>Anmerkung:</h3> 
  
Sie können natürlich auch Shapes in Ihrer Schablone
einrichten, die namentlich keiner Klasse entsprechen und diese Shapes
auf dem Zeichenblatt platzieren. In diesem Fall, handelt es sich dann um
eine rein grafische Darstellung (z.B. zur Ergänzung) auf dem
spezifischen Diagramm, *ohne jegliche Referenz in der Datenbank*.
</div>

#### Vorhandenes Objekt

1.  Wählen Sie die gewünschte [Klasse](klasse) im [Little
    Repository](graphical-visio-modeler)
    aus.
2.  Wählen Sie das gewünschte Objekt in dieser Klasse.
3.  Ziehen Sie das Objekt mit gedrückter linker Maustaste auf das
    Zeichenblatt.
4.  Ein Shape für das gewählte Objekt, wird auf dem Zeichenblatt
    erstellt und übernimmt automatisch dessen grafische Eigenschaften,
    sowie alle [Attribute](attributgruppe-und-attribut) des Objekts.



![](//images.ctfassets.net/utx1h0gfm1om/29hYrCgRmgO0gg68CCmYay/21fcca7ba784d79963ad7254ae72e157/1017758.png)

*Ein neues Objekt anlegen*


![](//images.ctfassets.net/utx1h0gfm1om/3XBRfDkYWkWAkiuOEQ6SKE/d17147979b14d5c0eaf253b49b5b1488/1017752.png)

*Ein neues Objekt auf einem Diagramm platzieren*

##### Shape-spezifische Daten

Wenn mehrmals in einem Modell vorkommende (gleiche) Shapeinstanzen eines
Objekts Attribute haben sollen, die nur an einem genau definierten Platz
auf genau einem Diagramm gelten sollen, dann können dafür
shape-spezifische Attribute verwendet werden. Die Werte dieser
shape-spezifischen Attribute, werden ausschließlich per Shape vergeben
und gespeichert.

Siehe dazu: [Shape-spezifische Attribute](shape-spezifische-attribute)

### Objekte kopieren & verschieben

Siehe dazu: [Objekte kopieren &
verschieben](ausschneiden-kopieren-einfügen-spezial)

### Objektverknüpfungen

Siehe dazu: [Verknüpfungen](verknüpfungen)


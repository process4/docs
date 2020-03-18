

### Definition

Shape-spezifische [Attribute](attributgruppe-und-attribut), sind Attribute,
die die Attributierung von [Objekten](objekt) auf
[Shape](shapes-stencils-und-templates-de)-Basis
ermöglichen.

Diese Attribute, können im [Database Designer](database-designer-de), über
das Attribut "Shape-spezifisch" im
[Eigenschafts-Fenster](eigenschaften-dialogfenster-de) gesteuert werden: Share-spezifische Attribute können nur eingestellt werden für Attribute der Attribut-Gruppen einer Klasse (z.B. eine neue Attribut-Definition Gruppe der Activity-Klasse) und nicht für Attribute einer Klasse.  

![](//images.ctfassets.net/utx1h0gfm1om/1tm9P9SdHaeeUw80msgqcm/f78ae13835f511f5681e2384b051ae73/1018012.png)

Für shape-spezifische Attribute, stehen alle Features von normalen
Attributen (z.B. Pflichtfelder; siehe [Anlegen eines
Attributs](anlegen-eines-attributs)), sowie separate
[Systemattribute](systemattribute) (Shape: Geometrie und Shape:
Diagramm) zur Verfügung.

Um das zu einem shape-spezifischen Attribut
gehörige [Shape](shapes-stencils-und-templates-de)
ausfindig zu machen, also die Nummer eines Shapes auf einem
[Diagramm](diagramm) (wie im
[Eigenschafts-Fenster](eigenschaften-dialogfenster) angezeigt) zu
erfahren, kann die Funktion "Shape-Daten" im Kontextmenü eines Shapes
herangezogen werden.

Ein Attribut, das bereits mit einem Mastershape assoziiert ist,kann
keinesfalls shape-spezifisch sein. Dementsprechend wird diese Option
auch ausgeblendet, sobald "Shape-spezifisch" auf "Wahr" gesetzt wird.

#### Beispiel-Anwendungsfall

Eine bestimmte Aktivität, ist mit einem gewissen Risiko behaftet, je
nach dem, wo und wann sie durchzuführen ist.

Da es sich dabei zwar immer um die selbe Aktivität (=das selbe
[Objekt](objekt) der [Klasse](klasse) "Aktivität") handelt, das Risiko
aber variiert, ist das ein klassischer Fall für ein shape-spezifisches
Attribut.

Dafür ist folgendes Vorgehen nötig:

1.  [Anlegen eines neuen Attributs](anlegen-eines-attributs) in der
    [Klasse](klasse) "Aktivität" für die gewünschte [Unit](unit-de)  
    (z.B. "Risiko" mit den Enum-Eementen "Gering, Mittel, Hoch")
2.  Das soeben erstellte Attribut "Risiko" auf "Shape-spezifisch=Wahr"
    setzen

**Ergebnis**: in der Sektion "Shape-spezifisch"
im [Eigenschafts-Fenster](eigenschaften-dialogfenster) für Objekte der
Klasse "Aktivität", haben Sie nun die Möglichkeit, das soeben angelegte
Attribut "Risiko" mit dem gewünschten Wert auszustatten. Dieser Wert
kann pro Shape, also für jedes Auftreten eines Objekts dieser Klasse auf
einem Diagramm, unterschiedlich sein, womit sich das variierende Risiko
dieser Aktivität exakt erfassen lässt.

Siehe dazu auch: [Anzeigen von Attributen als
Visio-Datengrafik](anzeigen-von-attributen-als-visio-datengrafik)

![](//images.ctfassets.net/utx1h0gfm1om/69YmIzln2gmsCa6IWyyyuY/19410abb78136f1a31fd54c2ddd84f15/1017770.png)

*Anzeige der Shape-Daten*


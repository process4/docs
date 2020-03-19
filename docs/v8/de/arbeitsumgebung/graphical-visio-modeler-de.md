-   [Navigation im Graphical Visio Modeler](#navigation-im-graphical-visio-modeler)
    -   [Smart-Tags](#smart-tags)
-   [Little Repository](#little-repository)
    -   [Little Repository Funktionen](#little-repository-funktionen)
-   [Attribute Explorer](#attribute-explorer)
    -   [Attribute bearbeiten](#attribute-bearbeiten)
-   [Diagramminfo](#diagramminfo)
-   [Kontextmenü für Objekte](#kontext-menü-für-objekte)
    -   [Ausschneiden, Kopieren & Einfügen](#ausschneiden-kopieren--einfügen)
    -   [Löschen](#löschen)
        -   [Geister-Shapes](#geister-shapes)
    -   [Objekte ersetzen](#objekte-ersetzen)
-   [Visio-Funktion Rückgängig/Wiederholen](#visio-funktion-rückgängigwiederholen)


Mit dem Graphical Visio Modeler, nehmen Sie die Modellierung von Diagrammen mit den bekannten Funktionen und der Benutzeroberfläche von Microsoft Visio vor. Sie sind dabei direkt mit der Datenbank verbunden.
Standardmäßig besteht der Graphical Visio Modeler aus einem Repository-Fenster ("Little Repository"), einer geöffneten Schablone (=Stencil) und den darin enthaltenen Shapes, mit denen Sie auf diesem Diagramm arbeiten können. Stencils und deren Shapes, sind frei definierbar und  bestimmen Ihre jeweilige Modellierungsmethode = die Notation, mit der Sie ein Modell aufbauen. Siehe dazu: [Shapes, Stencils & Templates](shapes-stencils-und-templates-de)

### Navigation im Graphical Visio Modeler

Der Graphical Visio Modeler enthält jeweils ein oder mehrere für die
Bearbeitung geöffnete [Diagramme](diagramm), die gleichzeitig offen sein
können. Genauso, wie Sie es aus anderen Microsoft Office Applikationen
gewohnt sind, können Sie diese Fenster über das Menü "Fenster"
auswählen.

Mit den Symbolen "Nächstes Diagramm" bzw. "vorheriges Diagramm", können
Sie durch die Diagramme navigieren bzw. zwischen den offenen Diagrammen
umschalten.  

![](//images.ctfassets.net/utx1h0gfm1om/3MvzswD4dWKUGy4ciu4C0s/343e87c180bdd29c4c8172a77c57d3f0/1018798.png)  
  
Bei der Orientierung und Navigation innerhalb der Modellstruktur,
unterstützt Sie das Kontextmenü des geöffneten Diagramms. Klicken Sie
dazu mit der rechten Maustaste auf eine leere Fläche des Zeichenblatts
und lassen Sie sich die in der Hierarchie übergeordneten
Vorgängerdiagramme (Parents) oder die Nachfolgediagramme (Children)
anzeigen. Durch Selektion eines Diagramms aus der Liste, wird dieses im
Graphical Visio Modeler geöffnet und steht als aktives Zeichenblatt zur
Bearbeitung zur Verfügung.

#### Smart-Tags

Smart-Tags werden auf [Diagrammen](diagramm) an den [Objekten](objekt)
angezeigt und sind das Ergebnis von  [Verknüpfungen zwischen Objekten
und Diagrammen](objekte-mit-diagrammen-verknüpfen)bzw. Dateien, oder
entstehen durch das Hinzufügen eines Links zu einem Objekt. Sie dienen
demnach auch der Navigation zwischen Diagrammen im Graphical Visio
Modeler: ein Klick auf das (bzw. eines der) in einem Smart-Tag
hinterlegten Elemente, öffnet das entsprechende Element.

Die Beziehung zwischen den einzelnen Diagrammen in der hierarchischen
Baumstruktur (siehe [Repository](repository-de)), wird in den Smart-Tags
durch kleine Pfeile dargestellt.

-   Ein Pfeil nach oben, markiert ein hierarchisch übergeordnetes
    Diagramm (Parent-Diagramm).
-   Ein waagrechter Strich, signalisiert die selbe hierarchische Ebene
    bzw. eine fehlende hierarchische Beziehung.
-   Ein Pfeil nach unten, markiert ein hierarchisch untergeordnetes
    Diagramm (Child-Diagramm).


------------------------------------------------------------------------

![](//images.ctfassets.net/utx1h0gfm1om/5R9veK3V3aKAuO88WIG2cy/6adaaf9c543aa47c1f294ed1626f52e1/1017659.png)

*Ansicht eines geöffneten Diagramms im Graphical Visio Modeler*

### Little Repository

Das kleine Repository-Fenster links unten, können Sie für die Suche nach
vorhandenen [Objekten](objekt) verwenden, die bereits in der Datenbank
angelegt wurden. Diese bestehenden Objekte, lassen sich dann per Drag &
Drop aus dem Little Repository auf das Zeichenblatt zu ziehen und somit
wiederholt verwenden. Diese Funktionalität, stellt die Basis des mit
process4.biz möglichen, redundanzfreien Modellierens dar.

Mit der Wiederverwendung der vorhandenen Objekte modellieren Sie nicht
nur noch rascher, weil Sie sich die mehrmalige Ausprägung desselben
Objekts sparen, sondern vorgenommene Veränderungen an den Attributen
eines Objekts werden auf alle [Diagramme](diagramm), in denen das
veränderte Objekt verwendet wird, durchgereicht. In der Spalte Unit,
können Sie verfolgen, in welcher Unit das Objekt ursprünglich angelegt
wurde.

#### Little Repository Funktionen

-   Klicken Sie auf die Schaltfläche
    ![](//images.ctfassets.net/utx1h0gfm1om/5EY5PBTwZyY8QYikEeswIk/b068d557a7d0c04efa3195837daf83b0/1018763.png) , um
    die im Little Repository angezeigten Informationen zu aktualisieren.
-   Der Button Filter (![](//images.ctfassets.net/utx1h0gfm1om/29YB7h1yWYOysoMee2U6wk/c68aff96d8e871f415796601c5f813f8/1018769.png
    ) lassen sich im kleinen Repository alle vererbten Objekte ausblenden, die Ihren Ursprung nicht in der selben Unit des derzeit geöffneten Diagramms haben. Es ist auch möglich Objekte von der parallelen Unit auszublenden, aber wenn der Filter deaktiviert wird, warden die ausgeblendeten Objekte von Parent-Units und Child-Units auch deaktiviert.  Abgesehen davon, können Sie Klassen ausblenden, die keine Objekte haben, sowie auch jene Klassen, zu denen kein Master-Shape in den Schablonen (Stencils) zugeordnet ist. Ausgeblendete Objekte, lassen sich mit der Funktion "Zeige ausgeblendete Elemente" im Little Repository anzeigen. 
-   Durch Aktivierung des Vererbungsfilters 
    (![](//images.ctfassets.net/utx1h0gfm1om/3dYNUBMENOWco6cgEu6gO/ced49d5a4f66053e510b28097fa738b7/1018732.png))
    lassen sich im kleinen Repository alle vererbten Objekte ausblenden,
    die Ihren Ursprung nicht in der selben Unit des derzeit geöffneten
    Diagramms haben. Abgesehen davon, können Sie Klassen ausblenden, die
    keine Objekte haben, sowie auch jene Klassen, zu denen kein
    Master-Shape in den Schablonen (Stencils) zugeordnet ist.
    Ausgeblendete Objekte, lassen sich mit der Funktion "Zeige
    ausgeblendete Elemente" im Little Repository anzeigen. 
-   Mit den Schaltflächen
    ![](//images.ctfassets.net/utx1h0gfm1om/1gKsx8JX9AGiQOo2GCOoGg/0dfd8627b9ebdc838498850b7e6887cf/1018742.png), können
    Sie den Hierarchiebaum im Little Repository öffnen (damit Sie alle
    Objekte sehen) und schließen (damit nur die Klassen sichtbar
    bleiben).
-   Beim Klicken auf den Spaltenkopfnamen, werden Objekte aufsteigend
    oder absteigend innerhalb jeder Klasse sortiert
-   Standardmäßig werden die Spalten Name und Unit im kleinen Repository
    angezeigt. Sie können zusätzlich alle anderen Attribut-Spalten für
    Objekte im kleinen Repository anzeigen. Klicken Sie mit der rechten
    Maustaste auf die Spalte und wählen Sie Zeige Spalte aus. Sie können
    angezeigte Spalten so auch wieder ausblenden.
-   Mit Hilfe der Option "Zeigen: Alle Klassen" kann man nur eine
    ausgewählte Klasse im Repository anzeigen lassen. Wenn eine Klasse
    ausgewählt ist, können Sie klassenspezifische Spalten-Attribute
    anzeigen, indem Sie (wie im vorigen Punkt beschrieben) auf die
    Spalte mit der rechten Maustaste klicken und aus dem Menü Zeige
    Spalte auswählen. 
-   Mit der Option "Anzeigen nur von verwendeten Objekten", lässt sich
    die Anzeige der Objekte im Little Repository so regulieren, dass nur
    jene Objekte, die auf dem derzeit geöffneten Diagramm verwendet
    werden, angezeigt werden.
-   Alle objektbezogenen Funktionen, können Sie auch im Little
    Repository über das Kontextmenü für Objekte auswählen.
-   Unten rechts, können Sie die Anzahl von Objekten in der bzw. den
    ausgeklappten Klassen sehen.
    
![image](//images.ctfassets.net/6mz8d8cle1nl/7lTp36OiiTUtvuuzu9u0KZ/fb377fc09bffb2b8cf3d8c2a85e777a9/image.png)

### Attribute Explorer

Mit dem Attribute Explorer-Fenster, können die Eigenschaften des
geöffneten Diagramms, bzw. der auf diesem Diagramm verwendeten Objekten
angezeigt und direkt bearbeitet werden.

Wenn Ihre Maus auf dem Diagramm steht, so wird nach Aktivierung dieses
Buttons ein Fenster geöffnet, in dem die Diagramm-Eigenschaften
bearbeitet werden können. Ein Klick auf den Reiter "Info", zeigt Namen,
[Units](unit-de) und [Klassen](klasse) aller auf dem Diagramm verwendeter
Objekte an. Das Klicken auf ein Objekt im "Info"-Tab, öffnet dessen
Eigenschaften, ein Klick auf die Spaltenköpfe Name, Unit oder Klasse,
sortiert alle Elemente nach dem entsprechenden Kriterium in
alphabetischer Reihenfolge.

Wenn statt des Diagramms ein bestimmtes Objekt auf dem Diagramm
ausgewählt ist, werden all seine Eigenschaften im Attribute Explorer
Fenster dargestellt und können dort auch bearbeitet werden. Das
"Info"-Tab, zeigt in diesem Fall dann die mit dem ausgewählten Objekt
verknüpften Objekte, sowie die Verwendung des Objekts auf anderen
Diagrammen an. Ein Klick auf diese Einträge, öffnet das entsprechende
[Eigenschafts-Fenster](eigenschaften-dialogfenster) bzw.
[Diagramm](diagramm).

#### Attribute bearbeiten

Wenn ein Eintrag bzw. eine Änderung im Attribute Explorer bestätigt und
in den Eigenschaften gespeichert werden soll, bestätigen Sie die
Änderungen mit der Enter-Taste. Um getätigte Änderungen zu verwerfen,
kann Escape gedrückt werden. Änderungen im Attribute Explorer Fenster
können Sie auch mit den Rückgängig- und Wiederholen-Schaltflächen
(Visio) steuern.

![](//images.ctfassets.net/utx1h0gfm1om/MICeTzgfQqcc2UE2S2oyY/b08bd6655ed7837c4f75e8b8d5e8fbca/1017665.png)

*Der Attribute Explorer im Graphical Visio Modeler*

### Diagramminfo

Mit dem Diagramminfo-Fenster, kann verfolgt werden, mit welchen anderen
Diagrammen das geöffnete [Diagramm](diagramm) in Hierarchiebeziehungen
steht. Das heißt, Sie können dessen Parent- und Child-Diagramme in einer
Baum-Ansicht sehen und zwischen diesen Diagrammen auch mit einem
Doppelklick umschalten. Das Diagramminfo-Fenster zeigt alle Diagramme
aus der Unit des geöffneten Diagramms an, was der Unterschied zum
"Diagramm Öffnen"-Button gleich daneben ist - diese Funktion zeigt die
gesamte Diagrammhierarchie Ihres Modells in einer Baumstruktur und kann
dementsprechend etwas weniger übersichtlich sein.

### Kontextmenü für Objekte

Mit einem Rechtsklick auf ein Objekt auf einem Diagramm, erreichen Sie
das Kontextmenü, in dem die Basisfunktionalitäten von Visio, sowie die
process4.biz-Funktionen zur Verfügung stehen. Es lassen sich so z.B.
direkt mit einem Objekt verknüpfte neue Diagramme erstellen oder die
[Objekteigenschaften](eigenschaften-dialogfenster) anzeigen.

#### Ausschneiden, Kopieren & Einfügen

Sie können [Objekte](objekt) von einem [Diagramm](diagramm) oder von
mehreren Diagrammen innerhalb einer Datenbank und zwischen verschiedenen
Datenbanken über den Zwischenspeicher kopieren, ausschneiden und
einfügen.

-   Grafische Kopie <span class="underline">des selben Objekts</span>  
    Wenn Sie das selbe Objekt mehrmals auf einem Diagramm darstellen
    möchten, verwenden Sie &lt;Strg + Drag & Drop&gt;. Dadurch wird
    lediglich ein neuer grafischer Repräsentant eines vorhandenen
    Objekts auf dem Diagramm angelegt.
-   Grafische Kopie <span class="underline">mit neuem Objekt</span>  
    Wenn Sie ein neues Objekt mit dem selbem Shape (=Objekt selber
    Klasse) auf einem Diagramm erstellen möchten, verwenden Sie
    &lt;Strg + c&gt; zum Kopieren und dann &lt;Strg + v&gt; zum
    Einfügen, bzw. die entsprechenden Kontextmenü-Einträge.

Siehe dazu auch: [Wenn ein Shape am Diagramm eingefügt
wird](datenbank-einstellungen)

![](//images.ctfassets.net/utx1h0gfm1om/2oizVusA4Ak6GWowegMcmY/4a53b8f9dd087c00c73012ace1fe8302/1017629.png)

*Das Diagramminfo-Fenster*

#### Löschen

Mit der Funktion Löschen im Kontextmenü, wird ein Dialogfenster für das
gewählte Objekt geöffnet, in dem Sie entscheiden, ob das Objekt
lediglich vom Diagramm entfernt werden soll oder zusätzlich auch gleich
aus der Datenbank gelöscht wird. Dieser Dialog wir auch dann angezeigt,
wenn Sie die Entfernen-Taste verwenden. Wenn das Objekt Referenzen mit
anderen Objekten bzw. Diagrammen hat, erscheint anschließend ein
weiteres Dialogfenster, der über die vorhandenen Verknüpfungen
informiert.

Siehe dazu auch: [Wenn ein Shape vom Diagramm entfernt
wird](datenbank-einstellungen)

##### Geister-Shapes

Wenn es das [Shape](shapes-stencils-und-templates-de), das auf einem Diagramm
liegt, nicht mehr in der Datenbank gibt (z.B. weil es gelöscht wurde),
so handelt es sich um ein Geister-Shape mit fehlender Objektreferenz. Es
wird daher mit einem roten Rufzeichen versehen, das die Möglichkeit
bietet, dieses Geister-Shape zu reparieren. Sie können im folgenden
Dialogfenster das ausgewählte Geister-Shape (oder auch gleich alle
solchen Shapes), entweder löschen oder nur dessen Rufzeichen-Tag
entfernen und das Shape auf dem Diagramm belassen. Alternativ dazu,
können Sie auch ein passendes Objekt aus dem Repository auswählen, das
mit dem Geister-Shape auf dem Diagramm neu verbunden werden soll.

#### Objekte ersetzen

Es ist möglich, ein [Objekt](objekt) (und optional auch all seine
Instanzen) auf einem [Diagramm](diagramm) mit einem anderen Objekt zu
ersetzen. Diese Funktion ist über den Eintrag "Wählen eines process4.biz
Objekts..." im Kontextmenü für Objekte zu erreichen:

![](//images.ctfassets.net/utx1h0gfm1om/64QyYwig6IAMeqEeQySEiO/21af984f2021bf32717ebc1403c2c169/1017967.png)

Im damit geöffneten Fenster, kann ein Objekt ausgewählt werden, mit dem
das bestehende Objekt ersetzt werden soll.

Optional können auch - in einem Arbeitschritt - alle Instanzen des
gewählten Objekts auf dem geöffneten Diagramm ersetzt werden.

### Visio-Funktion Rückgängig/Wiederholen

Analog zu Visio, können Sie in process4.biz-Diagrammen die Funktionen
Rückgängig und Wiederholen verwenden. Bei Rückgängig, werden Objekte aus
der Datenbank gelöscht, bei Wiederholen werden sie wiederhergestellt. Es
ist nicht mehr möglich, Änderungen rückgängig zu machen, nachdem das
Diagramm gespeichert oder nachdem die Datenbank aktualisiert wurde (z.B.
mit der Schaltfläche Aktualisieren im Little Repository).

![image](//images.ctfassets.net/6mz8d8cle1nl/4yyjPqFY9R26H8CfOqc2aC/ac4fcd6c89781c3e62481302e86debbd/image.png)
<hr style="padding-top:2rem" />
<a href="https://github.com/process4/docs/issues" target="_blank" class="bgw btn btn-primary btn-lg shadow-sm">Report an issue</a>
<a href="https://github.com/process4/docs" target="_blank" class="bgw btn btn-primary btn-lg shadow-sm" style="margin-left:10px;">View source code</a>
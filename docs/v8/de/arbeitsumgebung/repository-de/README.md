-   [Repository-Bestandteile](#repository-bestandteile)
    -   [Navigationsfenster](#navigationsfenster)
    -   [Objektfenster](#objektfenster)
        -   [Ansichtseinstellungen](#ansichtseinstellungen)
        -   [Spalten im Objektfenster verwalten](#spalten-im-objektfenster-verwalten)
    -   [Object Explorer](#object-explorer)
    -   [Attribute-Übersichtsblatt](#attribute-übersichtsblatt)
-   [Repository-Funktionen](#repository-funktionen)
    -   [Anlegen/bearbeiten eines Objekts](#anlegen--bearbeiten-eines-objekts)
        -   [Mehrfachselektion](#mehrfachselektion)
    -   [Ausschneiden, Kopieren & Einfügen](#ausschneiden-kopieren--Einfügen)
    -   [Bearbeiten mit F2](#bearbeiten-mit-f2)
    -   [Datenbank Aktualisieren](#datenbank-aktualisieren)
    -   [Löschen eines Objekts im Repository](#löschen-eines-objekts-im-repository)
    -   [Objektverwendung in Diagrammen anzeigen](#objektverwendung-in-diagrammen-anzeigen)


Das Repository ist eine SQL-Server basierte und von den Benutzern
flexibel anpassbare Datenbank, in die alle [Objekte](objekt) und deren
Dateninhalte, sowie die [Diagramme](diagramm), abgespeichert werden. Das
Repository ist eine zentrale Basiskomponente von process4.biz, ohne die
die Software nicht lauffähig ist.

Im Repository sind alle Objekte hierarchisch strukturiert untergebracht.
Diese hierarchische (Baum-)Struktur erlaubt sowohl eine Sicht auf die
Daten und Diagramme einer [Unit](unit-de), als auch auf die dort ebenfalls
vorhandenen Daten und Diagramme, die aus strukturhöheren oder
–niedrigeren Units vererbt wurden. Die Daten sind dabei in
[Klassen](klasse) gruppiert, was eine tabellarische Sicht auf
zugeordnete Objekte zur Verfügung stellt. Einige Klassen sind
Systemklassen mit Systemattributgruppen (z. B.: Definition,
Beschreibung, Hilfe, Administration, etc.) und daher automatisch in
allen hierarchischen Strukturen enthalten. Die Ausprägung vorhandener
Systemklassen hängt von der jeweiligen Methode ab, die Sie verwenden
möchten (RACI, BPMN, EPK, Catalyst oder EAM bzw. ob Sie auch
Referenzmodelle einsetzen, wie COBIT5, Dynamics AX/NAV, etc. oder eine
eigene Methode).

Die Sichtbarkeit der Objekte und Diagramme im Repository, lässt sich
über [Suchen und Filtern](suchen-und-filtern) steuern. Das Kontextmenü
zur Bearbeitung von Datenobjekten oder Diagrammen, kann jeder Zeit mit
einem rechten Mausklick auf das entsprechende Element aufgerufen werden.

### Repository-Bestandteile

#### Navigationsfenster

Das Navigationsfenster beinhaltet die hierarchische Baumstruktur und
dient der Navigation innerhalb der (Firmen-)Struktur, die Sie mit Units
und Klassen sowie deren Attributen und Diagrammen aufbauen bzw.
abbilden.

Wenn Sie eine [Klasse](klasse) einer [Unit](unit-de) auswählen, werden im
Fenster rechts die [Objekte](objekt) dieser Klasse und ihre
[Attribute](attributgruppe-und-attribut) tabellarisch aufgelistet. Die
Anzahl der Objekte in einer Klasse der gewählten Unit, wird auch schon
vorab im Navigationsfenster angezeigt - Aktivität \[53\] bedeutet somit,
dass es 53 Objekte in der Klasse Aktivität in der gewählten Unit gibt.

Auch die Anzahl der Diagramme in der gewählten Unit, wird in einer
eckigen Klammer hinter der Klasse Diagramm im Navigationsfenster
angeziegt. Wenn Sie die Klasse Diagramm im Navigationsfenster auswählen,
können Sie verfolgen, in welcher Hierarchie Diagramme zueinander stehen
(Top-Diagramm, Parent-Diagramm, Child-Diagramm). Im
Diagramm-Hierarchiebaum werden alle Diagramme der höchsten
Hierarchieebene aufgelistet. Ihre jeweiligen Verzweigungen lassen sich
wie Ordner im Windows Explorer aufblättern.

Die Diagrammhierarchie wird erstellt, in dem man ein auf dem
Parent-Diagramm liegendes Objekt mit einem oder mehreren untergeordneten
Diagrammen verknüpft; siehe dazu: [Objekte mit Diagrammen
verknüpfen](objekte-mit-diagrammen-verknüpfen). Wenn ein Diagramm
mehrere Parent-Diagramme hat (d.h. es besteht eine Verknüpfung zu diesem
Diagramm von Objekten mehrerer Diagramme), wird dieses Diagramm im Baum
unter allen Parent-Diagrammen angezeigt.

#### Objektfenster

Alle Objekte einer im linken Navigationsfenster ausgewählten Klasse,
erscheinen im rechten Objektfenster zusammen mit ihren
[Attributen](attributgruppe-und-attribut) tabellarisch dargestellt. Sie
können per Doppelklick oder im Kontextmenü (rechte
Maustaste-&gt;Eigenschaften) für die Bearbeitung geöffnet werden.
Datenobjekte sind mit einem grünen Würfelsymbol, Diagramme mit einem
hellorangen Diagrammsymbol dargestellt.

-   Wenn diese Symbole ein zusätzliches kleines gelbes Dreieck oben
    links haben, handelt es sich um vererbte [Objekte](objekt) aus einer
    höheren Hierarchieebene. Befindet sich das gelbe Dreieck unten
    rechts, liegt das entsprechende Element in einer untergeordneten
    Hierarchieebene.
-   Wird eines der Symbole mit einem blauen Balken gekennzeichnet,
    bedeutet das, dass das jeweilige Objekt mit einer Datei verlinkt
    ist.
-   Wird eines der Symbole mit einem orangen Balken gekennzeichnet,
    bedeutet das, dass das jeweilige Objekt mit SharePoint
    synchronisiert wird.
-   Wird eines der Symbole mit einem kleinen grünen Schloss ergänzt, so
    wird dieses gerade von dem aktuellen Benutzer bearbeitet.
-   Wird eines der Symbole mit einem kleinen gelben Schloss ergänzt, so
    wird dieses [Objekt](objekt) oder [Diagramm](diagramm) gerade
    angelegt oder bearbeitet und die Änderungen sind noch nicht in der
    Datenbank gespeichert.
-   Die Symbolfarbe ist grau, wenn der Zugriff auf die Unit nicht
    gegeben ist.
-   Das Symbol ist grau und hat ein kleines Schloss, wenn ein Objekt in
    der Bearbeitung von einem anderen Benutzer ist, so dass der aktuelle
    Benutzer solche Objekte im Moment nicht bearbeiten kann. Ein
    Administrator kann solche Diagramme oder Objekte entsperren, in dem
    er mit der rechten Maustaste darauf klickt und die Funktion
    Entsperren unter dem Kontextmenüpunkt Speziell auswählt. Das
    Diagramm oder Objekt wird dann entsperrt und wieder für alle
    Benutzer verfügbar gemacht.
-   Assoziationsklassen (siehe [Verknüpfungstypen](verknüpfungstypen)),
    werden violett angezeigt, Assoziationsobjekte sind in Lila
    eingefärbt.
-   Zudem können Kennzeichnungen aus dem
    [Genehmigungsmanagement](genehmigungsmanagement) links unten an den
    Symbolen von Objekten und/oder Diagrammen angezeigt werden.

##### Ansichtseinstellungen

-   Große Symbole: zum Vergrößern der Symbole, es werden keine Attribute
    angezeigt.
-   Liste: zeigt nur die Objektnamen in Listenform an.
-   Details: zeigt Ihnen alle Attribute der Objekte.

##### Spalten im Objektfenster verwalten

Die Spalten des Objektfensters können Sie mit der Maus per drag & drop
verschieben. Process4.biz merkt sich die Anordnung der Spalten, sowie
das individuelle Ein- oder Ausblenden von vorhandenen Spalten. Jede
Spalte in der Tabelle ist im [Database Designer](database-designer-de)
veränderbar; dort können Sie auch beliebige neue Spalten (=Attribute)
anlegen.

Bewegen Sie zur Änderung der Spaltenbreite den Mauszeiger zwischen die
Attributspalten und ziehen Sie die Begrenzungsmarkierung in die
gewünschte Richtung. Mit einem rechten Mausklick auf den Namen der
jeweiligen Spalte, können Sie die Spalten verwalten, sie ausblenden oder
einblenden.


------------------------------------------------------------------------

![](//images.ctfassets.net/utx1h0gfm1om/5DYH6f4IVi6y8YgY8Yw0Kq/6199c28d2e1c1af3b615cf52d3196339/1018017.png)

*Das Navigationsfenster im Repository*


![](//images.ctfassets.net/utx1h0gfm1om/6oMGT79KNOoc6CUWemA2Ye/022600e40e690a0b105eb724e617ead9/1018018.png)

*Der Object Explorer im Repository*


*![](//images.ctfassets.net/utx1h0gfm1om/1i0hrddpnqMUiqI0G0oeeE/72a68325c9710eb4010b8b08a445c56a/1017674.png)*

*Das Attribute-Übersichtsblatt  
*

-   Ausblenden der Spalte X: Sie können die ausgewählte Spalte (alle
    Spalten außer die Spalte "Name") ausblenden. Sie wird versteckt,
    nicht gelöscht, und kann jeder Zeit wiederhergestellt werden.
-   Einblenden der ausgeblendeten Spalte: In diesem Menüpunkt hat man
    die Möglichkeit, einzelne oder mittels "Alle Spalten zeigen"
    sämtliche bisher ausgeblendete Spalten wieder anzeigen zu lassen.
-   Spaltenwahlmanager: Sie können alle Spalten (Attribute), die Sie
    verstecken möchten, in den Spaltenwahlmanager ziehen.
-   Fixieren des Layouts: Aktivieren Sie eine der nachfolgend
    beschriebenen Optionen dieses Kontextmenüpunkts durch rechten
    Mausklick auf eine Spalte im Objektfenster, bevor Sie
    Spaltenänderungen vornehmen. Dadurch wirken sich Veränderungen der
    Ansichtseinstellungen je nach gewählter Option auf alle Klassen
    einer Unit, auf eine bestimmte Klasse in allen Units oder auf die
    ausgewählte Klasse in der selektieren Unit aus.
-   Fixieren des aktuellen Layouts für alle Klassen in Unit X: Diese
    Option können Sie nur dann auswählen, wenn Unit oder Daten in der
    linken Baumstruktur ausgewählt sind. Die Spaltenänderungen werden
    für alle Klassen der ausgewählten Unit gespeichert.
-   Fixieren des aktuelle Layouts für Klasse A in allen Units: Wenn die
    Spaltenänderungen für eine bestimmte Klasse an alle Units innerhalb
    der Vererbungshierarchie durchgereicht werden sollen, aktivieren Sie
    diese Option.
-   Fixieren des aktuellen Layouts für Klasse A in Unit XY: Wenn Sie
    Spaltenänderungen für eine bestimmte Klasse nur in der ausgewählten
    Unit anzeigen wollen, aktivieren Sie diese Option.
-   Speichern des Layouts: Nachdem Sie alle Spaltenänderungen
    vorgenommen haben, können Sie das Layout als „\*.xml"- Datei
    speichern.
-   Laden eines Layouts: Das gespeicherte Layout können Sie dann z. B.
    für eine andere Datenbank, Unit oder Klasse mit diesem Befehl laden.
    Alle im Layout gespeicherten Einstellungen werden dabei übernommen.
-   Zurücksetzen des Layouts: Diese Option versetzt alle Spalten in den
    Default-Status, wenn beispielsweise die Reihenfolge der Spalten per
    drag & drop geändert oder einzelne Spalten ausgeblendet wurden.

#### Object Explorer

Im Object Explorer können Sie - nach Auswahl eines Objekts oder
Diagramms - unterschiedliche Verknüpfungen verfolgen: Abhängigkeiten,
Datei Verlinkungen und Objekt-Verknüpfungen.

1.  Abhängigkeiten von einem Objekt anzeigen  
    Sie können hier verfolgen, welche Objekte mit welchen anderen
    Objekten über welchen [Verknüpfungstyp](verknüpfungen) verlinkt
    sind. Diese Option ist nur für Objekte verfügbar. Im Object Explorer
    sehen Sie so alle mit dem ausgewählten Objekt verlinkten Objekte,
    sortiert nach dem zugewiesenen Verknüpfungs-Typ. Die ausgegrauten
    Symbole für verknüpfte Objekte zeigen im Object Explorer an, dass
    die Verknüpfung automatisch angelegt wurde und nicht gelöscht werden
    kann. Für manuell verknüpfte Objekte werden grüne Symbole verwendet.
2.  Datei Verlinkungen anzeigen  
    In diesem Reiter können Sie verfolgen, welche Objekte bzw. Diagramme
    mit welchen Dateien verknüpft sind bzw. für die in die Datenbank
    hochgeladenen Dateien, mit welchen Objekten bzw. Diagrammen sie
    verknüpft sind. (siehe: [Dateien hochladen und
    verknüpfen](objekte-mit-dateien-verknüpfen)).
3.  Objekt-Verknüpfungen  
    Wenn Sie im Repository ein Objekt auswählen, wird angezeigt, mit
    welchen Diagrammen es verknüpft ist. Wenn Sie auf das "+" Zeichen
    neben dem Diagramm klicken, werden Sie sehen, welche Objekte auf
    diesem Diagramm verwendet werden und mit welchen Diagrammen diese
    Objekte verknüpft sind.  
    Wenn Sie ein Diagramm auswählen, wird angezeigt, welche Objekte auf
    diesem Diagramm verwendet werden und mit welchen anderen Diagrammen
    diese Objekte verknüpft sind.

#### Attribute-Übersichtsblatt

Sie können die Eigenschaften von Objekten und Diagrammen auch mit Hilfe
des Attribute-Übersichtsblattes bearbeiten: das Bearbeiten funktioniert
hier genau so, wie in einem
normalen [Eigenschafts-Fenster](eigenschaften-dialogfenster).

### Repository-Funktionen

#### Anlegen/bearbeiten eines Objekts

Objekte und Diagramme lassen sich entweder über die Symbolleiste oder
über das Kontextmenü anlegen und/oder bearbeiten. Verwenden Sie zur
Bearbeitung die Schaltfläche Attribute bzw. zum Anlegen eines neuen
Designelements den Button Neu in der Symbolleiste bzw. im Kontextmenü.

Siehe dazu auch:  [Anlegen eines neuen Objekts im Repository](objekt)

##### Mehrfachselektion

Wenn mehrere [Objekte](objekt) im Repository ausgewählt werden, können
für alle diese Objekte vorhandene [Attribute]((attributgruppe-und-attribut)
auch über das [Eigenschafts-Fenster](eigenschaften-dialogfenster)
bearbeitet werden.

Bei abweichenden (= für alle ausgewählten Objekte unterschiedlichen)
Attributwerten, wird statt des Attributwerts der Platzhalter
"&lt;Mehrfachselektion&gt;" angezeigt. Wenn nun ein bestimmter Wert
gesetzt wird, wird dieser für alle ausgewählten Objekte übernommen.

<div class="info">

Das Arbeiten mit der Mehrfachselektion ist ausschließlich über das
Eigenschafts-Fenster im Repository möglich. Der Attribute Explorer,
sowie das Attribute-Übersichtsblatt, können zwar die Attribute mehrerer
ausgewählter Objekte anzeigen, lassen aber keine Bearbeitung zu.

</div>

#### Ausschneiden, Kopieren & Einfügen

Siehe: [Ausschneiden, Kopieren, Einfügen & Spezial](ausschneiden-kopieren-einfuegen-und-spezial)

#### Bearbeiten mit F2

Sie können die Namen von Objekten im Baum im Repository mit Hilfe der
Taste F2 oder durch 2-maliges Klicken (kein Doppelklick) bearbeiten.
Voraussetzungen dafür sind, dass die Units zuvor gesperrt wurden oder
die Option "Erlaube Bearbeiten ohne Sperren (des Designers)" aktiviert
ist (siehe: [Datenbank-Einstellungen](datenbank-einstellungen)) und Sie
Bearbeiten- sowie Design-Rechte für die jeweilige Unit haben. Folgende
Namen können so bearbeitet werden:

-   [Units](unit-de)
-   [Klassen](klasse)
-   [Diagramme](diagramm)

#### Datenbank Aktualisieren

Wenn mehrere Benutzer gleichzeitig in der Datenbank modellieren,
empfehlen wir, die Datenbankinhalte regelmäßig zu aktualisieren:

![](//images.ctfassets.net/utx1h0gfm1om/5JDoZdooTeqYiCcykqM6Ce/b2825d8edb827737727598cbe8ce698d/1017680.png)

Der Aktualisierungsprozess im Repository funktioniert folgendermaßen:

-   Wenn Sie eine Klasse im Repository auswählen und auf Aktualisieren
    klicken, werden <span class="underline">nur Objekte dieser
    Klasse</span> aktualisiert.
-   Wenn Sie ein Diagramm auswählen und auf Aktualisieren klicken,
    werden <span class="underline">alle Diagramme dieser Unit</span>
    aktualisiert.
-   Wenn Sie eine Unit auswählen und auf Aktualisieren klicken, werden
    <span class="underline">alle Objekte und Diagramme dieser
    Unit</span> aktualisiert.
-   Wenn Sie Top-Unit auswählen und auf Aktualisieren klicken, werden
    <span class="underline">alle Objekte und Diagramme im
    Repository</span> aktualisiert.

#### Löschen eines Objekts im Repository

Wenn Sie ein Objekt im Repository löschen wollen, gehen Sie wie folgt
vor:

1.  Markieren Sie das Objekt mit der linken Maustaste.
2.  Wählen Sie aus der Symbolleiste das Symbol Löschen oder öffnen Sie
    das Kontextmenü mit der rechten Maustaste und wählen die Funktion
    Löschen.

Wenn das zu löschende Objekt bereits auf einem Diagramm verwendet wird
oder Objektverknüpfungen hat, erscheint ein entsprechender Warnhinweis.
Wenn Sie den Löschvorgang bestätigen, werden alle in diesem Fenster
angeführten Referenzen bzw. Verknüpfungen auf das Objekt automatisch mit
entfernt. Auf den Diagrammen bleibt das gelöschte Objekt vorerst noch
als so genanntes Ghost-Shape (gekennzeichnet mit einem roten Rufzeichen
"!") erhalten.

#### Objektverwendung in Diagrammen anzeigen

Mit dieser Funktion im Kontextmenü, kann geprüft werden, auf welchen
[Diagrammen](diagramm) das ausgewählte [Objekt](objekt) verwendet wird.
Es wird bei einem Klick auf das bzw. die aufgelisteten Diagramme
automatisch jeweils das erste Diagramm-Zeichenblatt geöffnet, auf dem
das Objekt verwendet wird.


-   [Designer-Bestandteile](#designer-bestandteile)
    -   [Navigationsfenster](#navigationsfenster)
    -   [Anzeigefenster](#anzeigefenster)
-   [Designer-Funktionen](#designer-funktionen)
    -   [Anlegen/Bearbeiten eines Designelements](#anlegenbearbeiten-eines-designelements)
    -   [Ausschneiden, Kopieren & Einfügen](#ausschneiden-kopieren--Einfügen)
    -   [Bearbeiten mit F2](#bearbeiten-mit-f2)
    -   [Designelemente sperren & entsperren](#designelemente-sperren--entsperren)
    -   [Designelemente löschen](#designelemente-löschen)

Der Database Designer legt [Units](unit-de), [Klassen](klasse), [Attribute
und Attributgruppen](attributgruppe-und-attribut) an und verwaltet auch alle
[Verknüpfungstechnologien und -typen](Verknüpfungen) sowie
[Validierungsskripte](Validierungsskripte) und [Tags](Tags). Das
bedeutet, dass der Database Designer so die Datenbank-Struktur für das
[Repository](Repository) zur Verfügung stellt und verwaltet.

### Designer-Bestandteile

#### Navigationsfenster

Die Navigation im Designer-Fenster, ist analog zur Navigation im
[Repository](repository-de) strukturiert. Das linke Navigationsfenster
zeigt den Unithierarchiebaum. Wird dort eine Unit ausgewählt, erscheinen
die dazu gehörigen [Attributgruppen](attributgruppe-und-attribut) im rechten
Fenster aufgelistet. Wenn man im linken Fenster auf eine Klasse klickt,
gibt es zwei Möglichkeiten, die Inhalte der [Klasse](klasse) anzuzeigen,
was mit der Filter-Option "Auflisten des Inhalts" festgelegt werden
kann:



------------------------------------------------------------------------

 

-   Auto: im rechten Fenster werden die Attributgruppen der ausgewählten
    Klasse angezeigt.

-   Eigenschaften: im rechten Fenster werden immer alle Attribute
    angezeigt, wenn Sie auf Daten, Klassen, Attributgruppen klicken.
    Diese Funktion erlaubt es also, alle Attribute der ganzen Datenbank
    anzuschauen, ohne diese in Klassen oder Attributgruppen gegliedert
    zu haben. Das hilft z.B. dabei, festzustellen, ob es Duplikate gibt.

Im oberen Bereich des Navigationsfensters, sind alle Units und einige
andere Design-Elemente aufgelistet, die für alle Units relevant sind:

-   System-Klassen  
    Diese Klassen werden in Orange angezeigt und sind für für die
    gesamte Datenbank gültig. Wenn Sie eine solche Klasse bearbeiten
    (z.B. ein [Attribut](attributgruppe-und-attribut) hinzufügen), werden
    Änderungen für alle [Objekte](objekt) der Datenbank übernommen.
    Werden zum Beispiel [Attributgruppen](attributgruppe-und-attribut) oder
    Attribute der [Klasse](klasse) "Diagramm" in der oberen Unit
    angelegt, dann werden sie automatisch in allen Diagramm-Klassen
    aller Units sichtbar. Die Vererbungsfunktionalität für Strukturen
    der Designelemente ist analog zur Vererbung der Objekte im
    [Repository](repository-de) gehalten.
-   Tag-Klassen  
    Unter dem Punkt Tag-Klassen, kann man die Systemklasse Tag um
    Attributgruppen bzw. Attribute erweitern oder neue Tag-Klassen
    anlegen. Siehe dazu: [Tags](tags-de)
-   Farbeinstellungen  
    Hier können Sie neue Regeln anlegen, die die Darstellungsfarben von
    Attributen im Repository bestimmen; siehe: [Einfärben von
    Datenfeldern](einfaerben-von-datenfeldern)
-   Verknüpfungsregeln  
    Hier wird eine Tabelle angezeigt, welche Verknüpfungstypen für
    Verknüpfungen welcher Klassen verwendet werden und welche
    Verknüpfungstechnologie dabei aktiviert ist. Man kann hier auch eine
    neue Verknüpfung zwischen zwei Klassen erstellen.
-   Abfrageklassen  
    Hier können Sie Klassen für den [QueryBuilder](QueryBuilder)
    erstellen, umbenennen oder auch löschen.

Im unteren Bereich des Navigationsfensters, sehen Sie folgende per Unit
gruppierte Elemente:

-   Daten-Ast  
    Dem Daten-Ast jeder Unit, sind alle Objekt-Klassen dieser Unit
    zugeordnet. Sie enthalten jeweils Attributgruppen und jede
    Attributgruppe enthält die dazugehörigen Attribute. Vom Benutzer
    angelegte Klassen, Attributgruppen und Attribute, werden in Blau
    angezeigt.
-   Diagramm-Ast  
    Hier werden Diagramm-Klassen mit deren Attributgruppen und
    Attributen aufgelistet.
-   System-Klassen  
    Unter System-Klassen befinden sich vom System angelegte Klassen, die
    nur begrenzt bearbeitet werden können. Die beiden Systemklassen
    Allgemeines Diagramm und Allgemeines Objekt sind in jeder Unit
    verfügbar und lassen sich spezifisch für diese verändern. In der
    Klasse Allgemeines Objekt können Sie z.B. eine Attributgruppe oder
    ein Attribut anlegen, die als Systemeintrag in allen anderen Klassen
    dieser Unit (und deren Child Units) sichtbar sein werden. Für die
    Klasse Allgemeines Diagramm können ebenfalls solche Attributgruppen
    und Attribute angelegt werden.

-   Validierungs-Skripte  
    Unter dem Punkt Validierungs-Skripte können frei definierbare Regeln
    für die Validierung von Diagramm en erstellt werden. Diese Skripte
    können, abhängig von der in der jeweiligen Unit verwendeten Methode,
    Unit-spezifisch sein.
-   Verknüpfungs-Typen  
    Die verfügbaren Verknüpfungs-Typen können hier definieren und
    verwalten. Diese werden für die gesamte Datenbank angelegt (nicht
    Unit-spezifisch) und beschreiben die Relationen zwischen Objekten
    zweier Klassen. Daher ist auch bei der Auswahl der
    Verknüpfungs-Technologie die Angabe eines Verknüpfungs-Typs zwingend
    erforderlich. Siehe: [Verknüpfungen](verknüpfungen)

![](//images.ctfassets.net/utx1h0gfm1om/3BtnRxJeF2CuOs6a0eIM86/946f2c733c4f9366555bf849c88a8f2c/1017686.png)

*Der Database Designer*



![](//images.ctfassets.net/utx1h0gfm1om/1kKOBkRdzmWeSqA2uYSQmM/2941b98d3a5ad7c43e5f41981afc06f8/1018668.png)

*Liste der [Verknüpfungsregeln](verknüpfungen)*

#### Anzeigefenster

Das Anzeigefenster im Designer ist analog zum Objektfenster im
Repository gehalten. Für eine detailliertere Beschreibung siehe:
[Repository-Objektfenster](repository-de)

### Designer-Funktionen

#### Anlegen/Bearbeiten eines Designelements

Designelemente lassen sich entweder über die Symbolleiste oder über das
Kontextmenü anlegen und/oder bearbeiten. Verwenden Sie zur Bearbeitung
die Schaltfläche Attribute bzw. zum Anlegen eines neuen Designelements
den Button Neu in der Symbolleiste bzw. im Kontextmenü.

Siehe dazu auch: [Klasse](klasse) sowie [Attributgruppe &
Attribut](attributgruppe-und-attribut)

#### Ausschneiden, Kopieren & Einfügen

So wie Repository-Objekte, können auch Designelemente (Klassen,
Attributgruppen und Attribute) innerhalb von Units, zwischen Units und
sogar zwischen Datenbanken kopiert, ausgeschnitten und eingefügt werden.
Die speziellen Funktionen Kopieren nach, Verschieben nach, Kopieren
spezial und Einfügen spezial, können genauso wie im Repository verwendet
werden. Wenn Sie eine Klasse in eine andere Unit verschieben möchten,
werden Objekte dieser Klassen auch mitverschoben. Es ist auch möglich,
Units auszuschneiden oder zu kopieren und dann an einem beliebigen Platz
der Unit-Hierarchiestruktur einzufügen (nur die oberste Unit kann nicht
ersetzt bzw. verschoben werden). Alle Objekte und Diagramme werden dabei
ebenfalls kopiert bzw. verschoben.

Für alle weiteren Details zu diesem Thema, siehe: [Ausschneiden,
Kopieren, Einfügen & Spezial](ausschneiden-kopieren-einfuegen-und-spezial)

#### Bearbeiten mit F2

Sie können die Namen von Klassen und Attributgruppen im Baum im Designer
mit Hilfe der Taste F2 oder durch 2-maliges Klicken (kein Doppelklick)
bearbeiten. Voraussetzungen dafür sind, dass die Units zuvor gesperrt
wurden oder die Option "Erlaube Bearbeiten ohne Sperren (des Designers)"
aktiviert ist
(siehe: [Datenbank-Einstellungen](datenbank-einstellungen))
und Sie Bearbeiten- sowie Design-Rechte für die jeweilige Unit haben.
Folgende Namen können so bearbeitet werden:

-   [Units](unit-de)
-   sämtliche [Klassen](klasse)
-   [Attributgruppen](attributgruppe-und-attribut)

#### Designelemente sperren & entsperren

Siehe: [Sperren und entsperren von
Designelementen](sperren-und-entsperren-von-designelementen)

#### Designelemente löschen

Wenn Sie ein vorhandenes Designelement im Designer löschen wollen, gehen
Sie wie folgt vor:

1.  Wählen Sie mit der linken Maustaste das Objekt im rechten
    Tabellenfenster (wahlweise: Auswahl mehrerer aufeinanderfolgender
    Objekte mit gedrückter Hochstelltaste bzw. Auswahl einzelner Objekte
    mit der Strg-Taste.
2.  Klicken Sie auf die Funktion Löschen, entweder im Kontextmenü oder
    auf der Symbolleiste.

Bitte beachten Sie:

-   Sie können nur jene Designelemente löschen, für die Ihnen diese
    Funktion vom System angeboten wird.
-   Bei Designelementen, die bereits auf Diagrammen verwendet wurden und
    darum Einträge im Repository haben, erscheint ein Warnhinweis, der
    diese Objekte auflistet. Sie können das Löschen (inklusive
    Entfernung aller Objekt-Referenzen) bestätigen oder ablehnen.
-   Bei Designelementen, die bereits verwendet werden und die außerdem
    auch noch Verknüpfungen zwischen Objekten von anderen
    Designelementen haben, wird Ihnen eine Warnung vor dem Löschen
    ausgegeben, damit Sie das Löschen ggf. noch rückgängig machen
    können.


<hr style="padding-top:2rem" />
<a href="https://github.com/process4/docs/issues" target="_blank" class="bgw btn btn-primary btn-lg shadow-sm">Report an issue</a>
<a href="https://github.com/process4/docs" target="_blank" class="bgw btn btn-primary btn-lg shadow-sm" style="margin-left:10px;">View source code</a>
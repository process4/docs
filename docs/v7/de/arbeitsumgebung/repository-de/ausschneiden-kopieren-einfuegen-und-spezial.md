-   [Detailbeschreibung](#detailbeschreibung)
    -   [Kopieren/Ausschneiden/Einfügen innerhalb einer Datenbank](#kopierenausschneideneinfügen-innerhalb-einer-datenbank)
    -   [Kopieren/Ausschneiden/Einfügen zwischen zwei
        Datenbanken](#kopierenausschneideneinfügen-zwischen-zwei-datenbanken)
-   [Spezialfunktionen](#spezialfunktionen)
    -   [Kopieren spezial](#kopierenspezial)
    -   [Anmerkungen](#anmerkungen)


Sie können die von Microsoft Office gewohnten Funktionen Ausschneiden,
Kopieren und Einfügen innerhalb einer Unit, zwischen Units und sogar
zwischen verschiedenen Datenbanken (bei 2 geöffneten
process4.biz-Instanzen) verwenden.

Wenn Sie ein [Objekt](objekt) (oder ein [Diagramm](diagramm) mit
Objekten) kopieren und in die Datenbank (oder in eine [Unit](unit-de))
einfügen wollen, wird die [Klasse](klasse) des einzufügenden Objekts
automatisch angelegt, sollte es diese noch nicht vorhanden sein.


### Detailbeschreibung

#### Kopieren/Ausschneiden/Einfügen innerhalb einer Datenbank

<table>
<colgroup>
<col style="width: 25%" />
<col style="width: 25%" />
<col style="width: 25%" />
<col style="width: 25%" />
</colgroup>
<thead>
<tr class="header">
<th><p><strong>Aktion</strong></p></th>
<th><p><strong>von Parent- in Child-Unit</strong></p></th>
<th><p><strong>von Child- in Parent-Unit</strong></p></th>
<th><p><strong>zwischen zwei parallelen Units</strong></p></th>
</tr>
</thead>
<tbody>
<tr class="odd">
<td><p><strong>Kopieren/Einfügen (=Kopieren nach)</strong></p></td>
<td><ol>
<li>In der Quell-Unit gibt es keine Änderungen an den Objekten.</li>
<li>In der Ziel-Unit wird das neue (eingefügte) Objekt mit dem neuen Namen (Objektname + Nummer, z.B. Bemerkung 1) erstellt.</li>
<li>Dieses neue (eingefügte) Objekt hat dieselben Objekt- und Diagrammverknüpfungen wie das Ursprungsobjekt.</li>
<li>Dieses neue (eingefügte) Objekt hat eine neue UUID und eine neue ID.</li>
<li>Auf Diagrammen in beiden Units kommen keine Änderungen vor.</li>
</ol></td>
<td><ol>
<li>In der Quell-Unit gibt es keine Änderungen an den Objekten.</li>
<li>In der Ziel-Unit wird das neue (eingefügte) Objekt mit dem neuen Namen (Objektname + Nummer, z.B. Bemerkung 1) erstellt.</li>
<li>Dieses neue (eingefügte) Objekt hat dieselben Objekt und Diagrammver• knüpfungen wie das Ursprungsobjekt.</li>
<li>Dieses neue (eingefügte) Objekt hat eine neue UUID und eine neue ID.</li>
<li>Auf Diagrammen in beiden Units kommen keine Änderungen vor.</li>
<li>Wenn die Klasse des kopierenden Objektes nicht in der Ziel-Unit vorhanden ist, wird die Klasse nach dem Einfügen in die Ziel-Unit verschoben. Die Unit-Angehörigkeit der Objekte ändert sich nicht.</li>
</ol></td>
<td><ol>
<li>In der Quell-Unit gibt es keine Änderungen an den Objekten.</li>
<li>In der Ziel-Unit wird das neue (eingefügte) Objekt mit demselben Namen erstellt.</li>
<li>Dieses neue (eingefügte) Objekt hat dieselben Verknüpfungen, wie das Ursprungs objekt.</li>
<li>Dieses neue (eingefügte) Objekt hat einen neuen UUID und einen neuen ID.</li>
<li>Auf Diagrammen in beiden Units kommen keine Änderungen vor.</li>
<li>Wenn die Klasse des kopierenden Objektes nicht in der Parallel-Unit vorhanden ist, wird die Klasse nach dem Einfügen in die obere Unit verschoben, die für diese beiden Units die Parent-Unit ist.</li>
</ol></td>
</tr>
<tr class="even">
<td><strong> Ausschneiden/Einfügen (=Verschieben nach)</strong></td>
<td><ol>
<li>Das Quell-Objekt verschwindet von der Quell-Unit.</li>
<li>Das (verschobene) Objekt wird mit denselben Attributen wie das Ursprungsobjekt (Name, Verknüpfungen, UUID) aber mit einer neuen ID in der Ziel-Unit erstellt.</li>
<li>Dieses neue (eingefügte) Objekt hat dieselben Verknüpfungen, wie das Ursprungsobjekt.</li>
<li>Anstatt des ausgeschnittenen Objektes, wird auf allen Diagrammen das neue (verschobene) Objekt verwendet</li>
</ol></td>
<td><ol>
<li>Das Quell-Objekt verschwindet von der Quell-Unit.</li>
<li>Das (verschobene) Objekt wird mit denselben Attributen wie das Ursprungsobjekt (Name, Verknüpfungen, UUID) aber mit einem neuen ID in der Ziel-Unit erstellt.</li>
<li>Anstatt des ausgeschnittenen Objektes, wird auf allen Diagrammen das neue (verschobene) Objekt verwendet</li>
<li>Wenn die Klasse des kopierenden Objektes nicht in der Ziel-Unit vorhanden ist, wird die Klasse nach dem Einfügen in die Ziel-Unit verschoben. Die Unit-Angehörigkeit der Objekte ändert sich nicht.</li>
</ol></td>
<td><ol>
<li>Das Quell-Objekt verschwindet von der Quell-Unit.</li>
<li>In der Ziel-Unit wird das neue Objekt mit demselben Namen erstellt.</li>
<li>Dieses neue (eingefügte) Objekt hat dieselben Verknüpfungen, wie das Ursprungsobjekt.</li>
<li>Dieses neue (eingefügte) Objekt hat einen neuen UUID und einen neuen ID.</li>
<li>Geister-Shapes erscheinen auf Diagrammen in der Quell-Unit, weil das Objekt dort ausgeschnitten, d.h. entfernt wurde.</li>
<li>Wenn die Klasse des kopierenden Objektes nicht in der Parallel-Unit vorhanden ist, wird die Klasse nach dem Einfügen in die obere Unit verschoben, die für diese beiden Units die Parent-Unit ist.</li>
</ol></td>
</tr>
</tbody>
</table>

#### Kopieren/Ausschneiden/Einfügen zwischen zwei Datenbanken

<table>
<colgroup>
<col style="width: 25%" />
<col style="width: 25%" />
<col style="width: 25%" />
<col style="width: 25%" />
</colgroup>
<thead>
<tr class="header">
<th><strong>Aktion</strong></th>
<th><p><strong>Ziel-Klasse mit demselben Namen, selber UUID und selber ID ist in der Ziel-Unit vorhanden</strong></p></th>
<th><p><strong>Ziel-Klasse ist in der Ziel-Unit nicht vorhanden</strong></p></th>
<th><p><strong>Klasse mit demselben Namen aber anderem UUID und anderem ID ist in der Ziel-Unit vorhanden</strong></p></th>
</tr>
</thead>
<tbody>
<tr class="odd">
<td><p><strong>Kopieren/Einfügen (=Kopieren nach)</strong></p></td>
<td><ol>
<li>In der Quell-Unit gibt es keine Änderungen an den Objekten.</li>
<li>In der Ziel-Unit wird das neue (eingefügte) Objekt mit dem selben Namen erstellt.</li>
<li>Dieses neue (eingefügte) Objekt hat die selben Objekt- und Diagrammverknüpfungen wie das Ursprungsobjekt, wenn diese Objekte und Diagramme in der DB vorhanden sind.</li>
<li>Dieses neue (eingefügte) Objekt hat die selbe UUID aber eine neue ID.</li>
<li>5. Auf Diagrammen in beiden Units kommen keine Änderungen vor.</li>
</ol></td>
<td><ol>
<li>In der Quell-Unit gibt es keine Änderungen an den Objekten.</li>
<li>In der Ziel-Unit wird die neue Klasse und das neue (= eingefügte) Objekt mit demselben Namen erstellt.</li>
<li>Dieses neue (eingefügte) Objekt hat die selben Objekt- und Diagrammverknüpfungen wie das Ursprungsobjekt, wenn diese Objekte und Diagramme in der DB vorhanden sind.</li>
<li>Dieses neue (eingefügte) Objekt hat die selbe UUID aber eine neue ID.</li>
<li>Auf Diagrammen in beiden Units kommen keine Änderungen vor.</li>
</ol></td>
<td><ol>
<li>In der Quell-Unit gibt es keine Änderungen an den Objekten.</li>
<li>In der Ziel-Unit wird die neue Klasse mit einer Nummer als Postfix und das neue (eingefügte) Objekt mit demselben Namen erstellt.</li>
<li>Dieses neue (eingefügte) Objekt hat die selben Objekt- und Diagrammverknüpfungen wie das Ursprungsobjekt, wenn diese Objekte und Diagramme in der DB vorhanden sind.</li>
<li>Dieses neue (eingefügte) Objekt hat die selbe UUID aber eine neue ID.</li>
<li>Auf Diagrammen in beiden Units kommen keine Änderungen vor.</li>
</ol></td>
</tr>
<tr class="even">
<td><p><strong>Ausschneiden/Einfügen (=Verschieben nach)</strong></p></td>
<td><ol>
<li>Das Quell-Objekt verschwindet von der Quell-Unit.</li>
<li>In der Ziel-Unit wird das neue (eingefügte) Objekt mit demselben Namen erstellt.</li>
<li>Dieses neue (eingefügte) Objekt hat die selben Objekt- und Diagrammverknüpfungen wie das Ursprungsobjekt, wenn diese Objekte und Diagramme in der DB vorhanden sind.</li>
<li>Dieses neue (eingefügte) Objekt hat die selbe UUID aber eine neue ID.</li>
<li>Geister-Shapes erscheinen auf Diagrammen in der Quell-Unit, weil das Objekt dort ausgeschnitten, d.h. entfernt wurde.</li>
</ol></td>
<td><ol>
<li>Das Quell-Objekt verschwindet von der Quell-Unit.</li>
<li>In der Ziel-Unit werden die neue Klasse und das neue (=eingefügte) Objekt mit demselben Namen erstellt.</li>
<li>Dieses neue (eingefügte) Objekt hat dieselben Objekt- und Diagrammverknüpfungen wie das Ursprungsobjekt, wenn diese Objekte und Diagramme in der DB vorhanden sind.</li>
<li>Dieses neue (eingefügte) Objekt hat die selbe UUID aber eine neue ID.</li>
<li>Geister-Shapes erscheinen auf Diagrammen in der Quell-Unit, weil das Objekt dort ausgeschnitten, d.h. entfernt wurde.</li>
</ol></td>
<td><ol>
<li>Das Quell-Objekt verschwindet von der Quell-Unit.</li>
<li>In der Ziel-Unit wird die neue Klasse mit einer Nummer als Postfix und das neue (eingefügte) Objekt mit demselben Namen erstellt.</li>
<li>Dieses neue (eingefügte) Objekt hat dieselben Objekt- und Diagrammverknüpfungen wie das Ursprungsobjekt, wenn diese Objekte und Diagramme in der DB vorhanden sind.</li>
<li>Dieses neue (eingefügte) Objekt hat die selbe UUID aber eine neue ID.</li>
<li>Geister-Shapes erscheinen auf Diagrammen in der Quell-Unit, weil das Objekt dort ausgeschnitten, d.h. entfernt wurde.</li>
</ol></td>
</tr>
</tbody>
</table>

### Spezialfunktionen

Process4.biz bietet unter "Spezial" im Kontextmenü zusätzliche
Funktionen für Ausschneiden, Kopieren und Einfügen an:

-   Kopieren nach: ermöglicht vorab die Auswahl der Ziel-Unit für den
    Kopiervorgang
-   Verschieben nach: Sie können ein Objekt (oder eine Klasse, ein
    Attribut, eine Attributgruppe) dadurch von einer Unit in die andere
    ausgewählte Unit verschieben. Beachten Sie, dass beim
    Aufwärts-Verschieben einer Klasse entlang der Unit-Hierarchie (vom
    Child in die Parent Unit) deren Objekte unverändert an der aktuellen
    Stelle (=in der Child Unit) bleiben.
-   Kopieren spezial: alle mit dem Objekt verknüpften Objekte und deren
    Klassen, sowie das Diagramm, auf dem das Objekt verwendet wird,
    werden kopiert. Bei verknüpften Diagrammen werden alle darauf
    liegenden Objekte mitsamt ihrer Klassen m it kopiert. Alle Objekte
    auf einem zu kopierenden Diagramm werden kopiert, auch wenn die
    dazugehörige Unit nicht kopiert wird.
-   Einfügen spezial: funktioniert in Kombination mit Kopieren spezial.
    Wenn Sie die verknüpften Objekte mit Hilfe von Kopieren spezial
    kopiert haben und danach mittels Einfügen spezial in die Datenbank
    einfügen, können Sie auswählen, ob Objekte, falls diese in der
    Ziel-Unit (oder in der Ziel-Datenbank) schon vorhanden sind,
    dupliziert, aktualisiert oder übersprungen werden sollen. So können
    Sie z.B. Duplikate ganz vermeiden, oder sie durch einen
    Präfix/Postfix unterscheidbar machen.

#### Kopieren spezial

Kopieren spezial/Einfügen spezial zwischen den Units oder Datenbanken
funktioniert wie Kopieren/Einfügen. Die Besonderheiten dieser Funktion
sind hier im Anschluss beschrieben:

**Kopieren speziell/Einfügen speziell zum ersten Mal benutzen** (die mit
dem Objekt verknüpften Daten sind in der Ziel-Unit nicht vorhanden)

1.  In der Quell-Unit bzw. -Datenbank finden keine Änderungen statt.
2.  Das zu kopierende Objekt wird mit den von Ihnen ausgewählten Objekt-
    und Diagrammverknüpfungen kopiert.
3.  Nach dem Klicken von Einfügen oder Einfügen spezial, wird das Objekt
    inkl. aller verknüpften Objekte und Diagramme in die Ziel-Unit bzw.
    -Datenbank eingefügt, vorausgesetzt, diese Objekte sind dort noch
    nicht vorhanden.

**Kopieren speziell/Einfügen speziell zum zweiten+ Mal benutzen** (die
mit dem Objekt verknüpften Daten sind in der Ziel-Unit bereits
vorhanden)

1.  In der Quell-Unit bzw. Datenbank finden keine Änderungen statt.
2.  Das zu kopierende Objekt wird mit den von Ihnen ausgewählten Objekt-
    und Diagrammverknüpfungen kopiert.
3.  Nach dem Klicken von Einfügen speziell erscheint ein Fenster, wo Sie
    auswählen können, was mit den schon vorhandenen Objekten geschehen
    soll. Die verknüpften Objekte und Diagramme, sowie das zu kopierende
    Objekt selbst, können übersprungen, aktualisiert oder dupliziert
    werden.

#### Anmerkungen

1.  Alle oben beschriebenen Funktionen können analog auch auf
    Designelemente ([Unit](unit-de), [Klasse](klasse), [Attributgruppe &
    Attribut](attributgruppe-und-attribut)) angewendet werden. Wenn Sie eine
    Klasse kopieren, werden deren Attributgruppen und Attribute
    ebenfalls mitkopiert. Möchten Sie eine Klasse mit allen
    [Objekten](objekt) kopieren, verwenden Sie am besten die Funktion
    Kopieren speziell. Wenn Sie eine Klasse ausschneiden, wird sie mit
    allen Attributen, aber auch Objekten ausgeschnitten und anschließend
    eingefügt. Dasselbe gilt auch für Kopieren/Ausschneiden einer Unit,
    die mit allen Klassen, Attributgruppen,
    Attributen, [Verknüpfungs-Typen](verknüpfungen) und Objekten in eine
    beliebige Hierarchieebene eingefügt werden kann.
2.  Ausschneiden/Kopieren/Einfügen von Designelementen (Units, Klassen,
    Attributgruppen, Attribute, Verknüpfungs-Typ) ist erst dann möglich,
    wenn die entsprechende Unit gesperrt ist und der Benutzer
    Design-Berechtigungen für die Unit hat.
3.  Wenn Objekte einer [Klassen](klasse) in mehreren hierarchisch
    angelegten Units erstellt wurden und Sie diese Klasse von einer
    Grand-Parent-Unit in eine Parent-Unit verschieben, werden Objekte
    von der Child-Unit in der Child-Unit bleiben und nicht verschoben.
4.  Das Kopieren/Einfügen von Objekten aus einer [Klasse](klasse) in
    eine andere Klasse ist nicht möglich.
5.  Das Kopieren von Objekten ist nur innerhalb einer [Klasse](klasse)
    möglich, die in verschiedenen Units als vererbt angezeigt wird, d.
    h. innerhalb einer Klasse mit der gleichen UUID.
6.  Wenn Sie ein Diagramm kopieren, wird es zusammen mit [Schablone und
    Vorlage](shapes-stencils-und-templates-de), sowie mit allen darauf
    liegenden [Objekten](objekt) kopiert. Wenn die [Klassen](klasse)
    dieser Objekte in der Ziel-[Unit](unit-de) oder -Datenbank nicht
    vorhanden sind, werden sie automatisch angelegt.
7.  Kopieren/Ausschneiden/Einfügen kann auch für Objekte auf Diagrammen
    verwendet werden. Wenn Sie ein Objekt vom Diagramm ausschneiden,
    können Sie auswählen, ob das Objekt nur vom Diagramm oder auch aus
    der Datenbank gelöscht werden soll. Wird das Objekt aus der
    Datenbank gelöscht und anschließend wieder eingefügt, so wird es als
    neu markiert. Alle Attribute, Objekt- und Diagrammverknüpfungen
    sowie UUID bleiben identisch. Nur die ID ändert sich gegenüber dem
    ausgeschnittenen Objekt.
8.  Wenn Sie keine Berechtigung besitzen, Objekte in einer bestimmten
    Unit zu erstellen oder zu ändern, können Sie Objekte zwar kopieren,
    aber nicht ausschneiden oder einfügen.
9.  Wenn man einen [Verknüpfungs-Typ](verknüpfungen) kopiert, werden
    auch zugehörige Verknüpfungs-Technologien kopiert und in die
    Ziel-Datenbank hinzugefügt (falls entsprechende Klassen vorhanden
    sind).
10. Wenn Sie einen Verknüpfungs-Typ mit einer Assoziationsklasse in eine
    andere Datenbank kopieren, dann wird die Assoziationsklasse
    ebenfalls in die andere Datenbank kopiert (alle
    [Verknüpfungs-Technologien und -Typen](verknüpfungen) werden
    kopiert).
11. Wenn Sie aber eine Klasse mit einem Verknüpfungs-Typ oder einem
    Verknüpfungs-Technologien-Regelsatz in eine andere Datenbank
    kopieren, dann wird nur die Klasse selbst eingefügt und verfügt auch
    in der Zieldatenbank nur über jene [Verknüpfungs-Technologien und
    -Typen](verknüpfungen), welche in der Datenbank bereits gleichwertig
    vorhanden sind.


<hr style="padding-top:2rem" />
<a href="https://github.com/process4/docs/issues" target="_blank" class="bgw btn btn-primary btn-lg shadow-sm">Report an issue</a>
<a href="https://github.com/process4/docs" target="_blank" class="bgw btn btn-primary btn-lg shadow-sm" style="margin-left:10px;">View source code</a>
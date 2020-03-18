-   [Direct (direkte Verknüpfung)](#direct-direkte-verknüpfung)
-   [Indirect (indirekte Verknüpfung)](#indirect-indirekte-verknüpfung))
-   [Swimlane](#swimlane)
    -   [Stapeln aller Shapes](#stapeln-aller-shapes)
-   [XY](#xy)
-   [RACI](#raci)
-   [Drag & drop](#drag--drop)
    -   [Nur Verknüpfung](#nur-verknüpfung)
-   [Intersection (Überschneidung)](#intersection-überschneidung)
-   [Containment (Umschließung)](#containment-umschließung)
-   [X-Technologie](#x-technologie)
-   [Y-Technologie](#y-technologie)
-   [Manual](#manual)
-   [Custom](#custom)
-   [VisioCallout](#visiocallout)
-   [VisioContainer](#visiocontainer)

------------------------------------------------------------------------

Dieser Artikel beschreibt die einzelnen in process4.biz verfügbaren
Verknüpfungstechnologien, die zusammen mit
[Verknüpfungstypen](verknüpfungstypen) in
[Verknüpfungsregeln](verknüpfungsregeln) verwendet werden.

Es können zudem auch [Bedingungen für Verknüpfungsregeln](bedingungen-für-verknüpfungsregeln), sowie [Validierungsskripte zur (Methodenüberprüfung)](validierungsskripte)
hinterlegt werden.

### Direct (direkte Verknüpfung)

Werden zwei [Objekte](objekt) mit einem Verbinder direkt miteinander
verbunden, erzeugt dies dann automatisch eine entsprechende
Objektverknüfung in der Datenbank.

Das Ankleben des Verbinders an einem Verbindungspunkt zuerst des einen
und dann des anderen Objekts, erzeugt die von-zu Beziehung in der
Datenbank. Dabei spielt es eine Rolle, ob auf dem [Diagramm](diagramm)
der Verbinder selbst als Linie, als beidseitiger Pfeil, oder als Pfeil
mit Spitze in die eine oder andere Richtung dargestellt wird: im ersten
Fall, wird die Richtung "beide" (= "von" und "zu") gesetzt und im
zweiten Fall "zu" oder "von", je nachdem in welche Richtung die Spitze
zeigt.

In der Demo-Datenbank: weisen Sie im Zuge der Aktivierung dieser
Technologie den entsprechenden [Klassen](klasse) im [Database
Designer](database-designer-de) den [Verknüpfungstyp](verknüpfungstypen)
"verlinkt zu/verlinkt von" zu.  
Wenn Sie möchten, dass sich die Verbindungsrichtung zwischen zwei
unterschiedlichen Klassen entsprechend der Änderung der Pfeilrichtung
anpasst, sollten Sie die entsprechenden Klassen jeweils mit den beiden
Verknüpfungstypen "verlinkt zu" und "verlinkt von" direkt miteinander
verknüpfen.

Für Anwendungsbeispiele zu der hier beschriebenen
Verknüpfungstechnologie, siehe [Beispiel zur Direkten
Verknüpfungstechnologie](beispiel-zur-direkten-verknüpfungstechnologie).

### Indirect (indirekte Verknüpfung)

Zwei Objekte sind "indirekt" mittels mehrerer Verbinder über ein
Entscheidungsobjekt miteinander verbunden.

Diese Konstellation erzeugt automatisch eine Objektverknüpfung des
gewählten Verknüpfungstyps zwischen den beiden Objekten, ohne dass alle
Verknüpfungen mit dem Entscheidungsobjekt explizit einzeln registriert
werden - es werden sozusagen alle einzelnen Verbinder zwischen den
Objekten als ein gemeinsamer Gesamtverbinder gewertet. Das logische
Element (bzw. jedes Objekt der process4.biz Datenbank zwischen Objekten
indirekt verknüpfter Klassen), wird dabei als Assoziationsobjekt
ebenfalls gespeichert.

Wenn Sie die Assoziationsklasse dieser Objektrelation gezielt bestimmen
möchten, sollte diese zuvor über den Verknüpfungstyp, den Sie
anschließend im Rahmen der indirekten Verknüpfungstechnologie zuweisen
können, definiert werden.

Für Anwendungsbeispiele zu der hier beschriebenen
Verknüpfungstechnologie, siehe [Beispiel zur Indirekten
Verknüpfungstechnologie](beispiel-zur-indirekten-verknüpfungstechnologie).

### Swimlane

Wenn zwei [Objekte](objekt) (vollständig oder teilweise überlappend) auf
einem [Diagramm](diagramm) übereinander liegen, erzeugt diese
Konstellation eine automatische Objektverknüpfung dieses Typs zwischen
den beiden Objekten. Eine kleine Überlappung der Fläche reicht damit
bereits aus, um eine Verknüpfung herstellen zu können.

Für Anwendungsbeispiele zu der hier beschriebenen
Verknüpfungstechnologie, siehe [Beispiel zur
Schwimmbahnen-Technologie](beispiel-zur-schwimmbahnen-technologie).

#### Stapeln aller Shapes

Wenn mehrere [Shapes](shapes-stencils-und-templates-de) übereinander liegen
bzw. gestapelt sind, kann mit dieser Option entschieden werden, ob die
Verknüpfung zwischen all diesen Shapes (= "Wahr"), oder nur jeweils für
sich direkt überlagernde bzw. berührende Shapes (= "Falsch") erstellt
werden soll.

Falls ein solcher Shape-Stapel aus Objekten mehrerer Klassen besteht,
sollte für jede mögliche Kombination dieser [Klassen](klasse) (unter
Verwendung der Swimlane-Technologie) eine entsprechende
[Verknüpfungsregel](verknüpfungsregeln) definiert werden, um ungewollte
bzw. doppelte Verknüpfungen der beteiligten Objekte auszuschließen.


![](//images.ctfassets.net/utx1h0gfm1om/3QvCG86wHSyeegq006aQMs/2884cd6db9bfdfee899ad6adbc730efb/1017831.png)

*Auswahl der Verknüpfungstechnologie beim Anlegen einer neuen
[Verknüpfungsregel](verknüpfungsregeln)*

### XY

Objekte aus Klassen, für die diese Technologie aktiviert ist, werden auf
dem [Diagramm](diagramm) entlang der horizontalen X-Achse (horizontal
von links nach rechts) und der vertikalen Y-Achse (vertikal von unten
nach oben) analysiert. Wenn sich dann andere Objekte in der so
erschaffenen "Fläche" (entlang der X- und Y-Achse der Ausgangsobjekte)
befinden, wird eine automatische Verknüpfung erstellt.

Diese Technologie wird hauptsächlich für das Enterprise Architecture
Management verwendet, um Wertschöpfungsketten mit darunter liegenden
unterstützenden Applikationen abzubilden.

Für Anwendungsbeispiele zu der hier beschriebenen
Verknüpfungstechnologie, siehe [Beispiel zur
XY-Technologie](beispiel-zur-xy-technologie).

### RACI

Die RACI-Matrix ist eine Spezialform der Verantwortlichkeitsmatrix, bei
der es vier Arten von Zuständigkeiten gibt:

<table>
<colgroup>
<col style="width: 33%" />
<col style="width: 33%" />
<col style="width: 33%" />
</colgroup>
<thead>
<tr class="header">
<th> </th>
<th>Steht für</th>
<th>Bedeutung</th>
</tr>
</thead>
<tbody>
<tr class="odd">
<td><p>R</p></td>
<td><p><em>Responsible</em></p></td>
<td><p>verantwortlich im disziplinarischen Sinne</p></td>
</tr>
<tr class="even">
<td><p>A</p></td>
<td><p><em>Accountable</em></p></td>
<td><p>verantwortlich aus Kostenträger- oder Kostenstellensicht</p></td>
</tr>
<tr class="odd">
<td><p>C</p></td>
<td><p><em>Consulted</em></p></td>
<td><p>verantwortlich in fachlicher Hinsicht</p></td>
</tr>
<tr class="even">
<td><p>I</p></td>
<td><p><em>Informed</em></p></td>
<td><p>benötigt die Information für andere Verantwortlichkeiten</p></td>
</tr>
</tbody>
</table>

[Objekte](objekt) aus [Klassen](klasse), für die diese Technologie
verwendet wird, werden auf einer gedachten X-Achse (horizontal von links
nach rechts) analysiert. Sollten sich zwei dieser RACI-Objekte auf der
selben Horizontalen befinden, wird eine automatische Verknüpfung
zwischen den beiden Objekten hergestellt (auch, wenn andere Objekte
dazwischen liegen). Gleichzeitig werden zu anderen definierten Objekten
(z.B.: "R", "A", "C" & "I"), die z.B. als 90° Grad gedrehte senkrechte
Schwimmbahn rechts die X-Achse der RACI-Objekte kreuzen, ebenfalls
automatisch Relationen erstellt. Diese Relationen, erfolgen dabei als
Einträge vom [Verknüpfungstyp](verknüpfungstypen) RACI und mit den
entsprechenden Assoziationsobjekten der Klasse RACI.

Durch Verwendung dieser Technologie lassen sich 3-fach
Objektverknüpfungen automatisch erstellen. Zum Beispiel können Objekte
die eine Aktivität beschreiben mit einer Funktion (Stelle oder Rolle)
verknüpft werden, welcher gleichzeitig der Umfang Ihrer
Verantwortlichkeit nach RACI zugeordnet wird.

Für Anwendungsbeispiele zu der hier beschriebenen
Verknüpfungstechnologie, siehe [Beispiel zur
RACI-Technologie](beispiel-zur-raci-technologie).

### Drag & drop

Diese Technologie erlaubt es Ihnen, [Objekte](objekt) auf einem
[Diagramm](diagramm) manuell zu verknüpfen, indem Sie ein Objekt aus
dem [Little Repository](graphical-visio-modeler)
auf ein anderes Objekt auf dem Diagramm ziehen und dabei die Shift-Taste
gedrückt halten.

Sofern eine [Verknüpfungsregel](verknüpfungsregeln) für diese
Technologie definiert ist, werden also Objekte, die man mit &lt;Shift +
Drag & Drop&gt; aufeinander zieht, manuell miteinander verknüpft. Das
Fenster zur näheren Bestimmung der Objektverknüpfungen erscheint dabei
nicht.

Wenn keine Verknüpfungsregel für diese Technologie definiert ist, wird
keine manuelle Verknüpfung erstellt.

Siehe dazu auch: [Objekte manuell verknüpfen](objekte-manuell-verknüpfen)

#### Nur Verknüpfung

Dieses Attribut steht nur dann zur Verfügung, wenn Drag & drop als
Verknüpfungstechnologie gewählt wurde.

Wenn der Wert des Attributs auf "Falsch" gesetzt ist (Standardwert),
wird das jeweilige Objekt, das aus dem Little Repository herausgezogen
wurde, auch tatsächlich auf dem Diagramm Platziert. Andernfalls (auf
"Wahr" gesetzt), wird nur eine Verknüpfung zwischen den Objekten
hergestellt, aber kein neues Shape auf dem Diagramm platziert.

### Intersection (Überschneidung)

Bei Verwendung dieser Verknüpfungstechnologie, werden [Objekte](objekt)
nur dann verknüpft, wenn sie sich überschneiden.

<div class="info">
  
  Das bedeutet, dass sich die Rahmen bzw. Ränder der
jeweiligen Objekte kreuzen = überschneiden müssen, damit diese
Verknüpfung registriert wird.
</div>

### Containment (Umschließung)

Bei Verwendung dieser Verknüpfungstechnologie, werden [Objekte](objekt)
nur dann verknüpft, wenn ein Objekt (oder mehrere Objekte) innerhalb des
Rahmens bzw. Randes eines anderen Objekts platziert wird, es also von
diesem anderen Objekt umschlossen wird.

<div class="info">

Funktioniert nicht, wenn sich die Ränder der beteiligten
Objekte berühren oder kreuzen.
</div>

### X-Technologie

[Objekte](objekt) aus [Klassen](klasse), für die diese Technologie
verwendet wird, werden auf dem Diagramm entlang der horizontalen X-Achse
(horizontal von links nach rechts) analysiert. Sobald sich andere
Objekte aus der Zielklasse der [Verknüpfungsregel](verknüpfungsregeln)
entlang dieser X-Achse befinden, wird eine automatische Verknüpfung
erstellt.

### Y-Technologie

[Objekte](objekt) aus [Klassen](klasse), für die diese Technologie
verwendet wird, werden auf dem Diagramm entlang der vertikalen Y-Achse
(vertikal von unten nach oben) analysiert. Sobald sich andere Objekte
aus der Zielklasse der [Verknüpfungsregel](verknüpfungsregeln) entlang
dieser Y-Achse befinden, wird eine automatische Verknüpfung erstellt.

### Manual

Diese Technologie erlaubt eine manuelle Verknüpfung
von [Objekten](objekt) unabhängig von Ihrer Platzierung auf einem
[Diagramm](diagramm). Sie können ein Objekt mit einem anderen über das
[Eigenschafts-Fenster](eigenschaften-dialogfenster) verknüpfen. 

Siehe dazu auch: [Objekte manuell verknüpfen](objekte-manuell-verknüpfen)

### Custom

Diese Verknüpfungstechnologie erlaubt es, durch Formeln bzw. Skripte,
eine eigene Art und Weise, wie Objekte auf Diagrammen verknüpft werden
sollen, zu definieren.

Für Anwendungsbeispiele zu der hier beschriebenen
Verknüpfungstechnologie, siehe [Beispiel zur Kundenindividuellen
Technologie](beispiel-zur-kundenindividuellen-technologie).

### VisioCallout

Die VisioCallout-Technologie, funktioniert für die Visio
Legenden-Shapes. Wenn diese Verknüpfungstechnologie für
die [Klassen](klasse) "A" und "B" aktiviert ist,
werden [Objekte](objekt) dieser Klassen miteinander verknüpft, wenn das
Objekt "B" ein Legenden-Shape für "A" ist.

Für Anwendungsbeispiele zu der hier beschriebenen
Verknüpfungstechnologie, siehe [Beispiel zum VisioCallout
(Legende)](beispiel-zum-visiocallout-legende).

### VisioContainer

Die VisioCallout-Technologie, funktioniert für die Visio
Container-Shapes. Verknüpfungstechnologie für die [Klassen](klasse) "C"
und "D" aktiviert ist, werden [Objekte](objekt) dieser Klassen
miteinander verknüpft, wenn "D" ein Container-Shape ist, welches das
Objekt "C" enthält.

Für Anwendungsbeispiele zu der hier beschriebenen
Verknüpfungstechnologie, siehe [Beispiel zum
VisioContainer](beispiel-zum-visiocontainer).


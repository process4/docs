-   [Definition](#definition)
    -   [Bedingung](#bedingung)
    -   [Inkludiere in Textsuche](#inkludiere-in-textsuche)
    -   [Zeigen im Tootlip](#zeigen-im-tootlip)
    -   [Zeilenanzahl](#zeilenanzahl)
-   [Genehmigungsmanagement](#genehmigungsmanagement)
-   [Beschreibung](#beschreibung)
    -   [Beschreibung](#beschreibung-1)
-   [Visio](#visio)
    -   [Shape-spezifisch](#shape-spezifisch)
    -   [Ist ein Mastershape](#ist-ein-mastershape)
    -   [Visio Shape's Ziel-Zelle](#visio-shapes-ziel-zelle)
    -   [Visio Werteabgleich-Modus](#visio-werteabgleich-modus)
    -   [Synchronisation](#synchronisation)
    -   [Zuordnen p4b-ENUM zu Visio FixedList](#zuordnen-p4b-enum-zu-visio-fixedlist)
    -   [Erlaube FixedList Aktualisierung](#erlaube-fixedlist-aktualisierung)
-   [Validation](#validation)
-   [Webpublikation](#webpublikation)
    -   [Anzeigen im Web Publisher](#anzeigen-im-web-publisher)
    -   [Aktiviere für die "Attribute-Suche"](#aktiviere-für-die-attribute-suche)
-   [Administration](#administration)
    -   [Editierbar/Sichtbar](#editierbarsichtbar)
    -   [Sichtbar in Link Matrix](#sichtbar-in-link-matrix)
    -   [Standardmäßig zugeklappt](#standardmäßig-zugeklappt)
-   [Systemattribute automatisch anlegen](#systemattribute-automatisch-anlegen)
    -   [Tags](#tags)
    -   [Deaktivieren für Webpublizieren](#deaktivieren-für-webpublizieren)
    -   [Publizieren: E-Mail-Feedback](#publizieren-e-mail-feedback)
    -   [Shape: Geometrie (x, y, w, h) und Shape: Diagramm](#shape-geometrie-x-y-w--h-und-shape-diagramm)
    -   [Zeitachsen-Attribute](#zeitachsen-attribute)
    -   [Orgchart: Positionstyp](#orgchart-positionstyp)
    -   [SureStep](#surestep)


Folgend eine Übersicht der Systemattribute nach Attributgruppe
gegliedert.

Ergänzt die Basis-Vorgangsweise zum [Anlegen eines Attributs](anlegen-eines-attributs).

Siehe dazu auch: [Systemattribute für Diagramme](systemattribute-für-diagramme)

### Definition

#### Bedingung

Siehe dazu: [Bedingungen](bedingungen)

#### Inkludiere in Textsuche

Inkludiert das Attribut systemweit in der
[Suchfunktion](suchen-und-filtern).

#### Zeigen im Tootlip

Zeigt das Attribut bei Mouse-Over auf ein
[Shape](shapes-stencils-and-templates-de) als Visio-Tooltip bzw. Tooltip in der
[Web-Publikation](webpublisher-de) an.

<div class="info">

Visio-Tooltips müssen separat in den
[Datenbank-Einstellungen](datenbank-einstellungen) aktiviert werden.

</div>

#### Zeilenanzahl

Dieses Attribut steht ausschließlich für den Attributtyp "Text" zur
Verfügung und ermöglicht es Ihnen, festzulegen, wie viele Zeilen des
entsprechenden Text-Attributs standardmäßig im
[Eigenschafts-Fenster](eigenschaften-dialogfenster) angezeigt werden
sollen. Standardwert für dieses Attribut sind 4 Zeilen (= bisherige
Größe des Textfelds), der Maximalwert sind 19 Zeilen. Ungültige Werte,
werden automatisch auf den Standardwert "4" gesetzt.

### Genehmigungsmanagement

Falls das [Genehmigungsmanagement](genehmigungsmanagement) für
[Objekte](objekt) aktiviert wurde, stehen hier die entsprechenden
Attribute zur Verfügung.

Siehe dazu im Detail: [Systemattribute für Diagramme](systemattribute-für-diagramme)

### Beschreibung

#### Beschreibung

Ermöglicht es, eine Beschreibung für ein Attribut zu hinterlegen. Diese
(erklärende) Beschreibung des jeweiligen Attributs, wird dann bei dessen
Auswahl im unteren Teil des
[Eigenschafts-Fensters](eigenschaften-dialogfenster) angezeigt.

### Visio

#### Shape-spezifisch

Setzen das Werts auf "Wahr", macht das Attribut shape-spezifisch

Siehe dazu: [Shape-spezifische Attribute](shape-spezifische-attribute)

#### Ist ein Mastershape

Dieses Attribut sollte auf "Wahr" gesetzt werden, wenn Sie [mehrere
Shapes der selben Klasse](zuweisen-von-mehreren-shapes-zur-selben-klasse) zuweisen
möchten. Das Attribut "Ist ein  Mastershape", kann für jeden
[Attributtyp](attributgruppe-und-attribut) gesetzt werden, am sinnvollsten
kann man es aber für die Attributtypen "Enum" und "Formel" verwenden.

#### Visio Shape's Ziel-Zelle

Gibt jene Visio-Zelle (im ShapeSheet eines
[Shapes](shapes-stencils-and-templates-de)) an, in die der Wert des gewählten
Attributs synchronisiert wird. Diese Funktionalität kann z.B. dazu
verwendet werden, um das gewählte Attribut auf Shapes und/oder Templates
anzuzeigen.

Siehe dazu: [Master-Shapes mit Attributen
ausstatten](erstellen-eines-neuen-master-shapes)
sowie [Erstellen und anpassen von
Templates](erstellen-und-anpassen-von-templates)

#### Visio Werteabgleich-Modus

Dieses Attribut kann einen der folgenden Werte haben:

-   Verwende Shape-Einstellungen: Der Wert wird im Shape-Data-Dialog so
    wie er ist angezeigt (String, Bool, etc.)
-   Verwende Text: Der Wert wird als Text angezeigt, unabhängig davon,
    was im Shape-Data-Dialog definiert wurde
-   Verwende Wert mit Typ: Der Wert wird als eine Reihe angezeigt,
    unabhängig davon, was im Shape-Data-Dialog definiert wurde (kann
    z.B. für Enum- und DateTime-Attribute verwendet werden)

#### Synchronisation

Der [Graphical Visio Modeler](graphical-visio-modeler) kann so
eingestellt werden, dass die [Attribute](attributgruppe-und-attribut) mit
den dazugehörigen Visio-Shape-Daten synchronisiert werden. Das heißt,
dass wenn ein Benutzer Änderungen an den Daten in Visio durchführt, in
[process4.biz](http://process4.biz) die Datenänderungen automatisch
ergänzt werden (und umgekehrt). Jedes Attribut, kann damit entweder als
"push"-Wert (=Annahme), oder als "pull"-Wert (=Abfrage) von
Visio-Shape-Daten zum Repository definiert werden.

<div class="info">

Objektattribute werden in den Visio Shape-Daten nur dann
angezeigt, wenn diese im Dialogfenster "Ausstatten des Shapes mit
p4b-Eigenschaften" ausgewählt wurden.

</div>

-   **P4B=&gt;Visio**: der Wert eines Attributs, wird so in das
    dazugehörige Shape-Datenfeld als Wert übernommen. Wenn Sie den Wert
    der Visio-Shape-Daten ändern, wird dies in
    [process4.biz](http://process4.biz) ignoriert.
-   **Visio=&gt;P4B**: Attribute werden read-only sein und können nur im
    Visio-Shape-Daten Fenster geändert werden. Diese Option wird z.B.
    verwendet, um externe Daten einzubinden.
-   **P4B&lt;=&gt;Visio**: der Wert eines Attributs, wird in das
    entsprechende Shape-Datenfeld übernommen und auch umgekehrt wieder
    von dort zurücksynchronisiert.

#### Zuordnen p4b-ENUM zu Visio FixedList


 

![](//images.ctfassets.net/utx1h0gfm1om/6jLppNLXMWcEukUWCCMUUG/f46b3f4bd26a37905f09c5383777f74f/1018011.png)

Aktiviert die Synchronisation von Enum-Attributen mit der Visio
Fixed-List-Eigenschaft.

<div class="error">
<h3> Achtung</h3> 
Diese Einstellung sollte auf "Wahr" gesetzt sein, damit die
P4B/BPMN-Synchronisation richtig funktioniert.

<div class="error">

![](//images.ctfassets.net/utx1h0gfm1om/7GJ2OymQE0qOAYsUgYkMqI/a43464a9492a7f23b1afbb4fb6d1e433/1018010.png)

#### Erlaube FixedList Aktualisierung

Aktiviert die Aktualisierung von Visio der Visio Fixed-List-Eigenschaft
von Enum-Attributen.

### Validation

Siehe dazu: [Attributwerte validieren](attributwerte-validieren)

### Webpublikation

#### Anzeigen im Web Publisher

Wenn das Attribut auf "Wahr" gesetzt wird, wird das Attribut im
Web-Portal in Objekt- und Diagrammeigenschaften angezeigt. Wenn Sie das
Attribut im Web-Portal nicht anzeigen möchten, wählen Sie "Falsch" aus.

#### Aktiviere für die "Attribute-Suche"

Ermöglicht die Suche nach diesem Attribut in der Web-Publikation bzw.
verhindert diese.

### Administration

#### Editierbar/Sichtbar

Für [Klassen](klasse) und [Attribute](attributgruppe-und-attribut), gibt es
die Attribute "Sichtbar" und "Editierbar", für
[Attributgruppen](attributgruppe-und-attribut), gibt es nur das Attribut
"Sichtbar".

<div class="info">

Standardmäßig sind diese Attribute immer auf "Wahr" gesetzt und haben
eine Auswirkung auf das [Repository](repository-de) und den
[WebPublisher](webpublisher-de).

</div>

Wenn man das Attribut "Sichtbar" für eine Klasse, eine Attributgruppe
oder ein Attribut auf "Falsch" setzt, werden diese Elemente im
Repository und im Web-Portal für alle Benutzer unsichtbar gemacht. Wenn
Sie allerdings Attribute auf einem [Shape](shapes-stencils-und-templates-de)
oder einem [Diagramm](diagramm) als Visio-Felder (oder
Visio-Datengrafiken) anzeigen lassen, bleiben solch unsichtbare
Attribute trotzdem (für diese Shapes) sichtbar.

Wenn man das Attribut "Editierbar" für ein Attribut auf Falsch setzt,
wird dieses Attribut im Repository und im Web-Portal für alle Benutzer
schreibgeschützt.

#### Sichtbar in Link Matrix

Über das Attribut "Sichtbar in Link Matrix", lässt sich festlegen, ob
der Wert dieses Attributs in der
[Verknüpfungsmatrix](verknüpfungsmatrix) zusammen mit dem Objektnamen
angezeigt werden soll.

#### Standardmäßig zugeklappt

Im [Eigenschafts-Fenster](eigenschaften-dialogfenster) von
Attributgruppen, gibt es zudem auch noch das Attribut "Zugeklappt
standardmäßig". Wenn Sie dieses Attribut auf "Wahr" setzen, wird diese
Attributgruppe standardmäßig zugeklappt angezeigt.

### Systemattribute automatisch anlegen

Im [Database Designer](database-designer) ist es über das Kontextmenü
einer (System-) [Klasse](klasse) möglich, einige Systemattribute
automatisch anzulegen.


<div class="warning">
<h3>Achtung:</h3>

Wenn automatisch angelegte Systemattribute zuerst zu spezifischen
Klassen hinzugefügt wurden, später aber auch zu den Systemklassen
(Allgemeines Diagramm und Objekt) hinzugefügt werden, kann es zu
Duplikaten dieser Attribute (inkl. ihrer Werte, z.B. vergebene Tags)
kommen.Diese doppelten Attribute, können (unbeding erst nach Prüfung der
Attributwerte der betroffenen Objekte!) ggf. wieder aus den spezifischen
Klassen entfernt werden.
</div>

#### Tags

Dieses Attribut erlaubt es, Metadaten zu Objekten mehrerer Klassen
zuzuordnen.

Siehe dazu: [Tags](tags-de)

#### Deaktivieren für Webpublizieren

Das Attribut ermöglicht es Ihnen, Objekte und Diagramme zu markieren,
die nicht ins WebPortal publiziert werden sollen.

#### Publizieren: E-Mail-Feedback

Dieses Diagramm-Attribut, bietet die Möglichkeit, pro Diagramm eine
Feedback E-Mail-Adresse in der Web-Publikation zu hinterlegen.

![](//images.ctfassets.net/utx1h0gfm1om/5u3pdW3O4EEGCciSi2o42E/6ed156613eadfdb886d3600f1a6e47a0/1017777.png)

*Systemattribute automatisch anlegen*

#### Shape: Geometrie (x, y, w, h) und Shape: Diagramm

Die Attribute "Shape Diagramm", "Shape Höhe", "Shape Breite", "Shape X"
und "Shape Y", sind [Shape-spezifisch](shape-spezifische-attribute) und
enthalten die Information über jedes Shape, das einem [Objekt](objekt)
zugeordnet ist.

-   Das Attribut "Shape Diagramm", zeigt den Namen des Diagramms an, auf
    dem das Shape verwendet wird.
-   Die Attribute "Shape Höhe" und "Shape Breite", zeigen die Höhe und
    Breite des Shapes an.
-   Die Attribute "Shape X" und "Shape Y", zeigen die Koordinaten des
    Shapes (von der linken oberen Ecke des Diagramms aus gemessen) an.

#### Zeitachsen-Attribute

Diese Attribute erlauben es,
[Zeitachsen-Diagramme](zeitachsen-diagramm) zu
erstellen. Sie können die Attribute je nach Bedarf für eine bestimmte
Klasse, für alle Objekte in der Datenbank (über die Systemklasse
Objekt), oder für alle Diagramme (Systemklasse Diagramm) anlegen. Wählen
Sie dazu die Klasse im Designer aus, klicken Sie mit der rechten
Maustaste darauf und wählen Sie unter "Spezielle Attribute" das
gewünschte Attribut aus. Eine Meldung erscheint, um Sie zu informieren,
dass das Attribut angelegt wurde.

#### Orgchart: Positionstyp

Dieses Attribut fügt Organigramm-Attribute zur ausgewählten Klasse hinzu
und ermöglich damit die Verwendung von Organigrammen.

#### SureStep

Dieses Attribut wird für das
[Erweiterungsmodul](process4.biz_Erweiterungsmodule) SureStep verwendet.


-   [Definition](#definition)
-   [Attributtypen](#attributtypen)
    -   [String](#string)
    -   [Text](#text)
    -   [Integer](#integer)
    -   [Double](#double)
    -   [DateTime](#datetime)
    -   [Bool](#bool)
    -   [Enum](#enum)
    -   [Hyperlink](#hyperlink)
    -   [Pfad](#pfad)
    -   [Formel](#formel)
    -   [Verknüpftes Element Selector](#verknüpftes-element-selector)
        -   [Objekttyp Datenobjekt](#objekttyp-datenobjekt)
        -   [Objekttyp Diagramm](#objekttyp-diagramm)
    -   [Benutzer Selektor](#benutzer-selektor)
-   [Mehrfachselektion](#mehrfachselektion)
-   [Attribute im Shape-Kontextmenü anzeigen](#attribute-im-shape-kontextmenü-anzeigen)
    -   [Anmerkungen](#anmerkungen)

### Definition

Was ist eine Attributgruppe?

-   Eine Attributgruppe fasst mehrere Attribute in einer Gruppe zusammen
    und steht hierarchisch zwischen der [Klasse](klasse) und dem
    Attribut.

Was ist ein Attribut?

-   Ein Attribut ist ein beschreibendes Datenfeld für [Objekte](objekt)
    einer [Klasse](klasse). Attribute werden in Attributgruppen
    gegliedert und hierarchisch darunter angelegt.

Attributgruppen und Attribute, werden pro [Klasse](klasse) im [Database
Designer](database-designer-de) verwaltet und können dort in beliebiger
Anzahl und Struktur [angelegt werden](anlegen-eines-attributs).
Attribute können zudem auch
[shape-spezifisch](shape-spezifische-attribute) sein, wodurch
die Attributierung von Objekten auf
[Shape](shapes-stencils-und-templates-de)-Basis ermöglicht wird.

### Attributtypen

Beim [Anlegen eines Attributs](anlegen-eines-attributs) im [Database
Designer](database-designer-de), kann der Attributtyp entsprechend der
Anforderungen für das entsprechende Attribut festgelegt werden. 

Folgende Attributtypen stehen dafür zur Auswahl:

#### String

Der Attributtyp String, ermöglicht einzeiligen Text als Attributwert
(max. 255 Zeichen).

#### Text

Ermöglicht die Eingabe von mehrzeiligem Text. Absätze können mit Strg +
Enter gesetzt werden, Text mit Aufzählungszeichen o.Ä., kann z.B. aus MS
Word eingefügt werden.

#### Integer

Der Attributtyp "Integer", erlaubt ausschließlich eine ganze Zahl
(positiv oder negativ) als Wert.


------------------------------------------------------------------------

![](//images.ctfassets.net/utx1h0gfm1om/4WYLEC4EYwkoCWAKYYoEAu/f527603d0aa31ace1cd6bc9c5fb140c4/1017737.png)

*Ansicht aller Attribute in der Attributgruppe "Definition" der Klasse
"Aktivität" im* *[Database Designer](database-designer-de)*

#### Double

Erlaubt ausschließlich Gleitkomma-Werte als Attributwert.

#### DateTime

Ermöglicht ein Datum, eine Uhrzeit oder die Kombination von Datum und
Uhrzeit als Attributwert.

#### Bool

Erlaubt die Werte "Wahr" und "Faslch" für ein Attribut; wenn keiner
dieser beiden Werte ausgewählt wurde, ist der Wert des Attributs leer =
nicht definiert.

![](//images.ctfassets.net/utx1h0gfm1om/3H3OH8WVZegmY4eiMo6c84/3e4794cc2ee43e4d1f66896270999d16/1017743.png)

*Auswahl des Attributtyps*

#### Enum

Mit diesem Attributtyp, können auswählbare Werte frei definiert werden;
es wird dazu im [Eigenschafts-Fenster](eigenschaften-dialogfenster) des
jeweiligen Attributs ein neuer Reiter namens "Enum-Elemente" angezeigt.
Dort können jene Werte definiert werden, die bei Objekten dieser Klasse
unter diesem Attribut zur Auswahl stehen sollen.

Jedes Enum-Element hat einen DbNamen, der eindeutig ist und nicht von
der Datenbank Sprache abhängt. Für Enum-Elemente ist es zudem auch
möglich, [Bedingungen](bedingungen) zu erstellen. Mit den Schaltflächen
"Nach oben" und "Nach unten", können Sie die Reihenfolge der
Enum-Elemente festlegen. Mit der Schaltfläche "Alle zu-/aufklappen",
können Sie auf einmal alle Enum-Elemente öffnen und wieder schließen.

Wenn mehrere Werte für ein Enum-Attribut gleichzeitig auswählbar sein
sollen, verwenden Sie zusätzlich das Attribut Mehrfachselektion.

#### Hyperlink

Der Attributtyp Hyperlink, kann verwendet werden, um auf
Online-Ressourcen (Intranet udgl.), Netzwerk-Ressourcen (Dateien auf
Netzwerk-Shares) oder lokale Dateien und Programme zu verweisen. So
erstellte Hyperlinks, sind dann auf [Diagrammen](diagramm), im
[Repository](repository-de) sowie in den
[Erweiterungsmodulen](process4.biz_Erweiterungsmodule) verwendbar.

Die Syntax für ein Hyperlink-Attribut, sieht dabei wie folgt aus:

**Hyperlink-Syntax**

``` text
Online-Ressourcen
LinkName | http://url.com

Netzwerk-Ressourcen - Dateien
LinkName | \\share\ordner\file.pdf 

Lokale Dateien
LinkName | \\ComputerName\Freigabelaufwerk$\ordner\file.pdf

Hyperlinks zu Programmen (nur aus process4.biz)
MS Word, Hyperlink zu einem Kapitel
LinkName | word://c:\Example.doc#TOC21

Notepad (nur aus process4.biz)
LinkName | notepad.exe C:\text.txt
```

Hyperlinks können nicht nur händisch, sondern auch über den Button
"Bearbeiten des Pfades" für das jeweilige Attribut
im [Eigenschafts-Fenster](eigenschaften-dialogfenster) gesetzt werden.
In den Datenbank-Einstellungen [vordefinierte
Pfade](datenbank-einstellungen),
können zur Vereinfachung bei der Erstellung von Hyperlinks herangezogen
werden.

In den Attributen eines Objekts hinterlegte Hyperlinks (oder Pfade) auf
Fileserver, werden auf den [Diagrammen](diagramm) durch Smart-Tags
grafisch repräsentiert. Unter dem Smart-Tag des Objekts, wird zur
besseren Übersichtlichkeit nur mehr der von Ihnen vergebene Name des
Hyperlinks angezeigt.

Mit einem Klick auf den gewünschten Link, gelangen Sie zur angegebenen
Adresse oder öffnen die hinterlegte Datei/das Verzeichnis auf Ihrem
Fileserver. Die Hyperlinks funktionieren natürlich auch in einem mit dem
[WebPublisher](webpublisher-de) erstellten Web-Portal.

#### Pfad

Attribute des Attributtyps Pfad, funktionieren wie Hyperlink-Attribute;
allerdings verweisen sie auf Verzeichnisse, statt auf spezifische
Dateien.

**Pfad-Syntax**

``` text
Netzwerk-Ressourcen - Verzeichnisse
LinkName | \\share\ordner\

Lokale Verzeichnisse
LinkName | \\ComputerName\Freigabelaufwerk$\ordner\
```

So wie Hyperlinks, können Pfade nicht nur händisch, sondern auch über
den Button "Bearbeiten des Pfades" für das jeweilige Attribut
im [Eigenschafts-Fenster](eigenschaften-dialogfenster) gesetzt werden.
In den Datenbank-Einstellungen [vordefinierte
Pfade](datenbank-einstellungen),
können zur Vereinfachung bei der Erstellung von Pfaden herangezogen
werden.

#### Formel

Siehe dazu: [Attributtyp: Formel](attributtyp-formel)

#### Verknüpftes Element Selector

##### Objekttyp Datenobjekt

Mit dem Verknüpftes Element Selector für [Datenobjekte](objekt), können
Sie eine automatische Assoziation zu verknüpften Objekten erstellen und
deren Namen unter diesem Attribut anzeigen lassen. Diese automatische
Auswahl von Objekten für den Verknüpftes Element Selector, kann auf eine
oder mehrere [Klassen](klasse) und/oder
[Verknüpfungs-Typen](verknüpfungen) (und/oder Assoziationsklassen)
begrenzt werden. 

<div class="warning">

Falls eine Verknüpfung zwischen für einen Verknüpftes Element Selector
relevanten Objekten gelöscht wird, dann verschwindet auch das verknüpfte
Objekt aus dem entsprechenden Attribut automatisch.

</div>

Wenn Sie mit einem Attribut dieses Attributtyps mehrere Objekte
gleichzeitig angezeigt bekommen möchten, setzen Sie dazu das Attribut
"Mehrfachselektion" auf "Wahr".

##### Objekttyp Diagramm

Mit dem Verknüpftes Element Selector für [Diagramme](diagramm), können
Sie eine automatische Assoziation zu den mit einem [Objekt](objekt)
verknüpften Diagrammen, oder Diagrammen, auf denen das Objekt verwendet
wird, herstellen und deren Namen in diesem Attribut anzeigen lassen. Die
Auswahl von Diagrammen für dieses Attribut, kann über die
[Diagrammklassen](klasse) eingeschränkt werden.

Wenn Sie mit einem Attribut dieses Attributtyps mehrere Diagramme
gleichzeitig referenzieren möchten, setzen Sie dazu das Attribut
"Mehrfachselektion" auf "Wahr".

##### Objekttyp Datei
Mit dem „Verknüpftes Element Selektor“ für Dateien, können Sie eine automatische Assoziation zu einer Datei, die mit einem Objekt oder Diagramm an welchem das Objekt benutzt wird, verknüpft ist, erstellen. Die Selektion dieser Dateien für diese Attribute kann mit den Dateiklassen beschränkt werden. 


#### Benutzer Selektor

Ein Attribut dieses Typs, erlaubt das Referenzieren von Benutzern (siehe
[Berechtigungen](berechtigungen)) als Attributwert. Die Auswahl von
verfügbaren Werten für Attribute dieses Typs, kann auf native
process4.biz-Benutzer, Windows-Benutzer und/oder Windows-Benutzergruppen
eingeschränkt werden.

![](//images.ctfassets.net/utx1h0gfm1om/6ql0TqurACRf1fjBVleDhB/d9248a15ea6669d509a9bc848a25e68a/image.png)

### Mehrfachselektion

Für die Attributtypen Enum, Benutzer Selektor und Verknüpftes Element
Selector, kann zusätzlich das System-Attribut "Mehrfachselektion"
definiert werden. Wenn Sie dieses auf "Wahr" setzen, wird bei
entsprechenden Objekten die gleichzeitige Auswahl von mehreren Werten
für Attribute der genannten Attributtypen erlaubt.

![](//images.ctfassets.net/utx1h0gfm1om/4QcT6Q39SE8kESIqGUKG8A/e58692c413c178b5107594ac76b6aea5/1017731.png)

*Mehrfachselektion*

Wenn ein Attribut auf Mehrfachselektion=Wahr gesetzt wurde, danach Werte
für das Attribut eingegeben wurden und sich das Attribut später einmal
auf Mehrfachselektion=Falsch ändert, passiert Folgendes:

1.  Wenn für das Attribut nur ein Wert angegeben wurde, wird nach der
    Änderung dieser Wert beibehalten.
2.  Wenn für dieses Attribut mehrere Werte angegeben wurden, wird der
    Wert nach der Änderung leer sein.

### Attribute im Shape-Kontextmenü anzeigen

Es ist möglich, Bool- und Enum-Attribute im Kontextmenü eines
[Shapes](shapes-stencils-und-templates-de) der entsprechenden [Klasse](klasse)
anzuzeigen und von dort aus auswählbar zu machen.

Diese Funktion, wird über das Attribut "Im Shape-Kontextmenü anzeigen"
gesteuert, welche für alle Bool- und Enum-Attribute im
[Eigenschafts-Fenster](eigenschaften-dialogfenster) zur Verfügung
steht. Die Reihenfolge der Attribute, wird von Oben nach Unten aus der
Struktur der Attributgruppen und Attribute im Eigenschafts-Fenster
übernommen und kann über das Attribut "Priorität" der jeweiligen
Attribute gesteuert werden - je niedriger dieser Wert ist, desto weiter
Oben wird das jeweilige Attribut aufgelistet.

#### Anmerkungen

-   Falls ein Enum-Attribut ein Pflichtfeld ist, kann dieses Attribut
    über das Kontextmenü keinesfalls auf einen leeren Wert gesetzt
    werden.
-   Bool-Attribute können über das Kontextmenü grundsätzlich nicht auf
    einen leeren Wert gesetzt werden, ganz egal, ob es sich um ein
    Pflichtfeld handelt, oder nicht.
    

![](//images.ctfassets.net/utx1h0gfm1om/3PAmzTjYsUTZTLRqciQ240/9ec5402ef562ba2f9f9a29c5c383427e/image.png)

<hr style="padding-top:2rem" />
<a href="https://github.com/process4/docs/issues" target="_blank" class="bgw btn btn-primary btn-lg shadow-sm">Report an issue</a>
<a href="https://github.com/process4/docs" target="_blank" class="bgw btn btn-primary btn-lg shadow-sm" style="margin-left:10px;">View source code</a>
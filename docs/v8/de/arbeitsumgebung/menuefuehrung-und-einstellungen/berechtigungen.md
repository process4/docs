-   [Berechtigungsverwaltung](#berechtigungsverwaltung)
    -   [Berechtigungen für Benutzer](#berechtigungen-für-benutzer)
        -   [Eigentümer von Elementen](#eigentümer-von-elementen)
-   [Benutzer und Rollen verwalten](#benutzer-und-rollen-verwalten)
    -   [Berechtigungen für Rollen](#berechtigungen-für-rollen)
        -   [Administration](#administration)
        -   [Design](#design)
        -   [Erstellen](#erstellen)
        -   [Aktualisieren](#aktualisieren)
        -   [Löschen](#löschen)
        -   [Lesen](#lesen)
        -   [Lesen Genehmigte](#lesen-genehmigte)
        -   [Genehmigen](#genehmigen)
-   [Berechtigungen für Erweiterungsmodule](#berechtigungen-für-erweiterungsmodule)
    -   [Versionieren](#versionieren)


Process4.biz ermöglich die Verwaltung von Benutzer-Berechtigungen im
Multi-User-Betrieb auf folgende Arten:

-   auf Basis der Rechtekonzeption im Microsoft SQL-Server
-   mit Windows-Bordmitteln (z.B. Rechte des Users in der Domäne)  
    Der Netzwerkadministrator kann jeden Windows-Benutzer bzw. die ganze
    Windows Benutzergruppe in Ihrem LAN mit process4.biz-Zugriffsrechten
    versehen. Die User müssen dann beim [Login](login-logout-de) keine
    Benutzernamen oder Passwörter mehr eingeben, sondern lediglich die
    gewünschte Datenbank auswählen.
-   über unterschiedliche Lizenzfreischaltungen bei [Named User
    Clients](lizenzierung)
-   durch die process4.biz Berechtigungsverwaltung

### Berechtigungsverwaltung

1.  Um Benutzer-Berechtigungen mit process4.biz zu verwalten, muss
    zuerst die Berechtigungsverwaltung aufgerufen werden:  
    ![](//images.ctfassets.net/utx1h0gfm1om/5AzZrijMOWcwKiaSgcokIc/ea45101e3e40d8cb52ade5fd5e020d3d/1017551.png)
2.  Die Verwaltung der Berechtigungen gliedert sich in 3 Sektionen:
    1.  Berechtigungen für Benutzer
    2.  Berechtigungen für Sets
    3.  Berechtigungen für Erweiterungsmodule
3.  Berechtigungen können außerdem auch direkt für Datenbank-Elemente
    über das [Eigenschafts-Fenster](eigenschaften-dialogfenster), unter
    dem Reiter "Berechtigungen" verwaltet werden.

------------------------------------------------------------------------

![](//images.ctfassets.net/utx1h0gfm1om/Z9vJgL9rYAEY0886iIMMq/e176ea5d47281d8af44b4986770237ea/1017547.png)

*Die native process4.biz Berechtigungsverwaltung*

Zur Vergabe und Administration der Berechtigungen, kann ein Benutzer,
der Administrationsrechte hat (= ein User, der einer Rolle zugeordnet
wurde, welche über Administrationsrechte verfügt), die oben genannten
Funktionen aufrufen. Dieser User kann dann in den Units, für die er
diese Administrationsberechtigung hat, die Rechte für Benutzer und
Benutzergruppen verwalten.

Der Administrationsbereich besteht immer aus drei Bereichen:

-   Die Liste der Benutzer und Benutzergruppen.
-   Die Liste der Rollen mit den dazugehörigen Berechtigungen
    (Administration, Design, Löschen, Aktualisieren, Genehmigen, etc.).
-   Die Unit-Struktur mit der Anzeige der aktivierten Zugriffsrechte auf
    Units, Klassen, Attributgruppen und Attributen für den jeweils
    ausgewählten Benutzer.  
    In diesem dritten Fenster wird also lediglich die Auswirkung der
    Berechtigungsvergabe eingeblendet, es kann hier nichts editiert
    werden.

<div class="info">

Wenn Sie das Berechtigungen-Fenster zum ersten Mal öffnen, wird ein
automatischer Aktualisierungsprozess gestartet und ein
Fortschrittsbalken wird unten angezeigt. Dieser Prozess blockiert die
Arbeit nicht und kann auch abgebrochen werden. Während dieses
Aktualisierungsprozesses, wird das Active Directory überprüft und
Benutzer entsprechend aktualisiert.

</div>

#### Berechtigungen für Benutzer

Benutzer werden in process4.biz in Rollen verwaltet, die
unterschiedliche Berechtigungen für eine oder für mehrere [Units](unit-de),
[Klassen](klasse), [Attributgruppen](attributgruppe-und-attribut), usw.
haben können. Ein nativer process4.biz-Benutzer, oder ein
Windows-Benutzer (bzw. eine Windows-Benutzergruppe), der in process4.biz
angelegt bzw. hinzugefügt wurde, erhält automatisch die Berechtigungen
aller Rollen, deren Mitglied er ist.

Um Benutzer oder Benutzergruppen einer oder mehreren Rollen zuzuweisen,
oder von einer oder mehreren Rollen zu entfernen, gehen Sie wie folgt
vor:

1.  Klicken Sie auf den Namen des Benutzers bzw. der Benutzergruppe.
2.  Setzen Sie mit der linken Maustaste bei der oder den betroffenen
    Rollen ein Häkchen oder deaktivieren Sie dieses.

Der Benutzer "Admin" und die Rolle "Administrators", ist mit allen
Zugriffsberechtigungen fest verbunden, womit hier keine Änderungen
möglich sind.

Falls mehrere Benutzer gleichzeitig in einer Datenbank angemeldet sind,
kann der Admin das verfolgen: diese Benutzer werden im
Administrationsfenster Fett markiert.

##### Eigentümer von Elementen

Alle Elemente (=Klassen und deren Objekte, Diagramme, Designelemente,
Benutzer und Benutzergruppen, sowie Sets) haben in der
process4.biz-Datenbank einen Eigentümer. Eigentümer von Elementen haben
immer die Lesen-, Aktualisieren (Ändern)- und Löschen-Berechtigungen für
ihre Elemente. Das heißt, dass auch wenn ein Benutzer <span
class="underline">keine</span> Rechte in einer Unit hat, es aber in
dieser Unit Objekte gibt, deren Eigentümer er ist, ihm diese Unit (mit
"seinen" Elementen) angezeigt wird. 

### Benutzer und Rollen verwalten

Um Benutzer, oder Rollen hinzuzufügen, zu löschen oder deren
Eigenschaften zu verwalten, wählen Sie in der Symbolleiste des
Administrationsfensters die entsprechende Schaltfläche, oder öffnen Sie
mit der rechten Maustaste im entsprechenden Fenster für Benutzer oder
Benutzergruppen das Kontextmenü. Sie können das Passwort ändern oder neu
anlegen, wenn Sie die Funktion Passwort ändern im Benutzer-Kontextmenü
auswählen.

In den Eigenschaften der Benutzer, können Sie auch nähere Angaben zu den
Benutzern machen, welche die Identifikation der Benutzer bzw. die
Abfrage ihres Login-/Logout-Status erleichtern können. In Situationen,
in denen Benutzer-Zugriffe auf Units gesperrt werden müssen (z.B. bei
einer Datenbank-Designänderung), können Sie diese Benutzer rechtzeitig
informieren, wenn sie aufgrund der Angaben in den Eigenschaften einfach
identifiziert werden können.

Um einen User mit seinem Windows-Benutzerkonto anzulegen, wählen Sie in
der Symbolleiste die entsprechende Schaltfläche oder die Funktion
"Hinzufügen eines Windows-Benutzers" aus dem Kontextmenü. Der
Windows-Benutzer kann, genauso wie jeder andere Benutzer, einer Rolle
zugewiesen bekommen, dort bearbeitet und auch wieder davon entfernt
werden. Wenn z.B. den Benutzernamen, die Beschreibung oder andere Daten
vom Windows-Benutzer in Active Directory geändert wurden, kann man diese
Daten für den entsprechenden Windows-Benutzer in process4.biz
aktualisieren. Klicken Sie dazu auf die Schaltfläche "Aktualisieren"
unter dem Berechtigungen-Reiter.

<div class="success">

Man kann auch mehrere Windows-Benutzer, die zu einer
Windows-Benutzergruppe gehören, auf einmal hinzufügen. Wählen Sie dazu
das entsprechende Symbol oder die Funktion "Hinzufügen einer
Windows-Benutzergruppe" im Kontextmenü. Die ganze Windows-Benutzergruppe
kann auch wie ein einzelner Benutzer einer Rolle zugewiesen bekommen,
dort bearbeitet und auch wieder davon entfernt werden.

</div>

Es ist möglich, native process4.biz-Benutzer in Windows-Benutzer und
Windows-Benutzer in process4.biz-Benutzer zu konvertieren. Klicken Sie
mit der rechten Maustaste auf den Benutzer und wählen Sie "Konvertieren
in einen Windows-Benutzer" bzw. Konvertieren in einen
process4.biz-Benutzer. Seit Release 5.3.1 ist es möglich, Benutzer und
Rollen mittels Kopieren oder Ausschneiden entweder von einer Datenbank
zu einer anderen oder auch innerhalb der selben Datenbank anzulegen.
Wenn Sie z.B. mehrere Benutzer oder Rollen einfügen wollen, die sich
sehr ähnlich sind und nachträglich nur minimal adaptiert werden sollen,
dann macht es Sinn die Kopieren/Einfügen Funktion für Benutzer und
Rollen zu verwenden:

-   Die Verbindung zwischen dem Benutzer und der Rolle bleibt dabei
    erhalten, sofern Sie den Benutzer in oder zu einer Datenbank
    kopieren, in der auch die verknüpfte Rolle existiert.
-   Die Verbindung zwischen dem Benutzer und der Rolle geht verloren,
    wenn Sie die Rolle - selbst innerhalb derselben Datenbank - kopieren
    oder ausschneiden und wieder einfügen. Alle Attribute der einfügten
    Rolle bleiben aber erhalten.

#### Berechtigungen für Rollen

Um die Berechtigungen von Rollen zu verwalten:

1.  Klicken Sie mit der linken Maustaste auf die gewünschte Rolle im
    Administrationsfenster,
2.  Setzen Sie im rechten Fensterbereich die gewünschten Berechtigungen
    in den gewünschten Units. Sie können den Status für eine Spalte
    (z.B. Administration oder Design) auch mit dem Kontextmenü (rechte
    Maustaste auf das Symbol) setzen.

<div class="info">

Wenn der Berechtigungsstatus vererbt ist (grauer Hintergrund im Feld),
dann bedeutet das, dass Einstellungen aus dem Parent-Feld übernommen
werden (=aus den Feldern für Parent-Unit oder aus der obersten Reihe der
Berechtigungen für eine Rolle).

Wenn der Berechtigungsstatus im Parent-Feld geändert wurde, ändert er
sich automatisch auch im vererbten Child-Feld. Die nicht vererbten
Berechtigungsstatus bleiben dabei unverändert. Der Status "nicht
aktiviert" (weißes Feld) wird explizit verwendet, um eine Berechtigung
innerhalb einer Vererbungsstruktur zu deaktivieren.

</div>

Es ist auch möglich, **alle** Berechtigungen für eine Unit, Klasse,
Attributgruppe oder Attribut auf einmal zu aktivieren oder zu
deaktivieren. Klicken Sie auf die gewünschte Einheit mit der rechten
Maustaste und wählen Sie die entsprechende Option im Kontextmenü aus:

-   Alle aktivieren – alle Berechtigungen für das ausgewählte Element
    werden aktiviert.
-   Alle deaktivieren – alle Berechtigungen für das ausgewählte Element
    werden deaktiviert.
-   Alle entfernen – alle Berechtigungen für das ausgewählte Element
    werden zurückgesetzt (die von oben vererbten Berechtigungen werden
    übernommen).

![](//images.ctfassets.net/utx1h0gfm1om/3V1a7yDuMEkAW8wSQAcW0w/bef774372c1633e2d0a53ee4fec0f364/1017555.png)

*Die process4.biz Berechtigungs-Status*

![](//images.ctfassets.net/utx1h0gfm1om/XSwkfabOQUYSgWK2sWkEI/bb8ff3d28f0fea69122b0e81cafde021/1017524.png)

*Alle Berechtigungen einer Unit verwalten  
*

Berechtigungen für System-Klassen, -Attributgruppen, und -Attribute,
können nicht vom Benutzer gesetzt werden. Sie werden automatisch für
alle Benutzer freigegeben, die Berechtigungen für entsprechende Unit
haben. Bitte beachten Sie, dass Berechtigungen, die für Parent-Units
definiert sind, von Child-Units und deren Klassen geerbt werden. Wenn
Sie Berechtigungen für eine Child-Unit deaktivieren, werden sie nur für
die in dieser Unit erstellten Klassen deaktiviert, nicht aber für die
von oben geerbten Klassen.

##### Administration

Der Benutzer Admin ist in jeder process4.biz-Datenbank enthalten, sein
Passwort ist am Anfang leer. Der Benutzer Admin und die Benutzergruppe
Administrators können weder geändert noch gelöscht werden.

Die Administrations-Berechtigung kann nur für Units freigegeben werden.
Wenn sie für irgendeine Unit aktiviert wurde, dann kann ein Benutzer
dieser Rolle die Verwaltung von Benutzer-Berechtigungen, sowie den
Berechtigungs-Reiter in den [Eigenschaften eines
Objekts](Eigenschaften_Dialogfenster_) in der für die Administration
freigegebenen Unit aufrufen.  Die Benutzer einer individuellen
Benutzerrolle mit Administrations-Berechtigung, können folgende Arbeiten
durchführen:

-   Lesen / Aktualisieren (Ändern) / Löschen / Erstellen von Benutzern
    und Benutzerrollen, deren Eigentümer sie sind.
-   Verändern von Berechtigungen für Benutzerrollen für Units, für die
    Sie Administrationsberechtigungen haben.
-   Ändern der Klasse von Objekten und Diagrammen in der Unit, in der
    sie Administrationsberechtigungen haben.

Die Benutzer einer individuellen Benutzerrolle mit Administration-
Berechtigung können aber nicht alle Operationen durchführen: es gibt
Aufgaben, die nur Benutzer mit der System-Benutzerrolle "Administrators"
erledigen können:

-   Die datenbankweite Verwaltung von Benutzer-Berechtigungen
    durchführen.
-   Die [Datenbank-Einstellungen](datenbank-einstellungen) aufrufen.
-   Den Wizard für Festlegen der Default Sprache des Modells unter den
    Datenbank Einstellungen aufrufen.
-   Eine [neue Version der Datenbank erstellen](versionsmanagement) und
    den Version Delta Report starten.
-   Units, Objekte und Diagramme, die von einem anderen Benutzer
    gesperrt wurden, entsperren.
-   Den Schutz von Diagrammen entfernen, ohne ein Passwort eingeben zu
    müssen.

##### Design

Die Design-Berechtigung kann nur für Units freigegeben werden und
schaltet für eine Benutzerrolle sämtliche Design-Arbeiten im
process4.biz [Database Designer](database-designer-de) für die Unit(s)
frei.

Design-Arbeiten sind das Erstellen/Aktualisieren (Ändern)/Löschen bzw.
Verwalten von [Units](unit), [Klassen](vlasse), [Attributgruppen und
Attributen](attributgruppe-und-attribut), [Verknüpfungs-Typen und
Verknüpfungs-Technologien](verknüpfungen) in der
[Klassenmatrix](klassenmatrix), [Tags](tags-de) und
[Validierungsskripten](validierungsskripte).

Wenn ein Benutzer die Design-Berechtigung für eine Unit hat, kann er das
Erstellen/Aktualisieren/Löschen für alle Child Units durchführen, auch
wenn er keine Design Rechte für die Child Units direkt zugewiesen
bekommen hat. Es können aber keine Klassen, Attributgruppen, Attribute,
Verknüpfungs-Typen, Kreuzdaten und Validierungsskripts in den Child
Units erzeugt/aktualisiert/gelöscht werden. Wenn die Design Berechtigung
aktiviert ist, werden die Aktualisieren-, Löschen-, Lesen- und Lesen
Genehmigte-Berechtigung automatisch aktiviert.

##### Erstellen

Die Erstellen-Berechtigung kann für Units und Klassen aktiviert werden
und ermöglicht es einer Benutzerrolle, neue
[Repository](repository-de)-Daten einer Unit (Objekte und Diagramme) bzw.
einer Klasse (nur Objekte) anzulegen. Wenn ein Benutzer keine
Erstellen-Rechte für eine Klasse bzw. Unit hat, wird er Objekte weder im
Repository, noch im Little Repository des [Graphical Visio
Modeler](graphical-visio-modeler-de) erstellen können. Wenn man ein Shape
auf das Diagramm zieht, wird in diesem Fall eine Fehlermeldung
erscheinen. Die Berechtigung für eine Klasse, kann in einer Unit
aktiviert und in einer übergeordneten/untergeordneten Unit deaktiviert
werden. In diesem Fall können Objekte einer Klasse dann nur in einer
bestimmten Unit angelegt werden. Wenn die Erstellen-Berechtigungen
erteilt sind, erhält die betroffene Benutzerrolle automatisch auch die
Lesen- und Lesen Genehmigte-Berechtigungen.

##### Aktualisieren

Die Aktualisieren-Berechtigung kann für **alle** Elemente der Datenbank
aktiviert werden und ermöglicht es einer Benutzerrolle,
Repository-Elemente einer Unit (Objekte, Diagramme), einer Klasse
(Objekte), sowie Werte von Attributen (die im Repository angezeigt
werden) zu ändern. Sie ermöglicht es auch, Objekte mit anderen Objekten
zu verknüpfen. Die Voraussetzung für eine [Verknüpfung](Verknüpfungen)
zwischen zwei Objekten ist, dass der Benutzer wenigstens für ein Objekt
(bzw. dessen Klasse) die Aktualisieren-Berechtigung hat. Wenn die
Aktualisieren-Berechtigung vergeben ist, erhält die Benutzerrolle
automatisch auch die Lesen- und Lesen Genehmigte-Berechtigung.

##### Löschen

Die Löschen-Berechtigung kann für Units, Klassen, Objekte und Diagramme
aktiviert werden und ermöglicht es einer Benutzerrolle, Objekte bzw.
Diagramme auf derjenigen Strukturebene, für die die Berechtigung erteilt
wurde, zu löschen. Wenn die Löschen-Berechtigung definiert ist, hat die
Benutzerrolle automatisch auch die Lesen- und Lesen
Genehmigte-Berechtigung.

##### Lesen

Die Lesen-Berechtigung kann für **alle** Elemente der Datenbank
aktiviert werden und erlaubt es der Benutzerrolle, die Inhalte von
Objekten und Diagrammen, sowie die Werte von Attributen der betreffenden
Unit bzw. Klasse im [Repository](repository-de) zu sehen.

-   Wenn ein Benutzer keine Lesen-Berechtigung für eine <span
    class="underline">Unit</span> hat, ist diese Unit mit allen Klassen,
    Objekten und Diagrammen im Repository, sowie im Designer, für den
    Benutzer nicht sichtbar. Wenn diese Unit aber Child-Units hat, für
    die der Benutzer berechtigt ist, wird die Unit im Hierarchiebaum mit
    der Markierung "keine Berechtigung" angezeigt.
-   Wenn ein Benutzer keine Lesen-Berechtigungen für eine <span
    class="underline">Klasse</span> hat, werden alle Objekte dieser
    Klasse im Repository unsichtbar (die Klasse selbst bleibt im
    Repository und Designer aber sichtbar).
-   Wenn ein Benutzer keine Lesen-Rechte für eine <span
    class="underline">Attributgruppe</span> und die dazugehörigen
    Attribute hat, wird die Attributgruppe selbst in den
    Objekt-Eigenschaften als schreibgeschützt, mit der Markierung
    \[geschützt\], angezeigt. Werte von dazu gehörigen Attributen,
    werden unsichtbar und sind ebenfalls mit \[geschützt\]
    gekennzeichnet.
-   Wenn ein Benutzer keine Lesen-Berechtigungen für ein <span
    class="underline">Objekt bzw. Diagramm</span> hat, wird das Objekt
    bzw. Diagramm im Repository unsichtbar. Wenn aber ein Diagramm
    einige Child-Diagramme hat, für die der Benutzer berechtigt ist,
    wird das Diagramm im Diagrammbaum mit der Markierung "keine
    Berechtigung" angezeigt. Die Eigenschaften von diesem Diagramm
    können geöffnet werden, die Werte von Attributen werden aber für den
    Benutzer unsichtbar.
-   Mit dieser Berechtigung ist es möglich, sowohl die Klassen-, als
    auch die Verknüpfungsmatrix im Lesemodus zu öffnen.

 

![](//images.ctfassets.net/utx1h0gfm1om/5yJGL94LdYmwK2qcWgMW4U/f049c35d572edd8b614202b228fcf080/1017534.png)

*Berechtigungen verwalten*

Sofern die Lesen-Berechtigung für eine Benutzerrolle generell definiert
ist, erhält sie diese Rechte automatisch auch für alle untergeordneten
Units; dies kann aber selektiv wieder deaktiviert werden. Die
Lesen-Berechtigung wird automatisch gesetzt, wenn die Erstellen-,
Aktualisieren- oder Löschen-Berechtigung vergeben wurde. Die
Lesen-Berechtigung für eine Unit, kann nicht entfernt werden, wenn
Erstellen-, Aktualisieren-, oder Löschen-Berechtigungen für die Unit
vorliegen. Wenn die Lesen-Berechtigung definiert ist, hat die
Benutzergruppe automatisch auch die Lesen Genehmigte-Berechtigung. 

<div class="warning">
  
Die Benutzerrolle kann eine Unit und deren untergeordnete
Units im Repository nur dann sehen, wenn diese nicht gesperrt ist.

</div>

##### Lesen Genehmigte

Lesen Genehmigte ist eine minimale Berechtigung, die es erlaubt, Objekte
und Diagramme mit [Genehmigungsstatus](genehmigungsmanagement)
"genehmigt" oder mit einem leeren Status zu sehen. Die Lesen
Genehmigte-Berechtigungen erlaubt es auch, die
[Klassenmatrix](klassenmatrix) und die
[Verknüpfungsmatrix](verknüpfungsmatrix) nur zum Lesen zu öffnen. Die
Lesen Genehmigte-Berechtigung, wird automatisch gesetzt, wenn die
Administrations-, Erstellen-, Aktualisieren-, Löschen- oder
Lesen-Berechtigung gesetzt wird.

##### Genehmigen

Die Berechtigung zum Genehmigen kann nur für eine ganze Unit vergeben
werden. Nur Benutzer mit der Berechtigung zum Genehmigen, können
Änderungen genehmigen. Darüber hinaus, wird durch die
Genehmigen-Berechtigung automatisch die Aktualisieren-, Lesen- und Lesen
Genehmigte-Berechtigung vergeben. Wenn ein Benutzer nicht die
Berechtigung zum Genehmigen besitzt und Änderungen für ein genehmigtes
Objekt oder Diagramm speichert, öffnet sich der Dialog zum Ändern des
Genehmigungsstatus, aber das Abbrechen ist nicht möglich - der Benutzer
muss also eine Option auswählen und diese Auswahl bestätigen.

### Berechtigungen für Erweiterungsmodule

Auch für die Verwendung der [process4.biz
Erweiterungsmodule](process4.biz_Erweiterungsmodule), können
Berechtigungen jeweils separat vergeben werden. Das kann z.B. notwendig
sein, um bei einer [Concurrent Lizenzierung](lizenzierung) gewissen
Usern die Verwendung einzelner Erweiterungen zu gewähren bzw. verwehren.

<div class="info">

Die Zugriffsberechtigungen für Erweiterungen können nur für die gesamte
Datenbank, nicht aber für einzelne Units vergeben werden. Nur Benutzer,
die Mitglied einer Benutzerrolle sind, an die die entsprechenden
Berechtigungen vergeben wurden, können die jeweiligen Erweiterungsmodule
aufrufen und verwenden.

</div>

#### Versionieren

Auch die Berechtigung zum Versionieren eines Modells kann hier verwaltet
werden, jedoch gilt auch hier, dass die Berechtigung nur für die gesamte
Datenbank, nicht aber für einzelne Units vergeben werden kann.

Siehe dazu auch: [Versionsmanagement](versionsmanagement)

![](//images.ctfassets.net/utx1h0gfm1om/5jmUHnf5lmIMoe8U4Ae6eW/2772ca5605193a398bed844fce0087ef/1018003.png)

*Berechtigungen für Erweiterungsmodule*


<hr style="padding-top:2rem" />
<a href="https://github.com/process4/docs/issues" target="_blank" class="bgw btn btn-primary btn-lg shadow-sm">Report an issue</a>
<a href="https://github.com/process4/docs" target="_blank" class="bgw btn btn-primary btn-lg shadow-sm" style="margin-left:10px;">View source code</a>
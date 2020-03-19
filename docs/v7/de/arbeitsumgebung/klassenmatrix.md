-   [Einstellungsmöglichkeiten](#einstellungsmöglichkeiten)
-   [Funktionen](#funktionen)
    -   [Bearbeiten der Verknüpfungsregeln](#bearbeiten-der-verknüpfungsregeln)
    -   [Entfernen von Verknüpfungs-Technologien und Typen](#entfernen-von-verknüpfungs-technologien-und-typen)
    -   [Bearbeite Klasse X](#bearbeite-klasse-x)
    -   [Kopieren der Zelldaten / Einfügen der kopierten Zelldaten](#kopieren-der-zelldaten--einfügen-der-kopierten-zelldaten)
    -   [Verknüpfungstechnologien zuweisen](#verknüpfungstechnologien-zuweisen)
    -   [Verknüpfungen löschen](#verknüpfungen-löschen)
-   [Excel Export](#excel-export)
-   

[Verknüpfungs-Technologien und -typen](verknüpfungen), die im
[Designer](etabase-designer-de) definiert und den einzelnen
[Klassen](klasse) zugewiesen werden, können Sie mithilfe der
Klassen-Matrix in Form einer Tabelle für das gesamte Modell betrachten.
Wenn Sie die Einträge auch bearbeiten wollen, also beispielsweise
Verknüpfungs-Typen komfortabel über die entsprechende Zelle zwei Klassen
zuweisen möchten, dann [sperren Sie davor Ihre
Datenbank](sperren-und-entsperren-von-designelementen) im Designer. Die
Klassenmatrix rufen Sie über den entsprechenden Menüpunkt im Hauptmenü
von process4.biz auf.

### Einstellungsmöglichkeiten

Im linken Auswahlfenster können Sie auswählen, welche Verknüpfungs-Typen
und -Technologien in der Klassenauswahl betrachtet werden sollen. Als
Ergebnis werden alle Klassen aufgelistet, für die ein Verknüpfungs-Typ
und Technologie-Regelsatz definiert ist.

Stellen Sie dann ein, ob Bedingungen bzw. Regelmeldungen in der Matrix
angezeigt werden sollen. Mithilfe der Option "Nur Klassen mit
definierter Verknüpfung zeigen", können Sie auswählen, ob alle Klassen
(wenn deaktiviert), oder nur Klassen mit den ausgewählten
Verknüpfungstechnologien und -Typen (wenn aktiviert) angezeigt werden
sollen.

Mittels zweier Hierarchiebaum-Fenster wählen Sie aus, welche Klassen der
selektierten Units in den Zeilen bzw. Spalten der Tabelle dargestellt
werden sollen. Leere Zeilen bzw. Spalten, die über keine zugewiesene
Verknüpfungs-Technologie und/oder Verknüpfungs-Typ verfügen,  
lassen sich mit der Check-Box "Leere Zeilen/Spalten ausblenden"
ausblenden.

Wenn Sie eine Tabelle mit allen möglichen Verknüpfungstypen bzw.
Verknüpfungstechnologien anzeigen möchten, wählen Sie im Feld
Verknüpfungstyp bzw. Verknüpfungstechnologie "beliebig" aus.

In der rechts dargestellten Tabelle können Sie dann überprüfen, für
welche zwei Klassen im Schnittpunkt dieser Zelle ein Verknüpfungs-Typ
und/oder eine Verknüpfungs-Technologie definiert wurden.

### Funktionen

Vorausgesetzt, dass die Datenbank-Struktur im Designer gesperrt wurde
und der Benutzer über die benötigten Rechte verfügt, ermöglicht die
Klassenmatrix nicht nur die komfortable Betrachtung der aktivierten
Verknüpfungsregeln, sondern erlaubt es dem User auch, diese inklusive
der Eigenschaften betroffener Klassen zu bearbeiten. Klicken Sie dazu
mit der rechten Maustaste auf die ausgewählte Zelle und wählen Sie aus
dem Kontextmenü die gewünschte Aktion aus.


![](//images.ctfassets.net/utx1h0gfm1om/5JCrS8hcruskko28K6gi2K/b8de66812fca0dafa2a0cc21398e8a9a/1018241.png)


#### Bearbeiten der Verknüpfungsregeln

Mit Hilfe dieser Option können Sie zwei oder mehreren ausgewählten
Klassen (ablesbar über Spalte und Zeile der selektierten Zelle) eine
Verknüpfungstechnologie und einen Verknüpfungs-Typ zuweisen sowie
existierende Regeln zu [Verknüpfungs-Technologien und
-Typen](verknüpfungen) bearbeiten oder löschen.

#### Entfernen von Verknüpfungs-Technologien und Typen

Alle Regelsätze für Verknüpfungs-Technologien und -Typen zwischen den
ausgewählten Klassen werden komplett gelöscht.

#### Bearbeite Klasse X

Die [Eigenschaften](eigenschaften-dialogfenster) jener Klasse X, die
sich in der markierten Zeile oder Spalte befindet, werden geöffnet und
können bearbeitet werden.

#### Kopieren der Zelldaten / Einfügen der kopierten Zelldaten

Es ist möglich, die Inhalte von einer Zelle mit den definierten
Verknüpfungstechnologien und -typen zu kopieren und in eine andere Zelle
hinzuzufügen (Mehrfachselektion mit Strg und Shift sind möglich). Das
Kopieren/Einfügen der Zellendaten funktioniert auch zwischen zwei
Datenbanken. Die Voraussetzung dazu ist, dass der kopierte
Verknüpfungstyp in der Ziel-Datenbank bereits vorhanden ist.

Sie können all diese Funktionen auch für mehrere markierte Zellen
gleichzeitig bzw. für alle Klassen der gewählten Zeile oder Spalte
anwenden. Selektieren Sie beispielsweise die Zeile oder Spalte einer
bestimmten Klasse, um über das Kontextmenü der rechten Maustaste alle
zugewiesenen Verknüpfungs-Typen mit anderen Klassen zu entfernen.

#### Verknüpfungstechnologien zuweisen

Mithilfe der Klassenmatrix haben Sie des Weiteren die Möglichkeit,
Verknüpfungs-Typen und Verknüpfungs-Technologien allen Klassen in der
Datenbank zuzuweisen. Das lässt sich in der Zelle links oben im
Schnittpunkt der Spalte &lt;Zu beliebig&gt; und der Zeile &lt;Von
beliebig&gt; definieren.  
Die Verknüpfungs-Typen "verlinkt mit" und "verlinkt zu / verlinkt von",
sind standardmäßig zwischen allen Klassen der Datenbank aktiviert und
stehen dadurch für die Verknüpfung beliebiger Objekte (egal, ob manuell
oder automatisch) zur Verfügung. Darüber hinaus können Sie selbst
weitere Verknüpfungs-Typen definieren und mittels Klassenmatrix für die
ganze Datenbank aktivieren oder existierende Regelsätze löschen, indem
Sie mit der rechten Maustaste auf die markierte Zelle klicken und die
gewünschte Option auswählen.

#### Verknüpfungen löschen

Das Löschen aller hier eingetragenen Verknüpfungs-Typen hat zur Folge,
dass das Verknüpfen zwischen den Objekten unterschiedlicher Klassen
nicht mehr möglich ist, es sei denn, dass ein spezieller
Verknüpfungs-Typ für diese Klasse angelegt wurde.

### Excel Export

Mit einem Klick auf die Schaltfläche "Öffnen der Matrix in Excel",
können Sie die ausgewählte Sicht der Klassenmatrix in Excel exportieren.
Diese Funktion ist nur für die Professional Edition und bei lizenziertem
[QueryBuilder](querybuilder-de) verfügbar.


<hr style="padding-top:2rem" />
<a href="https://github.com/process4/docs/issues" target="_blank" class="bgw btn btn-primary btn-lg shadow-sm">Report an issue</a>
<a href="https://github.com/process4/docs" target="_blank" class="bgw btn btn-primary btn-lg shadow-sm" style="margin-left:10px;">View source code</a>
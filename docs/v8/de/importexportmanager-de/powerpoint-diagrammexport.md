-   [PowerPoint Export Einstellungen](#powerpoint-export-einstellungen)
-   [Erweitertes Filtern von Diagrammdaten](#erweitertes-filtern-von-diagrammdaten)
-   [Diagramme Sortierung](#diagramme-sortierung)
-   [PowerPoint Export Abschluss](#powerpoint-export-abschluss)

### PowerPoint Export Einstellungen

Wenn Sie am Begrüßungsbildschirm des ImportExportManager die Funktion
**PowerPoint-Diagrammexport** ausgewählt haben (siehe dazu [Starten des
ImportExportManagers](Starten_des_ImportExportManagers)), erscheint im
Anschluss daran das folgende Fenster.

-   **Wähle ein Set** 

In einem Set werden PowerPoint Diagrammexport-Einstellungen gespeichert.
Sie können ein bereits definiertes Set auswählen oder ein neues anlegen.
Nicht mehr benötigte Sets können Sie hier entfernen (siehe Export
Einstellungen). 

-   **Unit **

Wählen Sie eine oder mehrere gewünschten Units aus, deren Diagramme
exportiert werden sollen. 

-   **PowerPoint Vorlage** 

Analog zum process4.biz - Word Reporter haben Sie auch
beim PowerPoint-Export die Möglichkeit, eine Dokumentenvorlage im Format
„ \*.pot" zu erstellen, in der alle gewünschten Dokumenteneinstellungen
gespeichert werden können. Wenn Sie keine individuell angepasste
Dokumentenvorlage benötigen, lassen Sie diese Option deaktiviert und
klicken Sie auf Weiter. In diesem Fall wird die Default-Vorlage für den
PowerPoint-Export verwendet. 

-   **PowerPoint Dokument **

Geben Sie hier den MS Powerpoint Dateinamen und den Pfad an, in dem die
exportierte Datei gespeichert werden soll. Sie können auch eine
bestehende Datei auswählen. 

-   **Ausschließen aller Elemente, die im Modeller als unsichtbar
    definiert sind**

Units, Klassen, Objekte und Diagramme können in process4.biz als
unsichtbar markiert werden (siehe Verwalten der Sichtbarkeit). Wenn Sie
diese Option aktivieren, werden solche unsichtbare Elemente auch aus dem
PowerPoint Report ausgeschlossen. Das heißt, unsichtbare Diagramme
werden im Fenster **Diagramme Sortierung** nicht angezeigt, wenn die
Option " ***Diagramme nach Attribut sortieren*** " ausgewählt ist. Wenn
die Option "***Diagrammbaum generieren***" ausgewählt ist, werden
unsichtbare Diagramme sichtbar aber ausgegraut, also nicht auswählbar
(siehe Diagramme Sortierung).

-   **Inhaltsverzeichnis**

Ein Inhaltsverzeichnis wird dem Dokument hinzugefügt.

-   **Seiten-Ausrichtung  
    **

Bestimmen Sie hier, ob Diagramme im Hoch- oder Querformat ins PowerPoint
exportiert werden sollen. 

-   **Diagramme als eingebettete Visio-Dateien**

Mittels dieser Funktion werden process4.biz- Diagramme als Visio-Objekte
exportiert. 

-   **Diagramme als Bilder**

Wenn Sie diese Option auswählen, werden process4.biz- Diagramme als
„PNG"-Dateien, d. h. als Bilder exportiert. Diagramme, die als
BLOB-Objekte direkt in der Datenbank gespeichert sind oder welche
mittels Passwort geschützt wurden (siehe [Diagramme
schützen](Diagramm_1015844.html#Diagramm-Diagrammeschützen) bzw.
[Datenbank-Einstellungen](Datenbank-Einstellungen), Reiter [Erweitert](Datenbank-Einstellungen_1016102.html#Datenbank-Einstellungen-Erweitert)),
können NUR als PNG-Bilder und nicht als Visio-Objekte exportiert werden.

![5-DE-1](//images.ctfassets.net/6mz8d8cle1nl/4LqGLcKPmg2IKYmoUgSoqY/a17a2ff88de45c9cc06647385b43aaf7/5-DE-1.png)

*Export Einstellungen*

### Erweitertes Filtern von Diagrammdaten

In diesem Fenster können Sie mit Hilfe von Filtern auswählen, welche
Diagramme Sie ins PowerPoint-Dokument exportieren möchten. Aktivieren
Sie " Definieren der Filter für Daten", um Filter Einstellungen zu
definieren. Die Filter Einstellungen werden nach dem gleichen Prinzip,
wie für den Excel Export definiert (siehe Erweitertes Filtern von
Objektdaten).

 
![5-DE-2](//images.ctfassets.net/6mz8d8cle1nl/5YKQXXzus8SmG8GYG2KUou/b1e51887652bb5fe65c38f2119682b47/5-DE-2.png)

*Erweitertes Filtern von Diagrammdaten*

### Diagramme Sortierung

In diesem Schritt können Sie die Reihenfolge der Diagramme im
PowerPoint Dokument bestimmen. Sie können eine der 3 folgenden Optionen
auswählen. 

-   **Sortieren der Diagramme nach Attribut**

Wählen Sie im oberen Teil des Fensters in der Spalte Attribut aus,
welche Diagrammattribute die Reihenfolge von Diagrammen bestimmen
sollen. Wählen Sie in der Spalte **Reihenfolge**, ob Diagramme nach
diesem Attribut absteigend oder aufsteigend sortiert werden sollen. Mit
der Schaltfläche ![5-DE-3](//images.ctfassets.net/6mz8d8cle1nl/6XJEHqjSF2ummose2MySIK/e1d9548bdd11a7886f856cd14ac280d1/5-DE-3.png) fügen Sie ein
neues Sortierungskriterium (Attribut) hinzu, mit der
Schaltfläche ![5-DE-4](//images.ctfassets.net/6mz8d8cle1nl/59rziZLscEIcWYoG2su22W/7ea423fa8d8aca40a41440cf6e5e2f81/5-DE-4.png) löschen Sie ein
vorhandenes Kriterium. In der Liste unten, können Sie verfolgen, in
welche Reihenfolge Ihre Diagramme ins PowerPoint exportiert werden.

Sie definieren zum Beispiel Attribut *Unit* als erstes
Sortierungskriterium. In diesem Fall werden zuerst Diagramme einer Unit,
dann der anderen Unit, usw., exportiert. Als zweites Kriterium wählen
Sie Attribut *Klassifikation *aus. Innerhalb der Sortierung nach Unit
werden Diagramme nach dem Typ sortiert. Und als letztes wählen Sie den
Diagramm *Namen* aus. Innerhalb der Sortierung nach Typ werden Diagramme
alphabetisch sortiert.   
  
Hier ist ein Beispiel der Sortierung nach diesen Kriterien:

|        |       |            |
|--------|-------|------------|
| Unit A |       |            |
|        | Typ A |            |
|        |       | Diagramm 1 |
|        |       | Diagramm 2 |
|        | Typ B |            |
|        |       | Diagramm 5 |
|        | Typ C |            |
| Unit B |       |            |
|        | Typ A |            |
|        | Typ B |            |
|        |       | Diagramm 3 |
|        |       | Diagramm 4 |
|        | Typ C |            |

Im PowerPoint bekommen Sie solche Liste von Diagrammen:

|            |
|------------|
| Diagramm 1 |
| Diagramm 2 |
| Diagramm 5 |
| Diagramm 3 |
| Diagramm 4 |

![5-DE-5](//images.ctfassets.net/6mz8d8cle1nl/29bUvWVgkg2ckGoIgoUiYm/dd0aec88cde11c85298763af7ffeab5e/5-DE-5.png)
width="500"}*Sortieren der Diagramme nach Attribut*

-   **Generieren des Diagrammbaums**

Diese Option erlaubt es Ihnen, Diagramme in der Reihenfolge, wie sie im
Hierarchiebaum im Repository dargestellt sind, ins PowerPoint zu
publizieren. Dabei werden in jeder Unit nur solche Diagramme angezeigt,
die in dieser Unit angelegt sind. 

-   **Generieren des erweiterten Diagrammbaums**

Diese Option erlaubt es, Diagramme in Form eines Diagrammbaums zu
exportieren.  
Im Gegensatz zu der oben beschriebenen Option, werden hier
ALLE Diagrammverknüpfungen angezeigt, unabhängig davon, aus welcher
Unit  
Diagramme stammen.

![5-DE-6](//images.ctfassets.net/6mz8d8cle1nl/35nZDlgPa0ea6yG24qY4qm/3223790882ed0053edd055f6804e88a7/5-DE-6.png)

Im unteren Teil des Fensters können Sie jene Diagramme auswählen, die
exportiert und in den generierten Bericht aufgenommen werden sollen.

-   **Nur ausgewählte Visio Zeichenblätter publizieren**

Wenn Diagramme mehrere Visio Zeichenblätter (siehe [Verwenden mehrerer
Visio
Diagramm-Zeichenblätter](Verwenden_mehrerer_Visio_Diagramm-Zeichenblätter))
haben, können Sie mit Hilfe von dieser Option auswählen, welche
Zeichenblätter ins PowerPoint publiziert werden sollen.

![5-DE-7](//images.ctfassets.net/6mz8d8cle1nl/54iO3znA5G8GIQSyAM8agY/69b46b016eaf0fbd78771ad20e46390d/5-DE-7.png)

*Generieren des Diagrammbaums*

### PowerPoint Export Abschluss

Nach Beendigung des Export-Vorgangs öffnet MS PowerPoint die
exportierten Diagramme automatisch in Form einer
PowerPoint-Präsentation.

![5-DE-8](//images.ctfassets.net/6mz8d8cle1nl/3SXvKLdBW8qYcYkI8UIQWe/34d003f6d0680c84c8478a1148706b27/5-DE-8.png)

<hr style="padding-top:2rem" />
<a href="https://github.com/process4/docs/issues" target="_blank" class="bgw btn btn-primary btn-lg shadow-sm">Report an issue</a>
<a href="https://github.com/process4/docs" target="_blank" class="bgw btn btn-primary btn-lg shadow-sm" style="margin-left:10px;">View source code</a>
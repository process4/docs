-   [Definition](#definition)
-   [Anlegen eines neuen Diagramms](#anlegen-eines-neuen-diagramms)
    -   [Anlegen eines verknüpften Diagramms](#anlegen-eines-verknüpften-diagramms)
    -   [Anlegen eines Abhängigkeitsdiagramms](#anlegen-eines-abhängigkeitsdiagramms)
    -   [Systemattribute für Diagramme](#systemattribute-für-diagramme)
-   [Abspeicherungsoptionen für Diagramme](#abspeicherungsoptionen-für-diagramme)
-   [Ein Diagramm öffnen](#ein-diagramm-öffnen)
-   [Diagramme schützen](#diagramme-schützen)
    -   [Diagramm-Schutz entfernen](#diagramm-schutz-entfernen)
-   [Diagramme validieren](#diagramme-validieren)

### Definition

Diagramme sind native Visio-Diagramme, die im [Graphical Visio
Modeler](graphical-visio-modeler) für die Modellierung verwendet werden.
Sie bestehen immer aus Vordergrund (für die Modellierung, enthält die
[Objekte](objekt)) und Hintergrund (für das Design, Logo udgl.; siehe
[Templates](shapes-stencils-und-templates-de)) und können mehrere
[Zeichenblätter](verwenden-mehrerer-visio-diagramm-zeichenblätter) (=
separate "Diagramm-Seiten") umfassen.

Alle Diagramme werden zentral im [Repository](repository-de) gelagert und
verwaltet, sowie durch [Attributgruppen und
Attribute](attributgruppe-und-attribut) genauer beschrieben.

### Anlegen eines neuen Diagramms

1.  Wählen Sie im [Repository](repository-de) die [Unit](unit-de) aus, in der
    das Diagramm erstellt werden soll.
2.  Wählen Sie im unteren Bereich des Navigationsfensters den
    "Diagramm"-Knoten aus.
3.  Rufen Sie das Kontextmenü (rechte Maustaste) auf und wählen Sie die
    Funktion "Neues Diagramm".
    1.  Alternative: klicken Sie in der Menüleiste
        im [Repository](repository-de)
        auf die Schlatfläche "Neu".
4.  Wählen Sie eine [Vorlage](shapes-stencils-und-templates-de), die für das
    neue Diagramm verwendet werden soll.
5.  Das [Eigenschafts-Fenster](eigenschaften-dialogfenster) erscheint.
6.  Geben Sie einen Namen, sowie die gewünschten Attributwerte für das
    Diagramm ein.
7.  Das Diagramm wird zur Modellierung im [Graphical Visio
    Modeler](graphical-visio-modeler) geöffnet.

#### Anlegen eines verknüpften Diagramms

1.  Wählen Sie im [Repository](repository) ein [Objekt](objekt) aus, mit
    dem das neue Diagramm verknüpft sein soll
2.  Rufen Sie das Kontextmenü (rechte Maustaste) auf und wählen Sie die
    Funktion "Neues verknüpftes Diagramm".
3.  Wählen Sie eine [Vorlage](shapes-stencils-und-templates-de), die für das
    neue Diagramm verwendet werden soll.
4.  Das
    [Eigenschafts-Fenster](eigenschaften-dialogfenster)
    erscheint.
5.  Geben Sie einen Namen, sowie die gewünschten Attributwerte für das
    Diagramm ein.
6.  Das Diagramm wird zur Modellierung im [Graphical Visio
    Modeler](graphical-visio-modeler) geöffnet.
7.  Auf allen Diagrammen, auf denen das zu Beginn (Schritt 1.)
    ausgewählte Objekt verwendet wird, wird nun ein Smart-Tag mit dem
    Objekt angezeigt, der die Verknüpfung zum soeben erstellten Diagramm
    repräsentiert.

#### Anlegen eines Abhängigkeitsdiagramms

Siehe dazu: [Erstellen eines
Abhängigkeitsdiagramms](erstellen-eines-abhaengigkeitsdiagramms)

#### Systemattribute für Diagramme

Siehe dazu: [Systemattribute für Diagramme](systemattribute-fuer-diagramme)

### Abspeicherungsoptionen für Diagramme

Siehe dazu:
[Datenbank-Einstellungen](datenbank-einstellungen)

### Ein Diagramm öffnen

Diagramme können im [Repository](repository-de) auf folgende Arten geöffnet
werden:

-   Doppelklick auf ein Diagramm im Navigationsfenster
    -   Alternativ: "Öffnen" im Kontextmenü
-   Doppelklick auf ein Diagramm im Objektfenster
    -   Alternativ: "Öffnen" im Kontextmenü
-   Über das Kontextmenü für [Objekte](objekt)
    -   "Verknüpfte Diagramme" - zeigt jene Diagramme an, mit denen das
        ausgewählte Objekt verknüpft ist. Ein Klick auf den
        Diagrammnamen öffnet das entsprechende Diagramm.
    -   "Verwendet in Diagrammen" - zeigt jene Diagramme an, auf denen
        das ausgewählte Objekt verwendet wird. Ein Klick auf den
        Diagrammnamen öffnet das entsprechende Diagramm.  
          





 

![](//images.ctfassets.net/utx1h0gfm1om/3oX0SdFN964YykMmIk88uk/fcd21c021f23fdc6ed25bddc823a6eeb/1018007.png)

*Ein neues Diagramm erstellen*

 

![](//images.ctfassets.net/utx1h0gfm1om/6MsrF75yCscuMyyqkWOQkU/18569559da4e3822623e456f1ab1fed2/1018008.png)

*Diagrammauswahl im Kontextmenü eines Objekts im [Repository](repository-de)*

### Diagramme schützen

Diagramme können vor der Bearbeitung durch andere process4.biz-Benutzer,
sowie vor der Verwendung ohne process4.biz geschützt werden.

1.  Um ein Diagramm zu schützen, wählen Sie im Kontextmenü dieses
    Diagramms die die Option "Schützen" unter dem Punkt "Spezial" aus.
2.  Der Diagrammschutz-Wizard wird geöffnet.
3.  Wählen Sie die zu schützenden Diagramme aus.
4.  Vergeben Sie ein Passwort und erlauben Sie ggf. die Verwendung
    geschützter Diagramme in den angeführten
    [Erweiterungsmodulen](process4.biz_Erweiterungsmodule). Zum, Thema
    Passwortkomplexität, siehe
    [Datenbank-Einstellungen](Datenbank-Einstellungen)
5.  Der Diagrammschutz-Wizard schützt nun die ausgewählten Diagramme mit
    dem entsprechenden Passwort.

Geschützte Diagramme können wie folgt verwendet werden:

<table>
<colgroup>
<col style="width: 50%" />
<col style="width: 50%" />
</colgroup>
<thead>
<tr class="header">
<th>Ein geschütztes Diagramm kann</th>
<th>Ein geschütztes Diagramm kann nicht</th>
</tr>
</thead>
<tbody>
<tr class="odd">
<td><ul>
<li>gelöscht werden</li>
</ul></td>
<td><ul>
<li>ohne der Eingabe des Passworts geöffnet werden</li>
</ul></td>
</tr>
<tr class="even">
<td><ul>
<li>kopiert, ausgeschnitten, eingefügt oder verschoben werden; dabei bleibt aber auch die Kopie des Diagramms geschützt</li>
</ul></td>
<td><ul>
<li>als Visio-Datei geöffnet werden; es wird eine leere Visio-Datei geöffnet</li>
</ul></td>
</tr>
<tr class="odd">
<td><ul>
<li>nach der Eingabe des Passworts geöffnet, bearbeitet und gespeichert werden</li>
</ul></td>
<td><ul>
<li><p>nach der Eingabe des Passworts als Visio-Datei gespeichert werden (die Funktion &quot;Speichern unter&quot;, kann nicht ausgeführt werden)</p></li>
</ul></td>
</tr>
<tr class="even">
<td><ul>
<li>als Screenshot kopiert werden</li>
</ul></td>
<td><p> </p></td>
</tr>
</tbody>
</table>

#### Diagramm-Schutz entfernen

1.  Um den Schutz von Diagrammen wieder zu entfernen, wählen Sie die
    Funktion "Schutz entfernen" unter "Spezial" im Kontextmenü eines
    geschützten Diagramms aus.
2.  Im Diagrammschutz-Wizard, wählen Sie anschließend aus, welche
    Diagramme Sie entschlüsseln möchten.
3.  Geben Sie dann das Passwort ein, welches Sie zum Schützen verwendet
    haben.

**Anmerkung**: Jeder Benutzer der Gruppe Administrators, darf den Schutz
von Diagrammen entfernen, ohne das Passwort einzugeben.

### Diagramme validieren

Siehe dazu: [Validierungsskripte](validierungsskripte)

![](//images.ctfassets.net/utx1h0gfm1om/27u0mLZe7SeK4cEmgAmMC2/967b96ff5bc7509df1add00edd48211a/1018009.png)

*Der Diagrammschutz-Wizard*


<hr style="padding-top:2rem" />
<a href="https://github.com/process4/docs/issues" target="_blank" class="bgw btn btn-primary btn-lg shadow-sm">Report an issue</a>
<a href="https://github.com/process4/docs" target="_blank" class="bgw btn btn-primary btn-lg shadow-sm" style="margin-left:10px;">View source code</a>
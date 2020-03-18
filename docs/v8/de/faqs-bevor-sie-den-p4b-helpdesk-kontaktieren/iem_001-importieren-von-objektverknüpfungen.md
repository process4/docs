

### Problem

In der p4b-Datenbank haben Sie Objekte und Verknüpfungstypen angelegt.
Nun wollen Sie diese Objekte mithilfe des ExcelImport-Assistenten
manuell verknüpfen.

### Lösung

Hierzu ein Beispiel:

<table style="width:100%;">
<colgroup>
<col style="width: 16%" />
<col style="width: 16%" />
<col style="width: 16%" />
<col style="width: 16%" />
<col style="width: 16%" />
<col style="width: 16%" />
</colgroup>
<thead>
<tr class="header">
<th><p> </p></th>
<th><p>Object Name</p></th>
<th><p>LanguageID</p></th>
<th><p>Unit</p></th>
<th><p>Klasse</p></th>
<th><p>Object Links</p></th>
</tr>
</thead>
<tbody>
<tr class="odd">
<td><p><em>eine ID</em></p></td>
<td><p><em>Objekt 1</em></p></td>
<td><p>DE</p></td>
<td><p><em>Unit 1</em></p></td>
<td><p><em>Klasse 1</em></p></td>
<td><p><em>Liste von Verknüpfungen</em></p></td>
</tr>
<tr class="even">
<td><p><em>eine ID</em></p></td>
<td><p><em>Objekt 2</em></p></td>
<td><p>DE</p></td>
<td><p><em>Unit 2</em></p></td>
<td><p><em>Klasse 2</em></p></td>
<td><p><em>Liste von Verknüpfungen</em></p></td>
</tr>
</tbody>
</table>

-   Die Namen der Spalten "Unit" und "Klasse" müssen konform mit der
    aktuellen <span class="underline">Datenbank</span>sprache sein, so
    wäre z.B. "Klasse" in Englisch als "Class" anzugeben. Alle anderen
    Spalten müssen denselben (englischen) Namen tragen wie in der
    Tabelle oben.
-   Die LanguageID kann abhängig von der gewünschten Sprache die Werte
    DE (Deutsch), EN (Englisch), FR (Französisch) annehmen, muss aber
    mit der Sprache der Objektdaten übereinstimmen, d.h. Objekte mit
    LanguageID "DE" sollten auch einen deutschen "Object Name" besitzen,
    um den Importprozess nicht zu verwirren.
-   Jedes Objekt hat *eine ID*. Der einfachste Weg, an diese IDs zu
    kommen, ist, die gewählte Klasse zu exportieren, wobei **nur der
    Klassenname** im <span class="underline">Datenauswahlfenster</span>
    ausgewählt wird. Dieser Vorgang erfordert, dass alle Objekte bereits
    in der Datenbank gespeichert wurden.
-   Die Zelle *Liste von Verknüpfungen* sollte so formatiert werden,
    dass pro Zeile **innerhalb derselben Zelle** eine Verknüpfung
    angeführt wird. Um in Excel innerhalb einer Zelle einen
    Zeilenumbruch hinzuzufügen, drücken Sie Alt+Enter.

Hier ist die Verknüpfung:

<table style="width:100%;">
<colgroup>
<col style="width: 16%" />
<col style="width: 16%" />
<col style="width: 16%" />
<col style="width: 16%" />
<col style="width: 16%" />
<col style="width: 16%" />
</colgroup>
<thead>
<tr class="header">
<th><p>Direction</p></th>
<th><p>Verknüpfungstyp</p></th>
<th><p><em>(Abstand)</em></p></th>
<th><p>Klasse</p></th>
<th><p><em>(Abstand)</em></p></th>
<th><p>Objekt</p></th>
</tr>
</thead>
<tbody>
<tr class="odd">
<td><p><em>Richtung</em></p></td>
<td><p>[ <em>Verknüpfungstyp</em> ]</p></td>
<td><p>Leerzeichen</p></td>
<td><p><em>Klasse</em></p></td>
<td><p>Doppelpunkt mit Leerzeichen (&quot; : &quot;)</p></td>
<td><p><em>Objekt</em></p></td>
</tr>
</tbody>
</table>

-   Die *Richtung* kann die Werte **&gt;** (direkte Verknüpfung unseres
    Objekts zu dem hier angeführten), **&lt;** (direkte Verknüpfung des
    hier angeführten Objekts zu unserem Objekt) und **&lt;&gt;**
    (indirekte Verknüpfung zwischen den beiden Objekten) annehmen.
-   Der Verknüpfungstyp ist der volle Name des Verknüpfungstyps, mit
    eckigen Klammern umgeben. Selbst bei direkten Verknüpfungen wird
    hier der volle Name, nicht der DirectName oder OppositeName
    angegeben.  
    Beispiele:
    -   &gt; \[ linked to \] SomeOtherObjectClass : Object1\_Class2
    -   &lt; \[ linked to \] SomeOtherObjectClass : Object2\_Class2
    -   &lt;&gt; \[ linked with \] SomeOtherObjectClass :
        Object3\_Class2

Sie können sich am angehängten Example.xls Excel-Spreadsheet
orientieren.

### Zusammenfassung

1.  Erstellen Sie mithilfe des ExcelExports ein Excel-Spreadsheet,
    wobei **nur der Klassenname** im <span
    class="underline">Datenauswahlfenster</span> ausgewählt wird.
2.  Tragen Sie die gewünschten Verknüpfungen in die Spalte "Object
    Links" ein, wobei jede Verknüpfung nur einmal referenziert werden
    sollte, z.B. nur vom ausgehenden Von-Objekt.
3.  Importieren Sie nun das finale Excel-Spreadsheet. Wählen Sie
    "Objektverknüpfungen importieren" aus. Optional können Sie mit
    "Objektverknüpfungen mit Excel überschreiben" alle zuvor angelegten
    Verknüpfungen der betroffenen Objekte löschen, bevor die neuen
    Verknüpfungen aus der Excel-Datei importiert werden.

 

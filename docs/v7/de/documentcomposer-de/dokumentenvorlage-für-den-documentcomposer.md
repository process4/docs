-   [Formatvorlagen](#formatvorlagen)
    -   [P4B\_Title](#p4b_title)
    -   [P4B\_Diagramm](#p4b_diagramm)
    -   [P4B\_TextBlock](#p4b_textblock)
    -   [P4B\_TextBlockNamed](#p4b_textblocknamed)
    -   [P4B\_QueryTable](#p4b_querytable)
    -   [P4B\_QueryTableItem](#p4b_querytableitem)
    -   [P4B\_QueryList](#p4b_querylist)
    -   [P4B\_QueryBulletList](#p4b_querybulletlist)
    -   [P4B\_QueryListItem](#p4b_querylistitem)
    -   [P4B\_QueryNamedListItem](#p4b_querynamedlistitem)
    -   [P4B\_QueryNamedListItemCaption](#p4b_querynamedlistitemcaption)
    -   [P4B\_ListItem](#p4b_listitem)


Um einen Report mit dem DocumentComposer zu generieren müssen Sie eine
Word Dokument-Vorlage haben (d.h. eine "\*.dot"-Datei). Dieses enthält
die Anleitungen zur Formatierung des Reports (siehe auch Kapitel
Definition des Sets für den Report).  
Wenn Sie keine Vorlage eingeben, stellt der DocumentComposer eine solche
Dokumenten-Vorlage für Sie bereit. Diese wird für die Generierung des
Reports verwendet.  
Die erste Seite der Vorlage ist als Titelblatt formatiert. Die zweite
Seite dient als Basis, um die Zusammenfassung zu formatieren. Diese
Seiten können direkt in dem Dokument nach Ihren Wünschen angepasst
werden. Sie erscheinen dann am Anfang des generierten Reports.  
Die von process4.biz integrierte Vorlage bietet mehrere
Formatierungseigenschaften, die Sie ändern und anpassen können, damit
das Layout des Reports Ihren Wünschen besser entspricht.

### Formatvorlagen

Mehrere vordefinierte Formatvorlagen. Wenn eine dieser in der
Dokumentvorlage ausgewählt wird, wird sie im spezifizierten Teil des
Dokuments angewandt.

#### P4B\_Title

Verwendet für den Titel des Reports. Sie können für den Titel eine
Schriftart und andere Optionen wählen.

#### P4B\_Diagramm

Verwendet für die Diagrammeplatzierung (wird in einer Zeile angewandt).
Sie können eine Abschnittmarkierung sowie einen Abstand vor und nach dem
Diagramm usw. definieren.

#### P4B\_TextBlock

Verwendet für Objektattribute, die in Reihenform exportiert werden. Alle
Formatoptionen können hier verwendet werden.

#### P4B\_TextBlockNamed

Verwendet für Objektattribute mit Attributnamen, die in Reihenform
exportiert werden. Alle Formatoptionen können hier verwendet werden.
Beachten Sie, dass dieser Attributname und dessen Wert durch einen
Tabulator getrennt werden.

#### P4B\_QueryTable

Verwendet für Abfragen, die in Tabellenform exportiert werden.

#### P4B\_QueryTableItem

Verwendet für Texte in Tabellenzellen für Abfragenwerte. Sie können eine
spezielle Schrift bzw. Farbe des Texts definieren.

#### P4B\_QueryList

Verwendet für Abfragen, die in Listform exportiert werden. Auf die erste
Spalte der Abfrage wird diese Formatvorlage angewandt.

#### P4B\_QueryBulletList

Dasselbe wie P4B\_QueryList aber mit vordefinierter Verwendung von
Aufzählungszeichen statt Nummer in der Liste.

#### P4B\_QueryListItem

Verwendet für Werte, die in Listenform exportiert werden. Auf die zweite
und die weiteren Spalten der Abfrage wird diese Formatvorlage angewandt.

#### P4B\_QueryNamedListItem

Dasselbe wie P4B\_QueryListItem aber der Spaltenname wird vor den
Abfragewert gesetzt. Beachten Sie, dass der Spaltenname und dessen Wert
durch einen Tabulator getrennt sind. Sie können auch die gewünschte
Tabulatorplatzierung definieren.

#### P4B\_QueryNamedListItemCaption

wird für die Namen Abfragenspalten verwendet und markiert sie fett.

#### P4B\_ListItem

Verwendet für als Sub-Kapitel zu behandelnde Objekte. Sie werden als
Liste exportiert und die Objektnamen werden als Werte dieser Liste
betrachtet.

 

<table>
<colgroup>
<col style="width: 33%" />
<col style="width: 33%" />
<col style="width: 33%" />
</colgroup>
<tbody>
<tr class="odd">
<td><p>Definierte<br />
Formatvorlage</p></td>
<td><p>verwendet standardmäßig</p></td>
<td><p><br />
verwendet für</p></td>
</tr>
<tr class="even">
<td><p><br />
P4B_Title</p></td>
<td><p><br />
Titel</p></td>
<td><p><br />
Titel des Reports</p></td>
</tr>
<tr class="odd">
<td><p><br />
P4B_Diagram</p></td>
<td><p><br />
Normal</p></td>
<td><p><br />
Diagramm</p></td>
</tr>
<tr class="even">
<td><p><br />
P4B_TextBlock</p></td>
<td><p><br />
Programmformatierung</p></td>
<td><p><br />
Textblock &quot;als Wert&quot;</p></td>
</tr>
<tr class="odd">
<td><p><br />
P4B_TextBlockNamed</p></td>
<td><p><br />
Programmformatierung</p></td>
<td><p>Textblock &quot;als Wert mit<br />
Feldbezeichner&quot;</p></td>
</tr>
<tr class="even">
<td><p><br />
P4B_QueryTable</p></td>
<td><p><br />
Tabelle</p></td>
<td><p><br />
Abfrage &quot;als Tabelle&quot;</p></td>
</tr>
<tr class="odd">
<td><p><br />
P4B_QueryTableItem</p></td>
<td><p><br />
Normal</p></td>
<td><p><br />
Zelle in der Abfragetabelle</p></td>
</tr>
<tr class="even">
<td><p><br />
P4B_QueryList</p></td>
<td><p><br />
Listnummer 2</p></td>
<td><p>Abfrage &quot;als List e mit Nummer&quot; (erste Spalte der Abfrage)</p></td>
</tr>
<tr class="odd">
<td><p><br />
<br />
P4B_QueryBulletList</p></td>
<td><p><br />
<br />
Listnummer 2</p></td>
<td><p>Abfrage &quot;als Liste mit Aufzählungszeichen&quot; (erste Spalt e der Abfrage)</p></td>
</tr>
<tr class="even">
<td><p><br />
<br />
P4B_QueryListItem</p></td>
<td><p><br />
<br />
Normaler Bezeichner</p></td>
<td><p>zweite und weitere Spalten der Abfrage – verwendet für Abfrage &quot;als Liste mit Nummer / Aufzählungszeichen&quot;</p></td>
</tr>
<tr class="odd">
<td><p><br />
<br />
<br />
P4B_QueryNamedListItem</p></td>
<td><p><br />
<br />
<br />
Normaler Bezeichner</p></td>
<td><p>zweite und weitere Spalten der Abfrage mit Spaltennamen vor dessen Wert - verwendet für Abfrage &quot;als List e mit Nummer / Aufzählungszeichen und Feldbezeichner&quot;</p></td>
</tr>
<tr class="even">
<td><p><br />
<br />
P4B_QueryNamedListItemC<br />
aption</p></td>
<td><p><br />
<br />
<br />
Normaler Bezeichner</p></td>
<td><p>markiert die Namen von Abfragenspalten - verwendet für Abfrage &quot;als List e mit Nummer / Aufzählungszeichen und Feldbezeichner&quot;</p></td>
</tr>
<tr class="odd">
<td><p><br />
P4B_ListItem</p></td>
<td><p><br />
Listnummer</p></td>
<td><p><br />
Kapitelliste</p></td>
</tr>
</tbody>
</table>


<hr style="padding-top:2rem" />
<a href="https://github.com/process4/docs/issues" target="_blank" class="bgw btn btn-primary btn-lg shadow-sm">Report an issue</a>
<a href="https://github.com/process4/docs" target="_blank" class="bgw btn btn-primary btn-lg shadow-sm" style="margin-left:10px;">View source code</a>
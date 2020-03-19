
-   [Strukturdiagramm erstellen](#strukturdiagramm-erstellen)
-   [Diagrammstruktur verwenden](#diagrammstruktur-verwenden)

------------------------------------------------------------------------


Um einen DocumentComposer Report aus Teilen Ihres Modells zu erstellen,
können Sie entweder ein spezielles process4.biz Diagramm (ein
sogenanntes Strukturdiagramm) erstellen, oder Sie nutzen die bestehende
Diagramme Struktur (parent - child Diagramme). 

Wenn ein Strukturdiagramm verwendet werden soll, dann ist es spezifisch
für diesen einen Report und dient dazu, die Struktur sowie weitere Texte
zu liefern, die in den Report eingefügt werden können. Um einfach zu
verstehen, wie das funktioniert schauen Sie sich bitte das
Handbuch-Diagramm in der Unit "DocumentComposer" in der DemoDB an.

### Strukturdiagramm erstellen

Als erstes erstellen Sie bitte ein Diagramm, das
[Shapes](Shapes_Stencils_Templates) zweier Arten verwendet. In diesem
Beispiel kommen diese Shapes von den Klassen "Handbuch" und "Kapitel".
Diese Shapes sind direkt zueinander verknüpft via den Verknüpfungs-Typ
"*includes*" und "*is included in*". Die Struktur des Dokuments wird
später dann automatisch aus diesen Objekten erstellt, wobei mit dem Top
Level Objekt "Handbuch" begonnen wird und dann mit allen Objekten der
Klasse "Kapitel". Dies erstellt Ihnen das Inhaltsverzeichnis.

Sie können auch wie gewohnt die Funktion der
[Diagramm-Verknüpfungen](Verknüpfungen) verwenden, um zu anderen
Diagrammen zu verlinken. Diese verknüpften Diagramme werden dann
automatisch ins Dokument hinzugefügt entweder als Bild oder als Visio
Objekt (Siehe nächstes Kapitel für die Einstellungen). Darüber hinaus
können Sie spezielle Attribute (z.B. Textattribute) erstellen, die
später verwendet werden, um in den Report hinzugefügt zu werden.

### Diagrammstruktur verwenden

Es kann auch die bestehende Diagrammstruktur verwendet werden. Diese
entsteht automatisch durch die Diagramm-Objekt-Diagramm Verknüpfungen.
Das macht zum Beispiel Sinn um Prozessbeschreibungen aus
Prozessgruppendiagrammen zu erzeugen (zum Beispiel in der DemoDB beim AX
oder NAV Referenzmodell).

![Doc composer3](//images.ctfassets.net/6mz8d8cle1nl/1NNH2A6uzd0qh0JJsNzPq2/50a461ee519195253aa0d4175011e24a/Doc_composer3.png)


<hr style="padding-top:2rem" />
<a href="https://github.com/process4/docs/issues" target="_blank" class="bgw btn btn-primary btn-lg shadow-sm">Report an issue</a>
<a href="https://github.com/process4/docs" target="_blank" class="bgw btn btn-primary btn-lg shadow-sm" style="margin-left:10px;">View source code</a>
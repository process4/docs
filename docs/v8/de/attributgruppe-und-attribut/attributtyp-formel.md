-   [Erstellen einer Formel](#erstellen-einer-formel)
    -   [Beispiele](#beispiele)
    -   [Verwendung von shape-spezifischen Attributen](#verwendung-von-shape-spezifischen-attributen)
    -   [Anzeige einer Liste von Objekten/Diagrammen](#anzeige-einer-liste-von-objektendiagrammen)


Mit dem Attributtyp "Formel", können Sie Skripte verwenden, die es Ihnen
erlauben, Werte von anderen Objekten, Diagrammen usw. in diesem Attribut
anzuzeigen. Im [Repository](repository) wird der Wert des Attributes
dann automatisch ausgefüllt.

Formeln werden in VB (Visual Basic) geschrieben und Sie können dabei
auch alle
p4b-API-Funktionen verwenden. Außerdem verwendet der Formel-Text entsprechendes VB-Syntax
Highlighting. Beachten Sie bitte, dass die für Visual Basic reservierten
Schlüsselwörter nicht als DbName des Objektes in der Formel verwendet
werden dürfen; die Liste der Visual Basic Reserved Keywords finden Sie
hier: [  
http://msdn.microsoft.com/en-us/library/ksh7h19t%28v=vs.90%29.aspx](http://msdn.microsoft.com/en-us/library/ksh7h19t%28v=vs.90%29.aspx)   
Sollten Sie bereits DbNamen vergeben haben, die exakt einem
VB-Schlüsselwort entsprechen, dann ändern Sie bitte diese DbNamen.

------------------------------------------------------------------------

 

Wenn das Ergebnis eines Formel-Attributs ein
[Hyperlink](attributgruppe-und-attribut) sein soll, dann sollte das Attribut
"Ergebnis ist ein Hyperlink" auf "Wahr" gesetzt werden. Man kann den
Attributtyp "Formel" auch für [Shape-spezifische Attribute](shape-spezifische-attribute) verwenden.

<div class="info">

Wenn eine Formel nicht kalkuliert werden kann, wird Sie eine
Info-Meldung über mögliche Fehler informieren. Die Anzeige dieser
Info-Meldung, kann über die [Client-Einstellungen](client-einstellungen)
esteuert werden.

</div>

### Erstellen einer Formel

Für das Erstellen der Formel, wird der "DbName" (= der einzigartige
Datenbank-Name) eines Elements verwendet und als *This.DbName*
referenziert.

#### Beispiele

<table>
<colgroup><col style="width: 50%" /><col style="width: 50%" /></colgroup>
<thead>
<tr class="header">
<th><p><strong>Beispiel</strong></p></th>
<th><p><strong>Formel</strong></p></th>
</tr>
</thead>
<tbody>
<tr class="odd">
<td><p><span class="underline">Anzeige des Attributwertes eines verknüpften Objekts</span>:</p>
<ul>
<li>Für ein Objekt der Klasse &quot;A&quot;, gibt es ein Attribut mit dem DbName &quot;Property&quot;.</li>
<li>Für ein Objekt der Klasse &quot;B&quot;, gibt es ein Attribut mit dem Typ &quot;Formel&quot;.</li>
</ul>
<p><strong>Ziel</strong>: Es soll im Formel-Attribut des Objekts der Klasse &quot;B&quot;, der Wert des Attributs &quot;Property&quot; des verknüpften Objekts (aus der Klasse &quot;A&quot;) angezeigt werden.</p>
<p><span class="underline">Dafür gibt es z</span>wei mögliche Varianten:</p>
<ol>
<li>&quot;Property&quot; ist ein Enum-Attribut: es sollen aber Namen (nicht Nummern) des gesetzten Enum-Wertes dieses Attributs angezeigt werden.</li>
<li>&quot;Property&quot; ist ein String-Attribut.</li>
</ol></td>
<td><div class="code panel pdl" style="border-width: 1px;">
<div class="codeContent panelContent pdl">
<div class="sourceCode" id="cb1" data-syntaxhighlighter-params="brush: vb; gutter: false; theme: Confluence" data-theme="Confluence" style="brush: vb; gutter: false; theme: Confluence"><pre class="sourceCode vb"><code class="sourceCode monobasic"><a class="sourceLine" id="cb1-1" data-line-number="1">1) This.Linkedobject.Attributestring(<span class="st">&quot;Property&quot;</span>)</a>
<a class="sourceLine" id="cb1-2" data-line-number="2"></a>
<a class="sourceLine" id="cb1-3" data-line-number="3">2) This.Linkedobject.<span class="kw">Property</span></a></code></pre></div>
</div>
</div></td>
</tr>
<tr class="even">
<td><p><span class="underline">Anzeige des Attributwertes des verknüpften Diagramms</span></p>
<p>In der System-Klasse &quot;Diagramm&quot; (oder in einer anderen Diagrammklasse), gibt es ein Attribut mit dem DbName &quot;Property&quot;.</p>
<p><strong>Ziel</strong>: Für ein Objekt der Klasse &quot;A&quot;, soll nun in einem Formel-Attribut der Wert des Attributs &quot;Property&quot; des ersten (zweiten, dritten…) verknüpften Diagramms angezeigt werden.</p></td>
<td><div class="code panel pdl" style="border-width: 1px;">
<div class="codeContent panelContent pdl">
<div class="sourceCode" id="cb2" data-syntaxhighlighter-params="brush: vb; gutter: false; theme: Confluence" data-theme="Confluence" style="brush: vb; gutter: false; theme: Confluence"><pre class="sourceCode vb"><code class="sourceCode monobasic"><a class="sourceLine" id="cb2-1" data-line-number="1">This.LinkedDiagrams(1).<span class="kw">Property</span></a></code></pre></div>
</div>
</div>
<p>(&quot;1&quot; ist dabei die Ordnungsnummer des verknüpften Diagramms)</p></td>
</tr>
<tr class="odd">
<td><p><span class="underline">Anzeige eines Attributwertes des Diagramms, auf dem das Objekt verwendet wird</span></p>
<p>In der System-Klasse &quot;Diagramm&quot; (oder in einer anderen Diagrammklasse), gibt es ein Attribut mit dem DbName &quot;Property&quot;.</p>
<p><strong>Ziel</strong>: Für ein Objekt der Klasse &quot;A&quot;, soll nun in einem Formel-Attribut der Wert des Attributs &quot;Property&quot; des ersten (zweiten, dritten…) Diagramms, auf dem das Objekt verwendet wird, angezeigt werden.</p></td>
<td><div class="code panel pdl" style="border-width: 1px;">
<div class="codeContent panelContent pdl">
<div class="sourceCode" id="cb3" data-syntaxhighlighter-params="brush: vb; gutter: false; theme: Confluence" data-theme="Confluence" style="brush: vb; gutter: false; theme: Confluence"><pre class="sourceCode vb"><code class="sourceCode monobasic"><a class="sourceLine" id="cb3-1" data-line-number="1">This.Diagrams(1).<span class="kw">Property</span></a></code></pre></div>
</div>
</div>
<p>(&quot;1&quot; ist dabei die Ordnungsnummer des Diagramms, auf dem das Objekt verwendet wird)</p></td>
</tr>
<tr class="even">
<td><p><span class="underline">Anzeige der Summe von Werten aus mehreren Attributen</span></p>
<p>In der Klasse &quot;A&quot;, gibt es drei Attribute mit den DbNamen &quot;Price1&quot;, &quot;Price2&quot; und &quot;Price3&quot; und dem Attributtyp &quot;Double&quot; oder &quot;Integer&quot;.</p>
<p><strong>Ziel</strong>: In einem anderen Attribut mit dem Typ &quot;Formel&quot; in der selben Klasse, soll die Summe dieser Werte angezeigt werden.</p></td>
<td><div class="code panel pdl" style="border-width: 1px;">
<div class="codeContent panelContent pdl">
<div class="sourceCode" id="cb4" data-syntaxhighlighter-params="brush: vb; gutter: false; theme: Confluence" data-theme="Confluence" style="brush: vb; gutter: false; theme: Confluence"><pre class="sourceCode vb"><code class="sourceCode monobasic"><a class="sourceLine" id="cb4-1" data-line-number="1">This.Price1+This.Price2+This.Price3</a></code></pre></div>
</div>
</div>
<p><em><br />
</em></p></td>
</tr>
<tr class="odd">
<td><p><span class="underline">Anzeige des Attributwertes eines verknüpften Objektes auf einem Diagramm</span></p>
<p>In der Klasse &quot;Prozess&quot;, gibt es ein Attribut mit dem DbName &quot;Owner&quot;.</p>
<p>In der Systemklasse &quot;Diagramm&quot; (oder in der Diagrammklasse, zu der das Diagramm gehört), erstellen Sie ein Attribut &quot;Diagramm Owner&quot; mit dem Typ &quot;Formel&quot;.</p>
<p><strong>Ziel</strong>: Wenn ein Objekt der Klasse &quot;Prozess&quot; mit einem Diagramm verlinkt wird, soll im Diagrammattribut &quot;Diagramm Owner&quot; der Wert des Attributs &quot;Owner&quot; des verknüpften Objektes angezeigt werden.</p></td>
<td><div class="code panel pdl" style="border-width: 1px;">
<div class="codeContent panelContent pdl">
<div class="sourceCode" id="cb5" data-syntaxhighlighter-params="brush: vb; gutter: false; theme: Confluence" data-theme="Confluence" style="brush: vb; gutter: false; theme: Confluence"><pre class="sourceCode vb"><code class="sourceCode monobasic"><a class="sourceLine" id="cb5-1" data-line-number="1">This.LinkedObjects.Item(1).Owner</a></code></pre></div>
</div>
</div>
<p><em> </em></p></td>
</tr>
<tr class="even">
<td><p><span class="underline">Anzeige eines Attributwertes vom Parent-Diagramm auf einem Diagramm</span></p>
<p>In der Systemklasse &quot;Diagramm&quot; (oder in der Diagrammklasse, zu der das Diagramm gehört), gibt es das Attribut &quot;Property&quot; und ein anderes Attribut &quot;Parent property&quot; mit dem Typ &quot;Formel&quot;.</p>
<p><strong>Ziel</strong>: In dem Attribut &quot;Parent property&quot;, soll der &quot;Property&quot; Wert des jeweiligen Parent-Diagramms angezeigt werden.</p></td>
<td><div class="code panel pdl" style="border-width: 1px;">
<div class="codeContent panelContent pdl">
<div class="sourceCode" id="cb6" data-syntaxhighlighter-params="brush: vb; gutter: false; theme: Confluence" data-theme="Confluence" style="brush: vb; gutter: false; theme: Confluence"><pre class="sourceCode vb"><code class="sourceCode monobasic"><a class="sourceLine" id="cb6-1" data-line-number="1">This.ParentDiagram.<span class="kw">Property</span></a></code></pre></div>
</div>
</div>
<p><em><br />
</em></p></td>
</tr>
<tr class="odd">
<td><p><span class="underline">Anzeige des Namens von Parent-Diagramm(en)</span></p>
<ol>
<li>In der Systemklasse &quot;Diagramm&quot;, gibt es ein Attribut mit dem Typ &quot;Formel&quot;, wo Namen von allen Parent-Diagrammen eines Diagramms angezeigt werden sollen. Wenn es mehrere Parent-Diagramme gibt, werden diese in einer Liste angezeigt.</li>
<li>In der Systemklasse &quot;Diagramm&quot;, gibt es ein Attribut mit dem Typ &quot;Formel&quot;, wo Namen von einem Parent-Diagramm mit einem bestimmten Index (1, 2, 3 etc.) angezeigt werden sollen.<br />
Der Index des Parent-Diagramms entspricht der Reihenfolge, in der Parent-Diagramme in oberer Formel aufgelistet sind.</li>
<li>In der Systemklasse &quot;Diagramm&quot;, gibt es ein Attribut mit dem Typ &quot;Formel&quot;, wo der Name von nur einem Parent-Diagramm angezeigt werden soll. Wenn es mehrere Parent-Diagramme gibt, wird als Ergebnis &quot;[multiple parent diagrams]&quot; angezeigt.</li>
</ol></td>
<td><div class="code panel pdl" style="border-width: 1px;">
<div class="codeContent panelContent pdl">
<div class="sourceCode" id="cb7" data-syntaxhighlighter-params="brush: vb; gutter: false; theme: Confluence" data-theme="Confluence" style="brush: vb; gutter: false; theme: Confluence"><pre class="sourceCode vb"><code class="sourceCode monobasic"><a class="sourceLine" id="cb7-1" data-line-number="1">1) This.ParentDiagrams.Name</a>
<a class="sourceLine" id="cb7-2" data-line-number="2"></a>
<a class="sourceLine" id="cb7-3" data-line-number="3">2) This.ParentDiagrams(i).Name</a>
<a class="sourceLine" id="cb7-4" data-line-number="4"></a>
<a class="sourceLine" id="cb7-5" data-line-number="5">3) This.ParentDiagram.Name</a></code></pre></div>
</div>
</div></td>
</tr>
<tr class="even">
<td><p><span class="underline">Anzeige des Attributwertes vom Child Diagramm auf einem Diagramm</span></p>
<p>In der Systemklasse &quot;Diagramm&quot; (oder in der Klasse, zu der das Diagramm gehört), gibt es das Attribut &quot;Property&quot; und ein anderes Attribut &quot;Child property&quot;, jeweils mit dem Typ &quot;Formel&quot;.</p>
<p><strong>Ziel</strong>: In dem Attribut &quot;Child property&quot;, soll der &quot;Property&quot; Wert des Child Diagramms angezeigt werden.</p></td>
<td><div class="code panel pdl" style="border-width: 1px;">
<div class="codeContent panelContent pdl">
<div class="sourceCode" id="cb8" data-syntaxhighlighter-params="brush: vb; gutter: false; theme: Confluence" data-theme="Confluence" style="brush: vb; gutter: false; theme: Confluence"><pre class="sourceCode vb"><code class="sourceCode monobasic"><a class="sourceLine" id="cb8-1" data-line-number="1">This.ChildDiagram.<span class="kw">Property</span></a></code></pre></div>
</div>
</div>
<p><em><br />
</em></p></td>
</tr>
<tr class="odd">
<td><p><span class="underline">Die Liste von ENUM Elementen von Objekten einer Klasse soll vom Attributwert eines Objekts einer anderen Klasse abhängen</span></p>
<ul>
<li>In der Klasse &quot;A&quot;, gibt es ein Attribut &quot;X&quot; mit den Enum-Elementen &quot;X0&quot;, &quot;X1&quot;, &quot;X2&quot;.</li>
<li>In der Klasse &quot;B&quot;, gibt es ein Attribut &quot;Y&quot; mit den Enum-Elementen &quot;Y0&quot;, &quot;Y1&quot;, &quot;Y2&quot;.</li>
</ul>
<p><strong>Ziel</strong>: Wenn für ein Objekt der Klasse &quot;A&quot;, der Attributwert auf &quot;X1&quot; gesetzt ist und es mit einem Objekt der Klasse &quot;B&quot; verknüpft ist, soll im Objekt &quot;B&quot; das Enum-Element &quot;Y1&quot; in der Enumerator Liste nicht sichtbar und nicht auswählbar sein.</p></td>
<td><p>Öffnen Sie die Enum-Elemente des Attributs &quot;Y&quot; der Klasse &quot;B&quot;, wählen Sie die das Enum-Element &quot;Y1&quot; und schreiben Sie im Bedingungen Feld:</p>
<div class="code panel pdl" style="border-width: 1px;">
<div class="codeContent panelContent pdl">
<div class="sourceCode" id="cb9" data-syntaxhighlighter-params="brush: vb; gutter: false; theme: Confluence" data-theme="Confluence" style="brush: vb; gutter: false; theme: Confluence"><pre class="sourceCode vb"><code class="sourceCode monobasic"><a class="sourceLine" id="cb9-1" data-line-number="1">This.LinkedObjects(<span class="st">&quot;A&quot;</span>).Item(1).X=1</a></code></pre></div>
</div>
</div>
<p>(&quot;1&quot; ist die Ordnungsnummer des ENUM Elements &quot;X1&quot;)</p></td>
</tr>
<tr class="even">
<td><p><span class="underline">Diagramme abhängig vom Zeitpunkt mit Hilfe von Formel markieren</span></p>
<p><strong>Ziel</strong>: Diagramme zu einem konkreten Zeitpunkt zur Überprüfung markieren</p>
<ol>
<li><p>Ein neues Attribut vom Typ &quot;DateTime&quot; für die Systemklasse &quot;Diagramm&quot; hinzufügen und es &quot;Check at&quot; nennen.</p></li>
<li>Ein weiteres Attribut vom Typ &quot;Formel&quot; für die Systemklasse &quot;Diagramm&quot; hinzufügen und es &quot;Needs Check&quot; nennen. Dieses Attribut wird dann auf &quot;Wahr&quot; gesetzt, wenn das Diagramm überprüft werden soll.</li>
</ol>
<p>Process4.biz kann das aktuelle Datum mit dem Datum, das im Attribut &quot;Check at&quot; angegeben ist, vergleichen; wenn das aktuelle Datum gleich oder größer ist, als das Datum im Attribut, dann soll das Attribut &quot;Needs check&quot; auf den Wert &quot;Wahr&quot; gesetzt werden.</p>
<p>Hinweis: Das Attribut &quot;Needs check&quot;, kann auch auf Diagrammen verwendet werden, um den Wert mit Hilfe von Visio Datengrafiken anzuzeigen.</p></td>
<td><div class="code panel pdl" style="border-width: 1px;">
<div class="codeContent panelContent pdl">
<div class="sourceCode" id="cb10" data-syntaxhighlighter-params="brush: vb; gutter: false; theme: Confluence" data-theme="Confluence" style="brush: vb; gutter: false; theme: Confluence"><pre class="sourceCode vb"><code class="sourceCode monobasic"><a class="sourceLine" id="cb10-1" data-line-number="1"><span class="kw">Not</span> IsEmpty(This.Check_At) <span class="kw">And</span> Now() &gt; This.Check_At</a></code></pre></div>
</div>
</div></td>
</tr>
<tr class="odd">
<td><p><span class="underline">Bestimmte Attributwerte der Objekte eines Diagramms summieren</span></p>
<p>Die Klasse &quot;Action&quot;, hat das Attribut &quot;Rate&quot;. Objekte dieser Klasse, werden auf Diagrammen der Klasse &quot;Diagram&quot; verwendet.</p>
<p><strong>Ziel</strong>: Ein Formel-Attribut &quot;Sum&quot; für Diagramme der Klasse &quot;Diagram&quot;, welches die Werte des Attributs &quot;Rate&quot; der Objekte auf den Diagrammen dieser Klasse summiert.</p>
<p>Achtung: das Attribut &quot;Rate&quot;, muss für eine solche Berechnung den Attributtyp &quot;Integer&quot; oder &quot;Double&quot; haben.</p></td>
<td><div class="code panel pdl" style="border-width: 1px;">
<div class="codeContent panelContent pdl">
<div class="sourceCode" id="cb11" data-syntaxhighlighter-params="brush: vb; gutter: false; theme: Confluence" data-theme="Confluence" style="brush: vb; gutter: false; theme: Confluence"><pre class="sourceCode vb"><code class="sourceCode monobasic"><a class="sourceLine" id="cb11-1" data-line-number="1">sum = 0</a>
<a class="sourceLine" id="cb11-2" data-line-number="2"><span class="kw">Set </span>objs = This.Objects</a>
<a class="sourceLine" id="cb11-3" data-line-number="3"><span class="kw">For </span>Each obj In objs</a>
<a class="sourceLine" id="cb11-4" data-line-number="4">  <span class="kw">If </span>obj.Class.DbName = <span class="st">&quot;Action&quot;</span> <span class="kw">Then</span></a>
<a class="sourceLine" id="cb11-5" data-line-number="5">sum = sum + obj.Attribute(<span class="st">&quot;Rate&quot;</span>)</a>
<a class="sourceLine" id="cb11-6" data-line-number="6">  <span class="kw">End If</span></a>
<a class="sourceLine" id="cb11-7" data-line-number="7"><span class="kw">Next</span></a>
<a class="sourceLine" id="cb11-8" data-line-number="8">Result = sum</a></code></pre></div>
</div>
</div></td>
</tr>
</tbody>
</table>

#### Verwendung von shape-spezifischen Attributen

<table>
<colgroup><col style="width: 50%" /><col style="width: 50%" /></colgroup>
<thead>
<tr class="header">
<th>Beispiel</th>
<th>Formel</th>
</tr>
</thead>
<tbody>
<tr class="odd">
<td><p>Der Name des Diagramms, auf dem sich das Shape befindet.</p></td>
<td><em>ShapeDiagramName</em></td>
</tr>
<tr class="even">
<td><p>Die ID des Diagramms, auf dem sich das Shape befindet.</p></td>
<td><p><em>ShapeDiagramId</em></p></td>
</tr>
<tr class="odd">
<td>Die ID des Shapes.</td>
<td><p><em>ShapeID</em></p></td>
</tr>
</tbody>
</table>

#### Anzeige einer Liste von Objekten/Diagrammen

<table>
<colgroup>
<col style="width: 50%" />
<col style="width: 50%" />
</colgroup>
<thead>
<tr class="header">
<th><p>Beispiel</p></th>
<th><p>Formel</p></th>
</tr>
</thead>
<tbody>
<tr class="odd">
<td><p>Die Liste von verknüpften Objekten.</p></td>
<td><p><em>This.LinkedObjects.Name</em></p></td>
</tr>
<tr class="even">
<td><p>Die Liste der Namen von Diagrammen, auf denen das jeweilige Objekt verwendet wird.</p></td>
<td><p><em>This.Diagrams.Name</em></p></td>
</tr>
<tr class="odd">
<td><p>Die Liste der verknüpften Diagramme.</p></td>
<td><p><em>This.LinkedDiagrams.Name</em></p></td>
</tr>
<tr class="even">
<td><p>Die Attributliste von allen mit dem Objekt verknüpften Diagrammen.</p></td>
<td><p><em>This.LinkedDiagrams.Property</em></p></td>
</tr>
</tbody>
</table>

### Geerbte Attribute

Es ist auch möglich ein Attribut zu definieren, dessen Wert geerbt wird durch den Diagrammbaum. Zum Beispiel haben wir eine (Parent) Klasse mit dem Attribut Temperatur. 

Wir platzieren ein Objekt dieser Klasse in ein Diagramm. Eine andere (Child) Klasse (welche in einem verknüpftem Diagram sein wird) sollte den Wert der Property ausblenden. Deshalb, kreieren wire in neues Attribut für die Klasse im Designer und setzen des Attributtyp Formel.


 ![0](//images.ctfassets.net/utx1h0gfm1om/59yMGWvWfYuCcqccUWCQ0c/7891ef5efaeeea0304c0e8cbb383cfac/0.jpg)
 
 Dieses geerbte Attribut („\<dbname\>“)
Da (in diesem Beispiel) der Wert den wir vererben wollen den DbName „temp“ hat, sollten wir schreiben: ThisInheritedAttribute(„temp“).

![1](//images.ctfassets.net/utx1h0gfm1om/hHjzKbYhRmoMIm0yMC8oS/915a0e8060a746343905740fe7d28de2/1.jpg)

Immer wenn die Klasse B benutzt wird in irgendeinem Diagramm welches mit der Klasse A verlinkt ist, dann zeigt die Klasse B den Wert der Klasse A an. 

![2](//images.ctfassets.net/utx1h0gfm1om/4rvPg6FAVOeUkYo0ym2cuo/e44d839eac5f123cb2c409d96351cc41/2.jpg)




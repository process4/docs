-   [Bedingung](#bedingung)
-   [Meldung](#meldung)
-   [Bedingungen erstellen](#bedingungen-erstellen)
    -   [Beispiele von Bedingungen für Verknüpfungsregeln](#beispiele-von-bedingungen-für-verknüpfungsregeln)

------------------------------------------------------------------------

Für Verknüpfungsregeln können im [Database Designer](database-designer-de)
(oder auch in der [Klassenmatrix](klassenmatrix))
[Bedingungen](bedingungen) hinterlegt werden, die der folgenden Logik
folgen:

Logik für Bedingungen

Die Verknüpfungstechnologie soll nur dann zu einer Verknüpfung führen,
wenn die Bedingung "Wahr" ist, ansonsten wird sie ignoriert.


### Bedingung

In diesem Feld, können Sie entweder eine Bedingung eingeben, oder ein
kleines Programm in Visual Basic eintragen. Im zweiten Fall soll die
Variable "Result" unbedingt einen Wert ("True" oder "False") haben.

<div class="warning">

Achten Sie bitte darauf, dass Sie bei der Verwendung einer Klasse oder
eines Attributs in der Bedingung deren DbNamen schreiben und nicht nur
den Namen, da der DbName von der Inhaltssprache (Ihres Modells)
unabhängig ist und Sie dann bei Modellübersetzungen keine Probleme
haben. 

</div>

Sie können hier auch alle API-Funktionen von process4.biz nutzen; die
Beschreibung dieser finden Sie hier:
http://dev.process4.biz/confluence/display/KB/p4b+API+Description

### Meldung

In diesem Feld, wird jener Text hinterlegt, der bei der
[Validierung](validierungsskripte) eines [Diagramms](diagramm)
erscheinen soll, um die korrekte Verknüpfung zweier [Objekte](objekt) zu
bestätigen bzw. über die Nicht-Erfüllung der Bedingung zu informieren.
Wenn Sie die Regelmeldung leer lassen, wird für die bedingte
Verknüpfungsregel im Validierungsfenster keine Information angezeigt
werden.

Sie können die Regelmeldung sowohl positiv (= erfolgreicher Verknüpfung;
z.B. "Die Verknüpfung zwischen Input und Kunde war erfolgreich."), als
auch negativ (= fehlgeschlagene Verknüpfung; z.B. "Das Shape 'Ende' darf
keine ankommende Verknüpfung haben.") benutzen.

### Bedingungen erstellen

Für die Erstellung von Bedingungen für
[Verknüpfungsregeln](verknüpfungsregeln), können folgende
Context-Objekte verwendet werden:

<table>
<colgroup>
<col style="width: 50%" />
<col style="width: 50%" />
</colgroup>
<thead>
<tr class="header">
<th><p>Name</p></th>
<th><p>Beschreibung</p></th>
</tr>
</thead>
<tbody>
<tr class="odd">
<td><p>LinkedObject (&quot;Event&quot;)</p></td>
<td><p>Objekt aus der Klasse mit dem DbNamen &quot;Event&quot;.</p></td>
</tr>
<tr class="even">
<td><p>SrcObject</p></td>
<td><p>Quell-Objekt für den Link (P4B.Object).</p></td>
</tr>
<tr class="odd">
<td><p>DstObject</p></td>
<td><p>Ziel-Objekt für den Link (P4B.Object).</p></td>
</tr>
<tr class="even">
<td><p>Object</p></td>
<td><p>Das Assoziationsobjekt selbst (P4B.Object).</p></td>
</tr>
<tr class="odd">
<td><p>DiagramObjects</p></td>
<td><p>Liste von allen Objekten auf dem Diagramm (P4B.Objects).</p></td>
</tr>
<tr class="even">
<td><p>DiagramLinks</p></td>
<td><p>Liste aller entdeckten automatischen Verknüpfungen auf dem Diagramm.</p></td>
</tr>
<tr class="odd">
<td><p>Result</p></td>
<td><p>Variable für das Ergebnis der Bedingung, &quot;True&quot; oder &quot;False&quot;; Wenn &quot;True&quot;, kommt die Verknüpfung zwischen den Objekten zu Stande.</p></td>
</tr>
</tbody>
</table>

Wenn die Verknüpfung gerichtet (also mit einer Pfeilspitze oder
Leserichtung versehen) ist und Sie leicht verstehen können, welches
Objekt das Quellobjekt und welches das Zielobjekt ist, dann können Sie
die Funktionen *SrcObject* und *DstObject* benutzen. Es gibt allerdings
auch die Funktion *LinkedObject("X")*: in diesem Fall ist es egal, ob
das Objekt ein Quell- oder ein Zielobjekt ist - es zählt nur, dass
dieses Objekt zur Klasse mit dem DbNamen "X" gehört.

#### Beispiele von Bedingungen für Verknüpfungsregeln

<table>
<colgroup>
<col style="width: 50%" />
<col style="width: 50%" />
</colgroup>
<thead>
<tr class="header">
<th><p>Bedingung</p></th>
<th><p>Beschreibung</p></th>
</tr>
</thead>
<tbody>
<tr class="odd">
<td><div class="code panel pdl" style="border-width: 1px;">
<div class="codeContent panelContent pdl">
<div class="sourceCode" id="cb1" data-syntaxhighlighter-params="brush: vb; gutter: false; theme: Confluence" data-theme="Confluence" style="brush: vb; gutter: false; theme: Confluence"><pre class="sourceCode vb"><code class="sourceCode monobasic"><a class="sourceLine" id="cb1-1" data-line-number="1">SrcObject.Mastershape=1</a></code></pre></div>
</div>
</div></td>
<td><p>Die so bedingte Verknüpfungsregel wird nur dann verwendet, wenn der Wert des Attributs (des Quellobjekts der Verknüpfung, dh. <em>SrcObject</em>) mit dem DbNamen &quot;Mastershape&quot; genau &quot;1&quot; ist.</p></td>
</tr>
<tr class="even">
<td><div class="code panel pdl" style="border-width: 1px;">
<div class="codeContent panelContent pdl">
<div class="sourceCode" id="cb2" data-syntaxhighlighter-params="brush: vb; gutter: false; theme: Confluence" data-theme="Confluence" style="brush: vb; gutter: false; theme: Confluence"><pre class="sourceCode vb"><code class="sourceCode monobasic"><a class="sourceLine" id="cb2-1" data-line-number="1">SrcObject.Mastershape&lt;&gt;1</a></code></pre></div>
</div>
</div></td>
<td><p>Die so bedingte Verknüpfungsregel wird nur dann verwendet, wenn der Wert des Attributs (des Quellobjekts der Verknüpfung, dh. <em>SrcObject</em>) mit dem DbNamen &quot;Mastershape&quot; ungleich &quot;1&quot; ist.</p></td>
</tr>
<tr class="odd">
<td><div class="code panel pdl" style="border-width: 1px;">
<div class="codeContent panelContent pdl">
<div class="sourceCode" id="cb3" data-syntaxhighlighter-params="brush: vb; gutter: false; theme: Confluence" data-theme="Confluence" style="brush: vb; gutter: false; theme: Confluence"><pre class="sourceCode vb"><code class="sourceCode monobasic"><a class="sourceLine" id="cb3-1" data-line-number="1">SrcObject.Mastershape=2 <span class="kw">OR</span> DstObject.Mastershape=2</a></code></pre></div>
</div>
</div></td>
<td><p>Die so bedingte Verknüpfungsregel wird nur dann verwendet, wenn die Werte des Attributs (des Quell- oder Zielobjekts der Verknüpfung, dh. <em>SrcObject OR DstObject</em>) mit dem DbNamen &quot;Mastershape&quot; gleich &quot;2&quot; sind.</p></td>
</tr>
<tr class="even">
<td><div class="code panel pdl" style="border-width: 1px;">
<div class="codeContent panelContent pdl">
<div class="sourceCode" id="cb4" data-syntaxhighlighter-params="brush: vb; gutter: false; theme: Confluence" data-theme="Confluence" style="brush: vb; gutter: false; theme: Confluence"><pre class="sourceCode vb"><code class="sourceCode monobasic"><a class="sourceLine" id="cb4-1" data-line-number="1">SrcObject.Mastershape&lt;&gt;2 <span class="kw">AND</span> DstObject.Mastershape&lt;&gt;2</a></code></pre></div>
</div>
</div></td>
<td><p>Die so bedingte Verknüpfungsregel wird nur dann verwendet, wenn die Werte des Attributs (des Quell- und Zielobjekts der Verknüpfung, dh. <em>SrcObject AND DstObject</em>) mit dem DbNamen &quot;Mastershape&quot; genau &quot;2&quot; sind.</p></td>
</tr>
<tr class="odd">
<td><div class="code panel pdl" style="border-width: 1px;">
<div class="codeContent panelContent pdl">
<div class="sourceCode" id="cb5" data-syntaxhighlighter-params="brush: vb; gutter: false; theme: Confluence" data-theme="Confluence" style="brush: vb; gutter: false; theme: Confluence"><pre class="sourceCode vb"><code class="sourceCode monobasic"><a class="sourceLine" id="cb5-1" data-line-number="1">IsNull(DstObject.Mastershape) <span class="kw">OR</span> DstObject.Mastershape&lt;&gt;1</a></code></pre></div>
</div>
</div></td>
<td><p>Die so bedingte Verknüpfungsregel wird nur dann verwendet, wenn der Wert des Attributs (des Quellobjekts der Verknüpfung, dh. <em>SrcObject</em>) mit dem DbNamen &quot;Mastershape&quot; leer oder ungleich &quot;1&quot; ist.</p></td>
</tr>
<tr class="even">
<td><div class="code panel pdl" style="border-width: 1px;">
<div class="codeContent panelContent pdl">
<div class="sourceCode" id="cb6" data-syntaxhighlighter-params="brush: vb; gutter: false; theme: Confluence" data-theme="Confluence" style="brush: vb; gutter: false; theme: Confluence"><pre class="sourceCode vb"><code class="sourceCode monobasic"><a class="sourceLine" id="cb6-1" data-line-number="1">SrcShape.Cells(<span class="st">&quot;PinX&quot;</span>).ResultIU &lt; DstShape.Cells(<span class="st">&quot;PinX&quot;</span>).ResultIU</a></code></pre></div>
</div>
</div></td>
<td><p>Die so bedingte Verknüpfungsregel wird nur dann verwendet, wenn das Quellobjekt links vom Zielobjekt der Verknüpfung platziert wurde.</p>
<p>Funktioniert auch umgekehrt, wenn die Bedingung entsprechend angepasst wird.</p></td>
</tr>
<tr class="odd">
<td><div class="code panel pdl" style="border-width: 1px;">
<div class="codeContent panelContent pdl">
<div class="sourceCode" id="cb7" data-syntaxhighlighter-params="brush: vb; gutter: false; theme: Confluence" data-theme="Confluence" style="brush: vb; gutter: false; theme: Confluence"><pre class="sourceCode vb"><code class="sourceCode monobasic"><a class="sourceLine" id="cb7-1" data-line-number="1">SrcShape.Cells(<span class="st">&quot;PinY&quot;</span>).ResultIU &lt; DstShape.Cells(<span class="st">&quot;PinY&quot;</span>).ResultIU</a></code></pre></div>
</div>
</div></td>
<td><p>Die so bedingte Verknüpfungsregel wird nur dann verwendet, wenn das Quellobjekt unter dem Zielobjekt der Verknüpfung platziert wurde.</p>
<p>Funktioniert auch umgekehrt, wenn die Bedingung entsprechend angepasst wird.</p>
<p> </p></td>
</tr>
</tbody>
</table>

<hr style="padding-top:2rem" />
<a href="https://github.com/process4/docs/issues" target="_blank" class="bgw btn btn-primary btn-lg shadow-sm">Report an issue</a>
<a href="https://github.com/process4/docs" target="_blank" class="bgw btn btn-primary btn-lg shadow-sm" style="margin-left:10px;">View source code</a>
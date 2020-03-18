-   [Bedingungen erstellen](#bedingungen-erstellen)
    -   [Beispiele](#beispiele)
    -   [Beispiel-Anwendungsfall](#beispiel-anwendungsfall)

Mit dem [Systemattribut](systemattribute) "Bedingung", können Sie
definieren, unter welchen Voraussetzungen ein bestimmtes
[Attribut](attributgruppe-und-attribut), eine Attributgruppe oder ein
Enum-Element ein- bzw. ausgeblendet werden soll.

Bedingungen beziehen sich dabei auf die Werte anderer Attribute in der
selben [Klasse](klasse).

Falls Bedingungen für [Verknüpfungsregeln](verknüpfungsregeln) erstellt
werden sollen, siehe [Bedingungen für Verknüpfungsregeln](bedingungen-für-verknüpfungsregeln).

------------------------------------------------------------------------

 

### Bedingungen erstellen

Für die Erstellung von Bedingungen, können Sie die Standard-Operatoren
von Visual Basic, zusammen mit den DbNamen der Attribute, verwenden.

#### Beispiele

**Achtung**: "Attribut" muss in den folgenden Beispielen mit dem DbNamen
des Attributs ersetzt werden, auf dem die Bedingung basiert.

<table>
<colgroup>
<col style="width: 50%" />
<col style="width: 50%" />
</colgroup>
<thead>
<tr class="header">
<th>Zielsetzung</th>
<th>Bedingung</th>
</tr>
</thead>
<tbody>
<tr class="odd">
<td>Das Attribut, welches die Bedingung enthält, soll nur dann angezeigt werden, wenn das angegebene Bool-Attribut auf &quot;Wahr&quot; gesetzt ist.</td>
<td><div class="code panel pdl" style="border-width: 1px;">
<div class="codeContent panelContent pdl">
<div class="sourceCode" id="cb1" data-syntaxhighlighter-params="brush: vb; gutter: false; theme: Confluence" data-theme="Confluence" style="brush: vb; gutter: false; theme: Confluence"><pre class="sourceCode vb"><code class="sourceCode monobasic"><a class="sourceLine" id="cb1-1" data-line-number="1">This.Attribut=<span class="kw">True</span></a></code></pre></div>
</div>
</div></td>
</tr>
<tr class="even">
<td>Das Attribut, welches die Bedingung enthält, soll nur dann angezeigt werden, wenn das angegebene Bool-Attribut auf &quot;Falsch&quot; gesetzt ist.</td>
<td><div class="code panel pdl" style="border-width: 1px;">
<div class="codeContent panelContent pdl">
<div class="sourceCode" id="cb2" data-syntaxhighlighter-params="brush: vb; gutter: false; theme: Confluence" data-theme="Confluence" style="brush: vb; gutter: false; theme: Confluence"><pre class="sourceCode vb"><code class="sourceCode monobasic"><a class="sourceLine" id="cb2-1" data-line-number="1"><span class="kw">Not</span> This.Attribut</a></code></pre></div>
</div>
</div></td>
</tr>
<tr class="odd">
<td>Das Attribut, welches die Bedingung enthält, wird nur dann angezeigt, wenn das angegebene Attribut nicht leer ist.</td>
<td><div class="code panel pdl" style="border-width: 1px;">
<div class="codeContent panelContent pdl">
<div class="sourceCode" id="cb3" data-syntaxhighlighter-params="brush: vb; gutter: false; theme: Confluence" data-theme="Confluence" style="brush: vb; gutter: false; theme: Confluence"><pre class="sourceCode vb"><code class="sourceCode monobasic"><a class="sourceLine" id="cb3-1" data-line-number="1">This.Attribut&lt;&gt;<span class="st">&quot;&quot;</span></a></code></pre></div>
</div>
</div></td>
</tr>
<tr class="even">
<td>Das Attribut, welches die Bedingung enthält, wird nur dann angezeigt, wenn das angegebene Attribut leer ist.<br />
(Ist auch für Attribute vom Typ &quot;Verknüpftes Element Selektor&quot; gültig).</td>
<td><div class="code panel pdl" style="border-width: 1px;">
<div class="codeContent panelContent pdl">
<div class="sourceCode" id="cb4" data-syntaxhighlighter-params="brush: vb; gutter: false; theme: Confluence" data-theme="Confluence" style="brush: vb; gutter: false; theme: Confluence"><pre class="sourceCode vb"><code class="sourceCode monobasic"><a class="sourceLine" id="cb4-1" data-line-number="1">This.Attribut=<span class="st">&quot;&quot;</span></a></code></pre></div>
</div>
</div></td>
</tr>
<tr class="odd">
<td><p>Das Attribut, welches die Bedingung enthält, wird nur dann angezeigt, wenn das angegebene Enum-Element des angegebenen Enum-Attributs ausgewählt ist.</p>
<p>(&quot;#&quot; ist mit der Nummer des gewünschten Enum-Elements zu ersetzen)</p>
<p>Hinweis: falls die Bedingungen auf mehrere Enum-Elemente zutreffen soll, kann man den Operator &quot;OR&quot; verwenden.</p></td>
<td><div class="code panel pdl" style="border-width: 1px;">
<div class="codeContent panelContent pdl">
<div class="sourceCode" id="cb5" data-syntaxhighlighter-params="brush: vb; gutter: false; theme: Confluence" data-theme="Confluence" style="brush: vb; gutter: false; theme: Confluence"><pre class="sourceCode vb"><code class="sourceCode monobasic"><a class="sourceLine" id="cb5-1" data-line-number="1">This.Attribut=#</a>
<a class="sourceLine" id="cb5-2" data-line-number="2"></a>
<a class="sourceLine" id="cb5-3" data-line-number="3">---</a>
<a class="sourceLine" id="cb5-4" data-line-number="4"></a>
<a class="sourceLine" id="cb5-5" data-line-number="5">This.Attribut=# <span class="kw">OR</span> This.Attribut=#</a></code></pre></div>
</div>
</div></td>
</tr>
<tr class="even">
<td><p><a href="1015847.html#Attributgruppe&amp;Attribut-Mehrfachselektion">Mehrfachselektion</a> bei Enum-Attributen:</p>
<p>Das Attribut mit der Bedingung, soll nur dann angezeigt werden, wenn alle aufgelisteten Enum-Elemente ausgewählt sind.</p></td>
<td><div class="code panel pdl" style="border-width: 1px;">
<div class="codeContent panelContent pdl">
<div class="sourceCode" id="cb6" data-syntaxhighlighter-params="brush: vb; gutter: false; theme: Confluence" data-theme="Confluence" style="brush: vb; gutter: false; theme: Confluence"><pre class="sourceCode vb"><code class="sourceCode monobasic"><a class="sourceLine" id="cb6-1" data-line-number="1">This.Attribut=<span class="st">&quot;1;2;4&quot;</span></a></code></pre></div>
</div>
</div></td>
</tr>
<tr class="odd">
<td><p>Ein Enum-Element soll nur dann in der Auswahlliste des entsprechenden Attributs angezeigt werden, wenn die ausgewählten Enum-Elemente eines anderen Enum-Attributs eine Kombination aus &quot;1;2&quot; sind.</p>
<p>(Es darf also nicht &quot;1; 2; 3&quot;, &quot;0;1&quot;, &quot;1;3&quot; etc. ausgewählt sein)</p>
<p>Hinwies: kann auch für Attribute verwendet werden, um diese von den ausgewählten Enum-Elementen eines anderen Attributs abhängig zu machen.</p></td>
<td><div class="code panel pdl" style="border-width: 1px;">
<div class="codeContent panelContent pdl">
<div class="sourceCode" id="cb7" data-syntaxhighlighter-params="brush: vb; gutter: false; theme: Confluence" data-theme="Confluence" style="brush: vb; gutter: false; theme: Confluence"><pre class="sourceCode vb"><code class="sourceCode monobasic"><a class="sourceLine" id="cb7-1" data-line-number="1">ContainAll(This.Attribut,<span class="st">&quot;1;2&quot;</span>,<span class="kw">True</span>)</a></code></pre></div>
</div>
</div></td>
</tr>
<tr class="even">
<td><p>Ein Enum-Element soll nur dann in der Auswahlliste des entsprechenden Attributs angezeigt werden, wenn die ausgewählten Enum-Elemente eines anderen Enum-Attributs zumindest &quot;1&quot; und &quot;2&quot; enthalten.</p>
<p>(Mit &quot;1&quot; oder &quot;2&quot;, können beliebig viele andere Werte gemeinsam ausgewählt sein)</p></td>
<td><div class="code panel pdl" style="border-width: 1px;">
<div class="codeContent panelContent pdl">
<div class="sourceCode" id="cb8" data-syntaxhighlighter-params="brush: vb; gutter: false; theme: Confluence" data-theme="Confluence" style="brush: vb; gutter: false; theme: Confluence"><pre class="sourceCode vb"><code class="sourceCode monobasic"><a class="sourceLine" id="cb8-1" data-line-number="1">ContainAll(This.Attribut,<span class="st">&quot;1;2&quot;</span>,<span class="kw">False</span>)</a></code></pre></div>
</div>
</div></td>
</tr>
<tr class="odd">
<td><p>Ein Enum-Element soll nur dann in der Auswahlliste des entsprechenden Attributs angezeigt werden, wenn die ausgewählten Enum-Elemente eines anderen Enum-Attributs &quot;1&quot; und/oder &quot;2&quot; enthalten.</p>
<p>(Mit &quot;1&quot; und/oder &quot;2&quot;, dürfen keine anderen Werte gemeinsam ausgewählt sein)</p></td>
<td><div class="code panel pdl" style="border-width: 1px;">
<div class="codeContent panelContent pdl">
<div class="sourceCode" id="cb9" data-syntaxhighlighter-params="brush: vb; gutter: false; theme: Confluence" data-theme="Confluence" style="brush: vb; gutter: false; theme: Confluence"><pre class="sourceCode vb"><code class="sourceCode monobasic"><a class="sourceLine" id="cb9-1" data-line-number="1">ContainAny(This.Attribut,<span class="st">&quot;1;2&quot;</span>,<span class="kw">True</span>)</a></code></pre></div>
</div>
</div></td>
</tr>
<tr class="even">
<td><p>Ein Enum-Element soll nur dann in der Auswahlliste des entsprechenden Attributs angezeigt werden, wenn die ausgewählten Enum-Elemente eines anderen Enum-Attributs &quot;1&quot; und/oder &quot;2&quot; enthalten.</p>
<p>(Mit &quot;1&quot; und/oder &quot;2&quot;, können beliebig viele andere Werte gemeinsam ausgewählt sein; so bald &quot;1&quot;, &quot;2&quot; separat oder gemeinsam ausgewählt sind, wird das Element, das die Bedingung enthält, aktiv)</p></td>
<td><div class="code panel pdl" style="border-width: 1px;">
<div class="codeContent panelContent pdl">
<div class="sourceCode" id="cb10" data-syntaxhighlighter-params="brush: vb; gutter: false; theme: Confluence" data-theme="Confluence" style="brush: vb; gutter: false; theme: Confluence"><pre class="sourceCode vb"><code class="sourceCode monobasic"><a class="sourceLine" id="cb10-1" data-line-number="1">ContainAny(This.Attribut,<span class="st">&quot;1;2&quot;</span>,<span class="kw">False</span>)</a></code></pre></div>
</div>
</div></td>
</tr>
</tbody>
</table>

#### Beispiel-Anwendungsfall

<div class="warning">
<h3>Zielsetzung:</h3> 

Es soll nur dann ein Text-Attribut für ein
[Objekt](objekt) angezeigt werden, wenn ein dazugehöriger Status
ausgewählt wurde.

</div>

1.  Das Enum-Attribut "Zustand" zur Wahl des Status anlegen (siehe
    [Anlegen eines Attributs](anlegen-eines-attributs))
2.  Die gewünschten Enum-Elemente hinzufügen  
    ![](//images.ctfassets.net/utx1h0gfm1om/42ykM8TvmEWkqgAYuo24ao/daf0fd672a59e17c991bdec4739a586c/1017738.png)
3.  Das Text-Attribut "Zustands-Feedback" anlegen (siehe [Anlegen eines
    Attributs](anlegen-eines-attributs))
4.  Die entsprechende Bedingung hinzufügen - das Textfeld soll nur
    sichtbar sein, wenn ein Enum-Element ausgewählt wurde  
    ![](//images.ctfassets.net/utx1h0gfm1om/7rbQn3UmUE2KoAIAIMAU66/14e1b79f45c0302982ad8a8357780d94/1017732.png)

**Ergebnis**: nur, wenn ein "Zustand" ausgewählt wurde, wird das
entsprechende Textfeld zur Beschreibunug eingeblendet.


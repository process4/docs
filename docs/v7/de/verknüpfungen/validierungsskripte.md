-   [Validierungsskripte erstellen](#validierungsskripte-erstellen)
    -   [Beispiele für Validierungsskripte](#beispiele-für-validierungsskripte)
-   [Diagramme validieren](#diagramme-validieren)


Validierungsskripte dienen der Methodenüberprüfung und werden im
[Database Designer](Database_Designer) erstellt und verwaltet. Sie analysieren [Diagramme](Diagramm) und informieren, falls (entsprechend der definierten Kriterien) falsch modelliert wurde. Validierungsskripte warden im VB (Visual Basic) geschrieben und man kann alle p4b API Funktionen ( p4b API functions )verwenden. 

Der Unterschied zwischen [Bedingungen für
Verknüpfungsregeln](Bedingungen_für_Verknüpfungsregeln) und
Validierungsskripten ist, dass Validierungsskripte auch bereits
existierende Verknüpfungen analysieren - mit den Bedingungen für
Verknüpfungsregeln, kann lediglich unterbunden werden, dass
Verknüpfungen überhaupt als solche erstellt werden, falls falsch
modelliert wurde.

Achtung:

Für die Erstellung von Validierungsskripten, werden grundsätzliche
Programmierkenntnisse empfohlen.

### Validierungsskripte erstellen

1.  Wählen Sie die gewünschte [Unit](Unit) im [Database
    Designer](Database_Designer) aus.
2.  Öffnen Sie die Sektion "Validierungs-Skripte" im Navigationsfenster.
3.  Klicken Sie auf den Button "Neu".  
    1.  Alternativ dazu, können Sie auch die Funktion "Neu" aus dem
        Kontextmenü der Sektion "Validierungs-Skripte" verwenden.
4.  Ein [Eigenschafts-Fenster](Eigenschaften_Dialogfenster_) für das neu
    anzulegende Validierungsskript erscheint.
    1.  Name  
        Der gewünschte Name für dieses Validierungsskript.
    2.  Unit
        Unit kann nicht im Eigenschafts-Fenster geändert warden als es         im Schritt 1 ausgewählt wurde. 
    
    3.  Ziel Klassen ID  
        Wählen Sie hier die [Klasse/n](Klasse), deren [Objekte](Objekt) analysiert werden sollen.
    4.	Aktivierte Diagrammklassen
        Wählen Sie hier die Diagrammklasse/n aus, die berücksichtigt           werden sollen

    5.  Aktivierte Diagrammklassen  
        Wählen Sie hier die Diagrammklasse/n aus, die berücksichtigt
        werden sollen.
    6.  Aktiviert  
        Aktiviert/deaktiviert das Validierungsskript.
    7.  Validierungs-Meldung  
        Geben Sie hier den Text ein, der im Validierungsfenster
        erscheinen soll. Wird nur angezeigt, wenn die Variable "Result"
        nach Durchlauf des Validierungsskripts den Wert "True" enthält.
    8.  Validierungs-Skripttext  
        Geben Sie hier das auszuführende Validierungsskript ein; das
        kann eine [Bedingung](Bedingungen) (auch: [Bedingungen für
        Verknüpfungsregeln](Bedingungen_für_Verknüpfungsregeln)),
        oder ein kleines Programm in Visual Basic sein.
5.  Ein Klick auf "OK" erstellt das Validierungsskript.


![](//images.ctfassets.net/utx1h0gfm1om/4k76aIDPYIckmy4SAIws2/d943867e27358fa08827cf93038c9fc4/1018699.png)

*Eigenschafts-Fenster eines Validierungsskripts.*

#### Beispiele für Validierungsskripte

<table>
<colgroup>
<col style="width: 50%" />
<col style="width: 50%" />
</colgroup>
<thead>
<tr class="header">
<th><p>Validierungsregel</p></th>
<th><p>Skripttext</p></th>
</tr>
</thead>
<tbody>
<tr class="odd">
<td><p>Von einem Objekt der Klasse &quot;Input&quot;, soll es immer eine ausgehende Verknüpfung geben.</p></td>
<td><div class="code panel pdl" style="border-width: 1px;">
<div class="codeContent panelContent pdl">
<div class="sourceCode" id="cb1" data-syntaxhighlighter-params="brush: vb; gutter: false; theme: Confluence" data-theme="Confluence" style="brush: vb; gutter: false; theme: Confluence"><pre class="sourceCode vb"><code class="sourceCode monobasic"><a class="sourceLine" id="cb1-1" data-line-number="1"><span class="kw">Function </span>IsInput()</a>
<a class="sourceLine" id="cb1-2" data-line-number="2">    <span class="kw">Set </span>input = Shape.Document.Pages(2).Shapes.ItemU(<span class="st">&quot;Input&quot;</span>)</a>
<a class="sourceLine" id="cb1-3" data-line-number="3">    x1 = input.Cells(<span class="st">&quot;PinX&quot;</span>)</a>
<a class="sourceLine" id="cb1-4" data-line-number="4">    x2 = x1 + input.Cells(<span class="st">&quot;Width&quot;</span>)</a>
<a class="sourceLine" id="cb1-5" data-line-number="5">    y1 = input.Cells(<span class="st">&quot;PinY&quot;</span>)</a>
<a class="sourceLine" id="cb1-6" data-line-number="6">    y2 = y1 + input.Cells(<span class="st">&quot;Height&quot;</span>)</a>
<a class="sourceLine" id="cb1-7" data-line-number="7">    objx1 = Shape.Cells(<span class="st">&quot;PinX&quot;</span>)</a>
<a class="sourceLine" id="cb1-8" data-line-number="8">    objx2 = objx1 + Shape.Cells(<span class="st">&quot;Width&quot;</span>)</a>
<a class="sourceLine" id="cb1-9" data-line-number="9">    objy1 = Shape.Cells(<span class="st">&quot;PinY&quot;</span>)</a>
<a class="sourceLine" id="cb1-10" data-line-number="10">    objy2 = objy1 + Shape.Cells(<span class="st">&quot;Height&quot;</span>)</a>
<a class="sourceLine" id="cb1-11" data-line-number="11">    IsInput = (x1 &lt;= objx1 <span class="kw">AND</span> x2 &gt;= objx2 <span class="kw">AND</span> y1 &lt;= objy1 <span class="kw">AND</span> y2 &gt;= objy2)</a>
<a class="sourceLine" id="cb1-12" data-line-number="12"><span class="kw">End Function</span></a>
<a class="sourceLine" id="cb1-13" data-line-number="13">Result = <span class="kw">False</span></a>
<a class="sourceLine" id="cb1-14" data-line-number="14"><span class="kw">If </span>IsInput() <span class="kw">Then</span></a>
<a class="sourceLine" id="cb1-15" data-line-number="15">    <span class="kw">Set </span>links = DiagramLinks(<span class="st">&quot;LinkedToFrom&quot;</span>, 0, 2, <span class="dt">Object</span>)</a>
<a class="sourceLine" id="cb1-16" data-line-number="16">    Result = (links.Count = 0)</a>
<a class="sourceLine" id="cb1-17" data-line-number="17"><span class="kw">End If</span></a></code></pre></div>
</div>
</div></td>
</tr>
<tr class="even">
<td><p>Ein Objekt der Klasse &quot;Input&quot;, darf keine eingehenden Verknüpfungen haben.</p></td>
<td><div class="code panel pdl" style="border-width: 1px;">
<div class="codeContent panelContent pdl">
<div class="sourceCode" id="cb2" data-syntaxhighlighter-params="brush: vb; gutter: false; theme: Confluence" data-theme="Confluence" style="brush: vb; gutter: false; theme: Confluence"><pre class="sourceCode vb"><code class="sourceCode monobasic"><a class="sourceLine" id="cb2-1" data-line-number="1"><span class="kw">Function </span>IsInput()</a>
<a class="sourceLine" id="cb2-2" data-line-number="2"><span class="kw">Set </span>input = Shape.Document.Pages(2).Shapes.ItemU(<span class="st">&quot;Input&quot;</span>)</a>
<a class="sourceLine" id="cb2-3" data-line-number="3">    x1 = input.Cells(<span class="st">&quot;PinX&quot;</span>)</a>
<a class="sourceLine" id="cb2-4" data-line-number="4">    x2 = x1 + input.Cells(<span class="st">&quot;Width&quot;</span>)</a>
<a class="sourceLine" id="cb2-5" data-line-number="5">    y1 = input.Cells(<span class="st">&quot;PinY&quot;</span>)</a>
<a class="sourceLine" id="cb2-6" data-line-number="6">    y2 = y1 + input.Cells(<span class="st">&quot;Height&quot;</span>)</a>
<a class="sourceLine" id="cb2-7" data-line-number="7">    objx1 = Shape.Cells(<span class="st">&quot;PinX&quot;</span>)</a>
<a class="sourceLine" id="cb2-8" data-line-number="8">    objx2 = objx1 + Shape.Cells(<span class="st">&quot;Width&quot;</span>)</a>
<a class="sourceLine" id="cb2-9" data-line-number="9">    objy1 = Shape.Cells(<span class="st">&quot;PinY&quot;</span>)</a>
<a class="sourceLine" id="cb2-10" data-line-number="10">    objy2 = objy1 + Shape.Cells(<span class="st">&quot;Height&quot;</span>)</a>
<a class="sourceLine" id="cb2-11" data-line-number="11">    IsInput = (x1 &lt;= objx1 <span class="kw">AND</span> x2 &gt;= objx2 <span class="kw">AND</span> y1 &lt;= objy1 <span class="kw">AND</span> y2 &gt;= objy2)</a>
<a class="sourceLine" id="cb2-12" data-line-number="12"><span class="kw">End Function</span></a>
<a class="sourceLine" id="cb2-13" data-line-number="13">Result = <span class="kw">False</span></a>
<a class="sourceLine" id="cb2-14" data-line-number="14"><span class="kw">If </span>IsInput() <span class="kw">Then</span></a>
<a class="sourceLine" id="cb2-15" data-line-number="15">    <span class="kw">Set </span>links = DiagramLinks(<span class="st">&quot;LinkedToFrom&quot;</span>, 0, 1, <span class="dt">Object</span>)</a>
<a class="sourceLine" id="cb2-16" data-line-number="16">    Result = (links.Count &gt; 0)</a>
<a class="sourceLine" id="cb2-17" data-line-number="17"><span class="kw">End If</span></a></code></pre></div>
</div>
</div></td>
</tr>
<tr class="odd">
<td><p>Ein Objekt der Klasse &quot;Output&quot;, soll keine ausgehenden Verknüpfungen haben.</p></td>
<td><div class="code panel pdl" style="border-width: 1px;">
<div class="codeContent panelContent pdl">
<div class="sourceCode" id="cb3" data-syntaxhighlighter-params="brush: vb; gutter: false; theme: Confluence" data-theme="Confluence" style="brush: vb; gutter: false; theme: Confluence"><pre class="sourceCode vb"><code class="sourceCode monobasic"><a class="sourceLine" id="cb3-1" data-line-number="1"><span class="kw">Function </span>IsOutput()</a>
<a class="sourceLine" id="cb3-2" data-line-number="2">    <span class="kw">Set </span>input = Shape.Document.Pages(2).Shapes.ItemU(<span class="st">&quot;Output&quot;</span>)</a>
<a class="sourceLine" id="cb3-3" data-line-number="3">    x1 = input.Cells(<span class="st">&quot;PinX&quot;</span>)</a>
<a class="sourceLine" id="cb3-4" data-line-number="4">    x2 = x1 + input.Cells(<span class="st">&quot;Width&quot;</span>)</a>
<a class="sourceLine" id="cb3-5" data-line-number="5">    y1 = input.Cells(<span class="st">&quot;PinY&quot;</span>)</a>
<a class="sourceLine" id="cb3-6" data-line-number="6">    y2 = y1 + input.Cells(<span class="st">&quot;Height&quot;</span>)</a>
<a class="sourceLine" id="cb3-7" data-line-number="7">    objx1 = Shape.Cells(<span class="st">&quot;PinX&quot;</span>)</a>
<a class="sourceLine" id="cb3-8" data-line-number="8">    objx2 = objx1 + Shape.Cells(<span class="st">&quot;Width&quot;</span>)</a>
<a class="sourceLine" id="cb3-9" data-line-number="9">    objy1 = Shape.Cells(<span class="st">&quot;PinY&quot;</span>)</a>
<a class="sourceLine" id="cb3-10" data-line-number="10">    objy2 = objy1 + Shape.Cells(<span class="st">&quot;Height&quot;</span>)</a>
<a class="sourceLine" id="cb3-11" data-line-number="11">    IsOutput = (x1 &lt;= objx1 <span class="kw">AND</span> x2 &gt;= objx2 <span class="kw">AND</span> y1 &lt;= objy1 <span class="kw">AND</span> y2 &gt;= objy2)</a>
<a class="sourceLine" id="cb3-12" data-line-number="12"><span class="kw">End Function</span></a>
<a class="sourceLine" id="cb3-13" data-line-number="13">Result = <span class="kw">False</span></a>
<a class="sourceLine" id="cb3-14" data-line-number="14"><span class="kw">If </span>IsOutput() <span class="kw">Then</span></a>
<a class="sourceLine" id="cb3-15" data-line-number="15">    <span class="kw">Set </span>links = DiagramLinks(<span class="st">&quot;LinkedToFrom&quot;</span>, 0, 2, <span class="dt">Object</span>)</a>
<a class="sourceLine" id="cb3-16" data-line-number="16">    Result = (links.Count &gt; 0)</a>
<a class="sourceLine" id="cb3-17" data-line-number="17"><span class="kw">End If</span></a></code></pre></div>
</div>
</div></td>
</tr>
<tr class="even">
<td>Jedes Objekt der Klasse &quot;Aktivität&quot;, soll eine entsprechende RACI-Verknüpfung zu einer Rolle unter &quot;R&quot; haben.</td>
<td><div class="code panel pdl" style="border-width: 1px;">
<div class="codeContent panelContent pdl">
<div class="sourceCode" id="cb4" data-syntaxhighlighter-params="brush: vb; gutter: false; theme: Confluence" data-theme="Confluence" style="brush: vb; gutter: false; theme: Confluence"><pre class="sourceCode vb"><code class="sourceCode monobasic"><a class="sourceLine" id="cb4-1" data-line-number="1">Result = <span class="kw">True</span></a>
<a class="sourceLine" id="cb4-2" data-line-number="2"><span class="kw">Set </span>objs = DiagramLinksAssociationObjects(<span class="st">&quot;RACI&quot;</span>, 4, 3, <span class="dt">Object</span>)</a>
<a class="sourceLine" id="cb4-3" data-line-number="3"><span class="kw">For </span>Each obj In objs</a>
<a class="sourceLine" id="cb4-4" data-line-number="4">    Result = <span class="kw">Not</span> (obj.Name = <span class="st">&quot;R&quot;</span>)</a>
<a class="sourceLine" id="cb4-5" data-line-number="5">    <span class="kw">If Not</span> Result <span class="kw">Then</span> Exit <span class="kw">For</span></a>
<a class="sourceLine" id="cb4-6" data-line-number="6"><span class="kw">Next</span></a></code></pre></div>
</div>
</div></td>
</tr>
<tr class="odd">
<td>Ein Objekt der Klasse &quot;Aktivität&quot;, soll immer entweder mit einem anderen Objekt dieser Klasse, oder mit einem Objekt der Klasse &quot;Output&quot; verknüpft sein.</td>
<td><div class="code panel pdl" style="border-width: 1px;">
<div class="codeContent panelContent pdl">
<div class="sourceCode" id="cb5" data-syntaxhighlighter-params="brush: vb; gutter: false; theme: Confluence" data-theme="Confluence" style="brush: vb; gutter: false; theme: Confluence"><pre class="sourceCode vb"><code class="sourceCode monobasic"><a class="sourceLine" id="cb5-1" data-line-number="1"><span class="kw">Set </span>objs1 = DiagramLinks(<span class="st">&quot;LinkedToFrom&quot;</span>, 0, 2, <span class="dt">Object</span>, <span class="st">&quot;Activity&quot;</span>)</a>
<a class="sourceLine" id="cb5-2" data-line-number="2"><span class="kw">Set </span>objs2 = DiagramLinks(<span class="st">&quot;LinkedToFrom&quot;</span>, 0, 2, <span class="dt">Object</span>, <span class="st">&quot;InputOutput&quot;</span>)</a>
<a class="sourceLine" id="cb5-3" data-line-number="3">Result = (objs2.Count = 0 <span class="kw">AND</span> objs1.Count = 0)</a></code></pre></div>
</div>
</div></td>
</tr>
<tr class="even">
<td>Rollen verknüpft als &quot;R&quot; und &quot;A&quot;, dürfen nicht denselben Namen haben, dh., es sollen unterschiedliche Objekte sein.</td>
<td><div class="code panel pdl" style="border-width: 1px;">
<div class="codeContent panelContent pdl">
<div class="sourceCode" id="cb6" data-syntaxhighlighter-params="brush: vb; gutter: false; theme: Confluence" data-theme="Confluence" style="brush: vb; gutter: false; theme: Confluence"><pre class="sourceCode vb"><code class="sourceCode monobasic"><a class="sourceLine" id="cb6-1" data-line-number="1">Result = <span class="kw">False</span></a>
<a class="sourceLine" id="cb6-2" data-line-number="2"><span class="kw">Set </span>roles = DiagramLinks(<span class="st">&quot;RACI&quot;</span>, 4, 3, <span class="dt">Object</span>)</a>
<a class="sourceLine" id="cb6-3" data-line-number="3"><span class="kw">If </span>roles.count &gt; 1 <span class="kw">Then</span> </a>
<a class="sourceLine" id="cb6-4" data-line-number="4">    <span class="kw">For </span>Each role In roles</a>
<a class="sourceLine" id="cb6-5" data-line-number="5">        <span class="kw">Set </span>objs = DiagramLinksAssociationObjects(<span class="st">&quot;RACI&quot;</span>, 4, 3, <span class="dt">Object</span>, role)</a>
<a class="sourceLine" id="cb6-6" data-line-number="6">        has_r = <span class="kw">False</span></a>
<a class="sourceLine" id="cb6-7" data-line-number="7">        has_a = <span class="kw">False</span></a>
<a class="sourceLine" id="cb6-8" data-line-number="8">        <span class="kw">For </span>Each obj In objs</a>
<a class="sourceLine" id="cb6-9" data-line-number="9">            <span class="kw">If Not</span> has_r <span class="kw">Then</span> has_r = (obj.Name = <span class="st">&quot;R&quot;</span>)</a>
<a class="sourceLine" id="cb6-10" data-line-number="10">            <span class="kw">If Not</span> has_a <span class="kw">Then</span> has_a = (obj.Name = <span class="st">&quot;A&quot;</span>)   </a>
<a class="sourceLine" id="cb6-11" data-line-number="11">            Result = (has_r <span class="kw">AND</span> has_a)</a>
<a class="sourceLine" id="cb6-12" data-line-number="12">            <span class="kw">If </span>Result <span class="kw">Then</span> Exit <span class="kw">For</span></a>
<a class="sourceLine" id="cb6-13" data-line-number="13">        <span class="kw">Next</span></a>
<a class="sourceLine" id="cb6-14" data-line-number="14">        <span class="kw">If </span>Result <span class="kw">Then</span> Exit <span class="kw">For </span> </a>
<a class="sourceLine" id="cb6-15" data-line-number="15">    <span class="kw">Next</span></a>
<a class="sourceLine" id="cb6-16" data-line-number="16"><span class="kw">End If</span></a></code></pre></div>
</div>
</div></td>
</tr>
</tbody>
</table>

### Diagramme validieren

Wenn [Bedingungen für
Verknüpfungsregeln](Bedingungen_für_Verknüpfungsregeln) und/oder
Validierungsskripte definiert wurden, können Sie [Diagramme](Diagramm)
validieren.

Öffnen Sie dazu ein Diagramm und klicken Sie auf das Validierungssymbol
(grüner Haken) im process4.biz Menü.

Im Validierungsfenster am unteren Rand des Diagramms, erscheinen nun die
Meldungen über die erfolgreiche oder nicht erfolgreiche Validierung.
Diese Meldungen lassen sich mit einem Klick auf die 3 verschieden
färbigen Rufzeichen steuern:

-   Grün: anzeigen der erfolgreichen Meldungen (*Result=True*)
-   Gelb: anzeigen neutraler Meldungen und Hinweise (siehe dazu:
    [Systemdialoge](Client-Einstellungen_1016125.html#Client-Einstellungen-Systemdialoge)
-   Rot: Anzeigen der Fehlermeldungen (*Result=False*)

Sie können auch die Suche verwenden, um im Validierungsfenster nach
einem Objekt oder einer Klasse zu suchen.

Wenn Sie auf einer Validierungsmeldung dopplklicken, wird das bzw.
werden die entsprechende/n Shape/s auf dem Diagramm markiert, für
das/die die Meldung angezeigt wird.

![](//images.ctfassets.net/utx1h0gfm1om/5x5cwSP5JY44YqKk6GEuSi/7e4fce13420b55fa903226c04cbeaf58/1018695.png)

*Ein Diagramm validieren.*


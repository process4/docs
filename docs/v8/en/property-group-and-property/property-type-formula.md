-   [Creating a Formula](#creating-a-formula)
    -   [Examples](#examples)
    -   [Use of shape-specific properties](#use-of-shape-specific-properties)
    -   [Display a list of objects/diagrams](#display-a-list-of-objectsdiagrams)
-   [Inherited Attributes](#inherited-attributes)

 
With the property type "formula", you can use scripts that allow you to
display values of other objects, diagrams etc. in this property. In [the
repository](repository), the value of the property will be filled
automatically.

Formulas are written in VB (Visual Basic) and you can use all [p4b API
functions](mod_018-api-application-programming-interface-of-p4b). In
addition, the formula text uses corresponding VB syntax highlighting.
Note that the keywords reserved for Visual Basic cannot be used as
DbName of the object in the formula; the list of the Visual Basic
Reserved Keywords can be found here: [  
http://msdn.microsoft.com/en-us/library/ksh7h19t%28v=vs.90%29.aspx](http://msdn.microsoft.com/en-us/library/ksh7h19t%28v=vs.90%29.aspx)    
If you have already chosen a DbName that matches exactly a VB keyword,
please change this DbName.

If the result of a formula property is
a [hyperlink](property-group-and-property), then the property "result is a
hyperlink" is set to "true". You can use the property type "formula"
for [Shape-specific properties](shape-specific-properties) too.

<div class="info">

If a formula cannot be calculated, you are informed by an info message
about possible errors. The display of this information message can be
managed on the [Client Settings](client-settings).
  </div>



### Creating a Formula

To create the formula, the "DbName" (= the unique database name) of an
item is used and referenced as *This.DbName*.

#### Examples

<table>
<colgroup>
<col style="width: 50%" />
<col style="width: 50%" />
</colgroup>
<thead>
<tr class="header">
<th><p><strong>Example</strong></p></th>
<th><p><strong>Formula</strong></p></th>
</tr>
</thead>
<tbody>
<tr class="odd">
<td><p><span class="underline">Display of the property value of a linked object:</span></p>
<ul>
<li>For an object of the class &quot;A&quot;, there is a property with the DbName &quot;Property&quot;.</li>
<li>For an object of the class &quot;B&quot;, there is a property with the type &quot;formula&quot;.</li>
</ul>
<p><strong>Goal:</strong> in the formula property of the object of the class &quot;B&quot;, should appear the value of the property &quot;Property&quot; of the linked object (from the class &quot;A&quot;).</p>
<p><span class="underline">There are</span> two possible variants:</p>
<ol>
<li>&quot;Property&quot; is an Enum property: however, names (not numbers) of the set enum value of this property are displayed.</li>
<li>&quot;Property&quot; is a string property.</li>
</ol></td>
<td><div class="code panel pdl" style="border-width: 1px;">
<div class="codeHeader panelHeader pdl" style="border-bottom-width: 1px;">
<strong>1)</strong>
</div>
<div class="codeContent panelContent pdl">
<div class="sourceCode" id="cb1" data-syntaxhighlighter-params="brush: vb; gutter: false; theme: Confluence" data-theme="Confluence" style="brush: vb; gutter: false; theme: Confluence"><pre class="sourceCode vb"><code class="sourceCode monobasic"><a class="sourceLine" id="cb1-1" data-line-number="1">This.Linkedobject.Attributesstring(<span class="st">&quot;Property&quot;</span>)</a></code></pre></div>
</div>
</div>
<div class="code panel pdl" style="border-width: 1px;">
<div class="codeHeader panelHeader pdl" style="border-bottom-width: 1px;">
<strong>2)</strong>
</div>
<div class="codeContent panelContent pdl">
<div class="sourceCode" id="cb2" data-syntaxhighlighter-params="brush: vb; gutter: false; theme: Confluence" data-theme="Confluence" style="brush: vb; gutter: false; theme: Confluence"><pre class="sourceCode vb"><code class="sourceCode monobasic"><a class="sourceLine" id="cb2-1" data-line-number="1">This.Linkedobject.<span class="kw">Property</span></a></code></pre></div>
</div>
</div></td>
</tr>
<tr class="even">
<td><p><span class="underline">Display the property value of the linked diagram</span></p>
<p>In the System class &quot;diagram&quot; (or in another class diagram), there is a property with the DbName &quot;Property&quot;.</p>
<p><strong>Goal:</strong> For an object of class &quot;A&quot;, the value of the property &quot;Property&quot; of the first (second, third ...) linked diagram will now be displayed in a formula property.</p></td>
<td><div class="code panel pdl" style="border-width: 1px;">
<div class="codeContent panelContent pdl">
<div class="sourceCode" id="cb3" data-syntaxhighlighter-params="brush: vb; gutter: false; theme: Confluence" data-theme="Confluence" style="brush: vb; gutter: false; theme: Confluence"><pre class="sourceCode vb"><code class="sourceCode monobasic"><a class="sourceLine" id="cb3-1" data-line-number="1">This.LinkedDiagrams (1).<span class="kw">Property</span></a></code></pre></div>
</div>
</div>
<p>(&quot;1&quot; is the order number of the diagram where the object is used)</p></td>
</tr>
<tr class="odd">
<td><p><span class="underline">Display a property value of the diagram on which the object is used</span></p>
<p>In the System class &quot;diagram&quot; (or in another class diagram), there is a property with the DbName &quot;Property&quot;.</p>
<p><strong>Target:</strong> For an object of the class &quot;A&quot;, the value of the property &quot;Property&quot; of the first (second, third ...) diagram where the object is used, will now be displayed in a formula property.</p></td>
<td><div class="code panel pdl" style="border-width: 1px;">
<div class="codeContent panelContent pdl">
<div class="sourceCode" id="cb4" data-syntaxhighlighter-params="brush: vb; gutter: false; theme: Confluence" data-theme="Confluence" style="brush: vb; gutter: false; theme: Confluence"><pre class="sourceCode vb"><code class="sourceCode monobasic"><a class="sourceLine" id="cb4-1" data-line-number="1">This.Diagrams (1).<span class="kw">Property</span></a></code></pre></div>
</div>
</div>
<p>(&quot;1&quot; is the order number of the diagram on which the object is used)</p></td>
</tr>
<tr class="even">
<td><p><span class="underline">Display the sum of values of several properties</span></p>
<p>In class &quot;A&quot;, there are three properties with the DbName &quot;Price1&quot;, &quot;Price2&quot; and &quot;Price3&quot; and the property type &quot;Double&quot; or &quot;integer&quot;.</p>
<p><strong>Goal:</strong> The sum should be displayed in another property with the type &quot;formula&quot; in the same class.</p></td>
<td><div class="code panel pdl" style="border-width: 1px;">
<div class="codeContent panelContent pdl">
<div class="sourceCode" id="cb5" data-syntaxhighlighter-params="brush: vb; gutter: false; theme: Confluence" data-theme="Confluence" style="brush: vb; gutter: false; theme: Confluence"><pre class="sourceCode vb"><code class="sourceCode monobasic"><a class="sourceLine" id="cb5-1" data-line-number="1">This.Price1+This.Price2+This.Price3</a></code></pre></div>
</div>
</div>
<p><em><br />
</em></p></td>
</tr>
<tr class="odd">
<td><p><span class="underline">Display the property value of a linked object on a diagram</span></p>
<p>In the class &quot;Process&quot;, there is a property with the DbName &quot;Owner&quot;.</p>
<p>Create in the system class &quot;Diagram&quot; (or in the diagram class to which the diagram belongs), a property &quot;Diagram Owner&quot; of the type &quot;formula&quot;.</p>
<p><strong>Goal:</strong> When an object of the class &quot;Process&quot; is linked to a diagram, the value of the property &quot;Owner&quot; of the linked object should be displayed on the diagram property &quot;Diagram owner&quot;.</p></td>
<td><div class="code panel pdl" style="border-width: 1px;">
<div class="codeContent panelContent pdl">
<div class="sourceCode" id="cb6" data-syntaxhighlighter-params="brush: vb; gutter: false; theme: Confluence" data-theme="Confluence" style="brush: vb; gutter: false; theme: Confluence"><pre class="sourceCode vb"><code class="sourceCode monobasic"><a class="sourceLine" id="cb6-1" data-line-number="1">This.LinkedObjects.Item(1).Owner</a></code></pre></div>
</div>
</div>
<p><em> </em></p></td>
</tr>
<tr class="even">
<td><p><span class="underline">Display a property value from the parent diagram on a diagram</span></p>
<p>In the system class &quot;Diagram&quot; (or in the diagram class to which the diagram belongs), there is a property named &quot;Property&quot; and another property named &quot;Parent property&quot; with the type &quot;formula&quot;.</p>
<p><strong>Goal:</strong> In the property &quot;Parent property&quot;, the &quot;Property&quot; value of the respective parent diagram should be displayed.</p></td>
<td><div class="code panel pdl" style="border-width: 1px;">
<div class="codeContent panelContent pdl">
<div class="sourceCode" id="cb7" data-syntaxhighlighter-params="brush: vb; gutter: false; theme: Confluence" data-theme="Confluence" style="brush: vb; gutter: false; theme: Confluence"><pre class="sourceCode vb"><code class="sourceCode monobasic"><a class="sourceLine" id="cb7-1" data-line-number="1">This.ParentDiagram.<span class="kw">Property</span></a></code></pre></div>
</div>
</div>
<p><em><br />
</em></p></td>
</tr>
<tr class="odd">
<td><p><span class="underline">Display the name of the parent diagram(s)</span></p>
<ol>
<li>In the system class &quot;Diagram&quot; there is a property with the type &quot;formula&quot;, where the names of all the parent diagrams of a diagram should be displayed. If there are several parent diagrams, they are displayed in a list.</li>
<li>In the system class &quot;Diagram&quot; there is a property with the type &quot;formula&quot;, where names of a parent diagram with a specific index (1, 2, 3, etc.) should be displayed.<br />
The index of the parent diagram corresponds to the order in which the Parent diagrams are listed in the upper formula.</li>
<li>In the system class &quot;Diagram&quot; there is a property with the type &quot;formula&quot;, where the name of only one parent diagram should be displayed. If there are several parent diagrams, the result &quot;[multiple parent diagrams]&quot; appears.</li>
</ol></td>
<td><div class="code panel pdl" style="border-width: 1px;">
<div class="codeHeader panelHeader pdl" style="border-bottom-width: 1px;">
<strong>1)</strong>
</div>
<div class="codeContent panelContent pdl">
<div class="sourceCode" id="cb8" data-syntaxhighlighter-params="brush: vb; gutter: false; theme: Confluence" data-theme="Confluence" style="brush: vb; gutter: false; theme: Confluence"><pre class="sourceCode vb"><code class="sourceCode monobasic"><a class="sourceLine" id="cb8-1" data-line-number="1">1) This.ParentDiagrams.Name</a></code></pre></div>
</div>
</div>
<div class="code panel pdl" style="border-width: 1px;">
<div class="codeHeader panelHeader pdl" style="border-bottom-width: 1px;">
<strong>2)</strong>
</div>
<div class="codeContent panelContent pdl">
<div class="sourceCode" id="cb9" data-syntaxhighlighter-params="brush: vb; gutter: false; theme: Confluence" data-theme="Confluence" style="brush: vb; gutter: false; theme: Confluence"><pre class="sourceCode vb"><code class="sourceCode monobasic"><a class="sourceLine" id="cb9-1" data-line-number="1">2) This.ParentDiagrams(i).Name</a></code></pre></div>
</div>
</div>
<div class="code panel pdl" style="border-width: 1px;">
<div class="codeHeader panelHeader pdl" style="border-bottom-width: 1px;">
<strong>3)</strong>
</div>
<div class="codeContent panelContent pdl">
<div class="sourceCode" id="cb10" data-syntaxhighlighter-params="brush: vb; gutter: false; theme: Confluence" data-theme="Confluence" style="brush: vb; gutter: false; theme: Confluence"><pre class="sourceCode vb"><code class="sourceCode monobasic"><a class="sourceLine" id="cb10-1" data-line-number="1">3) This.ParentDiagram.Name</a></code></pre></div>
</div>
</div></td>
</tr>
<tr class="even">
<td><p><span class="underline">Display the property value from the Child diagram on a diagram</span></p>
<p>In the system class &quot;Diagram&quot; (or in the class to which the diagram belongs), there is the property &quot;Property&quot; and another property &quot;Child property&quot;, each with the type &quot;formula&quot;.</p>
<p><strong>Goal:</strong> In the property &quot;Child property&quot;, the &quot;Property&quot; value of the child diagram should be displayed.</p></td>
<td><div class="code panel pdl" style="border-width: 1px;">
<div class="codeContent panelContent pdl">
<div class="sourceCode" id="cb11" data-syntaxhighlighter-params="brush: vb; gutter: false; theme: Confluence" data-theme="Confluence" style="brush: vb; gutter: false; theme: Confluence"><pre class="sourceCode vb"><code class="sourceCode monobasic"><a class="sourceLine" id="cb11-1" data-line-number="1">This.ChildDiagram.<span class="kw">Property</span></a></code></pre></div>
</div>
</div>
<p><em><br />
</em></p></td>
</tr>
<tr class="odd">
<td><p><span class="underline">The list of ENUM items of the objects of a class should depend on the property value of an object of another class</span></p>
<ul>
<li>In the class &quot;A&quot;, there is a property &quot;X&quot; with the Enum items &quot;X0&quot;, &quot;X1&quot;, &quot;X2&quot;.</li>
<li>In the class &quot;B&quot;, there is a property &quot;Y&quot; with the Enum items &quot;Y0&quot;, &quot;Y1&quot;, &quot;Y2&quot;.</li>
</ul>
<p><strong>Goal:</strong> When the property value is set to &quot;X1&quot; for an object of class &quot;A&quot; and it is linked to an object of class &quot;B&quot;, the enum item &quot;Y1&quot; in the object &quot;B&quot; in the Enumerator list should neither be visible nor selectable.</p></td>
<td><p>Open the Enum items of the property &quot;Y&quot; of class &quot;B&quot;, select the Enum item &quot;Y1&quot; and write in the conditions field:</p>
<div class="code panel pdl" style="border-width: 1px;">
<div class="codeContent panelContent pdl">
<div class="sourceCode" id="cb12" data-syntaxhighlighter-params="brush: vb; gutter: false; theme: Confluence" data-theme="Confluence" style="brush: vb; gutter: false; theme: Confluence"><pre class="sourceCode vb"><code class="sourceCode monobasic"><a class="sourceLine" id="cb12-1" data-line-number="1">This.LinkedObjects(<span class="st">&quot;A&quot;</span>).Item(1).X=1</a></code></pre></div>
</div>
</div>
<p>(&quot;1&quot; is the order number of the ENUM item &quot;X1&quot;)</p></td>
</tr>
<tr class="even">
<td><p><span class="underline">Mark diagrams dependent on time via the formula</span></p>
<p><strong>Goal:</strong> Mark diagrams at a particular time to be checked</p>
<ol>
<li><p>Add a new property of the type &quot;datetime&quot; for the system class &quot;Diagram&quot; and name it &quot;Check at&quot;.</p></li>
<li>Add Another property of the type &quot;formula&quot; for the system class &quot;Diagram&quot; and name it &quot;Needs Check&quot;. This property is then set to &quot;True&quot;, when the diagram should be checked.</li>
</ol>
<p><a href="http://process4.biz/">Process4.biz</a> can compare the current date with the date that is specified in the property &quot;Check at&quot;; if the current date is equal to or greater than the date in the property, then the property &quot;Needs check&quot; should be set to the value &quot;true&quot;.</p>
<p>Note: The property &quot;Needs check&quot; can also be used on diagrams to display the value via Visio Data Graphics.</p></td>
<td><div class="code panel pdl" style="border-width: 1px;">
<div class="codeContent panelContent pdl">
<div class="sourceCode" id="cb13" data-syntaxhighlighter-params="brush: vb; gutter: false; theme: Confluence" data-theme="Confluence" style="brush: vb; gutter: false; theme: Confluence"><pre class="sourceCode vb"><code class="sourceCode monobasic"><a class="sourceLine" id="cb13-1" data-line-number="1"><span class="kw">Not</span> IsEmpty(This.Check_At) <span class="kw">And</span> Now() &gt; This.Check_At</a></code></pre></div>
</div>
</div></td>
</tr>
<tr class="odd">
<td><p><span class="underline">Sum specific property values of the objects of a diagram</span></p>
<p>The class &quot;Action&quot; has the property &quot;Rate&quot;. Objects of this class are used in diagrams of the class &quot;Diagram&quot;.</p>
<p><strong>Goal:</strong> A formula property &quot;Sum&quot; for diagrams of the class &quot;Diagram&quot; summing the values of the property &quot;rate&quot; of the objects on the diagrams of this class.</p>
<p>Warning: the property &quot;rate&quot; must have the property type &quot;Integer&quot; or &quot;Double&quot; for such a calculation.</p></td>
<td><div class="code panel pdl" style="border-width: 1px;">
<div class="codeContent panelContent pdl">
<div class="sourceCode" id="cb14" data-syntaxhighlighter-params="brush: vb; gutter: false; theme: Confluence" data-theme="Confluence" style="brush: vb; gutter: false; theme: Confluence"><pre class="sourceCode vb"><code class="sourceCode monobasic"><a class="sourceLine" id="cb14-1" data-line-number="1">sum = 0</a>
<a class="sourceLine" id="cb14-2" data-line-number="2"><span class="kw">Set </span>objs = This.Objects</a>
<a class="sourceLine" id="cb14-3" data-line-number="3"><span class="kw">For </span>Each obj In objs</a>
<a class="sourceLine" id="cb14-4" data-line-number="4">  <span class="kw">If </span>obj.Class.DbName = <span class="st">&quot;Action&quot;</span> <span class="kw">Then</span></a>
<a class="sourceLine" id="cb14-5" data-line-number="5">    sum = sum + obj.Attribute(<span class="st">&quot;Rate&quot;</span>)</a>
<a class="sourceLine" id="cb14-6" data-line-number="6">  <span class="kw">End If</span></a>
<a class="sourceLine" id="cb14-7" data-line-number="7"><span class="kw">Next</span></a>
<a class="sourceLine" id="cb14-8" data-line-number="8">Result = sum</a></code></pre></div>
</div>
</div></td>
</tr>
<tr class="even">
<td><p><span class="underline">Show linked file name in case it exists. If not, show custom message</span></p>
<p><strong>Comment</strong>: Ubound(...) operator cannot be used with p4b objects, since p4b uses its own collections (P4B.EntityCollection) and not vb arrays. Use <strong>.Count</strong> instead.</p></td>
<td><div class="code panel pdl" style="border-width: 1px;">
<div class="codeContent panelContent pdl">
<div class="sourceCode" id="cb15" data-syntaxhighlighter-params="brush: vb; gutter: false; theme: Confluence" data-theme="Confluence" style="brush: vb; gutter: false; theme: Confluence"><pre class="sourceCode vb"><code class="sourceCode monobasic"><a class="sourceLine" id="cb15-1" data-line-number="1"><span class="kw">If </span>This.LinkedFiles.Count &gt; 0 <span class="kw">Then</span></a>
<a class="sourceLine" id="cb15-2" data-line-number="2">    Result = This.LinkedFiles(1).Name</a>
<a class="sourceLine" id="cb15-3" data-line-number="3"><span class="kw">Else</span></a>
<a class="sourceLine" id="cb15-4" data-line-number="4">    Result = <span class="st">&quot;No linked files&quot;</span></a>
<a class="sourceLine" id="cb15-5" data-line-number="5"><span class="kw">End If</span></a></code></pre></div>
</div>
</div></td>
</tr>
</tbody>
</table>

#### Use of shape-specific properties

<table>
<colgroup>
<col style="width: 50%" />
<col style="width: 50%" />
</colgroup>
<thead>
<tr class="header">
<th>Example</th>
<th>Formula</th>
</tr>
</thead>
<tbody>
<tr class="odd">
<td><p>The name of the diagram on which the shape is.</p></td>
<td><em>ShapeDiagramName</em></td>
</tr>
<tr class="even">
<td><p>The ID of the diagram on which the shape is.</p></td>
<td><p><em>ShapeDiagramId</em></p></td>
</tr>
<tr class="odd">
<td>The ID of the shape.</td>
<td><p><em>ShapeID</em></p></td>
</tr>
</tbody>
</table>

#### Display a list of objects/diagrams

<table>
<colgroup>
<col style="width: 50%" />
<col style="width: 50%" />
</colgroup>
<thead>
<tr class="header">
<th><p>Example</p></th>
<th><p>Formula</p></th>
</tr>
</thead>
<tbody>
<tr class="odd">
<td><p>The list of linked objects.</p></td>
<td><p><em>This.LinkedObjects.Name</em></p></td>
</tr>
<tr class="even">
<td><p>The list of diagram names, on which the particular object is used.</p></td>
<td><p><em>This.Diagrams.Name</em></p></td>
</tr>
<tr class="odd">
<td><p>The list of linked diagrams.</p></td>
<td><p><em>This.LinkedDiagrams.Name</em></p></td>
</tr>
<tr class="even">
<td><p>The property list of all the diagrams linked to the object.</p></td>
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
<hr style="padding-top:2rem" />
<a href="https://github.com/process4/docs/issues" target="_blank" class="bgw btn btn-primary btn-lg shadow-sm">Report an issue</a>
<a href="https://github.com/process4/docs" target="_blank" class="bgw btn btn-primary btn-lg shadow-sm" style="margin-left:10px;">View source code</a>
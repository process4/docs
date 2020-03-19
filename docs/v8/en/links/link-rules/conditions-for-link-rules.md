-   [Condition](#condition)
-   [Message](#message)
-   [Create conditions](#create-conditions)
    -   [Examples of conditions for link rules](#examples-of-conditions-for-link-rules)
        

[Conditions](conditions)  can be created for [link
rules](link-rules) in [Database Designer](database-designer) (or in
the [class matrix](class-matrix)), following the following logic:

The link technology should only lead to a link, if the condition is
"true", otherwise it is ignored.

### Condition

In this field, you can either enter a condition, or enter a small
program in Visual Basic. In the second case the variable "Result" must
have a value ("True" or "False").

<div class="warning">

Please make sure that you enter its db name when using a class or
property in the condition, and not only the name, as the db name does
not depend on the content language (your model) and so that you have no
problems with model translations.

   </div>

You can also use all the API functions of process4.biz here; their
description can be found
here: https://dev.process4.biz/confluence/display/KB/p4b+API+Description

### Message

In this field, the text appearing in
the [validation](validation-scripts) of a [diagram](diagram) should be
entered in order to confirm the correct link between
two [objects](object) or inform about the non-fulfilment of the
condition. If you leave the rule message empty, no information will be
displayed for the conditioned link rule in the validation window.

You can use the message both positive (= successful link; for example:
"The link between input and customer is successful "), or negative
(=link failure; for example: "The Shape 'End' cannot have any incoming
link.").

### Create conditions

For the creation of conditions for [link rules](link-rules), the
following context objects can be used:

<table>
<colgroup>
<col style="width: 50%" />
<col style="width: 50%" />
</colgroup>
<thead>
<tr class="header">
<th><p>Name</p></th>
<th><p>Description</p></th>
</tr>
</thead>
<tbody>
<tr class="odd">
<td><p>LinkedObject (&quot;Event&quot;)</p></td>
<td><p>Object from the class with the Db name &quot;Event&quot;.</p></td>
</tr>
<tr class="even">
<td><p>SrcObject</p></td>
<td><p>Source object for the link (P4B.Object).</p></td>
</tr>
<tr class="odd">
<td><p>DstObject</p></td>
<td><p>Target object for the link (P4B.Object).</p></td>
</tr>
<tr class="even">
<td><p>Object</p></td>
<td><p>The association object itself (P4B.Object).</p></td>
</tr>
<tr class="odd">
<td><p>DiagramObjects</p></td>
<td><p>List of all the objects on the diagram (P4B.Objects).</p></td>
</tr>
<tr class="even">
<td><p>DiagramLinks</p></td>
<td><p>List of all discovered automatic links on the diagram.</p></td>
</tr>
<tr class="odd">
<td><p>Result</p></td>
<td><p>Variable for the result of the condition &quot;True&quot; or &quot;False&quot;; If &quot;True&quot;, the link between the objects was successfully created.</p></td>
</tr>
</tbody>
</table>

If the link is directed (i.e. with an arrow head or reading direction)
and you can easily understand which object the source object is and
which the target object is, then you can use the functions *SrcObject
and DstObject.* However, there is also
the *LinkedObject* function*("X"):* in this case it does not matter
whether the object is a source or a target object - what is important,
is that this object belongs to the class with the db name "X".

 

#### Examples of conditions for link rules

<table>
<colgroup>
<col style="width: 50%" />
<col style="width: 50%" />
</colgroup>
<thead>
<tr class="header">
<th><p>Condition</p></th>
<th><p>Description</p></th>
</tr>
</thead>
<tbody>
<tr class="odd">
<td><div class="code panel pdl" style="border-width: 1px;">
<div class="codeContent panelContent pdl">
<div class="sourceCode" id="cb1" data-syntaxhighlighter-params="brush: vb; gutter: false; theme: Confluence" data-theme="Confluence" style="brush: vb; gutter: false; theme: Confluence"><pre class="sourceCode vb"><code class="sourceCode monobasic"><a class="sourceLine" id="cb1-1" data-line-number="1">SrcObject.Mastershape=1</a></code></pre></div>
</div>
</div></td>
<td><p>The conditioned link rule is only used when the property value (the source object of the link, i.e. <em>SrcObject)</em> with the Db name &quot;master shape&quot; is exactly &quot;1&quot;.</p></td>
</tr>
<tr class="even">
<td><div class="code panel pdl" style="border-width: 1px;">
<div class="codeContent panelContent pdl">
<div class="sourceCode" id="cb2" data-syntaxhighlighter-params="brush: vb; gutter: false; theme: Confluence" data-theme="Confluence" style="brush: vb; gutter: false; theme: Confluence"><pre class="sourceCode vb"><code class="sourceCode monobasic"><a class="sourceLine" id="cb2-1" data-line-number="1">SrcObject.Mastershape&lt;&gt;1</a></code></pre></div>
</div>
</div></td>
<td><p>The conditioned link rule is only used when the property value (the source object of the link, i.e. <em>SrcObject)</em> with the Db name &quot;master shape&quot; is not equal to &quot;1&quot;.</p></td>
</tr>
<tr class="odd">
<td><div class="code panel pdl" style="border-width: 1px;">
<div class="codeContent panelContent pdl">
<div class="sourceCode" id="cb3" data-syntaxhighlighter-params="brush: vb; gutter: false; theme: Confluence" data-theme="Confluence" style="brush: vb; gutter: false; theme: Confluence"><pre class="sourceCode vb"><code class="sourceCode monobasic"><a class="sourceLine" id="cb3-1" data-line-number="1">SrcObject.Mastershape=2 <span class="kw">OR</span> DstObject.Mastershape=2</a></code></pre></div>
</div>
</div></td>
<td><p>The conditioned link rule is only used when the property values (the source or target object of the link, i.e. <em>SrcObject OR DstObject)</em> with the Db name &quot;master shape&quot; is equal to &quot;2&quot;.</p></td>
</tr>
<tr class="even">
<td><div class="code panel pdl" style="border-width: 1px;">
<div class="codeContent panelContent pdl">
<div class="sourceCode" id="cb4" data-syntaxhighlighter-params="brush: vb; gutter: false; theme: Confluence" data-theme="Confluence" style="brush: vb; gutter: false; theme: Confluence"><pre class="sourceCode vb"><code class="sourceCode monobasic"><a class="sourceLine" id="cb4-1" data-line-number="1">SrcObject.Mastershape&lt;&gt;2 <span class="kw">AND</span> DstObject.Mastershape&lt;&gt;2</a></code></pre></div>
</div>
</div></td>
<td><p>The conditioned link rule will only be used if the property values (the source and target object of the link, i.e. <em>SrcObject AND DstObject)</em> with the DbName &quot;master shape&quot; are exactly &quot;2&quot;.</p></td>
</tr>
<tr class="odd">
<td><div class="code panel pdl" style="border-width: 1px;">
<div class="codeContent panelContent pdl">
<div class="sourceCode" id="cb5" data-syntaxhighlighter-params="brush: vb; gutter: false; theme: Confluence" data-theme="Confluence" style="brush: vb; gutter: false; theme: Confluence"><pre class="sourceCode vb"><code class="sourceCode monobasic"><a class="sourceLine" id="cb5-1" data-line-number="1">IsNull(DstObject.Mastershape) <span class="kw">OR</span> DstObject.Mastershape&lt;&gt;1</a></code></pre></div>
</div>
</div></td>
<td><p>The conditioned link rule is only used when the property value (the source object of the link, i.e. <em>SrcObject)</em> with the Db name &quot;master shape&quot; is empty or equal to &quot;1&quot;.</p></td>
</tr>
<tr class="even">
<td><div class="code panel pdl" style="border-width: 1px;">
<div class="codeContent panelContent pdl">
<div class="sourceCode" id="cb6" data-syntaxhighlighter-params="brush: vb; gutter: false; theme: Confluence" data-theme="Confluence" style="brush: vb; gutter: false; theme: Confluence"><pre class="sourceCode vb"><code class="sourceCode monobasic"><a class="sourceLine" id="cb6-1" data-line-number="1">SrcShape.Cells(<span class="st">&quot;PinX&quot;</span>).ResultIU &lt; DstShape.Cells(<span class="st">&quot;PinX&quot;</span>).ResultIU</a></code></pre></div>
</div>
</div></td>
<td><p>The conditioned link rule is only used when the source object is placed to the left of the target object of the link.</p>
<p>It can also function reversely, if the condition is adjusted accordingly.</p></td>
</tr>
<tr class="odd">
<td><div class="code panel pdl" style="border-width: 1px;">
<div class="codeContent panelContent pdl">
<div class="sourceCode" id="cb7" data-syntaxhighlighter-params="brush: vb; gutter: false; theme: Confluence" data-theme="Confluence" style="brush: vb; gutter: false; theme: Confluence"><pre class="sourceCode vb"><code class="sourceCode monobasic"><a class="sourceLine" id="cb7-1" data-line-number="1">SrcShape.Cells(<span class="st">&quot;PinY&quot;</span>).ResultIU &lt; DstShape.Cells(<span class="st">&quot;PinY&quot;</span>).ResultIU</a></code></pre></div>
</div>
</div></td>
<td><p>The conditioned link rule is only used when the source object has been placed under the target object of the link.</p>
<p>It can also function reversely, if the condition is adjusted accordingly.</p></td>
</tr>
</tbody>
</table>

<hr style="padding-top:2rem" />
<a href="https://github.com/process4/docs/issues" target="_blank" class="bgw btn btn-primary btn-lg shadow-sm">Report an issue</a>
<a href="https://github.com/process4/docs" target="_blank" class="bgw btn btn-primary btn-lg shadow-sm" style="margin-left:10px;">View source code</a>
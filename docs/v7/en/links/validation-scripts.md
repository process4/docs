-   [Create Validation Scripts](#create-validation-scripts)
    -   [Examples of validation scripts](#examples-of-validation-scripts)
-   [Validate charts](#validate-charts)

Validation scripts are used for methods verification and are created and
maintained in [Database Designer](database-designer). They
analyze [diagrams](diagram) and inform on whether the modelling is wrong
(according to the defined criteria). Validation scripts are written in
VB (Visual Basic) and you can use all[p4b API
functions](mod_018-api-application-programming-interface-of-p4b).

The difference between [conditions for link
rules](conditions-for-link-rules) and validation scripts is that
validation scripts analyze existing links - the conditions for link
rules, can prevent the creation of the links, if the modelling was
wrong.

<div class="warning">
Attention:

To create validation scripts, basic programming skills are recommended.
</div>

### Create Validation Scripts

1.  Choose the desired Unit in the [Database
    Designer](database-designer).
2.  Open the section "Validation Scripts" in the navigation window.
3.  Click on the button "New".  
    1.  Alternatively, you can use the function "New" from the context
        menu of the section "Validation scripts".
4.  A [properties window](properties-dialog-box) appears for the newly
    created validation script.
    1.  Name  
        The desired name for this validation script.
    2.  Unit  
        Unit cannot be changed in properties window as it was chosen in
        step 1.
    3.  Target classes ID  
        Select the [class(es)](class) whose [objects](object) are to be
        analyzed.
    4.  Enabled diagram classes  
        Select the diagram class/es where validation script will be
        executed.
    5.  Enabled  
        Enables/disables the validation script.
    6.  Validation message  
        Enter the text you want to be displayed in the validation
        window. It is displayed only when the variable "result" after
        running the validation script contains the value "True".
    7.  Validation script text  
        Enter here the validation script to be executed; this can be
        a [condition](conditions) (also: [Conditions for Link
        Rules]((conditions-for-link-rules)), or a small program in Visual
        Basic.
5.  Clicking "OK" creates the validation script.



*![](//images.ctfassets.net/utx1h0gfm1om/mTfqHDWfgy2mI2IMkScg2/dcd6c7926b1b6ca6c3fba15e6051b2a3/328807.png)  
*

*Properties window of a validation script.*

#### Examples of validation scripts

<table>
<colgroup>
<col style="width: 50%" />
<col style="width: 50%" />
</colgroup>
<thead>
<tr class="header">
<th><p>Validation Rule</p></th>
<th><p>Script text</p></th>
</tr>
</thead>
<tbody>
<tr class="odd">
<td><p>From an object of the class &quot;input&quot;, there should always be an outgoing link.</p></td>
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
<a class="sourceLine" id="cb1-17" data-line-number="17"><span class="kw">End If </span></a></code></pre></div>
</div>
</div></td>
</tr>
<tr class="even">
<td><p>An object of the class &quot;input&quot;, can have no incoming links.</p></td>
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
<td><p>An object of class &quot;Output&quot; should have no outbound links.</p></td>
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
<td>Each object of the class &quot;activity&quot; should have an appropriate RACI link to a role under &quot;R&quot;.</td>
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
<td>An object of the class &quot;activity&quot; should always be linked either with another object of this class, or with an object of the class &quot;Output&quot;.</td>
<td><div class="code panel pdl" style="border-width: 1px;">
<div class="codeContent panelContent pdl">
<div class="sourceCode" id="cb5" data-syntaxhighlighter-params="brush: vb; gutter: false; theme: Confluence" data-theme="Confluence" style="brush: vb; gutter: false; theme: Confluence"><pre class="sourceCode vb"><code class="sourceCode monobasic"><a class="sourceLine" id="cb5-1" data-line-number="1"><span class="kw">Set </span>objs1 = DiagramLinks(<span class="st">&quot;LinkedToFrom&quot;</span>, 0, 2, <span class="dt">Object</span>, <span class="st">&quot;Activity&quot;</span>)</a>
<a class="sourceLine" id="cb5-2" data-line-number="2"><span class="kw">Set </span>objs2 = DiagramLinks(<span class="st">&quot;LinkedToFrom&quot;</span>, 0, 2, <span class="dt">Object</span>, <span class="st">&quot;InputOutput&quot;</span>)</a>
<a class="sourceLine" id="cb5-3" data-line-number="3">Result = (objs2.Count = 0 <span class="kw">AND</span> objs1.Count = 0)</a></code></pre></div>
</div>
</div></td>
</tr>
<tr class="even">
<td>Roles linked as &quot;R&quot; and &quot;A&quot; cannot have the same name, i.e., there should be different objects.</td>
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
<a class="sourceLine" id="cb6-10" data-line-number="10">            <span class="kw">If Not</span> has_a <span class="kw">Then</span> has_a = (obj.Name = <span class="st">&quot;A&quot;</span>)</a>
<a class="sourceLine" id="cb6-11" data-line-number="11">            Result = (has_r <span class="kw">AND</span> has_a)</a>
<a class="sourceLine" id="cb6-12" data-line-number="12">            <span class="kw">If </span>Result <span class="kw">Then</span> Exit <span class="kw">For</span></a>
<a class="sourceLine" id="cb6-13" data-line-number="13">        <span class="kw">Next</span></a>
<a class="sourceLine" id="cb6-14" data-line-number="14">        <span class="kw">If </span>Result <span class="kw">Then</span> Exit <span class="kw">For </span> </a>
<a class="sourceLine" id="cb6-15" data-line-number="15">    <span class="kw">Next</span></a>
<a class="sourceLine" id="cb6-16" data-line-number="16"><span class="kw">End If                                                                          </span></a></code></pre></div>
</div>
</div></td>
</tr>
</tbody>
</table>

### Validate charts

When [Conditions for Link Rules]((conditions-for-link-rules) and/or
Validation scripts have been defined, you can
validate [diagrams](diagram).

To do this, open a diagram and click on the validation icon (green check
mark) in the process4.biz menu.

In the validation window at the bottom of the diagram appear now the
messages about the successful or unsuccessful validation. These messages
can be controlled by clicking on the 3 different signs:

-  <div class="success"> Green:

    Shows successful messages *(Result = True)*
    </div>

-   <div class="warning"> Yellow:

    Shows neutral messages and instructions (see: [System
    dialogues](client-settings))
    </div>

-  <div class="error"> Red:

    Shows error messages *(Result = False)*
    </div>

You can also use the search to locate the validation window for an
object or a class.

When you double-click on a validation message, it or the corresponding
shape/s will be marked on the diagram.

![](//images.ctfassets.net/utx1h0gfm1om/6NfgGAyM6WUAs6YO08seQg/3538bfdf09d416676cdcf13758167cce/328809.png)

*Validate a diagram.*


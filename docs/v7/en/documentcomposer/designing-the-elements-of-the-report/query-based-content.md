A report may also contain chapters that are based on a query (or the
results from the query builder). Here is an example from our demo
model. We want to generate a report with the following structure, as
shown on a special handbook diagram:

![](//images.ctfassets.net/utx1h0gfm1om/6qCoYMdRTy6gWUUWeW4Qk2/e35407fc84b9d1c8ba2c79b9106cc84e/328731.png)

First, we want to generate a list of all processes of "process group
diagrams". For example, such diagrams as "(RACI) After Sales Process":

![](//images.ctfassets.net/utx1h0gfm1om/5Q3ajMBJ9SoA4W4cqMeGWQ/fb9a36a918ab128f4d25d34e7f722a95/328733.png)

We have created a query "process group diagrams" using the Query
Builder, which creates the list with the names and the diagrams ID: 

![](//images.ctfassets.net/utx1h0gfm1om/6lvTSe3w2ImqO6UKSWOUWi/541d45d2bb5102d7757866d25a161821/328735.png)

Then we want to list all process objects with some of their properties
for each "process group diagram". We have created another query
"processes of a process group." The query uses a parameter to list all
the objects that are used on diagrams with the ID of the query "process
group diagrams".

![](//images.ctfassets.net/utx1h0gfm1om/5ybamKIJvUKyOqe4A2Yig0/338fff2495e609c36804407e6792179a/328737.png)

Finally, we want to list all child diagrams describing relevant
processes using the RACI method. The query "Activities responsibilities"
also includes a parameter to list only those objects which are used with
the corresponding ID on the RACI diagram. You can enter in the parameter
"ID1" the name of the RACI diagram.

![](//images.ctfassets.net/utx1h0gfm1om/59PGb4TK1y4mW22wAgOOaw/90bbadbf4ab726fe5437bb57ffb28f32/328740.png)

Now we can define a query-based report in Document Composer - Wizard.
The structure of the report is taken from the special handbook diagram.
For the chapter "Process Group diagrams", we activate the tab
"Query-based content". Then we select a base query on which our report
will be based. In our case it is the query "group process diagrams" that
lists all the diagrams with processes: "(QM) 0. developing and
implementing a QM-system", "(RACI) After Sales Process", "sales".

![](//images.ctfassets.net/utx1h0gfm1om/2a4d4X65l6uEEgi06iAKko/702e887b2a5f053c4e149eeb6145742d/328742.png)

Important condition: only the queries listing diagrams (and not objects)
can be used as base query, i.e. those which have the source type
"Generic diagram" in the Query Builder.

![](//images.ctfassets.net/utx1h0gfm1om/5DI6CxRXlS6Y0CgsYAces4/57d9ea0ffc68c10d8d73028c16e657ee/329559.png)

We activate in Document Composer - Wizard the following options:  
• Create a report series  
This option allows you to generate multiple outputs of the same report,
each with different values or content. Each report contains a diagram of
the base query and all data from the subordinate queries. The structure
of each document will be the same here, only the content will be
diagam-specific to each report. In our example, we get 3 reports: the
first with the diagram "(QM) 0. developing and implementing a
QM-system", the second - "(RACI) After Sales Process", the third -
"Sales". If this option is disabled, we only get one report with all
these contents in serial arrangement.  
• View as tree diagram   
This option not only allows you to export the basic diagram, but all its
children diagrams; with the levels option you can define how many levels
should be published. We thus become the following diagrams tree for the
diagram "(RACI) After Sales Process" in the report: 

![](//images.ctfassets.net/utx1h0gfm1om/6L6pw4K9uooCU40OQIaYki/cfcf296f9d4064668e70fbe7894a2d63/328746.png)

and for the diagram "Sales" another tree:

![](//images.ctfassets.net/utx1h0gfm1om/2iGcpOFU2M4AU6e4kAyCyK/443697dc83df72d2c5a5cd1921901882/328748.png)

If this option is disabled, only the parent diagrams, i.e. only the
first level, will be added to the report.  
In the lower window you can add items similarly to the object-based
content (see separate chapter paragraph types): text block diagram,
query, page/section break.

Here is an example:

![](//images.ctfassets.net/utx1h0gfm1om/3ZawZNdZSEOeqGaOEmumuW/f415196c09b583d93c828b456dd59b3a/328750.png)

1. Text Block: contains columns from the base query, in our example
"Process group diagrams". This query consists of two columns: "Diagram
Name" and "diagram ID". One of these columns can be added to the report.

![](//images.ctfassets.net/utx1h0gfm1om/1QKpKpovEkwia2SAweIyII/83b02743cc3a25cb9058ab18504155e7/328752.png)

2. Diagram: adds a diagram image to the report that is either taken from
the base query or from the tree of the diagram of the base query, when
the option "View as tree diagram" is enabled.  
3. Query: You can add two types of queries:  
a) ordinary query  
b) query with parameter (for this purpose see the Query Builder Manual).
In our example, we have two queries with parameters: "processes of a
process group" and "Activities responsibilities". If a query with
parameters is used, then the DocumentComposer will analyze all the
diagrams added to the report and use their IDs as a parameter in the
query. As a result we will get a report with queries showing specific
data for each diagram data; for example, with the activities and roles
that are used on each RACI diagram.  
Here you can see the structure of our sample report for the diagram
"(RACI) After Sales Process":

![](//images.ctfassets.net/utx1h0gfm1om/4rar5p6N444OMcgWwkuS8A/133971da9fa59b4d6d7b8b5c628a6c18/328754.png)

4. Page/section break: You can add a page or section break within the
Document Composer Reports.

Restrictions:  
1.You can activate the "Query-based content" in a DocumentComposer
report for several chapters. However, it is only possible for parallel
chapters and not for (interconnected) subchapters.   
2.The option "Create a Report Series" can be activated only once per
report. Thus a series report cannot be published in a series report.

<hr style="padding-top:2rem" />
<a href="https://github.com/process4/docs/issues" target="_blank" class="bgw btn btn-primary btn-lg shadow-sm">Report an issue</a>
<a href="https://github.com/process4/docs" target="_blank" class="bgw btn btn-primary btn-lg shadow-sm" style="margin-left:10px;">View source code</a>
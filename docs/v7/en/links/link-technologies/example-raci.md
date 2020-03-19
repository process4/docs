To enable a RACI link technology, activate this technology in the
designer for the selected classes as follows.

-   Create a link type, for example under the name "RACI" in the
    designer. Set for example the class RACI as the association class.
    Objects of this class are then displayed as association objects in
    the properties of linked objects.

![](//images.ctfassets.net/utx1h0gfm1om/3sUfPgDRckK8gqIuWq2Ag8/361c515243299de179617bc1d03ac682/328874.png)

-   Select the first class (in our example: ***Activity),*** open the
    Properties dialogue box and switch to the tab link rules.
-   Highlight the second class (here: ***role)*** with which you wish to
    use the link type "RACI" in the candidate list. With the button "New
    Rule ...", select the link type and link technology, activate it for
    the target class and then click "OK". With the button "Edit Rule
    ..." you can change it later.

  

-   In the repository in the association class RACI, the following
    properties e.g. "A", "C", "CUS", "I", "R", "S", etc are available.
    You can create as many additional objects in this class as you want,
    which are then used as association objects in links between
    activities and roles. 

  

In the following example diagrams, the advantages of the RACI link
technology just described are apparent.   
Automatic links between the activity "collect customer data" and the
roles "VKF", "VKFADM", "VKF LT" regarding the objects "R", "A", "C" and
"I", which lie as 90 ° degree swimlanes in the template, can be created
by simply dragging & dropping the objects at the right location on the
diagram. The corresponding responsibility for the linked activity is
assigned to each role through the association object used "R", "A", "C"
or "I" of the class RACI. 

  

Here is an example where the RACI technology has been set with the same
link type for other classes,
namely ***Input-Output*** and ***customer.*** 

 


<hr style="padding-top:2rem" />
<a href="https://github.com/process4/docs/issues" target="_blank" class="bgw btn btn-primary btn-lg shadow-sm">Report an issue</a>
<a href="https://github.com/process4/docs" target="_blank" class="bgw btn btn-primary btn-lg shadow-sm" style="margin-left:10px;">View source code</a>
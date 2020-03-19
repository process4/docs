#### Swimlane Technology with Exclusion of Certain Classes

If you do not want to allow a link technology of a particular class for
all link candidates (= objects of other classes), proceed as follows.   
Activate a rule which allows the swimlane technology for any class by
using a specific link type. Define a further rule, which does not allow
the swimlane technology for a particular class (e.g. person1) with a
selected link type.

![](//images.ctfassets.net/utx1h0gfm1om/6ZRgmsKkWQaKoMIiK8uKkm/f1d80c91dcf0c6e28064b383188fa27c/328878.png)

![](//images.ctfassets.net/utx1h0gfm1om/43G2iOsVRSCmYwo00YqS8I/288f12cb00b564024420dc21c804b435/328880.png)

The diagram in the example below creates an automatic link of the type
swimlane technology between the objects ***Application1*** and
***Position1.***

![](//images.ctfassets.net/utx1h0gfm1om/16Ms3GKJMEo8GueGcWQEgw/0eb39ab7c081932bda25b7fbc4a5b621/328882.png)

However, no link exists to the object person due to the defined rules.
The linked objects do not need to lie on one another or completely
overlap: an overlap of approximately 30 percent of the total space can
already activate the link.

#### Swimming Lanes for all Superimposed Objects or only Directly Superimposed Objects

You can use two types of swimming lane technology: 

-   Activate swimlanes (all consecutive) 

When multiple shapes lie on one another, ALL objects are linked, even
those with no direct contact. In the following example, the objects A, B
and C lie on one another so that object A only touches the object B, B
touches A and C, C touches only B.

 

![](//images.ctfassets.net/utx1h0gfm1om/1OcNpmgt3m4WaqywAWyikW/975c0807921de6dd9ccb66c68dde8787/329298.png)

Activate for the respective classes of these objects the swimlane
technology with the extension "(whole Shape Stack)". 

![](//images.ctfassets.net/utx1h0gfm1om/3nQRaAXD6g8o4iWiIke8I8/48daed1c5ec46554a4bd10fb6c7acf67/329300.png)

As a result, all objects are linked from different levels on this
diagram: A with B and C, B with A and C, C with A and B. 

-   Activate swimlane only for objects lying directly on one another

When multiple shapes lie on one another, only directly contacting
objects are linked.

![](//images.ctfassets.net/utx1h0gfm1om/2780SNk5GEMCUE6oeCq8aU/06c90d7a396d5417f4a119a1de413154/329296.png) 

  
If swimlane technology is activated for all classes in the example
described above (without the additional "whole shape stack"), the
objects are linked as follows: A with B, B with A and C, C with B. The
objects A and C are not linked.

<hr style="padding-top:2rem" />
<a href="https://github.com/process4/docs/issues" target="_blank" class="bgw btn btn-primary btn-lg shadow-sm">Report an issue</a>
<a href="https://github.com/process4/docs" target="_blank" class="bgw btn btn-primary btn-lg shadow-sm" style="margin-left:10px;">View source code</a>
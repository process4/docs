![](//images.ctfassets.net/utx1h0gfm1om/1JKBtbTKYASkK4quk48U46/96b7eb3f22b29a422e3bf9dcdd742e04/329611.png)

In this example, we will show the functionality of *"Same type for
recursive links*" option. Assume we have 2 link types - *Linktype1* and
*Linktype2*. And we have the following 5 classes that are linked in the
following way:

![](//images.ctfassets.net/utx1h0gfm1om/2lwz0uTqtK84Euc4GEuOKU/9358829d4ca88cdbc00eef2e568416a4/329585.png)

As you may notice, only A1 and A7 are connected with *LinkType2*. In a
repository view it will look like:

![](//images.ctfassets.net/utx1h0gfm1om/5SEuT0MSYgE6mSYuIMoq6k/f912bb297b8c7acdf5e4a547531b6c25/329658.png)

If we option "Same type for recursive links" enabled, then the initial
link type will be chosen and will be used as a restriction for further
links **down that path**.That means, in the diagram above if we start
with the object A1, then we would expect the following objects to show
up:

-   A2, A6 - since they are linked using the same link type as A2 and A1
    (namely *LinkType1*)
-   A7 - since it is a direct child of A1 (connected via *LinkType2*)
-   A3 - since it is a direct child of A1. Notice that A4 will not be
    shown, since it has a different link type. Although A5 and A4 have
    the same link type as A1 and A3 (LinkType1) it will also not be
    show, because the trace path was already terminated between A3 and
    A4.

![](//images.ctfassets.net/utx1h0gfm1om/4Du62tkMc8226Aq4aGkiMu/2d17fc74b83a29f713148b02421e9c81/329644.png)

This will also be shown in the QueryBuilder results:

![](//images.ctfassets.net/utx1h0gfm1om/4Vlr0OMUU0AAE4YqkCsy42/cdfd1c73cbec0cacfd8d751712284909/329651.png)


<hr style="padding-top:2rem" />
<a href="https://github.com/process4/docs/issues" target="_blank" class="bgw btn btn-primary btn-lg shadow-sm">Report an issue</a>
<a href="https://github.com/process4/docs" target="_blank" class="bgw btn btn-primary btn-lg shadow-sm" style="margin-left:10px;">View source code</a>
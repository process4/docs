### Problem

You want a shape to change its size depending on the quantity of the
text on it. For example, a text field should be max. 10 mm high, but if
more text is entered, the shape should "grow" along with the text
quantity.

### Solution

Open ***ShapeSheet*** for the master shape. In the section "**Shape
Transform**" select the field "**Height**" and enter
"TEXTHEIGHT(TheText,Width)".

If you want to fix the maximum size of the text field (i.e. 10 mm), you
have to enter "MAX(10 mm,TEXTHEIGHT(TheText,Width))"

![](//images.ctfassets.net/utx1h0gfm1om/2YxLxqQ8k0Mm0Q2k4GUYQk/e6a359dd67670c838d60af0af476962d/328035.png)

![](//images.ctfassets.net/utx1h0gfm1om/3KgZM86UdOcwkg4iemUUu0/70fc183d2a8f5c5f4e2e3d2b427a1f05/328036.png)


<hr style="padding-top:2rem" />
<a href="https://github.com/process4/docs/issues" target="_blank" class="bgw btn btn-primary btn-lg shadow-sm">Report an issue</a>
<a href="https://github.com/process4/docs" target="_blank" class="bgw btn btn-primary btn-lg shadow-sm" style="margin-left:10px;">View source code</a>
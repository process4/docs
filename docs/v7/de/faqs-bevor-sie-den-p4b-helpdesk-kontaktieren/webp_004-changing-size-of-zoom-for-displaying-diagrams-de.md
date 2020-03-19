### Problem

If you select a diagram in the WebPortal and click zoom, it will be
increased/decreased by the factor of 2. You can change the size of zoom
as follows.

### Solution

1. Open the file **heading.xsl** located in **C:\\Program Files
(x86)\\process4biz\\Extensions\\Publisher Server\\** in the edit mode.

2. Find "zoom" and change the highlighted values 2 and 0.5 to 1.4 and
0.8 respectively. 

3. Save the file.

4. Generate and publish website again.

Diagrams will now be increased/decreased by the factor that you have put
in the file.

Alternatively you can edit the same file directly on published website
(without having to republish the website again). Note that after the
next publish, these settings will be reset to default.

![](//images.ctfassets.net/utx1h0gfm1om/SZAaC2lUe4S2EW8UaWooe/ed2bc4ce7eaea7d4205f04d199c3e2ab/328941.png)


<hr style="padding-top:2rem" />
<a href="https://github.com/process4/docs/issues" target="_blank" class="bgw btn btn-primary btn-lg shadow-sm">Report an issue</a>
<a href="https://github.com/process4/docs" target="_blank" class="bgw btn btn-primary btn-lg shadow-sm" style="margin-left:10px;">View source code</a>
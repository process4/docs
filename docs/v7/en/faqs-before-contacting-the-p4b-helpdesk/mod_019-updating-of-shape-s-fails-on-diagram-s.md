### Problem

You have edited a master (e.g. changed color) and clicked "***Update
Instances***", but the existent shapes on the diagram are not updated.

### Solution

Make sure that the function "***Match master by name on drop***" is not
activated (right-click on the master, ***Edit Master/Master
Properties***).

![](//images.ctfassets.net/utx1h0gfm1om/4naHZ7s5vaAqgyy0oeIuI8/61fd1eb6d6d9235fcce2dfb2ee5e3448/329647.png)

![](//images.ctfassets.net/utx1h0gfm1om/1q3Qc4jwL6wGQyCqoOKW2A/ae972d11b4ca2e135966ed8dd79bd65c/329640.png)

 

If this function is activated, it can lead to the problem that shapes
cannot be updated anymore. Please deactivate it for this process.

Then open in Visio menu ***Developer / Drawing Explorer Window***.

![](//images.ctfassets.net/utx1h0gfm1om/YSVQxi5IKiu8kakWeUEAI/a9014300725606db3125af3c29378bf9/329633.png)

 

and delete the old master, that has caused the problems.

Then click "***Update Instances***". The shape will be updated.



<hr style="padding-top:2rem" />
<a href="https://github.com/process4/docs/issues" target="_blank" class="bgw btn btn-primary btn-lg shadow-sm">Report an issue</a>
<a href="https://github.com/process4/docs" target="_blank" class="bgw btn btn-primary btn-lg shadow-sm" style="margin-left:10px;">View source code</a>
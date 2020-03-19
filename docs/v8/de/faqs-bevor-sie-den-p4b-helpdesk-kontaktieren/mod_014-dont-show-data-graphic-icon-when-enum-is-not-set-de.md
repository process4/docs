### Problem

You have defined an enum property with the values "green", "yellow",
"red" and want to show it via data graphic icons (traffic lights). When
the enum value is not set (empty), then the traffic light symbol does
not appear at all.

![](//images.ctfassets.net/utx1h0gfm1om/584yMXgG2AKeQoMWmqw0og/4b00740f442b189d4547b5cafb9a78fd/329589.png)

### Solution

When you define the Enum items, the value "0" should not exist. Only the
values 1,2,3 etc. are allowed.

![](//images.ctfassets.net/utx1h0gfm1om/2xQlj4yGnCuaGueuI46CSy/9181c94c593202e9d39e8f6a290b4e1f/329572.png)

 
<hr style="padding-top:2rem" />
<a href="https://github.com/process4/docs/issues" target="_blank" class="bgw btn btn-primary btn-lg shadow-sm">Report an issue</a>
<a href="https://github.com/process4/docs" target="_blank" class="bgw btn btn-primary btn-lg shadow-sm" style="margin-left:10px;">View source code</a>
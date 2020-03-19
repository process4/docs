### Problem

You have the classes **Input-Output** and **Activity**. You want to link
objects of these classes as following:

**Input** is linked via link type "***is input to***"
with **Activity**  
**Activity** is linked via link type "***gets as input***" with
**Input**    
**Output** is linked via link type "***output from***" with
**Activity**   
**Activity** is linked via link type "***delivers as output***" with
**Output**.

### Solution

1. First check your RACI template. Columns should be called "Input" and
"Output" correspondingly.

![](//images.ctfassets.net/utx1h0gfm1om/5HiwZ2udTG4MA4cKmOe2E4/4915aef92a7d5f7fdeb92d8db07b268d/328356.png)

 

2. Create two new link types.

![](//images.ctfassets.net/utx1h0gfm1om/4a4gXGtG1WSmcEygCGAWIw/796774eb6e04dc805d6d9eee02bce2db/328285.png)

![](//images.ctfassets.net/utx1h0gfm1om/6wL0dLcbRKU40ycMW4yE4o/ed7a8f697d5f016b54a0f61a558bc405/328286.png)

3. Class Input-Output should have the DB name "Input-Output".

![](//images.ctfassets.net/utx1h0gfm1om/3qh2h0XNU462aEeqaEqii/ae3e01ac6a87812ffef6e07dc140efbf/328287.png)

4. Create the following link type rules for the class Input-Output.

![](//images.ctfassets.net/utx1h0gfm1om/41f1qK1ErSGGe88mOMM6KO/e10c3d5a44165f66f60ee17e20e6845f/328288.png)

5. Create following link technology rules for the class Input-Output.

![](//images.ctfassets.net/utx1h0gfm1om/2SzTaghINawomeuuSU4oCc/e4e17f1ce12cacb6c21a8eff1dd15b63/328289.png)

6. For link types "Is input to" and "Gets as Input" write the following
formula in the field Condition.

``` xml
Set shps=Page.Document.Pages(2).Shapes
Set shape_io=LinkedShape("InputOutput")
Set lane_input=shps.ItemU("Input")
input_x=lane_input.Cells("PinX")
input_w=lane_input.Cells("Width")
input_left=input_x-input_w/2
input_right=input_x+input_w/2
io_x=shape_io.Cells("PinX")
io_w=shape_io.Cells("Width")
io_left=io_x-io_w/2
io_right=io_x+io_w/2
Result=input_left<io_left And io_right<input_right
```

![](//images.ctfassets.net/utx1h0gfm1om/7N12FgVnaMwUS2CKMmQGQW/0d0c2f21a9ecaa35fab9018ae984bfc3/328290.png)

7. For the link types "is output from" and "Delivers as output" write
the following formula in the field Condition.

``` xml
Set shps=Page.Document.Pages(2).Shapes
Set shape_io=LinkedShape("InputOutput")
Set lane_output=shps.ItemU("Output")
output_x=lane_output.Cells("PinX")
output_w=lane_output.Cells("Width")
output_left=output_x-output_w/2
output_right=output_x+output_w/2
io_x=shape_io.Cells("PinX")
io_w=shape_io.Cells("Width")
io_left=io_x-io_w/2
io_right=io_x+io_w/2
Result=output_left<io_left And io_right<output_right
```

![](//images.ctfassets.net/utx1h0gfm1om/2scDCC7fUkgWoWA2Iq2cAC/9c2eb6c61c6f65ea43c186e56283df68/328355.png)

Links should work properly now.

![](//images.ctfassets.net/utx1h0gfm1om/1mK4nFXPQQui2gw2yGGokI/108f591aad233973fdd35c74f9527424/328357.png)

![](//images.ctfassets.net/utx1h0gfm1om/2YU9nQAsQ8oqGiA6AOCm2y/606c6422fc3e4fc8d62eadf39043fde0/328358.png)

![](//images.ctfassets.net/utx1h0gfm1om/45HevOZUByAI2sIki04kOq/c4388a89804ec9e64de5285ff8846f3e/328359.png)

 


<hr style="padding-top:2rem" />
<a href="https://github.com/process4/docs/issues" target="_blank" class="bgw btn btn-primary btn-lg shadow-sm">Report an issue</a>
<a href="https://github.com/process4/docs" target="_blank" class="bgw btn btn-primary btn-lg shadow-sm" style="margin-left:10px;">View source code</a>
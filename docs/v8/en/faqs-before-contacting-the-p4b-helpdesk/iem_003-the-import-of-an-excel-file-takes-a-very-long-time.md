### Problem

After starting the Excel Import Wizard and setting the filename, you
click next or save and the cpu of the computer fires-up to 100% and
nothing happens. It takes a long time (about 20 min) for the next window
to appear.

### Reason

In the Excel sheet you try to import, there are a lot of empty rows
which Wizard tries to import. You can determine the used range by
pressing Ctrl+End on keyboard.

### Solution

1) Left-click at first empty row in Excel  
2) Go to the last row and press shift+left-click and select all unused
rows.  
3) Right-click and select "delete".  
4) Save the file.

<hr style="padding-top:2rem" />
<a href="https://github.com/process4/docs/issues" target="_blank" class="bgw btn btn-primary btn-lg shadow-sm">Report an issue</a>
<a href="https://github.com/process4/docs" target="_blank" class="bgw btn btn-primary btn-lg shadow-sm" style="margin-left:10px;">View source code</a>
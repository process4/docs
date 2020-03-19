1. Create a folder on the server where you want to publish your content
and enter a name.  
2. Start Internet Information Service(IIS) from Start → Control Panel
→ Administrative Tools → Computer Management.  
3. Add a new virtual directory under Default Web Site.  
  
![](//images.ctfassets.net/utx1h0gfm1om/4lLj1U8wycii6KUyegisCO/f8c7152ea09b1b39401a1569dbb3d8bd/328336.png){.image-center width="653"
height="456"}  
  
Enter the directory name. Enter the path to the directory you just
created for the publication content.  
![](//images.ctfassets.net/utx1h0gfm1om/6uDYomejRKWocM4a8EGig2/48f79764d6186193f0ee692486781514/328335.png){.image-center width="451"
height="342"}  
Then click OK. The virtual directory has been added.  
![](//images.ctfassets.net/utx1h0gfm1om/4on3VHOFNYWiw8AgC8wWiy/82396fcae2fd33b1be84c7513845d06a/328334.png){.image-center width="222"
height="153"}  
  
4. When you publish content, enter the path to the previously created
folder on the server.  
  ![](//images.ctfassets.net/utx1h0gfm1om/4krKA6HtZYW0KcwIMcgEmG/07b38c45c8c2f01c38abe4495af45f8c/328919.png)  
  
Deactivate the Setup IIS web site at target location option.  
  ![](//images.ctfassets.net/utx1h0gfm1om/1NaFLfACDSuG2AqauCKuSQ/2fe4cdb09d844677747c8c6fc28c04d5/328917.png)  
  
5. To open the webpage with the published content, enter this address:

<http://Servername/Webseitename+>[/](http://Servername/Webseitename/)
(in our example <http://server/p4b>)

 


<hr style="padding-top:2rem" />
<a href="https://github.com/process4/docs/issues" target="_blank" class="bgw btn btn-primary btn-lg shadow-sm">Report an issue</a>
<a href="https://github.com/process4/docs" target="_blank" class="bgw btn btn-primary btn-lg shadow-sm" style="margin-left:10px;">View source code</a>
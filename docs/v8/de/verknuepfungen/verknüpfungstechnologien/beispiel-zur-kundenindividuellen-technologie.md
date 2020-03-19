

Kundenindividuelle Technologie erlaubt es, eine eigene Art und Weise,
wie Objekte auf Diagrammen verknüpft werden sollen, mit Hilfe von
Formula Script (im Feld Bedingung) zu definieren.  
Hier ist ein Beispiel für eine Kundenindividuelle Technologie.  
Wir möchten Objekte Klasse ***Rolle*** mit Objekten Klasse
***Aktivität*** mittels RACI-Objekte verknüpfen. Dabei liegen RACI
Objekte auf der horizontalen und vertikalnen Kreuzung zwischen Rollen
und Aktivitäten (siehe Bild unten):  
![](//images.ctfassets.net/utx1h0gfm1om/5KHh1ilom4sQUi0Kqyqumq/5a5a5bb3e5743e2fad6c957b19eedcaf/1018283.png)  
  
Wir erstellen eine kundenindividuelle Technologie für Klasse
***Aktivität***:  
  
![](//images.ctfassets.net/utx1h0gfm1om/5hYlbUNKTYYeacy2wwyyiy/b3136788db83e18aa6cc1989c7245ab6/1018284.png)  
Im Feld Bedingung schreiben wir folgendes Script:  
  
![](//images.ctfassets.net/utx1h0gfm1om/6ESNEAnxn2YCKQUkQY00cw/f84a3d0457ca7b3b93fc1009f99991cf/1018285.png)  
Dieses Script findet auf dem Diagramm die Koordinaten von der Klasse
***Aktivität*** und ***Rolle***. Dann sucht das Script nach den Objekten
der Klasse ***RACI***. Wenn ein RACI-Objekt auf der vertikalen Linie zur
Klasse ***Aktivität*** und auf der horizontalen Linie zur Klasse
***Rolle*** liegt, dann werden die Objekte der Klassen ***Aktivität***
und ***Rolle*** mit dem Assoziationsobjekt R, A, C oder I verknüpft.  
  
![](//images.ctfassets.net/utx1h0gfm1om/5nJbxauNi0uCMoY0mcSykq/6dba34b9f6876515b5137f3270d07ca0/1018278.png)


<hr style="padding-top:2rem" />
<a href="https://github.com/process4/docs/issues" target="_blank" class="bgw btn btn-primary btn-lg shadow-sm">Report an issue</a>
<a href="https://github.com/process4/docs" target="_blank" class="bgw btn btn-primary btn-lg shadow-sm" style="margin-left:10px;">View source code</a>
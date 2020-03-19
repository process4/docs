

Neben der Auswahl vorhandener Farbschemen, können Sie die
[Publikationseinstellungen](Publikationseinstellungen) auch modifizieren
und einen eigenen Style für Ihr Web-Portal anlegen.

![](//images.ctfassets.net/utx1h0gfm1om/4g2LxSf5NYS6oy8MOgECWA/ef8ef800130c897df37020e1d468d573/1017503.png)

Als Standard stehen zwei vordefinierte Farbschemen zur Wahl:

-   Process4.biz (default Farbschema der Web-Publikation)
-   Simple Green

  
Wenn Sie öfter die verwendeten Farbschemen wechseln möchten, stellen Sie
sicher, dass Sie zwischen den Veröffentlichungen die temporären
Internet-Dateien aus dem Cache Ihres Browsers löschen, damit die
geänderten Site-Einstellungen beim Anzeigen berücksichtigt werden.

### Das Farbschema anpassen

Der nötige Arbeitsablauf, um ein bestehendes Farbschema anzupassen,
deckt sich weitgehend mit der Erstellung eines neuen Farbschemas. Den
entsprechenden Artikel finden Sie hier: [Erstellen neuer
Farbschemas](Erstellen_neuer_Farbschemas)

![](//images.ctfassets.net/utx1h0gfm1om/3K8SI52meQyYAgeUwCIAKQ/cfb259a275c1398f2e3025f8a487ecf7/1017491.png)


### Ein Firmenlogo einbinden

Die Web-Publikation kann auch in Bezug auf das angezeigte Logo angepasst
werden.

Wenn Sie Ihr eigenes Logo verwenden möchten, ändern Sie einfach das Logo
im p4b Standard Farbschema oder fügen es in einem von Ihnen erstellten
Farbschema ein.

Kopieren Sie eine geeignete Bilddatei mit dem Namen "logo.gif" in den
entsprechenden Ordner:

``` java
C:\Program Files\process4biz\Extensions\PublisherServer\config\styles\Process4.biz [default]
```

Bei jeder nächsten Publikation mit dem WebPublisher, wird Ihr Logo in
der Web-Publikation angezeigt.

Wenn Sie das Modell neu publizieren, sollte der Publikationsordner leer
sein. Sonst werden keine Design-Änderungen angezeigt.

Wenn Sie nicht neu publizieren wollen, sondern nur das Logo für eine
bestehende Web-Publikation ändern möchten, platzieren Sie die Datei im
folgenden Folder:

``` java
C:\Inetpub\wwwroot\process4\img
```

Bitte beachten Sie, dass wenn Sie dann wieder publizieren und alle
Seiten aktualisieren, das so geänderte Logo wieder mit dem im Farbschema
eingestellten Logo ersetz wird.




<hr style="padding-top:2rem" />
<a href="https://github.com/process4/docs/issues" target="_blank" class="bgw btn btn-primary btn-lg shadow-sm">Report an issue</a>
<a href="https://github.com/process4/docs" target="_blank" class="bgw btn btn-primary btn-lg shadow-sm" style="margin-left:10px;">View source code</a>
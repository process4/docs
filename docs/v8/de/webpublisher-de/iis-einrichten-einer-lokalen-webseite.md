

1.  Erstellen Sie einen Ordner auf dem Server, auf dem Sie Ihre Inhalte
    publizieren wollen und nennen Sie ihn z.B. „process4"  
      
2.  Öffnen Sie "Internet-Informationsdienste (IIS)" aus Start
    →Systemsteuerung → Verwaltung → Computerverwaltung.  
      
3.  Fügen Sie ein neues virtuelles Verzeichnis unter "Default Web Site"
    hinzu.  
      
4.  Tragen Sie den Namen des Verzeichnisses ein und geben Sie dabei den
    Pfad zu dem vorher erstellten Verzeichnis für die
    Publikationsinhalte an. Klicken Sie anschließend auf OK, das
    virtuelle Verzeichnis wird damit hinzugefügt.  
      
    1.  Je nach Konfiguration des IIS, kann es auch erforderlich sein,
        das Verzeichnis in eine Applikation zu konvertieren. Sie finden
        diese Option im Kontextmenü des jeweiligen (virtuellen)
        Verzeichnisses.  
          
5.  Wenn Sie jetzt Inhalte publizieren, geben Sie den Pfad zu dem vorher
    auf dem Server erstellten Ordner ein  
      
6.  Deaktivieren Sie die Option IIS Webseite am Ziel-Speicherplatz
    aufsetzen  
   
 ![](//images.ctfassets.net/utx1h0gfm1om/3L8CdCJvU4ekk8owiW6WWM/18e3582fedb9d0aa4650a60020ccf880/1017533.png)

      
7.  Um die Webseite mit publizierten Inhalten zu öffnen, geben Sie
    folgende Adresse ein:  

    **Adresse der Web-Publikation**

    ``` text
    http://Servername/Webseitename

    in unserem Beispiel wäre das: http://server/process4
    ```

![](//images.ctfassets.net/utx1h0gfm1om/6v3H22SYAoyy0MMSyksAo4/bbd2aad9216bffa4b7966024f1be44d8/1017519.png)




<hr style="padding-top:2rem" />
<a href="https://github.com/process4/docs/issues" target="_blank" class="bgw btn btn-primary btn-lg shadow-sm">Report an issue</a>
<a href="https://github.com/process4/docs" target="_blank" class="bgw btn btn-primary btn-lg shadow-sm" style="margin-left:10px;">View source code</a>
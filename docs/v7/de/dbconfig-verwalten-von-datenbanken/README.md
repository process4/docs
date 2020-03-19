### DbConfig - der process4.biz Datenbankkonfigurator

Der Datenbankkonfigurator dient dazu, eine bzw. mehrere Verbindung/en
zwischen der bzw. den process4.biz-Datenbank/en auf dem SQL-Server und
dem Client zu erstellen. Diese Verbindungseinstellungen werden (lokal
oder z.B. auf einem Netzwerk-Share) in einer \*.xml-Datei gespeichert.
Zusätzlich bietet die DbConfig die Möglichkeit, Datenbanken direkt und
ohne Verwendung der Konsole von SQL-Server Enterprise Manager bzw. das
Management Studio, im SQL-Server wiederherzustellen (=restore), mittels
Backup zu sichern oder zu duplizieren.

DbConfig kann auf dem Client-PC entweder unter

``` java
Start -> Alle Programme -> process4.biz -> process4.biz DbConfig
```

oder direkt aus dem Verzeichnis

``` java
C:\Programme\process4biz\DbConfig\process4_dbconfig.exe
```

gestartet werden.


Wenn ein Benutzer DBConfig startet, wird die Datei DBConfig.xml verschlüsselt, heißt keine externen Programme oder andere Benutzer können ihre Inhalte modifizieren. Falls ein anderer Benutzer versucht DBConfig zu starten, wird er die folgende Warnung bekommen:

![image](//images.ctfassets.net/utx1h0gfm1om/3rhiRnVHCi9tKPmOfvjkxA/73dc5aa49c1da2a260b623779cff95f9/image.png)

Wenn der Benutzer “Nein” auswählt, schließt sich das Programm, wenn er “Ja” auswählt, wird er aufgefordert eine andere Profildatein auszuwählen im folgenden Dialogfenster.  

![image](//images.ctfassets.net/utx1h0gfm1om/4k7LoRSuRkJvwXgjrtxCyP/93c49d51bcf2729bdf011d45cec05cdc/image.png)

### Ähnliche Themen

-   [process4.biz Installation](installationsvoraussetzungen)
-   [Installationsablauf](installationsablauf)
-   [Upgrade einer bestehenden Installation](upgrading-an-existing-installation)


<hr style="padding-top:2rem" />
<a href="https://github.com/process4/docs/issues" target="_blank" class="bgw btn btn-primary btn-lg shadow-sm">Report an issue</a>
<a href="https://github.com/process4/docs" target="_blank" class="bgw btn btn-primary btn-lg shadow-sm" style="margin-left:10px;">View source code</a>
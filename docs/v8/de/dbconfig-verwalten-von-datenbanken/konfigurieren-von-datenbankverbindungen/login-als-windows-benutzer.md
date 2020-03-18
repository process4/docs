

### Die nötigen Rechte

Falls Sie den Login in die für process4.biz vorgesehene/n Datenbank/en
mit einem Windows-Benutzer durchführen möchten, sollte dieser
Benutzer im SQL-Server zumindest über Lese- und Schreibrechte für die
jeweilige/n Datenbank/en verfügen, also "db\_datareader" und
"db\_datawriter" sein. Um Datenbanken auf eine neuere Version heben zu
können (siehe [Upgrade einer bestehenden
Installation](Upgrade_einer_bestehenden_Installation)), braucht er
zusätzlich auch noch "db\_owner"-Rechte. Ob ein Benutzer diese Rechte
hat, können Sie am SQL-Server mittels der Managementkonsole überprüfen.

### Einen Windows-Benutzer im SQL-Server Anlegen

1.  Erstellen Sie eine neue Anmeldung im SQL-Server unter Sicherheit
    -&gt; Anmeldungen  
      
    ![](//images.ctfassets.net/utx1h0gfm1om/qiC1ZHLwaWcAooW6686Uu/37bccdce4587d3e21540d3e6d84604a3/1018069.png)
      
      
2.  Geben Sie den Windows-Benutzer Namen ein  
    ![](//images.ctfassets.net/utx1h0gfm1om/4S5qqir9TqEQeUQU6GGyAw/6c62bc7983c645d9962091257bd46eea/1018072.png)
      
      
3.  Geben Sie dem Benutzer den Zugriff auf die Datenbank mit den
    entsprechenden Berechtigungen. Zumindest die Felder " db\_datareader
    " und "db\_datawriter " sollten für die ausgewählte Datenbanken
    aktiviert werden. Soll der Benutzer auch DbUpgrade ausführen dürfen,
    dann sollte zusätzlich das Feld "db\_owner " aktiviert werden  
      
    ![](//images.ctfassets.net/utx1h0gfm1om/2ceprfmQSkMuE6YmQKO8yA/2bb91f2b62d69fdd6ef8dc54bf97fe36/1018090.png)
      
      
4.  Aktivieren Sie dann in der DbConfig "Benutzen Sie die integrierte
    Sicherheit von Windows NT" und klicken Sie auf Testen. Wenn die
    Verbindung zur Datenbank erfolgreich ist, dann können Sie nun in die
    Datenbank einloggen  
      
    ![](//images.ctfassets.net/utx1h0gfm1om/7JDaNroKqWs42ak8qckUKm/9d8b4920b2ce6e26128be281970f4013/1018094.png)
    


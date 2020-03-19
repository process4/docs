

### Die nötigen Rechte

Falls Sie den Login in die für process4.biz vorgesehene/n Datenbank/en
mit einem SQL-Benutzer durchführen möchten, sollte dieser
Benutzer zumindest über Lese- und Schreibrechte verfügen, also
"db\_datareader" und "db\_datawriter" sein. Um Datenbanken auf eine
neuere Version heben zu können (siehe [Upgrade einer bestehenden
Installation](Upgrade_einer_bestehenden_Installation)), braucht er
zusätzlich auch noch "db\_owner"-Rechte. Ob ein Benutzer diese Rechte
hat, können Sie am SQL-Server mittels der Managementkonsole überprüfen.

### Rechtevergabe

1.  Öffnen Sie im SQL Server Management Studio wie hier abgebildet Ihren
    Datenbankordner und wählen Sie den Ordner "Users" aus. Im rechten
    Fenster sehen Sie dann alle Benutzer, denen Zugriff auf die
    Datenbank gewährt wird  
      
    ![](//images.ctfassets.net/utx1h0gfm1om/EH7jD1XSo0QeGciAw8U0C/332312a5ba7cbc8dc1330ed224abdcba/1018060.png)
      
      
2.  Sie können einen neuen User anlegen bzw. die Benutzerrechte eines
    existierenden Users gesamt für alle verfügbaren Datenbanken unter
    Sicherheit -&gt; Anmeldungen ändern. Klicken Sie auf den Benutzer
    mit der rechten Maustaste und wählen Sie Neue Anmeldung... aus, um
    den User anzulegen, oder Eigenschaften, um die Berechtigungen zu
    ändern  
      
    ![](//images.ctfassets.net/utx1h0gfm1om/60vBAaM1cQ8A6Q0i4Ayyay/e1cdc68ced12724d9ab314f8b26a648d/1018062.png)
      
      
3.  Im Eigenschaftsfenster des Benutzers, unter Benutzerzuordnung,
    sollten wenigstens die Felder "db\_datareader", "db\_datawriter" für
    die ausgewählten Datenbanken aktiviert werden. Soll der Benutzer
    auch das DbUpgrade ausführen dürfen, dann sollte zusätzlich das Feld
    "db\_owner" aktiviert werden

![](//images.ctfassets.net/utx1h0gfm1om/4HI5Vg6a2Qc4EAsiQGA88g/aba5a8f0dd9c963d1b9ca6fcf4f803de/1018076.png)



<hr style="padding-top:2rem" />
<a href="https://github.com/process4/docs/issues" target="_blank" class="bgw btn btn-primary btn-lg shadow-sm">Report an issue</a>
<a href="https://github.com/process4/docs" target="_blank" class="bgw btn btn-primary btn-lg shadow-sm" style="margin-left:10px;">View source code</a>
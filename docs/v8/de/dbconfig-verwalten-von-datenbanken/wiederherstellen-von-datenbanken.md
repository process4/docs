Mit dieser Funktion, können Sie Datenbanken (auch ohne Schablonen und
Diagramme) aus vorherigen Sicherungskopien bzw. auch aus
Vorgänger-Releases wiederherstellen.

Zusätzlich haben Sie die Möglichkeit, die p4b-Demo-Datenbank und die
Leere Datenbank jeder Zeit als neues Profil wiederherzustellen. Die
Standard-Diagramme- und Vorlagen-Verzeichnisse, werden dafür (gemäß der
definierten Standardordner, siehe [Konfigurieren von
Datenbankverbindungen](konfigurieren-von-datenbankverbindungen))
automatisch ausgefüllt.

### Wiederherstellen einer Datenbank

-   Datenbankserver: wählen Sie den Namen des für die Wiederherstellung
    zu gewünschten SQL-Datenbankservers aus. Mit der Suche, können Sie
    alle im LAN vorhandenen (sichtbaren) SQL-Server finden

   <div class="warning">
   Achtung:

    Bei der Wiederherstellung von Datenbanken auf nicht-lokalen
    SQL-Servern, werden entsprechende Benutzerrechte benötigt. Bitte
    klären Sie dementsprechende Vorhaben im Vorfeld mit Ihrem
    SQL-Administrator ab und stellen Sie sicher, dass die nötigen Rechte
    vorhanden sind.
   </div>

-   Optional: den aktuellen Windows-Benutzer verwenden (dieser Benutzer
    benötigt dann dementsprechende Rechte am SQL-Server; siehe [Login
    als Windows-Benutzer](login-als-windows-benutzer))

-   Benutzername: geben Sie Ihren Benutzernamen für den SQL-Server an
-   Passwort: geben Sie Ihr Passwort für den SQL-Server an
-   Datenbankname: geben Sie den gewünschten Datenbanknamen ein
-   Datenbankdatei: wählen Sie die Datenbankdatei (mit der Endung \*.db)
    aus, aus der Sie wiederherstellen möchten

    Hinweis:

    Falls das wiederherzustellende Datenbank-Backup auf einem
    Netzwerk-Share liegt, muss auf dem entsprechenden Netzwerk-Share die
    Benutzergruppe "Jeder" Lese- & Schreibrechte haben.

 
![](//images.ctfassets.net/utx1h0gfm1om/7dQz3tsYWkQi2QKAsSKQWa/cb1848a41b66378351f39584652a8366/1017722.png)

-   Datenbankordner: gibt den Ordner an, in dem die SQL-Server Dateien
    Ihrer Datenbank gespeichert werden sollen; wird automatisch oder
    mittels des "D"-Buttons vor dem Eingabefeld befüllt
-   Verwenden dieses Archivs mit Diagrammen für das Backup: dieser Pfad
    wird automatisch befüllt, sofern im Verzeichnis der DB-Backupdatei
    auch ein archivierter Ordner mit process4.biz-Diagrammen gefunden
    wurde. Alternativ können Sie auch ein anderes Archiv wählen oder die
    Option deaktivieren, falls die entsprechenden Diagramme bereits
    entpackt sind. Im Zuge der Wiederherstellung werden die Diagramme
    bei aktivierter Check-Box in den Zielordner (=Diagrammepfad)
    automatisch entpackt.
-   Diagrammepfad: wählen Sie den Ordner aus, in welchem sich die
    process4.biz-Diagramme zur wiederherzustellenden Datenbank befinden
    sollen. Wenn \*.zip-Dateien für Diagramme automatisch gefunden
    wurden, werden Sie durch das Wiederherstellen in die angegebenen
    Ordner entpackt.
-   Verwenden dieses Archivs mit Schablonen für das Backup: analog zum
    Diagramme-Archiv, kann mit dieser Option ein Archiv mit
    process4.biz-Schablonen automatisch in einen wählbaren Zielordner
    (=Schablonenpfad) entpackt werden. Selbst wenn die \*.zip-Datei leer
    ist, wird dadurch ein Schablonenpfad erstellt.
-   Schablonenpfad: wählen Sie den Zielordner für die
    process4.biz-Schablonen der wiederherzustellenden Datenbank aus.
-   Um die Wiederherstellung durchzuführen, klicken Sie auf
    Wiederherstellen.


<hr style="padding-top:2rem" />
<a href="https://github.com/process4/docs/issues" target="_blank" class="bgw btn btn-primary btn-lg shadow-sm">Report an issue</a>
<a href="https://github.com/process4/docs" target="_blank" class="bgw btn btn-primary btn-lg shadow-sm" style="margin-left:10px;">View source code</a>
-   [Backup erstellen](#BackupvonDatenbanken-Backuperstellen)
-   [Backup löschen](#BackupvonDatenbanken-Backuplöschen)
-   [Backup
    wiederherstellen](#BackupvonDatenbanken-Backupwiederherstellen)
    

[DbConfig](dbconfig-verwalten-von-datenbanken) kann dazu verwendet
werden, Sicherungen für Ihre Datenbanken, inklusive Schablonen
(Stencils), Vorlagen (Templates) und Diagrammen, zu erstellen.

Dieses Verfahren optimiert die Sicherung und ermöglicht so eine einfache
Versionsverwaltung gesamter process4.biz-Datenbanken. Die
Sicherungskopien lassen sich mit DbConfig auch einfach wiederherstellen.

### Backup erstellen

Klicken Sie auf die Schaltfläche Backup/Versionen, wenn Sie die
Sicherungskopie einer ausgewählten Datenbank erstellen möchten.

Wählen Sie zunächst gewünschte Datenbank-Verbindungs-Profil für die
Sicherung aus und gehen Sie beim Befüllen der Felder in diesem
Dialogfenster folgendermaßen vor:

1.  Wählen Sie Hinzufügen, um die Backup-Informationen zu einem
    ausgewählten Profil hinterlegen zu können
2.  Seit Release 5.3.1 gibt es einen Default-Ordner für
    Datenbanksicherungen. Dieser Backup-Ordner wird standardmäßig
    vorausgewählt, Sie können jedoch mittels Suchen einen anderen
    Sicherungspfad festlegen oder einen neuen Ordner erstellen. Der
    gewählte Backup-Ordner wird pro Datenbankprofil gespeichert, sodass
    Sie bei weiteren Sicherungen eines Profils diesen Punkt überspringen
    können und nur mehr spezifische Backup-Informationen hinzufügen
    brauchen.

    <div class="warning"> 
    Achtung:

    Wenn der SQL-Server nicht lokal läuft, sondern Sie von einer
    zentralen Datenbank im LAN remote mittels Backup/Versionen eine
    Sicherung auf Ihrem PC erstellen möchten, dann geben Sie bitte einen
    Netzwerkpfad (z.B.: \\\\MeinComputer\\Backup-Ordner) für den
    Backup-Ordner auf Ihrem Rechner ein (mittels C:\\Backup-Ordner würde
    DbConfig ansonsten versuchen, auf einem Verzeichnis des SQL-Servers
    zu sichern).
    </div> 

3.  Ergänzen Sie die Felder Erstellt von (Pflichtfeld) und
    gegebenenfalls Beschreibung (kein Pflichtfeld) für das Verwalten
    Ihrer Datenbankversionen. Das Feld Erstellt am wird automatisch mit
    der Systemzeit von process4.biz befüllt.

4.  Wenn Sie anschließend auf Hinzufügen klicken, wird die
    Sicherungskopie Ihrer Datenbank inklusive Diagramme und Schablonen
    im angegebenen Backup-Ordern erstellt.

5.  Erst, wenn Sie die Datenbank zur Sicherung korrekt in der
    Backup-Liste hinzugefügt haben, bestätigen Sie die Durchführung der
    Sicherung mit OK und verlassen das Dialogfenster.


------------------------------------------------------------------------

![](//images.ctfassets.net/utx1h0gfm1om/YRDHZflEyYcCWwcwSuKcw/7677d50f528c006dc74dbce929d291e9/1017702.png)

### Backup löschen

Sie können die bereits angelegten Backups löschen, indem Sie den
Backup-Eintrag auswählen und auf Entfernen klicken. Damit wird der
Backup-Eintrag in der Backup-Liste gelöscht und die Datenbank-Datei
(\*.db oder \*.bak) aus dem Backup-Folder auf der Harddisk entfernt.
Wenn Sie zusätzlich die entsprechende Option aktivieren, werden auch
Diagramme (\*.vsd), Schablonen (\*.vss) und Vorlagen (\*.vst) aus dem
Sicherungs-Verzeichnis entfernt.

### Backup wiederherstellen

Wenn Sie die gerade angelegte Sicherungskopie inklusive der Stencils,
Templates und Diagramme wiederherstellen möchten, wählen Sie die
Sicherungskopie aus und klicken Sie auf die Schaltfläche
Wiederherstellen im Folgedialog des Buttons Backup/Versionen.

Sie können eine der folgenden Funktionen für das Wiederherstellen der
Datenbank aus dem Backup auswählen:

-   Wiederherstellen an selben Speicherstellen und Daten überschreiben:
    die Datenbank wird in das existierende Profil erstellt. Die
    existierende Datenbank wird mit der Datenbank aus dem Backup
    überschrieben. Die Schablonen, Vorlagen und Diagramme werden mit
    entsprechenden Dateien aus dem Backup überschrieben.
-   Wiederherstellen an eine neu definierte Speicherstelle: die
    Datenbank wird in einem neuen Profil erstellt. Wählen Sie aus, in
    welchen Ordner die Diagramme und Schablonen aus dem Backup für das
    neue Profil gespeichert werden sollen


<hr style="padding-top:2rem" />
<a href="https://github.com/process4/docs/issues" target="_blank" class="bgw btn btn-primary btn-lg shadow-sm">Report an issue</a>
<a href="https://github.com/process4/docs" target="_blank" class="bgw btn btn-primary btn-lg shadow-sm" style="margin-left:10px;">View source code</a>
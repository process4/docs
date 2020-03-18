DbUpgradeAll ist ein eigenständiges Command Line Tool um mehrere Datenbanken auf ein Mal zu erweitern. Alle Datenbanken der älteren Versionen werden auf den neuesten Stand gebracht. 
![](//images.ctfassets.net/utx1h0gfm1om/1bvalNyTr6oWySwyMgus6u/302269c4749b7125ba8bf63fc4749299/329537.png)

Das Tool wird mit dem Standardinstallationspaket (v7.0.1.31983 und höher) ausgeliefert. Es ist wichtig, dass Sie das *DbUpgrade*-Modul im Installationsschritt installieren (dieses Modul wird standardmäßig installiert, wenn Sie die Client-Installation wählen. Wenn Sie die Serverinstallation wählen, müssen Sie dieses Modul manuell auswählen):  
  
![](//images.ctfassets.net/utx1h0gfm1om/5XIbMD9xo446GiqEmASIcs/8adb177ed246f2a025c7040275455e0a/329200.png)

Das Tool befindet standardmäßig in: **C:\\Program
Files (x86)\\process4biz\\DBUpgrade\\DbUpgradeAll.exe **

 
**Sie brauchen keine Administrator-Recht um das Tool zu starten, aber wenn Sie ein Log File wollen, dann brauchen Sie Schreibrechte für den Ordner in dem sich DbUpgradeAll befindet (wo die Datei gespeichert ist).**

DBUpgradeAll nimmt alle Datenbanken, die in der DbConfig.xml Datei gespeichert sind und versucht sie zu upgraden indem es die Connection Settings in der Datei nutzt. Der Pfad zur Datei DbConfig.xml muss mit dem Parameter __XML_PATH__ angegeben werden, z.B. __DbUpgradeAll.exe XML_PATH="C:/.../DbConfig.xml"__

__Important__

Wenn Sie ServerLicense Lizensierungsmodel mit ![](//images.ctfassets.net/utx1h0gfm1om/45jLjnTrew8MGeweUs2goy/7bf3853d2e53c4bff17c5f7750026380/329196.png) haben dann müssen Sie folgendes machen:

1.  Kopieren Sie die Datei DbConfig.xml vom Client auf den (Lizenz-)Server.
2.  Wählen Sie aus, welche Datenbanken Sie aus dieser Datei importieren möchten:  
    ![](//images.ctfassets.net/utx1h0gfm1om/RudqLfMViMuqusM2kMgCq/ac32298fc274db6bab9a95e3f905dab2/329199.png)
3.  Markieren Sie Datenbanken, die Sie aktualisieren möchten.
4.  Klicken Sie auf *Speichern*.
5.  Führen Sie **DbUpgradeAll.exe** auf dem Client-Computer aus.


 

Wenn Sie das Tool starten, zeigt es alles was aktualisiert wurde und ob es Fehler gibt. Am Screenshot auf der Linken Seite können Sie den Output des Tools sehen:
-	Section 1 zeigt, wie das Tool gestartet wurde und das aktuelle Datum (es zeigt auch den Namen im Log File, welcher gespeichert wird)
-	Section 2 zeigt den Erweiterungsprozess der Datenbank EMPTY6_2. Es zeigt die jetzige und die zukünftige Version der Datenbank und die erfolgreiche Vervollständigung der Erweiterung. 
-	Section 3 zeigt ein Beispiel wenn sich DbUpgradeAll nicht mit der Datenbank verbinden kann. 

Das Tool akzeptierte folgende (optionale) Argumente: 
-	**-NOLOG**
erstellen Sie kein Log File
-	**-USEBACKUP**
schaltet Backup ein mit der standardmäßigen Location (usually C:\Program Files\Microsoft SQL Server\MSSQL12.MSSQLSERVER\MSSQL\Backup). Standardmäig ist Backup ausgeschaltet
-	**--BACKUPPATH=C:\Temp\DBBackup**
spezifiziert den Backup Pfad (muss ein absoluter Pfad sein) wo Backup der Datenbank gespeichert wird. 



Nach dem Ausführen des Tools, finden Sie einen Log File im selben Ordner wo sich das Tool befindet. 


![](//images.ctfassets.net/utx1h0gfm1om/7wRDCSBAJOQeskcequkIoO/abfae7d230bba635c9fc785bd56b0d6e/329528.png) 
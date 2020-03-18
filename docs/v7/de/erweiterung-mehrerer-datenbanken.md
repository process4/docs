DbUpgradeAll ist ein eigenständiges Command Line Tool um mehrere Datenbanken auf ein Mal zu erweitern. Alle Datenbanken der älteren Versionen werden auf den neuesten Stand gebracht. 
![](//images.ctfassets.net/utx1h0gfm1om/1bvalNyTr6oWySwyMgus6u/302269c4749b7125ba8bf63fc4749299/329537.png)

In tool comes with default installation package (v7.0.1.31983 and
above). It is important that you install *DbUpgrade* module in the
installation step (this module is installed by default if you choose
client installation. If you choose server installation, you have to
choose this module manually):  
  
![](//images.ctfassets.net/utx1h0gfm1om/5XIbMD9xo446GiqEmASIcs/8adb177ed246f2a025c7040275455e0a/329200.png)

Das Tool befindet standardmäßig in: **C:\\Program
Files (x86)\\process4biz\\DBUpgrade\\DbUpgradeAll.exe **

 
**Sie brauchen keine Administrator-Recht um das Tool zu starten, aber wenn Sie ein Log File wollen, dann brauchen Sie Schreibrechte für den Ordner in dem sich DbUpgradeAll befindet (wo die Datei gespeichert ist).**

DBUpgradeAll nimmt alle Datenbanken, die in der DbConfig.xml Datei 
(kann geändert werden in Client Settings menu in p4b) gespeichert sind und versucht sie zu erweitern indem es die Connection Settings in der Datei nutzt. 

__Important__

If you are using ServerLicense model with ![](//images.ctfassets.net/utx1h0gfm1om/45jLjnTrew8MGeweUs2goy/7bf3853d2e53c4bff17c5f7750026380/329196.png) you must do the following:

1.  Copy DbConfig.xml file from the client to the (license) server
2.  Choose to import databases from this file:  
    ![](//images.ctfassets.net/utx1h0gfm1om/RudqLfMViMuqusM2kMgCq/ac32298fc274db6bab9a95e3f905dab2/329199.png)
3.  Mark databases you wish to be upgrade
4.  Click *Save*
5.  Run **DbUpgradeAll.exe** on the client machine

 

 

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

 
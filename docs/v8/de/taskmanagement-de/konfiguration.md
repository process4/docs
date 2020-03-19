URL (um Web-Services auszutauschen), Domain, Login, Passwort und die Version des Exchange-Servers sollte spezifiziert sein um die Tasks mit dem Exchange zu verknüpfen. Der Benutzer sollte eine ApplicationImpersonation Rolle im Exchange haben. 

<div class="success">
  
Wie sie dies tun in Exchange 2010 SP1 - msdn.microsoft.com/en-us/library/bb204095%28EXCHG.140%29.aspx
  </div>
  
  

Die Exchange Version sollte mindestens 2007 SP1 (alle älteren Versionen unterstützen API nicht).

![](//images.ctfassets.net/utx1h0gfm1om/2C1oU5FgSMoME8YSuE2OE4/6f650b3832ae5cedfa01aeb545723b77/328861.png)

Die Version solle so spezifiziert sein, nur die Aktionen in API zu limitieren. Aber im Taskmanagement wird die benutzte Funktionalität in der Version 2007 SP1 präsentiert. So kann diese Einstellung entfernt werden. „ Check the certificate“ Option ist auch nicht wichtig. 

Beim Erlauben dieser Option wird die Zertifizierung des Exchange-Servers wird bei Internetverbindung getestet. Die Verbindung wird nur erlaubt nur im Server mit gültiger Zertifizierung oder selbst-gezeichnete Zertifizierung mit nicht vertrauenswürdige Stamm. Wenn ein neuer Task erstellt wird, kann der Ausführer aus der Liste der bekannten Benutzer ausgewählt werden. 

Wenn Sie auf „Kontakte laden“ drücken ist die Liste aus dem Adressbuch der Exchange-Server spezifiziert in den Einstellungen für Integration. Wenn „Verbiete es, Tasks in p4b, die bereits zu Outlook gesendet wurden zu ändern“ erlaubt ist, können alle Tasks die mit Exchange-Tasks verknüpft wurden, nicht im Modeler geändert werden. All diese Tasks sollten im Exchange geändert werden, und können dann von Exchange zu p4b heruntergeladen werden. 

„Das Löschen eines Tasks in p4b sollte es automatisch auch aus dem Exchange-Server löschen“ ist für das automatische Löschen eines Tasks aus dem Exchange wenn das verknüpfte Task in p4b gelöscht wird. Wenn ein Task aus dem p4b gelöscht wird, versucht das p4b es aus dem Exchange zu löschen. Das Ergebnis dieses Löschens wird das Löschen in p4b nicht beeinflussen. 


<hr style="padding-top:2rem" />
<a href="https://github.com/process4/docs/issues" target="_blank" class="bgw btn btn-primary btn-lg shadow-sm">Report an issue</a>
<a href="https://github.com/process4/docs" target="_blank" class="bgw btn btn-primary btn-lg shadow-sm" style="margin-left:10px;">View source code</a>
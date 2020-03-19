Ab Version 7.0.2 von Modeler kann der Benutzer auschecken
Serverlizenz Diese Funktionalität ermöglicht es dem Benutzer, mit dem Server zu arbeiten. (Lizenz offline und ohne Verbindung zum Lizenzserver)
Die Anzahl von Offline-Tage sind in den Lizenzoptionen definiert. Es ist nicht möglich die Lizenz auszuchecken, wenn 0 Offline-Tage eingestellt sind. Benutzer kann überprüfen, ob es möglich ist, die Lizenz auszuchecken. (Aktivierungsfenster in den Client-Lizenzinformationen)


![Cherck out SL 2](//images.ctfassets.net/6mz8d8cle1nl/RzHtHiK32b5ZvrZcXKE7y/74628f0bc5cf3445274f4114e817ece5/Cherck_out_SL_2.png)

Der Benutzer kann ohne Verbindung zur Serverlizenz von process4.biz offline arbeiten. Die Offline-Tage werden in der Lizenzoption festgelegt. Nach Ablauf der Offline-Tage kann der Benutzer nicht offline arbeiten und muss sich am Lizenzserver anmelden.

Wenn es weniger als 1 Tag bis zum Ablaufdatum der Lizenz ist, wird die ausgecheckte Warnmeldung im Modellierer angezeigt. Wenn die Lizenz abgelaufen ist, werden Sie abgemeldet und die aktuelle Lizenz wird eingecheckt.

Die Serverlizenz kann bei mehreren Lizenzen mehrmals ausgecheckt werden.
Benutzer dürfen mit dieser Datenbank arbeiten. Jedes Auschecken sperrt einen Slot.So wird die Anzahl der erlaubten Benutzer um eins geringer.

Wenn keine Lizenz ausgecheckt werden muss, muss ein Benutzer dies tun.
Öffnen Sie das Fenster Lizenzaktivierung und klicken Sie auf die Schaltfläche CheckIn. Check out wirdaus der aktuellen Lizenz entfernt werden.

Wenn für das aktuelle Server-Lizenzbit AnyDB deaktiviert ist, kann der Modeler nicht funktionieren mit seiner eigenen Datenbanken. Modeler nimmt eine Liste von Datenbanken aus der Datenbank Server Lizenzanwendung. Der Benutzer kann also nur mit Modeler arbeiten wenn eine Verbindung zur Serverlizenz besteht, sofern die Datenbank nicht ausgecheckt wurde.

 
<div class="warning"> 
 <h3> Warnung </h3>  
  
 Die ausgecheckte Lizenz sollte vor der Aktualisierung von Modeler eingecheckt werden.
  
  </div>

<hr style="padding-top:2rem" />
<a href="https://github.com/process4/docs/issues" target="_blank" class="bgw btn btn-primary btn-lg shadow-sm">Report an issue</a>
<a href="https://github.com/process4/docs" target="_blank" class="bgw btn btn-primary btn-lg shadow-sm" style="margin-left:10px;">View source code</a>
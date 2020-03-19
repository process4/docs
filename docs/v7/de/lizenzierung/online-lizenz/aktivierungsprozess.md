-   [Database activation
    process](#database-activation-process)
-   [Type of licenses](#type-of-licenses)
    -   [Named License](#named-license)
    -   [Database License](#database-license)
    -   [Server License](#server-license)
        -   [Server License
            configuration](#server-license-configuration)
            
## Aktivierungsprozess der Datenbank

Um eine Lizenz für eine neue Datenbank zu beziehen muss der Nutzer eine neue Datenbank in DBConfig erstellen und sich danach mit dieser Datenbank im Modeler das erste Mal verbinden. 

 ![](//images.ctfassets.net/utx1h0gfm1om/5Pue4OomAg8mGOYwGsAQEa/fe6358f5247311dead954a4842a4745d/329177.png)

Online Lizenzierungsfenster wird aufgemacht. Wenn der User bereits registriert ist, muss er sich nur mit der benutzten E-Mail und Passwort anmelden. Er kann auch den Google- oder Facebook-Account verwenden. Wenn es keinen Account auf der Online Lizenz Webseite gibt muss der Benutzer **[einen neuen Account erstellen.](online-lizenz)**

Nach dem Anmelden auf der Online Lizenzierungsseite wird das Fenster für die Aktivierung der Datenbanklizenz aufgemacht. Beim Klicken auf “Aktivieren”, wird die Lizenz für die erstellte Datenbank generiert. Danach wird die Maschine im nächsten Fenster aktiviert. 


 ![](//images.ctfassets.net/utx1h0gfm1om/5RhZk2x5a8eu4qyiMcggui/0b36f1185d8b725cfc502bca7f90cf3c/329176.jpg)
![](//images.ctfassets.net/utx1h0gfm1om/aEl5MeazGSgm0kYGWuqMM/9dd314cd0e10f97f907f3ad17bc8f9ad/329179.jpg)

Danach wird es in der Liste der Lizenzen aufgelistet. Der Nutzer soll die Online-Lizenz Service Administration kontaktieren damit seine Lizenz freigeschalten wird. 

<div class="warning">
Standardmäßig wird eine benannte Lizenz erstellt, um diese zu ändern sollte man den Online-Lizenz Service Administrator kontaktieren. 
  </div>


## Arten der Lizenz

Es gibt drei verschiedene Lizenzen. Database License, Server License und Named License. Art der Lizenz kann nur vom Administrator festgelegt warden. 

### Named License

Named License ist eine Art Lizenz, die mit dem PC Fingerprint verbunden ist. Named License kann vom Administrator aktiviert werden und nach der Aktivierung können neue Benutzer hinzugefügt werden. Diese Art Lizenz ist standardmäßig wenn der Benutzer eine Datenbank aktiviert. 

Vor allem muss der Nutzer eine neue Datenbank aktivieren, muss sie  in DBConfig speichern und sich in die Datenbank im Modeler einloggen. 


 ![](//images.ctfassets.net/utx1h0gfm1om/6dkuGJiiGswSkwMiEaSmiO/bfc8a3f6887412f163a19cdbea0866f4/329178.png)

Beim ersten Versuch des Einloggens in die Datenbank wird der Benutzer an den Online Lizenz Service weitergeleitet. Wenn der Benutzer bereits auf dieser Seite registriert ist, braucht er nur seine E-Mail und Passwort um sich anzumelden. Er kann dabei auch das vorher festgelegte Google- oder Facebook-Konto nutzen. Wenn er noch nicht registriert wurde, muss er einen neuen Benutzer anlegen. 

 
<div class="info">

Nur Administratoren können die Lizenz aktivieren (siehe Login oder Registrierung)

</div>

Nach dem Einloggen wird ein Fenster mit den Informationen über die Datenbank aufgemacht. Wenn der Benutzer Administrator ist, kann er aus dem Dropdown-Menü die entsprechenden Kunden auswählen.  

Nach der Aktivierung der Database License, wird ein User Activation Fenster aufgemacht. Zu diesem Zeitpunkt wird der PC mit der Datenbank aktiviert und der Lizenz zugewiesen. 


<div class="warning">

Die Lizenz ist mit dem Fingerprint verbunden und nicht mit  dem Nutzer. 
  
  </div>
  
Nach der Aktivierung des PCs, wird der Name des aktivierten PCs zur Liste der mit der Datenbank verbundenen Lizenzen hinzugefügt. 

Customer Administrator kann die Liste sehen und die PCs freigeben/sperren. Um einen PC freizugeben/zu sperren gehen Sie auf die Machines tab auf der Seite und klicken Sie auf den Namen des PCs im aufgemachten Fenster und wechseln Sie den Trigger „freigegeben“ zu „sperren“ oder umgekehrt. 

<div class="info">

Es ist möglich sich als Kunden Administrator an mehreren PCs einzuloggen und mehrere PCs zu aktivieren.
</div>


![](//images.ctfassets.net/utx1h0gfm1om/5JblOBlbPicaeWSACQ2qms/ea197fea48a35fd5be3ace4683406789/329191.png)

### Database License

Die Database License ist eine Art Lizenz für spezifische Datenbanken. Das ist eine Standard-Lizenz. Die Lizenz ist nicht mit dem Fingerprint verbunden und der Benutzer kann sich in die Datenbank von jedem PC einloggen, wo es gespeichert wurde. 

Um die Art der Lizenz zu ändern von Named zu Database müssen Sie den Online License Administrator kontaktieren. 

<hr style="padding-top:2rem" />
<a href="https://github.com/process4/docs/issues" target="_blank" class="bgw btn btn-primary btn-lg shadow-sm">Report an issue</a>
<a href="https://github.com/process4/docs" target="_blank" class="bgw btn btn-primary btn-lg shadow-sm" style="margin-left:10px;">View source code</a>
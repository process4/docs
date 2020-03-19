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

<br />

 ![](//images.ctfassets.net/utx1h0gfm1om/5JblOBlbPicaeWSACQ2qms/ea197fea48a35fd5be3ace4683406789/329191.png)

### Database License

Die Database License ist eine Art Lizenz für spezifische Datenbanken. Das ist eine Standard-Lizenz. Die Lizenz ist nicht mit dem Fingerprint verbunden und der Benutzer kann sich in die Datenbank von jedem PC einloggen, wo es gespeichert wurde. 

Um die Art der Lizenz zu ändern von Named zu Database müssen Sie den Online License Administrator kontaktieren. 


### Server License

Server License kann vom Administrator erstellt werden und kann auf verschiedenen PCs genutzt werden. Diese Art von Lizenz funktioniert nicht auf einem virtuellen PC. Wenn der License Server auf einem PC mit Windows 8 oder mit einem früheren Windows installiert ist, muss die Firewall 4.6.1 installiert werden. 
Um einen Server License Administrator zu erstellen muss der Benutzer die License Server Applikation am PC installieren. 


![](//images.ctfassets.net/utx1h0gfm1om/6QijZ3rMNaMYOqGmKsOoSA/a6fffea19f22bed4ff416e2362454bab/329189.png)

![](//images.ctfassets.net/utx1h0gfm1om/5a6SBy3VokqiYoCmKGGUUy/6f4ab412a6b2ad91d01f87f253ae199c/329152.png)

importieren (die Datenbank muss erstellt sein) indem Sie auf das License Server Management Menü klicken und „Import“ auswählen. 

Das Open Fenster wird geöffnet. 


![](//images.ctfassets.net/utx1h0gfm1om/2vOTE3vjaAAGgIeKGuYQkC/06216aa17e4e8394eb48208cf2f51ef2/329155.png)

Eine oder mehrere Datenbanken werden verfügbar sie und können von der Liste ausgewählt werden.   

![](//images.ctfassets.net/utx1h0gfm1om/6LrWrsEDfOE0iYgkGgoyOW/417693865ff73edeac4321badf2b87f0/329154.png)

Nach dem Import der Datenbank, muss die Aktivierung erfolgen. Sie klicken auf „Datei“ und wählen „Activate License“ aus.

![](//images.ctfassets.net/utx1h0gfm1om/5wjMaYWRjOsUecosmEk2SI/175915396de6ced79f993acbe8ff387e/329157.jpg)

Activate License Fenster öffnet sich. Der Benutzer muss einen neuen Account erstellen (siehe Neuer Benutzer Abschnitt) oder sich einloggen, wenn er schon einen Account hat. Dabei kann er auch ein Google- oder Facebook-Account nutzen. 
Informationen über die Datenbank werden in dem Activate License Fenster angezeigt. Wenn der Benutzer Administrator ist, muss er den entsprechenden Kunden, der mit dieser Datenbank verbunden ist aus dem Dropdown-Menü auswählen. 

Beim Klicken auf „Activate“ wird eine neue Server License aktiviert. 

Nach der Aktivierung der Lizenz wird die Nummer der Lizenzen im Process4.biz License Server erhöht. Nun können verschiedene Benutzer Zugang zur Datenbank mit der Server License im Netzwerk haben, wenn die License Server Application am PC installiert ist. 


![](//images.ctfassets.net/utx1h0gfm1om/3ipIlQ2ChqYSC0AsK8YyiM/2175a03ca1745920119f37bfc35541a3/329156.png)

<div class="warning">

Die Anzahl der Datenbank-Nutzer, die zur selben Zeit damit arbeiten, kann nicht die maximale Anzahl der Benutzer für diese Lizenz übersteigen. 
  
  </div>

Nach der Aktivierung der Lizenz, muss die Art der Lizenz im Modeler geändert werden. Machen sie das License Activation Fenster auf und wählen Sie **Select Licensing Type.**

![](//images.ctfassets.net/utx1h0gfm1om/3AJsCwRUkEK0QO0WSI6eu2/d1c5443c3dcb74a47624adf018be5c8f/329159.jpg)  

Ändern Sie im License Activation Fenster von ONLINE License zu SERVER License und drücken Sie __Next>__.

Server License wird aktiviert und der Benutzer kann sich zur Datenbank im Modeler einloggen. In der Liste der Datenbanken werden nur die Datenbanken mit der Server License verfügbar sein. 


#### Server License configuration

It is possible to configure License Server with static adress. In
License Server modal window open **License Server management...** menu
and select **Open configuration...** Here a User can set Server License
should use static adress.

![](//images.ctfassets.net/utx1h0gfm1om/6ik1ggesTKcMsiEiYg8QAW/38c645ae5440302d68037bca203e2052/329424.png)

This License Server address should be specified in **Client settings**
in the Modeler.

![](//images.ctfassets.net/utx1h0gfm1om/4i6kZuJoZiwGmWuAco6wSs/9817a390183df9f045faca0980cea481/329415.png)

<hr style="padding-top:2rem" />
<a href="https://github.com/process4/docs/issues" target="_blank" class="bgw btn btn-primary btn-lg shadow-sm">Report an issue</a>
<a href="https://github.com/process4/docs" target="_blank" class="bgw btn btn-primary btn-lg shadow-sm" style="margin-left:10px;">View source code</a>
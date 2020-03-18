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

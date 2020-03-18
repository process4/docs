-   [Named User Lizenz](#named-user-lizenz)
-   [Concurrent User Lizenz](#concurrent-user-lizenz)
-   [Concurrent Server Lizenz](#concurrent-server-lizenz)
    -   [Server-Lizenz-Dienst](#server-lizenz-dienst)
-   [Lizenzierung der Zusatzmodule (Extensions)](#lizenzierung-der-zusatzmodule-extensions)
-   [Wechsel von Lizenzmodellen](#wechsel-von-lizenzmodellen)

**Weitere Informationen zu Ihren process4.biz Lizenzen**

-   [Freischalten & Verlängern der Lizenzen](freischalten-und-verlaengern-der-lizenzen)
-   [Datenbank-Lizenzierung](datenbank-lizenzierung)
-   [Deaktivieren des Lizenzschlüssels](deaktivieren-des-lizenzschlüssels)


### Named User Lizenz

Die Software wird so oft installiert und freigeschalten, wie es die
Anzahl der gekauften Lizenzen erlaubt. Sie lizenzieren die Software für
eine bestimmte Anzahl namentlich genannter Benutzer auf bestimmten
Arbeitsplätzen, welche die Software gleichzeitig im selben
physikalischen LAN (Domänen-Broadcast) nutzen können. Ein Named User ist
also ein Client, der auf einem eindeutig identifizierbaren PC im LAN
installiert wird und der für den gleichzeitigen Datenbankzugriff mit
anderen Multi-User Clients freigeschaltet wird.

<div class="info"> 
Die Named User Lizenz ist durch den Hardware-Fingerprint eindeutig
identifizierbar, ein Code, der sich aus diversen Hard- und
Softwarekomponenten einer realen Maschine zusammensetzt. Von virtuellen
Maschinen kann kein Hardware-Fingerprint erstellt werden.
  </div>

Sämtlicher [Erweiterungsmodule](process4.biz_Erweiterungsmodule) werden
jeweils pro Client separat dazu erworben.


### Concurrent User Lizenz

Die Software kann beliebig oft auf PCs im LAN mit selbem
Domain-Broadcast installiert und freigeschaltet werden, wobei die
Maximalanzahl der gleichzeitig auf denselben SQL-Server zugreifenden
User die lizenzrechtliche Einschränkung ist. Sie lizenzieren die
Software also für eine beliebige Anzahl Benutzer, von der aber nur eine
bestimmte maximale Anzahl in der p4b-DB am selben SQL-Server
gleichzeitig eingeloggt sein darf, um die Software zu benutzen. Dabei
sind weder die namentliche Spezifikation der Benutzer, noch die
eindeutige Identifikation bestimmter PC-Arbeitsplätze notwendig.
Concurrent User sind also beliebig oft installierbare und freischaltbare
Clients, deren Limitierung lediglich die gekaufte Anzahl an Clients ist,
die gleichzeitig in derselben Broadcastdomäne auf die p4b-Datenbank(en)
in einem SQL-SERVER zugreifen dürfen.

Diese Lizenzform, die an Ihre Domäne gebunden ist, wird so lange
funktionieren, wie der Computer zur angegebenen Domäne gehört.
Allerdings wird process4.biz auch funktionieren, wenn der Computer nicht
mit dem Netzwerk verbunden ist oder wenn Benutzer als lokale Benutzer
und nicht als Domänen-Benutzer eingeloggt sind.

### Concurrent Server Lizenz

Die Software wird auf beliebig vielen Client-Computern installiert,
welche sich in Domänen befinden, die im Besitz des Lizenznehmers sind.
Im Rahmen dieser Lizenzform, wird der Server-Lizenz-Dienst benötigt, um
die p4b-Clients zu authentifizieren.

<div class="warning">
Die Verwendung von virtuellen Maschinen sowie der
Terminalserver-/Citrix-Zugriff, ist ausschließlich im Concurrent Server
Lizenzmodell erlaubt.
</div>

#### Server-Lizenz-Dienst

Alle weiteren Informationen zur Verwendung und Installation des
Server-Lizenz-Dienstes, finden Sie hier: [Server-Lizenz](Server-Lizenz).

### Lizenzierung der Zusatzmodule (Extensions)

Jedes [Erweiterungsmodul](process4.biz_Erweiterungsmodule) kann unter
der Named User Lizenz nur pro PC=Client lizenziert werden. Im
Unterschied dazu, ist im Rahmen des Concurrent User- oder des Concurrent
Server-Lizenzmodells jedes 1x mit 1 Stück gekaufte Erweiterungsmodul
immer für alle Clients freigeschaltet und kann so im gesamten
Unternehmens-LAN von allen Usern genutzt werden.

### Wechsel von Lizenzmodellen

Beim späteren Wechsel vom Single- auf den Multi-User-Betrieb, können die
Kosten für Single-User nachträglich abgezogen werden. Die Daten und
Modelle sind weiterverwendbar.

Ein späterer Wechsel von Named User auf die höherwertigen Concurrent
User/Server Lizenmodelle ist möglich, wobei die Kosten für bereits
gekaufte Named User Lizenzen angerechnetn werden können. Die Anzahl der
Clients muss dabei immer gleich bleiben und es können auch keine bereits
gekauften Erweiterungsmodule storniert werden. Ein Wechsel von
Lizenzmodellen, ist immer nur zu höherwertigen Lizenzmodellen möglich.

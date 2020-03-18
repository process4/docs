

Ein Report kann auch Kapitel enthalten, die selbst auf einer Abfrage
(bzw . den Ergebnissen aus dem QueryBuilder) basieren. Hier wird ein
Beispiel aus unserem Demo Modell beschrieben.  
Wir wollen einen Report mit folgender Struktur generieren, wie sie auf
einem speziellen Handbuch-Diagramm dargestellt ist:  
![](//images.ctfassets.net/utx1h0gfm1om/11bOx58vjIy2kGuAiSKa2k/ca77f4d22ba5183e03e51707605c5f25/1017929.png)  
Zuerst wollen wir die Liste mit allen Prozessen von "Prozess Gruppe
Diagramme" generieren. Z.B. solche Diagramme, wie "(RACI) After Sales
Prozess":

![](//images.ctfassets.net/utx1h0gfm1om/6qtdg1aknKEaOKoKscCGGw/d0f2f960cddb9c15b256df91c7d17c61/1017430.png)  
Dazu haben wir eine Abfrage "Prozess Gruppe Diagramme" mit Hilfe des
Abfragegenerators (QueryBuilder) erstellt, welche die Liste mit den
Namen und der ID der Diagramme erstellt:  
  
![](//images.ctfassets.net/utx1h0gfm1om/3iHUjNBkViOQuACeWsg06c/ca62865335a5af318a908bcd241dbd45/1017919.png)  
Dann wollen wir alle Prozess-Objekte mit einigen ihrer Attribute für
jedes "Prozess Gruppe Diagramm" auflisten. Dazu haben wir eine andere
Abfrage " Prozesse von einer Prozessgruppe" erstellt. Die Abfrage
verwendet einen Parameter, um alle Objekte aufzulisten, die auf
Diagrammen mit der ID aus der Abfrage " Prozess Gruppe Diagramme"
verwendet werden.  
![](//images.ctfassets.net/utx1h0gfm1om/1pJtxJCw3KigWMgSU2oYGs/1c263ca3d35ea993c051995ffc457769/1017425.png)  
Anschließend wollen wir alle Child-Diagramme auflisten, die
entsprechende Prozesse mit Hilfe der RACI-Methode beschreiben. Die
Abfrage " Aktivitäten Verantwortlichkeiten" enthält auch einen
Parameter, um nur solche Objekte aufzulisten, die auf dem RACI-Diagramm
mit der entsprechenden ID auch wirklich verwendet werden. Im Parameter
"ID1" kann der Name des RACI-Diagramms eingetragen werden.  
![](//images.ctfassets.net/utx1h0gfm1om/60oafVP3ckUs4cyqWicCaO/563d75fa3c903e1afae14a3796db3565/1017441.png)  
Jetzt können wir einen abfragebasierten Report im DocumentComposer -
Wizard definieren. Die Struktur des Reports wird aus dem speziellen
Handbuch-Diagramm übernommen. Für das Kapitel "Prozess Gruppe Diagramme"
aktivieren wir daher den Reiter "Abfragebasierte Inhalte ". Dann wählen
wir eine Basis-Abfrage aus, auf der unser Report basieren soll. In
unserem Fall ist es die Abfrage "Prozess Gruppe Diagramme", die alle
Diagramme mit Prozessen auflistet: " (QM) 0. Entwicklung und Umsetzung
eines QM-Systems", "(RACI) After Sales Prozess", "Vertrieb".  
![](//images.ctfassets.net/utx1h0gfm1om/zkK6lcTfFIgWkggS6Gsys/e018334a26d8aa7b20b9a7c24a3f12a6/1017635.png)  
Eine wichtige Bedingung: als Basis-Abfrage können nur solche Abfragen
verwendet werden, die Diagramme (und keine Objekte) auflisten, d.h. im
QueryBuilder (Abfragegenerator) den Quelltyp "Allgemeines Diagramm"
haben.  
![](//images.ctfassets.net/utx1h0gfm1om/2Nl7gyM42IEieEAkMeKqYs/fc7e45af82ed7ecb7e1fb3bb4a7d9787/1017940.png)  
Wir aktivieren im DocumentComposer - Wizard folgende Optionen:  
• Erstellen einer Berichtserie  
Diese Option erlaubt es mehrere Ausgaben eines selben Reports mit
jeweils anders befüllten Werten bzw. Inhalten zu generieren. Jeder
Report enthält ein Diagramm aus der Basis-Abfrage und alle Daten aus den
untergeordneten Abfragen. Die Struktur von jedem Dokumenten wird hier
gleich sein, nur der Inhalt wird für jeden Bericht diagrammspezifisch
sein. In unserem Beispiel bekommen wir 3 Repo rts: erster mit dem
Diagramm "(QM) 0. Entwicklung und Umsetzung eines QM-Systems ", zweiter
- "(RACI) After Sales Prozess", dritter - "Vertrieb". Wenn diese Option
nicht aktiviert ist, bekommen wir nur einen Bericht mit allen diesen
Inhalten in serieller Zusammenstellung.  
• Darstellung als Diagrammbaum  
Diese Option erlaubt es nicht nur das Basis-Diagramm zu exportieren,
sondern auch alle seine Child-Diagramme, mit der Option Ebenen kann
definiert werden wieviele Ebenen publiziert werden sollen. So bekommen
wir für das Diagramm "(RACI) After Sales Prozess" folgenden
Diagrammebaum im Report:  
![](//images.ctfassets.net/utx1h0gfm1om/1Tfm6SpVG4mOiqIGsikcg6/644664e16d241557e4752cdb84f3b2fa/1017968.png)  
und für das Diagramm "Vertrieb" einen anderen Baum:  
![](//images.ctfassets.net/utx1h0gfm1om/6bUXffQpaggSo4qOIyAouI/3d8938223c2cf3adb0cfef0a74efcef5/1017971.png)  
Wenn die Option nicht aktiviert ist, werden nur die Parent-Diagramme dem
Bericht hinzugefügt, also nur die erste Ebene.  
Im unteren Fenster kann man, ähnlich wie für objektbasierte Inhalte
(siehe eigenes Kapitel Absatztypen), Elemente hinzufügen: Textblock,
Diagramm, Abfrage, Seiten-/ Abschnittumbruch.

Hier ein Beispiel:  
![](//images.ctfassets.net/utx1h0gfm1om/rjdZvVowNMeyu8Weos8iw/373e5b4b42a57bd9164853c727eaa9dd/1017958.png)  
1. Textblock: enthält Spalten aus der Basis-Abfrage, in unserem Beispiel
"Proz ess Gruppe Diagramme". Diese Abfrage besteht hier aus zwei
Spalten: "Diagramm Name" und "Diagramm ID". Eine von diesen Spalten kann
dem Bericht hinzugefügt werden.  
![](//images.ctfassets.net/utx1h0gfm1om/c0flrTPgeAgaWMC4ayoqI/1a77885eeeb14869e939e3808c8225a7/1017963.png)  
2. Diagramm: fügt dem Report ein Diagramm-Bild hinzu, das entweder aus
der Basis-Abfrage genommen wird oder aus dem Baum des Diagramms der
Basis- Abfrage, wenn die Option "Darstellung als Diagrammebaum "
aktiviert ist.  
3. Abfrage: es können zwei Typen von Abfragen hinzugefügt werden:  
a) ganz normale Abfrage  
b) Abfrage mit Parameter (sehen Sie dazu das QueryBuilder
\[=Abfragegenerator\] Handbuch ). In unserem Beispiel haben wir zwei
Abfragen mit Parametern: "Prozesse von einer Prozessgruppe" und
"Aktivitäten Verantwortlichkeiten". Wenn eine Abfrage mit Parameter
verwendet wird, dann wird der DocumentComposer alle dem Report
hinzugefügten Diagramme analysieren und deren IDs als Parameter in der
Abfrage verwenden. Als Ergebnis bekommen wird dann einen Report mit
Abfragen, die für jedes Diagramm spezifische Daten anz eigen wird. Z.B.
mit den Aktivitäten und Rollen, die auf jedem RACI-Diagramm verwendet
werden.  
Hier sehen Sie die Struktur von unserem Beispiel-Report für das Diagramm
"(RACI) After Sales Prozess":  
![](//images.ctfassets.net/utx1h0gfm1om/mJQ3wRMMc8kmwyCoMwWcC/90e63ac8423c3fca28c47519dbf1fc68/1017983.png)  
4. Seiten-/Abschnittsumbruch: Hier können Sie einen Seiten- bzw.  
Abschnittsumbruch innerhalb des DocumentComposer Reports hinz ufügen.  
Einschränkungen:  
1. Sie können in einem DocumentComposer Report für mehrere Kapitel  
"abfragebasierte Inhalte" aktivieren. Es ist aber nur für parallele
Kapitel und  
nicht für (verschachtelte) Unterkapitel möglich.  
2. Die Option "Erstellen einer Berichtsserie" kann nur ein einziges Mal
pro Report aktiviert werden. Es kann also nicht ein Serienbericht in
einen Serienbericht publiziert werden.


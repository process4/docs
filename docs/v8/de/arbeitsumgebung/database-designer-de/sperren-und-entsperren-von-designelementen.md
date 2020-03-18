

Um im [Database Designer](database-designer-de) an Designelementen arbeiten
zu können, ist es notwendig, dass der Administrator (oder ein Benutzer
mit Designrechten) die benötigte Unit zuerst sperrt. Inhalte gesperrter
Units, sind dann zwar immer noch im [Repository](repository-de) sichtbar,
aber für den Zeitraum der Sperre nicht mehr editierbar.

#### Eine Unit sperren oder entsperren

1.  Wählen Sie mit der linken Maustaste die Unit im Navigationsfenster
2.  Öffnen Sie das Kontextmenü mit der rechten Maustaste und wählen Sie
    dort die Funktion Serren (oder Entsperren)

Als Ergebnis, wir nun eine Nachricht an alle eingeloogten Benutzer
gesendet, um diese von der Sperre in Kenntnis zu setzen und ihnen ggf.
die Möglichkeit zu geben, ihre momentane Arbeit noch abzuspeichern.
Diese Nachricht kann vom sperrenden Benutzer mit einer maximalen
Wartezeit für die Antwort der anderen Benutzer versehen werden; nach
Ablauf dieser maximalen Wartezeit, wird die Unit vom System gesperrt.

Das Symbol einer gesperrten Unit erhält nach der erfolgten Sperrung ein
kleines Schloss und die Symbole der in dieser Unit enthaltenen Elemente
verändern ihre Farbe im Designer von Grau zu bunt, um anzuzeigen, dass
sie jetzt bearbeitbar sind. Units, die von anderen Benutzern gesperrt
wurden, sind grau und ebenfalls mit einem kleinen Schloss markiert.

Wenn der Admin auf Entsperren klickt, wird die entsprechende Unit
entsperrt und alle anderen Benutzer werden darüber mit einer Meldung
informiert.

#### Bearbeitung im Designer ohne Sperren

In den [Datenbank-Einstellungen](datenbank-einstellungen), kann durch
das Setzen des entsprechenden Hakens festgelegt werden, dass das
Bearbeiten der Designelemente ohne Sperren möglich sein soll. So sparen
Sie sich einen zusätzlichen Arbeitsschritt bei der Konfiguration der
Datenbankstrukturen, da Sie die Units zur Bearbeitung nicht
sperren/entsperren müssen.

![](//images.ctfassets.net/utx1h0gfm1om/4qhHyZUueQ24qkUKkY8Wi4/51d21fb574e9615b78ca98f71400fb34/1017811.png)

*Global die Bearbeitung von Designelementen ohne vorherige Sperrung
erlauben ([Datenbank-Einstellungen](datenbank-einstellungen))*

Achtung:

Diese Option wird nur für Einzelplatz-Installationen empfohlen, da das
gleichzeitige Bearbeiten der Datenbank-Struktur im Multi-User-Betrieb zu
Datenbankkonflikten führen kann.


### Problem

SVGs können im Zuge der Publikation mit dem [WebPublisher](WebPublisher)
nicht erstellt werden, im Logsteht dazu dann folgendes:

14.10.2014 12:28:24 \| - Exportieren der SVG-Datei ...

14.10.2014 12:30:46 \| Process4.biz: Der Remoteprozeduraufruf ist
fehlgeschlagen.

### Lösung

1.  Das betroffene Diagramm in process4.biz öffnen
2.  Das Diagramm via Visio-Funktion *Speichern unter…* lokal als
    \*.xml-Datei speichern
3.  Process4.biz inkl. Visio schließen
4.  Das \*.xml Diagramm in Visio öffnen und via *Speichern unter…* als
    \*.vsdx-Datei speichern
5.  *Optional:* das soeben gespeicherte \*vsdx-File öffnen und via
    Speichern unter… den SVG-Export testen
6.  Das kaputte Diagramm mit dem reparierten \*.vsdx-File ersetzen  
    Im Diagramme-Ordner, so wie er in
    [DbConfig](DbConfig_Verwalten_von_Datenbanken) bzw. den
    Datenbank-Einstellungen angegeben ist; ggf. müssen die Diagramme
    vorher aus der Datenbank ausgecheckt werden (s.
    [Datenbank-Einstellungen](Datenbank-Einstellungen)))

Nach Durchführung dieser Schritte, sollte das Erstellen des SVGs für das
betroffene Diagramm wieder funktionieren.

Tritt der Fehler auch für andere Diagramme auf, können Sie genauso
vorgehen.

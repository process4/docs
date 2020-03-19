-   [Grundsätzliche Funktionsweise des DocumentComposer](#grundsätzliche-funktionsweise-des-documentcomposer)
-   [Installation des DocumentComposer](#installation-des-documentcomposer)
-   [Aufruf des DocumentComposer](#aufruf-des-documentcomposer)
-   [Sprachauswahl für DocumentComposer und den Inhalt](#sprachauswahl-für-documentcomposer-und-den-inhalt)


### Grundsätzliche Funktionsweise des DocumentComposer

Der DocumentComposer, kurz DC genannt, ist eine andere Variante
des WordReporters. Mit dem DocumentComposer kann die Struktur des
Dokuments (z.B. Qualitätsmanagement Handbuch) mit Hilfe eines speziellen
Wizards definiert und mit den Inhalten aus der Datenbank (Objekte und
Diagramme) veröffentlicht werden. Weiteres können auch die mit
QueryBuilder Abfragen ausgewählten Inhalte aus der Datenbank inkludiert
werden.

Die Ergebnisse aus den Abfragen ändern sich je nach Adaption des Modells
und diese geänderten Ergebnisse können an definierten Stellen in den
Wordbasierten Bericht automatisch aktualisiert eingebaut werden. MS Word
dient somit als Ausgabeformat für eine Kollektion von Abfragen die mit
dem QueryBuilder erstellt wurden und bei dem die einzelnen Abfragen sich
flexibel mit Parametern gestalten lassen, sodass beispielsweise
allgemeingültige Berichtsinhalte mit jeweils spezifischen Ergebnissen
(gesteuert über Variablen) angereichert werden können. Ein anschauliches
Beispiel dafür sind Jobdescriptions oder diverse
Qualitätsmanagement-Handbücher die mit dem DocumentComposer in
Kombination mit dem QueryBuilder komfortabel erstellt werden können.

### Installation des DocumentComposer

Um den DocumentComposer auf Ihrem Rechner zu installieren, wählen Sie
die notwendigen Parameter bei der [process4.biz
Installation](process4.biz_Installation). Der DocumentComposer ist ab
dem Modeller 5.4.0 verfügbar.

### Aufruf des DocumentComposer

Der DocumentComposer kann vom Menüband aus gestartet werden, in dem Sie
Erweiterungen und dann die Option DocumentComposer finden:  
![](//images.ctfassets.net/utx1h0gfm1om/7bVJv48saAeEgCisYqKY4w/16af25217352cde8fea225a58699fec3/1017538.png)



### Sprachauswahl für DocumentComposer und den Inhalt

Sie müssen in einer der Datenbanken eingeloggt sein. Der GUI (Graphical
User Interface) wird in jener Sprache angezeigt, die Sie in den globalen
p4b Einstellungen ausgewählt haben. Diese finden Sie in dem Visio
Menü:  
Process4.biz -&gt; Client Einstellungen…  
Sie können auch die Sprache bestimmen, in welcher der Inhalt Ihrer
Datenbank nach Microsoft Word exportiert werden soll.  
![](//images.ctfassets.net/utx1h0gfm1om/4O9NxDFunSgikmwuumEsYK/ed908e47c8e5cf893fb65a4d3a52d650/1017523.png)  
Bevor Sie den DocumentComposer starten schließen Sie bitte alle Ihre
Microsoft Word Dokumente, um mögliche Probleme zu vermeiden, die
auftreten können während Sie das Dokument editieren.

<hr style="padding-top:2rem" />
<a href="https://github.com/process4/docs/issues" target="_blank" class="bgw btn btn-primary btn-lg shadow-sm">Report an issue</a>
<a href="https://github.com/process4/docs" target="_blank" class="bgw btn btn-primary btn-lg shadow-sm" style="margin-left:10px;">View source code</a>
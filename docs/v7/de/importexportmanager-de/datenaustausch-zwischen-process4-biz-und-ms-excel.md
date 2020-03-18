-   [Excel ImportExport Dokumentenformat](#excel-importexport-dokumentenformat)
    -   [Objektverknüpfungen im Excel](#objektverknüpfungen-im-excel)
-   [Bidirektionaler Datenaustausch](#bidirektionaler-datenaustausch)
-   [Excel-Liste aller Diagramme generieren](#excel-liste-aller-diagramme-generieren)

------------------------------------------------------------------------

### Excel ImportExport Dokumentenformat

Wenn der Export in eine Excel-Datei bzw. der Import aus einer
Excel-Datei erfolgreich abgeschlossen werden soll, müssen MS Excel
Dokumente folgendes Format haben.

-   Für jede Klasse wird ein separates Arbeitsblatt in der Excel-Datei
    benötigt bzw. erstellt. Beim Export entspricht der Name des
    Arbeitsblattes dem Klassen-Namen in process4.biz. Beim Import kann
    man die gewünschten Arbeitsblätter für jede Klasse selbst
    auswählen. 
-   Die ersten 3 Spalten (A, B, C) sind für das Importieren von Daten in
    die Datenbank erforderlich
-   Spalte A enthält die IDs Nummer von Objekten. Zelle A2 enthält
    den Klassen-Namen der darunter gelisteten Objekte
-   Spalte B trägt den Namen „Object Name" und darunter in derselben
    Spalte sind die Objekt-Namen gelistet. Diese Spalte soll immer
    vorhanden und mit Ausprägungen gefüllt sein.
-   Spalte C heißt LanguageID. Wenn Sie Inhalte auf zwei oder mehreren
    Sprachen exportieren, wird für jedes Objekt in Excel eine zweite,
    dritte, etc., Zeile mit der Sprachebezeichnung generiert, welche die
    Objektbeschreibungen in der gewählten Sprache beinhaltet. Wenn der
    Wert der Spalte „LanguageID" leer oder falsch angegeben ist, wird
    das Objekt beim Import ignoriert (nicht importiert).
-   Nach dem Export sind in der ersten Zeile der Excel-Datei die
    Attributgruppen in der zweiten die Attribut-Namen enthalten.
    Ausnahmen: die Zellen A2, B2, C2.

Beim Import wählt man die Excel-Spalten bzw. die process4.biz-
Attribute, die miteinander übereinstimmen sollen, selbst aus
(siehe [Daten
auswählen](http://help.process4.biz/confluence/display/DOC/Excel+Datenexport#ExcelDatenexport-Datenauswählen)). 

Beim Export von Diagramm- oder Objektverknüpfungen sind
die Verknüpfungen in den Spalten „Diagram Links" und „Object Links" zu
sehen. Diese Verknüpfungen können auch ins Repository importiert
werden. 

Wenn Sie beim Importieren die Einstellung „ Vergleich nach Name" (siehe
[Import
Einstellungen](Excel-Datenimport_1016188.html#ExcelDatenimport-ImportEinstellungen))
gewählt haben, muss Spalte A vorhanden und gefüllt sein. Wenn eine ID in
der Spalte B vorhanden ist und Sie die Option „Vergleich nach ID" (siehe
[Import
Einstellungen](Excel-Datenimport_1016188.html#ExcelDatenimport-ImportEinstellungen))
gewählt haben, wird die Objektbeschreibung im Repository angepasst. Wenn
keine ID vorhanden ist, wird ein neues Objekt angelegt. 

Alle übrigen Spalten enthalten die Attributwerte der in der Zeile 2
angeführten Attribute. 

Wenn für ein Attribut das Feld Mehrfachselektion (Multiselection) auf
WAHR gesetzt ist, können mehrere Werte für ein Attribut gleichzeitig
importiert werden. Sie sollen mit einem Komma „," oder Strichpunkt „;"
getrennt werden.

Wenn Sie ein Attribut mit dem Typ „DataTime" in Excel ausfüllen und in
die Datenbank importieren möchten, sollen Sie darauf achten, dass
das Datums-Format in Excel richtig angegeben ist. Setzen Sie dieses Feld
in Excel auf das Format „Datum" oder „Uhrzeit" und geben Sie dann den
Wert ein. 

Wenn Sie ein Attribut mit dem Typ Hyperlink
(z.B [http://process4.biz](http://process4.biz/)) in process4.biz
erstellt haben, dann es in Excel exportiert und wieder in process4.biz
importiert haben, werden Sie als Ergebnis in process4.biz
"<http://process4.bi>[z](http://process4.biz/) \| [http://process4.biz](http://process4.biz/)["](http://process4.biz/) bekommen.
In anderen Worten, wird der Name des Hyperlinks mit dem Hyperlink-Wert
automatisch ausgefüllt. 

Wenn Sie neue Objekte in Excel anlegen und importieren möchten, würde es
ausreichen, die Spalte Object Name auszufüllen. Sie sollen dann beim
Import zusätzlich Daten aus der leeren Unit zum Import auswählen.


![](//images.ctfassets.net/utx1h0gfm1om/4mXjWRc79KmIyou2SMeMCg/b3e4650b51f85772e29e2eb498ebf5b8/1017981.png)

*Format des Excel Dokumentes*

 
![](//images.ctfassets.net/utx1h0gfm1om/35u47um4TuswgkC4ImqGCm/f7ad5ca32ccfbaedee0d81225d80124e/1017976.png)

*Neue Objekte im Excel anlegen und ins process4.biz importieren*

 

#### Objektverknüpfungen im Excel

Objektverknüpfungen werden nach Excel folgenderweise exportiert:

-   Die Zeichen &lt;, &gt;, &lt;&gt; zeigen die Richtungen der
    standardmäßigen Verknüpfungstypen: *verlinkt zu*, *verlinkt von*,
    *verlinkt mit*. Der Name des Verknüpfungstyps selbst steht in
    eckigen Klammern \[verwendet folgende Server\]. Wenn der
    Verknüpfungstyp direktional ist (Ist direkt gerichtet=Wahr) und
    direkt gerichteten und entgegengesetzten Namen hat, werden diese
    Namen via Richtungen &lt;, &gt; angedeutet, nur der Name des
    Verknüpfungstyps wird als Text in Klammer angezeigt.
-   Das Symbol {a} zeigt, dass Objekte mittels aktivierter
    Verknüpfungstechnologie automatisch verknüpft wurden.
-   Darauf folgen der Name der zugehörigen Klasse des verknüpften
    Objektes und anschließend die Bezeichnung des Objektes selbst.
-   Sofern verfügbar, stehen in eckigen Klammern \[R,A\] die
    Assoziationsobjekte für die Verknüpfung.  
    ![](//images.ctfassets.net/utx1h0gfm1om/AQZVQPd7vqWOsAwKQ6Qgy/17594adffcb9eb501787fa80f96c4d16/1017775.png)
-   Wenn es für eine Klasse ein Attribut mit dem Typ Enumerator oder
    Object linked selector mit Mehrfachselektion „WAHR“ definiert ist
    und mehrere Werte für ein Objekt angegeben werden, werden sie via
    Komma „,“ oder Semikolon „;“ getrennt.  
    ![](//images.ctfassets.net/utx1h0gfm1om/2LL87nuilyUsKAioeEI420/9307bc04420d6209d78daa378e861207/1017768.png)
-   Ab dem Release 6.0.0 gibt es 2 Typen von Objekt-zu-Diagramm
    Verknüpfungen:
    -   TreeLinks sind solche Verknüpfungen zwischen Objekten und
        Diagrammen, die den Diagrammhierarchiebaum beeinflussen. In
        anderen Worten, werden solche Diagramme unter dem entsprechenden
        Parent-Diagramm im Baum angezeigt. Sie werden beim Export ins
        Excel wie folgt markiert "{R:
        ParentDiagramName}LinkedDiagramName".  
        ![](//images.ctfassets.net/utx1h0gfm1om/3Rrmg7W1b2AKESmuSkmOYc/a92f5acf573537da2f6a6f64dbf18c2b/1017763.png)
    -   ReferenceLinks sind solche Verknüpfungen zwischen Objekten und
        Diagrammen, die den Diagrammhierarchiebaum nicht beeinflussen.
        In anderen Worten, werden solche Diagramme nicht unter dem
        entsprechenden Parent-Diagramm, sondern einfach in der höchsten
        Hierarchieebne im Baum angezeigt. Sie werden beim Export ins
        Excel wie folgt markiert "{T: ParentDiagramName}
        LinkedDiagramName".  
        ![](//images.ctfassets.net/utx1h0gfm1om/5vJGepsZ44ecc484ei2E8a/86c432f87939c0b18ae32113639f4ce4/1017756.png)

### Bidirektionaler Datenaustausch

Wie eingangs erwähnt wurde, kann der ImportExportManager als Werkzeug
zum bidirektionalen Austausch ausgewählter Inhalte zwischen der
process4.biz- Datenbank und Microsoft Excel eingesetzt werden.
Voraussetzung dafür ist, dass die MS Excel-Dateien dem oben
beschriebenen Dokumentenformat entsprechen (Excel ImportExport
Dokumentenformat).

Gerade im Zusammenhang mit der Aufnahme größerer standardisierter
Datenmengen in die process4.biz- Datenbank bzw. deren Abänderung oder
Übersetzung in andere Sprachen, bietet sich die Verwendung von MS Excel
als effektives und einfaches Mittel an. Sie haben die Möglichkeit, Ihre
Datenbankinhalte in einer, zwei oder mehreren gewählten Inhaltssprachen
nach MS Excel zu exportieren. Welche Sprachen in Ihrem Modell verfügbar
sein sollen, legen Sie über ***Process4.biz → Administration
→ Datenbank- Einstellungen …*** fest und unter ***Process4.biz → Client-
Einstellungen …*** wählen Sie die aktuell angezeigte Inhaltssprache für
Ihr Modell. 

Beim Export nach Excel können Sie mit Hilfe der speziellen Option
„weitere Inhaltssprachen…" (siehe Export Einstellungen) Ihr gesamtes
Modell inklusive aller Attribute zwei- oder mehrsprachig in eine einzige
Datei exportieren. Das generierte Excel-Dokument ist derart
strukturiert, dass es zu jedem Objekt einer ID zwei Zeilen mit
Objektbeschreibungen (eine pro Sprache) gibt, die anhand der LanguageID
eindeutig zu identifizieren sind.

Sie haben die Möglichkeit, Daten abzuändern, zu ergänzen oder auch ihr
Modell in die zweite bzw. dritte gewählte Inhaltssprache zu übersetzen.
Tragen Sie dazu die Übersetzungen jeweils in die leeren Zellen der
zweiten Zeile ein, speichern Sie die Datei und starten Sie anschließend
den process4.biz - ImportExportManager, um die Daten in das process4.biz
Repository zurück zu importieren. Dabei können Sie auswählen, ob die
Objekte inklusive deren Attributwerten in einer bestimmten oder in
beiden Sprachen importiert werden sollen.

![](//images.ctfassets.net/utx1h0gfm1om/TLDhxEalUaA0c4c2SOyMG/a70ff0691e635e1e4c8063f334cd2e58/1017989.png)

*Mehrsprachiges Import aus dem Excel*

 

### Excel-Liste aller Diagramme generieren

Wenn Sie den process4.biz Import-ExportManager zum Export nach MS Excel
verwenden (siehe [Excel Datenexport](Excel_Datenexport)), so können Sie
bei Aktivierung der entsprechenden Export-Optionen unter anderem
auswerten, auf welchen Diagrammen ein Objekt liegt und welche
Verknüpfungen mit Diagrammen existieren. 

Sofern Sie eine über diese Objektsicht hinausgehende Auflistung Ihrer
process4.biz- Diagramme in Excel generieren möchten, können Sie die
gewünschten Diagramme im rechten Fenster des Repositoriums, der Objekt
Tabelle, markieren und einfach per Kopieren und Einfügen in ein
geöffnetes MS Excel-Arbeitsblatt einfügen. 

In diesem Beispiel wurden die Diagramme der Unit „0. Aufbauorganisation"
nach MS Excel kopiert. 

Ähnlich wie beim Excel Datenexport (siehe [Excel Data Export
Abschluss](Excel-Datenexport_1016175.html#ExcelDatenexport-ExcelDataExportAbschluss))
werden die einzelnen Diagramme durch die Zeilen des Arbeitsblattes
repräsentiert und die Spalten stellen die Diagrammattribute dar.

![](//images.ctfassets.net/utx1h0gfm1om/2fc9mX3gdKqwYgesY2CGuA/2abc323ce1153660a1fe503cb35e417f/1017725.png)

*![](//images.ctfassets.net/utx1h0gfm1om/2T1wK7K2TuOewY8Uo0S6Mo/4d56f46a0723b9d9e4e5d783af966610/1017985.png)*

*Objektverknüpfungen und Verwendet in Diagramm in Excel*


![](//images.ctfassets.net/utx1h0gfm1om/749AZOh6Ew6WYamwOc6u8g/65bdd9c8ebe9157fa53d059b084208d5/1017714.png)

*Diagramme kopieren*

 


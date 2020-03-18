-   [Einstellungsmöglichkeiten](#einstellungsmöglichkeiten)
    -   [Verknüpfungs-Typ](#verknüpfungs-typ)
    -   [Zeige Attribute der Assoziation an](#zeige-attribute-der-assoziationan)
    -   [Zellgrößenanpassung](#zellgrößenanpassung)
    -   [Leere Zeilen / Spalten ausblenden](#leere-zeilen--spalten-ausblenden)
    -   [Klassen im Unit-Hierarchiebaum auswählen](#klassen-im-unit-hierarchiebaum-auswählen)
    -   [Namensfilter](#namensfilter)
-   [Funktionen](#funktionen)
    -   [Verknüpfen ausgewählter Objekte](#verknüpfen-ausgewählter-objekte)
    -   [Wähle Assoziationsobjekte für ausgewählte Verknüpfung(en)](#wähle-assoziationsobjekte-für-ausgewählte-verknüpfungen)
    -   [Bearbeite Assoziationsobjekten für ausgewählte Verknüpfungen](#bearbeite-assoziationsobjekten-für-ausgewählte-verknüpfungen)
    -   [Trennen ausgewählter Verknüpfung(en)](#trennen-ausgewählter-verknüpfungen)
    -   [Bearbeite Objekt X](#bearbeite-objekt-x)
-   [Excel Export](#excel-export)

Die Verknüpfungsmatrix kann vom process4.biz Menüband aus aufgerufen
werden, zeigt die  [Objektverknüpfungen](verknüpfungen) von
[Objekten](objekt) aller [Klassen](klasse) tabellarisch an und bietet
die Möglichkeit, Objekte sowie deren Verknüpfungen zu bearbeiten.

### Einstellungsmöglichkeiten

#### Verknüpfungs-Typ

Wählen Sie einen oder mehreren Verknüpfungs-Typen aus, die in der
Tabelle angezeigt werden sollen. Wenn Sie Objekte mit allen
Objektverknüpfungen darstellen möchten, klicken Sie auf "Alle wählen".

#### Zeige Attribute der Assoziation an

Aktivieren Sie diese Option, wenn ein oder mehrere Attribute vom
Assoziationsobjekt für die Verknüpfung angezeigt werden sollen.
Standardmäßig zeigt die Matrix Namen von Assoziationsobjekten an, die
für die Verknüpfung der beiden Objekte verwendet werden (z.B. R, A, C,
I). Wenn eine Assoziationsklasse vordefiniert ist, aber kein
Assoziationsobjekt für die Verknüpfung zugeordnet wurde, erscheint ein
Fragezeichen neben dem Verknüpfungssymbol.

Neben dem Namen lassen sich auch andere Attribute der Assoziationsklasse
darstellen. Sie können z.B. zusätzlich die Beschreibung der verwendeten
Assoziationsobjekte anzeigen lassen:

1.  Selektieren Sie im [Database Designer](database-desiner-de) die
    Klasse, die als Assoziationsklasse dient (z.B. R, A, C, I)
2.  Wählen Sie ein Attribut dieser Klasse, das in der Verknüpfungsmatrix
    angezeigt werden soll (z.B. Beschreibung)
3.  Setzen Sie in den Eigenschaften des Attributs den Wert "Sichtbar in
    Link Matrix" auf "Wahr"

#### Zellgrößenanpassung

Mit dieser Funktion können Sie die Größe der Zellen automatisch so
ändern, dass der Text ganz angezeigt wird.

#### Leere Zeilen/Spalten ausblenden

Aktivieren Sie diese Check-Boxen, damit leere Zeilen- bzw.
Spaltenfelder, die keine Objektverknüpfung enthalten, ausgeblendet
werden.

#### Klassen im Unit-Hierarchiebaum auswählen

Je nach selektiertem [Verknüpfungs-Typ](verknüpfungen), wird sowohl für
die Zeilen- als auch Spaltenauswahl der Matrix ein dynamisch angepasster
Hierarchiebaum mit den verknüpften Klassen generiert. Selektieren Sie
jene Klassen, deren Objektverknüpfungen Sie in der Matrix darstellen
möchten. Es werden dabei nur Klassen und Objekte angezeigt, die den
ausgewählten Verknüpfungs-Typ verwenden.

#### Namensfilter

Filtern Sie mittels dieser Option nach Namen oder Namensteilen von
Objekten, die in den Zeilen bzw. Spalten der Verknüpfungsmatrix
angezeigt werden sollen. In der Tabellenansicht des rechten Fensters
sehen Sie dann in Form einer Matrix die Namen von Klassen und dazu
gehörigen Objekten, sowie deren Objektverknüpfungen.


![](//images.ctfassets.net/utx1h0gfm1om/5dBbwssAKsuMUsKCgYKUMW/6fd8355e1bc71fdb74f51030d084b50a/1017690.png)

### Funktionen

Mit einem rechten Mausklick, können in der Verknüpfungsmatrix folgende
Funktionen verwendet werden:

#### Verknüpfen ausgewählter Objekte

Mit einem einfachen Mausklick auf die ausgewählte leere Zelle kann eine
manuelle Verknüpfung zwischen zwei Objekten erstellt werden. Es ist auch
möglich, mehrere Zellen mit Hilfe von Mehrfachselektion auszuwählen, um
neue Verknüpfungen zu definieren bzw. zu trennen.

Wenn Sie zwei Objekte einer Klasse verknüpfen möchten, für die mehr als
einen Verknüpfungstyp definiert wurden, dann wählen Sie zuerst diese
zwei Verknüpfungstypen aus. Wenn Sie dann auf die Zelle die an der
Kreuzung zwischen zwei Objekten liegt, mit der rechten Maustaste
klicken, erscheint ein Fenster, in dem Sie auswählen können, mit welchem
Verknüpfungstyp die betreffenden Objekte verknüpft werden sollen.

#### Wähle Assoziationsobjekte für ausgewählte Verknüpfung(en)

Diese Option ist nur dann aktiviert, wenn zwischen zwei Objekten eine
manuelle Verknüpfung besteht und in der Assoziationsklasse zumindest ein
Objekt angelegt wurde, das als verbindendes Element für diesen
Verknüpfungs-Typ herangezogen werden kann. Beim Klicken auf diese Option
können Sie ein oder mehrere Assoziationsobjekte für die bestehende
Verknüpfung auswählen.

#### Bearbeite Assoziationsobjekten für ausgewählte Verknüpfungen

Diese Option erlaubt es, die Eigenschaften der verwendeten
Assoziationsobjekte zu ändern.

#### Trennen ausgewählter Verknüpfung(en)

Mit dieser Funktion kann man eine manuelle Verknüpfung zwischen zwei
Objekten löschen.

#### Bearbeite Objekt X

Öffnet das [Eigenschaftsfenster](eigenschaften-dialogfenster) des
Objekts in der markierten Zeile bzw. Spalte.

### Excel Export

Sie können die konfigurierte Ansicht der Verknüpfungsmatrix nach Excel
exportieren: klicken Sie dazu auf die Schaltfläche "Öffnen der Matrix in
Excel". Diese Option ist nur dann verfügbar, wenn Sie mit der
Professional Edition arbeiten und die Lizenz für den
[QueryBuilder](querybuilder-de) aktiviert ist.


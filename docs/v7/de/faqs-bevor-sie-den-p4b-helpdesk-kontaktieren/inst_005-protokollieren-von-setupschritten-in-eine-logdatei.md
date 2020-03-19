
### Problem

Es sollen Informationen über die p4b-Installation in einer Logdatei
abgelegt werden.

### Lösung

Um eine Logdatei erstellen zu lassen, sollten Sie das p4b-setup (die
**\*.msi**-Datei) mit zusätzlichen Parametern starten. Öffnen Sie die
Kommandozeile, geben Sie "**msiexec /i**", den Pfad zur **\*.msi**-Datei
an (z.B. **process4biz\_2005\_51.msi**), gefolgt von **"/L \*v"** und
dem Namen der Logdatei (z.B. **setup.log**). Die Kommandozeile kann über
eine Vielzahl von Aktionen geöffnet werden, z.B. über Win+X -&gt;
Eingabeaufforderung oder Win+R -&gt; "cmd" -&gt; Enter. Der vollständige
Befehl könnte z.B. so aussehen: ****msiexec
/i **D:\\Install\\p4b\\process4biz\_2005\_51.msi /L\*v setup.log**. Auf
diese Art und Weise wird das Setup gestartet und die Installation, in
einer Datei mit dem angegebenen Namen im Ordner des Setups,
protokolliert.

<hr style="padding-top:2rem" />
<a href="https://github.com/process4/docs/issues" target="_blank" class="bgw btn btn-primary btn-lg shadow-sm">Report an issue</a>
<a href="https://github.com/process4/docs" target="_blank" class="bgw btn btn-primary btn-lg shadow-sm" style="margin-left:10px;">View source code</a>
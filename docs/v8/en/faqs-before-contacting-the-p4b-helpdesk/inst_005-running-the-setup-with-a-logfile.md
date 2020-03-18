### Problem

Information on the installation of p4b should be stored in a log file to
create log file.

### Solution

To create a log file, you should start the p4b setup (the \***.msi**
file) with parameters. Open the command line write "**msiexec /i**", the
path to the \***.msi** (e. g. **process4biz\_2005\_51.msi**), followed
by "**/L\*v**" and the name of the log file (e.g. **setup.log**). The
command line can be opened in several ways, e.g. via Win+X-&gt;command
prompt or Win+R-&gt;"cmd"-&gt;Enter. The full command could look e.g.
like this: ****msiexec /i **D:\\Install\\p4b\\process4biz\_2005\_51.msi
/L\*v setup.log**. In this way the setup is started and the installation
protocolled in a file with the given name in the folder of the setup.

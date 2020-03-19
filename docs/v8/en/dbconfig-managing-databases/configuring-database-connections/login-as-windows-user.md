### The Necessary Rights

If you want to perform the login for process4.biz database(s) with an
SQL user, this user should have at least read and write permissions for
the database(s), in other words s/he should be "db\_datareader "and
"db\_datawriter". In order to be able to update databases to a newer
version (see Upgrading an existing installation), s/he needs in addition
the "db\_owner" rights. You can check on SQL Server via the management
console whether a user has these rights.

### Creating a Windows User in SQL Server

1.  Create a new login in SQL Server under Security -&gt; Logins  
2.  Enter the Windows username  
3.  Give the user access to the database with the appropriate
    permissions. At least the fields "db\_datareader" and
    "db\_datawriter" should be activated for the selected databases. If
    the user is allowed to perform DBUpgrade too, then the "db\_owner"
    should be additionally activated.  
4.  Then activate the DBConfig "Use the integrated security of Windows
    NT" and click Test. If the connection to the database is successful,
    you can now log into the database  
<hr style="padding-top:2rem" />
<a href="https://github.com/process4/docs/issues" target="_blank" class="bgw btn btn-primary btn-lg shadow-sm">Report an issue</a>
<a href="https://github.com/process4/docs" target="_blank" class="bgw btn btn-primary btn-lg shadow-sm" style="margin-left:10px;">View source code</a>
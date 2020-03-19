### The Necessary Rights

If you want to perform the login for process4.biz database(s) with an
SQL user, this user should have at least read and write permissions, in
other words be" db\_datareader "and "db\_datawriter". In order to update
databases to a newer version (see Upgrading an existing installation),
s/he needs in addition the "db\_owner" rights. You can check on SQL
Server via the management function whether a user has these rights.

### Assignment of Rights

1.  Open the SQL Server Management Studio, your database folder and
    select the folder "Users" as illustrated here. In the right pane,
    you will see all the users who have been granted access to the
    database  
2.  You can create a new user or change the user rights of an existing
    user for all available databases under Security -&gt; Change
    registrations. Click the user with the right mouse button and select
    New Login ... to create the user or select properties to change the
    permissions  
      
3.  In the user Properties window under user mapping, at least the
    fields "db\_datareader", "db\_datawriter" should be activated for
    the selected databases. If the user has the additional right to run
    the DBUpgrade, then the "db\_owner" should be additionally activated
<hr style="padding-top:2rem" />
<a href="https://github.com/process4/docs/issues" target="_blank" class="bgw btn btn-primary btn-lg shadow-sm">Report an issue</a>
<a href="https://github.com/process4/docs" target="_blank" class="bgw btn btn-primary btn-lg shadow-sm" style="margin-left:10px;">View source code</a>
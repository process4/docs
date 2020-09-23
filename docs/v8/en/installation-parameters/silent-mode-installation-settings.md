Silent mode install generation page.
This page allows you to generate the command required to install process4.biz client in silent mode. Please select options for the silent install, and click "generate" button to generate the command line. You can use the generated installation command line to install process4.biz with given options (either from command prompt or from the batch file).

<style type="text/css">
    .newStyle1
    {
        margin-left: 20px;
    }
</style>

<script type="text/javascript">
    function updateState() {
        var checked_INSTALL_DB = document.getElementById("INSTALL_DB").value == 1 || document.getElementById("INSTALL_DB").value == 3;
        var checked_DB_SQL_AUTH_MODE = checked_INSTALL_DB && document.getElementById("DB_SQL_AUTH_MODE").checked;
        var checked_DEMOINSTALL_DB = document.getElementById("INSTALL_DB").value == 2 || document.getElementById("INSTALL_DB").value == 3;
        var checked_DEMODB_SQL_AUTH_MODE = checked_DEMOINSTALL_DB && document.getElementById("DEMODB_SQL_AUTH_MODE").checked;
        var setup_license_server = document.getElementById("SETUP_LICENSE_SERVER").checked;

        document.getElementById("div_INSTALL_DB").style.display = checked_INSTALL_DB ? "block" : "none";
        document.getElementById("div_DB_SQL_AUTH_MODE").style.display = checked_DB_SQL_AUTH_MODE ? "block" : "none";

        document.getElementById("div_DEMO_INSTALL_DB").style.display = checked_DEMOINSTALL_DB ? "block" : "none";
        document.getElementById("div_DEMODB_SQL_AUTH_MODE").style.display = checked_DEMODB_SQL_AUTH_MODE ? "block" : "none";

        document.getElementById("div_SERVER_LICENSE").style.display = setup_license_server ? "block" : "none";
    }

    function formatParam(id, value) {
        return (value.length == 0) ? "" : id + "=\"" + value + "\" ";
    }

    function formatCheckValue(id) {
        return formatParam(id, document.getElementById(id).checked ? "1" : "0");
    }

    function formatTextValue(id) {
        return formatParam(id, "" + document.getElementById(id).value);
    }

    function generateResultString() {
        var result = "";
        result += "msiexec "
        result += "/i \"" + document.getElementById("SRC_IMAGE").value + "\" ";
        result += "/qn ";
        result += formatTextValue("INSTALL_DIR");
        result += formatTextValue("PROFILE");
        result += formatTextValue("PROFILE_LOCAL");
        result += formatTextValue("LANGUAGE_ID");

        var lcid = document.getElementById("LANGUAGE_ID").value;
        if (lcid == 1031)
            result += "TRANSFORM=:de-DE ";
        if (lcid == 1036)
            result += "TRANSFORM=:fr-FR ";

        if (document.getElementById("SETUP_LICENSE_SERVER").checked) {
            result += formatCheckValue("SETUP_LICENSE_SERVER");

            result += formatTextValue("USE_LICENSE_SERVER");
            result += formatTextValue("LICENSE_SERVER_ONLINE");
            result += formatTextValue("LICENSE_SERVER_SERVER");
        }

        result += formatCheckValue("INSTALL_DBCONFIG");
        result += formatCheckValue("INSTALL_MODELER");

        result += formatCheckValue("INSTALL_LICENSE_SERVICE");
        if (document.getElementById("INSTALL_LICENSE_SERVICE").checked) {
            document.getElementById("INSTALL_LICENSE_FILES").checked=true
        }
        result += formatCheckValue("INSTALL_LICENSE_FILES");

        var checked_INSTALL_DB = document.getElementById("INSTALL_DB").value == 1 || document.getElementById("INSTALL_DB").value == 3;
        var checked_DEMOINSTALL_DB = document.getElementById("INSTALL_DB").value == 2 || document.getElementById("INSTALL_DB").value == 3;

        result += formatTextValue("INSTALL_DB");
        if (checked_INSTALL_DB) {
            result += formatTextValue("DB_SERVER_NAME");
            result += formatCheckValue("DB_SQL_AUTH_MODE");
            result += formatTextValue("DB_USER_NAME");
            result += formatTextValue("DB_PASSWORD");
        }
        if (checked_DEMOINSTALL_DB) {
            result += formatTextValue("DEMODB_SERVER_NAME");
            result += formatCheckValue("DEMODB_SQL_AUTH_MODE");
            result += formatTextValue("DEMODB_USER_NAME");
            result += formatTextValue("DEMODB_PASSWORD");
        }
        result += formatCheckValue("INSTALL_AXAPTA");
        result += formatCheckValue("INSTALL_EXCELIE_PPOINT");
        result += formatCheckValue("INSTALL_SURE_STEP");
        result += formatCheckValue("INSTALL_WORD_REPORTER");
        result += formatCheckValue("INSTALL_DOC_COMPOSER");
        result += formatCheckValue("INSTALL_COBIT_REPORTS");
        result += formatCheckValue("INSTALL_BPMN2_IE");
        result += formatCheckValue("INSTALL_ACTIVEDIR");
        result += formatCheckValue("INSTALL_WEB_PUBLISHER");
        result += formatCheckValue("INSTALL_WEB_PUBLISHER2");
        result += formatCheckValue("INSTALL_APPROVAL_HISTORY");
        result += formatCheckValue("INSTALL_TASK_MGMT");
        result += formatCheckValue("INSTALL_SP_SYNC");

        document.getElementById("ResultString").value = result;
    }
</script>

The MSI to install:
<br/>
<input id="SRC_IMAGE" size="80" value="process4biz_2019_800_x86.msi"></input>
<br/><br/>
Installation language:
<br/>
<select id="LANGUAGE_ID" name="LANGUAGE_ID" style="width: 100px;">
    <option selected="selected" value="1033">English</option>
    <option value="1031">German</option>
    <option value="1036">French</option>
</select>
<br/>
Installation directory (by default it is "C:\Program Files (x86)\process4biz"):
<br/>
<input id="INSTALL_DIR" name="INSTALL_DIR" size="70"></input>
<br/>
<br/>
Profile XML file location (by default it is "C:\ProgramData\process4\DbConfig.xml"):
<br/>
<input id="PROFILE" name="PROFILE" size="70"></input>
<br/>
Profile XML <u>local</u> file location (optional):
<br/>
<input id="PROFILE_LOCAL" name="PROFILE_LOCAL" size="70"></input>
<br/>
<br/>

Install Core modules:
<br/>
<input checked="checked" id="INSTALL_MODELER" name="INSTALL_MODELER" type="checkbox"></input>
<label for="INSTALL_MODELER">
   Core modules: They consist of the Designer, the Repository and Graphical Visio Modeler</label>
<br/>
<input checked="checked" id="INSTALL_DBCONFIG" name="INSTALL_DBCONFIG" type="checkbox"></input>
<label for="INSTALL_DBCONFIG">
   DbConfig: The database configuration utility for managing the access profiles to p4b-databases in SQL-servers</label>
<br/>

<br/>
<input id="INSTALL_LICENSE_FILES" name="INSTALL_LICENSE_FILES" type="checkbox"></input>
<label for="INSTALL_LICENSE_FILES">ServerLicensing</label>
<br/>
<input id="INSTALL_LICENSE_SERVICE" name="INSTALL_LICENSE_SERVICE" type="checkbox"></input>
<label for="INSTALL_LICENSE_SERVICE">Run ServerLicensing as a windows service</label>
<br/>
<br/>

<input id="SETUP_LICENSE_SERVER" name="SETUP_LICENSE_SERVER" onclick="javascript:updateState()"
    type="checkbox"></input>
Set up URL of the license hosting server
<br/>

<div class="newStyle1" id="div_SERVER_LICENSE" mce_style="display: none;" style="display: none;">

<br/>
Select the type of license:
<br/>
<select id="USE_LICENSE_SERVER" name="USE_LICENSE_SERVER" style="width: 160px;">
    <option selected="selected" value="0">ONLINE license server</option>
    <option value="1">SERVER license server</option>
</select>
<br/>

<br/>
URL of the ONLINE license hosting server (by default it is "https://registration.process4.biz,https://registration2.process4.biz,https://registration3.process4.biz"):
<br/>
<input id="LICENSE_SERVER_ONLINE" name="LICENSE_SERVER_ONLINE" size="100" value="https://registration.process4.biz,https://registration2.process4.biz,https://registration3.process4.biz"></input>
<br/>

URL of the SERVER license hosting server:
<br/>
<input id="LICENSE_SERVER_SERVER" name="LICENSE_SERVER_SERVER" size="100"></input>
<br/>
</div>

<br/>
<br/>

<label for="INSTALL_DB">
Install databases to SQL server:
</label>
<br/>
<select id="INSTALL_DB" name="INSTALL_DB" onchange="javascript:updateState();">
    <option selected="selected" value="0">None</option>
    <option value="1">EmptyDB</option>
    <option value="2">DemoDB</option>
    <option value="3">Both</option>
</select>
<br/>
<div class="newStyle1" id="div_INSTALL_DB" mce_style="display: none;" style="display: none;">
    <br/>
    <b>Settings for EmptyDB</b><br/>
    SQL Server Instance name (required):
    <br/>
    <input id="DB_SERVER_NAME" name="DB_SERVER_NAME" value=".\SQLExpress"></input>
    <br/>
    <input id="DB_SQL_AUTH_MODE" name="DB_SQL_AUTH_MODE" onclick="javascript:updateState()"
        type="checkbox"></input>
    <label for="DB_SQL_AUTH_MODE">
        Use SQL Server Authentication (by default Windows Authentication is used)</label>
    <div class="newStyle1" id="div_DB_SQL_AUTH_MODE" mce_style="display: none;" style="display: none;">
        <br/>
        User name (required):
        <br/>
        <input id="DB_USER_NAME" name="DB_USER_NAME" value="sa"></input>
        <br/>
        Password (required):<br/>
        <input id="DB_PASSWORD" name="DB_PASSWORD" type="password"></input>
    </div>
</div>
<div class="newStyle1" id="div_DEMO_INSTALL_DB" mce_style="display: none;" style="display: none;">
    <br/>
    <b>Settings for demo DB</b><br/>
    SQL Server Instance name (required):
    <br/>
    <input id="DEMODB_SERVER_NAME" name="DEMODB_SERVER_NAME" value=".\SQLExpress"></input>
    <br/>
    <input id="DEMODB_SQL_AUTH_MODE" name="DEMODB_SQL_AUTH_MODE" onclick="javascript:updateState()"
        type="checkbox"></input>
    <label for="DEMODB_SQL_AUTH_MODE">
        Use SQL Server Authentication (by default Windows Authentication is used)</label>
    <div class="newStyle1" id="div_DEMODB_SQL_AUTH_MODE" mce_style="display: none;" style="display: none;">
        <br/>
        User name (required):
        <br/>
        <input id="DEMODB_USER_NAME" name="DB_USER_NAME" value="sa"></input>
        <br/>
        Password (required):
        <br/>
        <input id="DEMODB_PASSWORD" name="DEMODB_PASSWORD" type="password"></input>
    </div>
</div>
<br/>
Install Extensions:
<br/>
<input checked="checked" id="INSTALL_EXCELIE_PPOINT" name="INSTALL_EXCELIE_PPOINT" type="checkbox"></input>
<label for="INSTALL_EXCELIE_PPOINT">
    Import-Export & PPT Manager</label>
<br/>
<input checked="checked" id="INSTALL_WORD_REPORTER" name="INSTALL_WORD_REPORTER" type="checkbox"></input> 
<label for="INSTALL_WORD_REPORTER"> 
    WordReporter</label>
<br/>
<input checked="checked" id="INSTALL_DOC_COMPOSER" name="INSTALL_DOC_COMPOSER" type="checkbox"></input>
<label for="INSTALL_DOC_COMPOSER">
    DocumentComposer</label>
<br/>
<input checked="checked" id="INSTALL_SP_SYNC" name="INSTALL_SP_SYNC" type="checkbox"></input>
<label for="INSTALL_SP_SYNC">
    SharePointSync</label>
<br/><input id="INSTALL_TASK_MGMT" name="INSTALL_TASK_MGMT" type="checkbox"></input>
<label for="INSTALL_TASK_MGMT">
    TaskManagement</label>
<br/>
<input id="INSTALL_COBIT_REPORTS" name="INSTALL_COBIT_REPORTS" type="checkbox"></input>
<label for="INSTALL_COBIT_REPORTS">
    RACI Reports</label>
<br/>
<input id="INSTALL_AXAPTA" name="INSTALL_AXAPTA" type="checkbox"></input>
<label for="INSTALL_AXAPTA">
    Dynamics AX</label>
<br/> 
<input id="INSTALL_SURE_STEP" name="INSTALL_SURE_STEP" type="checkbox"></input> 
<label for="INSTALL_SURE_STEP"> 
    Dynamics SureStep</label> 
<br/>
<input id="INSTALL_BPMN2_IE" name="INSTALL_BPMN2_IE" type="checkbox"></input>
<label for="INSTALL_BPMN2_IE">
    BPMN2ImportExport</label>
<br/>
<input id="INSTALL_ACTIVEDIR" name="INSTALL_ACTIVEDIR" type="checkbox"></input>
<label for="INSTALL_ACTIVEDIR">
    ActiveDirectory-Import</label>
<br/>

<br/>
<input id="INSTALL_WEB_PUBLISHER" name="INSTALL_WEB_PUBLISHER" type="checkbox"></input>
<label for="INSTALL_WEB_PUBLISHER">
    WebPublisher</label>
<br/>
<input checked="checked" id="INSTALL_WEB_PUBLISHER2" name="INSTALL_WEB_PUBLISHER2" type="checkbox"></input>
<label for="INSTALL_WEB_PUBLISHER2">
    ModelPublisher</label>
<br/>
<input id="INSTALL_APPROVAL_HISTORY" name="INSTALL_APPROVAL_HISTORY" type="checkbox"></input>
<label for="INSTALL_APPROVAL_HISTORY">
    ApprovalHistory</label>
<br/>
<br/>
<br/>
<input id="GenerateButton" name="Button1" onclick="javascript:generateResultString()"
    type="button" value="Generate command line for silent install"></input>
<br/>
<textarea cols="120" id="ResultString" name="S1" rows="5"></textarea>
<br/>

<hr style="padding-top:2rem" />
<a href="https://github.com/process4/docs/issues" target="_blank" class="bgw btn btn-primary btn-lg shadow-sm">Report an issue</a>
<a href="https://github.com/process4/docs" target="_blank" class="bgw btn btn-primary btn-lg shadow-sm" style="margin-left:10px;">View source code</a>
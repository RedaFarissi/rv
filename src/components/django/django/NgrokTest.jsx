import PowerShell_logo from "../../../assests/images/logo/PowerShell_logo.png";
import { CodeCommand , CodePowerShell , CodeHighlighter  } from "../../path";

export default function NgrokTest(){
    return(
        <article id="ModelForm">
            <h1 className="heading-style"> Django Ngrok test on Windows </h1> 
            
            <ul><li> التفاصيل <a href="https://ngrok.com/docs/getting-started/" target="_blanck" role="link">من هنا  </a></li></ul>
            <h2 className="title-h2">1 - افتح PowerShell ك Administrator</h2>
            <p className="style_divv">
                اضغط على <kbd>Windows</kbd> + <kbd>S</kbd>، واكتب <b>PowerShell</b>، وانقر بزر الماوس الأيمن فوق <b>Windows PowerShell</b>، واختر تشغيل كمسؤول.
            </p>
            <h2 className="title-h2"> 2 - قم بتشغيل أمر التثبيت</h2>
            <CodeCommand> choco install ngrok </CodeCommand>
            <CodePowerShell>
                        PS C:\Windows\system32{">"} <span className="text-warning">choco install ngrok</span> <br />
                        <span style={{color:"#2ff16e"}}>Chocolatey v2.4.1</span><br />
                        Installing the following packages:<br />
                        <span style={{color:"#2ff16e"}}>ngrok</span><br />
                        By installing, you accept licenses for the packages.<br />
                        Downloading package from source 'https://community.chocolatey.org/api/v2/'<br />
                        <br />
                        <span style={{color:"#2ff16e"}}>ngrok v3.19.0 [Approved]</span><br />
                        ngrok package files install completed. Performing other installation steps.<br />
                        <span style={{color:"#2ff16e"}}>The package ngrok wants to run 'chocolateyinstall.ps1'.<br />
                        Note: If you don't run this script, the installation will fail.<br />
                        Note: To confirm automatically next time, use '-y' or consider:<br />
                        choco feature enable -n allowGlobalConfirmation</span><br />
                        Do you want to run the script?([Y]es/[A]ll - yes to all/[N]o/[P]rint): Y<br />
                        <br />
                        Downloading ngrok 64 bit<br />
                        &nbsp; &nbsp; from 'https://bin.equinox.io/a/bjtcPNfaiTB/ngrok-v3-3.19.0-windows-amd64.zip'<br />
                        Progress: 100% - Completed download of C:\Users\Dell\AppData\Local\Temp\chocolatey\ngrok\3.19.0\ngrok-v3-3.19.0-windows-amd64.zip (14.63 MB).<br />
                        Download of ngrok-v3-3.19.0-windows-amd64.zip (14.63 MB) completed.<br />
                        Hashes match.<br />
                        Extracting C:\Users\Dell\AppData\Local\Temp\chocolatey\ngrok\3.19.0\ngrok-v3-3.19.0-windows-amd64.zip to C:\ProgramData\chocolatey\lib\ngrok\tools...<br />
                        C:\ProgramData\chocolatey\lib\ngrok\tools<br />
                         ShimGen has successfully created a shim for ngrok.exe<br />
                         <span style={{color:"#2ff16e"}}> The install of ngrok was successful.<br />
                         &nbsp; &nbsp; Deployed to 'C:\ProgramData\chocolatey\lib\ngrok\tools'</span><br />
                          <br />
                          <span style={{color:"yellow"}}>Chocolatey installed 1/1 packages.<br />
                         &nbsp; &nbsp; See the log for details (C:\ProgramData\chocolatey\logs\chocolatey.log).</span> <br /><br /><br />
            </CodePowerShell>
            <h2 className="title-h2"> 3 - قم بربط حسابك </h2>    
            <p className="style_divv">
                بعد ذلك، قم بتوصيل وكيل ngrok بحساب ngrok الخاص بك. إذا لم تكن قد قمت بذلك بالفعل، فقم <a href="https://dashboard.ngrok.com/get-started/setup/windows" target="_blanck" role="link">بالتسجيل للحصول على حساب </a> ngrok. انسخ رمز مصادقة ngrok الخاص بك من لوحة معلومات ngrok الخاصة بك.
            </p><br />
            <CodePowerShell>
                PS C:\Windows\system32{">"} <span className="text-warning">ngrok config add-authtoken ************************************PChnJWv2TrR </span><br />
                Authtoken saved to configuration file: C:\Users\Dell\AppData\Local/ngrok/ngrok.yml <br /><br />
            </CodePowerShell>
            <h2 className="title-h2"> 4 - اختبار تطبيقك عبر الإنترنت</h2>
            <p className="style_divv">
                <ul><li> ضع تطبيقك على الإنترنت في نطاق مؤقت لإعادة التوجيه إلى الخدمة الأصلية. على سبيل المثال، إذا كان يستمع على المنفذ http://localhost:8080، فقم بتشغيل:</li></ul>
                <CodeCommand> ngrok http http://localhost:8080 </CodeCommand>
                أو
                <CodeCommand> ngrok http 8080 </CodeCommand>
            </p><br />
            <div className="mital mb-3">متال :</div>
            <div className="alert bg-dark text-light" dir="ltr">
                (all_course) C:\Users\Dell\Desktop\all_course\all-course{">"}<span className="text-warning">py manage.py runserver 9000</span> <br />
                Watching for file changes with StatReloader<br />
                Performing system checks...<br /><br />
                System check identified no issues (0 silenced).<br />
                February 14, 2025 - 10:56:42<br />
                Django version 5.1.6, using settings 'rvBack.settings'<br />
                Starting development server at http://127.0.0.1:9000/<br />
                Quit the server with CTRL-BREAK.
            </div><br />
            <CodePowerShell>
                PS C:\Windows\system32{">"} <span className="text-warning">ngrok http 9000</span><br /><br />
            </CodePowerShell><br /><br />

            <div className="text-light bg-black" dir="ltr">
                <h6 class="bg-light text-dark mb-3"> <img src={PowerShell_logo} alt="PowerShell_logo" className="ms-1 mb-1" style={{ width : "20px"}} />Administrator : Windows PowerShell</h6>
               <pre>
                <span style={{color : "aqua"}}>ngrok</span>                                                                                     (Ctrl+C to quit)  <br />                  
                <span className="text-secondary">Sign up to try new private endpoints https://ngrok.com/new-features-update?ref=private</span> <br /><br /> 
                <span className="text-success">Session Status                online</span>                    <br />                             
                Account                       RedaFarissi (Plan: Free)  <br />                             
                Update                        update available (version 3.19.1, Ctrl-U to update) <br />                            
                Version                       3.19.0  <br />                             
                Region                        Europe (eu) <br />                             
                Latency                       80ms    <br />                             
                Web Interface                 http://127.0.0.1:4040 <br />                             
                Forwarding                    https://bf09-160-178-211-192.ngrok-free.app -{">"} http://localhost:9000<br />            
                Connections                   ttl     opn     rt1     rt5     p50     p90  <br />
                 &nbsp;  &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;&nbsp;           0       0       0.00    0.00    0.00    0.00 <br />
               </pre>
            </div>
            <CodeHighlighter code={`ALLOWED_HOSTS = ['127.0.0.1', 'localhost', '.ngrok-free.app']`} file_name="all-course / settings.py" language="python" number={false} addclassName="mt-3 mb-3" copie={true}/>
            <ul>
                <li>انتقل إلى https://bf09-160-178-211-192.ngrok-free.app لاختبار موقع الويب الخاص بك</li>
            </ul>







        </article>
    )
}
import codes from "../../../assests/codes/django/django"
import images from "../imagesDjango";
import { CodeCommand , CodeHighlighter , Result } from "../../path";

export default function DjangoEmail(){
    return(
        <article id="Django_Email">
            <div className="border-5 mt-5">
            <h1> django Email </h1>
            <br id="send_email"/><br/>
            <h2>Send Email</h2>
            <h3> 1 -  2-Step Verification Your Email </h3>
            <ul>
               <div className="h3"><li><a href="https://www.youtube.com/watch?v=iGPPhzhXBFg" target="_blank"> Youtube </a></li></div>
            </ul>
            <ul className="fs-5"> <li> First go to your email and click <b>Manage your Google Account</b> </li> </ul> 
            <img src={images.django214} className="w-100 mt-2 mb-3"/> 
            <ul className="fs-5"> 
               <li> Click <kbd> Security </kbd> in left </li> 
               <li> Click <kbd>2-Step Verification </kbd></li>
            </ul>
            <img src={images.django215} className="img"/> 
            <img src={images.django216} className="img"/> 
            <img src={images.django217} className="img"/> 
            <img src={images.django218} className="img"/> 
            <img src={images.django219} className="img"/> 
            <img src={images.django220} className="img"/> 
            <img src={images.django221} className="img"/> 
            <ul className="fs-5">
               <li>this code is the password for my account <b>redaredaeskouni@gmail.com</b> you need to copy it </li>
            </ul>
            <img src={images.django222} className="w-100 mt-2 mb-3"/> 
            <h3>  2 - django  Email </h3>
            <p className="fs-4"> In this exemple I use another email <b>redaesskouni@gmail.com</b> </p>
            <img src={images.django213} className="w-100 mt-2 mb-3"/> 
            <div className='h5'> project/settings.py</div>
            <div className=" p-2 fs-5">
               <pre><span style={{color:"#bd7db4"}}>import</span>  django <br/> ..<br/> ..</pre>
            </div>


            <div className=" p-2 fs-5">
               <pre>
            EMAIL_HOST = <span className="o">'smtp.gmail.com'</span>  <span className="text-success"># Replace with the hostname of your email server</span>
            EMAIL_HOST_USER = <span className="o">'redaesskouni@gmail.com'</span>  <span className="text-success"># Replace with your email address</span>
            EMAIL_HOST_PASSWORD = <span className="o">'svytlnnjlsojpdqc'</span>  <span className="text-success"># Replace with your email account password</span>
            EMAIL_PORT = 587 <span className="text-success"># Replace with the port number of your email server</span>
            EMAIL_USE_TLS = <span className="text-primary">True</span>
            EMAIL_BACKEND = <span className="o">'django.core.mail.backends.smtp.EmailBackend'</span></pre>
            </div>
            <img src={images.django223} className="img"/> 
            <img src={images.django224} className="img"/> 
            <img src={images.django225} className="img"/> 
            <p className="text-success fs-4 mt-2"><b>The Email is Sending Success</b></p>
            <img src={images.django226} className="img"/>
            <br id="list_emails"/><br/>
            <h2>List Emails</h2>
            <img src={images.django227} className="img"/> 
            <p className="fs-3"> 
               In the code snippet provided, <b>imap_server.select('INBOX')</b> is used to select the mailbox (folder) from which you want to fetch the emails. The 'INBOX' mailbox is a standard mailbox that represents the primary mailbox or the main folder in an email account.<br/><br/>
               By selecting the 'INBOX' mailbox, you specify that you want to fetch emails from the primary mailbox/folder of the email account. This is typically where the incoming emails are stored by default. 
            </p>
            <img src={images.django229} className="img"/> 
            <img src={images.django228} className="img"/> 
            <img src={images.django230} className="img"/> 

            <br id="UseEmailAsUsername"/><br/>
            <h2> Use Email As User Name </h2>
            <a href="https://www.youtube.com/watch?v=Um-rWZKhL3E"> Youtube </a>
            </div>
        </article>
    )
}
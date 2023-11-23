import images from "../imagesHtml";
import { CodeHighlighter ,  Result} from "../../path";

export default function Header(){
    const code = `  <header>
    <img src="your-logo.png" alt="Your Logo">
    <nav>
        <ul>
            <li><a href="#">Home</a></li>
            <li><a href="#">About</a></li>
            <li><a href="#">Contact</a></li>
        </ul>
    </nav>
    <div class="login-icon">&#128100;</div> <!-- You can replace this with your actual login icon -->
    <div class="search-bar">
        <input type="text" placeholder="Search...">
        <button type="submit">&#128269;</button> <!-- You can replace this with your actual search icon -->
    </div>
</header>`
    
    return(
<section className="section-conetent">
    <h1 class="heading-style heading-style-html-color">HTML Header</h1>
    <article>
        <p class="style_divv mt-5">
            يمثل العنصر <span className="yellow"><strong>&lt;header&gt;</strong></span> حاوية لمحتوى تمهيدي أو مجموعة من روابط التنقل. 
            يحتوي عنصر <span className="yellow"><strong>&lt;header&gt;</strong></span> عادةً على:<br/>
            عنصر عنوان واحد أو أكثر (<span className="yellow"><strong>&lt;h1&gt;</strong></span> - <span className="yellow"><strong>&lt;h6&gt;</strong></span>)
            رمز الشعار الذهبي
            معلومات التأليف
            ملاحظة: يمكن أن يكون لديك عدة عناصر <span className="yellow"><strong>&lt;header&gt;</strong></span> في مستند <b>HTML</b> واحد. ومع ذلك ، لا يمكن وضع <span className="yellow"><strong>&lt;header&gt;</strong></span> داخل <span className="yellow"><strong>&lt;footer&gt;</strong></span> أو <span className="yellow"><strong>&lt;address&gt;</strong></span> أو عنصر <span className="yellow"><strong>&lt;header&gt;</strong></span> آخر.
        </p>
        <CodeHighlighter  code={code} language="html"  addclassName="mt-3 mb-3" copie={true}/>
    </article>
    
</section>
)
}
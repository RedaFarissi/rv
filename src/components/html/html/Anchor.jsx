import { CodeHighlighter ,  Result} from "../../path";
import React ,{ useState , useRef } from "react";

export default function Anchor(props){
    const code1 = `<a href="url"> content </span>`
    const code2 = `<a href="url" target="_blanck"> content </span>`
    const code3 = `<a href="url" title="content_title"> content </span>`
    const code4 = `<a href="#id_name"> content </span>`
    const code5 = `<a href="name_file.html"> content </span>`

    const codeExemple1 = `     <a href="https://www.google.com/">google.com</a>`
    const codeExemple2 = `     <a href="https://www.google.com/" target="_blanck">google.com</a>`
    const codeExemple3 = `     <a href="https://www.google.com/" title="go to google" target="_blanck">google.com</a>`
    const codeExemple4 = `     <a href="#title1">title1</a>&nbsp;&nbsp;
     <a href="#title2">title2</a>&nbsp;&nbsp;
     <a href="#title3">title3</a>&nbsp;&nbsp;
     <a href="#title4">title4</a>&nbsp;&nbsp;
     <h2 id="title1">title1</h2>
     <p> paragraph1.<br/> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias, adipisci? Illum et esse ratione labore consequatur recusandae earum inventore sit laboriosam nemo dicta vero mollitia temporibus eaque sed, a aut! Eius iure est maioreseostemporibus consequatur inventore suscipit sit illum? Quos quia tempore molestiae rerum, ab sapiente odit necessitatibus molestias magnam similique iusto corporis. Aspernatur enim consequuntur voluptas rerum delectus. Necessitatibus ab officiisatnobis a repudiandae maiores totam dolor quo aliquam fugiat, ipsam corporis pariatur accusantium animi porro esse unde tenetur magnam minus. Ipsum dolore magnam mollitia eaque commodi praesentium reiciendis veniam, animi atque aliquam nesciuntexcepturiquam autem quas libero a asperiores facilis id dicta minus consectetur? Dolore explicabo quasi repellendus veniam nam est maiores minima in non? Blanditiis eius accusantium minima dolorem amet aut natus vitae incidunt reiciendis consecteturaliquidrem doloribus adipisci tempora voluptas impedit quia non quibusdam mollitia, similique tempore? Ut aspernatur accusamus enim nisi impedit cum quia maxime voluptas accusantium, optio, natus aperiam tempora. Voluptas, tempore dolor natusdebitisex, omnis nesciunt quaerat, non soluta porro nulla suscipit laboriosam beatae quidem accusantium. Odit, provident aliquam sit velit ex fuga saepe, molestias modi reiciendis facilis vel! Enim, saepe! Harum quae ut molestiae voluptatem cupiditatetotammodi fuga corrupti autem laborum illo dolorem, sequi accusamus dignissimos in. Animi, corrupti officiis cumque similique recusandae necessitatibus iusto quas dolorem, reprehenderit repellat ullam sed inventore sint dolorum tempora eaqueporro exrem. Tempora, aliquid quod numquam, aliquam quas, illum saepe corrupti earum molestiae perferendis officiis unde dolores! Ducimus rem, maxime animi numquam debitis officiis suscipit in ex explicabo quaerat ipsa? Iste nihil asperioresnesciunt,consequuntur ab, dolores facere minima nisi aperiam beatae neque commodi suscipit saepe modi voluptatibus minus perspiciatis vel quia quaerat cum obcaecati, expedita harum. Illum harum, nihil quaerat soluta cumque atque rem perferendisveritatissaepe hic laborum mollitia earum alias incidunt inventore ab eligendi recusandae odio quis accusamus voluptatem. Molestias unde amet totam fugiat veritatis? Qui non voluptatum ullam eos. Soluta minus voluptatum veritatis perspiciatis,ducimus quamhic ea sit autem eligendi blanditiis optio at ipsam. Provident pariatur vel eos tempora velit numquam debitis corrupti sit, earum consequuntur praesentium! Mollitia velit ad corporis molestias?</p>
     <h2 id="title2">title2</h2>
     <p> paragraph2.<br/> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias, adipisci? Illum et esse ratione labore consequatur recusandae earum inventore sit laboriosam nemo dicta vero mollitia temporibus eaque sed, a aut! Eius iure est maioreseostemporibus consequatur inventore suscipit sit illum? Quos quia tempore molestiae rerum, ab sapiente odit necessitatibus molestias magnam similique iusto corporis. Aspernatur enim consequuntur voluptas rerum delectus. Necessitatibus ab officiisatnobis a repudiandae maiores totam dolor quo aliquam fugiat, ipsam corporis pariatur accusantium animi porro esse unde tenetur magnam minus. Ipsum dolore magnam mollitia eaque commodi praesentium reiciendis veniam, animi atque aliquam nesciuntexcepturiquam autem quas libero a asperiores facilis id dicta minus consectetur? Dolore explicabo quasi repellendus veniam nam est maiores minima in non? Blanditiis eius accusantium minima dolorem amet aut natus vitae incidunt reiciendis consecteturaliquidrem doloribus adipisci tempora voluptas impedit quia non quibusdam mollitia, similique tempore? Ut aspernatur accusamus enim nisi impedit cum quia maxime voluptas accusantium, optio, natus aperiam tempora. Voluptas, tempore dolor natusdebitisex, omnis nesciunt quaerat, non soluta porro nulla suscipit laboriosam beatae quidem accusantium. Odit, provident aliquam sit velit ex fuga saepe, molestias modi reiciendis facilis vel! Enim, saepe! Harum quae ut molestiae voluptatem cupiditatetotammodi fuga corrupti autem laborum illo dolorem, sequi accusamus dignissimos in. Animi, corrupti officiis cumque similique recusandae necessitatibus iusto quas dolorem, reprehenderit repellat ullam sed inventore sint dolorum tempora eaqueporro exrem. Tempora, aliquid quod numquam, aliquam quas, illum saepe corrupti earum molestiae perferendis officiis unde dolores! Ducimus rem, maxime animi numquam debitis officiis suscipit in ex explicabo quaerat ipsa? Iste nihil asperioresnesciunt,consequuntur ab, dolores facere minima nisi aperiam beatae neque commodi suscipit saepe modi voluptatibus minus perspiciatis vel quia quaerat cum obcaecati, expedita harum. Illum harum, nihil quaerat soluta cumque atque rem perferendisveritatissaepe hic laborum mollitia earum alias incidunt inventore ab eligendi recusandae odio quis accusamus voluptatem. Molestias unde amet totam fugiat veritatis? Qui non voluptatum ullam eos. Soluta minus voluptatum veritatis perspiciatis,ducimus quamhic ea sit autem eligendi blanditiis optio at ipsam. Provident pariatur vel eos tempora velit numquam debitis corrupti sit, earum consequuntur praesentium! Mollitia velit ad corporis molestias?</p>
     <h2 id="title3">title3</h2>
     <p> paragraph3.<br/> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias, adipisci? Illum et esse ratione labore consequatur recusandae earum inventore sit laboriosam nemo dicta vero mollitia temporibus eaque sed, a aut! Eius iure est maioreseostemporibus consequatur inventore suscipit sit illum? Quos quia tempore molestiae rerum, ab sapiente odit necessitatibus molestias magnam similique iusto corporis. Aspernatur enim consequuntur voluptas rerum delectus. Necessitatibus ab officiisatnobis a repudiandae maiores totam dolor quo aliquam fugiat, ipsam corporis pariatur accusantium animi porro esse unde tenetur magnam minus. Ipsum dolore magnam mollitia eaque commodi praesentium reiciendis veniam, animi atque aliquam nesciuntexcepturiquam autem quas libero a asperiores facilis id dicta minus consectetur? Dolore explicabo quasi repellendus veniam nam est maiores minima in non? Blanditiis eius accusantium minima dolorem amet aut natus vitae incidunt reiciendis consecteturaliquidrem doloribus adipisci tempora voluptas impedit quia non quibusdam mollitia, similique tempore? Ut aspernatur accusamus enim nisi impedit cum quia maxime voluptas accusantium, optio, natus aperiam tempora. Voluptas, tempore dolor natusdebitisex, omnis nesciunt quaerat, non soluta porro nulla suscipit laboriosam beatae quidem accusantium. Odit, provident aliquam sit velit ex fuga saepe, molestias modi reiciendis facilis vel! Enim, saepe! Harum quae ut molestiae voluptatem cupiditatetotammodi fuga corrupti autem laborum illo dolorem, sequi accusamus dignissimos in. Animi, corrupti officiis cumque similique recusandae necessitatibus iusto quas dolorem, reprehenderit repellat ullam sed inventore sint dolorum tempora eaqueporro exrem. Tempora, aliquid quod numquam, aliquam quas, illum saepe corrupti earum molestiae perferendis officiis unde dolores! Ducimus rem, maxime animi numquam debitis officiis suscipit in ex explicabo quaerat ipsa? Iste nihil asperioresnesciunt,consequuntur ab, dolores facere minima nisi aperiam beatae neque commodi suscipit saepe modi voluptatibus minus perspiciatis vel quia quaerat cum obcaecati, expedita harum. Illum harum, nihil quaerat soluta cumque atque rem perferendisveritatissaepe hic laborum mollitia earum alias incidunt inventore ab eligendi recusandae odio quis accusamus voluptatem. Molestias unde amet totam fugiat veritatis? Qui non voluptatum ullam eos. Soluta minus voluptatum veritatis perspiciatis,ducimus quamhic ea sit autem eligendi blanditiis optio at ipsam. Provident pariatur vel eos tempora velit numquam debitis corrupti sit, earum consequuntur praesentium! Mollitia velit ad corporis molestias?</p>
     <h2 id="title4">title4</h2>
     <p> paragraph4.<br/> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias, adipisci? Illum et esse ratione labore consequatur recusandae earum inventore sit laboriosam nemo dicta vero mollitia temporibus eaque sed, a aut! Eius iure est maioreseostemporibus consequatur inventore suscipit sit illum? Quos quia tempore molestiae rerum, ab sapiente odit necessitatibus molestias magnam similique iusto corporis. Aspernatur enim consequuntur voluptas rerum delectus. Necessitatibus ab officiisatnobis a repudiandae maiores totam dolor quo aliquam fugiat, ipsam corporis pariatur accusantium animi porro esse unde tenetur magnam minus. Ipsum dolore magnam mollitia eaque commodi praesentium reiciendis veniam, animi atque aliquam nesciuntexcepturiquam autem quas libero a asperiores facilis id dicta minus consectetur? Dolore explicabo quasi repellendus veniam nam est maiores minima in non? Blanditiis eius accusantium minima dolorem amet aut natus vitae incidunt reiciendis consecteturaliquidrem doloribus adipisci tempora voluptas impedit quia non quibusdam mollitia, similique tempore? Ut aspernatur accusamus enim nisi impedit cum quia maxime voluptas accusantium, optio, natus aperiam tempora. Voluptas, tempore dolor natusdebitisex, omnis nesciunt quaerat, non soluta porro nulla suscipit laboriosam beatae quidem accusantium. Odit, provident aliquam sit velit ex fuga saepe, molestias modi reiciendis facilis vel! Enim, saepe! Harum quae ut molestiae voluptatem cupiditatetotammodi fuga corrupti autem laborum illo dolorem, sequi accusamus dignissimos in. Animi, corrupti officiis cumque similique recusandae necessitatibus iusto quas dolorem, reprehenderit repellat ullam sed inventore sint dolorum tempora eaqueporro exrem. Tempora, aliquid quod numquam, aliquam quas, illum saepe corrupti earum molestiae perferendis officiis unde dolores! Ducimus rem, maxime animi numquam debitis officiis suscipit in ex explicabo quaerat ipsa? Iste nihil asperioresnesciunt,consequuntur ab, dolores facere minima nisi aperiam beatae neque commodi suscipit saepe modi voluptatibus minus perspiciatis vel quia quaerat cum obcaecati, expedita harum. Illum harum, nihil quaerat soluta cumque atque rem perferendisveritatissaepe hic laborum mollitia earum alias incidunt inventore ab eligendi recusandae odio quis accusamus voluptatem. Molestias unde amet totam fugiat veritatis? Qui non voluptatum ullam eos. Soluta minus voluptatum veritatis perspiciatis,ducimus quamhic ea sit autem eligendi blanditiis optio at ipsam. Provident pariatur vel eos tempora velit numquam debitis corrupti sit, earum consequuntur praesentium! Mollitia velit ad corporis molestias?</p>`

const codeExemple5 = {
    index:`         <a href="./home.html">Go to home page</a>`,
    home: codeExemple4,
}   
const buttonRefExemple5 = useRef(null);
const [codeExemple5Route , setCodeExemple5Route] = useState("index.html")         
const [codeDefault , setCodeDefault] = useState("")
const codeExemple5RouteHandle =()=>{
    setCodeExemple5Route("home.html");
    const jsxElement = React.createElement('div', {
        dangerouslySetInnerHTML: { __html: codeExemple4 },
      });
    setCodeDefault(jsxElement)
    buttonRefExemple5.current.style.display = "none"
}    
    
    return(
<>
    <h1 className="heading-style">HTML Anchor (a)</h1>
    <article className="mt-5">
        <h2 className="title-h2">1. مفهوم الروابط</h2>
        <p className="style_divv">
            الروابط هي جزء أساسي في صفحات الويب، حيث ان الويب تم إنشاؤه أصلاً ليكون بمثابة شبكة معلوماتية من الوثائق المرتبطة ببعضها البعض.<br/><br/>
            يمكننا إنشاء رابط بإستخدام الوسم <kbd>&lt;a&gt;</kbd> وهو اختصار لـ anchor. ونستخدم الخاصية <b>href</b> وهي اختصار لـ (Hypertext Reference) لتحديد رابط الصفحة التي نريد الذهاب إليها عند الضغط على الرابط.
        </p>
    </article>
    <article>
        <h2 className="title-h2">2. إضافة رابط في الصفحة</h2>
        <p className="style_divv">
            نستخدم الوسم &lt;a&gt; على هذا النحو <bdi><strong> &lt;a href="url"&gt;</strong> link_name <strong> &lt;/a&gt;</strong></bdi> لعرض رابط في الصفحة.
            <ul>
                <li>مكان الكلمة <b>link_name</b>&nbsp; نضع النص الذي نريده أن يظهر في الصفحة و الذي يمكن النقر عليه.</li>
                <li>مكان الكلمة <b>url</b> نضع الرابط الذي نريد توجيه المستخدم إليه عند النقر على النص الذي يظهر في الصفحة.</li>
            </ul> 
        </p>
        <CodeHighlighter code={code1} language="html" addclassName="mt-3 h-50 mb-3" copie={true}/>
        <div className="sum_exemple_style">
            <div className="mital"> متال:</div>
            <CodeHighlighter  code={codeExemple1} language="html" is_html={true} title="Anchor" addClass="mt-3 mb-3" copie={true}/>
            <Result title='Anchor' logo={props.html_logo}  route="file:///C:/Users/SURFACE%20BOOK/Desktop/html/index.html">
                <a href="https://www.google.com/">google.com</a>    
            </Result>
            <h4 className="green">عند النقر على رابط  يتم توجيه المستخدم إلى google </h4>
            <h4 className="mital">ملاحطة :</h4>
            <ul><li> عند النقر على رابط موجود في الصفحة نجد أنه يتم فتح الصفحة الجديدة مكان الصفحة الحالية كما لاحظنا في المثال.</li></ul>
        </div>
    </article>
    <article>
        <h2 className="title-h2">3. تحديد أين سيتم فتح الرابط</h2>
        <p className="style_divv">
            ماذا لو أحببت أن تفتح الروابط الخارجية في تبويبات جديدة في المتصفح، بدلاً من تحميلها في نفس التبويب كي تضمن أن موقعك مازال مفتوحاً أمام الزائر. هذا هو دور الخاصية <b>target</b>
        </p>
        <CodeHighlighter code={code2} language="html" addclassName="mt-3 mb-3" copie={true}/>
        <div className="sum_exemple_style">
            <div className="mital">متال : </div>
            <CodeHighlighter  code={codeExemple2} language="html" is_html={true} title="Anchor" addClass="mt-3 mb-3" copie={true}/>
            <Result title='Anchor' logo={props.html_logo}  route="file:///C:/Users/SURFACE%20BOOK/Desktop/html/index.html">
                <a href="https://www.google.com/" target="_blanck">google.com</a>    
            </Result>
            <h4 className="green">عند النقر على رابط  يتم توجيه المستخدم إلى google </h4>
            <h4 className="mital">ملاحطة :</h4>
            <ul><li> عند النقر على رابط موجود في الصفحة نجد أنه يتم فتح الصفحة الجديدة والإحتفاظ بصفحة الخاصة بي. قم بتحديد ما يناسبك  </li></ul>
        </div>
    </article>
    <article>
        <h2 className="title-h2">4. إظهار عنوان عند تمرير الماوس فوق الرابط</h2>
        <p className="style_divv">    
            في حال أردت إظهار تلميح عند تمرير الماوس فوق الرابط فيمكنك إضافة الخاصية title في الوسم <kbd> &lt;a&gt;</kbd> و تمرير التلميح الذي تريد عرضه كقيمة لها.
        </p>
        <CodeHighlighter code={code3} language="html" addclassName="mt-3 mb-3" copie={true}/>
        <div className="sum_exemple_style">
            <CodeHighlighter  code={codeExemple3} language="html" is_html={true} title="Anchor" addClass="mt-3 mb-3" copie={true}/>
            <Result title='Anchor' logo={props.html_logo}  route="file:///C:/Users/SURFACE%20BOOK/Desktop/html/index.html">
                <a href="https://www.google.com/" title="go to google" target="_blanck">google.com</a>    
            </Result>
        </div>
    </article>
    <article>
        <h2 className="title-h2">5. الروابط داخل نفس الصفحة</h2>
        <p className="style_divv">
            في حال أردت وضع رابط يوجه المستخدم لوسم محدد موجود في نفس الصفحة  يمكنك إعطاء الوسم <b>id</b> و عندها الرابط الذي نريده أن يوجه المستخدم لذاك الوسم يجب أن نضع في نهايته الرمز # يليه <b>id</b> العنصر. في المثال التالي قمنا بوضع رابط عند النقر عليه يقوم بنقل المستخدم لوسم محدد في نفس الصفحة.
        </p>
        <CodeHighlighter code={code4} language="html" addclassName="mt-3 mb-3" copie={true}/>
        <div className="sum_exemple_style">
            <div className="mital">متال : </div>
            <ul><li>قم بنقر للفهم على الروابط أسفله للفهم بشكل أفضل .</li></ul>
            <CodeHighlighter  code={codeExemple4} file_name="index.html" language="html" is_html={true} title="Anchor" addClass="mt-3 mb-3" copie={true}/>
            <Result title='Anchor' logo={props.html_logo}  route="file:///C:/Users/SURFACE%20BOOK/Desktop/html/index.html">
                <div style={{height:"400px",overflow:"auto"}}>
                    <a href="#title1">title1</a>&nbsp;&nbsp;
                    <a href="#title2">title2</a>&nbsp;&nbsp;
                    <a href="#title3">title3</a>&nbsp;&nbsp;
                    <a href="#title4">title4</a>&nbsp;&nbsp;
                    <h2 id="title1">title1</h2>

                    <p> paragraph1.<br/> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias, adipisci? Illum et esse ratione labore consequatur recusandae earum inventore sit laboriosam nemo dicta vero mollitia temporibus eaque sed, a aut! Eius iure est maioreseostemporibus consequatur inventore suscipit sit illum? Quos quia tempore molestiae rerum, ab sapiente odit necessitatibus molestias magnam similique iusto corporis. Aspernatur enim consequuntur voluptas rerum delectus. Necessitatibus ab officiisatnobis a repudiandae maiores totam dolor quo aliquam fugiat, ipsam corporis pariatur accusantium animi porro esse unde tenetur magnam minus. Ipsum dolore magnam mollitia eaque commodi praesentium reiciendis veniam, animi atque aliquam nesciuntexcepturiquam autem quas libero a asperiores facilis id dicta minus consectetur? Dolore explicabo quasi repellendus veniam nam est maiores minima in non? Blanditiis eius accusantium minima dolorem amet aut natus vitae incidunt reiciendis consecteturaliquidrem doloribus adipisci tempora voluptas impedit quia non quibusdam mollitia, similique tempore? Ut aspernatur accusamus enim nisi impedit cum quia maxime voluptas accusantium, optio, natus aperiam tempora. Voluptas, tempore dolor natusdebitisex, omnis nesciunt quaerat, non soluta porro nulla suscipit laboriosam beatae quidem accusantium. Odit, provident aliquam sit velit ex fuga saepe, molestias modi reiciendis facilis vel! Enim, saepe! Harum quae ut molestiae voluptatem cupiditatetotammodi fuga corrupti autem laborum illo dolorem, sequi accusamus dignissimos in. Animi, corrupti officiis cumque similique recusandae necessitatibus iusto quas dolorem, reprehenderit repellat ullam sed inventore sint dolorum tempora eaqueporro exrem. Tempora, aliquid quod numquam, aliquam quas, illum saepe corrupti earum molestiae perferendis officiis unde dolores! Ducimus rem, maxime animi numquam debitis officiis suscipit in ex explicabo quaerat ipsa? Iste nihil asperioresnesciunt,consequuntur ab, dolores facere minima nisi aperiam beatae neque commodi suscipit saepe modi voluptatibus minus perspiciatis vel quia quaerat cum obcaecati, expedita harum. Illum harum, nihil quaerat soluta cumque atque rem perferendisveritatissaepe hic laborum mollitia earum alias incidunt inventore ab eligendi recusandae odio quis accusamus voluptatem. Molestias unde amet totam fugiat veritatis? Qui non voluptatum ullam eos. Soluta minus voluptatum veritatis perspiciatis,ducimus quamhic ea sit autem eligendi blanditiis optio at ipsam. Provident pariatur vel eos tempora velit numquam debitis corrupti sit, earum consequuntur praesentium! Mollitia velit ad corporis molestias?</p>
                    <h2 id="title2">title2</h2>
                    <p> paragraph2.<br/> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias, adipisci? Illum et esse ratione labore consequatur recusandae earum inventore sit laboriosam nemo dicta vero mollitia temporibus eaque sed, a aut! Eius iure est maioreseostemporibus consequatur inventore suscipit sit illum? Quos quia tempore molestiae rerum, ab sapiente odit necessitatibus molestias magnam similique iusto corporis. Aspernatur enim consequuntur voluptas rerum delectus. Necessitatibus ab officiisatnobis a repudiandae maiores totam dolor quo aliquam fugiat, ipsam corporis pariatur accusantium animi porro esse unde tenetur magnam minus. Ipsum dolore magnam mollitia eaque commodi praesentium reiciendis veniam, animi atque aliquam nesciuntexcepturiquam autem quas libero a asperiores facilis id dicta minus consectetur? Dolore explicabo quasi repellendus veniam nam est maiores minima in non? Blanditiis eius accusantium minima dolorem amet aut natus vitae incidunt reiciendis consecteturaliquidrem doloribus adipisci tempora voluptas impedit quia non quibusdam mollitia, similique tempore? Ut aspernatur accusamus enim nisi impedit cum quia maxime voluptas accusantium, optio, natus aperiam tempora. Voluptas, tempore dolor natusdebitisex, omnis nesciunt quaerat, non soluta porro nulla suscipit laboriosam beatae quidem accusantium. Odit, provident aliquam sit velit ex fuga saepe, molestias modi reiciendis facilis vel! Enim, saepe! Harum quae ut molestiae voluptatem cupiditatetotammodi fuga corrupti autem laborum illo dolorem, sequi accusamus dignissimos in. Animi, corrupti officiis cumque similique recusandae necessitatibus iusto quas dolorem, reprehenderit repellat ullam sed inventore sint dolorum tempora eaqueporro exrem. Tempora, aliquid quod numquam, aliquam quas, illum saepe corrupti earum molestiae perferendis officiis unde dolores! Ducimus rem, maxime animi numquam debitis officiis suscipit in ex explicabo quaerat ipsa? Iste nihil asperioresnesciunt,consequuntur ab, dolores facere minima nisi aperiam beatae neque commodi suscipit saepe modi voluptatibus minus perspiciatis vel quia quaerat cum obcaecati, expedita harum. Illum harum, nihil quaerat soluta cumque atque rem perferendisveritatissaepe hic laborum mollitia earum alias incidunt inventore ab eligendi recusandae odio quis accusamus voluptatem. Molestias unde amet totam fugiat veritatis? Qui non voluptatum ullam eos. Soluta minus voluptatum veritatis perspiciatis,ducimus quamhic ea sit autem eligendi blanditiis optio at ipsam. Provident pariatur vel eos tempora velit numquam debitis corrupti sit, earum consequuntur praesentium! Mollitia velit ad corporis molestias?</p>
                    <h2 id="title3">title3</h2>
                    <p> paragraph3.<br/> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias, adipisci? Illum et esse ratione labore consequatur recusandae earum inventore sit laboriosam nemo dicta vero mollitia temporibus eaque sed, a aut! Eius iure est maioreseostemporibus consequatur inventore suscipit sit illum? Quos quia tempore molestiae rerum, ab sapiente odit necessitatibus molestias magnam similique iusto corporis. Aspernatur enim consequuntur voluptas rerum delectus. Necessitatibus ab officiisatnobis a repudiandae maiores totam dolor quo aliquam fugiat, ipsam corporis pariatur accusantium animi porro esse unde tenetur magnam minus. Ipsum dolore magnam mollitia eaque commodi praesentium reiciendis veniam, animi atque aliquam nesciuntexcepturiquam autem quas libero a asperiores facilis id dicta minus consectetur? Dolore explicabo quasi repellendus veniam nam est maiores minima in non? Blanditiis eius accusantium minima dolorem amet aut natus vitae incidunt reiciendis consecteturaliquidrem doloribus adipisci tempora voluptas impedit quia non quibusdam mollitia, similique tempore? Ut aspernatur accusamus enim nisi impedit cum quia maxime voluptas accusantium, optio, natus aperiam tempora. Voluptas, tempore dolor natusdebitisex, omnis nesciunt quaerat, non soluta porro nulla suscipit laboriosam beatae quidem accusantium. Odit, provident aliquam sit velit ex fuga saepe, molestias modi reiciendis facilis vel! Enim, saepe! Harum quae ut molestiae voluptatem cupiditatetotammodi fuga corrupti autem laborum illo dolorem, sequi accusamus dignissimos in. Animi, corrupti officiis cumque similique recusandae necessitatibus iusto quas dolorem, reprehenderit repellat ullam sed inventore sint dolorum tempora eaqueporro exrem. Tempora, aliquid quod numquam, aliquam quas, illum saepe corrupti earum molestiae perferendis officiis unde dolores! Ducimus rem, maxime animi numquam debitis officiis suscipit in ex explicabo quaerat ipsa? Iste nihil asperioresnesciunt,consequuntur ab, dolores facere minima nisi aperiam beatae neque commodi suscipit saepe modi voluptatibus minus perspiciatis vel quia quaerat cum obcaecati, expedita harum. Illum harum, nihil quaerat soluta cumque atque rem perferendisveritatissaepe hic laborum mollitia earum alias incidunt inventore ab eligendi recusandae odio quis accusamus voluptatem. Molestias unde amet totam fugiat veritatis? Qui non voluptatum ullam eos. Soluta minus voluptatum veritatis perspiciatis,ducimus quamhic ea sit autem eligendi blanditiis optio at ipsam. Provident pariatur vel eos tempora velit numquam debitis corrupti sit, earum consequuntur praesentium! Mollitia velit ad corporis molestias?</p>
                    <h2 id="title4">title4</h2>
                    <p> paragraph4.<br/> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias, adipisci? Illum et esse ratione labore consequatur recusandae earum inventore sit laboriosam nemo dicta vero mollitia temporibus eaque sed, a aut! Eius iure est maioreseostemporibus consequatur inventore suscipit sit illum? Quos quia tempore molestiae rerum, ab sapiente odit necessitatibus molestias magnam similique iusto corporis. Aspernatur enim consequuntur voluptas rerum delectus. Necessitatibus ab officiisatnobis a repudiandae maiores totam dolor quo aliquam fugiat, ipsam corporis pariatur accusantium animi porro esse unde tenetur magnam minus. Ipsum dolore magnam mollitia eaque commodi praesentium reiciendis veniam, animi atque aliquam nesciuntexcepturiquam autem quas libero a asperiores facilis id dicta minus consectetur? Dolore explicabo quasi repellendus veniam nam est maiores minima in non? Blanditiis eius accusantium minima dolorem amet aut natus vitae incidunt reiciendis consecteturaliquidrem doloribus adipisci tempora voluptas impedit quia non quibusdam mollitia, similique tempore? Ut aspernatur accusamus enim nisi impedit cum quia maxime voluptas accusantium, optio, natus aperiam tempora. Voluptas, tempore dolor natusdebitisex, omnis nesciunt quaerat, non soluta porro nulla suscipit laboriosam beatae quidem accusantium. Odit, provident aliquam sit velit ex fuga saepe, molestias modi reiciendis facilis vel! Enim, saepe! Harum quae ut molestiae voluptatem cupiditatetotammodi fuga corrupti autem laborum illo dolorem, sequi accusamus dignissimos in. Animi, corrupti officiis cumque similique recusandae necessitatibus iusto quas dolorem, reprehenderit repellat ullam sed inventore sint dolorum tempora eaqueporro exrem. Tempora, aliquid quod numquam, aliquam quas, illum saepe corrupti earum molestiae perferendis officiis unde dolores! Ducimus rem, maxime animi numquam debitis officiis suscipit in ex explicabo quaerat ipsa? Iste nihil asperioresnesciunt,consequuntur ab, dolores facere minima nisi aperiam beatae neque commodi suscipit saepe modi voluptatibus minus perspiciatis vel quia quaerat cum obcaecati, expedita harum. Illum harum, nihil quaerat soluta cumque atque rem perferendisveritatissaepe hic laborum mollitia earum alias incidunt inventore ab eligendi recusandae odio quis accusamus voluptatem. Molestias unde amet totam fugiat veritatis? Qui non voluptatum ullam eos. Soluta minus voluptatum veritatis perspiciatis,ducimus quamhic ea sit autem eligendi blanditiis optio at ipsam. Provident pariatur vel eos tempora velit numquam debitis corrupti sit, earum consequuntur praesentium! Mollitia velit ad corporis molestias?</p>
                </div>
            </Result>
        </div>
    </article>
    <article>
        <h2 className="title-h2">6. ربط صفحة  بصفحة اخرى داخل موقعك </h2>
        <p className="style_divv">
            في حال أردت وضع رابط يوجه المستخدم لصفحة أخرا داخل موقعك عند نقر قم بوضع مصار الصفحة التانية وإسم ومتداد الملف داخل السمة <b>href</b>  
        </p>
        <CodeHighlighter code={code5} language="html" addclassName="mt-3 mb-3" copie={true}/>
        <div className="sum_exemple_style">
            <div className="mital">متال : </div>
            <CodeHighlighter file_name="index.html" code={codeExemple5.index} language="html" is_html={true} title="Anchor" addClass="mt-3 mb-3" copie={true}/>
            <CodeHighlighter file_name="home.html" code={codeExemple5.home} language="html" is_html={true} title="Anchor" addClass="mt-3 mb-3" copie={true}/>
            <Result title='Anchor'url_change={codeExemple5Route} route="file:///C:/Users/SURFACE%20BOOK/Desktop/html/"  logo={props.html_logo}>
                <div style={{height:"400px",overflow:"auto"}}>
                    <a ref={buttonRefExemple5} onClick={codeExemple5RouteHandle}  className="text-primary">Go to home page</a>
                    {codeDefault}
                </div>
            </Result>
            <h4 className="green">  بعد تشغيل كود الصفحة html2.html </h4>
            <h4 className="green">  عند نقر على رابط </h4>
        </div>
        <ul>
            <li> بعد النقر على الرابط الذي يحمل <q>href=</q>html.html يتم توجيه إلى html.html .</li>
            <li> إن أردت الإحتفاظ بالصفحة الأولى إستعمل السمة  target .</li>
        </ul> 
    </article>
</>
)
}
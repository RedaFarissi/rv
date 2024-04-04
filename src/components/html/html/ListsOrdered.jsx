import { CodeHighlighter ,  Result} from "../../path";

export default function ListsOrdered(props){
    const code = `<ol>
    <li> content </li>
    <li> content </li>
 </ol>`
    const codeExemple1 = `   <ol style="font-weight: 600">
        <li>html</li>
        <li>css</li>
        <li>js</li>
        <li>php</li>
    </ol>`
    const codeExemple2 = `    <h2><bdi>type="I"</bdi></h2>
    <ol type="I" style="font-weight: 500"><li>html</li><li>css</li><li>js</li><li>php</li></ol><hr/>
    <h2><bdi>type="i"</bdi></h2>
    <ol type="i" style="font-weight: 500"><li>html</li><li>css</li><li>js</li><li>php</li></ol><hr/>
    <h2><bdi>type="a"</bdi></h2>
    <ol type="a" style="font-weight: 500"><li>html</li><li>css</li><li>js</li><li>php</li></ol><hr/>
    <h2><bdi>type="A"</bdi></h2>
    <ol type="A" style="font-weight: 500"><li>html</li><li>css</li><li>js</li><li>php</li></ol><hr/>` 
    const codeExemple3 = `      <ol start="7" style="font-weight: 500">
        <li>html</li>
        <li>css</li>
        <li>js</li>
        <li>php</li>
    </ol>
    <hr/>
    <ol start="3" type="a" style="font-weight: 500">
        <li>html</li>
        <li>css</li>
        <li>js</li>
        <li>php</li>
    </ol>`
    const codeExemple4 = `      <ol reversed style="font-weight: 500">
        <li>html</li>
        <li>css</li>
        <li>js</li>
        <li>php</li>
    </ol>`
    return(
<>
    <h1 className="heading-style">HTML ListsOrdered (ol)</h1>
    <article className="mt-5">
        <h2 className="title-h2">1. شرح الوسم ol </h2>
        <p className="style_divv">
            نستخدم الوسم <kbd>&lt;ol&gt;</kbd> لعرض قائمة مرتبة <b>Ordered List</b> في الصفحة و نقصد بذلك عرض مجموعة عناصر مع إظهار رقم كل عنصر تم إدخاله فيها. من أهم ما يميز هذه القوائم أنه يمكنك عرض الترقيم بالشكل الذي تريده, فمثلاً يمكنك عرض أرقام عادية, أحرف أبجدية, أرقام رومانية <br/>
            يجب كتابة محتوى الفقرات أو العناوين  الذي تريد ترقيمها داخل الوسم <kbd>&lt;li&gt;</kbd>
        </p>
        <CodeHighlighter  code={code} language="html"  addclassName="mt-3 mb-3" copie={true}/>
        <div className="sum_exemple_style">
            <div className="mital">مثال : </div>
            <CodeHighlighter  code={codeExemple1} language="html" is_html={true} title="Lists Ordered" addClass="mt-3 mb-3" copie={true}/>
            <Result title='Lists Ordered' logo={props.html_logo}  route="file:///C:/Users/SURFACE%20BOOK/Desktop/html/index.html">
                <ol style={{fontWeight: "600"}}>
                    <li className='text-dark'>html</li>
                    <li className='text-dark'>css</li>
                    <li className='text-dark'>js</li>
                    <li className='text-dark'>php</li>
                </ol>
            </Result>
        </div>
    </article>
    <article>
    <h2 className="title-h2">2. السمات المستعملة </h2>
    <h5> 1 - السمة type </h5>
    <p className="style_divv" >
        يمكن إستعمال السمة <b>type</b> مع الوسم <kbd>&lt;ol&gt;</kbd> وذالك لتحديد نوع الذي تريد إستخدامه من قوائم التشغيل التالية :(1,a,A,i تم I)
        <ul>
            <li style={{marginBottom:"9px"}}><b>1</b> هذه هي القيمة الافتراضية. يحدد عناصر القائمة في رقم عشري. (… 4 ، 3 ، 2 ، 1).</li>
            <li style={{marginBottom:"9px"}}><b>a</b> تحدد عناصر القائمة بأحرف صغيرة مرتبة أبجديًا. (… a, b, c, d )</li>
            <li style={{marginBottom:"9px"}}><b>A</b> تحدد عناصر القائمة بأحرف كبيرة مرتبة أبجديًا. (…A ، B ، C ، D)</li>
            <li style={{marginBottom:"9px"}}><b>i</b> تحدد عناصر القائمة بترتيب رقمي صغير. (…i, ii, iii, iv, v, vi)</li>
            <li style={{marginBottom:"9px"}}><b>I</b> تحدد عناصر القائمة بترتيب رقمي كبير (… I، II، III، IV، V، VI ) </li>
        </ul>   
    </p>
    <div className="sum_exemple_style">
        <div className="mital">مثال : </div>
        <CodeHighlighter  code={codeExemple2} language="html" is_html={true} title="Lists Ordered" addClass="mt-3 mb-3" copie={true}/>
        <Result title='Lists Ordered' logo={props.html_logo}  route="file:///C:/Users/SURFACE%20BOOK/Desktop/html/index.html">
            <h2><bdi>type="I"</bdi></h2>
            <ol type="I" style={{fontWeight: "500"}}><li className='text-dark'>html</li><li className='text-dark'>css</li><li className='text-dark'>js</li><li className='text-dark'>php</li></ol><hr/>
            <h2><bdi>type="i"</bdi></h2>
            <ol type="i" style={{fontWeight: "500"}}><li className='text-dark'>html</li><li className='text-dark'>css</li><li className='text-dark'>js</li><li className='text-dark'>php</li></ol><hr/>
            <h2><bdi>type="a"</bdi></h2>
            <ol type="a" style={{fontWeight: "500"}}><li className='text-dark'>html</li><li className='text-dark'>css</li><li className='text-dark'>js</li><li className='text-dark'>php</li></ol><hr/>
            <h2><bdi>type="A"</bdi></h2>
            <ol type="A" style={{fontWeight: "500"}}><li className='text-dark'>html</li><li className='text-dark'>css</li><li className='text-dark'>js</li><li className='text-dark'>php</li></ol><hr/>
        </Result>
    </div>
    <h5> 2 - السمة start </h5>
    <p className="style_divv">
    تحدد سمة <b>start</b>  قيمة البداية لعنصر القائمة الأول في قائمة مرتبة  <kbd>&lt;ol&gt;</kbd> .<br/>
    هذه القيمة هي دائمًا عدد صحيح ، حتى عندما يكون نوع الترقيم أحرفًا أو رومانًا. أنضر المتال 
    </p>
    <div className="sum_exemple_style">
        <div className="mital">مثال : </div>
        <CodeHighlighter  code={codeExemple3} language="html" is_html={true} title="Lists Ordered" addClass="mt-3 mb-3" copie={true}/>
        <Result title='Lists Ordered' logo={props.html_logo}  route="file:///C:/Users/SURFACE%20BOOK/Desktop/html/index.html">
            <ol start="7" style={{fontWeight: "500"}}>
                <li className='text-dark'>html</li>
                <li className='text-dark'>css</li>
                <li className='text-dark'>js</li>
                <li className='text-dark'>php</li>
            </ol>
            <hr/>
            <ol start="3" type="a" style={{fontWeight: "500"}}>
                <li className='text-dark'>html</li>
                <li className='text-dark'>css</li>
                <li className='text-dark'>js</li>
                <li className='text-dark'>php</li>
            </ol> 
        </Result>
    </div>
    <h5> 3 - السمة reversed </h5>
    <div className="style_divv">
    السمة <b>reversed</b> هي سمة منطقية عندما تكون موجود داخل الوسم <kbd>&lt;ol&gt;</kbd> <br/>
      تحدد أن ترتيب القائمة يجب أن يكون تنازليًا (9 ، 8 ، 7 ...) ، بدلاً من تصاعدي (1 ، 2 ، 3 ...).
    </div>
    <div className="sum_exemple_style">
        <div className="mital">مثال : </div>
        <CodeHighlighter file_name="index.html" code={codeExemple4} language="html" is_html={true} title="Lists Ordered" addClass="mt-3 mb-3" copie={true}/>
        <Result title='Lists Ordered' logo={props.html_logo}  route="file:///C:/Users/SURFACE%20BOOK/Desktop/html/index.html">
            <ol reversed style={{fontWeight: "500"}}>
                <li className='text-dark'>html</li>
                <li className='text-dark'>css</li>
                <li className='text-dark'>js</li>
                <li className='text-dark'>php</li>
            </ol>
        </Result>
    </div>
    </article>
</>
    )
}
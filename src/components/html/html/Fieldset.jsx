import { CodeHighlighter ,  Result} from "../../path";

export default function Fieldset(props){
    const code = `<fieldset> 
        <legend> title </legend>
        HTML content
</fieldset>`
   const codeExemple = `    <fieldset> 
        <legend> title :</legend>
        <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. 
            Officia quisquam quam cumque quidem, similique voluptates rerum unde ab, 
            animi quae veniam nostrum mollitia veritatis quod molestiae 
            dolore harum modi blanditiis.
        </p>        
    </fieldset>`
    return(
<section className="section-conetent">
    <h1 className="heading-style"> HTML fieldset </h1>
    <article className="mt-5">
        <p className="style_divv mt-5">
            يتم استخدام العلامة <kbd>&lt;fieldset&gt;</kbd> لتجميع العناصر ذات الصلة في نموذج.<br/>
            ترسم العلامة <kbd>&lt;fieldset&gt;</kbd> مربع حول العناصر ذات الصلة.<br/>
            يتم استخدام العلامة <kbd>&lt;legend&gt;</kbd> لتعريف تسمية توضيحية <kbd>&lt;fieldset&gt;</kbd>.
        </p>
        <CodeHighlighter  code={code} language="html"  addclassName="mt-3 mb-3" copie={true}/>
        <div className="sum_exemple_style">
            <div className="mital">مثال : </div>
            <CodeHighlighter file_name="index.html" code={codeExemple} language="html" is_html={true} title="Fieldset" addClass="mt-3 mb-3" copie={true}/>
            <Result title='Fieldset' logo={props.html_logo}  route="file:///C:/Users/SURFACE%20BOOK/Desktop/html/index.html">
                <div className="p-0 m-2 mt-5" style={{border:"3px solid gray",position:"relative"}}>
                    <div className="ms-4 ps-1 pe-2 mt-3" style={{backgroundColor:"#ffffff",width:"max-content",position:"absolute",top:"-32px"}}> title :</div>
                    <div className="px-4 py-3">
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. 
                        Officia quisquam quam cumque quidem, similique voluptates rerum unde ab, 
                        animi quae veniam nostrum mollitia veritatis quod molestiae 
                        dolore harum modi blanditiis.
                    </div>        
                </div>
            </Result>
        </div>
    </article>
</section>
)
}
import { CodeHighlighter ,  Result} from "../../path";
import images from "../imagesCss";

export default function ClipPath(props){
    return(
    <section className="section-conetent">
            <h1 className="heading-style heading-style-css-color"> CSS Clip-Path </h1>
        
            <h3>1- clip-path </h3>
            <div className="style_divv">
                تسمح الخاصية <b>clip-path</b>  بقص عنصر إلى شكل أساسي أو إلى مصدر SVG.<br/>
                تستقبل الخاصية <b>clip-path</b> عدة قيم ولاكن هناك عدة مواقع تساعدك على تقطيع العناصر  بطريقة التي تريد  . <br/>
                هاذه الفقرة سوف تتعلم عن طريقة إستعمال الموقع التالي قم بنقر <a href="https://bennettfeely.com/clippy/" target="_blanck">هنا</a> لذهاب إلى موقع المساعد .
            </div>
            <div className="mital"> متال  : </div>
            <img src={images.css36_clip_path5} className="img"/>
            <div className="style-result">
                <div style={{display:"flex",flexWrap:"wrap"}}>
                    <div className="parent">
                        <div className="child_test test"></div>
                    </div>   
                    <div className="parent">
                        <div className="child_test test2"></div>
                    </div>
                    <div className="parent">
                        <div className="child_test test3"></div>
                    </div>
                    <div className="parent">
                        <div className="child_test test4"></div>
                    </div>
                </div>  
            </div>
            <div className="mital"> متال 2 : </div>
            <img src={images.css36_clip_path6} className="img"/>
            <div className="style-result">
                <div style={{display:"flex",flexWrap:"wrap"}}>
                    <div className="parent">
                        <div className="child_test testing"> </div>
                    </div>
                    <div className="parent">
                        <div className="child_test testing2"> </div>
                    </div> 
                    <div className="parent">
                        <div className="child_test testing3"> </div>
                    </div>   
                </div>  
            </div>
    
            <h3>2-  متال  تفسيري للموقع أعلاه : </h3>
            <div className="sum_exemple_style">
                <ul><li>عند الدخول إلى الموقع سوف تجد الصفحة أسفله بعد تحديد القص المناسب لك قم بنسخ الأكواد أسفل الصفحة ووضعها داخلل أكواد <b>CSS</b> للعنصر الخاص بك .</li></ul>
                <img src={images.css36_clip_path} className="img"/>
            </div>
            <div className="mital"> متال : </div>
            <img src={images.css36_clip_path2} className="img"/>
            <img src={images.css36_clip_path2_2} className="img"/>
            <div className="mital"> متال 2 : </div>
            <img src={images.css36_clip_path3} className="img"/>
            <img src={images.css36_clip_path3_2} className="img"/>
            <div className="mital"> متال 3 : </div>
            <img src={images.css36_clip_path4} className="img"/>
            <img src={images.css36_clip_path4_2} className="img"/>
    </section>
    )
}
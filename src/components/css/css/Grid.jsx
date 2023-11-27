import { CodeHighlighter ,  Result} from "../../path";
import images from "../imagesCss";

export default function Grid(props){
    return(
<section className="section-conetent">
    <h1 className="heading-style heading-style-css-color"> CSS Grid </h1>
    <article>  
        <h2 className="title-h2">1. display grid</h2>
        <div className="style_divv">
            تستعمل الخاصية <b>display</b> مع القيمة <b>grid</b> ويتم إضافة الخاصية للعنصر لأب وذالك من اجل التحكم بالعناصر الأبناء .<br/>
            بالمحاداة مع الخاصية <b>display</b> مع القيمة <b>grid</b> تستعمل الخاصية <b>grid-template-columns</b> وذالك من أجل التحكم بالعناصر الأبناء 
            <div className="codeStudio alert bg-dark OBject" dir="ltr" style={{marginTop:"9px"}}>
                <b style={{color:"lightskyblue"}}>display</b> : <span style={{color:"orange"}}>grid</span>;<br/>
                <b style={{color:"lightskyblue"}}>grid-template-columns</b> : <span style={{color:"orange"}}>auto auto 25px</span>; <br/> 
            </div>
        </div>
        <div className="sum_exemple_style">
        <div className="mital">متال : </div>
        <img src={images.css51_grid} className="img"/>
        <img src={images.css51_grid_2} className="img"/>
        </div>
        <div className="sum_exemple_style">
        <div className="mital">متال 2 : </div>
        <img src={images.css51_grid2} className="img"/>
        <img src={images.css51_grid2_2} className="img"/>
        </div>
    </article>
<h3>2. gap</h3>
<div className="style_divv">
    تحدد الخاصية <b>gap</b> حجم الفجوة بين الصفوف والأعمدة .<br/>
    <div className="codeStudio alert bg-dark OBject" dir="ltr" style={{marginTop:"9px"}}>
        <b style={{color:"lightskyblue"}}>display</b> : <span style={{color:"orange"}}>grid</span>;<br/>
        <b style={{color:"lightskyblue"}}>grid-template-columns</b> : <span style={{color:"orange"}}>auto auto 25px</span>; <br/>
        <b style={{color:"lightskyblue"}}>gap</b> : <span style={{color:"orange"}}>9px</span>; <br/>    
    </div>
</div>
<div className="mital">متال : </div>
<img src={images.css51_grid3} className="img"/>
<img src={images.css51_grid3_2} className="img"/>
<div className="mital">متال 2 : </div>
<img src={images.css51_grid4} className="img"/>
<img src={images.css51_grid4_2} className="img"/>
<div className="mital">متال 3 : </div>
<img src={images.css51_grid5} className="img"/>
<img src={images.css51_grid5_2} className="img"/>
</section>
    )
}
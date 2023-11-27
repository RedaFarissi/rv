import { CodeHighlighter ,  Result} from "../../path";
import images from "../imagesCss";

export default function Focus(props){
    return(
<section className="section-conetent">
    <h1 className="heading-style heading-style-css-color"> CSS Focus </h1>
    <article>
        <div className="style_divv mt-5">
            تستخدم الخاصية <b>focus</b>  في لغة <b>CSS</b> لإستهداف عنصر عندما يتلقى التركيز ( يتم تنشيطه عند النقر ).<br/>
            غالبا ما يتم إستعمال الخاصية <b>focus</b> مع وسوم الإدخال  .  
        </div>
        <div className="sum_exemple_style">
        <div className="mital">متال  :  </div>
        <ul><li> أنقر على أزرار الإدخال لفهم بشكل أفضل عن إستخدامات الخاصية focus </li></ul>
        <img src={images.css26_focus} className="img"/>
        <div className="style-result" style={{miHeight:"15vh"}}>
            <input type="text" value="style1 focus" id="iNpuTT"/>
            <input type="text" value="style2 focus" id="iNpuTT2"/>
        </div>
        </div>
        <div className="sum_exemple_style">
        <div className="mital">متال 2 : </div>
        <ul><li> يمكنك أيضا تغيير خصائص CSS بعد إضافة الخاصية focus  </li></ul>
        <img src={images.css26_focus2} className="img"/>
        <div className="style-result" style={{miHeight:"15vh"}}>
            <textarea type="text" id="NTT"> textarea:focus click ici  </textarea>
        </div>
        </div>
    </article>
</section>
)
}
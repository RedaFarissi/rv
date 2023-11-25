import images from "../imagesCss";

export default function Padding(props){
    // function padding(value){
    //     document.getElementById("padding").style.padding = value;
    //     document.getElementById("padding-result").innerHTML  = value +";";
    //   }
    //   document.getElementById("none1").click()
    
    return(
<section className="section-conetent">
    <h1 className="heading-style heading-style-css-color"> CSS Padding </h1>
    <article>
        <h2 className="title-h2"> 1 - الجوانب الداخلية -  padding </h2>
        <div className="style_divv mt-5">
            يتم استخدام الخاصية <b>padding</b> في لغة  <b>CSS</b> لإنشاء مساحة حول محتوى عنصر داخل <b>border</b> في عنصر محدد .<br/>
            مع <b>CSS</b>، لديك السيطرة الكاملة على <b>padding</b> . توجد خصائص لإعداد <b>padding</b> لكل جانب من عناصر (أعلى، يمين، أسفل، ويسارا).
        </div>
        <div className="sum_exemple_style">
            <div className="mital">متال :  </div>
            <img src={images.css4_padding} alt="padding exemple" className="img"/>
            <img src={images.css4_padding_2} alt="padding exemple" className="img"/>
        </div>
        <ul>
            <li> في المتال أعلاه نلاحض أنه تم إعطاء قيمتين لل <b>padding</b> .</li>
            <li> القيمة الأولى تشمل <b>padding-top</b> و <b>padding-bottom</b> .</li>
            <li> القيمة التانية تخص <b>padding-left</b> و <b>padding-right</b>.</li>
        </ul>
    </article>
    <article>
        <h2 className="title-h2"> 2 - الجوانب الفردية -  padding </h2>
        <div className="style_divv">
            CSS له خصائص لتحديد <b>padding</b>  لكل جانب من العناصر :<br/>
            <ul>
                <li><b>padding-top</b></li>
                <li><b>padding-right</b></li>
                <li><b>padding-bottom</b></li>
                <li><b>padding-left</b></li>
            </ul>
        </div>
        <div className="sum_exemple_style">
        <div className="mital">متال :  </div>
        <img src={images.css4_padding2} alt="padding exemple" className="img"/>
        <img src={images.css4_padding2_2} alt="padding exemple" className="img"/>
        </div>
        <div className="sum_exemple_style">
        <div className="mital">متال 2 :  </div>
        <ul><li>إذا كان للخاصية padding قيمة واحدة فجميع  لجوانب سوف تأخد تلك القيمة .</li></ul>
        <img src={images.css4_padding3} alt="padding exemple" className="img"/>
        <img src={images.css4_padding3_2} alt="padding exemple" className="img"/>
        </div>
        {/* <div className="mital">متال 3 :  </div>
        <ul><li> قم بنقر على الأزرار أسفله لتغيير قيمة الخاصية <b>padding</b> للفهم بشكل أفضل .</li></ul>
        <div id="padding_exemple" className="alert p-4 rounded m-auto border border-primary border-2 text-dark" dir="ltr">
            <div id="input_radio_box" className="border border-secondary rounded bg-light p-3">
              <div className="h3"> padding </div>
              <div>
                <input type="radio" name="bo-sh" onclick="padding(this.value)"  className="pad" value="1em"id="none1" /> 1em <br/>
                <input type="radio" name="bo-sh" onclick="padding(this.value)"  className="pad" value="4% 0"/> 4% 0<br/>
                <input type="radio" name="bo-sh" onclick="padding(this.value)"  className="pad" value="10px 50px 20px"/> 10px 50px 20px<br/>
                <input type="radio" name="bo-sh" onclick="padding(this.value)"  className="pad" value="10px 50px 30px 0"/> 10px 50px 30px 0<br/>
                <input type="radio" name="bo-sh" onclick="padding(this.value)"  className="pad" value="0px 60px"/> 0px 60px<br/>
                <input type="radio" name="bo-sh" onclick="padding(this.value)"  className="pad" value="0"/> 0<br/>
              </div>
              <div id="Code" className="mt-4 w-100">
                  <div className="h3"> Code: </div>
                  <div className="border py-2 ps-2 w-100">
                      <span style="font-weight:500;">padding : </span> <span id="padding-result" style="font-weight:500"></span>
                  </div>
              </div>
            </div>
            <div className="border bg-light border-secondary" id="padding"> 
                <div className="h2"> Result : </div>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.<br/>
                Facere dolor exercitationem repellat dolore .
            </div>
        </div> */}
    </article>

</section>
    )
}
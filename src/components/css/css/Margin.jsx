import images from "../imagesCss";

export default function Margin(props){
    // function margin(value){
    //     document.getElementById("margin").style.margin = value;
    //     document.getElementById("margin-result").innerHTML  = value +";";
    //   }
    //   document.getElementById("noneM").click()
    return(
<section className="section-conetent">
    <h1 className="heading-style heading-style-css-color"> CSS Margin </h1>
    <article>
        <div class="style_divv mt-5">
            يتم استخدام الخاصية <b>margin</b> في لغة  <b>CSS</b> لإنشاء مساحة حول محتوى عنصر خارج ال <b>border</b> في عنصر محدد .<br/>
            مع <b>CSS</b>، لديك السيطرة الكاملة على <b>margin</b> . توجد خصائص لإعداد <b>margin</b> لكل جانب من عناصر (أعلى، يمين، أسفل، ويسارا).
        </div>
        <div class="sum_exemple_style">
        <div class="mital">متال :  </div>
        <img src={images.css5_margin} class="img"/>
        <img src={images.css5_margin_2} class="img"/>
        <ul>
            <li> في المتال أعلاه نلاحض أنه تم إعطاء قيمتين لل <b>margin</b> .</li>
            <li> القيمة الأولى تشمل <b>margin-top</b> و <b>margin-bottom</b> .</li>
            <li> القيمة التانية تخص <b>margin-left</b> و <b>margin-right</b>.</li>
        </ul>
        </div>
    </article>
    <article>
        <h2 className="title-h2">1.  الجوانب الفردية -  margin </h2>
        <div class="style_divv">
          <b>CSS</b> له خصائص لتحديد <b>margin</b>  لكل جانب من العناصر :<br/>
            <ul>
                <li>margin-top</li>
                <li>margin-right</li>
                <li>margin-bottom</li>
                <li>margin-left</li>
            </ul>
        </div>
        <div class="sum_exemple_style">
        <div class="mital">متال :  </div>
        <img src={images.css5_margin2} class="img"/>
        <img src={images.css5_margin2_2} class="img"/>
        </div>
        <br/>
        <div class="sum_exemple_style">
        <div class="mital">متال 2 :  </div>
        <ul><li>إذا كان للخاصية <b>margin</b> قيمة واحدة فجميع  لجوانب سوف تأخد تلك القيمة .</li></ul>
        <img src={images.css5_margin3} class="img"/>
        <img src={images.css5_margin3_2} class="img"/>
        </div>
        <br/>
    </article>
    <article>
        <h2 className="title-h2">2. الخاصية margin مع القيمة auto </h2>
        <div class="style_divv">
            تستخدم القيمة  <b>auto</b> مع الخاصية <b>margin</b> لجعل العنصر وسط الصفحة أو وسط العنصر الأب إذا كان <div class=""></div> 
        </div>
        <div class="sum_exemple_style">
        <div class="mital">متال :  </div>
        <img src={images.css5_margin4} class="img"/>
        <img src={images.css5_margin4_2} class="img"/>
        </div>
        <div class="sum_exemple_style">
        <div class="mital">متال 2 :  </div>
        <img src={images.css5_margin5} class="img"/>
        <img src={images.css5_margin5_2} class="img"/>
        </div>
    </article>

{/* <h3>3. متال تفاعلي توضيحي .  </h3>
<ul><li> قم بنقر على الأزرار أسفله لتغيير قيمة الخاصية <b>margin</b>  و لفهم بشكل أفضل .</li></ul>
<div id="margin_exemple" class="alert p-4 rounded m-auto border border-primary border-2 text-dark" dir="ltr">
    <div id="input_radio_box" class="border border-secondary rounded bg-light p-3">
        <div class="h3"> margin </div>
        <div>
            <input type="radio" name="bo-sh" onclick="margin(this.value)"  class="mar" value="35px" id="noneM" /> 35px <br/>
            <input type="radio" name="bo-sh" onclick="margin(this.value)"  class="mar" value="12%"/> 10% 0<br/>
            <input type="radio" name="bo-sh" onclick="margin(this.value)"  class="mar" value="10px 50px 20px"/> 10px 50px 20px<br/>
            <input type="radio" name="bo-sh" onclick="margin(this.value)"  class="mar" value="10px 50px 30px 0"/> 10px 50px 30px 0<br/>
            <input type="radio" name="bo-sh" onclick="margin(this.value)"  class="mar" value="20% 60px"/> 20% 60px<br/>
            <input type="radio" name="bo-sh" onclick="margin(this.value)"  class="mar" value="auto"/> auto <br/>
            <input type="radio" name="bo-sh" onclick="margin(this.value)"  class="mar" value="0"/> 0<br/>
        </div>
        <div id="Code" class="mt-4 w-100">
          <div class="h3"> Code: </div>
          <div class="border py-2 ps-2 w-100" >
              <span style="font-weight: 500;">margin:</span> <span id="margin-result" style="font-weight: 500"></span>
          </div>
        </div>
    </div>
    <div class="border bg-light border-secondary" id="Margin"> 
        <div class="bg-secondary align-self-start p-3 fs-5 text-light" id="margin"> margin </div>
    </div>
</div> */}

    </section>
        )
}
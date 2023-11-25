

import { CodeHighlighter ,  Result} from "../../path";
import images from "../imagesCss";

export default function TextAlign(props){
  // document.getElementById("noneT").click()
  // document.getElementById("noneT2").click()
  // function text_align(value){
  //   document.getElementById("text_align").style.textAlign = value
  //   document.getElementById("text_align_result").innerHTML = value + ";"
  // }
  // function text_align2(value){
  //   document.getElementById("pp").style.textAlign = value
  //   document.getElementById("text_align_result2").innerHTML = value + ";"
  // }

    return(
<section className="section-conetent">
    <h1 className="heading-style heading-style-css-color"> CSS Text-Align </h1>
    <article>
        <div className="style_divv mt-5">
            تحدد خاصية <b>text-align</b>   المحاذاة الأفقية للنص في العنصر . بحيت يمكنك التحكم في العناصر فالخاصية <b>text-align</b> تمكنك من تحديد أين تريد عرض العنصر يمين أو اليسار أو وسط الصفحة
        </div>
        <div className="sum_exemple_style">
        <div className="mital">متال  :  </div>
        <img src={images.css19_text_align} className="img"/>
        <div className="style-result">
            <h2 id="h2">CSS text-align Example</h2>
            <p className="date">May, 2014</p>
            <p className="main">
              In my younger and more vulnerable years my father gave me some
              advice that I've been turning over in my mind ever since. 
              'Whenever you feel like criticizing anyone,' he told me, 
              'just remember that all the people in this world haven't had the advantages that you've had.'
            </p>
            <p>
              <b>Note:</b> Resize the browser window to see how the value "justify" works.
            </p>
        </div>
        </div>
    </article>

{/*
<div className="mital">متال  2 :  </div>

<ul><li> قم بنقر على الأزرار أسفله للفهم بشكل أفضل عن الخاصية <b>text-align</b>  .</li></ul>
<div  id="textAlign_exemple" className="alert p-4 rounded m-auto border border-primary border-2 text-dark" dir="ltr">
  <div id="input_radio_box" className="border border-secondary rounded bg-light p-3">
    <div className="h2"> text-align : </div>  
    <div className="h6">1- text-align for heading</div>
    <div className="border p-1">
      <input type="radio" name="bo-sh" onclick="text_align(this.value)"  className="mar" value="left" id="noneT" /> left <br>
      <input type="radio" name="bo-sh" onclick="text_align(this.value)"  className="mar" value="right"/>  right<br>
      <input type="radio" name="bo-sh" onclick="text_align(this.value)"  className="mar" value="center"/> center<br>
      <input type="radio" name="bo-sh" onclick="text_align(this.value)"  className="mar" value="justify"/> justify<br>
    </div>
    <br>
    <div className="h6">2- text-align for paragraph</div>
    <div className="border p-1">
      <input type="radio" name="bot" onclick="text_align2(this.value)"  className="mar" value="left" id="noneT2" /> left <br>
      <input type="radio" name="bot" onclick="text_align2(this.value)"  className="mar" value="right"/>  right<br>
      <input type="radio" name="bot" onclick="text_align2(this.value)"  className="mar" value="center"/> center<br>
      <input type="radio" name="bot" onclick="text_align2(this.value)"  className="mar" value="justify"/> justify<br>
    </div>
    <div id="Code" className="mt-4 w-100">
          <div className="h3"> Code: </div>
          <div className="border py-2 ps-2 w-100" >
              1) <span style="font-weight: 500;">text-align :</span> <span id="text_align_result" style="font-weight: 500"></span><br>
              2) <span style="font-weight: 500;">text-align :</span> <span id="text_align_result2" style="font-weight: 500"></span><br>
          </div>
    </div>
  </div>

  <div className="border bg-light border-secondary" id="font_size">
    <div className="h2"> Result: </div>
    <div style="margin:auto;background-color:green;color:white;border:1px solid blue;font-size:33px;" id="text_align">
      text-align
    </div>
    <p id="pp">
      Lorem, ipsum dolor sit amet consectetur adipisicing elit.<br>Nisi eius voluptatum consequuntur, porro voluptas voluptatibus earum ipsam magnam.<br><br>Vel voluptatem id iste officiis reprehenderit, perferendis quam error corrupti?<br>Enim aspernatur ea praesentium, provident corrupti recusandae<br>
      natus ad alias consequatur id reiciendis ex ullam odit labore vitae error nihil minima molestias! Maiores fuga beatae quas nemo et obcaecati culpa accusamus fugiat porro inventore, non earum veniam ad tempora nulla ab repudiandae harum voluptas, dolor aut corrupti facilis esse magni minima. Eius veniam vel omnis,
      saepe hic aperiam aliquid molestiae doloremque qui?
    </p>
  </div> */}

</section>
)
}


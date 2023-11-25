import { CodeHighlighter ,  Result} from "../../path";
import images from "../imagesCss";
import "./Border.css"

export default function BorderRadius(props){
  function border_radius(value){
    document.getElementById("border_rad").style.borderRadius = value;
    document.getElementById("border-radius-result").innerHTML = value;
  }
  return(
    <section className="section-conetent">
  <h1 className="heading-style heading-style-css-color"> CSS Border-Radius </h1>

<div class="style_divv mt-5">
    تتيح لك خاصية <b>border-radius</b> تحديد الزوايا الدائرية لحدود العنصر. يتم تحديد الانحناء في كل زاوية بنصف قطر واحد أو اثنين من الانحناء مما يجعل من الممكن تحديد قوس لدائرة أو قوس من القطع الناقص.
   <br/> يمكنك إعطاء كل جانب من جوانب العنصر قيمة إنحناء . 
</div>
{/* <div class="mital">متال :</div>
<div id="border_radius_exemple" class="alert p-4 rounded m-auto border border-primary border-2 text-dark" dir="ltr">
  <div id="input_radio_box" class="border border-secondary rounded bg-light p-3">
    <div class="h2"> border-radius : </div>  
    <div>
      <input type="radio" name="bo-sh6" onClick={border_radius("30px")} value="30px" id="border_r"/>  30px<br/>
      <input type="radio" name="bo-sh6" onClick={border_radius("25%f 10%")} value="25%f 10%"/>  25% 10% <br/>
      <input type="radio" name="bo-sh6" onClick={border_radius("10% 30% 50% 70%")} value="10% 30% 50% 70%"/>  10% 30% 50% 70% <br/>
      <input type="radio" name="bo-sh6" onClick={border_radius("10% / 50%")} value="10% / 50%"/>  10% / 50%<br/>
      <input type="radio" name="bo-sh6" onClick={border_radius("10px 100px")} value="10px 100px"/>  10px 100px <br/>
      <input type="radio" name="bo-sh6" onClick={border_radius("50% 20% / 10% 40%")} value="50% 20% / 10% 40%"/> 50% 20% / 10% 40% <br/>
      <input type="radio" name="bo-sh6" onClick={border_radius("50% 20% 10% 40%")} value="50% 20% 10% 40%"/> 50% 20%  10% 40% <br/>
      <input type="radio" name="bo-sh6" onClick={border_radius("50%")} value="50%"/> 50% 
    </div>
    <div id="Code" class="mt-4 w-100">
       <div class="h3"> Code: </div>
       <div class="border py-2 ps-2 w-100" >
           <span style={{fontWeight:"500"}}>border-radius :</span> <span id="border-radius-result" style={{fontWeight:"500"}}></span>
       </div>
    </div>
  </div> 
  <div class="border bg-light border-secondary p-2" id="border-radius">
    <div class="h2"> Result: </div>
    <div id="border_rad"> Reda </div>
  </div>
</div>
<div class="sum_exemple_style">
<div class="mital">متال 2 :</div>
<h4 style="color:green"> الكود </h4>
<img src="{% static 'css/css24_border-radius.png' %}" class="img"/>
<h4 style="color:green"> بعد تشغيل الكود </h4>
<div class="styleee">
    <div style="float: left;width:50%;border:5px solid white">
        <img src="{% static 'css/orange.jpg' %}"  style="width:100%;border:5px solid blue"/>
        <h6 style="font-size: large;text-align:center;padding-top:15px;border-top:4px solid white;padding:9px" dir="rtl">  <bdi> أصورة قبل إضافة خاصية border-radius </bdi></h6>
    </div>
    <div style="float: left;width:50%;border:5px solid white">
        <img src="{% static 'css/orange.jpg' %}" style="width:100%;border:5px solid blue;border-radius:50%" id="imG" />
        <h6 style="font-size: large;text-align:center;padding-top:15px;border-top:4px solid white;padding:9px" dir="rtl"> أصورة بعد إضافة خاصية border-radius </h6>
    </div>
    <br style="clear: both;">
</div> 
</div>*/}

</section>
)
}

/*
 #border_radius_exemple{
        display: flex;
        justify-content: space-around;
        background-color:azure;
    }
    #input_radio_box{
        box-shadow:5px 5px 20px rgba(0 0 0/30%);
        align-self:center;
        width: 40%;
        min-height: 400px;
    }
    #border-radius{
        width: 40%;
        box-shadow:3px 3px 20px rgba(0 0 0 /30%);
        min-height:400px;
    }
    #border_rad{
      color:white; padding:9px; width:200px; height:200px; margin:auto;
      background-color:gray; margin-top:20%; border:2.5px solid red; text-align:center;
      margin-bottom:20%; 
    }
    
    @media only  screen and (max-width:903px) {
        #border_radius_exemple{
          flex-direction: column;
        }
        #input_radio_box{
          width:100%;
          margin-bottom:27px;
        }
        #Code{
          margin-bottom:20px;
        }
        #border-radius{
          width: 100%;
          min-height: 90px;
        }
        #border_rad{
          margin-top:9%;
        }
    }
   */
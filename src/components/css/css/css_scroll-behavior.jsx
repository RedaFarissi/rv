{% load static %} 
<h1 class="heading-style-css"><u><i>  CSS scroll-behavior</i></u></h1>
<div class="style_divv mt-5">
    تحدد الخاصية <b>scroll-behavior</b> ما إذا كان سيتم تحريك موضع التمرير بسلاسة ، بدلاً من الانتقال المستقيم ، عندما ينقر المستخدم على ارتباط داخل مربع قابل للتمرير.
</div>
<div class="mital"> متال :</div>
<ul>
    <li>قم بنقر على الأزرار أسفله لتغيير قيمة الخاصية <b>scroll_behavior</b> للفهم بشكل أفضل </li>
</ul>

<style>
    #scroll_behavior_exemple{
        display: flex;
        justify-content: space-around;
        background-color:azure;
    }
    #input_radio_box{
        box-shadow:5px 5px 20px rgba(0 0 0/30%);
        align-self:center;
        width: 40%;
        min-height: 320px;
    }
    #scroll-behavior{
        width: 40%;
        box-shadow:3px 3px 20px rgba(0 0 0 /30%);
        min-height:320px;
    }
    @media only  screen and (max-width:903px) {
        #scroll_behavior_exemple{
            flex-direction: column;
        }
        #input_radio_box{
            width: 100%;
            min-height: 90px;
            margin-bottom: 27px;
        }
        #Code{
            margin-bottom: 20px;
        }
        #scroll-behavior{
            width: 100%;
            min-height: 90px;
        }
    }
</style>
<style>
    #outline_exemple{
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
    #padding{
        width: 40%;
        box-shadow:3px 3px 20px rgba(0 0 0 /30%);
        min-height:400px;
    }
    @media only  screen and (max-width:903px) {
        #padding_exemple{
            flex-direction: column;
        }
        #input_radio_box{
            width: 100%;
            min-height: 90px;
            margin-bottom: 27px;
        }
        #Code{
            margin-bottom: 20px;
        }
        #padding{
            width: 100%;
            min-height: 90px;
        }
    }
</style>

<div  id="scroll_behavior_exemple" class="alert p-4 rounded m-auto border border-primary border-2 text-dark" dir="ltr">
    <div id="input_radio_box" class="border border-secondary rounded bg-light p-3">
        <div class="h2">  scroll-behavior : </div>
        <form  method="post">
           <input type="radio" name="aniFM" onclick="scroll_behavior(this.value)" value="auto" id="cc_non"/> auto  <br>
            <input type="radio" name="aniFM" onclick="scroll_behavior(this.value)" value="smooth"/> smooth <br>
        </form>
        <div id="Code" class="mt-4 w-100">
            <div class="h3"> Code: </div>
            <div class="border py-2 ps-2 w-100" >
                <span style="font-weight: 500;">scroll-behavior : </span> <span id="scroll-behavior-result" style="font-weight:500;"></span>
            </div>
        </div>
    </div>
    <div class="border bg-light border-secondary" id="scroll-behavior">
        <div class="h2"> Result: </div>
        <div style="display: flex; justify-content:center">
            <a href="#A" style="padding:9px">a</a>
            <a href="#B" style="padding:9px">b</a>
            <a href="#C" style="padding:9px">C</a>
        </div>
        <div id="scroll_behavior" style="height:200px;width:200px;margin:auto;border:2px solid black;overflow:auto;margin-bottom:4vh"> 
            <div id="A" style="height:200px;text-align:center;line-height:200px;font-size:xxx-large;"> A  </div>
            <div id="B" style="height:200px;text-align:center;line-height:200px;font-size:xxx-large;"> B  </div>
            <div id="C" style="height:200px;text-align:center;line-height:200px;font-size:xxx-large;"> C  </div>             
        </div>
    </div>
</div>
<script>
    document.getElementById("cc_non").click()
    function scroll_behavior(value){
        document.getElementById("scroll_behavior").style.scrollBehavior = value
        document.getElementById("scroll-behavior-result").innerHTML = value + ";";
    }
</script>
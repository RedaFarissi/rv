import images from "../../imagesJs"
import { CodeHighlighter ,  Result} from "../../../path";

export default function Fetch(){
    // //exemple 1
    // var lien_json = "https://ipapi.co/8.8.8.8/json/";

    // fetch(lien_json).then( variable =>{ return  variable.json() }).then(data =>{    
    //     document.getElementById("result").innerHTML =  typeof data ;
    // }) 
    // //exemple 3
    // var data = {
    //   "ip": "8.8.8.8", "version": "IPv4", "city": "Mountain View", "region": "California", "region_code": "CA", "country": "US", "country_name": "United States", "country_code": "US", "country_code_iso3": "USA", "country_capital": "Washington", "country_tld": ".us", "continent_code": "NA", "in_eu": false, "postal": "94043", "latitude": 37.42301, "longitude": -122.083352, "timezone": "America/Los_Angeles", "utc_offset": "-0700", "country_calling_code": "+1", "currency": "USD", "currency_name": "Dollar", "languages": "en-US,es-US,haw,fr", "country_area": 9629091.0, "country_population": 327167434, "asn": "AS15169", "org": "GOOGLE"
    // }
    // var resulta = document.getElementById("resulta")
    // for(let item in data ){
    //     resulta.innerHTML += `<span id='C' style="color: green"> ${item} </span> : ${data[item]} <br/>`
    // }
    // //exemple 4 (real exemple)
    // async function api(){
    //   const reponse = await fetch("https://breakingbadapi.com/api/characters");
    //   const data = await reponse.json();
    //   getData(data)
    // }
    // api()
    // function getData(data){
    //   for (let i in data){
    //     document.getElementById("reSulTa_real_exemple").innerHTML +=  `
    //     <div className="box">
    //       <h2 className="H2"> ${data[i].char_id}. ${data[i].name} </h2>
    //       <img className="img_person" src="${data[i].img}"/>
    //     </div>`
    //   } 
    // }
    return(
<section className="section-conetent">
    <h1 className="heading-style heading-style-js-color">JavaScript fetch</h1>
    <article>
        <p className="style_divv mt-5">
            تسمح واجهة <bdi><b>Fetch API</b></bdi> لمتصفح الويب بإجراء طلبات <b>HTTP</b> لخوادم الويب.<br/>
            لا حاجة ل <b>XMLHttpRequest</b> بعد الآن .<br/>
            {/* <b style="text-shadow:0.9px 0.9px red;"> الطريقة الأولى : </b>
            <div className="codeStudio alert bg-dark" dir="ltr" style="margin-top: 9px;padding-bottom:0pt;">
        <pre><span style="color:gold">fetch(</span>lien_api<span style="color:gold">)</span>.<span style="color:gold">then(</span> <span style="color:var(--js-color)">variable</span> <span style="color:var(--html-color-tags)">=></span> { <span style="color:var(--violet-color)">return</span> <span style="color:var(--js-color)">variable</span>.<span style="color:gold">json()</span> }<span style="color:gold">)</span>.<span style="color:gold">then(</span>data <span style="color:var(--html-color-tags)">=></span>{
            <span style="color:var(--arr-num-color)">console</span>.<span style="color:var(--js-color)">log(</span>data<span style="color:var(--js-color)">)</span>
        }<span style="color:gold">)</span></pre>
            </div>
            <div className="codeStudio alert bg-dark" dir="ltr" style="margin-top: 9px;padding-bottom:0pt;">
        <pre><span style="color:gold">fetch(</span>lien_api<span style="color:gold">)</span>.<span style="color:gold">then(</span> <span style="color:var(--js-color)">variable</span> <span style="color:var(--html-color-tags)">=></span> { <span style="color:var(--violet-color)">return</span> <span style="color:var(--js-color)">variable</span>.<span style="color:gold">text()</span> }<span style="color:gold">)</span>.<span style="color:gold">then(</span>data <span style="color:var(--html-color-tags)">=></span>{
            <span style="color:var(--arr-num-color)">console</span>.<span style="color:var(--js-color)">log(</span>data<span style="color:var(--js-color)">)</span>
        }<span style="color:gold">)</span></pre>
            </div>
            <b style="text-shadow:0.9px 0.9px red;"> الطريقة التانية : </b>
            <div className="codeStudio alert bg-dark" dir="ltr" style="margin-top: 9px;padding-bottom:0pt;">
        <pre><span style="color:gold">fetch(</span>lien_api<span style="color:gold">)</span>.<span style="color:gold">then(</span> <span style="color:var(--html-color-tags)">function(</span><span style="color:var(--js-color)">variable</span><span style="color:var(--html-color-tags)">)</span> { <span style="color:var(--violet-color)">return</span> <span style="color:var(--js-color)">variable</span>.<span style="color:gold">json()</span> } <span style="color:gold">)</span>.<span style="color:gold">then(</span>data <span style="color:var(--html-color-tags)">=></span>{
            <span style="color:var(--arr-num-color)">console</span>.<span style="color:var(--js-color)">log(</span>data<span style="color:var(--js-color)">)</span>
        }<span style="color:gold">)</span></pre>
            </div>

            <b style="text-shadow:0.9px 0.9px red;"> الطريقة الثالثة و الأحدت : </b>
            <div className="codeStudio alert bg-dark" dir="ltr" style="margin-top: 9px;padding-bottom:0pt;">
        <pre><span style="color:var(--html-color-tags)">async function</span> <span style="color:gold">function_name()</span>{
            <span style="color:var(--html-color-tags)">const</span> <span style="color:var(--js-color)">variable</span> = <span style="color:var(--violet-color)">await</span> <span style="color:gold">fetch(</span>lien_api<span style="color:gold">)</span>
            <span style="color:var(--html-color-tags)">const</span> <span style="color:var(--js-color)">data</span> = <span style="color:var(--violet-color)">await</span>  <span style="color:var(--js-color)">variable</span>.<span style="color:gold">json()</span>
        }
        <span style="color:gold">function_name()</span>
        </div>
        </pre> */}
        </p>
        <div className="mital">متال :  </div>
        <img src={images.js136_fetch} className="img"/>
        <div className="styleee">
            <h2> fetch API </h2>
            <div id='result'>  </div>
        </div>   
        <div className="mital">متال 2 : </div>
        <img src={images.js136_fetch2} className="img"/>
        <img src={images.js136_fetch2_2} className="img"/>
        <div className="mital">متال 3 : </div>
        <img src={images.js136_fetch3} className="img"/>
        <div className="styleee">
            <div id='resulta'>  </div>
        </div>
        <div className="mital">متال 4 : </div>
        <img src={images.js136_fetch4} className="img"/>
        <div className="styleee" id="reSulTa_real_exemple" style={{height:"150vh",overflowY:"auto",backgroundColor:"red",}}>  </div>
    </article>
</section>
    )
}
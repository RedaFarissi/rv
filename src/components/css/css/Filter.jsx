import { CodeHighlighter ,  Result } from "../../path";
import images from "../imagesCss";
import "./Filter.css"

export default function Filter(props){
    const codeExemple1= { 
    head:`  
    <style> 
        .parent{ display: flex; }
        .div1 , .div2{ width: 30%; margin: auto; margin: 10%; }
        .img{
            width: 100%;
        }
        .filter{
            filter: blur(4px);
        }
    </style>`,
    code:`      <div class="parent">
          <div class="div1">
              <img src="./orange2.png" class="img" alt="orange" />
              <h4> Without Filter</h4>
          </div>
          <div class="div2">
              <img src="./orange2.png" class="img filter" alt="orange" />
              <h4> use Filter: blur(4px)</h4>
          </div>
      </div>`
    }
    const codeExemple2= { 
    head:`  
    <style> 
        .parent{ display: flex; }
        .div1 , .div2{ width: 30%; margin: auto; margin: 10%; }
        .img{ width: 100%; }
        .img1{  filter: brightness(40%);  }
        .img2{  filter: brightness(160%); }
    </style>`,
    code:`      <div class="parent">
          <div class="div1">
              <img src="./orange2.png" class="img img1" alt="orange" />
              <h4> use Filter: brightness(40%)</h4>
          </div>
          <div class="div2">
              <img src="./orange2.png" class="img img2" alt="orange" />
              <h4> use Filter: brightness(160%)</h4>
          </div>
      </div>`
    }
    const codeExemple3= { 
    head:`  
    <style> 
        .parent{ display: flex; }
        .div1 , .div2{ width: 30%; margin: auto; margin: 10%; }
        .img{ width: 100%; }
        .img1{
            filter: contrast(9%);
        }
        .img2{
            filter: contrast(200%);
        }
    </style>`,
    code:`      <div class="parent">
          <div class="div1">
              <img src="./orange2.png" class="img img1" alt="orange" />
              <h4> use Filter: contrast(9%)</h4>
          </div>
          <div class="div2">
              <img src="./orange2.png" class="img img2" alt="orange" />
              <h4> use Filter: contrast(200%)</h4>
          </div>
      </div>`
    }
    const codeExemple4= { 
    head:`  
    <style> 
        .parent{ display: flex;}
        .div1 , .div2{ width: 30%; margin: auto; margin: 10%; }
        .img{ width: 100%; }
        .img1{
            filter: grayscale(50%);
        }
        .img2{
            filter: grayscale(100%);
        }
    </style>`,
    code:`      <div class="parent">
          <div class="div1">
              <img src="./orange2.png" class="img img1" alt="orange" />
              <h4> use Filter: grayscale(50%)</h4>
          </div>
          <div class="div2">
              <img src="./orange2.png" class="img img2" alt="orange" />
              <h4> use Filter: grayscale(100%)</h4>
          </div>
      </div>`
    }

    const codeExemple5= { 
    head:`  
    <style> 
        .parent{ display: flex; }
        .div1 , .div2{ width: 30%; margin: auto; margin: 10%;}
        .img{ width: 100%; }
        .img1{
            filter: hue-rotate(20deg);
        }
        .img2{
            filter: hue-rotate(300deg);
        }
    </style>`,
    code:`      <div class="parent">
          <div class="div1">
              <img src="./orange2.png" class="img img1" alt="orange" />
              <h4> use Filter: hue-rotate(20deg)</h4>
          </div>
          <div class="div2">
              <img src="./orange2.png" class="img img2" alt="orange" />
              <h4> use Filter: hue-rotate(300deg)</h4>
          </div>
      </div>`
    }
    const codeExemple6= { 
    head:`  
    <style> 
        .parent{ display: flex; }
        .div1 , .div2{ width: 30%; margin: auto; margin: 10%;}
        .img{ width: 100%; }
        .img1{
            filter: invert(60%);
        }
        .img2{
            filter: invert(100%);
        }
    </style>`,
    code:`      <div class="parent">
          <div class="div1">
              <img src="./orange2.png" class="img img1" alt="orange" />
              <h4> use Filter: invert(60%)</h4>
          </div>
          <div class="div2">
              <img src="./orange2.png" class="img img2" alt="orange" />
              <h4> use Filter: invert(100%)</h4>
          </div>
      </div>`
    }
    const codeExemple7 = { 
    head:`  
    <style> 
        .parent{ display: flex; }
        .div1 , .div2{ width: 30%; margin: auto; margin: 10%;}
        .img{ width: 100%; }
        .img1{
            filter: sepia(50%);
        }
        .img2{
            filter: sepia(200%);
        }
    </style>`,
    code:`      <div class="parent">
          <div class="div1">
              <img src="./orange2.png" class="img img1" alt="orange" />
              <h4> use Filter: sepia(50%)</h4>
          </div>
          <div class="div2">
              <img src="./orange2.png" class="img img2" alt="orange" />
              <h4> use Filter: sepia(200%)</h4>
          </div>
      </div>`
    }

    return(
    <section className="section-conetent">
        <h1 className="heading-style heading-style-css-color"> CSS Filter </h1>
        <article>
            <p class="style_divv mt-5">
                 تحدد الخاصية <b>filter</b> طريقة عرض الصور داخل موقعك يمكن . تقبل الخاصية <b>filter</b> عدة قيم وهي كتالي :
                <ul dir="ltr">
                    <li><b>filter: none </b></li>
                    <li><b>filter:blur() </b></li>
                    <li><b>filter:brightness() </b></li>
                    <li><b>filter:contrast() </b></li>
                    <li><b>filter:drop-shadow() </b></li>
                    <li><b>filter:grayscale() </b></li>
                    <li><b>filter:hue-rotate() </b></li>
                    <li><b>filter:invert() </b></li>
                    <li><b>filter:saturate() </b></li>
                    <li><b>filter:sepia() </b></li>
                </ul>
            </p>
        </article>
        <article>
            <h2 className="title-h2">1. القيمة none </h2>
            <p class="style_divv">
                تستعمل القيمة <b>none</b> لإزالة تأتير ال <b>filter</b> وعرض الصورة بشكل طبيعي وهي قيمة إفتراضية .
            </p>
        </article>
        <article>
            <h2 className="title-h2">2. الدالة  <bdi>blur()</bdi> </h2>
            <p class="style_divv">
                قم بتطبيق تأثير تمويه على الصورة. القيمة الأكبر ستخلق المزيد من الضبابية.<br/><br/>
                إذا لم يتم تحديد قيمة ، فسيتم استخدام 0 كقيمة إفتراضية .<br/>
                وحدة الإستعمال الأكتر شيوعا هي <b>px</b>.
            </p>
            <div class="mital">متال : </div>
            <CodeHighlighter file_name="index.html"code={codeExemple1.code} head={codeExemple1.head} language="html" title="CSS Filter" addClass="mt-3 mb-3" copie={true}/>
            <Result title='CSS Filter' logo={images.html_logo}  route="file:///C:/Users/SURFACE%20BOOK/Desktop/html/index.html">
                <div className="css-filter-ex1-parent">
                    <div className="css-filter-ex1-div1">
                        <img className="css-filter-ex1-img" src={images.orange2} alt="orange" />
                        <h4 className="mt-4"> Without Filter</h4>
                    </div>
                    <div className="css-filter-ex1-div2">
                        <img src={images.orange2} className="css-filter-ex1-img css-filter-ex1-img2" alt="orange" />
                        <h4 className="mt-4"> use Filter: blur(4px)</h4>
                    </div>
                </div>
            </Result>
        </article>
        <article>
            <h2 className="title-h2">2. الدالة   <bdi>brightness()</bdi> </h2>
            <p class="style_divv">
                  تستخدم الدالة <bdi><b>brightness()</b></bdi> مع الخاصية <b>filer</b> لضبط سطوع الصورة .<br/>
                  <ul>
                      <li>0٪ سيجعل الصورة سوداء بالكامل.</li>
                      <li>100٪ (1) هي القيمة الافتراضية وتمثل الصورة الأصلية.</li>
                      <li>ستوفر القيم التي تزيد عن 100٪ نتائج أكثر إشراقًا.</li>
                  </ul>    
            </p>
            <div class="mital">متال : </div>
            <CodeHighlighter file_name="index.html"code={codeExemple2.code} head={codeExemple2.head} language="html" title="CSS Filter" addClass="mt-3 mb-3" copie={true}/>
            <Result title='CSS Filter' logo={images.html_logo}  route="file:///C:/Users/SURFACE%20BOOK/Desktop/html/index.html">
                <div className="css-filter-ex2-parent">
                    <div className="css-filter-ex2-div1">
                        <img className="css-filter-ex2-img css-filter-ex2-img1" src={images.orange2} alt="orange" />
                        <h4 className="mt-4"> use Filter: brightness(40%)</h4>
                    </div>
                    <div className="css-filter-ex2-div2">
                        <img src={images.orange2} className="css-filter-ex2-img css-filter-ex2-img2" alt="orange" />
                        <h4 className="mt-4"> use Filter: brightness(160%)</h4>
                    </div>
                </div>
            </Result>
        </article>
        <article>
            <h2 className="title-h2">3. الدالة   <bdi>contrast()</bdi> </h2>
            <p class="style_divv">
                  تستخدم الدالة <bdi><b>contrast()</b></bdi> مع الخاصية <b>filer</b> لضبط تباين الألوان  .<br/>
                  <ul>
                      <li>0٪ سيجعل الصورة سوداء بالكامل.</li>
                      <li>100٪ (1) هي القيمة الافتراضية وتمثل الصورة الأصلية.</li>
                      <li>ستوفر القيم التي تزيد عن 100٪ نتائج بمزيد من التباين .</li>
                  </ul>    
            </p>
            <div class="mital">متال : </div>
            <CodeHighlighter file_name="index.html"code={codeExemple3.code} head={codeExemple3.head} language="html" title="CSS Filter" addClass="mt-3 mb-3" copie={true}/>
            <Result title='CSS Filter' logo={images.html_logo}  route="file:///C:/Users/SURFACE%20BOOK/Desktop/html/index.html">
                <div className="css-filter-ex3-parent">
                    <div className="css-filter-ex3-div1">
                        <img className="css-filter-ex3-img css-filter-ex3-img1" src={images.orange2} alt="orange" />
                        <h4 className="mt-4"> use Filter: contrast(9%)</h4>
                    </div>
                    <div className="css-filter-ex3-div2">
                        <img src={images.orange2} className="css-filter-ex3-img css-filter-ex3-img2" alt="orange" />
                        <h4 className="mt-4"> use Filter: contrast(200%)</h4>
                    </div>
                </div>
            </Result>
        </article>
        <article>
            <h2 className="title-h2">4. الدالة   <bdi>drop-shadow()</bdi> </h2>
            <p class="style_divv">
                  تستخدم لالدالة <bdi><b>drop-shadow()</b></bdi> مع الخاصية <b>filer</b> لإنشاء ضل لصورة متل الخاصية <b>box-shadow</b>.<br/>    
            </p>
        </article>
        <article>
            <h2 className="title-h2">5. الدالة  <bdi>grayscale()</bdi> </h2>
            <p class="style_divv">
                    تستخدم لالدالة <bdi><b>grayscale()</b></bdi> مع الخاصية <b>filer</b> لتحويل الصورة إلى تدرجيا إلى رمادي.
                  <ul>
                      <li>0٪ (0) هي القيمة الافتراضية وتمثل الصورة الأصلية.</li>
                      <li>100٪ ستجعل الصورة رمادية تمامًا (تستخدم للصور بالأبيض والأسود).</li>
                      <li> القيم السلبية غير مسموح بها.</li>
                  </ul>  
            </p>
            <div class="mital">متال : </div>
            <CodeHighlighter file_name="index.html"code={codeExemple4.code} head={codeExemple4.head} language="html" title="CSS Filter" addClass="mt-3 mb-3" copie={true}/>
            <Result title='CSS Filter' logo={images.html_logo}  route="file:///C:/Users/SURFACE%20BOOK/Desktop/html/index.html">
                <div className="css-filter-ex4-parent">
                    <div className="css-filter-ex4-div1">
                        <img className="css-filter-ex4-img css-filter-ex4-img1" src={images.orange2} alt="orange" />
                        <h4 className="mt-4"> use Filter: grayscale(50%)</h4>
                    </div>
                    <div className="css-filter-ex4-div2">
                        <img src={images.orange2} className="css-filter-ex4-img css-filter-ex4-img2" alt="orange" />
                        <h4 className="mt-4"> use Filter: grayscale(100%)</h4>
                    </div>
                </div>
            </Result>
        </article>
        <article>
            <h2 className="title-h2">6. الدالة  <bdi>hue-rotate()</bdi> </h2>
            <p className="style_divv">
                    تستخدم الدالة <bdi><b>hue-rotate()</b></bdi> مع الخاصية <b>filer</b> قم بتطبيق تدوير الصبغة على الصورة. تحدد القيمة عدد الدرجات حول دائرة اللون التي سيتم تعديل عينات الصورة. 0deg هو الإعداد الافتراضي ، ويمثل الصورة الأصلية.
            <br/><br/>
            <b> ملاحظة </b>: الحد الأقصى للقيمة هو 360 درجة.
            </p>
            <div className="mital">متال : </div>
            <CodeHighlighter file_name="index.html"code={codeExemple5.code} head={codeExemple5.head} language="html" title="CSS Filter" addClass="mt-3 mb-3" copie={true}/>
            <Result title='CSS Filter' logo={images.html_logo}  route="file:///C:/Users/SURFACE%20BOOK/Desktop/html/index.html">
                <div className="css-filter-ex5-parent">
                    <div className="css-filter-ex5-div1">
                        <img className="css-filter-ex5-img css-filter-ex5-img1" src={images.orange2} alt="orange" />
                        <h4 className="mt-4"> use Filter: hue-rotate(20deg)</h4>
                    </div>
                    <div className="css-filter-ex5-div2">
                        <img src={images.orange2} className="css-filter-ex5-img css-filter-ex5-img2" alt="orange" />
                        <h4 className="mt-4"> use Filter: hue-rotate(300deg)</h4>
                    </div>
                </div>
            </Result>
        </article>
        <article>
            <h2 className="title-h2">7. الدالة  <bdi>invert</bdi> </h2>
            <p className="style_divv">
                    تستخدم لالدالة <bdi><b>invert()</b></bdi> مع الخاصية <b>filer</b> لعكس العينات في الصورة .<br/><br/>
                    <ul>
                        <li>0٪ (0) هي القيمة الافتراضية وتمثل الصورة الأصلية.</li>
                        <li>100٪ ستجعل الصورة معكوسة تمامًا .</li>
                        <li>القيم السلبية غير مسموح بها .</li>
                    </ul>
            </p>
            <div className="mital">متال : </div>
            <CodeHighlighter file_name="index.html"code={codeExemple6.code} head={codeExemple6.head} language="html" title="CSS Filter" addClass="mt-3 mb-3" copie={true}/>
            <Result title='CSS Filter' logo={images.html_logo}  route="file:///C:/Users/SURFACE%20BOOK/Desktop/html/index.html">
                <div className="css-filter-ex6-parent">
                    <div className="css-filter-ex6-div1">
                        <img className="css-filter-ex6-img css-filter-ex6-img1" src={images.orange2} alt="orange" />
                        <h4 className="mt-4"> use Filter: invert(60%)</h4>
                    </div>
                    <div className="css-filter-ex6-div2">
                        <img src={images.orange2} className="css-filter-ex6-img css-filter-ex6-img2" alt="orange" />
                        <h4 className="mt-4"> use Filter: invert(100%)</h4>
                    </div>
                </div>
            </Result>
        </article>
        <article>
            <h2 className="title-h2">8. الدالة  <bdi>sepia</bdi> </h2>
            <p className="style_divv">
                    تستخدم لالدالة <bdi><b>sepia()</b></bdi> مع الخاصية <b>filer</b> لتحويل الصورة إلى بني داكن .<br/><br/>
                    <ul>
                        <li>0٪ (0) هي القيمة الافتراضية وتمثل الصورة الأصلية.</li>
                        <li>100٪ سيجعل الصورة بني داكن تمامًا.</li>
                        <li>100٪ سيجعل الصورة بني داكن تمامًا.</li>
                        <li>القيم السلبية غير مسموح بها</li>
                    </ul>
            </p>
            <div className="mital">متال : </div>
            <CodeHighlighter file_name="index.html"code={codeExemple7.code} head={codeExemple7.head} language="html" title="CSS Filter" addClass="mt-3 mb-3" copie={true}/>
            <Result title='CSS Filter' logo={images.html_logo}  route="file:///C:/Users/SURFACE%20BOOK/Desktop/html/index.html">
                <div className="css-filter-ex7-parent">
                    <div className="css-filter-ex7-div1">
                        <img className="css-filter-ex7-img css-filter-ex7-img1" src={images.orange2} alt="orange" />
                        <h4 className="mt-4"> use Filter: sepia(50%)</h4>
                    </div>
                    <div className="css-filter-ex7-div2">
                        <img src={images.orange2} className="css-filter-ex7-img css-filter-ex7-img2" alt="orange" />
                        <h4 className="mt-4"> use Filter: sepia(200%)</h4>
                    </div>
                </div>
            </Result>
        </article>
</section>
)
}

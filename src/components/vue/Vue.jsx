import { useEffect, useRef} from 'react';
import { Routes, Route , Link } from "react-router-dom";
import { CodeCommand , CodeHighlighter , Result } from "../path";


export default function Vue(props){
    const AsideRef = useRef(null);
   useEffect(() => {
      AsideRef.current.scrollTop = localStorage.getItem("django_aside") || 0;
   }, []); 
   
   const matrix = props.vue_matrix.map(e =>{ 
      var keys_map;  
      if (Array.isArray(e)) { 
         let dt_title;
         keys_map = e.map((key,index) => {
            if(index === 0){
               dt_title = key.toLowerCase().replace(/_/g, '-');
              return(<dt className="aside-dl-dt" key={key}>
                        <Link to={`/vue/${dt_title}/`}>
                           <i className="fa-solid fa-caret-right"></i> {key.replace(/_/g, ' ')}
                        </Link>
                     </dt>)  
            }else{
                return(<dd className="aside-dl-dd" key={key}>
                           <a href={`/vue/${dt_title}#${key}`}>
                             <i className="fa-solid fa-circle"></i> {key.replace(/_/g, ' ')}
                           </a>
                        </dd>)
            } 
          });
      }else {
         keys_map = <dt className="aside-dl-simple" key={e}><a href={`/django/${e.toLowerCase().replace(/_/g, '-')}`}><i className="fa-solid fa-caret-right"></i> {e.replace(/_/g, ' ')} </a></dt>;
      }
      return keys_map
   });

   return (
<main>
    <aside className="aside" onScroll={()=>{ localStorage.setItem("laravel_aside",AsideRef.current.scrollTop) }} ref={AsideRef}>
        <ul className="list-group m-0">
             {matrix}
        </ul>
    </aside>
    <section className="section-conetent">
        <h1 className="heading-style heading-style-vue-color"> Vue.js  Introduction</h1>
        <h1>1 - Introduction </h1>
            <div class="alert alert-warning mt-3">
                <br id="How_to_create_Vuejs"/><br/>
                <h3>1 - How to create Vue.js</h3>
                <p>Make sure you have an up-to-date version of Node.js installed.</p>
                <div class="alert bg-dark mt-3 pb-0 text-light"><pre>npm init vue@latest</pre></div>
                <h5 class="text-danger">Result:</h5>
                <div class="alert alert-light mt-3 pb-0">
                  <img src="{% static 'vuejs/Vue1.png' %}"  class="w-100"/>
                </div>
                <div class="alert alert-danger"><b>Note : If you are unsure about an option, simply choose No by hitting enter for now.</b></div>
                <p> You can use Vue directly from a CDN via a script tag:</p>
                <div class="alert bg-light text-dark mt-3 pb-0"><pre>{"<"}script src="https://unpkg.com/vue@3/dist/vue.global.js"{"><"}/script{">"}</pre></div>
                <br id="install_dependencies"/><br/>
                <h3>2 - To install dependencies and start the dev server</h3>
                <div class="alert bg-dark mt-3 pb-0 text-light"><pre>cd &lt;your-project-name{">"} </pre></div>
                <div class="alert bg-dark mt-3 pb-0 text-light"><pre>npm install</pre></div>
                <div class="alert bg-dark mt-3 pb-0 text-light"><pre>npm run dev</pre></div>
                <h5 class="text-danger">Result:</h5>
                <div class="alert alert-light mt-3 pb-0"><img src="{% static 'vuejs/Vue2.png' %}"  class="w-100"/></div>

                <br id="ship_your_app_to_production"/><br/>
                <h3>3 - When you are ready to ship your app to production, run the following.</h3>
                <div class="alert bg-dark mt-3 pb-0 text-light"><pre>npm run build</pre></div>
            </div>


            <h2>2 - Basic Vue.js </h2>
            <div class="alert alert-warning mt-3">
                <br id="create_state_in_Vuejs"/><br/>
                <h3>1 - create state in Vue.js</h3>
                <div class="alert alert-light mt-3 pb-0"><img src="{% static 'vuejs/Vue3.png' %}"  class="w-100"/></div>
                <h5 class="text-danger">Result</h5>
                <div class="alert alert-light mt-3 pb-0"><img src="{% static 'vuejs/Vue4.png' %}"  class="w-100"/></div>
                <b><b>when click button</b></b>
                <div class="alert alert-light mt-3 pb-0"><img src="{% static 'vuejs/Vue5.png' %}"  class="w-100"/></div>
                <h3>2 - methods </h3>
                <p> in Vue js we use method with Event <a href="#create_state_in_Vuejs">exemple</a></p>
                <p> if you need to use methos in function all function render when use methods:{ }  </p>
                <div class="alert alert-light mt-3 pb-0"><img src="{% static 'vuejs/Vue28.png' %}"  class="w-100"/></div>
                <h3>2 - computed </h3>
                computed render when find change
                <div class="alert alert-light mt-3 pb-0"><img src="{% static 'vuejs/Vue29.png' %}"  class="w-100"/></div>
            </div>

            <br id="v-text"/><br/>
            <h2>3 - v-text </h2>
            <div class="alert alert-warning mt-3">
                you can use <b>v-text</b> when your element need to get only state .<br/>
                when you use <b>v-text</b> we get state like <b>text</b>.
                <div class="alert alert-light mt-3 pb-0"><img src="{% static 'vuejs/Vue7.png' %}"  class="w-100"/></div>
                <h5 class="text-danger">Result</h5>
                <div class="alert alert-light mt-3 pb-0"><img src="{% static 'vuejs/Vue8.png' %}"  class="w-100"/></div>
                <b><b>when click button</b></b>
                <div class="alert alert-light mt-3 pb-0"><img src="{% static 'vuejs/Vue9.png' %}"  class="w-100"/></div>
                <div class="alert alert-danger">
                  <b>note:</b> v-text like innerText
                </div>
            </div>

            <br id="v-html"/><br/>
            <h2>4 - v-html </h2>
            <div class="alert alert-warning mt-3">
                you can use <b>v-html</b> when your element need to get only state .
                when you use <b>v-html</b> we get state like <b>html</b>
                <div class="alert alert-light mt-3 pb-0"><img src="{% static 'vuejs/Vue10.png' %}"  class="w-100"/></div>
                <div class="alert alert-light mt-3 pb-0"><img src="{% static 'vuejs/Vue11.png' %}"  class="w-100"/></div>

                <div class="alert alert-danger">
                  <b>note:</b> v-html like innerHtml
                </div>
            </div>

            <br id="v-for"/><br/>
            <h2>4 - v-for </h2>
            <div class="alert alert-warning mt-3">
                in Vue js you can use loop in html without any function or map
                <h5 class="text-danger">Exempale 1</h5>
                <div class="alert alert-light mt-3 pb-0"><img src="{% static 'vuejs/Vue12.png' %}"  class="w-100"/></div>
                <h5 class="text-danger">Exempale 2</h5>
                <div class="alert alert-light mt-3 pb-0"><img src="{% static 'vuejs/Vue13.png' %}"  class="w-100"/></div>
            </div>

            <br id="v-if_and_v-else-if_and_v-else"/><br/>
            <h2>5 - v-if and v-else-if and v-else</h2>
            <div class="alert alert-warning mt-3">
                if condtion delete element returned false from Dom 
                <h5 class="text-danger">Exempale 1</h5>
                if name is not empty print name or don't do anything.
                <div class="alert alert-light mt-3 pb-0"><img src="{% static 'vuejs/Vue14.png' %}"  class="w-100"/></div>
                <h5 class="text-danger">Exempale 2</h5>
                <div class="alert alert-light mt-3 pb-0"><img src="{% static 'vuejs/Vue15.png' %}"  class="w-100"/></div>
            </div>

            <br id="v-once"/><br/>
            <h2>6 - v-once</h2>
            <div class="alert alert-warning mt-3">
                use v-once if you want to render state once time. 
                <div class="alert alert-light mt-3 pb-0"><img src="{% static 'vuejs/Vue16.png' %}"  class="w-100"/></div>
                <b>When click btn</b>
                <div class="alert alert-light mt-3 pb-0"><img src="{% static 'vuejs/Vue17.png' %}"  class="w-100"/></div>
            </div>

            <br id="v-show"/><br/>
            <h2>7 - v-show</h2>
            <div class="alert alert-warning mt-3">
                v-show work like v-if the difrent between them s-show use dislay:block from remove element when element returned false and v-if delete him from Dom .
                <div class="alert alert-light mt-3 pb-0"><img src="{% static 'vuejs/Vue18.png' %}"  class="w-100"/></div>
            </div>

            <br id="v-bind"/><br/>
            <h2>8 - v-bind</h2>
            <div class="alert alert-warning mt-3">
                we use v-bind to use state with attributes.<br/>
                the short write to use <kbd>v-bind:</kbd> is <kbd>:</kbd>
                <h3>1 - v-bind:  attributes  </h3>
                <div class="alert alert-light mt-3 pb-0"><img src="{% static 'vuejs/Vue21.png' %}"  class="w-100"/></div>
                <h5 class="text-danger">Result</h5>
                <div class="alert alert-light mt-3 pb-0"><img src="{% static 'vuejs/Vue22.png' %}"  class="w-100"/></div>
                <h3>2 - bind to change class</h3>
                <p>We can pass an object to :class (short for v-bind:class) to dynamically toggle classes .</p>
                <div class="alert alert-light mt-3 pb-0"><img src="{% static 'vuejs/Vue19.png' %}"  class="w-100"/></div>
                <b><b>when click btn</b></b>
                <div class="alert alert-light mt-3 pb-0"><img src="{% static 'vuejs/Vue20.png' %}"  class="w-100"/></div>
                <ul>
                  <li>'activate': activate : This part indicates that the CSS class "activate" will be applied when the value of the activate variable or data property is <b>true</b>.</li>
                  <li></li>
                </ul>
                <h3>3 - one way binding </h3>
                <b> when change value state value don't change because v-bind: binding value on one way.</b>
                <div class="alert alert-light mt-3 pb-0"><img src="{% static 'vuejs/Vue23.png' %}"  class="w-100"/></div>
            </div>

            <br id="v-model"/><br/>
            <h2>9 - v-model <small>(two way binding)</small></h2>
            <div class="alert alert-warning mt-3">
                <div class="alert alert-light mt-3 pb-0"><img src="{% static 'vuejs/Vue24.png' %}"  class="w-100"/></div>
            </div>

            <br id="Component_in_vuejs"/><br/>
            <h2>10 - Component in vue.js</h2>
            <div class="alert alert-warning mt-3">
                <div class="alert alert-light mt-3 pb-0"><img src="{% static 'vuejs/Vue25.png' %}"  class="w-100"/></div>
                <div class="alert alert-light mt-3 pb-0"><img src="{% static 'vuejs/Vue26.png' %}"  class="w-100"/></div>
                <h5 class="text-danger">Result</h5>
                <b><b>after 4 click in btn </b></b>
                <div class="alert alert-light mt-3 pb-0"><img src="{% static 'vuejs/Vue27.png' %}"  class="w-100"/></div>
            </div>

            <br id="change_value_state_when_click_button_in_another_Component"/><br/>
            <h2>10 - change value state when click button in another Component</h2>
            <div class="alert alert-warning mt-3">
                <div class="alert alert-light mt-3 pb-0"><img src="{% static 'vuejs/Vue30.png' %}"  class="w-100"/></div>
                <div class="alert alert-light mt-3 pb-0"><img src="{% static 'vuejs/Vue31.png' %}"  class="w-100"/></div>
                <h5 class="text-danger">Result</h5>
                <b><b> befor click any button </b></b>
                <div class="alert alert-light mt-3 pb-0"><img src="{% static 'vuejs/Vue32.png' %}"  class="w-100"/></div>
                <ul><li><b><b> after three click in button +1 </b></b></li>
                <li><b><b> after click button change props</b></b></li></ul>
                <div class="alert alert-light mt-3 pb-0"><img src="{% static 'vuejs/Vue33.png' %}"  class="w-100"/></div>
            </div>
    </section>
</main>
    )
}
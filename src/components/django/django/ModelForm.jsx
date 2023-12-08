import codes from "../../../assests/codes/django/django"
import images from "../imagesDjango";
import { CodeCommand , CodeHighlighter , Result } from "../../path";

export default function ModelForm(){
    return(
        <article id="ModelForm">
            <h1>forms.ModelForm</h1>
            <div>
               <ul><li><b>my startapp in this case named <u><i>app</i></u></b></li></ul>
               <h2>use models Table <small><small>(database)</small></small> to affiche input fields to user and save it </h2>
               <h3> in app/ you need to create file with name <b><u>form.py</u></b>  </h3>
               <ul><li><b>in app/ you need to import model you want to let user push data inside him </b></li></ul>
            </div>
               <div className="  fs-5 p-4 pb-2 rounded">
               <b> app/form.py </b><br/><br/>
               <pre>
            <b>from</b> django <b>import</b> forms   <span className="text-success">#for using forms in django</span>
            <b>from</b> .models <b>import</b> Table_in_model   <span className="text-success">#you need to import table models</span>

            class ApplyForm(forms.ModelForm):  <span className="text-success">#forms for form</span> I have
                class  Meta:     
                    model = Table_in_model  <span className="text-success">#name Mode to connect with database</span>
                    fields = ['column1','column2','column3','column4'] <span className="text-success">#fields must content array with column allowed to push data</span>
                    <span className="text-success">#fields = "__all__"</span>   //to get all column
                </pre>
            </div>
            <h3> in views.py import class name in form.py  </h3>
            <div className="  fs-5 p-4 pb-2 rounded">
            <b> app/views.py </b><br/><br/>
            <pre>
            from django.shortcuts import render
            from .models import Users
            from .form import <b className="text-success fs-3">ApplyForm</b><br/><br/>
            def home(request):
                if request.method == 'POST': <span className="text-success">#if data send</span> 
                    form = <b className="text-success fs-3">ApplyForm(request.POST)</b> <span className="text-success">#if you want to save  file use (request.POST,request.FILES)</span>
                    if form.is_valid():
                        form.save()  
                else:
                    form = <b className="text-success fs-3">ApplyForm()</b><br/>
                content = {"{"}"data": Users.objects.all() , <span className="--o">'form'</span>:form{"}"}
                return render( request , 'home.html' , content )</pre>
            </div>

            <h3> in app/templates/home.html    </h3>
            <div className="  fs-5 p-4 pb-2 rounded">
            <b> app/views.py </b><br/><br/>
            {/* <pre>
            &lt;!DOCTYPE html>
            &lt;html>
               &lt;head>
                  &lt;title></title>
               &lt;/head>
               &lt;body>
                  &lt;form action="#" method="POST">
                        {"{{"}form{"}}"}
                  &lt;/form>
               &lt;/body>
            &lt;/html></pre>
            </div> */}
            <h3>Exemple 1 : </h3>
            <img src={images.django39} className="img"/>
            <img src={images.django40} className="img"/>
            <img src={images.django41} className="img"/>
            <h5>Result</h5>
            <img src={images.django42} className="img"/>
            <hr/>
            <h3>Exemple 2 : </h3>
            <img src={images.django62} className="img"/>
            <img src={images.django63} className="img"/>

            <img src={images.django64} className="img"/>
            <h5>Result</h5>
            <img src={images.django65} className="img"/>
            <hr/>
            <h3>Exemple 3 : </h3>
            <img src={images.django162} className="img"/>
            <img src={images.django163} className="img"/>
            <p className="mt-4"> 
               <ul className="fs-5">
                  <li><b>form.cleaned_data</b> is a dictionary that contains the cleaned and validated data from a submitted form.<br/> 
               The <b>cleaned_data</b> dictionary is available after the form has been successfully validated. <br/>
               The keys in the dictionary correspond to the field names defined in the form, and the values are the cleaned data for each field.</li>
               </ul>
            </p>
         
            <div className="h3">for more info Clikc <a href="https://www.youtube.com/watch?v=E8-3uuqp19s&list=PLtGOJcWqvbqfv9yQelR4HETqU35alUoW6&index=14">Here</a></div>
            <div className="alert-danger mt-3"><b>Note:</b> you can use this file for seend data to email is not private for hundle database is private to hundle form </div>   
            </div>   
        </article>
    )
}
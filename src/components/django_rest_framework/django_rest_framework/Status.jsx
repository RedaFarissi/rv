import { CodeHighlighter } from "../../path";

export default function Status(props){
   return(
<>
   <h1 className="heading-style heading-style-python-color">DRF Status </h1>
   <article className="mt-5">
      <p className="style_divv">
         في إطار التطوير باستخدام <b>Django Rest Framework (DRF)</b>، يوفر وحدة <b>status</b> مجموعة من أكواد حالة <b>HTTP</b> القياسية التي يمكنك استخدامها عند التعامل مع استجابات الواجهة البرمجية <b>(API)</b>. هذه الرموز مفيدة للإشارة إلى نجاح أو فشل طلب <b>HTTP</b> وتوفير معلومات إضافية حول النتيجة.<br/>
         فيما يلي بعض رموز حالة <b>HTTP</b> الشائعة واستخداماتها في <b>DRF</b>:      
         <ul>
            <li>
               <b className="text-success">HTTP_200_OK :</b>
               <ul>
                  <li>تشير إلى أن الطلب نجح.</li>
                  <li>يُستخدم عادة لطلبات <b>GET</b> الناجحة.</li>
               </ul>
            </li>
            <li>
               <b className="text-success">HTTP_201_CREATED :</b>
               <ul>
                  <li>تشير إلى أن الطلب نجح وتم إنشاء مورد جديد.</li>
                  <li>يُستخدم عادة لطلبات <b>POST</b> الناجحة التي تؤدي إلى إنشاء مورد.</li>
               </ul>
            </li>
            <li>
               <b className="text-success">HTTP_204_NO_CONTENT :</b>
               <ul>
                  <li>تشير إلى أن الطلب نجح ولا توجد محتويات لإرسالها في الاستجابة.</li>
                  <li>يُستخدم عادة لطلبات <b>DELETE</b> الناجحة.</li>
               </ul>
            </li>
            <li>
               <b className="text-success">HTTP_400_BAD_REQUEST :</b>
               <ul>
                  <li>تشير إلى أن الطلب غير صالح.</li>
                  <li>يُستخدم عادة لأخطاء العميل.</li>
               </ul>
            </li>
            <li>
               <b className="text-success">HTTP_401_UNAUTHORIZED :</b>
               <ul>
                  <li>تشير إلى أن الطلب يتطلب مصادقة والعميل غير مصادق عليه.</li>
                  <li>يُستخدم عادة للوصول غير المصرح به.</li>
               </ul>
            </li>
            <li>
               <b className="text-success">HTTP_404_NOT_FOUND :</b>
               <ul>
                  <li>تشير إلى أن المورد الذي تم طلبه غير موجود.</li>
                  <li>يُستخدم عندما لا يكون الكائن أو العنوان المطلوب موجودًا.</li>
               </ul>
            </li>
            <li>
               <b className="text-success">HTTP_403_FORBIDDEN :</b>
               <ul>
                  <li>تشير إلى أن الخادم فهم الطلب، ولكنه يرفض تخويله.</li>
                  <li>يُستخدم عادة في حالات نجاح المصادقة، ولكن المستخدم المصادق ليس لديه الصلاحيات اللازمة.</li>
               </ul>
            </li>
            <li>
               <b className="text-success">HTTP_405_METHOD_NOT_ALLOWED :</b>
               <ul>
                  <li>تشير إلى أن طريقة الطلب (GET، POST، PUT، DELETE) غير مسموح بها للمورد المعني.</li>
                  <li>يُستخدم عادة عندما يحاول العميل استخدام طريقة <b>HTTP</b> لا تدعمها العرض.</li>
               </ul>
            </li>
            <li>
               <b className="text-success">HTTP_500_INTERNAL_SERVER_ERROR :</b>
               <ul>
                  <li>تشير إلى أن الخادم واجه حالة غير متوقعة حالت دون تحقيق الطلب .</li>
                  <li>يُستخدم عادة لأخطاء عامة على الخادم .</li>
               </ul>
            </li>
         </ul>
      </p>
      <div className="mital"> متال 1: </div>
      <CodeHighlighter  code={`from rest_framework.response import Response
from rest_framework import status

def my_view(request):
    data = {'message': 'Request successful'}
    return Response(data, status=status.HTTP_200_OK)`} language="python" addclassName="mt-3 mb-3" copie={true}/>        
      <div className="mital"> متال 2: </div>
      <CodeHighlighter  code={`from rest_framework.response import Response
from rest_framework import status

def create_view(request):
    # ... (create a new resource)
    return Response(status=status.HTTP_201_CREATED)`} language="python" addclassName="mt-3 mb-3" copie={true}/>        
      <div className="mital"> متال 3: </div>
      <CodeHighlighter  code={`from rest_framework.response import Response
from rest_framework import status

def delete_view(request, object_id):
    # ... (delete the resource)
    return Response(status=status.HTTP_204_NO_CONTENT)`} language="python" addclassName="mt-3 mb-3" copie={true}/>        
      <div className="mital"> متال 4: </div>
      <CodeHighlighter  code={`from rest_framework.response import Response
from rest_framework import status

def my_view(request):
    # ... (handle invalid request)
    return Response({'error': 'Bad request'}, status=status.HTTP_400_BAD_REQUEST)`} language="python" addclassName="mt-3 mb-3" copie={true}/>        
      <div className="mital"> متال 5: </div>
      <CodeHighlighter  code={`from rest_framework.response import Response
from rest_framework import status

def my_view(request):
    # ... (handle unauthorized access)
    return Response({'error': 'Unauthorized'}, status=status.HTTP_401_UNAUTHORIZED)`} language="python" addclassName="mt-3 mb-3" copie={true}/>        
      <div className="mital"> متال 6: </div>
      <CodeHighlighter  code={`from rest_framework.response import Response
from rest_framework import status

def my_view(request, object_id):
    # ... (handle not found)
    return Response({'error': 'Not found'}, status=status.HTTP_404_NOT_FOUND)`} language="python" addclassName="mt-3 mb-3" copie={true}/>        
      <div className="mital"> متال 7: </div>
      <CodeHighlighter  code={`from rest_framework.response import Response
from rest_framework import status

def my_view(request):
    # ... (handle forbidden access)
    return Response({'error': 'Forbidden'}, status=status.HTTP_403_FORBIDDEN)`} language="python" addclassName="mt-3 mb-3" copie={true}/>        

   </article>
</>
   )
}
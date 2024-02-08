import { CodeCommand } from "../../path";

export default function SelfKwargs(props){

   return(
<>
    <h1 className="heading-style heading-style-python-color">Django Rest Framework self-kwargs </h1>
    <article id="Introduction">
         <h2 className="title-h2">1 - </h2>
         <p className="style_divv">
            <b>self.kwargs</b> عبارة عن كائن يشبه القاموس يحتوي على وسائط الكلمات الرئيسية التي تم التقاطها من عنوان <b>URL</b> بواسطة نظام توجيه <b>URL</b> الخاص بـ <b>Django</b>.<br/><br/>
            عند تحديد نمط عنوان <b>URL</b> في ملف <b>urls.py</b>، يمكنك استخدام الأقواس الزاوية <b>({"<"}type:name{">"})</b> لالتقاط القيم من عنوان <b>URL</b> وتمريرها إلى وظائف العرض الخاصة بك كوسيطات للكلمات الرئيسية. على سبيل المثال، نمط عنوان <b>URL</b> مثل <kbd><b>path('books/{"<"}int:pk{">"}/', views.BookDetailView.as_view())</b></kbd> يلتقط قيمة عددية (المفتاح الأساسي للكتاب) ويمررها إلى عرض <b>BookDetailView</b> ككلمة رئيسية حجة تسمى <b>pk</b>
         </p>
    </article>
</>
   )
}
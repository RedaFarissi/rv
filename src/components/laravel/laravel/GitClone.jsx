import { CodeCommand } from "../../path";
import images from "../imagesLaravel";

export default function GitClone(props){
   return(
   <>
      <h1 className="heading-style mb-5">Laravel Git Clone </h1>
      <article className="mt-5">
            <ul><li><b>قم أولاً باستنساخ مشروعك</b></li></ul>
            <CodeCommand> git clone &lt;repository_url&gt; </CodeCommand>
            <ul><li><b>انتقل إلى دليل المشروع الخاص بك</b></li></ul>
            <CodeCommand>cd project-directory</CodeCommand>
            <ul><li><b>تثبيت تبعيات المشروع</b></li></ul>
            <CodeCommand>composer install</CodeCommand>
            <div className="alert alert-danger">
                  إذا حدث خطأ مثل هذا، فقم بتثبيت <a href="https://www.7-zip.org/" target="blanck"><bdi>https://www.7-zip.org/</bdi></a> وقم بتشغيل <kbd>composer install</kbd> مرة أخرى
            </div>
            <img src={images.laravel58} className="w-100 border mb-2 mt-3" alt="ControllerPost"/>
            <ul><li><b>إعداد ملفات البيئة</b></li></ul>
            <CodeCommand>copy .env.example .env</CodeCommand>
            <ul><li><b> إنشاء مفتاح التطبيق</b></li></ul>
            <CodeCommand>php artisan key:generate</CodeCommand>
            <ul><li><b> migrate </b></li></ul>
            <CodeCommand>php artisan migrate</CodeCommand>
            <ul><li><b> قم بتشغيل كل seeder في مشروع laravel الخاص بك إذا لزم الأمر </b></li></ul>
            <CodeCommand>php artisan db:seed</CodeCommand>
            <ul><li><b> تشغيل المشروع  </b></li></ul>
            <CodeCommand>php artisan serve</CodeCommand>
      </article>
   </>
   )
}
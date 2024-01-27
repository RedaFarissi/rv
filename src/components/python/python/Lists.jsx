import { CodeHighlighter , CodeCommand} from "../../path";

export default function Lists(){
    return(
    <>
        <h1 className="heading-style heading-style-python-color"> Python Lists</h1>
        <article className="mt-5">
            <p className="style_divv">    
                في لغة البرمجة <b>Python</b>، المصفوفة تُعرف باسم "قائمة" <b>(List)</b>. هي هيكل بيانات يمكن استخدامه لتخزين مجموعة من العناصر، وتتميز بأنها قائمة مرتبة ويمكن تعديلها. يمكن للعناصر في القائمة أن تكون من أي نوع من أنواع البيانات، ويتم الوصول إلى العناصر باستخدام فهرسها.
            </p>
            <h2 className="title-h2">1 - إنشاء قائمة .</h2>
            <p className="style_divv">
                يمكنك إنشاء قائمة باستخدام الأقواس الزاوية <kbd>[]</kbd> وفصل العناصر بفواصل:
                <CodeHighlighter  code={`my_list = [1, 2, 3, 4, 5]
print(my_list) # Output: [1, 2, 3, 4, 5]`} language="python" addclassName="mt-3 mb-3" copie={true}/>   
            </p>
            <h2 className="title-h2">2 - الوصول إلى العناصر في القائمة</h2>
            <p className="style_divv">  
                يمكنك الوصول إلى العناصر في القائمة باستخدام الفهرس (الفهارس)
                <CodeHighlighter  code={`my_list = [1, 2, 3, 4, 5]
print(my_list[0])  # First item  => Output: 1
print(my_list[2])  # The third item  => Output : 3`} language="python" addclassName="mt-3 mb-3" copie={true}/>   
            </p>
            <h2 className="title-h2">3 - تعديل العناصر في القائمة </h2>
            <p className="style_divv">  
                يمكنك تغيير قيمة عنصر معين في القائمة باستخدام الفهرس
                <CodeHighlighter  code={`my_list = [1, 2, 3, 4, 5]
my_list[1] = 10

print(my_list) # Output: [1, 10, 3, 4, 5]`} language="python" addclassName="mt-3 mb-3" copie={true}/>   
                يمكنك أيضًا استخدام الطريقة <b>insert</b> لتعديل قيمة عنصر في مكان معين:
                <CodeHighlighter  code={`my_list = [1, 2, 3, 4, 5]
my_list.insert(2, 20) # 2 is index and 20 is value

print(my_list) # Output: [1, 2, 20, 3, 4, 5]`} language="python" addclassName="mt-3 mb-3" copie={true}/>   
                يمكنك استخدام الترقيم <b>(Slicing)</b> لتعديل مجموعة من العناصر في القائمة:
                <CodeHighlighter  code={`my_list = [1, 2, 3, 4, 5]
my_list[1:4] = [10, 20, 30]

print(my_list) # Output: [1, 10, 20, 30, 5]`} language="python" addclassName="mt-3 mb-3" copie={true}/>   
            </p>
            <h2 className="title-h2">4 - إضافة عناصر إلى القائمة</h2>
            <p className="style_divv">  
                يمكنك إضافة عنصر إلى نهاية القائمة باستخدام <b>append</b>
                <CodeHighlighter  code={`my_list = [1, 2, 3, 4, 5]
my_list.append(6)
print(my_list) # Output: [1, 2, 3, 4, 5, 6]`} language="python" addclassName="mt-3 mb-3" copie={true}/>   
            </p>
            <h2 className="title-h2">5 - حذف عنصر من القائمة</h2>
            <p className="style_divv"> 
                حذف عنصر من القائمة باستخدام إما طريقة <b>remove</b>
                <CodeHighlighter  code={`my_list = [1, 2, 3, 4, 5]
my_list.remove(3) # Remove the value 3 from the list

print(my_list) # Output: [1, 2, 4, 5]`} language="python" addclassName="mt-3 mb-3" copie={true}/>   
                حذف عنصر من القائمة باستخدام إما طريقة <b>del</b>
                <CodeHighlighter  code={`my_list = [1, 2, 3, 4, 5]
del my_list[0]   # Delete the element at index 0

print(my_list) # Output: [2, 3, 4, 5]`} language="python" addclassName="mt-3 mb-3" copie={true}/>   
            </p>
            <h2 className="title-h2">6 - طول القائمة</h2>
            <p className="style_divv">  
                يمكنك معرفة طول القائمة باستخدام <b>len</b>
                <CodeHighlighter  code={`my_list = [1, 2, 3, 4, 5]
length = len(my_list)
print(length) # Output: 5`} language="python" addclassName="mt-3 mb-3" copie={true}/>
            </p>
            <h2 className="title-h2">7 - دمج قوائم </h2>
            <p className="style_divv">  
                يمكنك دمج (وصل) قوائم باستخدام عامل الجمع <kbd>+</kbd>
                <CodeHighlighter  code={`list1 = [1, 2, 3]
list2 = [4, 5, 6]
combined_list = list1 + list2
print(combined_list) # Output: [1, 2, 3, 4, 5, 6]`} language="python" addclassName="mt-3 mb-3" copie={true}/>   
            </p>
        </article>
    </>
    )
}
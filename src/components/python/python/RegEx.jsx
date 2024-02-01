import { CodeHighlighter , CodeCommand} from "../../path";

export default function RegEx(){
    return(
        <>
        <h1 className="heading-style heading-style-python-color"> Python RegEx </h1>
        <article className="mt-5">
            <p className="style_divv">
                <b>RegEx</b>، أو التعبير العادي <b>(Regular Expression)</b> ، عبارة عن سلسلة من الأحرف التي تشكل نمط بحث.<br/>
                يمكن استخدام <b>RegEx</b> للتحقق مما إذا كانت السلسلة تحتوي على نمط البحث المحدد.
            </p>
            <h2 className="title-h2">1 - وحدة RegEx  </h2>
            <p className="style_divv">
                تحتوي لغة <b>Python</b> على حزمة مدمجة تسمى <b>re</b>، والتي يمكن استخدامها للعمل مع التعبيرات العادية.<br/>
                استيراد وحدة إعادة:
                <CodeHighlighter code={`import re`} language="python" addclassName="mt-3 mb-3" copie={true}/>   
            </p>
            <div className="mital"> متال : </div>
            <ul><li>عندما تقوم باستيراد الوحدة <b>re</b>، يمكنك البدء في استخدام التعبيرات العادية</li></ul>
            <CodeHighlighter  code={`import re

#Check if the string starts with "The" and ends with "Spain":

txt = "The rain in Spain"
x = re.search("^The.*Spain$", txt)

if x:
    print("YES! We have a match!")
else:
    print("No match")`} language="python" file_name="desktop / app.py" addclassName="mt-3 mb-3" copie={true}/>
            <CodeCommand copy={false}>
                PS C:\Users\SURFACE BOOK\desktop{">"} <span className="text-success">python app.py</span><br/>
                YES! We have a match!
            </CodeCommand>
            <h2 className="title-h2">2 - وظائف RegEx  </h2>
            <p className="style_divv">
                توفر الوحدة <b>re</b> مجموعة من الوظائف التي تسمح لنا بالبحث عن سلسلة متطابقة:
                <table className="table table-bordered text-light">
                    <thead className="bg-secondary">
                        <tr className="text-center fs-5">
                            <th>الوصف</th>
                            <th>الوظيفة</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td> إرجاع قائمة تحتوي على كافة التطابقات </td>
                            <td dir="ltr"> findall </td>
                        </tr>
                        <tr>
                            <td> تُرجع كائن مطابقة إذا كان هناك تطابق في أي مكان في السلسلة </td>
                            <td dir="ltr"> search </td>
                        </tr>
                        <tr>
                            <td> إرجاع قائمة حيث تم تقسيم السلسلة في كل <b>match</b> </td>
                            <td dir="ltr"> split </td>
                        </tr>
                        <tr>
                            <td> يستبدل واحدًا أو أكثر من التطابقات بسلسلة </td>
                            <td dir="ltr"> sub </td>
                        </tr>
                    </tbody>
                </table>
            </p>
            <h2 className="title-h2">3 - Metacharacters </h2>
            <p className="style_divv">
                الأحرف الأولية <b>(Metacharacters)</b> هي أحرف ذات معنى خاص 
                <table className="table table-bordered text-light">
                    <thead className="bg-secondary">
                        <tr className="text-center fs-5">
                            <th>مثال</th>
                            <th>الوصف</th>
                            <th>الترميز</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td dir="ltr"> "[a-m]" </td>
                            <td> مجموعة من الشخصيات </td>
                            <td> [ ] </td>
                        </tr>
                        
                    </tbody>
                </table>
            </p>
            
    
        </article>
        </>
    )
}
import { CodeHighlighter , CodeCommand} from "../../path";
import images from "../imagesPython"
export default function Dictionaries(){
    return(
    <>
        <h1 className="heading-style heading-style-python-color"> Python Dictionaries</h1>
        <article className="mt-5">
            <h2 className="title-h2">1 - ما هو Dictionary </h2>
            <p className="style_divv">
                في <b>Python</b>، يُعد القاموس <b>(Dictionary)</b> مجموعة غير مرتبة من أزواج المفتاح والقيمة. يجب أن يكون كل مفتاح في القاموس فريدًا، وهو مرتبط بقيمة معينة. يتم تعريف القواميس عن طريق وضع قائمة مفصولة بالفواصل من أزواج المفتاح والقيمة داخل أقواس زوجية {"{}"}. إليك كيفية إنشاء قاموس
                <CodeHighlighter  code={`my_dict = {'key1': 'value1', 'key2': 'value2', 'key3': 'value3'}`} language="python" addclassName="mt-3 mb-3" copie={true}/>   
                يمكن أن تكون المفاتيح في القاموس من مختلف أنواع البيانات (مثل السلاسل والأرقام)، ولكن يجب أن تكون لا تُغير. يمكن أن تكون القيم في القاموس من أي نوع من الأنواع، بما في ذلك قواميس أخرى.
            </p>
            <h2 className="title-h2">2 - الوصول إلى القيم في القاموس باستخدام المفاتيح</h2>
            <div className="mital"> متال : </div>
            <CodeHighlighter  code={`my_dict = {'key1': 'value1', 'key2': 'value2', 'key3': 'value3'}
            
print(my_dict['key1'])  #Output : value1`} language="python" file_name="desktop / app.py" addclassName="mt-3 mb-3" copie={true}/>   
            <CodeCommand copy={false}>
                PS C:\Users\SURFACE BOOK\desktop{">"} <span className="text-success">py app.py</span><br/>
                value1
            </CodeCommand>
            <h2 className="title-h2">3 - لتحقق مما إذا كان مفتاح معين موجودًا في القاموس</h2>
            <div className="mital"> متال : </div>
            <CodeHighlighter  code={`my_dict = {'key1': 'value1', 'key2': 'value2', 'key3': 'value3'}
        
print('key2' in my_dict)  #Output : True

if 'key2' in my_dict :
    print(my_dict['key2'])`} language="python" addclassName="mt-3 mb-3" copie={true}/>   
            <CodeCommand copy={false}>
                PS C:\Users\SURFACE BOOK\desktop{">"} <span className="text-success">py app.py</span><br/>
                True<br/>value2
            </CodeCommand>
            <h2 className="title-h2">4 -  الانتقال عبر المفاتيح أو القيم أو أزواج المفتاح والقيم في القاموس </h2>
            <div className="mital"> متال : </div>
            <CodeHighlighter  code={`my_dict = {'key1': 'value1', 'key2': 'value2', 'key3': 'value3'}
        
print("Iterating through keys :")
for key in my_dict:
    print(key)

print("\\n\\nIterating through values :")
for value in my_dict.values():
    print(value)
print("\\n\\nIterating through key-value pairs :") 
for key, value in my_dict.items():
    print(key, value)`} language="python" file_name="desktop / app.py" addclassName="mt-3 mb-3" copie={true}/>   
            <CodeCommand copy={false}>
                PS C:\Users\SURFACE BOOK\desktop{">"} <span className="text-success">py app.py</span><br/>
                Iterating through keys :<br/>
                key1<br/>
                key2<br/>
                key3<br/><br/><br/>
                Iterating through values :<br/>
                value1<br/>
                value2<br/>
                value3<br/><br/><br/>
                Iterating through key-value pairs :<br/>
                key1 value1<br/>
                key2 value2<br/>
                key3 value3<br/>
            </CodeCommand>
            <h2 className="title-h2">5 - تعديل القاموس </h2>
            <div className="mital"> متال : </div>
            <CodeHighlighter  code={`my_dict = {'key1': 'value1', 'key2': 'value2', 'key3': 'value3'}
        
# Modifying a value
my_dict['key1'] = 'new_value'

# Adding a new key-value pair
my_dict['key4'] = 'value4'

# Removing a key-value pair
del my_dict['key2']

print(my_dict)`} language="python" file_name="desktop / app.py" addclassName="mt-3 mb-3" copie={true}/>   
            <CodeCommand copy={false}>
                PS C:\Users\SURFACE BOOK\desktop{">"} <span className="text-success">py app.py</span><br/>
                {"{"}'key1': 'new_value', 'key3': 'value3', 'key4': 'value4'{"}"}
            </CodeCommand>
            <h2 className="title-h2">6 - إنشاء قواميس متداخلة</h2>
            <div className="mital"> متال : </div>
            <CodeHighlighter  code={`nested_dict = {
    'key1': {'subkey1': 'sub value 1', 'otherkey1':"other value 1"}, 
    'key2': {'subkey2': 'sub value 2','otherkey2':"other value 2"}
}


print(nested_dict['key1'])
print(nested_dict['key1']['subkey1'])
print( len(nested_dict) )`} language="python" file_name="desktop / app.py" addclassName="mt-3 mb-3" copie={true}/>   
            <CodeCommand copy={false}>
                PS C:\Users\SURFACE BOOK\desktop{">"} <span className="text-success">py app.py</span><br/>
                {"{"}'subkey1': 'sub value 1', 'otherkey1': 'other value 1'{"}"}<br/>
                sub value 1<br/>
                2
            </CodeCommand>
            <h2 className="title-h2">7 - إسترجاع جميع المفاتيح من قاموس  </h2>
            <div className="mital"> متال : </div>
            <CodeHighlighter  code={`my_dict = {'key1': 'value1', 'key2': 'value2', 'key3': 'value3'}

all_keys = my_dict.keys()
print(all_keys)

# If you want to convert the keys to a list, you can use list()
key_list = list(all_keys)

print(key_list)`} language="python" file_name="desktop / app.py" addclassName="mt-3 mb-3" copie={true}/>   
            <CodeCommand copy={false}>
                PS C:\Users\SURFACE BOOK\desktop{">"} <span className="text-success">py app.py</span><br/>
                dict_keys(['key1', 'key2', 'key3'])<br/>
                ['key1', 'key2', 'key3']
            </CodeCommand>
        </article>
    </>
    )
}
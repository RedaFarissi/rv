import { CodeHighlighter , CodeCommand} from "../../path";
export default function Strings(){
    return(
        <article className="mt-5">
            <h2 id="strings" className="title-h2">  النصوص في البايثون . </h2>
            <p className="style_divv">
                في <b>Python</b>، السلاسل <b>(Strings)</b> هي تسلسلات من الأحرف وتُستخدم لتمثيل النصوص. يمكنك إنشاء سلسلة بواسطة وضع النص بين علامات الاقتباس .
            </p>
            <div className="mital"> متال 1 : </div>
            <CodeHighlighter  code={`# Using single quotes
string_single_quotes = 'Welcome to Python!'

# Using double quotes
string_double_quotes = "Python is fun and easy to use."

# Using triple quotes for multiline strings
multiline_string = '''This
is
a
multiline
string
in
Python.'''

print(string_single_quotes)
print(string_double_quotes)
print(multiline_string)`} language="python" file_name="desktop / app.py"  addclassName="mt-3 mb-3" copie={true}/>   
            <CodeCommand copy={false}>PS C:\Users\SURFACE BOOK\desktop{">"} <span className="text-success">py app.py</span><br/>
                Welcome to Python!<br/>
                Python is fun and easy to use.<br/>
                This<br/>
                is<br/>
                a<br/>
                multiline<br/>
                string<br/>
                in<br/>
                Python.
            </CodeCommand>
            <div className="mital"> متال 2 : </div>
            <CodeHighlighter  code={`my_string = "Reda Eskouni"

# Accessing the first character
first_char = my_string[0] 
print(first_char)

# Accessing the third character
third_char = my_string[2]  
print(third_char)

# Accessing a range of characters 
substring = my_string[3:9] 
print(substring)


substring = my_string[5:] 
print(substring)`} language="python" file_name="desktop / app.py" addclassName="mt-3 mb-3" copie={true}/>   
            <CodeCommand copy={false}>PS C:\Users\SURFACE BOOK\desktop{">"} <span className="text-success">py app.py</span><br/>
                R<br/>
                d      <br/>
                a Esko <br/>
                Eskouni<br/>
            </CodeCommand>
            <div className="mital"> متال 3 : </div>
            <CodeHighlighter  code={`string_single_quotes = 'Welcome to Python!'
string_double_quotes = "Python is fun and easy to use."

# Concatenating two strings
concatenated_string = string_single_quotes + " " + string_double_quotes
print(f"{concatenated_string} \n")

# Repeating a string
repeated_string = string_single_quotes * 3
print(f"{repeated_string} \n")

# Converting to lowercase
lowercase_string = string_double_quotes.lower()
print(f"{lowercase_string} \n")

# Converting to uppercase
uppercase_string = string_double_quotes.upper()
print(f"{uppercase_string} \n")

# Finding the position of a specific character in the string
index_of_char = string_double_quotes.index("a")
print(f"{index_of_char} \n")`} language="python" file_name="desktop / app.py" addclassName="mt-3 mb-3" copie={true}/>   
            <CodeCommand copy={false}>PS C:\Users\SURFACE BOOK\desktop{">"} <span className="text-success">py app.py</span><br/>
                Welcome to Python! Python is fun and easy to use. <br/><br/>
                Welcome to Python!Welcome to Python!Welcome to Python! <br/><br/>
                python is fun and easy to use.<br/><br/>
                PYTHON IS FUN AND EASY TO USE.<br/><br/>
                14<br/>
            </CodeCommand>
        </article>

    )
}
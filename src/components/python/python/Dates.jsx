import { CodeHighlighter , CodeCommand} from "../../path";

export default function Dates(){
    const dateExemple=()=>{
        var currentDate = new Date();
        var year = currentDate.getFullYear();
        var month = ('0' + (currentDate.getMonth() + 1)).slice(-2); 
        var day = ('0' + currentDate.getDate()).slice(-2);
        var formattedDate = year + '-' + month + '-' + day;
        return formattedDate;
    }
    const dateExemple2=()=>{
        var currentTime = new Date();
        var hours = ('0' + currentTime.getHours()).slice(-2);
        var minutes = ('0' + currentTime.getMinutes()).slice(-2);
        var seconds = ('0' + currentTime.getSeconds()).slice(-2);
        var formattedTime = hours + ':' + minutes + ':' + seconds;
        return formattedTime;
    }
    const dateExemple3=()=>{
        return dateExemple()+ " " + dateExemple2()
    }

    return(
        <>
        <h1 className="heading-style heading-style-python-color"> Python Dates</h1>
        <article className="mt-5">
            <h2 className="title-h2">1 -  استيراد وحدة datetime </h2>
            <p className="style_divv">
                في <b>Python</b> ، يتم التعامل مع التواريخ عادة باستخدام وحدة <b>datetime</b>.<br/>
                إليك نظرة أساسية عن كيفية التعامل مع التواريخ في <b>Python</b>:
                <CodeHighlighter code={`from datetime import datetime, date, time, timedelta`} language="python" addclassName="mt-3 mb-3" copie={true}/>   
            </p>
            <h2 className="title-h2">2 - إنشاء كائنات التاريخ والوقت </h2>
            <h3 className="title-h3">1 - Date </h3>
            <div className="mital"> متال : </div>
            <CodeHighlighter  code={`from datetime import date

today = date.today()
print(today)   # Output: YYYY-MM-DD format

# You can also create a specific date
custom_date = date(2022, 12, 31)
print(custom_date)`} language="python" file_name="desktop / app.py" addclassName="mt-3 mb-3" copie={true}/>   
            <CodeCommand copy={false}>
                PS C:\Users\SURFACE BOOK\desktop{">"} <span className="text-success">python app.py</span><br/>
                {dateExemple()}<br/>2022-12-31
            </CodeCommand>
            <h3 className="title-h3">2 - Time </h3>
            <div className="mital"> متال : </div>
            <CodeHighlighter  code={`from datetime import datetime , time

current_time = datetime.now().time()
print(current_time)   # Output: HH:MM:SS format

# You can also create a specific time
custom_time = time(12, 30, 45)
print(custom_time)`} language="python" file_name="desktop / app.py" addclassName="mt-3 mb-3" copie={true}/>   
            <CodeCommand copy={false}>
                PS C:\Users\SURFACE BOOK\desktop{">"} <span className="text-success">python app.py</span><br/>
                {dateExemple2()}<br/>12:30:45
            </CodeCommand>
            <h3 className="title-h3">3 -DateTime </h3>
            <div className="mital"> متال : </div>
            <CodeHighlighter  code={`from datetime import datetime 

current_datetime = datetime.now()
print(current_datetime)  # Output: YYYY-MM-DD HH:MM:SS format

# You can also create a specific datetime
custom_datetime = datetime(2022, 12, 31, 12, 30, 45)
print(custom_datetime)`} language="python" file_name="desktop / app.py" addclassName="mt-3 mb-3" copie={true}/>   
            <CodeCommand copy={false}>
                PS C:\Users\SURFACE BOOK\desktop{">"} <span className="text-success">python app.py</span><br/>
                {dateExemple3()}<br/>2022-12-31 12:30:45
            </CodeCommand>
        </article>
        </>
    )
}
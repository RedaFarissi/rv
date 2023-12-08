import "./Assignment.css"

export default function Assignment(){
    return(
<section className="section-conetent">
    <h1 className="heading-style heading-style-js-color">JavaScript Assignment</h1>
    <article>
        <p className="style_divv mt-5">
            تقوم عوامل التعيين بتعيين قيم لمتغيرات <b>JavaScript</b>. <br/>
            <table dir="ltr">
                <tr> <th> Operator </th> <th> Example </th> <th> Same As</th> </tr>
                <tr> <td>= </td> <td>x = y  </td> <td>x = y </td> </tr>
                <tr> <td>+=</td> <td>x += y </td> <td>x = x + y</td></tr>
                <tr> <td>-+</td> <td>x -= y </td> <td>x = x - y</td></tr>
                <tr> <td>*=</td> <td>x *= y </td> <td>x = x * y</td></tr>
                <tr> <td>/=</td> <td>x /= y </td> <td>x = x / y</td></tr>
                <tr> <td>%=</td> <td>x %= y </td> <td>x = x % y</td></tr>
                <tr> <td>{">>"}=</td> <td>x {">>"}= y </td> <td>x = x {">>"} y</td></tr>
                <tr> <td>{"<<"}=</td> <td>x {"<<"}= y </td> <td>x = x {"<<"} y</td></tr>
                <tr> <td>&=</td> <td>x &= y </td> <td>x = x & y</td></tr>
                <tr> <td>^=</td> <td>x ^= y </td> <td>x = x ^ y</td></tr>
                <tr> <td>|=</td> <td>x |= y </td> <td>x = x | y</td></tr>
                <tr> <td>**=</td> <td>x **= y </td> <td>x = x ** y</td></tr>
            </table>
        </p>
    </article>
    <article>
        <h2 className="title-h2">1. عامل الإسناد</h2>
        <div className="mital"> متال :  </div>
        <ul><li>يعين عامل الإسناد(<b style={{color:"darkorange"}}>=</b>) قيمة إلى متغير.</li></ul>
        <img src="{% static 'js/js6_Assignment.png' %}" className="img"/>
        <div className="styleee img"><h2>The = Operator</h2>10</div>
    </article>
    <article>
        <h2 className="title-h2">2. عامل التخصيص <bdi>(+=)</bdi></h2>
        <div className="mital"> متال :  </div>
        <ul><li> يضيف عامل التخصيص += قيمة إلى متغير . </li></ul>
        <img src="{% static 'js/js6_Assignment2.png' %}" className="img"/>
        <div className="styleee img"><h2>The += Operator</h2>15</div>
    </article>
    <article>
        <h2 className="title-h2">3. عامل التخصيص <bdi>(-=)</bdi></h2>
        <div className="mital"> متال :  </div>
        <ul><li> يطرح عامل التخصيص -= قيمة من متغير. </li></ul>
        <img src="{% static 'js/js6_Assignment3.png' %}" className="img"/>
        <div className="styleee img"><h2>The -= Operator</h2>5</div>
    </article>
    <article>
        <h2 className="title-h2">4. عامل التخصيص <bdi>(*=)</bdi></h2>
        <div className="mital"> متال :  </div>
        <ul><li> * = عامل الإسناد يضرب متغيرًا.  </li></ul>
        <img src="{% static 'js/js6_Assignment4.png' %}" className="img"/>
        <div className="styleee img">
            <h2>The *= Operator</h2>
            50
        </div>
    </article>
    <article>
        <h2 className="title-h2">5. عامل التخصيص <bdi>(/=)</bdi></h2>
        <div className="mital"> متال :  </div>
        <ul><li> /= عامل الإسناد يقسم متغيرًا.  </li></ul>
        <img src="{% static 'js/js6_Assignment5.png' %}" className="img"/>
        <div className="styleee img"><h2>The /= Operator</h2>2</div>
    </article>
    <article>
        <h2 className="title-h2">6. عامل التخصيص <bdi>(%=)</bdi></h2>
        <div className="mital"> متال :  </div>
        <ul><li> /= عامل الإسناد يقسم متغيرًا.  </li></ul>
        <img src="{% static 'js/js6_Assignment6.png' %}" className="img"/>
        <div className="styleee img"><h2>The %= Operator</h2>0</div>
    </article>
</section>
    )
}
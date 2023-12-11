export default function ValidationAPI(){
    //table ,tr,th,td { border-collapse:collapse; border: 2px solid white; }

    // function myFunction() {
    //     const inpObj = document.getElementById("Id1");
    //     const resulta = document.getElementById("resulta");
    //     if (!inpObj.checkValidity()) {
    //       resulta.innerHTML = inpObj.validationMessage;
    //     }
    //   }
    return(
<section className="section-conetent">
    <h1 className="heading-style heading-style-js-color">JavaScript Validation API</h1>
    <article>
        <h2 className="title-h2">1- طرق التحقق من صحة القيد </h2>
        <table className="table text-light" dir="ltr">
            <thead className="text-center">
                <tr>
                    <th> الخاصية </th>
                    <th> الوصف </th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td className="ps-4"> <bdi>checkValidity()</bdi> </td>
                    <td className="pe-4" dir="rtl"> إرجاع <b>true</b> إذا كان عنصر الإدخال يحتوي على بيانات صحيحة. </td>
                </tr>
                <tr>
                    <td className="ps-4"> <bdi>setCustomValidity()</bdi> </td>
                    <td className="pe-4" dir="rtl"> يضبط خاصية <b>validationMessage</b> لعنصر إدخال. </td>
                </tr>
            </tbody>
        </table>

        <div className="mital">متال :  </div>
        <img src="{% static 'js/js138_checkValidity.png' %}" className="img"/>
        <div className="styleee">
            <input id="Id1" type="number" min="100" required/>
            <button onclick="myFunction()">OK</button>
            <p id="resulta"></p>
        </div>
    </article>
    <article>
        <h2 className="title-h2">2- خصائص DOM للتحقق من صحة القيد</h2>
        <table  className="table text-light" dir="ltr">
            <thead className="text-center">
                <tr>
                    <th> الخاصية </th>
                    <th> الوصف </th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td className="ps-4"> validity </td>
                    <td className="pe-4" dir="rtl"> يحتوي على خصائص منطقية تتعلق بصلاحية عنصر الإدخال. </td>
                </tr>
                <tr>
                    <td className="ps-4"> validationMessage </td>
                    <td className="pe-4" dir="rtl"> يحتوي على الرسالة التي سيعرضها المتصفح عندما تكون الصلاحية خاطئة. </td>
                </tr>
                <tr>
                    <td className="ps-4"> willValidate </td>
                    <td className="pe-4" dir="rtl"> يشير إلى ما إذا كان سيتم التحقق من صحة عنصر الإدخال.  </td>
                </tr>
            </tbody>
        </table>
    </article>
</section>
    )
}
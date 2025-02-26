import { Footer } from "../path";

const ReportAnErrorUser = (props) => {
    props.scrollY_to_0();


  return (
<>
    <section className="container" style={{marginTop: "200px"}}  onClick={props.boxProfileStyle}>
    <form>
        <div className="row">
            <span className="col-sm-1"></span>
            <div className="mb-3 col-sm-5">
                <label for="pageLink" className="form-label"> رابط الصفحة (التي فيها المشكلة) <span className="text-danger">*</span> </label>
                <input type="url" dir="ltr" className="form-control" id="pageLink" name="pageLink" placeholder="أدخل الرابط هنا" required />
            </div>
            <div className="mb-3 col-sm-5">
                <label for="issueType" className="form-label">نوع المشكلة <span className="text-danger">*</span></label>
                <select className="form-select" id="issueType" name="issueType">
                    <option value="" selected>اختر نوع المشكلة</option>
                    <option value="error">خطأ في الصفحة</option>
                    <option value="bug">خلل برمجي</option>
                    <option value="design">مشكلة في التصميم</option>
                    <option value="other">أخرى</option>
                </select>
            </div>
            <span className="col-sm-1"></span>
           
            <span className="col-sm-1 mt-3"></span>

            <div className="mb-3 col-sm-10 mt-3">
                <label for="issueDescription" className="form-label">موضوع المشكلة</label>
                <textarea className="form-control" id="issueDescription" name="issueDescription" rows="6" placeholder="اكتب وصف المشكلة هنا"></textarea>
            </div>
           
        </div>
        <button type="submit" className="m-auto btn btn-primary">إرسال</button>
    </form>
    </section>
    <br /><br />
    <Footer 
          widthFooter="100%"
          block_1={"col-sm-10 col-sm-10 col-md-8 col-lg-4 offset-lg-2 col-xl-4 offset-xl-1"}
          block_2={"col-sm-10 col-md-8 col-lg-4 col-xl-4"}
          blockChildStyle={{width: "90%" , margin:"auto"}}
    />
</>
    )
}



export default ReportAnErrorUser;
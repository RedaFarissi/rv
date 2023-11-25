import { CodeHighlighter ,  Result} from "../../path";
import images from "../imagesCss";

export default function WordSpacing(props){
    return(
<section className="section-conetent">
    <h1 className="heading-style heading-style-css-color"> CSS Word-Spacing </h1>
    <article>
      <div className="style_divv mt-5">
          تعيّن الخاصية <b>word-spacing</b> في لغة <b>CSS</b>  سلوك التباعد الأفقي بين كلمات النص. تُضاف هذه القيمة إلى التباعد الطبيعي بين الكلمات أثناء عرض النص. تؤدي القيم الموجبة لتباعد الكلمات  ، بينما تعمل القيم السالبة لتباعد الأحرف على تقريب الكلمات من بعضها.
      </div>
        {/* <div className="mital">متال :  </div>
        <ul><li>أنقر على عناصر القائمة لتعرف بشكل أفضل عن الخاصية <b>word-spacing</b> . </li></ul>
        <div dir="ltr" style="margin-top:5vh;background-color:azure;padding:12px 8px;border-radius:9px;color:black;">
            <div className="row">
              <div className="col-6">
                <div className="list-group" id="list-tab" role="tablist">
                  <a className="list-group-item list-group-item-action active" id="list-home-list" data-bs-toggle="list" href="#list-home" role="tab" aria-controls="list-home">word-spacing: normal</a>
                  <a className="list-group-item list-group-item-action" id="list-profile-list" data-bs-toggle="list" href="#list-profile" role="tab" aria-controls="list-profile">word-spacing: .5rem</a>
                  <a className="list-group-item list-group-item-action" id="list-messages-list" data-bs-toggle="list" href="#list-messages" role="tab" aria-controls="list-messages">word-spacing: 2px</a>
                  <a className="list-group-item list-group-item-action" id="list-settings-list" data-bs-toggle="list" href="#list-settings" role="tab" aria-controls="list-settings">word-spacing: -1px</a>
                </div>
            </div>
            <div className="col-6" style="border:1px solid gray;padding:20px">
                <div className="tab-content" id="nav-tabContent">
                  <div className="tab-pane fade show active" id="list-home" role="tabpanel" aria-labelledby="list-home-list" style="word-spacing: normal;">Lorem ipsum dolor, sit amet consectetur adipisicing elit.<br> Ullam, distinctio in adipisci accusantium saepe mollitia nesciunt deserunt itaque hic commodi, porro exercitationem.</div>
                  <div className="tab-pane fade" id="list-profile" role="tabpanel" aria-labelledby="list-profile-list" style="word-spacing: .5rem;">Lorem ipsum dolor, sit amet consectetur adipisicing elit.<br> Ullam, distinctio in adipisci accusantium saepe mollitia nesciunt deserunt itaque hic commodi, porro exercitationem.</div>
                  <div className="tab-pane fade" id="list-messages" role="tabpanel" aria-labelledby="list-messages-list" style="word-spacing: 2px;">Lorem ipsum dolor, sit amet consectetur adipisicing elit.<br> Ullam, distinctio in adipisci accusantium saepe mollitia nesciunt deserunt itaque hic commodi, porro exercitationem.</div>
                  <div className="tab-pane fade" id="list-settings" role="tabpanel" aria-labelledby="list-settings-list" style="word-spacing: -1px;">Lorem ipsum dolor, sit amet consectetur adipisicing elit.<br> Ullam, distinctio in adipisci accusantium saepe mollitia nesciunt deserunt itaque hic commodi, porro exercitationem.</div>
                </div>
              </div>
            </div>
        </div> */}
      <div className="sum_exemple_style">
        <div className="mital">متال 2 :  </div>
        <img src={images.css18_word_spacing} className="img"/>
        <div className="style-result">
          <p className="n"> word spacing in CSS</p>
          <p className="e"> word spacing in CSS</p>
          <p className="er">word spacing in CSS</p>
          <p className="et">word spacing in CSS</p>
          <p className="pe">word spacing in CSS</p>
        </div>
      </div>
  </article>

</section>
)
}
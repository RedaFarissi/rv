import { CodeHighlighter ,  Result} from "../../path";
import images from "../imagesCss";

export default function WordWrap(props){
  return(
  <section className="section-conetent">
    <h1 className="heading-style heading-style-css-color"> CSS Word-Wrap </h1>
    <article>

      <div className="style_divv mt-5">
          تتيح الخاصية <b>word-wrap</b> إمكانية كسر الكلمات الطويلة والالتفاف على السطر التالي.
      </div>

      <div className="sum_exemple_style">
          <div className="mital">متال :  </div>
          <img src={images.css55_word_wrap} className="img"/>
          <div className="style-result" style={{overflow:"auto"}}>
              <div className="h1">The word-wrap Property</div>
              <h2> word-wrap: break-word  </h2>
              <div className="box">
                <p className="a">
                  https://www.google.com/search?q=url&oq=url&aqs=chrome..69i57j0i512l4j69i60l3.2059j0j7&sourceid=chrome&ie=UTF-8
                </p>
              </div>
              <h2> word-wrap: normal  </h2>
              <div className="box">
                <p className="b">
                  https://www.google.com/search?q=url&oq=url&aqs=chrome..69i57j0i512l4j69i60l3.2059j0j7&sourceid=chrome&ie=UTF-8
                </p>
              </div>
          </div>
      </div>
    </article>
  </section>
    )
  }
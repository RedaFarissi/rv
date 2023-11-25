import { Routes, Route , Link } from "react-router-dom";
import { 
    Introduction , Width ,Height ,Background,Color,Border,BorderRadius,Padding,
    Margin,FontSize,FontStyle,FontWeight,FontVariant,WhiteSpace,WordWrap,WordBreak,
    TextDecoration,LetterSpacing,WordSpacing,TextAlign,TextTransform,TextIndent,LineHeight,
    Float,Clear,Opacity,Hover,Display,Block,Inline,InlineBlock,Visibility,BorderCollapse,Overflow,
    TextShadow,Perspective,
} from './pathCss.js';

export default function Css(props){
    const arrays = props.css_list.map(e => <li className="list-group-item"><Link  to={`/css/${e.toLowerCase().replace(/\s/g, '-')}`}>CSS {e}</Link></li>)
    return(
    <>
     <main>
        <aside className="aside">
            <h5 className="mt-3">CSS Tutorials</h5>
            <ul className="list-group m-0">
                {arrays}
            </ul>
        </aside>
        <section>
            <Routes>
                <Route path='/' element={<Introduction />} />
                <Route path='/introduction' element={<Introduction />} /> 
                <Route path='/width' element={<Width />} /> 
                <Route path='/height' element={<Height />} /> 
                <Route path='/background' element={<Background />} /> 
                <Route path='/color' element={<Color />} /> 
                <Route path='/border' element={<Border />} /> 
                <Route path='/border-radius' element={<BorderRadius />} /> 
                <Route path='/padding' element={<Padding />} /> 
                <Route path='/margin' element={<Margin />} /> 
                <Route path='/font-size' element={<FontSize />} /> 
                <Route path='/font-style' element={<FontStyle />} /> 
                <Route path='/font-weight' element={<FontWeight />} /> 
                <Route path='/font-variant' element={<FontVariant />} /> 
                <Route path='/white-space' element={<WhiteSpace />} /> 
                <Route path='/word-wrap' element={<WordWrap />} /> 
                <Route path='/word-break' element={<WordBreak />} /> 
                <Route path='/text-decoration' element={<TextDecoration />} /> 
                <Route path='/letter-spacing' element={<LetterSpacing />} /> 
                <Route path='/word-spacing' element={<WordSpacing />} /> 
                <Route path='/text-align' element={<TextAlign />} /> 
                <Route path='/text-transform' element={<TextTransform />} /> 
                <Route path='/text-indent' element={<TextIndent />} /> 
                <Route path='/line-height' element={<LineHeight />} /> 
                <Route path='/float' element={<Float />} /> 
                <Route path='/clear' element={<Clear />} /> 
                <Route path='/opacity' element={<Opacity />} /> 
                <Route path='/hover' element={<Hover />} /> 
                <Route path='/display' element={<Display />} /> 
                <Route path='/block' element={<Block />} /> 
                <Route path='/inline' element={<Inline />} /> 
                <Route path='/inline-block' element={<InlineBlock />} /> 
                <Route path='/visibility' element={<Visibility />} /> 
                <Route path='/border-collapse' element={<BorderCollapse />} /> 
                <Route path='/overflow' element={<Overflow />} /> 
                <Route path='/text-shadow' element={<TextShadow />} /> 
                <Route path='/perspective' element={<Perspective />} /> 
                <Route path='/height' element={<Height />} /> 
                <Route path='/height' element={<Height />} /> 
                <Route path='/height' element={<Height />} /> 
                <Route path='/height' element={<Height />} /> 
                <Route path='/height' element={<Height />} /> 
            </Routes>
        </section>
    </main>
    </>
    )
}
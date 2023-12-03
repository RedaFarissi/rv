import { Routes, Route , Link } from "react-router-dom";
import { 
    Introduction , Width ,Height ,Background,Color,Border,BorderRadius,Padding,
    Margin,FontSize,FontStyle,FontWeight,FontVariant,WhiteSpace,WordWrap,WordBreak,
    TextDecoration,LetterSpacing,WordSpacing,TextAlign,TextTransform,TextIndent,LineHeight,
    Float,Clear,Opacity,Hover,Display,Block,Inline,InlineBlock,Visibility,BorderCollapse,Overflow,
    TextShadow,Perspective,Transform,Transform3D,Resize,Focus,Transition,Position,ListStyleType,
    BoxSizing,ObjectFit,Animation,ClipPath,Cursor,ScrollBehavior,ZIndex,InvalidAndValid,
    Outline,AfterAndBefore,WritingMode,Filter,Quotes,TransformStyle,WebkitTextStroke,
    FlexDirection,FlexWrap,AlignItems,AlignSelf,JustifyContent,Order,Grid,AccentColor,
    Selectors,Functions,Media,ScssComponent,SassComponent
} from './pathCss.js';

export default function Css(props){
    const arrays = props.css_list.map(e => <li><Link  to={`/css/${e.toLowerCase().replace(/\s/g, '-')}`}> <i className="fa-solid fa-caret-right me-2"></i>CSS {e}</Link></li>)
    return(
    <>
     <main>
        <aside className="aside">
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
                <Route path='/transform' element={<Transform />} /> 
                <Route path='/transform-3D' element={<Transform3D />} /> 
                <Route path='/resize' element={<Resize />} /> 
                <Route path='/focus' element={<Focus />} /> 
                <Route path='/transition' element={<Transition />} /> 
                <Route path='/position' element={<Position />} /> 
                <Route path='/list-style-type' element={<ListStyleType />} /> 
                <Route path='/box-sizing' element={<BoxSizing />} /> 
                <Route path='/object-fit' element={<ObjectFit />} /> 
                <Route path='/animation' element={<Animation />} /> 
                <Route path='/clip-path' element={<ClipPath />} /> 
                <Route path='/cursor' element={<Cursor />} /> 
                <Route path='/scroll-behavior' element={<ScrollBehavior />} /> 
                <Route path='/z-index' element={<ZIndex />} /> 
                <Route path='/outline' element={<Outline />} /> 
                <Route path='/invalid-&-valid' element={<InvalidAndValid />} /> 
                <Route path='/after-&-before' element={<AfterAndBefore />} /> 
                <Route path='/writing-mode' element={<WritingMode />} /> 
                <Route path='/filter' element={<Filter />} /> 
                <Route path='/quotes' element={<Quotes />} /> 
                <Route path='/transform-style' element={<TransformStyle />} /> 
                <Route path='/-webkit-text-stroke' element={<WebkitTextStroke />} /> 
                <Route path='/flex-direction' element={<FlexDirection />} /> 
                <Route path='/flex-wrap' element={<FlexWrap />} /> 
                <Route path='/align-items' element={<AlignItems />} /> 
                <Route path='/align-self' element={<AlignSelf />} /> 
                <Route path='/justify-content' element={<JustifyContent />} /> 
                <Route path='/order' element={<Order />} /> 
                <Route path='/grid' element={<Grid />} /> 
                <Route path='/accent-color' element={<AccentColor />} /> 
                <Route path='/selectors' element={<Selectors />} /> 
                <Route path='/functions' element={<Functions />} /> 
                <Route path='/media' element={<Media />} /> 
                <Route path='/scss' element={<ScssComponent />} /> 
                <Route path='/sass' element={<SassComponent />} /> 
            </Routes>
        </section>
    </main>
    </>
    )
}
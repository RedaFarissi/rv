import { Routes, Route , Link} from "react-router-dom";
import {
    Introduction,Install,Syntax,Comments,Variables,EchoPrint,DataTypes,Strings,
    Numbers,Casting,Math,Constants,MagicConstants,Operators,IfElseElseif,Switch,
    Loops,Functions,Arrays,Superglobals,RegEx,FormHandling,FormValidation,
    FormRequired,FormURLAndEmail,FormComplete
} from "./pathPhp"


export default function Php(props){    
    const arr = props.php_list.map(e => <li className="p-0 m-0 list-group-item">
        <Link to={`/php/${e.toLowerCase().replace(/\s/g, '-')}`} className="p-2">
            <i className="fa-solid fa-caret-right me-1"></i> PHP {e}
        </Link>
    </li>)
    return(
        <main>
    <aside className="aside">
        <ul className="list-group m-0 p-0">
            {arr}
        </ul>
    </aside>
    <section className="section-conetent">
        <article className="mt-5">
            <Routes>
                  <Route path='/'  element={<Introduction  />} />
                  <Route path='introduction' element={<Introduction  />} />
                  <Route path='install' element={<Install  />} />
                  <Route path='syntax' element={<Syntax  />} />
                  <Route path='comments' element={<Comments  />} />
                  <Route path='variables' element={<Variables  />} />
                  <Route path='echo-print' element={<EchoPrint  />} />
                  <Route path='data-types' element={<DataTypes  />} />
                  <Route path='strings' element={<Strings  />} />
                  <Route path='numbers' element={<Numbers  />} />
                  <Route path='casting' element={<Casting  />} />
                  <Route path='math' element={<Math  />} />
                  <Route path='constants' element={<Constants  />} />
                  <Route path='magic-constants' element={<MagicConstants  />} />
                  <Route path='operators' element={<Operators  />} />
                  <Route path='if-else-elseif' element={<IfElseElseif  />} />
                  <Route path='switch' element={<Switch  />} />
                  <Route path='loops' element={<Loops  />} />
                  <Route path='functions' element={<Functions  />} />
                  <Route path='arrays' element={<Arrays  />} />
                  <Route path='superglobals' element={<Superglobals  />} />
                  <Route path='regEx' element={<RegEx  />} />
                  <Route path='form-handling' element={<FormHandling  />} />
                  <Route path='form-validation' element={<FormValidation  />} />
                  <Route path='form-required' element={<FormRequired  />} />
                  <Route path='form-url-and-email' element={<FormURLAndEmail  />} />
                  <Route path='form-complete' element={<FormComplete  />} />
            </Routes>
        </article>
    </section>
</main>
    )
}

/*
    <div className="mital"> متال : </div>
    <CodeHighlighter  code={``} language="php" file_name="" addclassName="mt-3 mb-3" copie={true}/>   
*/
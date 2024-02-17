import { Routes, Route , Link} from "react-router-dom";
import {
    Introduction,Install,Syntax,Comments,Variables,EchoPrint,DataTypes,Strings,
    Numbers,Casting,Math,Constants,MagicConstants,Operators,IfElseElseif,Switch,
    Loops,Functions,Arrays,Superglobals,RegEx,FormHandling,FormValidation,
    FormRequired,FormURLAndEmail,FormComplete
} from "./pathPhp"
import xampp_logo from "../../assests/images/logo/xampp.jpg";

export default function Php(props){    
    const arr = props.php_list.map(e => <li className="list-group-item">
        <Link to={`/php/${e.toLowerCase().replace(/\s/g, '-')}`} className="p-2">
            <i className="fa-solid fa-caret-right me-1"></i> PHP {e}
        </Link>
    </li>)
    return(
        <main>
    <aside className="aside">
        <ul className="list-group m-0">
            {arr}
        </ul>
    </aside>
    <section className="section-conetent">
        <article className="mt-5">
            <Routes>
                  <Route path='/'  element={<Introduction />} />
                  <Route path='introduction' element={<Introduction />} />
                  <Route path='install' element={<Install xampp_logo={xampp_logo} />} />
                  <Route path='syntax' element={<Syntax xampp_logo={xampp_logo} />} />
                  <Route path='comments' element={<Comments xampp_logo={xampp_logo} />} />
                  <Route path='variables' element={<Variables xampp_logo={xampp_logo} />} />
                  <Route path='echo-print' element={<EchoPrint xampp_logo={xampp_logo} />} />
                  <Route path='data-types' element={<DataTypes xampp_logo={xampp_logo} />} />
                  <Route path='strings' element={<Strings xampp_logo={xampp_logo} />} />
                  <Route path='numbers' element={<Numbers xampp_logo={xampp_logo} />} />
                  <Route path='casting' element={<Casting xampp_logo={xampp_logo} />} />
                  <Route path='math' element={<Math xampp_logo={xampp_logo} />} />
                  <Route path='constants' element={<Constants xampp_logo={xampp_logo} />} />
                  <Route path='magic-constants' element={<MagicConstants xampp_logo={xampp_logo} />} />
                  <Route path='operators' element={<Operators xampp_logo={xampp_logo} />} />
                  <Route path='if-else-elseif' element={<IfElseElseif xampp_logo={xampp_logo} />} />
                  <Route path='switch' element={<Switch xampp_logo={xampp_logo} />} />
                  <Route path='loops' element={<Loops xampp_logo={xampp_logo} />} />
                  <Route path='functions' element={<Functions xampp_logo={xampp_logo} />} />
                  <Route path='arrays' element={<Arrays xampp_logo={xampp_logo} />} />
                  <Route path='superglobals' element={<Superglobals xampp_logo={xampp_logo} />} />
                  <Route path='regEx' element={<RegEx xampp_logo={xampp_logo} />} />
                  <Route path='form-handling' element={<FormHandling xampp_logo={xampp_logo} />} />
                  <Route path='form-validation' element={<FormValidation xampp_logo={xampp_logo} />} />
                  <Route path='form-required' element={<FormRequired xampp_logo={xampp_logo} />} />
                  <Route path='form-url-and-email' element={<FormURLAndEmail xampp_logo={xampp_logo} />} />
                  <Route path='form-complete' element={<FormComplete xampp_logo={xampp_logo} />} />
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
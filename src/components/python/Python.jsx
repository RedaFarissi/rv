import { Routes, Route , Link} from "react-router-dom";
import {
    Introduction,InstallPython,ExecutePythonInCmd,Indentation,PythonInVisualStudioCode,
    Comments,Variables,Casting,Numbers,Strings,Booleans,Operators,Lists,Tuples,Sets,
    Dictionaries,Condition,WhileLoops,ForLoops,Functions,Lambda,
} from "./pathPython"


export default function Python(props){    
    const arr = props.python_list.map(e => <li className="p-0 m-0 list-group-item">
        <Link to={`/python/${e.toLowerCase().replace(/\s/g, '-')}`} className="p-2">
            <i className="fa-solid fa-caret-right me-1"></i> Python {e}
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
            <h1 className="heading-style heading-style-python-color"> PYTHON </h1>
            <Routes>
                  <Route path='/'  element={<Introduction  />} />
                  <Route path='introduction' element={<Introduction  />} />
                  <Route path='install-windows' element={<InstallPython  />} />
                  <Route path='execute-python-in-cmd' element={<ExecutePythonInCmd  />} />
                  <Route path='indentation'  element={<Indentation  />} />
                  <Route path='python-in-visual-studio-code' element={<PythonInVisualStudioCode  />} />
                  <Route path='comments' element={<Comments  />} />
                  <Route path='variables' element={<Variables  />} />
                  <Route path='casting' element={<Casting  />} />
                  <Route path='numbers' element={<Numbers  />} />
                  <Route path='strings' element={<Strings  />} />
                  <Route path='booleans' element={<Booleans  />} />
                  <Route path='operators' element={<Operators  />} />
                  <Route path='lists' element={<Lists  />} />
                  <Route path='tuples' element={<Tuples  />} />
                  <Route path='sets' element={<Sets  />} />
                  <Route path='dictionaries' element={<Dictionaries  />} />
                  <Route path='condition' element={<Condition  />} />
                  <Route path='whileLoops' element={<WhileLoops  />} />
                  <Route path='forLoops' element={<ForLoops  />} />
                  <Route path='functions' element={<Functions  />} />
                  <Route path='lambda' element={<Lambda  />} />
            </Routes>            
        </section>
    </main>
    )
}
/*
            <div className="mital"> متال : </div>
            <CodeHighlighter  code={``} language="python" file_name="desktop / app.py" addclassName="mt-3 mb-3" copie={true}/>   
*/
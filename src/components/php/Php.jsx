import { Routes, Route , Link} from "react-router-dom";
import {
    Introduction,Install,Comments,Variables,EchoPrint,DataTypes,Strings,Numbers,Casting,
    Math,Constants,Operators,IfElseElseif,Switch,Loops,Break,Functions,Arrays,Superglobals,
    RegEx,DateAndTime,IncludeFiles,Filters,CallbackFunctions,Exceptions,FormHandling,Json,
    WhatIsOop,ClassesObjects,Constructor,Destructor,AccessModifiers,Inheritance,
    ClassConstants,AbstractClasses,Traits,StaticMethods,StaticProperties,Iterables,
    Connect,CreateDatabase,CreateTable,Footer,
} from "./pathPhp";
import xampp_logo from "../../assests/images/logo/xampp.jpg";
import { useDispatch } from 'react-redux';
import { useCustomScroolTo0 , useCustomPhpList } from "../../custom/pathCustoms";

export default function Php(props){    
    const dispatch = useDispatch();
    useCustomScroolTo0();  
    const [php_list] = useCustomPhpList();

    const matrix = php_list.map( e =>(
        <dl>
            { 
                e.map((value, index) => (
                    (index === 0) ? 
                    <dt className="aside-dl-dt">
                        <i className="fa-solid fa-caret-right"></i> {value}
                    </dt> : 
                    <dd className="aside-dl-dd">
                        <Link to={`/php/${value.toLowerCase().replace(/\s/g, '-')}`}> 
                            <i className="fa-solid fa-circle"></i> {value}
                        </Link>
                    </dd>
                ))
            }
        </dl>
    ));
    return(
<>
<main onClick={ (event)=>{ 
    props.clickMenuHeader(event, false); 
    // props.closeSearchPhone(); 
    dispatch({ type: 'FALSE_VISIBILTY_PROFILE' }) }}
>
    <aside className="aside">
        <ul className="list-group m-0">
            {matrix}
        </ul>
    </aside>
    <section className="section-conetent">
        <Routes>
            <Route path='/'  element={<Introduction />} />
            <Route path='introduction' element={<Introduction />} />
            <Route path='install' element={<Install xampp_logo={xampp_logo} />} />
            <Route path='comments' element={<Comments xampp_logo={xampp_logo} />} />
            <Route path='variables' element={<Variables xampp_logo={xampp_logo} />} />
            <Route path='echo-print' element={<EchoPrint xampp_logo={xampp_logo} />} />
            <Route path='data-types' element={<DataTypes xampp_logo={xampp_logo} />} />
            <Route path='strings' element={<Strings xampp_logo={xampp_logo} />} />
            <Route path='numbers' element={<Numbers xampp_logo={xampp_logo} />} />
            <Route path='casting' element={<Casting xampp_logo={xampp_logo} />} />
            <Route path='math' element={<Math xampp_logo={xampp_logo} />} />
            <Route path='constants' element={<Constants xampp_logo={xampp_logo} />} />
            <Route path='operators' element={<Operators xampp_logo={xampp_logo} />} />
            <Route path='conditions' element={<IfElseElseif xampp_logo={xampp_logo} />} />
            <Route path='switch' element={<Switch xampp_logo={xampp_logo} />} />
            <Route path='loops' element={<Loops xampp_logo={xampp_logo} />} />
            <Route path='break' element={<Break xampp_logo={xampp_logo} />} />
            <Route path='functions' element={<Functions xampp_logo={xampp_logo} />} />
            <Route path='arrays' element={<Arrays xampp_logo={xampp_logo} />} />
            <Route path='superglobals' element={<Superglobals xampp_logo={xampp_logo} />} />
            <Route path='regEx' element={<RegEx xampp_logo={xampp_logo} />} />
            <Route path='date-and-time' element={<DateAndTime xampp_logo={xampp_logo} />} />
            <Route path='include-files' element={<IncludeFiles xampp_logo={xampp_logo} />} />
            <Route path='filters' element={<Filters xampp_logo={xampp_logo} />} />
            <Route path='callback-functions' element={<CallbackFunctions xampp_logo={xampp_logo} />} />
            <Route path='exceptions' element={<Exceptions xampp_logo={xampp_logo} />} />
            <Route path='form-handling' element={<FormHandling xampp_logo={xampp_logo} />} />
            <Route path='json' element={<Json xampp_logo={xampp_logo} />} />
            

            <Route path='what-is-oop' element={<WhatIsOop xampp_logo={xampp_logo} />} />
            <Route path='classes-objects' element={<ClassesObjects xampp_logo={xampp_logo} />} />
            <Route path='constructor' element={<Constructor xampp_logo={xampp_logo} />} />
            <Route path='destructor' element={<Destructor xampp_logo={xampp_logo} />} />
            <Route path='access-modifiers' element={<AccessModifiers xampp_logo={xampp_logo} />} />
            <Route path='inheritance' element={<Inheritance xampp_logo={xampp_logo} />} />
            <Route path='class-constants' element={<ClassConstants xampp_logo={xampp_logo} />} />
            <Route path='abstract-classes' element={<AbstractClasses xampp_logo={xampp_logo} />} />
            <Route path='traits' element={<Traits xampp_logo={xampp_logo} />} />
            <Route path='static-methods' element={<StaticMethods xampp_logo={xampp_logo} />} />
            <Route path='static-properties' element={<StaticProperties xampp_logo={xampp_logo} />} />
            <Route path='iterables' element={<Iterables xampp_logo={xampp_logo} />} />


            <Route path='connect' element={<Connect xampp_logo={xampp_logo} />} />
            <Route path='create-database' element={<CreateDatabase xampp_logo={xampp_logo} />} />
            <Route path='create-table' element={<CreateTable xampp_logo={xampp_logo} />} />
        </Routes>
    </section>
</main>
<Footer 
    blockChildStyle={{width: "100%"}}
/>
</>
    )
}

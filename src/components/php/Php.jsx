export default function Php(props){    
    const arr = props.php_list.map(e => <li className="p-0 m-0 list-group-item">
        <a href={`/php#${e.toLowerCase().replace(/\s/g, '-')}`} className="p-2">
            <i className="fa-solid fa-caret-right me-1"></i> PHP {e}
        </a>
    </li>)
    return(
        <main>
    <aside className="aside">
        <ul className="list-group m-0 p-0">
            {arr}
        </ul>
    </aside>
    <section className="section-conetent">
        <h1 className="heading-style heading-style-python-color"> PHP </h1>
        <article className="mt-5">
            <h2 id="intro" className="title-h2"> 1 -مقدمة حول php </h2>
            <p className="style_divv">
                
            </p>
        </article>
    </section>
</main>
    )
}
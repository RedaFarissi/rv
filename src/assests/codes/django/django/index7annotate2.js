export default function index7annotate2(){
    return`  {% for product in products %}
            .......
            <b class='total-like'>{{ product.total_likes }}</b>
            ....            
{% endfor %}`
}
export default function index13models_Objecjs_filter6(){
    return `{% extends "base.html" %}

{% block title %}
    Products
{% endblock title %}

{% block content %}
    
    {% if category %}
        <h2>Category: {{ category.name }}</h2>
    {% else %}
        <h2>Product List</h2>
    {% endif %}

    <table>
        <tr>
            <th>name</th>
            <th>price</th>
            <th>sizes</th>
            <th>description</th>
        </tr>
        {% for product in products %}
            <tr>
                <td>{{ product.name }}</td>
                <td> \${{ product.price }} </td>
                <td>
                    {% if product.sizes.all %}
                        {{ product.sizes.all|join:", " }}
                    {% endif %}
                </td>
                <td>{{ product.description }}</td>
            </tr>                
        {% endfor %}
    </table>
    <h3>Categories</h3>
    <ul>
        <li> <a href={% url 'product_list' %}>All</a>  </li>
        {% for cat in categories %}
            <li><a href="{{ cat.get_absolute_url  }}">{{ cat.name }}</a></li>
        {% endfor %}
    </ul>
{% endblock content %}`
}
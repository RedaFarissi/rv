export default function index5Create_Public_templates2(){
    return `{% extends "base.html" %} 
{% load static %}

{% block title %}
    Products
{% endblock title %}

{% block head %}
    <link rel="stylesheet" href="{% static 'index.css' %}"> 
{% endblock head %}

{% block content %} 
    <h2> Products </h2>
    <main class='main'>    
        <div class="row justify-content-center p-0 mb-5 pb-5">
            {% for product in products %}
                <div class="col-md-4 p-0 mb-4">
                    <div class='cart-product m-auto border p-2 rounded'>
                        <a href="{{ product.get_absolute_url }}" >
                            <img class='w-100 img mb-3' src="{% if product.image %} {{ product.image.url }} {% endif %}">
                        </a>

                        <a href="{{ product.get_absolute_url }}">
                            <h6>
                                <b>{{ product.name|slice:"44" }}{% if product.name|length > 44 %}...{% endif %}</b>
                            </h6>
                            <h6 class='d-flex justify-content-between align-items-center mt-2'> 
                                \${{ product.price }}
                            </h6>
                        </a>
                    </div>
                </div>
            {% endfor %}
        </div>
    </main>
{% endblock %}`
}
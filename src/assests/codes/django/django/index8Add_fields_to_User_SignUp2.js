export default function index8Add_fields_to_User_SignUp2(){
    return `{% extends 'base.html' %}

{% block title %}
    Sign Up
{% endblock %}

{% block content %}
    <form action="{% url 'sign_up' %}" method="POST">
        {% csrf_token %}
        {{ form.as_p }}  
        {% comment %} <!-- add as_p to break fields -->{% endcomment %}
        <button type='submit' class='btn btn-primary'> Create User </button>
    </form>
{% endblock %}`
}
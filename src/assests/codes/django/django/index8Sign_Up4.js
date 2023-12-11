export default function index8Sign_Up4(){
    return `{% extends 'base.html' %}

{% block title %}
    Sign Up
{% endblock %}

{% block content %}
    <form action="{% url 'sign_up' %}" method="POST">
        {% csrf_token %}
        {{ form }}
        <button type='submit' class='btn btn-primary'> Create User </button>
    </form>
{% endblock %}`
}
export default function index9send_email5(){
    return `{% extends 'base.html' %}

{% block title %}
    send email
{% endblock %}

{% block content %}       
    <h4> Send Email </h4>
    <form action="{% url 'send_email' %}" method="POST" class='p-5'>
        {% csrf_token %}
        <input type='text' name='name' placeholder='Title of the email' class='w-100 mb-3' required /><br/>
        <input type='email' name='email' placeholder='the company email adress' class='w-100 mb-3' required/><br/>
        <textarea name='message' placeholder='medssage to be deliverd' class='w-100 mb-3'> </textarea><br/>
        <button type='submit' class='btn btn-primary w-100 mb-3'> Send </button><br/>
    </form>
{% endblock %}`
}
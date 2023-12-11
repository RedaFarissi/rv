export default function index9list_emails2(){
    return `{% extends 'base.html' %}

{% block title %}  
    Email List
{% endblock %}

{% block content %}
    <h1>Email List</h1>
    <table class="table">
        <tr>
            <th class='w-25'>Subject</th>
            <th class='w-25'>Sender</th>
            <th class='w-50'>Date</th>
        </tr>
        {% for email in emails %}
            <tr> 
                <td>{{ email.subject }}</td>
                <td>{{ email.sender }}</td>
                <td>{{ email.date }}</td>
            </tr>
        {% endfor %}
    </table>
{% endblock %}`
}
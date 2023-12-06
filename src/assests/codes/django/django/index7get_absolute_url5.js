export default function index7get_absolute_url5(){
    return`{% extends "base.html" %}
{% block title %}
    index
{% endblock %}

{% block content %}
    <table class="table table-dark table-bordered text-light">
        <tr>
            <th> Title </th>
        </tr>    
        {% for i in all %}
            <tr>
                <td>
                    <a href="{{ i.get_absolute_url }}">
                        {{ i.title }}
                    </a>
                </td>
            </tr>
        {% endfor %}
    </table>
{% endblock %}`
}
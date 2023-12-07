export default function index7get_absolute_url13(){
    return`{% extends "base.html" %}
{% block title %}
    category {{category.id}}
{% endblock %}


{% block content %}
    <h2> Category {{category.id}}</h2>
    <table class='table table-dark table-bordered text-light'>
        <tr>
            <th> category </th>
        </tr>    
        <tr>
            <td> {{category.name}} </td>
        </tr>
    </table>
{% endblock %}`
}
export default function index7get_absolute_url6(){
    return`{% extends "base.html" %}
{% block title %}
    detail
{% endblock %}


{% block content %}
   <h2>home_detail</h2>

    <table class='table table-dark table-bordered text-light'>
       <tr>
           <th>title</th>
           <th>author</th>
       </tr>
       <tr>
           <td>{{ book.title }}</td>
           <td>{{ book.author }}</td>
       </tr>
    </table>
{% endblock %}`
}
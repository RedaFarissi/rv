export default function index15Context_Processors4(){
    return `{% extends "base.html" %}

{% block content %}
    <table class="table">
        <thead>
            <tr>
              <th>ID</th>
              <th>Image</th>
              <th>Title</th>
              <th>Description</th>
              <th>Category</th>
              <th>Rate</th>
              <th>Count</th>
            </tr>
        </thead>
        <tbody>
            {% for i in requests %}
                <tr>
                    <td>{{ i.id }}</td>
                    <td><img src="{{ i.image }}" class="w-75"></td>
                    <td>{{ i.title }}</td>
                    <td>{{ i.description }}</td>
                    <td>{{ i.category }}</td>
                    <td>{{ i.rating.rate }}</td>
                    <td>{{ i.rating.count }}</td>
                </tr>
            {% endfor %}
        </tbody>
    </table>
{% endblock %}`
}
export default function index7get_absolute_url12(){
    return`{% endblock %}


{% block content %}
    <table class='table table-dark table-bordered text-light'>
        <tr>
            <th> categories </th>
        </tr>    
        {% for item in categories %}
            <tr>
                <td>
                    <a href="{{ item.get_absolute_url }}">
                        {{ item.name }}
                    </a>
                </td>
            </tr>
        {% endfor %}
    </table>
{% endblock %}`
}
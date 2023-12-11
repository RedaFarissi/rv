export default function index12ModelForm6(){
    return `{% extends 'base.html' %}

{% block content %}

    <h2>Create a new post</h2>

    <form method="post" action="{% url 'create_post' %}">
      {% csrf_token %}
      {{ form.as_p }}
      <button type="submit">Save</button>
    </form>

{% endblock %}`
}
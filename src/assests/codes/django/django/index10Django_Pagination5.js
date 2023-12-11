export default function index10Django_Pagination5(){
    return `{% extends "base.html" %}
{% block title %}
    Blogs
{% endblock  %}

{% block content %}
    {% for i in data %}
        <div class="text-white bg-danger p-4 mt-2">
            <div>
                <ul>
                    <li>{{ i.user }}</li>
                    <li>{{ i.title }}</li>
                    <li>{{ i.article }}</li>
                </ul>
            </div>
        </div>
    {% endfor %}

    {% if data.has_other_pages %}
        <nav aria-label="Page navigation example">
            <ul class="pagination d-flex justify-content-center mt-5">
                {% if data.has_previous %}
                <li class="page-item">
                    <a class="page-link" href="?page={{ data.previous_page_number }}" aria-label="Previous">
                        <span aria-hidden="true">&laquo;</span>
                    </a>
                </li>
                {% endif %}

                {% for i in data.paginator.page_range %}
                <li class="page-item"><a class="page-link" href="?page={{ i }}">{{ i }}</a></li>
                {% endfor %}

                {% if data.has_next %}
                <li class="page-item">
                    <a class="page-link" href="?page={{ data.next_page_number }}" aria-label="Next">
                        <span aria-hidden="true">&raquo; </span>
                    </a>
                </li>
                {% endif %}
            </ul>
        </nav>
    {% endif %}
{% endblock content %}`
}
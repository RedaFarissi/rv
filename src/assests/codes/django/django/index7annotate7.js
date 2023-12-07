export default function index7annotate7(){
    return`{% extends "base.html" %} 

{% block title %}
  annotate 
{% endblock title %}

{% block head %}
    <link rel="stylesheet" href="{% static 'index.css' %}"/>
{% endblock head %}

{% block content %} 
    <h2>All Books</h2>
    <table>
        <tr>
          <th> Title </th>
          <th> Author </th>
          <th> Number Page  </th>
        </tr>
        {% for book in books %}
          <tr>
            <th>{{ book.title }}</th>
            <th>{{ book.author }}</th>
            <th>{{ book.number_page }}</th>
          </tr>
        {% endfor %}
    </table>

    <h2> annotate </h2>
    <table>
        <tr>
          <th>Authors</th>
          <th>Number of books</th>
        </tr>
        {% for author in authors %}
          <tr>
            <th>{{ author.name }}</th>
            <th>{{ author.count_books }}</th>
          </tr>
        {% endfor %}
    </table>

    <table>
        <tr>
            <th>Authors</th>
            <th>Sum pages in all books for each author</th>
        </tr>
        {% for author in authors_page_sum %}
            <tr>
                <th>{{ author.name }}</th>
                <th>{{ author.page_sum }}</th>
            </tr>
        {% endfor %}
    </table>

    <table>
        <tr>
          <th>Authors</th>
          <th>Avg pages in all books for each author</th>
        </tr>
        {% for author in authors_page_avg %}
          <tr>
            <td>{{author.name}}</td>
            <td>{{author.page_avg}}</td>
          </tr>
        {% endfor %}
    </table>
{% endblock content %}
`
}
<!doctype html>
<html>
    <head>
        <title>Title</title>

        {% block meta %}
        <meta charset="utf-8">
        {% endblock %}

        {% block css %}
        {% endblock %}

        {% block js %}
        {% endblock %}

        {% block html-import %}
        {% endblock %}
    </head>
    <body>
        {% include "passport.swig" %}

        {% block content %}
        {% endblock %}

        {% block js-bottom %}
        {% endblock %}

        {% include "footer.swig" %}
    </body>
</html>
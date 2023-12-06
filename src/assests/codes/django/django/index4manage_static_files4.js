export default function index4manage_static_files4(){
    return`{% load static %}
    
<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <title>static</title>
    <meta name="description" content="">
    <meta name="viewport" content="width=device-width, initial-scale=1">
</head>
<body>
    <img src="{% static 'img_pc.png' %}" />
</body>
</html>`
}
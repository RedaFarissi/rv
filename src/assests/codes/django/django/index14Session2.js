export default function index14Session2(){
    return `from django.http import HttpResponse
from django.template import Template, Context

def home_view(request):
    # Get the current value of the session variable 'variable'.
    variable = request.session.get('variable', 0)
    
    # Increment the value by 1.
    variable += 1
    
    # Set the updated value back in the session.
    request.session['variable'] = variable
    
    # Create a Django template object.
    template = Template('<h1> Reload: {{ var }} </h1>')
    
    # Create a Django context object.
    context = Context({
      'var': variable
    })
    
    # Render the template.
    rendered_template = template.render(context)
    
    # Return an HttpResponse object with the rendered template as the content.
    return HttpResponse(rendered_template)`
}
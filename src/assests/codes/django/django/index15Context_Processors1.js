export default function index15Context_Processors1(){
    return `import requests

def requests_app(request):
    response = requests.get('https://fakestoreapi.com/products')
    return {'requests': response.json()}`
}
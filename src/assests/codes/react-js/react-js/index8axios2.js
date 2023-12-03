const index8axios2=()=>{
  return`export default function CreatePost(props){
  
    const [data, setData] = useState({   
        image: null,
        title: 'product name',
        description: 'Product name bla bla ...',
        start: '1',
        default_price: 120,
        price_reduction: 100,
        category: "",
    });
  
    const handleCreatePost = async (event) => {
         event.preventDefault();
         const formData = new FormData();
         formData.append('image', data.image);
         formData.append('title', data.title);
         formData.append('description', data.description);
         formData.append('default_price', data.default_price);
         formData.append('price_reduction', data.price_reduction);
         formData.append('start', data.start);
         formData.append('category', data.category);
         const response = await axios.post(\`\${props.url}create_post/create/\`, formData ,
           {
             headers : { 'Authorization': \`Token \${localStorage.getItem('auth_token')}\`, }
           }
         )
         if(response.data.msg){
          window.location.reload()
         }
    };
  return(
  <form onSubmit={props.handleCreatePost} encType="multipart/form-data"  method="POST"> 
  ....
  </form>
  )
  }
  `
}
export default index8axios2
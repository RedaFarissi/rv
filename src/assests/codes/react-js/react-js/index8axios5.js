const index8axios5=()=>{
return` cart_length = async () =>{
  try{
    const response = await axios.get(\`\${this.state.url}cart/length/\` , {withCredentials: true});
    this.setState( prevState => ({...prevState , cart_length : response.data.length }) )
  }catch(err){
    alert(err)
  }
}
`
}

export default index8axios5
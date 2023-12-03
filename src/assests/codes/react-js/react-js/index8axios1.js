const index8axios1=()=>{
  return`import axios from "axios";

  export default function Login(props){
    const [login , setLogin] = useState({ username:"User_Name" , password:"Your_Password" });
    
    const hundleLogin =(e)=>{
        setLogin({...login , [e.target.name]: e.target.value});
    }
    
    const hundleSubmitLogin = async (event) => {
        event.preventDefault();
        try{
          const response = await axios.post(\`\${props.url}rest-auth/login/\`, login);
          localStorage.setItem('auth_token', response.data.key );
          setLogin({ username:"" , password:"" });
        }catch(err){
          alert(err);
        }
    }
  
    return (
      <form method="POST" onSubmit={hundleSubmit}>
          <div className="form-group first">
            <label htmlFor="username">{languages.login.username}</label>
            <input type="text" name="username" onChange={hundleLogin} value={login.username} id="user_name"/>
          </div>
          
          <div className="form-group last mb-4">
            <label htmlFor="password">{languages.login.password}</label>
            <input type="password" name="password" value={login.password} onChange={hundleLogin} id="password"/>
          </div>  
          <input type="submit" value="Submit" className="btn btn-primary"/>
      </form>
    )
  }`
}
export default index8axios1
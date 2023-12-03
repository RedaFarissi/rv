const index8useNavigate_Router=()=>{
return`import { useNavigate } from 'react-router-dom';

function MyComponent() {
    const navigate = useNavigate();

    function handleClick() {
        navigate('/new-page'); // Navigate to the new route
    }

    return (
        <button onClick={handleClick}>Go to new page</button>
    );
}`
}



export default index8useNavigate_Router;
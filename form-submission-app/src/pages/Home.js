import { Link } from 'react-router-dom';
import "./Home.css"

function Home(props){
    const departments = [{name: "XYZ Warszawa, Poland", id: "xyz"}, 
    {name: "ABC Kraków, Poland", id: "abc"}, {name:"RNQ Berlin, Germany", id: "rnq"}];

    const clickHandler = function(){
        props.onLinkClick(1);
    }
    return(
        <div className="homepage">
            <h2 className="welcome">Welcome</h2>
            <p className="instructions">Select where you want to send your form</p>
            <div className="formlinks">
                {departments.map((dep) => <Link to={"/form/" + dep.id} key={dep.id} onClick={clickHandler} className="formlink">{dep.name}</Link>)}
            </div>
        </div>
    )
}

export default Home;
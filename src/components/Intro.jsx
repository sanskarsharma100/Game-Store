import { Link } from "react-router-dom";

function Intro() {
  return ( 
  <>
    <Link to="/store"><button className="bg-lime-600 w-56 h-56">OPEN STORE</button></Link>
  </> 
  );
}

export default Intro;
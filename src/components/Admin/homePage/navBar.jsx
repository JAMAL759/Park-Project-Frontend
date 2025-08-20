import { Link } from 'react-router-dom'; // fix import
import './navBar.css';

const NavBar = () => {
    return (
        <nav className="navbar">
            <Link to='/'>Home</Link>
            <Link to='/admin'>Admins</Link>
            {<Link to='/park/company'>Companies</Link> }
        </nav>
    );
}

export default NavBar;

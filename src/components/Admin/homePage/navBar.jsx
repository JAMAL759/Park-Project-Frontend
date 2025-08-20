import { Link } from 'react-router'

const NavBar = () => {
    return (
        <>
            <Link to='/'>Home</Link>
            <Link to='/admin'>Admins</Link>
             {/* <Link to='/company'>Companies</Link> */}

        </>
    )
}
export default NavBar
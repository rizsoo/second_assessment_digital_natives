import { Link } from 'react-router-dom';
import './Header.css';
import logo from '../img/geometric.png'

function Navbar () {
    return (
            <ul className='navbar-list'>
                <li><Link to="/"><img className='logo' src={logo}></img></Link></li>
                <li><Link to="/">User list app</Link></li>
            </ul>
    )
}
export default Navbar;
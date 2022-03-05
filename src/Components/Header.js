import './Header.css';
import {useState, useRef} from 'react'
import { Link } from 'react-router-dom';
import Navbar from './Navbar';

function Header() {
    const [isOpen, setIsOpen] = useState(false);
    const parentRef = useRef();

    return (
        <div className="header">
            <div className="header-content">
                <Navbar />
            </div>
        </div>
    )
}
export default Header;
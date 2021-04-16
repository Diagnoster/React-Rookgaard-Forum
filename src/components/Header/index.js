import './header.css';
import { Link } from 'react-router-dom';

export default function Header() {
    return(
        <header>
            <Link className="logo" to="/">Rookgaard</Link>
            <Link className="wiki" to="/Wiki">Wiki</Link>
        </header>
        )
}
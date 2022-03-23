import '../styles/navigation.scss';
import logo from '../img/logo.png';
import search from '../img/search.png';
import Menu from './Menu.js';

function Navigation() {
    return (
        <div className="navigation">
            <div className="container">
                <img src={logo} alt="instagram logo" className="logo" />
                <div className="search">
                    <img src={search} alt="search logo" className="searchLogo" />
                    <span className="searchText">Search</span>
                </div>
                <Menu />
            </div>
        </div>
    )
};

export default Navigation;

 

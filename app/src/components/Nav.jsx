import { NavLink } from "react-router-dom";
import SearchBar from "./SearchBar";
import { Button,  Navbar } from "react-bootstrap";
import About from "./About";

export default function Nav({ onSearch }) {
    return (
        <div>
            <nav className="nav" bg="dark" expand="lg">

    
                <Button style={{color:"white"}}>
                        <NavLink
                            to="/About"
                            style={({ isActive }) => ({
                                color: isActive ? "black" : "white",
                            })}
                        >
                            About
                        </NavLink>
                </Button>
                    <Button>
                        <NavLink
                            to="/home"
                            style={({ isActive }) => ({
                                color: isActive ? "black" : "white",
                            })}
                        >
                            Home
                        </NavLink>
                    </Button>
                    <Button>
                        <NavLink
                            to="/favorites"
                            style={({ isActive }) => ({
                                color: isActive ? "black" : "white",
                            })}
                        >
                            Favoritos
                        </NavLink>
                    </Button>
                    <SearchBar onSearch={onSearch} />
              
            </nav>



        </div>
    );
}

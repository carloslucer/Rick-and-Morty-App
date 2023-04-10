import { NavLink } from "react-router-dom";
import SearchBar from "./SearchBar";
import { Button, Container, Navbar } from "react-bootstrap";
import About from "./About";

export default function Nav({ onSearch }) {
    return (
        <div>
            <Navbar bg="dark" expand="lg">
                <Container>
    
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
                    <SearchBar onSearch={onSearch} />
                </Container>
            </Navbar>



        </div>
    );
}

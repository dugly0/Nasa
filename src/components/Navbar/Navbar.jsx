import { Navbar, Container } from 'react-bootstrap';
import './assets/css/navbar.css'
import nasaLogo from './assets/images/nasa-navbar.png';

function NavbarNASA() {
    return (
    <Navbar className="nav-custom mx-auto">
        <Container className="d-flex justify-content-center">
            <Navbar.Brand href="#home">
                <img
                    src={nasaLogo}
                    width="60"
                    height="50.58"
                    className="d-inline-block align-top"
                    alt="nasa logo"
                />
            </Navbar.Brand>
        </Container>
    </Navbar>
    );
}

export default NavbarNASA;

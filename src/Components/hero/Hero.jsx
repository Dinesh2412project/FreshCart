import "./style.css";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { Link } from "react-router-dom";

function NavScrollExample() {
  return (
    <Navbar expand="lg" className="bg-body-">
      <Container className="hero-head" fluid>
        <Navbar.Brand className="hero-heading" href="#">
          <Link className="heading" to={"/"}>
            All deportments{" "}
          </Link>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: "400px" }}
            navbarScroll
          >
            <NavDropdown title="Home" id="navbarScrollingDropdown">
              <Link to={"/"}>Home</Link>
              <NavDropdown.Item href="#action4">home Default</NavDropdown.Item>
              <NavDropdown.Item href="#action4">home Morden</NavDropdown.Item>
              <NavDropdown.Item href="#action4">home Creative</NavDropdown.Item>
              <NavDropdown.Item href="#action4">
                home Local store
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action5">
                Something else here
              </NavDropdown.Item>
            </NavDropdown>
            <NavDropdown title="Shop" id="navbarScrollingDropdown">
              <Link to={"/Shop"}>Shop</Link>
              <NavDropdown.Item href="#action4">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action5">
                Something else here
              </NavDropdown.Item>
            </NavDropdown>
            <NavDropdown title="Stores" id="navbarScrollingDropdown">
              <Link to={"/Store"}>Store</Link>
              <NavDropdown.Item href="#action4">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action5">
                Something else here
              </NavDropdown.Item>
            </NavDropdown>
            <NavDropdown title="Mega Menu" id="navbarScrollingDropdown">
              <Link to={"/megaMenu"}>megaMenu</Link>
              <NavDropdown.Item href="#action4">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action5">
                Something else here
              </NavDropdown.Item>
            </NavDropdown>
            <NavDropdown title="Pages" id="navbarScrollingDropdown">
              <Link to={"/Page"}>Pages</Link>
              <NavDropdown.Item href="#action4">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action5">
                Something else here
              </NavDropdown.Item>
            </NavDropdown>
            <NavDropdown title="Account" id="navbarScrollingDropdown">
              <Link to={"/Account"}>Account</Link>
              <NavDropdown.Item href="#action4">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action5">
                Something else here
              </NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="#" disabled>
              Dashboard
            </Nav.Link>
            <Nav.Link href="#" disabled>
              docs
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavScrollExample;

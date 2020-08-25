import React from "react";
import { Link } from "react-router-dom";

// reactstrap components
import {
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  UncontrolledDropdown,
  Collapse,
  NavbarBrand,
  Navbar,
  NavItem,
  Nav,
  Container
} from "reactstrap";

// core components

function NavBar() {
  const [navbarColor, setNavbarColor] = React.useState("navbar-transparent");
  const [collapseOpen, setCollapseOpen] = React.useState(false);
  React.useEffect(() => {
    const updateNavbarColor = () => {
      if (
        document.documentElement.scrollTop > 399 ||
        document.body.scrollTop > 399
      ) {
        setNavbarColor("");
      } else if (
        document.documentElement.scrollTop < 400 ||
        document.body.scrollTop < 400
      ) {
        setNavbarColor("navbar-transparent");
      }
    };
    window.addEventListener("scroll", updateNavbarColor);
    return function cleanup() {
      window.removeEventListener("scroll", updateNavbarColor);
    };
  });
  return (
    <>
      {collapseOpen ? (
        <div
          id="bodyClick"
          onClick={() => {
            document.documentElement.classList.toggle("nav-open");
            setCollapseOpen(false);
          }}
        />
      ) : null}
      <Navbar className={"fixed-top " + navbarColor} expand="lg" color="info">
        <Container>
          <div className="navbar-translate">
            <NavbarBrand>
              LOI TRUONG
            </NavbarBrand>
            <button
              className="navbar-toggler navbar-toggler"
              onClick={() => {
                document.documentElement.classList.toggle("nav-open");
                setCollapseOpen(!collapseOpen);
              }}
              aria-expanded={collapseOpen}
              type="button"
            >
              <span className="navbar-toggler-bar bar1"></span>
              <span className="navbar-toggler-bar bar2"></span>
              <span className="navbar-toggler-bar bar3"></span>
            </button>
          </div>
          <Collapse
            className="justify-content-end"
            isOpen={collapseOpen}
            navbar
          >
            <Nav className="ml-auto" navbar>
              <NavItem>
                <Link to="/" className="nav-link">
                  <i className="fas fa-home"></i>
                  {' '}
                  <p>Home</p>
                </Link>
              </NavItem> 
              < NavItem>
                <Link to="/about" className="nav-link">
                  <i className="fas fa-info-circle"></i>
                  {' '}
                  <p>Profile</p>
                </Link>
              </NavItem>
              <NavItem>
                <Link to="/resume" className="nav-link">
                  <i className="far fa-file"></i>
                  {' '}
                  <p>Resume</p>
                </Link>
              </NavItem>
              <UncontrolledDropdown nav inNavbar>
                <DropdownToggle
                  aria-haspopup={true}
                  caret
                  color="default"
                  data-toggle="dropdown"
                  href="#pablo"
                  id="navbarDropdownMenuLink"
                  nav
                  // onClick={e => e.preventDefault()}
                >
                  <i class="fas fa-camera-retro"></i>
                  {' '}
                  <p>Hobbies</p>
                </DropdownToggle>
                <DropdownMenu aria-labelledby="navbarDropdownMenuLink">
                  <Link to="/photography">
                    <DropdownItem>                  
                      Photography
                    </DropdownItem>
                  </Link>
                  {/* <DropdownItem
                    href="#pablo"
                    onClick={e => e.preventDefault()}
                  >
                    RESUME
                  </DropdownItem> */}
                </DropdownMenu>
              </UncontrolledDropdown>
              <NavItem>
                <Link to="/projects" className="nav-link">
                  <i className="far fa-folder-open"></i>
                  {' '}
                  <p>Projects</p>
                </Link>
              </NavItem>
              <NavItem>
                <Link to="/contact" className="nav-link">
                  <i className="far fa-address-card"></i>
                  {' '}
                  <p>Contact</p>
                </Link>
              </NavItem>
            </Nav>
          </Collapse>
        </Container>
      </Navbar>
    </>
  );
}

export default NavBar;

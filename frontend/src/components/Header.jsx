import React from "react";
import { Badge, Navbar, Nav, Container, NavDropdown } from "react-bootstrap";
import { FaShoppingCart, FaUser } from "react-icons/fa";
import {useNavigate} from 'react-router-dom'
import logo from "../assets/logo.png";
import { useSelector, useDispatch } from 'react-redux';
import {LinkContainer} from "react-router-bootstrap";
import {useLogoutMutation} from "../slices/usersApiSlice";
import {logout} from "../slices/authSlice"
const Header = () => {

  const {cartItems} = useSelector((state) => state.cart);
  const {userInfo} = useSelector((state) => state.auth);
  console.log(cartItems)

  const dispatch = useDispatch();
  const navigate = useNavigate();


  const [logoutApiCall] = useLogoutMutation();

  const logoutHandler = async () => {
    try {
      await logoutApiCall().unwrap();
      dispatch(logout());
      navigate('/login');
    } catch (err) {
      console.error(err);
    }
  };
  return (
    <header>
      <Navbar bg="dark" variant="dark" expand="lg" collapseOnSelect>
        <Container>
            <LinkContainer to="/">

          <Navbar.Brand>
            <img src={logo} alt="logo" />
            E-commerce Application
          </Navbar.Brand>
          </LinkContainer>
          <Navbar.Toggle />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto justify-content-center">
              <LinkContainer to='/cart'>
              <Nav.Link href="/cart">
                <FaShoppingCart />
                Cart
                {cartItems.length > 0 && (
                    <Badge pill bg='success' style={{ marginLeft: '5px' }}>
                      {cartItems.reduce((a, c) => a + c.qty, 0)}
                    </Badge>
                  )}
              </Nav.Link>
              </LinkContainer>
             
             {userInfo ? (
               <>
               <NavDropdown title={userInfo.name} id='username'>
                 <LinkContainer to='/profile'>
                   <NavDropdown.Item>Profile</NavDropdown.Item>
                 </LinkContainer>
                 <NavDropdown.Item onClick={logoutHandler}>
                   Logout
                 </NavDropdown.Item>
               </NavDropdown>
             </>
             ) : (
              <LinkContainer to='/login'>
             <Nav.Link href="/login">
                <FaUser />
                Sign In
              </Nav.Link>
             </LinkContainer>)
            }
             
             
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
};

export default Header;

import React from "react";
import { Badge, Navbar, Nav, Container, NavDropdown } from "react-bootstrap";
import { FaShoppingCart, FaUser } from "react-icons/fa";
import {useNavigate} from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux';
import {LinkContainer} from "react-router-bootstrap";
import SearchBox from './SearchBox';
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
  const customStyles = {
  navBarStyle: {
    backgroundColor: '#144960',
    color: 'white',
  },
    cartLogo: {
      marginRight: 5,

    },
   
  };
  return (
    <header>
      <Navbar style={customStyles.navBarStyle}  data-bs-theme="dark"    expand="lg" collapseOnSelect>
        <Container>
            <LinkContainer to="/">

          <Navbar.Brand className="">
           Premier Market
          </Navbar.Brand>
          </LinkContainer>
          <Navbar.Toggle />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto justify-content-center">
            <SearchBox />
              <LinkContainer to='/cart'>
              <Nav.Link href="/cart">
                <FaShoppingCart  style={customStyles.cartLogo} />
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
               <NavDropdown   title={userInfo.name} id='username'>
                 <LinkContainer   to='/profile'>
                   <NavDropdown.Item>Profile</NavDropdown.Item>
                 </LinkContainer>
                 <NavDropdown.Item  onClick={logoutHandler}>
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
             
              {/* Admin Links */}
              {userInfo && userInfo.isAdmin && (
                <NavDropdown title='Admin' id='adminmenu'>
                  <LinkContainer to='/admin/productlist'>
                    <NavDropdown.Item>Products</NavDropdown.Item>
                  </LinkContainer>
                  <LinkContainer to='/admin/orderlist'>
                    <NavDropdown.Item>Orders</NavDropdown.Item>
                  </LinkContainer>
                  <LinkContainer to='/admin/userlist'>
                    <NavDropdown.Item>Users</NavDropdown.Item>
                  </LinkContainer>
                </NavDropdown>
              )}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
};

export default Header;

import { useNavigate } from "react-router-dom";   //! 3.

import {
  LayoutWrapper,
  Header,
  Main,
  Footer,
  Logo,
  LogoImg,
  HeaderLink,
  NavigationContainer,
  FooterLogo,
  FooterLink,
  FooterNavigation,
} from "./styles";
import { type LayoutProps } from "./types";

function Layout({ children }: LayoutProps) {
  const navigate = useNavigate();   //!  4. useNavigate() возврвщает фу-ю

  const goToHomePage = () => {    //! 1. создадим фу-ю goToHomePage, с её помощью переходим на главную страницу
    navigate("/");                //!  5. путь куда идти (переходим на главную страницу)
  };                              //!  2. нажимая на Logo строка 27 
  return (
    <LayoutWrapper> 
      <Header>     
        <Logo onClick={goToHomePage}>  
          <LogoImg
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTxOGDYH2tzlcwZSDpjg0qRGgEHAxVhsKHFUg&s"
            alt="Logo"
          />
        </Logo>
        <NavigationContainer>
          <HeaderLink
            style={({ isActive }) => ({                          //?если жмём на ссылку, мы увидим что она активна
              fontWeight: isActive ? "bold" : "normal",           //? будет жирный шрифт
              textDecoration: isActive ? "underline" : "none",     //? и будет подчёркнута снизу 
            })}
            to="/"
          >
            Home
          </HeaderLink>
          <HeaderLink
            to="/contactUs"
            style={({ isActive }) => ({
              fontWeight: isActive ? "bold" : "normal",
              textDecoration: isActive ? "underline" : "none",
            })}
          >
            Contact Us
          </HeaderLink>
          <HeaderLink
            to="/about"
            style={({ isActive }) => ({
              fontWeight: isActive ? "bold" : "normal",
              textDecoration: isActive ? "underline" : "none",
            })}
          >
            About
          </HeaderLink>
          <HeaderLink
            to="/login"
            style={({ isActive }) => ({
              fontWeight: isActive ? "bold" : "normal",
              textDecoration: isActive ? "underline" : "none",
            })}
          >
            Login
          </HeaderLink>
          <HeaderLink
            to="/clients"
            style={({ isActive }) => ({
              fontWeight: isActive ? "bold" : "normal",
              textDecoration: isActive ? "underline" : "none",
            })}
          >
            Clients
          </HeaderLink>
        </NavigationContainer>
      </Header>
      <Main>{children}</Main>
      <Footer>
        <FooterLogo>
          <LogoImg
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTxOGDYH2tzlcwZSDpjg0qRGgEHAxVhsKHFUg&s"
            alt="Logo"
          />
        </FooterLogo>
        <FooterNavigation>
          <FooterLink to="/">Home</FooterLink>
          <FooterLink to="/contactUs">Contact Us</FooterLink>
          <FooterLink to="/about">About</FooterLink>
          <FooterLink to="/login">Login</FooterLink>
          <FooterLink to="/clients">Clients</FooterLink>
        </FooterNavigation>
      </Footer>
    </LayoutWrapper>
  );
}

export default Layout;
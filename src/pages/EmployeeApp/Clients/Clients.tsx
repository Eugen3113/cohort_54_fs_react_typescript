import { useEffect } from "react";
import { ROUTES } from "constants/routes";
import { PageWrapper, NavContainer, ClientsLink, Title } from "./styles";

function Clients() {
  useEffect(() => {
    // Unmounting   . При уходе на другую страницу компонент умирает
    return () => {
      console.log("Unmounting Clients Component");
    };
  }, []);

  return (
    <PageWrapper>
      <Title>Our Clients</Title>
      <NavContainer>
        <ClientsLink to={ROUTES.APPLE}>Apple</ClientsLink>
        <ClientsLink to={ROUTES.FACEBOOK}>Facebook</ClientsLink>
        <ClientsLink to={ROUTES.GOOGLE}>Google</ClientsLink>
        <ClientsLink to={ROUTES.AMAZON}>Amazon</ClientsLink>
      </NavContainer>
    </PageWrapper>
  );
}

export default Clients;
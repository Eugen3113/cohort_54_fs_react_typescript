import { useNavigate } from "react-router-dom";
import ClientTemplate from "pages/EmployeeApp/Clients/components/ClientTeamlate/ClientTemplete";
import Button from "components/Button/Button";
import { ButtonControl, Title } from "./styles";

export default function Google() {
  const navigate = useNavigate();

  const goBack = () => {
    navigate(-1);
  };

  return (
    <ClientTemplate>
      <Title>Google</Title>
      <p>
        Google is a global technology company best known for its search engine.
        Founded in 1998 by Larry Page and Sergey Brin, it offers a wide range of
        products and services including Android, Gmail, Google Maps, YouTube,
        and cloud solutions. Google is part of the parent company Alphabet Inc.
        It also focuses on online advertising, quantum computing, e-commerce,
        and artificial intelligence.
      </p>
      <ButtonControl>
        <Button onClick={goBack} name="Go back" />
      </ButtonControl>
    </ClientTemplate>
  );
}
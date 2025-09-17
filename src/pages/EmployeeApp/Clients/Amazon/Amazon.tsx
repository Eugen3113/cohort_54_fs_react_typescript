import { useNavigate } from "react-router-dom";
import { ButtonControl, Title } from "./styles";
// import { PageWrapper, ButtonControl, Title } from "./styles";
import Button from "components/Button/Button";
import ClientTemplate from "../components/ClientTeamlate/ClientTemplete";

export default function Amazon() {
  const navigate = useNavigate();

  const goBack = () => {
    navigate(-1);
  };

  return (
    <ClientTemplate>
    {/* <PageWrapper> */}
      <Title>Amazon</Title>
      <p>
        Amazon is one of the largest multinational companies in e-commerce and
        cloud computing. It was founded by Jeff Bezos in 1994 in the United
        States. The company is well known for its online marketplace, Amazon Web
        Services (AWS), Prime Video streaming platform, and continuous
        innovation in technology and logistics.
      </p>
      <ButtonControl>
        <Button onClick={goBack} name="Go back" />
      </ButtonControl>
    {/* </PageWrapper> */}
  </ClientTemplate>
  );
}

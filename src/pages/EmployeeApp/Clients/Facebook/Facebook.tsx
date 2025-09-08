import { useNavigate } from "react-router-dom";
import { ButtonControl, PageWrapper, Title } from "./styles";
import Button from "components/Button/Button";

export default function Facebook() {
  const navigate = useNavigate();

  const goBack = () => {
    navigate(-1);
  };

  return (
    <PageWrapper>
      <Title>Facebook</Title>
      <p>
        Facebook is a social media company founded in 2004 by Mark Zuckerberg
        and fellow Harvard students. It operates the Facebook platform, a global
        social networking service that lets people connect and share content. It
        is part of Meta Platforms, Inc., headquartered in Menlo Park,
        California, and earns most of its revenue from advertising.
      </p>
      <ButtonControl>
        <Button onClick={goBack} name="Go back" />
      </ButtonControl>
    </PageWrapper>
  );
}

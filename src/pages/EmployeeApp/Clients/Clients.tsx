import { Link } from "react-router-dom";
import { Title } from "./styles"

export default function Clients() {
  return (
    <div>
      <Title>Our Clients</Title>
      <ul>
        <li><Link to="/clients/facebook">Facebook</Link></li>
        <li><Link to="/clients/google">Google</Link></li>
        <li><Link to="/clients/amazon">Amazon</Link></li>
      </ul>
    </div>
  );
}
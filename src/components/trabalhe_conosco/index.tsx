import { Info } from "../../../info";
import { Container } from "./styles";
import {
  FaLinkedinIn,
  FaInstagram,
  FaWhatsapp,
  FaFacebookF,
} from "react-icons/fa";
import { colors, spacings } from "../../../styles/sets";
import ButtonPrimary from "../buttonPrimary";

export default function TrabalheConosco() {
  return (
    <Container padding={spacings.padding.smaller} columnGap={spacings.gap.main}>
      <div>
        <h1>{Info.trabalhe_conosco.title}</h1>
        <p>{Info.trabalhe_conosco.text}</p>
        <ul>
          <li>
            <i>
              <FaLinkedinIn className="icon linkedin" />
            </i>
          </li>

          <li>
            <FaFacebookF className="icon facebook" />
          </li>

          <li>
            <FaInstagram className="icon instagram" />
          </li>

          <li>
            <FaWhatsapp className="icon whatsapp" />
          </li>
        </ul>
      </div>
      <ButtonPrimary
        title={Info.trabalhe_conosco.buttonTitle}
        backgroundColor={colors.orange}
        color={colors.white}
        fontSize={"1rem"}
      />
    </Container>
  );
}

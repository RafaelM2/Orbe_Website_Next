import { useState } from "react";
import { colors, fontSizes } from "../../../../styles/sets";
import { ButtonContainer } from "./styles";
import Link from "next/link";

interface IIconButton {
  image: string;
  backgroundHover: string;
  text: string;
  url: string;
}

export default function IconButton({
  image,
  text,
  url,
  backgroundHover,
}: IIconButton) {
  const [toggle, setToggle] = useState(false);

  return (
    <ButtonContainer
      onMouseEnter={() => {
        setToggle(!toggle);
      }}
      onMouseLeave={() => {
        setToggle(!toggle);
      }}
      backgroundColor={colors.white}
      color={colors.dark_grey}
      fontSize={fontSizes.text}
      backgroundHover={backgroundHover}
    >
      <img src={toggle ? "button_hover.png" : image} />
      <span>
        {toggle ? (
          <Link href={`/${url}`}>
            <div>
              <p>Ficou interessade?</p>
              <p>Saiba Mais</p>
            </div>
          </Link>
        ) : (
          <p>{text}</p>
        )}
      </span>
    </ButtonContainer>
  );
}

import { Info } from "../../../info";
import { colors, fontSizes, spacings } from "../../../styles/sets";
import { TwoColumnsContainer } from "../../../styles/styles";
import IconButton from "./iconButton";
import { ButtonsContainer, TextContainer } from "./styles";

export default function TextAndButtonBlock() {
  return (
    <TwoColumnsContainer
      smaller={true}
      smallerPadding={spacings.padding.smaller}
      background={true}
      backgroundColor={colors.dark_grey}
      padding={spacings.padding.main}
      columnGap={spacings.gap.main}
    >
      <TextContainer
        lineHeight={spacings.line_height.main}
        color={colors.white}
        fontSizeTitle={fontSizes.titleSec}
        fontSizeText={fontSizes.text}
      >
        <h1>{Info.home.what_we_do.title}</h1>
        <p>{Info.home.what_we_do.p1}</p>
        <p>{Info.home.what_we_do.p2}</p>
        <p>{Info.home.what_we_do.p3}</p>
      </TextContainer>
      <ButtonsContainer>
        <IconButton
          image="verde.png"
          backgroundHover="#4BA97A"
          text="Desenvolvimento"
          url="desenvolvimento"
        />

        <IconButton
          image="laranja.png"
          backgroundHover="#F87C56"
          text="Consultoria UX/UI"
          url="uxui"
        />

        <IconButton
          image="azul_escuro.png"
          backgroundHover="#223D8B"
          text="Realidade Virtual"
          url="realidade-virtual"
        />

        <IconButton
          image="roxo.png"
          backgroundHover="#772583"
          text="Automação Industrial/ IoT"
          url="automacao-industrial"
        />

        <IconButton
          image="vermelho.png"
          backgroundHover="#DD1132"
          text="Realidade Aumentada"
          url="realidade-aumnetada"
        />

        <IconButton
          image="amarelo.png"
          backgroundHover="#FFA400"
          text="Offshores"
          url="offshores"
        />

        <IconButton
          image="azul.png"
          backgroundHover="#05A9C7"
          text="Inteligência Artificial"
          url="inteligencia-artificial"
        />

        <IconButton
          image="magenta.png"
          backgroundHover="#C832D4"
          text="Websites"
          url="websites"
        />
      </ButtonsContainer>
    </TwoColumnsContainer>
  );
}

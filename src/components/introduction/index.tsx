import ButtonPrimary from "../buttonPrimary";
import Header from "../header";
import { spacings, colors, fontSizes } from "../../../styles/sets";
import { Info } from "../../../info";
import {
  IntroductionContainer,
  IntroductionInnerContainer,
  IntroductionTextContainer,
} from "../../../styles/styles";

interface IIntroduction {
  buttonTitle: string;
  buttonColor: string;
  buttonBackground: string;
  buttonFontSize: string;
}

export default function Introduction({
  buttonTitle,
  buttonColor,
  buttonBackground,
  buttonFontSize,
}: IIntroduction) {
  return (
    <IntroductionContainer color={colors.white}>
      <Header />
      <IntroductionInnerContainer padding={spacings.padding.main}>
        <IntroductionTextContainer
          fontSizeTitle={fontSizes.title}
          fontSizeText={fontSizes.text}
        >
          <h2>{Info.home.intro.title}</h2>
          <h3>{Info.home.intro.text}</h3>
          <ButtonPrimary
            title={buttonTitle}
            backgroundColor={buttonBackground}
            color={buttonColor}
            fontSize={buttonFontSize}
          />
        </IntroductionTextContainer>
        <img src="image_placeholder.png" />
      </IntroductionInnerContainer>
    </IntroductionContainer>
  );
}

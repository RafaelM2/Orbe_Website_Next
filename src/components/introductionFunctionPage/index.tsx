import { colors, fontSizes, spacings } from "../../../styles/sets";
import {
  IntroductionContainer,
  IntroductionInnerContainer,
  IntroductionTextContainer,
} from "../../../styles/styles";
import Header from "../header";

interface IntroductionProps {
  title: string;
  text: string;
}

export default function IntroductionFunctionPage({
  title,
  text,
}: IntroductionProps) {
  return (
    <IntroductionContainer color={colors.white}>
      <Header />
      <IntroductionInnerContainer padding={spacings.padding.main}>
        <IntroductionTextContainer
          fontSizeText={fontSizes.text}
          fontSizeTitle={fontSizes.titleSec}
        >
          <h2>{title}</h2>
          <h3>{text}</h3>
        </IntroductionTextContainer>
        <form>
          <input></input>
        </form>
      </IntroductionInnerContainer>
    </IntroductionContainer>
  );
}

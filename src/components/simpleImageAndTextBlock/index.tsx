import { TextContainer } from "./styles";
import { TwoColumnsContainer } from "../../../styles/styles";
import { fontSizes, spacings } from "../../../styles/sets";

interface ISITB {
  image: string;
  textTitle: string;
  p1: string;
  p2: string;
  p3: string;
}

export default function SimpleImageAndTextBlock({
  image,
  textTitle,
  p1,
  p2,
  p3,
}: ISITB) {
  return (
    <TwoColumnsContainer
      padding={spacings.padding.main}
      columnGap={spacings.gap.main}
    >
      <img src={image} alt="placeholder image" />
      <TextContainer
        fontSizeTitle={fontSizes.titleSec}
        fontSizeText={fontSizes.text}
        lineHeight={spacings.line_height.main}
      >
        <h1>{textTitle}</h1>
        <span>{p1}</span>
        <span>{p2}</span>
        <span>{p3}</span>
      </TextContainer>
    </TwoColumnsContainer>
  );
}

import { Info } from "../../../info";
import { fontSizes, spacings } from "../../../styles/sets";
import { TextContainer } from "./styles";
import { TwoColumnsContainer } from "../../../styles/styles";

export default function ThreePImageAndTextBlock() {
  return (
    <TwoColumnsContainer
      columnGap={spacings.gap.main}
      padding={spacings.padding.main}
    >
      <TextContainer
        fontSizeText={fontSizes.text}
        fontSizeTitle={fontSizes.titleThird}
        lineHeight={spacings.line_height.main}
        lineHeightSec={spacings.line_height.sec}
      >
        <div>
          <h1>{Info.home.values.t1}</h1>
          <span>{Info.home.values.p1}</span>
        </div>
        <div>
          <h1>{Info.home.values.t2}</h1>
          <span>{Info.home.values.p2}</span>
        </div>
        <div>
          <h1>{Info.home.values.t3}</h1>
          <span>{Info.home.values.p3}</span>
        </div>
      </TextContainer>
      <img src="image_placeholder.png" alt="image placeholder" />
    </TwoColumnsContainer>
  );
}

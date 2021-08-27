import { colors, fontSizes, spacings } from "../../../styles/sets";
import ProccessBlock from "./proccessBlock";
import { ProccessContainer, ProcessInnerContainer } from "./styles";
import { BsArrowRight } from "react-icons/bs";
import { CgMathEqual } from "react-icons/cg";

interface ProccessProps {
  page: string | string[];
}

export default function Proccess({ page }: ProccessProps) {
  return (
    <ProccessContainer
      padding={spacings.padding.main}
      fontSize={fontSizes.titleSec}
    >
      <h1>Nosso Processo</h1>
      <ProcessInnerContainer
        columnGap={spacings.gap.smaller}
        color={colors.dark_grey}
      >
        <ProccessBlock
          appName={page}
          image={"image_placeholder.png"}
          text="Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet."
        />
        <BsArrowRight />
        <ProccessBlock
          appName={page}
          image={"image_placeholder.png"}
          text="Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet."
        />
        <BsArrowRight />
        <ProccessBlock
          appName={page}
          image={"image_placeholder.png"}
          text="Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet."
        />
        <CgMathEqual />

        <img src="image_placeholder.png" alt="" />
      </ProcessInnerContainer>
    </ProccessContainer>
  );
}

import { colors, fontSizes } from "../../styles/sets";
import Introduction from "../components/introduction";
import SimpleImageAndTextBlock from "../components/simpleImageAndTextBlock";
import { Info } from "../../info";
import ThreePImageAndTextBlock from "../components/ThreePImageAndTextBlock";
import TextAndButtonBlock from "../components/TextAndButtonBlock";
import Clients from "../components/clients";
import Project from "../components/projects";
import People from "../components/people";
import TrabalheConosco from "../components/trabalhe_conosco";

export default function Home() {
  return (
    <>
      <Introduction
        buttonTitle={Info.home.intro.buttonTitle}
        buttonColor={colors.dark_grey}
        buttonBackground={colors.white}
        buttonFontSize={fontSizes.text}
      />
      <SimpleImageAndTextBlock
        image={Info.home.about_us.image}
        textTitle={Info.home.about_us.title}
        p1={Info.home.about_us.p1}
        p2={Info.home.about_us.p2}
        p3={Info.home.about_us.p3}
      />
      <ThreePImageAndTextBlock />
      <TextAndButtonBlock />
      <Clients />
      <Project />
      <People />
      <TrabalheConosco />
    </>
  );
}

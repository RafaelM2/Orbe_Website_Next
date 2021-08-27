import { useState } from "react";
import { Info } from "../../../info";
import { fontSizes, spacings } from "../../../styles/sets";
import ProjectBlock from "./projectBlock";
import { CarrouselContainer, ProjectsContainer, TextContainer } from "./styles";
import { BsArrowRightShort, BsArrowLeftShort } from "react-icons/bs";

export default function Project() {
  const [range, setRange] = useState({ min: 1, max: 3 });
  return (
    <ProjectsContainer padding={spacings.padding.projects}>
      <TextContainer fontSize={fontSizes.titleSec}>
        <h1>Projetos</h1>
        <p>
          Aqui podemos colocar exemplos de projetos concluídos feitos nessa
          área.
        </p>
      </TextContainer>
      <CarrouselContainer columnGap={spacings.gap.medium}>
        <div>
          {Info.projetos.map((el, index) => {
            if (index >= range.min && index >= range.max) {
              return (
                <ProjectBlock
                  key={index}
                  appImage={el.appImage}
                  functionImage={el.functionImage}
                  name={el.name}
                />
              );
            }
          })}
        </div>
        <span>
          <BsArrowLeftShort />
          <BsArrowRightShort />
        </span>
      </CarrouselContainer>
    </ProjectsContainer>
  );
}

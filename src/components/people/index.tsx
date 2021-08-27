import { Info } from "../../../info";
import { spacings } from "../../../styles/sets";
import PersonBlock from "./personBlock";
import { Content, PeopleContainer } from "./styles";

export default function People() {
  return (
    <PeopleContainer padding={spacings.padding.smaller}>
      <h1>{Info.home.equipe.title}</h1>
      <p>{Info.home.equipe.text}</p>
      <Content>
        <PersonBlock
          side={"left"}
          person={"person.png"}
          hover={"hover_left.png"}
        />
        <PersonBlock
          side={"right"}
          person={"person.png"}
          hover={"hover_right.png"}
        />
        <PersonBlock
          side={"left"}
          person={"person.png"}
          hover={"hover_left.png"}
        />
        <PersonBlock
          side={"right"}
          person={"person.png"}
          hover={"hover_right.png"}
        />
        <PersonBlock
          side={"left"}
          person={"person.png"}
          hover={"hover_left.png"}
        />
        <PersonBlock
          side={"right"}
          person={"person.png"}
          hover={"hover_right.png"}
        />
        <PersonBlock
          side={"left"}
          person={"person.png"}
          hover={"hover_left.png"}
        />
        <PersonBlock
          side={"right"}
          person={"person.png"}
          hover={"hover_right.png"}
        />
      </Content>
    </PeopleContainer>
  );
}

import { useState } from "react";
import { ReactNode } from "react";
import { PersonBlockContainer } from "./styles";

interface PersonBlockProps {
  side: string;
  person: string;
  hover: string;
}

export default function PersonBlock({ side, person, hover }: PersonBlockProps) {
  const [active, setActive] = useState(false);

  return (
    <PersonBlockContainer
      active={active}
      side={side}
      onMouseEnter={() => {
        setActive(!active);
      }}
      onMouseLeave={() => {
        setActive(!active);
      }}
    >
      <div>
        <img src={active ? hover : person} alt="" />
      </div>
    </PersonBlockContainer>
  );
}

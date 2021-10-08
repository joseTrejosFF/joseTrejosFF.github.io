import * as React from "react";
import { StyledBtn } from "./styles";

type Props = {
  onClick: React.MouseEventHandler<HTMLButtonElement> | undefined;
  tooltiptext: string;
  value: React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLElement>,
    HTMLElement
  >;
};

export default function Button({ onClick, tooltiptext, value }: Props) {
  return (
    <StyledBtn type="button" onClick={onClick} title={tooltiptext}>
      {value}
    </StyledBtn>
  );
}

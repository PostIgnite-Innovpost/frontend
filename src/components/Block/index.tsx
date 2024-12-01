import React from "react";
import { Container, TextWrapper, Content } from "./styles";

interface Props {
  title: string;
  content: string;
}

const Block = ({ title, content }: Props) => {
  return (
    <Container>
      <h6 className="blue">{title}</h6>
      <TextWrapper>
        <Content>{content}</Content>
      </TextWrapper>
    </Container>
  );
};

export default Block;

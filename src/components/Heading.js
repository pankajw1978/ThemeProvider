import React from "react";
import styled from "styled-components";
import Subtitle from "./subtitle/Subtitle";

const Title = styled.h1`
  color: ${(props) => props.theme.primary};
`;

const SubTitle = styled.p`
  color: ${(props) => props.theme.secondary};
`;

const Body = styled.div`
  background-color: ${(props) => props.theme.background};
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

const HeadingButton = styled.button`
  padding: 10px 30px;
  outline-width: 0;
  border-style: none;
  cursor: pointer;
  &:hover {
    background-color: #aaa;
  }
`;

const Heading = (props) => {
  return (
    <Body>
      <Title>Lorem ipsum dolor sit amet. {props.theme}</Title>
      <Subtitle />
      <HeadingButton
        onClick={() =>
          props.theme === "light"
            ? props.setTheme("dark")
            : props.setTheme("light")
        }
      >
        Toggle
      </HeadingButton>
    </Body>
  );
};

export default Heading;

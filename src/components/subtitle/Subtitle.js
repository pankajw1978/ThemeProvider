import React from "react";
import styled from "styled-components";

const SubTitle = styled.p`
  color: ${(props) => props.theme.secondary};
`;

const Subtitle = () => {
  return (
    <SubTitle>
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nemo, omnis. Est
      hic voluptas doloribus porro dignissimos autem sapiente architecto
      assumenda?
    </SubTitle>
  );
};

export default Subtitle;

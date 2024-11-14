// src/StyledComponent.jsx
import React from 'react';
import styled from 'styled-components';

const StyledDiv = styled.div`
  background-color: lightcoral;
  padding: 10px;
  border-radius: 5px;
  color: white;
`;

const StyledComponent = () => {
  return <StyledDiv>This is styled using Styled Components</StyledDiv>;
};

export default StyledComponent;

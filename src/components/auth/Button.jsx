import styled from 'styled-components';
import React from 'react';

const EnterCommonBox = styled.div`
  margin: auto;
  width: 50%;
  @media screen and (max-width: ${props => props.theme.responsive.sm}) {
    width: 80%;
  }
`;

const ButtonContainer = styled(EnterCommonBox)`
  margin-top: ${props => props.theme.mp.lg};
  margin-bottom: ${props => props.theme.mp.md};
`;
const ButtonC = styled.button`
  width: 100%;
  color: white;
  font-weight: 700;
  padding: ${props => props.theme.mp.sm};
  text-align: center;
  cursor: pointer;
  border-radius: ${props => props.theme.borderRadius.md};
  background-color: ${props =>
    props.disabled ? 'rgb(191 219 254)' : props.theme.color.activeColor.md};
`;

const Button = ({ text, isLoading, disabled }) => {
  return (
    <ButtonContainer>
      <ButtonC disabled={disabled}>{isLoading ? 'loading...' : text}</ButtonC>
    </ButtonContainer>
  );
};
export default Button;

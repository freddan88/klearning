import React from "react";
import styled from "styled-components";

const StyledQuizButton = styled.button`
  width: ${props => (props.buttonWidth ? props.buttonWidth : "auto")};
  height: ${props => (props.buttonHeight ? props.buttonHeight : "auto")};
  background-color: var(--card-color);
  border: ${props => (props.border ? props.border : "1px solid #e0e0e0")};
  color: ${props => (props.textColor ? props.textColor : "var(--font-color)")};
  padding: 8px 22px;
  text-align: center;
  text-decoration: none;
  font-size: ${props => (props.fontSize ? props.fontSize : "16px")};
  font-weight: ${props => (props.fontWeight ? props.fontWeight : "400")};
  border-radius: 8px;
  margin: ${props => (props.margin ? props.margin : "0")};

  &:hover {
    color: #cd7b2a;
    text-decoration: underline;
  }
  &:active {
    color: white;
    background-color: var(--soft-orange);
  }

  .correct {
    color: white;
    background-color: var(--teal);
  }
`;
const QuizButton = ({ btnName, ...props }) => {
  // eslint-disable-next-line no-undef
  return <StyledQuizButton {...props}>{btnName}</StyledQuizButton>;
};

export default QuizButton;

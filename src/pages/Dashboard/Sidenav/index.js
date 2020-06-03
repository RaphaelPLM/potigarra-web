import React from "react";
import styled from "styled-components";

const Sidenav = styled.aside`
  background-color: #e6e6e6;
  width: ${(props) => (props.isOpen === true ? "240px" : "0")};
  transition: 0.5s;
  overflow-x: hidden;
  flex-shrink: 0;
  white-space: nowrap;

  @media (max-width: 900px) {
    width: 0px
  }
`;

export default Sidenav;

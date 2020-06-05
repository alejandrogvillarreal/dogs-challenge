import styled from "styled-components";

export const SidebarWrapper = styled.div<any>`
  width: 15rem;
  overflow-x: hidden;
  min-height: 100%;
  margin-left: -15rem;
  -webkit-transition: margin 0.25s ease-out;
  -moz-transition: margin 0.25s ease-out;
  -o-transition: margin 0.25s ease-out;
  transition: margin 0.25s ease-out;

  & .sidebar-heading {
    padding: 0.875rem 1.25rem;
    font-size: 1.2rem;
  }
`;

export const SubBreedsList = styled.ul`
  margin-bottom: 0;
  list-style: none;
`;

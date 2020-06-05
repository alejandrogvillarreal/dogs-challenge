import styled from "styled-components";

export const ExternalWrapper = styled.div<any>`
  height: 100vh;

  &.hide #sidebar-wrapper {
    margin-left: 0;
  }

  @media (min-width: 768px) {
    #sidebar-wrapper {
      margin-left: 0;
    }

    #page-content-wrapper {
      min-width: 0;
      width: 100%;
    }

    &.hide #sidebar-wrapper {
      margin-left: -15rem;
    }
  }
`;

export const PageContentWrapper = styled.div<any>`
  overflow-x: hidden;
  min-height: 100%;
  width: 100%;
`;

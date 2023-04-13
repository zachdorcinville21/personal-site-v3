import styled from "styled-components";
import Nav from "../Nav/Nav";
import Footer from "../Footer";

interface LayoutProps {
  children: React.ReactNode;
}

export const Layout = ({ children }: LayoutProps) => {
  return (
    <LayoutContainer>
      <Nav />
      {children}
      <Footer />
    </LayoutContainer>
  );
};

const LayoutContainer = styled.div`
  width: 100%;
  min-height: 100vh;
`;

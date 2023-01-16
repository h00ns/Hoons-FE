import React from 'react';
import styled from '@emotion/styled';

type Props = {
  header: React.ReactNode;
  footer: React.ReactNode;
  children: React.ReactNode;
};

const DefaultTemplateWrapper = styled.div`
  width: 100%;
  min-height: 100vh;

  /* iOS only */
  @supports (-webkit-touch-callout: none) {
    min-height: -webkit-fill-available;
  }

  display: flex;
  flex: 1;
  flex-direction: column;
  align-items: stretch;
`;

const HeaderWrapper = styled.header`
  width: 100%;
  position: fixed;
  top: 0;
  z-index: 999;
`;

const ContentWrapper = styled.section`
  width: 100%;
  flex: 1;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  position: relative;
`;

const FooterWrapper = styled.footer`
  width: 100%;
  z-index: 999;
`;

const DefaultTemplate: React.FC<Props> = ({ header, footer, children }) => {
  return (
    <DefaultTemplateWrapper>
      {header && <HeaderWrapper>{header}</HeaderWrapper>}
      <ContentWrapper>{children}</ContentWrapper>
      {footer && <FooterWrapper>{footer}</FooterWrapper>}
    </DefaultTemplateWrapper>
  );
};

export default DefaultTemplate;

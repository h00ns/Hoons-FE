import React from 'react';

//  style
import styled from '@emotion/styled';
import { primary, blue, gray, red, white, black } from '@styles/Colors';
import { mq } from '@utils/style';

const ServiceContentWrapper = styled.div`
  width: 100%;
  height: 100%;
  padding: 80px 24px 24px;

  display: flex;
  flex-wrap: wrap;
  gap: 24px;
`;

const ContentItem = styled.div`
  width: 200px;
  height: 287px;
  border: 1px solid ${gray.gray5};

  ${mq['md']} {
    width: 100%;
  }
`;

const DefaultTemplate: React.FC = ({}) => {
  return (
    <ServiceContentWrapper>
      {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 12, 13, 14, 1512, 13, 14, 15].map((item) => (
        <ContentItem></ContentItem>
      ))}
    </ServiceContentWrapper>
  );
};

export default DefaultTemplate;

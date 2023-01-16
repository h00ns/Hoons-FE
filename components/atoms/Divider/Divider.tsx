import React from 'react';
import styled from '@emotion/styled';

import { primary, blue, gray, red, white, black } from '../../../styles/Colors';

interface Props {
  color?: string;
  width?: string;
  align?: 'center';
}

const Divider = styled.div<Props>`
  width: ${(props) => props.width || '100%'};
  height: 1px;
  background-color: ${(props) => props.color || gray.gray3};

  ${(props) =>
    props.align === 'center' &&
    `
     margin:0 auto;
  `}
`;

const DividerComponent: React.FC<Props> = ({ color, width, align }) => {
  return <Divider color={color} width={width} align={align} />;
};

export default DividerComponent;

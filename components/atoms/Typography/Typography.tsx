import React from 'react';
import styled from '@emotion/styled';

type Props = {
  variant: string;
  color: string;
  children: React.ReactNode;
  align?: string;
};

const D = styled.div<Props>`
  font-family: 'Pretendard Variable';
  word-break: keep-all;

  color: ${(props) => (props.color ? props.color : '#222222')};

  ${(props) =>
    props.align &&
    `
    text-align:${props.align}; 
  `}

  ${(props) =>
    props.variant === 'h1' &&
    `
    font-weight:800;
    font-size:90px;
    line-height:124px;
    letter-spacing:-2%;
  `};

  ${(props) =>
    props.variant === 'h2' &&
    `
    font-weight:800;
    font-size:66px;
    line-height:90px;
    letter-spacing:-2%;
  `};

  ${(props) =>
    props.variant === 'h3' &&
    `
    font-weight:700;
    font-size:52px;
    line-height:72px;
    letter-spacing:-2%;
  `};

  ${(props) =>
    props.variant === 'h4' &&
    `
    font-weight:700;
    font-size:40px;
    line-height:60px;
    letter-spacing:-2%;
  `};

  ${(props) =>
    props.variant === 'h5' &&
    `
    font-weight:700;
    font-size:32px;
    line-height:50px;
    letter-spacing:-2%;
  `};

  ${(props) =>
    props.variant === 'h6' &&
    `
    font-weight:700;
    font-size:28px;
    line-height:46px;
    letter-spacing:-2%;
  `};

  ${(props) =>
    props.variant === 'sh1' &&
    `
    font-weight:700;
    font-size:24px;
    line-height:34px;
    letter-spacing:-2%;
  `};

  ${(props) =>
    props.variant === 'sh2' &&
    `
    font-weight:700;
    font-size:20px;
    line-height:28px;
    letter-spacing:-2%;
  `};

  ${(props) =>
    props.variant === 'sh3' &&
    `
    font-weight:700;
    font-size:16px;
    line-height:22px;
    letter-spacing:-2%;
  `};

  ${(props) =>
    props.variant === 'sh4' &&
    `
    font-weight:700;
    font-size:14px;
    line-height:20px;
    letter-spacing:-2%;
  `};

  ${(props) =>
    props.variant === 'sh5' &&
    `
    font-weight:700;
    font-size:12px;
    line-height:18px;
    letter-spacing:-2%;
  `};

  ${(props) =>
    props.variant === 'b1' &&
    `
    font-weight:500;
    font-size:20px;
    line-height:30px;
    letter-spacing:-2%;
  `};

  ${(props) =>
    props.variant === 'b2' &&
    `
    font-weight:500;
    font-size:18px;
    line-height:26px;
    letter-spacing:-2%;
  `};

  ${(props) =>
    props.variant === 'b3' &&
    `
    font-weight:400;
    font-size:16px;
    line-height:24px;
    letter-spacing:-2%;
  `};

  ${(props) =>
    props.variant === 'b4' &&
    `
    font-weight:400;
    font-size:14px;
    line-height:20px;
    letter-spacing:-2%;
  `};

  ${(props) =>
    props.variant === 'b5' &&
    `
    font-weight:400;
    font-size:12px;
    line-height:18px;
    letter-spacing:-2%;
  `};
`;

const Typography: React.FC<Props> = ({ variant, color, children, align }) => {
  return (
    <D variant={variant} color={color} align={align}>
      {children}
    </D>
  );
};

export default Typography;

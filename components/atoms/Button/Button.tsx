import React from 'react';
import styled from '@emotion/styled';

import { primary, blue, gray, red, white, black } from '@styles/Colors';

interface Props {
  variant?: 'default';
  width?: string;
  label?: string;
  disabled?: boolean;
  onClick?: () => void;
}

const Button = styled.button<Props>`
  width: ${(props) => props.width || '100%'};
  height: 48px;
  background-color: ${primary.gray};
  border: none;
  border-radius: 8px;
  color: ${white};
  cursor: pointer;

  font-weight: 700;
  font-size: 16px;

  &:hover {
    background-color: ${gray.gray7};
    color: ${white};
  }

  &:disabled {
    background: ${gray.gray2};
    color: ${gray.gray4};
  }
`;

const ButtonComponent: React.FC<Props> = ({ variant = 'default', width, label, disabled = false, onClick }) => {
  return (
    <>
      <Button variant={variant} width={width} disabled={disabled} onClick={onClick}>
        {label}
      </Button>
    </>
  );
};

export default ButtonComponent;

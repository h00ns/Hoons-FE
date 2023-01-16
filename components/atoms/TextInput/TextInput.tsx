import React from 'react';
import styled from '@emotion/styled';

import { primary, blue, gray, red, white, black } from '@styles/Colors';
import Typography from '../Typography';

interface Props {
  variant?: 'default' | 'error';
  width?: string;
  placeholder?: string;
  name?: string;
  value?: string;
  type?: string;
  disabled?: boolean;
  errorMessage?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onBlur?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  // searchInput
  isSearch?: boolean;
}

const TextInput = styled.input<Props>`
  width: ${(props) => props.width || '100%'};
  height: 48px;
  padding: 0 16px;
  font-size: 14px;
  border: 1px solid ${gray.gray3};
  border-radius: 4px;

  &:focus {
    outline: none;
  }
  &::placeholder {
    color: ${gray.gray5};
  }
  &:disabled {
    background: ${gray.gray1};
    color: ${gray.gray6};
  }

  /* error input */
  ${(props) =>
    props.variant === 'error' &&
    `
    border: 1px solid ${red.red3};
    color: ${red.red3};

    &::placeholder {
      color:${red.red3}
    }
  `}

  /* search Input */
  ${(props) =>
    props.isSearch &&
    `
    border:none;
    height:40px;
  `}
`;

const ErrorMessageWrapper = styled.div`
  margin-top: 4px;
`;

const TextInputComponent: React.FC<Props> = ({
  variant = 'default',
  type = 'text',
  width,
  placeholder,
  name,
  value,
  errorMessage,
  disabled,
  onChange,
  onBlur,
  isSearch = false,
}) => {
  return (
    <div>
      <TextInput
        variant={variant}
        disabled={disabled}
        type={type}
        width={width}
        name={name}
        value={value}
        placeholder={placeholder}
        onChange={onChange}
        onBlur={onBlur}
        isSearch={isSearch}
      />
      {variant === 'error' && errorMessage && (
        <ErrorMessageWrapper>
          <Typography variant="b5" color={red.red3}>
            {errorMessage}
          </Typography>
        </ErrorMessageWrapper>
      )}
    </div>
  );
};

export default TextInputComponent;

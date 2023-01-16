import React, { useEffect, useState } from 'react';
import styled from '@emotion/styled';

// colors
import { primary, blue, gray, red, white, black } from '@styles/Colors';

// icons
import SearchIcon from '@public/assets/icons/Search.svg';
import TextInput from '@components/atoms/TextInput';

interface Props {
  textInput?: TextInput;
  onClick?: () => void;
}

type TextInput = {
  variant?: 'default' | 'error';
  width?: string;
  placeholder?: string;
  name?: string;
  value?: string;
  type?: string;
  errorMessage?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onBlur?: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

const SearchInputWrapper = styled.div<{ width?: string }>`
  width: ${(props) => props.width || '100%'};
  height: 48px;
  font-size: 14px;
  border: 1px solid ${gray.gray3};
  border-radius: 4px;
  padding-left: 16px;

  display: grid;
  align-items: center;
  grid-template-columns: 24px 1fr;
`;

const IconBox = styled.div`
  width: 24px;
  height: 24px;
  cursor: pointer;
`;

const SearchInput: React.FC<Props> = ({ textInput, onClick }) => {
  return (
    <SearchInputWrapper>
      <IconBox onClick={onClick}>
        <SearchIcon fill={gray.gray6} />
      </IconBox>
      <TextInput
        variant={textInput?.variant}
        width={textInput?.width}
        name={textInput?.name}
        value={textInput?.value}
        type={textInput?.type}
        placeholder={textInput?.placeholder}
        errorMessage={textInput?.errorMessage}
        onChange={textInput?.onChange}
        onBlur={textInput?.onBlur}
        isSearch
      />
    </SearchInputWrapper>
  );
};

export default SearchInput;

import React from "react";
import styled from "@emotion/styled";

import { primary, blue, gray, red, white, black } from "@styles/Colors";

/**
 *  components
 */
//  atoms
import Typography from "@components/atoms/Typography";
import TextInput from "@components/atoms/TextInput";

import { TypoVariant } from "../../../constants";

type Props = {
  textInput: TextInput;
  title: string;
};

type TextInput = {
  variant?: "default" | "error";
  width?: string;
  placeholder?: string;
  name?: string;
  value?: string;
  type?: string;
  errorMessage?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onBlur?: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

const InputBoxWrapper = styled.div`
  display: grid;
  row-gap: 6px;
`;

const InputBox: React.FC<Props> = ({ textInput, title }) => {
  return (
    <>
      <InputBoxWrapper>
        {/* label */}
        <>
          {title && (
            <Typography variant={TypoVariant.SH3} color={primary.gray}>
              {title}
            </Typography>
          )}
        </>
        {/* label end */}

        {/* text input */}
        <>
          {textInput && (
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
            />
          )}
        </>
        {/* text input end */}
      </InputBoxWrapper>
    </>
  );
};

export default InputBox;

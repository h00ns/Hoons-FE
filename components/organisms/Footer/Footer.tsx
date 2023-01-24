import Link from "next/link";
import React, { useState, useEffect } from "react";

//  style
import styled from "@emotion/styled";
import { primary, blue, gray, red, white, black } from "@styles/Colors";
import { mq } from "@utils/style";

/**
 *  Components
 */
//  atoms
import Typography from "@components/atoms/Typography";

interface Props {}

const FooterWrapper = styled.div`
  width: 100%;
  min-height: 200px;
  padding: 24px;
  background: ${primary.gray};
  color: ${white};

  display: flex;
  column-gap: 128px;
  flex-wrap: wrap;
  row-gap: 24px;

  ${mq["md"]} {
    flex-direction: column;
  }
`;

const FooterBlock = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 12px;
`;

const Footer: React.FC<Props> = ({}) => {
  return (
    <FooterWrapper>
      <FooterBlock>
        <Typography variant="sh1" color={white}>
          Hoons
        </Typography>
        <Typography variant="b4" color={gray.gray4}>
          만든이 : hoon
        </Typography>
        <Typography variant="b4" color={gray.gray4}>
          FE : Next.js
        </Typography>
        <Typography variant="b4" color={gray.gray4}>
          BE : Nest.js
        </Typography>
      </FooterBlock>
      <FooterBlock>
        <Typography variant="sh1" color={white}>
          Github
        </Typography>
        <Link href="https://github.com/h00ns/h00ns-project">
          <a target="_blank">
            <Typography variant="b4" color={gray.gray4}>
              Visit
            </Typography>
          </a>
        </Link>
      </FooterBlock>
      <FooterBlock>
        <Typography variant="sh1" color={white}>
          Velog
        </Typography>
        <Link href="https://velog.io/@hoooons">
          <a target="_blank">
            <Typography variant="b4" color={gray.gray4}>
              Visit
            </Typography>
          </a>
        </Link>
      </FooterBlock>
      <FooterBlock>
        <Typography variant="sh1" color={white}>
          Notion
        </Typography>
        <Link href="https://velog.io/@hoooons">
          <a target="_blank">
            <Typography variant="b4" color={gray.gray4}>
              Visit
            </Typography>
          </a>
        </Link>
      </FooterBlock>
      <FooterBlock>
        <Typography variant="sh1" color={white}>
          SNS
        </Typography>
        <Link href="https://www.instagram.com/h0000n_/">
          <a target="_blank">
            <Typography variant="b4" color={gray.gray4}>
              Instagram
            </Typography>
          </a>
        </Link>
      </FooterBlock>
    </FooterWrapper>
  );
};

export default Footer;

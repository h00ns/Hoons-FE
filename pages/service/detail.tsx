import type { NextPage } from "next";
import { useEffect, useState } from "react";

//  다국어 지원
import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";

//  style
import styled from "@emotion/styled";
import { primary, blue, gray, red, white, black } from "@styles/Colors";
import { mq } from "@utils/style";

/**
 *  components
 */
//  organisms
import Header from "@components/organisms/Header";
//  templates
import DefaultTemplate from "@components/templetes/DefaultTemplate";

const DetailWrapper = styled.div`
  width: 100%;
  max-width: 345px;
  padding: 136px 0;
  margin: 0 auto;

  ${mq["md"]} {
    max-width: 320px;
    padding: 104px 0;
  }
`;

const Home: NextPage = () => {
  return (
    <DefaultTemplate header={<Header />} footer={null}>
      <DetailWrapper>123</DetailWrapper>
    </DefaultTemplate>
  );
};

export const getStaticProps = async ({ locale }: any) => ({
  props: {
    ...(await serverSideTranslations(locale, ["common"])),
  },
});

export default Home;

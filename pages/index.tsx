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
import Footer from "@components/organisms/Footer";
import SideBar from "@components/organisms/SideBar";
import ServiceContent from "@components/templetes/ServiceContent";

const Container = styled.div`
  min-height: 1000px;

  display: grid;
  grid-template-columns: 280px 1fr;

  ${mq["md"]} {
    grid-template-columns: none;
  }
`;

const Home: NextPage = () => {
  return (
    <DefaultTemplate header={<Header />} footer={<Footer />}>
      <Container>
        <SideBar />
        <ServiceContent />
      </Container>
    </DefaultTemplate>
  );
};

export const getStaticProps = async ({ locale }: any) => ({
  props: {
    ...(await serverSideTranslations(locale, ["common"])),
  },
});

export default Home;

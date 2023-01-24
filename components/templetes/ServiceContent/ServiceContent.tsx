import React, { useEffect } from "react";
import Image from "next/image";
import { useRouter } from "next/router";

//  style
import styled from "@emotion/styled";
import { primary, blue, gray, red, white, black } from "@styles/Colors";
import { mq } from "@utils/style";

//  다국어 지원
import { useTranslation } from "next-i18next";

/**
 *  Components
 */
//  atoms
import Typography from "@components/atoms/Typography";
import { useGetItemsFetch } from "@hooks/fetch/useServiceFetch";

interface Props {}

const ServiceContentWrapper = styled.div`
  width: 100%;
  height: 100%;
  padding: 80px 24px 24px;

  display: flex;
  flex-wrap: wrap;
  gap: 24px;

  ${mq["md"]} {
    padding-top: 24px;
  }
`;

const ContentItem = styled.div`
  width: 250px;
  height: 287px;
  cursor: pointer;

  ${mq["md"]} {
    width: 100%;
    max-width: 380px;
    margin: 0 auto;
  }
`;

const ImageWrapper = styled.div`
  width: 100%;
  height: 230px;
  position: relative;
  background-color: ${gray.gray2};

  margin-bottom: 12px;
`;

const ServiceContent: React.FC<Props> = ({}) => {
  const router = useRouter();
  const { i18n, t } = useTranslation("auth");
  const ko = i18n.language === "ko";

  const { getItemsFetchData } = useGetItemsFetch();

  const parseCommaPrice = (str: string) => {
    return str.replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  };

  return (
    <ServiceContentWrapper>
      {getItemsFetchData?.data.item.map((item: any) => (
        <ContentItem onClick={() => router.push("/service/detail")}>
          <ImageWrapper>
            <Image src={item.image} layout="fill" />
          </ImageWrapper>
          <Typography variant="sh3" color={primary.gray}>
            {item.name}
          </Typography>
          <Typography variant="b4" color={primary.gray}>
            {parseCommaPrice(item.price)}
            {ko ? "원" : " KRW"}
          </Typography>
        </ContentItem>
      ))}
    </ServiceContentWrapper>
  );
};

export default ServiceContent;

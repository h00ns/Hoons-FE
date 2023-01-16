import type { NextPage } from 'next';

//  style
import styled from '@emotion/styled';
import { primary, blue, gray, red, white, black } from '@styles/Colors';
import { mq } from '@utils/style';

/**
 *  components
 */
//  atoms
import Typography from '@components/atoms/Typography';
//  organisms
import Header from '@components/organisms/Header';
//  templates
import DefaultTemplate from '@components/templetes/DefaultTemplate';

const ManageWrapper = styled.div`
  width: 100%;
  max-width: 745px;
  padding: 136px 0px;
  margin: 0 auto;

  border: 1px solid red;

  ${mq['md']} {
    max-width: 320px;
    padding: 104px 0;
  }
`;

const TitleWrapper = styled.div`
  margin-bottom: 80px;
  text-align: center;
`;

const Manage: NextPage = () => {
  return (
    <DefaultTemplate header={<Header />} footer={null}>
      <ManageWrapper>
        <TitleWrapper>
          <Typography variant="sh1" color={primary.gray}>
            관리자 페이지
          </Typography>
        </TitleWrapper>
        관리자 페이지
        <br />
        - 카테고리 추가
        <br />
        - 상품 추가
        <br />
        상단은 탭바로 구분
      </ManageWrapper>
    </DefaultTemplate>
  );
};

export default Manage;

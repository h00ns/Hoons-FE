import type { NextPage } from 'next';

//  style
import styled from '@emotion/styled';
import { primary, blue, gray, red, white, black } from '@styles/Colors';
import { mq } from '@utils/style';

/**
 *  components
 */
//  organisms
import Header from '@components/organisms/Header';
//  templates
import DefaultTemplate from '@components/templetes/DefaultTemplate';

const Logout: NextPage = () => {
  return (
    <DefaultTemplate header={<Header />} footer={null}>
      <div></div>
    </DefaultTemplate>
  );
};

export default Logout;

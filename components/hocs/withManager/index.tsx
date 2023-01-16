import { NextComponentType } from 'next';
import { useRouter } from 'next/router';

function withManager<T>(Component: NextComponentType<any>) {
  const Manager = (props: any) => {
    const router = useRouter();

    /**
     *  @todo
     *  관리자 페이지 hocs
     *  1. 관리자 권한 체크
     *  2. 관리자 X => 메인으로 내보냄
     *  3. 관리자 O => success !
     */

    return <Component {...props} />;
  };

  return Manager;
}

export default withManager;

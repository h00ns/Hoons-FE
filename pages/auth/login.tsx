import type { NextPage } from "next";
import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import Link from "next/link";

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
//  atoms
import Typography from "@components/atoms/Typography";
import TextInput from "@components/atoms/TextInput";
import Button from "@components/atoms/Button";
//  organisms
import Header from "@components/organisms/Header";
//  templates
import DefaultTemplate from "@components/templetes/DefaultTemplate";

//  fetch hooks
import { useLoginFetch } from "@hooks/fetch/useAuthFetch";

const LoginWrapper = styled.div`
  width: 100%;
  max-width: 345px;
  padding: 136px 0;
  margin: 0 auto;

  ${mq["md"]} {
    max-width: 320px;
    padding: 104px 0;
  }
`;

const TitleWrapper = styled.div`
  margin-bottom: 80px;
  text-align: center;
`;

const LoginFormWrapper = styled.div`
  display: grid;
  row-gap: 12px;
  margin-bottom: 24px;
`;

const RegisterButton = styled.div`
  margin-top: 8px;
  display: flex;
  justify-content: end;
`;

interface FormTypes {
  email: string;
  password: string;
}

const Login: NextPage = () => {
  const router = useRouter();
  const { i18n, t } = useTranslation("auth");

  const [form, setForm] = useState<FormTypes>({
    email: "",
    password: "",
  });

  const { loginFetchMutate, loginFetchStatus } = useLoginFetch();

  /**
   *  @function
   *  입력 폼 변화 핸들링 function
   */
  const handleFormChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    setForm((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  /**
   *  @function
   *  로그인 function
   */
  const handleFormSubmit = () => {
    loginFetchMutate({
      ...form,
    });
  };

  useEffect(() => {
    if (loginFetchStatus === "success") {
      router.push("/");
    }
  }, [loginFetchStatus]);

  return (
    <DefaultTemplate header={<Header />} footer={null}>
      <LoginWrapper>
        <TitleWrapper>
          <Typography variant="sh1" color={primary.gray}>
            {t("login.title")}
          </Typography>
        </TitleWrapper>
        <LoginFormWrapper>
          <TextInput
            name="email"
            value={form.email}
            placeholder={t("login.placeholder1")}
            onChange={handleFormChange}
          />
          <TextInput
            name="password"
            value={form.password}
            type="password"
            placeholder={t("login.placeholder2")}
            onChange={handleFormChange}
          />
        </LoginFormWrapper>
        <Button label={t("login.button1")} onClick={handleFormSubmit} />
        <RegisterButton>
          <Link href="/auth/register">
            <a>
              <Typography variant="sh4" color={gray.gray6}>
                {t("login.button2")}
              </Typography>
            </a>
          </Link>
        </RegisterButton>
      </LoginWrapper>
    </DefaultTemplate>
  );
};

export const getStaticProps = async ({ locale }: any) => ({
  props: {
    ...(await serverSideTranslations(locale, ["common", "auth"])),
  },
});

export default Login;

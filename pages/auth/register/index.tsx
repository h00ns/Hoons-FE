import type { NextPage } from "next";
import { useState, useEffect } from "react";
import { useRouter } from "next/router";

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
//  molecules
import InputBox from "@components/molecules/InputBox";
//  organisms
import Header from "@components/organisms/Header";
//  templates
import DefaultTemplate from "@components/templetes/DefaultTemplate";

import { TypoVariant } from "../../../constants";

const RegisterWrapper = styled.div`
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

const DescriptionBox = styled.div`
  margin: 4px 0;
`;

const InputWrapper = styled.div`
  display: grid;
  row-gap: 12px;
  margin-bottom: 24px;
`;

interface FormTypes {
  [key: string]: any;
  email: string;
  password: string;
  passwordConfirm: string;
  name: string;
}

interface ErrorMessageTypes {
  email: string;
  password: string;
  passwordConfirm: string;
}

const Login: NextPage = () => {
  const router = useRouter();
  const { i18n, t } = useTranslation("auth");

  const [form, setForm] = useState<FormTypes>({
    email: "",
    password: "",
    passwordConfirm: "",
    name: "",
  });
  const [errorMessage, setErrorMessage] = useState<ErrorMessageTypes>({
    email: "",
    password: "",
    passwordConfirm: "",
  });
  const [disableSubmit, setDisableSubmit] = useState(true);

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

    if (["email", "password", "passwordConfirm"].includes(name)) {
      handleFormCheck(e);
    }
  };

  /**
   *  @function
   *  입력 폼 validation function
   */
  const handleFormCheck = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    const emailRegex = /^[a-zA-Z0-9+-\_.]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/;
    const passwordRegex =
      /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/;
    let message = "";

    if (name === "email" && !emailRegex.test(value)) {
      message = t("signup.errorMessage1");
    }
    if (name === "password" && !passwordRegex.test(value)) {
      message = t("signup.errorMessage2");
    }
    if (name === "passwordConfirm" && form.password !== value) {
      message = t("signup.errorMessage3");
    }

    setErrorMessage((prev) => ({
      ...prev,
      [name]: message,
    }));
  };

  // submit 가능 여부 체크
  useEffect(() => {
    // 에러메세지 O
    if (Object.values(errorMessage).filter((error) => error !== "").length) {
      setDisableSubmit(true);
      return;
    }
    // 빈값 O
    const target = ["email", "password", "passwordConfirm", "name"];
    if (target.filter((key) => form[key] === "").length) {
      setDisableSubmit(true);
      return;
    }

    setDisableSubmit(false);
  }, [form]);

  /**
   *  @function
   *  회원가입 function
   */
  const handleFormSubmit = () => {
    alert("회원가입");
  };

  return (
    <DefaultTemplate header={<Header />} footer={null}>
      <RegisterWrapper>
        <TitleWrapper>
          <DescriptionBox>
            <Typography variant={TypoVariant.SH1} color={primary.gray}>
              {t("signup.title")}
            </Typography>
          </DescriptionBox>
          <DescriptionBox>
            <Typography variant={TypoVariant.B4} color={primary.gray}>
              {t("signup.subtitle")}
            </Typography>
          </DescriptionBox>
        </TitleWrapper>
        <InputWrapper>
          <InputBox
            title={t("signup.input1")}
            textInput={{
              variant: errorMessage.email ? "error" : "default",
              errorMessage: errorMessage.email,
              placeholder: t("signup.placeholder1"),
              name: "email",
              value: form.email,
              onChange: handleFormChange,
              onBlur: handleFormCheck,
            }}
          />
          <InputBox
            title={t("signup.input2")}
            textInput={{
              variant: errorMessage.password ? "error" : "default",
              errorMessage: errorMessage.password,
              placeholder: t("signup.placeholder2"),
              name: "password",
              type: "password",
              value: form.password,
              onChange: handleFormChange,
              onBlur: handleFormCheck,
            }}
          />
          <InputBox
            title={t("signup.input3")}
            textInput={{
              variant: errorMessage.passwordConfirm ? "error" : "default",
              errorMessage: errorMessage.passwordConfirm,
              placeholder: t("signup.placeholder3"),
              name: "passwordConfirm",
              type: "password",
              value: form.passwordConfirm,
              onChange: handleFormChange,
              onBlur: handleFormCheck,
            }}
          />
          <InputBox
            title={t("signup.input4")}
            textInput={{
              placeholder: t("signup.placeholder4"),
              name: "name",
              value: form.name,
              onChange: handleFormChange,
            }}
          />
        </InputWrapper>
        <Button
          label={t("signup.button")}
          disabled={disableSubmit}
          onClick={handleFormSubmit}
        />
      </RegisterWrapper>
    </DefaultTemplate>
  );
};

export const getStaticProps = async ({ locale }: any) => ({
  props: {
    ...(await serverSideTranslations(locale, ["common", "auth"])),
  },
});

export default Login;

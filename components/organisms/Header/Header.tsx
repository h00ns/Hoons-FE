import React, { useState, useEffect, useRef } from "react";
import { useRouter } from "next/router";
import Link from "next/link";

//  다국어 지원
import { useTranslation } from "next-i18next";

//  style
import styled from "@emotion/styled";
import { primary, blue, gray, red, white, black } from "@styles/Colors";
import { mq } from "@utils/style";

/**
 *  components
 */
//  atoms
import Typography from "@components/atoms/Typography";

//  icons
import LineIcon from "@public/assets/icons/Line.svg";
import LanguageIcon from "@public/assets/icons/Language.svg";
import PersonIcon from "@public/assets/icons/Person.svg";
import Divider from "@components/atoms/Divider";

import { TypoVariant } from "../../../constants";

interface Props {}

const HeaderWrapper = styled.div<Props>`
  width: 100%;
  height: 56px;
  padding: 0 24px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  z-index: 999;
  background: ${primary.gray};
  color: ${white};
`;

const LogoWrapper = styled.div``;

const ContentWrapper = styled.div`
  display: flex;
  column-gap: 24px;
`;

const IconWrapper = styled.div<{ pointer?: boolean }>`
  width: 24px;
  height: 24px;

  ${(props) =>
    props.pointer &&
    `
    cursor: pointer;
  `}
`;

//  Modal
interface ModalProps {
  open: boolean;
}

const Modal = styled.div<ModalProps>`
  padding: 24px;
  background: ${white};
  border-radius: 8px;
  box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.16), 4px 8px 28px rgba(0, 0, 0, 0.08);

  display: flex;
  justify-content: center;
  flex-direction: column;
  row-gap: 12px;

  position: absolute;

  ${(props) =>
    !props.open &&
    `
    display:none;
    `}
`;

const ProfileModal = styled(Modal)`
  width: 240px;

  top: 64px;
  right: 96px;

  ${mq["md"]} {
    top: 64px;
    right: 24px;
  }
`;

const LanguageModal = styled(Modal)`
  width: 120px;

  align-items: center;

  top: 64px;
  right: 24px;
`;

const ModalRowItem = styled.div<{ center?: boolean }>`
  cursor: pointer;

  ${(props) =>
    props.center &&
    `
    margin: 0 auto;
  `}
`;
//  Modal end

const Header: React.FC<Props> = ({}) => {
  const router = useRouter();
  const { i18n, t } = useTranslation("common");

  const profileModalRef = useRef<any>(null);
  const languageModalRef = useRef<any>(null);

  const [openModal, setOpenModal] = useState("");
  const [language, setLanguage] = useState("ko");
  const [loginStatus, setLoginStatus] = useState(true);

  useEffect(() => {
    // 마우스 이벤트 핸들링 (모달 close)
    function handleClickOutside(e: MouseEvent): void {
      if (
        profileModalRef.current &&
        !profileModalRef.current.contains(e.target as Node) &&
        languageModalRef.current &&
        !languageModalRef.current.contains(e.target as Node)
      ) {
        setOpenModal("");
      }
    }
    document.addEventListener("mousedown", handleClickOutside);

    // language 세팅이 되어 있으면
    const lang = localStorage.getItem("lang") || router?.locale || "ko";

    // 최근 language 셋팅 기준으로 라우팅
    if (lang !== router?.locale) {
      router.push(`/${lang}${router.asPath}`, `/${lang}${router.asPath}`, {
        locale: lang,
      });
    }

    if (lang) {
      setLanguage(lang);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  /**
   *  @function
   *  language 로컬스토리지 셋팅 및 라우팅 function
   */
  const handleStorageLanguageSet = (lang: string) => {
    localStorage.setItem("lang", lang);
    router.push(`/${lang}${router.asPath}`, `/${lang}${router.asPath}`, {
      locale: lang,
    });
  };

  return (
    <HeaderWrapper>
      <LogoWrapper>
        <Link href="/">
          <a>
            <Typography variant={TypoVariant.SH2} color={white}>
              Hoons
            </Typography>
          </a>
        </Link>
      </LogoWrapper>
      <ContentWrapper>
        {/* 로그인 여부 */}
        {loginStatus ? (
          <IconWrapper pointer onClick={() => setOpenModal("profile")}>
            <PersonIcon fill={white} />
          </IconWrapper>
        ) : (
          <Link href="/auth/login">
            <a>
              <Typography variant={TypoVariant.SH4} color={white}>
                {t("header.login")}
              </Typography>
            </a>
          </Link>
        )}
        {/* 로그인 여부 end */}
        <IconWrapper>
          <LineIcon fill={white} />
        </IconWrapper>
        <IconWrapper pointer onClick={() => setOpenModal("language")}>
          <LanguageIcon fill={white} />
        </IconWrapper>
      </ContentWrapper>

      {/* profile modal */}
      <ProfileModal open={openModal === "profile"} ref={profileModalRef}>
        <ModalRowItem>
          <Typography variant={TypoVariant.SH3} color={primary.gray}>
            안녕하세요 ! ㅇㅇㅇ 님
          </Typography>
        </ModalRowItem>
        <ModalRowItem>
          <Link href="/manage">
            <a>
              <Typography variant={TypoVariant.B3} color={primary.gray}>
                관리페이지
              </Typography>
            </a>
          </Link>
        </ModalRowItem>
        <ModalRowItem>
          <Typography variant={TypoVariant.B3} color={primary.gray}>
            장바구니
          </Typography>
        </ModalRowItem>
        <Divider />
        <ModalRowItem center>
          <Link href="/auth/logout">
            <a>
              <Typography variant={TypoVariant.SH3} color={gray.gray5}>
                로그아웃
              </Typography>
            </a>
          </Link>
        </ModalRowItem>
      </ProfileModal>
      {/* profile modal end */}

      {/* language modal */}
      <LanguageModal open={openModal === "language"} ref={languageModalRef}>
        <ModalRowItem onClick={() => handleStorageLanguageSet("ko")}>
          <Typography
            variant={TypoVariant.SH3}
            color={language === "ko" ? primary.blue : gray.gray5}
          >
            한국어
          </Typography>
        </ModalRowItem>
        <ModalRowItem onClick={() => handleStorageLanguageSet("en")}>
          <Typography
            variant={TypoVariant.SH3}
            color={language === "en" ? primary.blue : gray.gray5}
          >
            English
          </Typography>
        </ModalRowItem>
      </LanguageModal>
      {/* language modal end */}
    </HeaderWrapper>
  );
};

export default Header;

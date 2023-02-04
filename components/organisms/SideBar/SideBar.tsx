import React, { useState, useEffect } from "react";

//  style
import styled from "@emotion/styled";
import { primary, blue, gray, red, white, black } from "@styles/Colors";
import { mq } from "@utils/style";
import SearchInput from "@components/molecules/SearchInput/SearchInput";
import Typography from "@components/atoms/Typography";

import { TypoVariant } from "../../../constants";

interface Props {}

const SideBarWrapper = styled.div<Props>`
  width: 280px;
  height: 100%;
  padding: 80px 24px 24px;
  border-right: 1px solid ${gray.gray4};

  ${mq["md"]} {
    width: 100%;
    height: 320px;
    border-right: none;
    border-bottom: 1px solid ${gray.gray4};
  }
`;

const SearchBox = styled.div`
  margin-bottom: 32px;
`;

const ContentWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 16px;

  overflow-y: auto;

  ${mq["md"]} {
    max-height: 132px;
  }
`;

const ContentItem = styled.div`
  cursor: pointer;
`;

const SideBar: React.FC<Props> = ({}) => {
  const [form, setForm] = useState({
    search: "",
  });
  const [selectCategory, setSelectCategory] = useState("");
  const category = [
    "Nike",
    "New Balance",
    "Asics",
    "Vans",
    "Dunk",
    "Jordan",
    "Converse",
    "Dr.Martens",
  ];

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
   *  카테고리 click function
   */
  const handleCategoryClick = (value: string) => {
    if (selectCategory === value) {
      setSelectCategory("");
      return;
    }

    setSelectCategory(value);
  };

  /**
   *  @function
   *  검색 function
   */
  const handleFormSubmit = () => {
    const value = form.search;

    category.forEach((item) => {
      if (item.toUpperCase() === value.toUpperCase()) {
        setSelectCategory(item);
      }
    });

    setForm((prev) => ({
      ...prev,
      search: "",
    }));
  };
  return (
    <SideBarWrapper>
      <SearchBox>
        <SearchInput
          textInput={{
            name: "search",
            value: form.search,
            placeholder: "검색어를 입력해보세요.",
            onChange: handleFormChange,
          }}
          onClick={handleFormSubmit}
        />
      </SearchBox>
      <ContentWrapper>
        {category.map((item: string) => (
          <ContentItem onClick={() => handleCategoryClick(item)} key={item}>
            <Typography
              variant={TypoVariant.B2}
              color={selectCategory === item ? primary.gray : gray.gray4}
            >
              {item}
            </Typography>
          </ContentItem>
        ))}
      </ContentWrapper>
    </SideBarWrapper>
  );
};

export default SideBar;

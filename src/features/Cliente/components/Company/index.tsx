import React from "react";
import {
  CompanyInfoBox,
  CompanyName,
  Container,
  JobTitle,
  JobTitleBox,
  LogoBox,
  LogoImage,
} from "./styles";

export default function Company({
  companyLogo,
  companyName,
  salesmanName,
  location,
}: any) {
  return (
    <Container>
      <LogoBox>
        <LogoImage
          source={{
            uri: companyLogo
              ? companyLogo
              : "https://logodownload.org/wp-content/uploads/2020/01/ambev-logo-5.png",
          }}
          resizeMode="contain"
        />
      </LogoBox>
      <JobTitleBox>
        <JobTitle>{companyName}</JobTitle>
      </JobTitleBox>
      <CompanyInfoBox>
        <CompanyName>{salesmanName}</CompanyName>
      </CompanyInfoBox>
    </Container>
  );
}

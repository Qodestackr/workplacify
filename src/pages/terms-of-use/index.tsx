import { Container } from "@chakra-ui/react";
import { NextSeo } from "next-seo";

import { TermsOfUse } from "../../chakra-starter/marketing-ui/terms-of-use";

const companyName = "workplacify";
const companyEmail = "kevinigeligeligel@gmail.com";

const TermsOfUsePage = () => {
  return (
    <>
      <NextSeo
        title={`Terms of use of ${companyName}`}
        description={`Terms of use of ${companyName}. Here we describe the rules of using hackathon.camp. Using this tool comes with requirements for your business to consider.`}
        canonical={`${process.env.NEXT_PUBLIC_BASE_URL}/terms-of-use`}
        noindex
      />
      <Container maxW={"6xl"}>
        <TermsOfUse companyName={companyName} companyEmail={companyEmail} />
      </Container>
    </>
  );
};

export default TermsOfUsePage;

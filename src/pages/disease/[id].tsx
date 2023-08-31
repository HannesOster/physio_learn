import { useRouter } from "next/router";
import styled from "styled-components";
import { diseases } from "../../lib/data";

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  background-color: #f0f0f0;
`;

const DiseaseDetailWrapper = styled.div`
  max-width: 800px;
  padding: 20px;
  background-color: #ffffff;
  border: 1px solid #ccc;
  border-radius: 5px;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);
`;

const Heading = styled.h2`
  margin-bottom: 10px;
`;

const SubHeading = styled.h3`
  margin-top: 20px;
`;

const Paragraph = styled.p`
  margin-top: 5px;
`;

export default function DiseaseDetail() {
  const router = useRouter();
  const { id } = router.query;
  const disease = diseases.find((disease) => disease.id === id);

  if (!disease) {
    return <p>Loading...</p>;
  }

  return (
    <Container>
      <DiseaseDetailWrapper>
        <Heading>{disease.name}</Heading>
        <SubHeading>Beschreibung:</SubHeading>
        <Paragraph>{disease.description}</Paragraph>
        <SubHeading>Symptome:</SubHeading>
        <Paragraph>{disease.symptoms.join(", ")}</Paragraph>
        <SubHeading>Diagnose:</SubHeading>
        <Paragraph>{disease.diagnosis}</Paragraph>
        <SubHeading>Behandlung:</SubHeading>
        <Paragraph>{disease.treatment}</Paragraph>
        <SubHeading>Prävention:</SubHeading>
        <Paragraph>{disease.prevention}</Paragraph>
      </DiseaseDetailWrapper>
    </Container>
  );
}

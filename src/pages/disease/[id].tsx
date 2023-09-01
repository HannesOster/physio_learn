import { useRouter } from "next/router";
import styled from "styled-components";
import { diseases, Disease, Manifestation } from "../../lib/data";
import Classification from "@/components/Classification/Classifcation";
import Symptoms from "@/components/Symptoms/Symptoms";
import Complications from "@/components/Complications/Complications";
import Prognosis from "@/components/Prognosis/Prognosis";
import Treatment from "@/components/Treatment/Treatment";
import Diagnosis from "@/components/Diagnosis/Diagnosis";

export const Container = styled.div`
  display: flex;
  justify-content: center;

  min-height: 100vh;
  background-color: #f0f0f0;
`;

export const DiseaseDetailWrapper = styled.div`
  margin-top: 100px;
  max-width: 800px;
  padding: 20px;
  background-color: #ffffff;
  border: 1px solid #ccc;
  border-radius: 5px;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);
`;

export const Heading = styled.h2`
  font-size: 24px;
`;

export const SubHeading = styled.h3`
  font-size: 18px;
  margin-top: 10px;
`;

export const Paragraph = styled.p`
  font-size: 16px;
  margin-top: 5px;
`;

export const List = styled.ul`
  padding-left: 20px;
  list-style: disc;
`;
export const HeadingList = styled.ul`
  list-style: none;
  padding-left: 20px;
`;

export const ListItem = styled.li`
  margin-top: 5px;
`;

interface DiseaseDetailProps {
  id: string;
}

export default function DiseaseDetail() {
  const router = useRouter();
  const { id } = router.query;
  const disease: Disease | undefined = diseases.find(
    (disease) => disease.id === id
  );

  if (!disease) {
    return <p>Loading...</p>;
  }

  return (
    <Container>
      <DiseaseDetailWrapper>
        <Heading>{disease.name}</Heading>
        <HeadingList>
          {disease.definition && (
            <ListItem>
              <SubHeading>Definition:</SubHeading>
              <Paragraph>
                {disease.definition}
                <input type="checkbox" />
              </Paragraph>
            </ListItem>
          )}
          <Classification disease={disease} />
          <Symptoms disease={disease} />
          <Diagnosis disease={disease} />
          <Treatment disease={disease} />
          <Complications disease={disease} />
          <Prognosis disease={disease} />
        </HeadingList>
      </DiseaseDetailWrapper>
    </Container>
  );
}

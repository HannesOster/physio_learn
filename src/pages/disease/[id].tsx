import { useRouter } from "next/router";
import styled from "styled-components";
import { diseases, Disease, Manifestation } from "../../lib/data";
import Classification from "@/components/Header/Classification/Classifcation";
import Symptoms from "@/components/Symptoms/Symptoms";

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
              <Paragraph>{disease.definition}</Paragraph>
            </ListItem>
          )}
          <Classification disease={disease} />
          <Symptoms disease={disease} />
          {disease.diagnosis && (
            <ListItem>
              <SubHeading>Diagnose:</SubHeading>
              <List>
                {Array.isArray(disease.diagnosis) ? (
                  disease.diagnosis.map(
                    (diagnosisItem: string, index: number) => (
                      <ListItem key={`diagnosis_${index}`}>
                        {diagnosisItem}
                      </ListItem>
                    )
                  )
                ) : (
                  <>
                    {disease.diagnosis.blood && (
                      <>
                        <ListItem>
                          <SubHeading>Diagnose (Blut):</SubHeading>
                          <List>
                            {disease.diagnosis.blood.map(
                              (bloodDiagnosis: string, index: number) => (
                                <ListItem key={`blood_${index}`}>
                                  {bloodDiagnosis}
                                </ListItem>
                              )
                            )}
                          </List>
                        </ListItem>
                      </>
                    )}
                    {disease.diagnosis.urine && (
                      <>
                        <ListItem>
                          <SubHeading>Diagnose (Urin):</SubHeading>
                          <List>
                            {disease.diagnosis.urine.map(
                              (urineDiagnosis: string, index: number) => (
                                <ListItem key={`urine_${index}`}>
                                  {urineDiagnosis}
                                </ListItem>
                              )
                            )}
                          </List>
                        </ListItem>
                      </>
                    )}
                  </>
                )}
              </List>
            </ListItem>
          )}
          {disease.treatment && (
            <ListItem>
              <SubHeading>Behandlung:</SubHeading>
              <List>
                {Array.isArray(disease.treatment) ? (
                  disease.treatment.map(
                    (treatmentItem: string, index: number) => (
                      <ListItem key={`treatment_${index}`}>
                        {treatmentItem}
                      </ListItem>
                    )
                  )
                ) : (
                  <>
                    {Object.keys(disease.treatment).map(
                      (key: string, index: number) => (
                        <ListItem key={`treatment_${index}`}>
                          <SubHeading>{key}:</SubHeading>
                          <List>
                            {disease.treatment[key].map(
                              (treatmentItem: string, index: number) => (
                                <ListItem key={`treatment2_${index}`}>
                                  {treatmentItem}
                                </ListItem>
                              )
                            )}
                          </List>
                        </ListItem>
                      )
                    )}
                  </>
                )}
              </List>
            </ListItem>
          )}
          {disease.complications && disease.complications.length > 0 && (
            <ListItem>
              <SubHeading>Komplikationen:</SubHeading>
              <List>
                {disease.complications.map(
                  (complication: string, index: number) => (
                    <ListItem key={`complications_${index}`}>
                      {complication}
                    </ListItem>
                  )
                )}
              </List>
            </ListItem>
          )}
          {disease.prognosis && disease.prognosis.length > 0 && (
            <ListItem>
              <SubHeading>Prognose:</SubHeading>
              <List>
                {disease.prognosis.map((prognosis: string, index: number) => (
                  <ListItem key={`prognosis_${index}`}>{prognosis}</ListItem>
                ))}
              </List>
            </ListItem>
          )}
        </HeadingList>
      </DiseaseDetailWrapper>
    </Container>
  );
}

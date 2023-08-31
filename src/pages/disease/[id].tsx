import { useRouter } from "next/router";
import styled from "styled-components";
import { diseases } from "..";

const DiseaseDetailWrapper = styled.div`
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 5px;
`;

interface Disease {
  name: string;
  symptoms: string[];
  diagnosis: string;
}

export default function DiseaseDetail() {
  const router = useRouter();
  const { id } = router.query;
  const disease = diseases.find((disease) => disease.id === id);
  if (!disease) {
    return <p>Loading...</p>;
  }

  return (
    <DiseaseDetailWrapper>
      <h2>{disease.name}</h2>
      <h3>Symptome:</h3>
      <p>{disease.symptoms.join(", ")}</p>
      <h3>Diagnose:</h3>
      <p>{disease.diagnosis}</p>
    </DiseaseDetailWrapper>
  );
}

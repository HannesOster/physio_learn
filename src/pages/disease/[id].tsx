import { useRouter } from "next/router";
import styled from "styled-components";
import { diseases } from "../../lib/data";

const DiseaseDetailWrapper = styled.div`
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 5px;
`;

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
      <h3>Beschreibung:</h3>
      <p>{disease.description}</p>
      <h3>Symptome:</h3>
      <p>{disease.symptoms.join(", ")}</p>
      <h3>Diagnose:</h3>
      <p>{disease.diagnosis}</p>
      <h3>Behandlung:</h3>
      <p>{disease.treatment}</p>
      <h3>Prävention:</h3>
      <p>{disease.prevention}</p>
    </DiseaseDetailWrapper>
  );
}

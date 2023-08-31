import styled from "styled-components";
import Link from "next/link";
import { diseases } from "../../lib/data";

const DiseaseList = styled.ul`
  list-style: none;
  padding: 0;
`;

const DiseaseItem = styled.li`
  margin: 10px 0;
`;

export default function Home() {
  return (
    <DiseaseList>
      {diseases.map((disease) => (
        <DiseaseItem key={disease.id}>
          <Link href={`/disease/${disease.id}`}>{disease.name}</Link>
        </DiseaseItem>
      ))}
    </DiseaseList>
  );
}

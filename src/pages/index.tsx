import styled from "styled-components";
import Link from "next/link";
import { diseases } from "../../lib/data";

const DiseaseList = styled.ul`
  list-style: none;
  padding: 0;
  margin-top: 100px;
  display: grid;
  gap: 10px;
  grid-template-columns: 1fr 1fr 1fr 1fr;
`;

const DiseaseItem = styled.li`
  margin: 10px 0;
  background-color: skyblue;
  text-align: center;
  padding: 20px;
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

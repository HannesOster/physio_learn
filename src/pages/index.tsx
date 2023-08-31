import styled from "styled-components";
import Link from "next/link";
import { diseases } from "../lib/data";

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  background-color: #f0f0f0;
`;

const DiseaseList = styled.ul`
  list-style: none;
  padding: 0;
  display: grid;
  gap: 30px;
  grid-template-columns: 1fr;

  @media (min-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (min-width: 1200px) {
    grid-template-columns: repeat(4, 1fr);
  }
`;
const DiseaseLink = styled(Link)`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 20px;
  background-color: #ffffff;
  border: 1px solid #ccc;
  border-radius: 8px;
  text-align: center;
  text-decoration: none;
  color: #333333;
  font-weight: bold;
  transition: background-color 0.2s ease-in-out;

  &:hover {
    background-color: #f0f0f0;
  }
`;

export default function Home() {
  return (
    <Container>
      <DiseaseList>
        {diseases.map((disease) => (
          <li key={disease.id}>
            <DiseaseLink href={`/disease/${disease.id}`}>
              {disease.name}
            </DiseaseLink>
          </li>
        ))}
      </DiseaseList>
    </Container>
  );
}

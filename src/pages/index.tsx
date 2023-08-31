import styled from "styled-components";
import Link from "next/link";

const DiseaseList = styled.ul`
  list-style: none;
  padding: 0;
`;

const DiseaseItem = styled.li`
  margin: 10px 0;
`;

interface Disease {
  id: string;
  name: string;
  symptoms: string[];
  diagnosis: string;
}

export const diseases: Disease[] = [
  {
    name: "Bandscheibenvorfall",
    id: "1",
    symptoms: [
      "Rückenschmerzen",
      "Taubheitsgefühl",
      "Kribbeln",
      "Muskelschwäche im betroffenen Bereich",
    ],
    diagnosis: "Klinische Untersuchung, bildgebende Verfahren wie MRT oder CT",
  },
  {
    name: "Rheumatoide Arthritis",
    id: "2",
    symptoms: [
      "Gelenkschmerzen",
      "Schwellungen",
      "Morgensteifigkeit",
      "Ermüdung",
    ],
    diagnosis:
      "Blutuntersuchungen (Rheumafaktor, Antikörper), klinische Untersuchung, bildgebende Verfahren",
  },
  {
    name: "Schlaganfall (Hemiparese)",
    id: "3",
    symptoms: ["Einseitige Lähmungen", "Sprach- und Koordinationsprobleme"],
    diagnosis: "Bildgebende Verfahren wie CT oder MRT",
  },
  {
    name: "Frakturen (Knochenbrüche)",
    id: "4",
    symptoms: [
      "Schmerzen",
      "Schwellungen",
      "Deformität im betroffenen Bereich",
    ],
    diagnosis: "Röntgenaufnahmen, manchmal CT oder MRT",
  },
  {
    name: "Asthma",
    id: "5",
    symptoms: ["Atemnot", "Husten", "Keuchen"],
    diagnosis: "Lungenfunktionstests (Spirometrie), klinische Bewertung",
  },
  {
    name: "Herzinfarkt",
    id: "6",
    symptoms: ["Brustschmerzen", "Atemnot", "Schweißausbrüche"],
    diagnosis: "EKG, Blutuntersuchungen",
  },
  {
    name: "Zerebralparese",
    id: "7",
    symptoms: ["Bewegungs- und Koordinationsprobleme", "Muskelsteifheit"],
    diagnosis: "Klinische Untersuchung, Bildgebung",
  },
  {
    name: "Osteoporose",
    id: "8",
    symptoms: ["Knochenbrüche", "Rückenschmerzen", "verminderte Körpergröße"],
    diagnosis: "Knochendichtemessung (DXA), klinische Bewertung",
  },
];
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

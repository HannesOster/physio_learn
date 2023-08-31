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
  name: string;
  symptoms: string[]; // Hinzugefügt
  diagnosis: string; // Hinzugefügt
}

const diseases: Disease[] = [
  {
    name: "Bandscheibenvorfall",
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
    symptoms: ["Einseitige Lähmungen", "Sprach- und Koordinationsprobleme"],
    diagnosis: "Bildgebende Verfahren wie CT oder MRT",
  },
  {
    name: "Frakturen (Knochenbrüche)",
    symptoms: [
      "Schmerzen",
      "Schwellungen",
      "Deformität im betroffenen Bereich",
    ],
    diagnosis: "Röntgenaufnahmen, manchmal CT oder MRT",
  },
  {
    name: "Asthma",
    symptoms: ["Atemnot", "Husten", "Keuchen"],
    diagnosis: "Lungenfunktionstests (Spirometrie), klinische Bewertung",
  },
  {
    name: "Herzinfarkt",
    symptoms: ["Brustschmerzen", "Atemnot", "Schweißausbrüche"],
    diagnosis: "EKG, Blutuntersuchungen",
  },
  {
    name: "Zerebralparese",
    symptoms: ["Bewegungs- und Koordinationsprobleme", "Muskelsteifheit"],
    diagnosis: "Klinische Untersuchung, Bildgebung",
  },
  {
    name: "Osteoporose",
    symptoms: ["Knochenbrüche", "Rückenschmerzen", "verminderte Körpergröße"],
    diagnosis: "Knochendichtemessung (DXA), klinische Bewertung",
  },
];
export default function Home() {
  return (
    <DiseaseList>
      {diseases.map((disease, index) => (
        <DiseaseItem key={index}>
          <Link href={`/disease/${index}`}>{disease.name}</Link>
        </DiseaseItem>
      ))}
    </DiseaseList>
  );
}

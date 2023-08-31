interface Disease {
  id: string;
  name: string;
  symptoms: string[];
  diagnosis: string;
  description: string;
  treatment: string;
  prevention: string;
}

export const diseases: Disease[] = [
  {
    id: "1",
    name: "Bandscheibenvorfall",
    description:
      "Ein Bandscheibenvorfall tritt auf, wenn der weiche Kern einer Bandscheibe durch den äußeren Faserring tritt.",
    symptoms: [
      "Rückenschmerzen",
      "Taubheitsgefühl",
      "Kribbeln",
      "Muskelschwäche im betroffenen Bereich",
    ],
    diagnosis: "Klinische Untersuchung, bildgebende Verfahren wie MRT oder CT",
    treatment:
      "Physiotherapie, Schmerzmanagement, manuelle Therapie, in schweren Fällen chirurgischer Eingriff",
    prevention:
      "Rückenschonende Haltung, regelmäßige Bewegung, gezieltes Kräftigungstraining",
  },
  {
    id: "2",
    name: "Rheumatoide Arthritis",
    description:
      "Rheumatoide Arthritis ist eine entzündliche Gelenkerkrankung, die zu Schmerzen, Schwellungen und Bewegungseinschränkungen führt.",
    symptoms: [
      "Gelenkschmerzen",
      "Schwellungen",
      "Morgensteifigkeit",
      "Ermüdung",
    ],
    diagnosis:
      "Blutuntersuchungen (Rheumafaktor, Antikörper), klinische Untersuchung, bildgebende Verfahren",
    treatment:
      "Medikamente, Physiotherapie, Ergotherapie, Bewegungstherapie, Patientenaufklärung",
    prevention:
      "Keine spezifische Prävention, aber gesunder Lebensstil kann helfen",
  },
  {
    id: "3",
    name: "Schlaganfall (Hemiparese)",
    description:
      "Ein Schlaganfall tritt auf, wenn die Blutversorgung zum Gehirn unterbrochen wird und neurologische Ausfälle verursacht.",
    symptoms: ["Einseitige Lähmungen", "Sprach- und Koordinationsprobleme"],
    diagnosis:
      "Bildgebende Verfahren wie CT oder MRT, klinische Untersuchung, neurologische Tests",
    treatment:
      "Neurophysiotherapie, Sprachtherapie, Medikamente zur Blutverdünnung",
    prevention: "Gesunde Ernährung, Bewegung, Blutdruckkontrolle",
  },
  {
    id: "4",
    name: "Frakturen (Knochenbrüche)",
    description:
      "Frakturen sind Unterbrechungen in der Kontinuität eines Knochens, die durch Verletzungen verursacht werden können.",
    symptoms: [
      "Schmerzen",
      "Schwellungen",
      "Deformität im betroffenen Bereich",
    ],
    diagnosis: "Röntgenaufnahmen, manchmal CT oder MRT, klinische Untersuchung",
    treatment: "Immobilisierung, Gips, Schienen, Physiotherapie, Chirurgie",
    prevention:
      "Sicherheitsvorkehrungen, Knochengesundheit, gesunder Lebensstil",
  },
  {
    id: "5",
    name: "Asthma",
    description:
      "Asthma ist eine chronische Atemwegserkrankung, die zu Atemnot, Husten und Keuchen führt.",
    symptoms: ["Atemnot", "Husten", "Keuchen"],
    diagnosis:
      "Lungenfunktionstests (Spirometrie), klinische Bewertung, Allergietests",
    treatment:
      "Bronchodilatatoren, entzündungshemmende Medikamente, Atemtherapie, Bewegung",
    prevention: "Vermeidung von Auslösern, Atemwegsreinigungstechniken",
  },
  {
    id: "6",
    name: "Herzinfarkt",
    description:
      "Ein Herzinfarkt tritt auf, wenn die Blutversorgung zum Herzmuskel unterbrochen wird und Herzgewebe abstirbt.",
    symptoms: ["Brustschmerzen", "Atemnot", "Schweißausbrüche"],
    diagnosis: "EKG, Blutuntersuchungen, Koronarangiographie",
    treatment:
      "Notfallbehandlung, Medikamente, Herzrehabilitation, Änderungen des Lebensstils",
    prevention:
      "Gesunde Ernährung, körperliche Aktivität, Vermeidung von Risikofaktoren",
  },
  {
    id: "7",
    name: "Zerebralparese",
    description:
      "Zerebralparese ist eine neurologische Störung, die Bewegungs- und Koordinationsprobleme verursacht.",
    symptoms: ["Bewegungs- und Koordinationsprobleme", "Muskelsteifheit"],
    diagnosis: "Klinische Untersuchung, Bildgebung, Entwicklungstests",
    treatment:
      "Physiotherapie, Ergotherapie, Sprachtherapie, Medikamente, chirurgische Eingriffe",
    prevention: "Gesunde Schwangerschaft, Vermeidung von Risikofaktoren",
  },
  {
    id: "8",
    name: "Osteoporose",
    description:
      "Osteoporose ist eine Erkrankung, bei der die Knochen an Dichte verlieren und leicht brechen können.",
    symptoms: ["Knochenbrüche", "Rückenschmerzen", "verminderte Körpergröße"],
    diagnosis:
      "Knochendichtemessung (DXA), klinische Bewertung, Frakturanamnese",
    treatment:
      "Medikamente, Ernährung, Physiotherapie, Sturzprävention, Krafttraining",
    prevention:
      "Knochenaufbau in jungen Jahren, Ernährung, körperliche Aktivität",
  },
  {
    id: "9",
    name: "Multiple Sklerose",
    description:
      "Multiple Sklerose ist eine chronisch entzündliche Erkrankung des Zentralnervensystems.",
    symptoms: [
      "Schwäche, Taubheit oder Kribbeln in den Gliedmaßen",
      "Koordinationsschwierigkeiten",
      "Sehstörungen",
      "Ermüdung",
    ],
    diagnosis:
      "Neurologische Untersuchung, MRT des Gehirns und Rückenmarks, Liquoruntersuchung",
    treatment:
      "Medikamente zur Krankheitsmodifikation, Physiotherapie, Ergotherapie, Rehabilitation",
    prevention:
      "Keine bekannte Prävention, aber gesunder Lebensstil kann helfen",
  },

  {
    id: "10",
    name: "Parkinson-Krankheit",
    description:
      "Parkinson-Krankheit ist eine neurodegenerative Erkrankung, die Bewegungsstörungen und andere Symptome verursacht.",
    symptoms: [
      "Tremor (Zittern)",
      "Steifheit der Muskeln",
      "Langsamkeit der Bewegungen",
      "Gleichgewichtsprobleme",
    ],
    diagnosis:
      "Klinische Untersuchung, Bewertung der Krankheitsgeschichte, Neurologische Tests",
    treatment:
      "Medikamente, Physiotherapie, Ergotherapie, Sprachtherapie, Tiefenhirnstimulation",
    prevention: "Keine bekannte Prävention",
  },
  {
    id: "13",
    name: "Morbus Crohn",
    description:
      "Morbus Crohn ist eine entzündliche Darmerkrankung, die den Verdauungstrakt betrifft.",
    symptoms: ["Bauchschmerzen", "Durchfall", "Gewichtsverlust", "Ermüdung"],
    diagnosis:
      "Endoskopie, Darmbiopsie, Bildgebende Verfahren, Blutuntersuchungen",
    treatment:
      "Medikamente, Ernährungstherapie, Chirurgie (in schweren Fällen)",
    prevention: "Keine bekannte Prävention",
  },

  {
    id: "14",
    name: "Fibromyalgie",
    description:
      "Fibromyalgie ist eine chronische Schmerzstörung, die Muskelschmerzen und Ermüdung verursacht.",
    symptoms: [
      "Weichteilschmerzen",
      "Schlafstörungen",
      "Erschöpfung",
      "Konzentrationsschwierigkeiten",
    ],
    diagnosis: "Ausschlussdiagnose, klinische Untersuchung, Schmerzpunkte",
    treatment:
      "Schmerzmanagement, Physiotherapie, Bewegung, Entspannungstechniken",
    prevention: "Keine bekannte Prävention",
  },
];

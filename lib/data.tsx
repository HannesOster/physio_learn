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
      "Physiotherapie zur Schmerzlinderung, Übungen zur Verbesserung der Wirbelsäulenstabilität, Ergonomieberatung",
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
      "Medikamente, Physiotherapie zur Schmerzlinderung, Gelenkmobilisation, Übungen zur Erhaltung der Beweglichkeit",
    prevention:
      "Keine spezifische Prävention, aber gesunder Lebensstil kann helfen",
  },
  {
    id: "3",
    name: "Schlaganfall (Hemiparese)",
    description:
      "Ein Schlaganfall tritt auf, wenn die Blutzufuhr zum Gehirn gestört wird und Teile des Gehirns geschädigt werden.",
    symptoms: ["Einseitige Lähmungen", "Sprach- und Koordinationsprobleme"],
    diagnosis: "Bildgebende Verfahren wie CT oder MRT",
    treatment:
      "Physiotherapie zur Wiedererlangung der Bewegungsfähigkeit, Gangschulung, Muskelkräftigung",
    prevention:
      "Gesunde Lebensweise, Kontrolle von Risikofaktoren wie Bluthochdruck, Diabetes",
  },
  {
    id: "4",
    name: "Frakturen (Knochenbrüche)",
    description:
      "Knochenbrüche treten auf, wenn die Knochen aufgrund von Verletzungen oder Schwäche brechen oder reißen.",
    symptoms: [
      "Schmerzen",
      "Schwellungen",
      "Deformität im betroffenen Bereich",
    ],
    diagnosis: "Röntgenaufnahmen, manchmal CT oder MRT",
    treatment:
      "Physiotherapie zur Wiederherstellung der Beweglichkeit und Muskelstärke, ggf. Rehabilitation",
    prevention:
      "Sicherheitsvorkehrungen treffen, Sturzprävention, ausreichende Kalzium- und Vitamin-D-Zufuhr",
  },
  {
    id: "5",
    name: "Asthma",
    description:
      "Asthma ist eine chronische Atemwegserkrankung, die zu Atembeschwerden und Entzündungen der Atemwege führt.",
    symptoms: ["Atemnot", "Husten", "Keuchen"],
    diagnosis: "Lungenfunktionstests (Spirometrie), klinische Bewertung",
    treatment:
      "Medikamente, Atemtechniken, körperliches Training zur Verbesserung der Atemmuskelkraft",
    prevention: "Vermeidung von Auslösern, regelmäßige körperliche Aktivität",
  },
  {
    id: "6",
    name: "Herzinfarkt",
    description:
      "Ein Herzinfarkt tritt auf, wenn die Blutversorgung zum Herzmuskel gestört wird, was zu Gewebeschäden führt.",
    symptoms: ["Brustschmerzen", "Atemnot", "Schweißausbrüche"],
    diagnosis: "EKG, Blutuntersuchungen",
    treatment:
      "Medikamente, kardiologische Rehabilitation, körperliches Training zur Verbesserung der Herzgesundheit",
    prevention:
      "Gesunde Ernährung, Bewegung, Kontrolle von Bluthochdruck und Cholesterin",
  },
  {
    id: "7",
    name: "Zerebralparese",
    description:
      "Zerebralparese ist eine dauerhafte Bewegungs- und Haltungsstörung, die auf Gehirnschäden in der frühkindlichen Entwicklung zurückzuführen ist.",
    symptoms: ["Bewegungs- und Koordinationsprobleme", "Muskelsteifheit"],
    diagnosis: "Klinische Untersuchung, Bildgebung",
    treatment:
      "Physiotherapie zur Verbesserung der Mobilität und Muskelfunktion, ggf. Orthesen oder Hilfsmittel",
    prevention:
      "Pränatale Sorgfalt, Vermeidung von Risikofaktoren während der Schwangerschaft",
  },
  {
    id: "8",
    name: "Osteoporose",
    description:
      "Osteoporose ist eine Knochenerkrankung, die zu einer Verringerung der Knochendichte und einem erhöhten Frakturrisiko führt.",
    symptoms: ["Knochenbrüche", "Rückenschmerzen", "verminderte Körpergröße"],
    diagnosis: "Knochendichtemessung (DXA), klinische Bewertung",
    treatment:
      "Medikamente zur Knochenstärkung, Physiotherapie zur Verbesserung der Körperhaltung und Muskelkraft",
    prevention:
      "Kalzium- und Vitamin-D-reiche Ernährung, körperliche Aktivität, Verzicht auf Rauchen und übermäßigen Alkoholkonsum",
  },

  {
    id: "9",
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
  {
    id: "10",
    name: "Skoliose",
    description:
      "Skoliose ist eine seitliche Krümmung der Wirbelsäule, die zu Fehlstellungen und Einschränkungen führen kann.",
    symptoms: [
      "Veränderung der Körperhaltung",
      "Asymmetrie der Schultern oder Hüften",
      "Rückenschmerzen",
    ],
    diagnosis: "Klinische Untersuchung, Röntgenaufnahmen",
    treatment:
      "Physiotherapie zur Verbesserung der Wirbelsäulenhaltung, Übungen zur Kräftigung der Rückenmuskulatur, ggf. Korsetttherapie",
    prevention:
      "Frühe Erkennung, regelmäßige Untersuchungen während des Wachstums",
  },
  {
    id: "11",
    name: "Skoliose",
    description:
      "Skoliose ist eine seitliche Krümmung der Wirbelsäule, die zu Fehlstellungen und Einschränkungen führen kann.",
    symptoms: [
      "Veränderung der Körperhaltung",
      "Asymmetrie der Schultern oder Hüften",
      "Rückenschmerzen",
    ],
    diagnosis: "Klinische Untersuchung, Röntgenaufnahmen",
    treatment:
      "Physiotherapie zur Verbesserung der Wirbelsäulenhaltung, Übungen zur Kräftigung der Rückenmuskulatur, ggf. Korsetttherapie",
    prevention:
      "Frühe Erkennung, regelmäßige Untersuchungen während des Wachstums",
  },
  {
    id: "12",
    name: "Parkinson-Krankheit",
    description:
      "Parkinson-Krankheit ist eine neurologische Erkrankung, die Bewegungsprobleme und andere Symptome verursacht.",
    symptoms: [
      "Tremor",
      "Steifheit der Muskulatur",
      "Langsamkeit der Bewegungen",
    ],
    diagnosis:
      "Klinische Untersuchung, Ausschluss anderer Erkrankungen, Bewertung von Symptomen",
    treatment:
      "Physiotherapie zur Verbesserung der Bewegungskontrolle, Gangtraining, Übungen zur Stärkung der Muskulatur",
    prevention: "Keine bekannte Prävention",
  },
];

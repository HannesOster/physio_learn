export interface Manifestation {
  name: string;
  details: string[];
}

export interface SymptomDetails {
  mainSymptom: string;
  radiation: string;
  accompanyingSymptoms: string[];
}

export interface Diagnosis {
  blood?: string[];
  urine?: string[];
}

export interface Treatment {
  [key: string]: string[];
}
export interface TreatmentDetails {
  [key: string]: string[];
}

export interface Disease {
  id: string;
  name: string;
  definition?: string;
  classification?: string;
  manifestations?: Manifestation[];
  symptoms: string[] | SymptomDetails;
  diagnosis: string[] | Diagnosis;
  treatment: string[] | any;
  complications?: string[];
  prognosis?: string[];
  causes?: string[];
  stages?: { [key: string]: any };
  stoneTypes?: string[];
  riskFactors?: string[];
}
export const diseases: Disease[] = [
  {
    id: "1",
    name: "Glomerulonephritis",
    definition:
      "Nicht-bakterielle, akute, entzündliche Veränderungen in den Glomeruli",
    classification: "Post-infektiöse GN, IgA-Nephropathie, RPGN",
    manifestations: [
      {
        name: "Poststreptokokken-GN",
        details: [
          "Manifestation: In der Regel 2 Wochen nach Infektion mit ß-hämolysierenden Streptokokken der Gruppe A",
          "Ablagerung von Antigen-Antikörper-Immunkomplexen: Entzündliche Reaktion in den Glomeruli, starke Verengung der Kapillaren",
          "Krankheitshöhepunkt: 6 - 10 Jahre",
        ],
      },
    ],
    symptoms: [
      "Kopf- und Gliederschmerzen",
      "Mögliche Schwellungen",
      "Spezifische Lidödeme",
      "Bluthochdruck",
      "Hämaturie",
      "Mögliche lumbale Rückenschmerzen",
    ],
    diagnosis: [
      "Proteinurie < 3 g/dl",
      "Leichte Erhöhung der Retentionswerte",
      "Erhöhter ASL-Titer in 50% der Fälle",
      "Leichte Anämie",
      "Leicht erhöhter BSG-Wert",
    ],
    treatment: [
      "Bettruhe",
      "Gewichts- und Laborkontrollen",
      "Penicillin",
      "Bei Chronizität Cortison",
      "Natriumarme Diät",
      "Diuretika",
    ],
    complications: ["Lungenödem", "Hirnödem mit Krampfanfällen"],
    prognosis: [
      "In den meisten Fällen bis zu 90% Genesung",
      "Bei Erwachsenen bis zu 50% Übergang, möglicherweise zu RPGN",
    ],
    causes: ["Unbekannt"],
    stages: {},
    stoneTypes: [],
    riskFactors: [],
  },
  {
    id: "2",
    name: "Nephrotisches Syndrom",
    definition:
      "Kann bei jeder Nierenerkrankung auftreten, bei denen die Glomeruli betroffen sind",
    causes: [
      "GN",
      "Diabetische Nephropathie",
      "Nierenvenenthrombose",
      "Systemerkrankungen",
      "SLE",
      "Vaskulitiden",
    ],
    symptoms: ["Ödeme"],
    diagnosis: {
      blood: ["Hyperlipoproteinämie", "Hypoproteinämie"],
      urine: ["Proteinurie"],
    },
    treatment: [
      "Behandlung der Grunderkrankung",
      "Körperliche Schonung",
      "Kochsalzarme Ernährung, sowie Wasserreduktion",
      "Vorsichtige Diurese",
      "Ggf. niedrig dosiertes Heparin",
      "Thromboseprophylaxe",
      "RR Kontrollen",
      "Hypercholesterinämie Behandlung",
    ],
    manifestations: [],
    complications: [],
    prognosis: [],
    stages: {},
    stoneTypes: [],
    riskFactors: [],
  },
  {
    id: "3",
    name: "Analgetika Nephropathie (abakterielle interstitielle Nephritis)",
    definition: "Auslöser sind hauptsächlich Analgetika",
    causes: [
      "Auslöser sind hauptsächlich Analgetika",
      "Kombinationen aus ASS, Paracetamol und Coffein",
    ],
    symptoms: ["Anfangs keine Beschwerden", "Später Flankenschmerz"],
    diagnosis: {
      urine: ["Hämaturie"],
      blood: ["Abakterielle Leukozyturie"],
    },
    complications: ["Chronische Niereninsuffizienz"],
    treatment: [
      "Absetzen der Noxen",
      "Früherkennung zur Vermeidung einer chronischen Niereninsuffizienz",
    ],
    manifestations: [],
    prognosis: [],
    stages: {},
    stoneTypes: [],
    riskFactors: [],
  },
  {
    id: "4",
    name: "Uro-, bzw. Nephrolithiasis",
    definition:
      "Ausbildung von Nierensteinen 'Steinleiden'. Männer häufiger betroffen als Frauen.",
    stoneTypes: [
      "Kalziumoxalat- oder Kalziumphosphat-Steine (80%)",
      "Uratsteine (20%)",
    ],
    causes: [
      "Entstehen durch Auskristallisieren von Salzen",
      "Diese liegen in zu hoher Konzentration im Harn vor",
    ],
    symptoms: {
      mainSymptom:
        "Nieren- bzw. Harnleiterkolik - Heftigster an- und abschwellender Schmerz",
      radiation:
        "Ausstrahlung in den Rücken, den Unterbauch, bis in den Genitalbereich",
      accompanyingSymptoms: [
        "Übelkeit",
        "Brechreiz",
        "Reflektorisch fehlender Wind- und Stuhlabgang",
        "Hämaturie, ggf. sogar Makrohämaturie",
      ],
    },
    complications: ["Infektionen", "Harnstau"],
    diagnosis: ["Ultraschall"],
    treatment: [
      "Ursachenforschung",
      "Flüssigkeitszufuhr",
      "Bewegung",
      "Medikamente",
      "Spasmolytika",
      "Analgetika",
      "Litholyse",
      "Stoßwellenlithotripsie",
    ],
    manifestations: [],
    prognosis: [],
    stages: {},
    riskFactors: [],
  },
  {
    id: "6",
    name: "Wilms Tumor (Nephroblastom)",
    definition: "Maligner Tumor von Kleinkindern. Meist im 3. - 4. Lebensjahr.",
    causes: ["Unbekannt", "Genetische Disposition"],
    symptoms: [
      "Schnelles Wachstum",
      "Abdomineller Tumor",
      "Bauchschmerzen",
      "Hämaturie",
      "Gewichtsverlust",
    ],
    diagnosis: ["Urin", "Blut"],
    treatment: [
      "Radikale OP (Operation)",
      "Chemo und Radiatio (Chemotherapie und Strahlentherapie)",
    ],
    prognosis: ["5-Jahres-Überlebensrate ca. 90%"],
    manifestations: [],
    complications: [],
    stages: {},
    stoneTypes: [],
    riskFactors: [],
  },
  {
    id: "7",
    name: "Grawitz Tumor (Hypernephrom, Nierenzellkarzinom)",
    definition:
      "Maligner Tumor der Erwachsenen. Männer sind hierbei häufiger betroffen als Frauen (2:1). Sehr frühes Wachstum in das umliegende Gewebe, schnelle Metastasierung in Lunge, Leber, Knochen und Gehirn.",
    symptoms: [
      "Keine Frühsymptome",
      "Plötzlich auftretende schmerzlose Blutung beim Urinieren",
      "Hämaturie",
      "Unklares Fieber",
      "Flankenschmerzen",
    ],
    diagnosis: ["Zufallsbefund"],
    treatment: ["Radikale, operative Entfernung des Tumors"],
    prognosis: ["5-Jahres-Überlebensrate zwischen 5 und 70%"],
  },
  {
    id: "8",
    name: "Akute Pyelonephritis",
    definition:
      "Akute, bakterielle Entzündung des Nierenbeckens, meist mit Beteiligung des Nierenparenchyms. Frauen sind 3-mal häufiger betroffen.",
    causes: [
      "S. Zystitis",
      "Am häufigsten in der Schwangerschaft und bei Nierensteinleiden",
    ],
    symptoms: [
      "Flankenschmerz",
      "Klopfschmerz im Nierenlager (meist einseitig)",
      "Fieber (in schweren Fällen Schüttelfrost)",
    ],
    diagnosis: [
      "Urinstatus wie bei Zystitis",
      "Blutbild (BB)",
      "Leukozytose",
      "Erhöhte BSG (Blutsenkungsgeschwindigkeit)",
      "Sonographie zur Ursachenfindung",
    ],
    treatment: [
      "Antibiose",
      "Analgesie (Schmerzlinderung)",
      "Fiebersenkung",
      "Beseitigung der Abflussstörung",
    ],
  },
  {
    id: "10",
    name: "Akute Zystitis",
    definition:
      "Akute, bakterielle Entzündung der Harnblase. Aufsteigende Keime entlang der Harnröhre, besonders E. coli. Häufig im Kindesalter, bei sexuell aktiven Frauen und Männern im höheren Alter.",
    causes: [
      "Honeymoon",
      "Schwangerschaft",
      "Abflusshindernisse",
      "Durchnässung, Verkühlung",
      "Blasenkatheter",
    ],
    symptoms: ["Pollakisurie", "Dysurie", "Kein Fieber, kein Flankenschmerz"],
    diagnosis: [
      "Urinstatus",
      "Leukozyten",
      "Erythrozyten",
      "Bakteriurie (>100.000 Keime/ml)",
    ],
    treatment: ["Antibiose", "Wärme", "Vermehrtes Trinken"],
    prognosis: [
      "Eine akute Zystitis heilt in der Regel nach wenigen Tagen folgenlos aus.",
    ],
    complications: ["Aufsteigende Infektion"],
  },
];

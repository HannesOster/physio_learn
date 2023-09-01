import { Manifestation, Disease } from "@/lib/data";
import { List, ListItem, Paragraph, SubHeading } from "@/pages/disease/[id]";

interface ClassificationProps {
  disease: Disease;
}

export default function Symptoms({ disease }: ClassificationProps) {
  return (
    <>
      {disease.symptoms && (
        <ListItem>
          <SubHeading>Symptome:</SubHeading>
          <List>
            {Array.isArray(disease.symptoms) ? (
              disease.symptoms.map((symptom: string, index: number) => (
                <ListItem key={`symptoms_${index}`}>{symptom}</ListItem>
              ))
            ) : (
              <>
                <ListItem>
                  Haupt-Symptom: {disease.symptoms.mainSymptom}
                </ListItem>
                <ListItem>Ausstrahlung: {disease.symptoms.radiation}</ListItem>
                {disease.symptoms.accompanyingSymptoms &&
                  disease.symptoms.accompanyingSymptoms.length > 0 && (
                    <>
                      {" "}
                      <SubHeading>Begleitsymptome:</SubHeading>
                      <List>
                        {disease.symptoms.accompanyingSymptoms.map(
                          (accompanyingSymptom: string, index: number) => (
                            <ListItem key={`symptoms2_${index}`}>
                              {accompanyingSymptom}
                            </ListItem>
                          )
                        )}
                      </List>
                    </>
                  )}
              </>
            )}
          </List>
        </ListItem>
      )}
    </>
  );
}

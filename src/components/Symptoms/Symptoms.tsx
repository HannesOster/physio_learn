import { Disease } from "@/lib/data";
import { List, ListItem, SubHeading } from "@/pages/disease/[id]";

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
                <ListItem key={`symptoms_${index}`}>
                  {symptom}
                  <input type="checkbox" />
                </ListItem>
              ))
            ) : (
              <>
                <ListItem>
                  Haupt-Symptom: {disease.symptoms.mainSymptom}
                  <input type="checkbox" />
                </ListItem>
                <ListItem>
                  Ausstrahlung: {disease.symptoms.radiation}
                  <input type="checkbox" />
                </ListItem>
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
                              <input type="checkbox" />
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

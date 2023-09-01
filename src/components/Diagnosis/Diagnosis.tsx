import { Disease } from "@/lib/data";
import { List, ListItem, SubHeading } from "@/pages/disease/[id]";

interface ClassificationProps {
  disease: Disease;
}

export default function Diagnosis({ disease }: ClassificationProps) {
  return (
    <>
      {disease.diagnosis && (
        <ListItem>
          <SubHeading>Diagnose:</SubHeading>
          <List>
            {Array.isArray(disease.diagnosis) ? (
              disease.diagnosis.map((diagnosisItem: string, index: number) => (
                <ListItem key={`diagnosis_${index}`}>
                  <label>
                    {diagnosisItem}
                    <input type="checkbox" />
                  </label>
                </ListItem>
              ))
            ) : (
              <>
                {disease.diagnosis.blood && (
                  <>
                    <ListItem>
                      <SubHeading>Blut:</SubHeading>
                      <List>
                        {disease.diagnosis.blood.map(
                          (bloodDiagnosis: string, index: number) => (
                            <ListItem key={`blood_${index}`}>
                              <label>
                                {bloodDiagnosis}
                                <input type="checkbox" />
                              </label>
                            </ListItem>
                          )
                        )}
                      </List>
                    </ListItem>
                  </>
                )}
                {disease.diagnosis.urine && (
                  <>
                    <ListItem>
                      <SubHeading>Urin:</SubHeading>
                      <List>
                        {disease.diagnosis.urine.map(
                          (urineDiagnosis: string, index: number) => (
                            <ListItem key={`urine_${index}`}>
                              <label>
                                {urineDiagnosis}
                                <input type="checkbox" />
                              </label>
                            </ListItem>
                          )
                        )}
                      </List>
                    </ListItem>
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

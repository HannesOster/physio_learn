import { Manifestation, Disease } from "@/lib/data";
import { List, ListItem, Paragraph, SubHeading } from "@/pages/disease/[id]";

interface ClassificationProps {
  disease: Disease;
}

export default function Treatment({ disease }: ClassificationProps) {
  return (
    <>
      {disease.treatment && (
        <ListItem>
          <SubHeading>Behandlung:</SubHeading>
          <List>
            {Array.isArray(disease.treatment) ? (
              disease.treatment.map((treatmentItem: string, index: number) => (
                <ListItem key={`treatment_${index}`}>
                  {treatmentItem}
                  <input type="checkbox" />
                </ListItem>
              ))
            ) : (
              <>
                {Object.keys(disease.treatment).map(
                  (key: string, index: number) => (
                    <ListItem key={`treatment_${index}`}>
                      <SubHeading>{key}:</SubHeading>
                      <List>
                        {disease.treatment[key].map(
                          (treatmentItem: string, index: number) => (
                            <ListItem key={`treatment2_${index}`}>
                              {treatmentItem}
                              <input type="checkbox" />
                            </ListItem>
                          )
                        )}
                      </List>
                    </ListItem>
                  )
                )}
              </>
            )}
          </List>
        </ListItem>
      )}
    </>
  );
}

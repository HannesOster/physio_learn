import { Manifestation, Disease } from "@/lib/data";
import { List, ListItem, Paragraph, SubHeading } from "@/pages/disease/[id]";

interface ClassificationProps {
  disease: Disease;
}

export default function Classification({ disease }: ClassificationProps) {
  return (
    <>
      {disease.classification && (
        <ListItem>
          <SubHeading>Klassifikation:</SubHeading>
          <Paragraph>{disease.classification}</Paragraph>
        </ListItem>
      )}
      {disease.manifestations && disease.manifestations.length > 0 && (
        <ListItem>
          <SubHeading>Manifestationen:</SubHeading>
          <List>
            {disease.manifestations.map(
              (manifestation: Manifestation, index: number) => (
                <ListItem key={`manifestation_${index}`}>
                  <SubHeading>{manifestation.name}</SubHeading>
                  <List>
                    {manifestation.details.map(
                      (detail: string, index: number) => (
                        <ListItem key={`manifestation-details_${index}`}>
                          {detail}
                        </ListItem>
                      )
                    )}
                  </List>
                </ListItem>
              )
            )}
          </List>
        </ListItem>
      )}
    </>
  );
}

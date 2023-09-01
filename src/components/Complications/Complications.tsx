import { Disease } from "@/lib/data";
import { List, ListItem, SubHeading } from "@/pages/disease/[id]";

interface ClassificationProps {
  disease: Disease;
}

export default function Complications({ disease }: ClassificationProps) {
  return (
    <>
      {disease.complications && disease.complications.length > 0 && (
        <ListItem>
          <SubHeading>Komplikationen:</SubHeading>
          <List>
            {disease.complications.map(
              (complication: string, index: number) => (
                <ListItem key={`complications_${index}`}>
                  {complication}
                  <input type="checkbox" />
                </ListItem>
              )
            )}
          </List>
        </ListItem>
      )}
    </>
  );
}

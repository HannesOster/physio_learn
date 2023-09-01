import { Disease } from "@/lib/data";
import { List, ListItem, SubHeading } from "@/pages/disease/[id]";

interface ClassificationProps {
  disease: Disease;
}

export default function Prognosis({ disease }: ClassificationProps) {
  return (
    <>
      {disease.prognosis && disease.prognosis.length > 0 && (
        <ListItem>
          <SubHeading>Prognose:</SubHeading>
          <List>
            {disease.prognosis.map((prognosis: string, index: number) => (
              <ListItem key={`prognosis_${index}`}>{prognosis}</ListItem>
            ))}
          </List>
        </ListItem>
      )}
    </>
  );
}

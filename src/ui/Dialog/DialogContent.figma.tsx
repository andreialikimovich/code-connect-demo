import { DialogContent } from "./DialogContent";
import figma from "@figma/code-connect";

figma.connect(
  DialogContent,
  "https://www.figma.com/file/YNd9Z3MuX8r9PrjNDmXboP?node-id=9215-9333",
  {
    props: {
      headline: figma.string("Headline"),
      content: figma.string("Content"),
    },
    example: ({ headline, content }) => (
      <DialogContent
        headline={<h2>{headline}</h2>}
        content={<p>{content}</p>}
      />
    ),
  }
);

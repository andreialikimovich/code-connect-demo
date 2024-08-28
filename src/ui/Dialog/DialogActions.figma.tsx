import { DialogActions } from "./DialogActions";
import figma from "@figma/code-connect";

figma.connect(
  DialogActions,
  "https://www.figma.com/file/YNd9Z3MuX8r9PrjNDmXboP?node-id=9215-9330",
  {
    props: { children: figma.children(["Button"]) },
    example: (props) => <DialogActions>{props.children}</DialogActions>,
  }
);

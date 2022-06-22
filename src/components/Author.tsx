import { Typography } from "@mui/material";
import { AuthorContent } from "../lib/authors";

type Props = {
  author: AuthorContent;
};
export default function Author({ author }: Props) {
  return (
    <Typography variant="body2" color="text.secondary">
      {author.name}
    </Typography>
  );
}

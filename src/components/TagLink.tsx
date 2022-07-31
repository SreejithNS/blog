import { Chip } from "@mui/material";
import Link from "next/link";
import { TagContent } from "../lib/tags";

type Props = {
  tag: TagContent;
};
export default function Tag({ tag }: Props) {
  return (
    <Link href={"/posts/tags/[[...slug]]"} as={`/posts/tags/${tag.slug}`}>
      <Chip sx={{ mr: 2 }} label={tag.name} />
    </Link>
  );
}

import Link from "next/link";
import { TagContent } from "../lib/tags";
import Tag from "./TagLink";

type Props = {
  tag: TagContent;
};
export default function TagButton({ tag }: Props) {
  return (
    <Tag tag={tag} />
  );
}

import { PostContent } from "../lib/posts";
import Date from "./Date";
import Link from "next/link";
import { parseISO } from "date-fns";
import { Box, Typography } from "@mui/material";

type Props = {
  post: PostContent;
};
export default function PostItem({ post }: Props) {
  return (
    <Link href={`/posts/${post.slug}`}>
      <Box component="a" sx={{
        textDecoration: "none",
        color: "text.primary",
        "&:active": {
          textDecoration: "none",
          textDecorationColor: "primary.main",
        },
        "&:hover": {
          textDecoration: "underline",
          textUnderlineOffset: 2,
          textDecorationStyle: "dashed",
          textDecorationColor: "primary.main",
        },
      }} href={"/posts/" + post.slug}>
        <Date date={parseISO(post.date)} />
        <Typography variant="h3" component="h2">
          {post.title}
        </Typography>
      </Box>
    </Link>
  );
}

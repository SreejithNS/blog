import React from "react";
import { PostContent } from "../lib/posts";
import PostItem from "./PostItem";
import TagLink from "./TagLink";
import Pagination from "./Pagination";
import { TagContent } from "../lib/tags";
import { Box, Container, Typography } from "@mui/material";
import { HeaderBar } from "./HeaderBar/HeaderBar";

type Props = {
  posts: PostContent[];
  tags: TagContent[];
  pagination: {
    current: number;
    pages: number;
  };
};
export default function PostList({ posts, tags, pagination }: Props) {
  return (
    <nav>
      <Container maxWidth="md">
        <HeaderBar />
        <div className={"posts"}>
          <Box component="ul" sx={{
            listStyle: "none",
            paddingInlineStart: 0,
          }}>
            {posts.map((it, i) => (
              <Box component="li" sx={{
                mb: 3,
              }} key={i}>
                <PostItem post={it} />
              </Box>
            ))}
          </Box>
          <Pagination
            current={pagination.current}
            pages={pagination.pages}
            link={{
              href: (page) => (page === 1 ? "/posts" : "/posts/page/[page]"),
              as: (page) => (page === 1 ? null : "/posts/page/" + page),
            }}
          />
        </div>
        <Box component="ul" sx={theme => ({
          listStyle: "none",
          padding: 0,
          position: "fixed",
          right: 0,
          top: 2,
          "& > li": {
            m: 1,
            textTransform: "capitalize",
          },
          [theme.breakpoints.down("lg")]: {
            position: "relative",
            listStyle: "inside",
            textAlign: "center",
            "& > li": {
              m: 0,
              my: 1,
              p: 0,
              mr: 1,
              display: "inline-block",
            },
            "& > span": {
              mr: 2,
            }
          }
        })}>
          <Typography variant="h6" component="span">Tags</Typography>
          {tags.map((it, i) => (
            <li key={i}>
              <TagLink tag={it} />
            </li>
          ))}
        </Box>
      </Container>
    </nav>
  );
}

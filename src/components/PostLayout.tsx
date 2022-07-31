import React from "react";
import styles from "../../public/styles/content.module.css";
import Author from "./Author";
import Copyright from "./Copyright";
import Date from "./Date";
import Layout from "./Layout";
import BasicMeta from "./meta/BasicMeta";
import JsonLdMeta from "./meta/JsonLdMeta";
import OpenGraphMeta from "./meta/OpenGraphMeta";
import TwitterCardMeta from "./meta/TwitterCardMeta";
import { SocialList } from "./SocialList";
import TagButton from "./TagButton";
import { getAuthor } from "../lib/authors";
import { getTag } from "../lib/tags";
import { Box, Typography, Container } from "@mui/material";
import { HeaderBar } from "./HeaderBar/HeaderBar";

type Props = {
  title: string;
  date: Date;
  slug: string;
  tags: string[];
  author: string;
  description?: string;
  children: React.ReactNode;
};
export default function PostLayout({
  title,
  date,
  slug,
  author,
  tags,
  description = "",
  children,
}: Props) {
  const keywords = tags.map(it => getTag(it).name);
  const authorName = getAuthor(author).name;
  return (
    <Layout>
      <BasicMeta
        url={`/posts/${slug}`}
        title={title}
        keywords={keywords}
        description={description}
      />
      <TwitterCardMeta
        url={`/posts/${slug}`}
        title={title}
        description={description}
      />
      <OpenGraphMeta
        url={`/posts/${slug}`}
        title={title}
        description={description}
      />
      <JsonLdMeta
        url={`/posts/${slug}`}
        title={title}
        keywords={keywords}
        date={date}
        author={authorName}
        description={description}
      />
      <article>
        <Container maxWidth="md">
          <HeaderBar />
          <Box component="header" sx={{ mt: 5 }}>
            <Typography variant="h1" component="h1">{title}</Typography>
            <Box>
              <Author author={getAuthor(author)} /> &middot; <Date date={date} />
            </Box>
          </Box>
          <div className={styles.content}>{children}</div>
          <Box my={2} mt={5} component="div">
            <Typography variant="subtitle1" color="text.secondary" mb={2} component="p">
              Read more on following topics:
            </Typography>
            {tags.map((it, i) => (
              <TagButton key={i} tag={getTag(it)} />
            ))}
          </Box>
        </Container>
      </article>
      <footer>
        <Box component="div" sx={{ textAlign: "center" }}>
          <SocialList />
        </Box>
        <Copyright />
      </footer>
    </Layout>
  );
}

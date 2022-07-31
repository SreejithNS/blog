import { GetStaticProps, GetStaticPaths } from "next";
import renderToString from "next-mdx-remote/render-to-string";
import { MdxRemote } from "next-mdx-remote/types";
import hydrate from "next-mdx-remote/hydrate";
import matter from "gray-matter";
import { fetchPostContent } from "../../lib/posts";
import fs from "fs";
import yaml from "js-yaml";
import { parseISO } from 'date-fns';
import PostLayout from "../../components/PostLayout";
import InstagramEmbed from "react-instagram-embed";
import YouTube from "react-youtube";
import { TwitterTweetEmbed } from "react-twitter-embed";
import { Box, Divider, Link, Typography, useTheme } from "@mui/material";
import Image from "next/image";
import Highlight from 'react-highlight'
import Head from "next/head";
import imageSize from "rehype-img-size";

export type Props = {
  title: string;
  dateString: string;
  slug: string;
  tags: string[];
  author: string;
  description?: string;
  source: MdxRemote.Source;
};

const components: MdxRemote.Components = {
  InstagramEmbed: (props: any) => <InstagramEmbed {...props} clientAccessToken="418529560186989|6c2b6c40215b2c7a22a08dff19487710" containerTagName="span" />,
  YouTube,
  TwitterTweetEmbed,
  a: (props) => {
    return <Link {...props} sx={theme => ({
      color: theme.palette.secondary.main,
      textDecorationColor: theme.palette.secondary.main,
      "&:hover,&:active": {
        textDecoration: "none",
      }
    })} />
  },
  b: (props) => {
    return <strong {...props} style={{ fontWeight: 800 }}>{props.children}</strong>
  },
  p: (props) => {
    return <Typography color="text.primary" component="p" variant="body1" {...props} />
  },
  h1: (props) => {
    return <Typography color="text.primary" component="h1" sx={{ mt: 16 }} variant="h1" {...props} />
  },
  h2: (props) => {
    return <Typography color="text.primary" component="h2" variant="h2" {...props} />
  },
  h3: (props) => {
    return <Typography color="text.primary" component="h3" variant="h3" {...props} />
  },
  h4: (props) => {
    return <Typography color="text.primary" component="h4" variant="h4" {...props} />
  },
  h5: (props) => {
    return <Typography color="text.primary" component="h5" variant="h5" {...props} />
  },
  h6: (props) => {
    return <Typography color="text.primary" component="h6" variant="h6" {...props} />
  },
  hr: (props) => {
    return <Divider sx={{ my: 3 }} />
  },
  img: (props) => <Image layout="responsive" loading="lazy" alt={props.alt} {...props} />,
  code: (props: any) => <Highlight {...props} />
};
const slugToPostContent = (postContents => {
  let hash = {}
  postContents.forEach(it => hash[it.slug] = it)
  return hash;
})(fetchPostContent());

export default function Post({
  title,
  dateString,
  slug,
  tags,
  author,
  description = "",
  source,
}: Props) {
  const content = hydrate(source, { components });
  const theme = useTheme();
  return (
    <PostLayout
      title={title}
      date={parseISO(dateString)}
      slug={slug}
      tags={tags}
      author={author}
      description={description}
    >
      <Head>
        {/* Highlighter JS */}
        <link rel="stylesheet" href="https://highlightjs.org/static/demo/styles/github-dark-dimmed.css" />
      </Head>
      {content}
    </PostLayout>
  )
}

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = fetchPostContent().map(it => "/posts/" + it.slug);
  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const slug = params.post as string;
  const source = fs.readFileSync(slugToPostContent[slug].fullPath, "utf8");
  const { content, data } = matter(source, {
    engines: { yaml: (s) => yaml.load(s, { schema: yaml.JSON_SCHEMA }) as object }
  });
  const mdxSource = await renderToString(content, {
    components, scope: data, mdxOptions: {
      rehypePlugins: [[imageSize, { dir: "public" }]]
    }
  });
  return {
    props: {
      title: data.title,
      dateString: data.date,
      slug: data.slug,
      description: "",
      tags: data.tags,
      author: data.author,
      source: mdxSource
    },
  };
};


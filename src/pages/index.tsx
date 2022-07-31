import { Box, Button, Container, Grid, Typography } from "@mui/material";
import Layout from "../components/Layout";
import BasicMeta from "../components/meta/BasicMeta";
import OpenGraphMeta from "../components/meta/OpenGraphMeta";
import TwitterCardMeta from "../components/meta/TwitterCardMeta";
import { ExpandedSocialList, SocialList } from "../components/SocialList";
import { MainSection } from "../components/Sections";
import ReactTypingEffect from "react-typing-effect";
import Image from "next/image";
import FireFlies from "../components/Backgrounds";
import { Brand } from "../components/HeaderBar/HeaderBar";
import style from "../components/HeaderBar/style.module.sass";

export default function Index() {
  return (
    <Layout>
      <BasicMeta url={"/"} />
      <OpenGraphMeta url={"/"} />
      <TwitterCardMeta url={"/"} />
      <MainSection>
        <FireFlies />
        <Container sx={{ height: 'inherit' }}>
          <Grid container justifyContent="stretch" alignItems="center" sx={{ height: "100%" }}>
            <Grid item xs={12} textAlign="center">
              <Box sx={
                {
                  //p: 0.5,
                  px: 0.3,
                  my: 1,
                  //borderRadius: 8,
                  bgcolor: "secondary.contrastText",
                  color: "secondary.main",
                  display: "inline-block",
                }
              }>
                <Typography fontWeight="bold" variant="subtitle1">FULL STACK DEVELOPER</Typography>
              </Box>
              <Brand className={style["logo-text"]} my={3} fontSize={8*13}>
                Hello I&apos;m Sreejith
                </Brand>
              <Typography fontWeight="normal" color="text.primary" variant="h5">
                <ReactTypingEffect
                  text={["solving real-world problems.","developing solutions.",  "coding for the web."]}
                  speed={50}
                  staticText="I love"
                />
              </Typography>
              <Button sx={{ fontWeight: "bold", mt: 2 }} variant="contained" color="secondary" href="/posts">
                Go to Blog
              </Button>
              <ExpandedSocialList sx={{ mt: 2 }} />
            </Grid>
            {/* <Grid item xs={4}>
              <Image
                alt="illustration"
                width="100%"
                height="100%"
                src="/images/undraw_Code_typing_re_p8b9.png"
              />
            </Grid> */}
          </Grid>
        </Container>
      </MainSection>
      {/* <style jsx>{`
        .container {
          display: flex;
          align-items: center;
          justify-content: center;
          flex: 1 1 auto;
          padding: 0 1.5rem;
        }
        h1 {
          font-size: 2.5rem;
          margin: 0;
          font-weight: 500;
        }
        h2 {
          font-size: 1.75rem;
          font-weight: 400;
          line-height: 1.25;
        }
        .fancy {
          color: #15847d;
        }
        .handle {
          display: inline-block;
          margin-top: 0.275em;
          color: #9b9b9b;
          letter-spacing: 0.05em;
        }

        @media (min-width: 769px) {
          h1 {
            font-size: 3rem;
          }
          h2 {
            font-size: 2.25rem;
          }
        }
      `}</style> */}
    </Layout >
  );
}

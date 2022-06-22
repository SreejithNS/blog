import React from "react";
import config from "../lib/config";
import { ButtonBaseProps, IconButton, IconButtonProps } from "@mui/material";
import TwitterIcon from '@mui/icons-material/Twitter';
import GitHubIcon from '@mui/icons-material/GitHub';

export function SocialList<T>(props: T) {
  return (
    <div>
      <IconButton edge="start" {...props} title="Twitter" href={`https://twitter.com/${config.twitter_account}`} target="_blank" rel="noopener">
        <TwitterIcon />
      </IconButton>
      <IconButton {...props} title="GitHub" href={`https://github.com/${config.github_account}`} target="_blank" rel="noopener">
        <GitHubIcon />
      </IconButton>
    </div>
  );
}

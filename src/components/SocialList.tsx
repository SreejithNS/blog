import React from "react";
import config from "../lib/config";
import { Box, BoxProps, Button, ButtonTypeMap, ExtendButtonBase, IconButton, IconButtonProps, IconButtonTypeMap, IconProps, SvgIconTypeMap } from "@mui/material";
import TwitterIcon from '@mui/icons-material/Twitter';
import GitHubIcon from '@mui/icons-material/GitHub';
import { OverridableComponent } from "@mui/material/OverridableComponent";

const list = [
  {
    title: "Twitter",
    href: `https://twitter.com/${config.twitter_account}`,
    icon: TwitterIcon,
  },
  {
    title: "GitHub",
    href: `https://github.com/${config.github_account}`,
    icon: GitHubIcon,
  }
]

export function SocialList({ iconProps, ...rest }: { iconProps?: Parameters<ExtendButtonBase<IconButtonTypeMap<{}, "a">>>[0] } & BoxProps) {
  return (
    <Box {...rest}>
      {list.map((item, key) => (
        <IconButton key={key} LinkComponent="a" edge={key === 0 ? "start" : undefined} {...iconProps} title={item.title} href={item.href} target="_blank" rel="noopener">
          {<item.icon />}
        </IconButton>
      )
      )}
    </Box>
  );
}

export function ExpandedSocialList({ iconProps, buttonProps, ...rest }: { iconProps?: Parameters<typeof GitHubIcon>[0], buttonProps?: Parameters<ExtendButtonBase<ButtonTypeMap<{}, "a">>>[0] } & BoxProps) {
  return (
    <Box {...rest}>
      {list.map((item, key) => (
        <Button key={key} sx={{ color: "text.primary", mr: 1 }} size="small" LinkComponent="a" startIcon={<item.icon {...iconProps} />} href={item.href} target="_blank" rel="noopener" {...buttonProps}>
          {item.title}
        </Button>
      )
      )}
    </Box>
  );
}
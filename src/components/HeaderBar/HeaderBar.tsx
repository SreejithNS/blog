import { Theme } from "@emotion/react";
import { Box, BoxProps, SxProps } from "@mui/material";
import Link from "next/link";
import { PropsWithChildren } from "react";
import style from "./style.module.sass";

const headerSx: SxProps = (theme) => ({

})

export function Brand({ children, fontSize, ...boxProps }: PropsWithChildren<BoxProps>) {
    return (
        <Box component="div" sx={theme => ({
            fontSize: fontSize ?? theme.typography.pxToRem(8 * 12),
            lineHeight: "normal"
        })} className={style["logo-text"]} {...boxProps}>
            {children}
        </Box>
    )
}

export function HeaderBar() {
    return (
        <Box component="header" sx={headerSx} className={style.headerbar}>
            <Brand>
                sreejithofficial<Box component="span" sx={theme => ({
                    position: "relative",
                    top: -18,
                    fontSize: theme.typography.pxToRem(8 * 5),
                    left: -6,
                    margin: -0.25
                })}>&#8228;</Box>in
            </Brand>
            <Box component="nav" sx={{ textAlign: "center", mb: 3, fontSize: 14 }}>
                <Link href="/" passHref>
                    <Box component="a" sx={{
                        textDecoration: "none",
                        color: "inherit",
                        textTransform: "uppercase",
                        letterSpacing: "0.1em",
                        "&:hover": {
                            color: "inherit",
                            textDecoration: "underline"
                        }
                    }}>
                        Home
                    </Box>
                </Link>
            </Box >
        </Box >
    );
}
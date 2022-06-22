import { Box, BoxProps, createStyles, makeStyles } from "@mui/material";
import React, { HTMLProps } from "react";

export function MainSection({ children, ...rest }: React.PropsWithChildren<BoxProps>) {
    return (
        <Box component="section" sx={{
            height: "100vh",
            position: "relative",
            overflow:"hidden"
        }} {...rest}>
            {children}
        </Box>
    )
}

export function Section({ children, ...rest }: React.PropsWithChildren<BoxProps>) {
    return (
        <Box component="section" sx={{
            height: "100vh"
        }} {...rest}>
            {children}
        </Box>
    )
}
import { generatePagination } from "../lib/pagination";
import Link from "next/link";
import { Box, Button } from "@mui/material";

type Props = {
  current: number;
  pages: number;
  link: {
    href: (page: number) => string;
    as: (page: number) => string;
  };
};
export default function Pagination({ current, pages, link }: Props) {
  const pagination = generatePagination(current, pages);
  return (
    <Box component="ul" sx={{
      listStyle: "none",
      paddingInlineStart: 0,
      "& > li": {
        display: "inline-block",
        mr: 2,
        "&:first-of-type": {
          ml: 0,
        },
      },
    }}>
      {pagination.map((it, i) => (
        <li key={i}>
          {it.excerpt ? (
            "..."
          ) : (
            <Link href={link.href(it.page)} as={link.as(it.page)}>
              <Button color="secondary" component="a" variant={it.page === current ? "contained" : "outlined"}>{it.page}</Button>
            </Link>
          )}
        </li>
      ))}
    </Box>
  );
}

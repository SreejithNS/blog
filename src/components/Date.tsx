import { Typography } from "@mui/material";
import { format, formatISO } from "date-fns";

type Props = {
  date: Date;
};
export default function Date({ date }: Props) {
  return (
    <Typography variant="body2" color="text.secondary" display="inline-block">
      <time dateTime={formatISO(date)}>
        <span>{format(date, "LLLL d, yyyy")}</span>
      </time>
    </Typography>
  );
}

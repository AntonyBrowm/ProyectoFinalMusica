import { CSSProperties } from "@emotion/serialize";
import { SxProps, Theme } from "@mui/material";

export interface Styles {
  [k: string]: SxProps<Theme> & CSSProperties;
}
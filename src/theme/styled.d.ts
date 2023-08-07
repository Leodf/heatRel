import "styled-components";
import { dark } from "./dark";

type ThemeType = typeof dark;

declare module "styled-components" {
  export interface DefaultTheme extends ThemeType {}
}

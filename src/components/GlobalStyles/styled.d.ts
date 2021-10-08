import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    primary_text_color: string;
    primary_bg_color: string;
    secondary_bg_color: string;
    primary_btn_color: string;
    primary_border_color: string;
    warning_color: string;
    gui_theme_btn: string;
  }
}

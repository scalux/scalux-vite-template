import { svgIconBuilder } from "scalux/helpers";
import { Icons, selectors } from "../../state";

const { Vite, Scalux } = svgIconBuilder("/").useIcons({
  Vite: "vite",
  Scalux: "scalux-logo",
});

export const { connectIcons } = Icons({
  options: ["light"],
  fallBack: "light",
  items: {
    Vite,
    Scalux,
  },
});

const AppIcon = connectIcons({ theme: selectors.pick.ui.theme });

export { AppIcon };

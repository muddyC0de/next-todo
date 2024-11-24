"use client";

import {
  ChakraProvider,
  createSystem,
  defaultConfig,
  defaultSystem,
  defineConfig,
  mergeConfigs,
} from "@chakra-ui/react";
import { type ColorModeProviderProps } from "./color-mode";

const theme = defineConfig({
  theme: {
    recipes: {
      button: {
        base: {
          borderRadius: "full",
          background: "blue",
          color: "white",
          textTransform: "uppercase",
        },
      },
    },
  },
});

// Extends default theme
const config = mergeConfigs(defaultConfig, theme);
const system = createSystem(config);

export function Provider(props: ColorModeProviderProps) {
  return <ChakraProvider value={system}>{props.children}</ChakraProvider>;
}

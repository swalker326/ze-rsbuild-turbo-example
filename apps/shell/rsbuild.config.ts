import { defineConfig } from "@rsbuild/core";
import { pluginReact } from "@rsbuild/plugin-react";
import { ZephyrRsbuildPlugin } from "zephyr-rsbuild-plugin";
import { mfConfig } from "./module-federation.config";

export default defineConfig({
  plugins: [
    pluginReact({
      splitChunks: {
        react: false,
        router: false
      }
    }),
    // ZephyrRsbuildPlugin()
  ],
  moduleFederation: {
    options: mfConfig
  }
});

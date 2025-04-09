import { defineConfig } from "@rsbuild/core";
import { pluginReact } from "@rsbuild/plugin-react";
import { ZephyrRsbuildPlugin } from "zephyr-rsbuild-plugin";
import { mfConfig } from "./module-federation.config";

export default defineConfig({
  plugins: [pluginReact(), ZephyrRsbuildPlugin()],
  moduleFederation: {
    options: mfConfig
  }
});

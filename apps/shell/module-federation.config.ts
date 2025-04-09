import { dependencies } from "./package.json";
import type { ModuleFederationConfig } from "@rsbuild/core";

export const mfConfig: ModuleFederationConfig["options"] = {
  name: "shell",
  filename: "remoteEntry.js",
  remotes: {
    settings: "settings@http://localhost:3001/remoteEntry.js"
  },
  shared: {
    ...dependencies,
    react: {
      singleton: true,
      eager: true,
      requiredVersion: false
    },
    "react-dom": {
      singleton: true,
      eager: true,
      requiredVersion: false
    }
  }
};

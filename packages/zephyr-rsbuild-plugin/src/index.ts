import type { RsbuildPlugin } from "@rsbuild/shared";
import { withZephyr } from "zephyr-rspack-plugin";

export const ZephyrRsbuildPlugin = (): RsbuildPlugin => ({
  name: "plugin-zephyr-rsbuild",
  setup(api) {
    api.modifyRspackConfig(async (config, { mergeConfig }) => {
      //@ts-expect-error I love typescript
      const zeConfig = await withZephyr()(config);
      mergeConfig(zeConfig);
    });
  }
});

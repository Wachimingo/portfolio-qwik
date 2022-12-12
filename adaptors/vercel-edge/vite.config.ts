import { vercelEdgeAdaptor } from "@builder.io/qwik-city/adaptors/vercel-edge/vite";
import { extendConfig } from "@builder.io/qwik-city/vite";
import baseConfig from "../../vite.config";

export default extendConfig(baseConfig, () => {
  return {
    ssr: {
      external: ["stream"],
      noExternal: undefined
    },
    build: {
      ssr: true,
      rollupOptions: {
        external: ["stream", "node:stream"],
        input: ["src/entry.vercel-edge.tsx", "@qwik-city-plan"]
      },
      outDir: ".vercel/output/functions/_qwik-city.func"
    },
    plugins: [
      vercelEdgeAdaptor({
        staticGenerate: undefined
      })
    ]
  };
});

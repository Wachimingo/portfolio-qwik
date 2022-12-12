import { vercelEdgeAdaptor } from "@builder.io/qwik-city/adaptors/vercel-edge/vite";
import { extendConfig } from "@builder.io/qwik-city/vite";
import baseConfig from "../../vite.config";

export default extendConfig(baseConfig, () => {
  return {
    ssr: {
      external: ["stream", "util", "events", "dns", "zlib", "timers", "crypto", "os", "url", "fs", "path", "net", "tls", "http"],
      noExternal: undefined
    },
    build: {
      ssr: true,
      rollupOptions: {
        noExternal: false,
        external: ["stream", "util", "events", "dns", "zlib", "timers", "crypto", "os", "url", "fs", "path", "net", "tls", "http"],
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

import { Snippet } from "@geist-ui/react";

export default function PluginSnippet({ name }: { name: string }) {
  return (
    <Snippet
      type="dark"
      filled
      text={`yarn add -D ${name}`}
      toastText={`Copied "yarn add -D ${name}"`}
    />
  );
}

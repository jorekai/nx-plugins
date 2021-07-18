import { Github } from "@geist-ui/react-icons";
import { Link } from "@geist-ui/react";
import React from "react";

export default function PluginLink({ url }: { url: string }) {
  return (
    <Link href={url}>
      <Github size={20} />
    </Link>
  );
}

import { Card as GeistCard } from "@geist-ui/react";
import { IPlugin } from "../../pages/index";
import PluginLink from "../plugin/PluginLink";
import PluginSnippet from "../plugin/PluginSnippet";
import PluginTooltip from "../plugin/PluginTooltip";
import React from "react";

export default function Card({ plugin }: { plugin: IPlugin }) {
  return (
    <GeistCard type={"dark"}>
      <GeistCard.Content
        style={{
          justifyContent: "center",
          paddingTop: 5,
          paddingBottom: 5,
          display: "flex",
          alignItems: "center",
        }}>
        <PluginLink url={plugin.url} />
        <PluginTooltip description={plugin.description}>
          <PluginSnippet name={plugin.name} />
        </PluginTooltip>
      </GeistCard.Content>
    </GeistCard>
  );
}

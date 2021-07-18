import { NextPage } from "next";
import { Page } from "@geist-ui/react";
import PluginGrid from "../components/plugin/PluginGrid";
import React from "react";
import withInitPlugins from "../hooks/withInitPlugins";

export interface IPlugin {
  name: string;
  description: string;
  url: string;
}

export interface HomeProps {
  initPlugins?: IPlugin[];
}

const Home: NextPage<HomeProps> = ({ initPlugins }) => {
  return (
    <Page size="large" style={{ minWidth: "80vw", justifyContent: "center" }}>
      <Page.Header style={{ textAlign: "center" }}>
        <h2>NX Community Plugins</h2>
      </Page.Header>
      <PluginGrid initPlugins={initPlugins} />
    </Page>
  );
};

const { home } = withInitPlugins(Home);

export default home;

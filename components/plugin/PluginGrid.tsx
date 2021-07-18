import { HomeProps, IPlugin } from "../../pages";
import React, { useState } from "react";

import Card from "../../components/card/Card";
import { Grid } from "@geist-ui/react";

const PluginGrid = ({ initPlugins }: HomeProps) => {
  const [plugins, _setPlugins] = useState<IPlugin[]>(initPlugins!);

  function mapPluginsToCards() {
    return plugins?.map((plugin, index) => {
      return (
        <Grid xs key={index}>
          <Card plugin={plugin} />
        </Grid>
      );
    });
  }

  return (
    <Grid.Container gap={1} justify="center">
      {mapPluginsToCards()}
    </Grid.Container>
  );
};

export default PluginGrid;

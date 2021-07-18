import {
  Card,
  Grid,
  Link,
  Page,
  Snippet,
  Text,
  Tooltip,
} from "@geist-ui/react";
import React, { useEffect, useState } from "react";

import Github from "@geist-ui/react-icons/github";

type Plugin = {
  name: string;
  description: string;
  url: string;
};

export default function Home() {
  const [plugins, setPlugins] = useState<Plugin[]>();

  useEffect(() => {
    fetch(
      "https://raw.githubusercontent.com/nrwl/nx/master/community/approved-plugins.json"
    ).then((res: any) =>
      res.json().then((value: Plugin[]) => {
        setPlugins(value);
      })
    );
  }, []);

  return (
    <Page
      dotBackdrop
      size="large"
      style={{ minWidth: "80vw", justifyContent: "center" }}>
      <Grid.Container gap={1} justify="center">
        {plugins?.map((plugin, index) => {
          return (
            <>
              <Grid xs key={index}>
                <Card type={"dark"}>
                  <Card.Content
                    style={{
                      justifyContent: "center",
                      display: "flex",
                      padding: 10,
                    }}>
                    <div
                      style={{
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                      }}>
                      <Link href={plugin.url}>
                        <Github />
                      </Link>
                      <Tooltip
                        placement="rightEnd"
                        text={plugin.description}
                        style={{ fontWeight: 600 }}>
                        <Snippet
                          type="dark"
                          filled
                          text={`yarn add -D ${plugin.name}`}
                          width="100%"
                          toastText={`Copied "${plugin.name}" to clipboard`}
                        />
                      </Tooltip>
                    </div>
                  </Card.Content>
                </Card>
              </Grid>
            </>
          );
        })}
      </Grid.Container>
    </Page>
  );
}

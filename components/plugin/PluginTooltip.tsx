import React, { FC } from "react";
import { Text, Tooltip } from "@geist-ui/react";

interface Props {
  description: string;
}

const PluginTooltip: FC<Props> = ({ description, children }) => {
  return (
    <Tooltip
      placement="bottom"
      type="warning"
      text={
        <>
          <Text b>{description}</Text>
        </>
      }
      style={{ width: "100%" }}>
      {children}
    </Tooltip>
  );
};

export default PluginTooltip;

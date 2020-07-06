import * as React from "react";
import { useTabsContext } from "./Tabs";

export interface ITabPanel {
  label: string;
}

const Panel: React.FC<ITabPanel> = props => {
  const { activeTab } = useTabsContext();
  if (props.label === activeTab) {
    return <>{props.children}</>;
  }
  return null;
};

export { Panel };

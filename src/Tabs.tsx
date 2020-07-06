import * as React from "react";
import { useState } from "react";
import { Tab, ITabProps } from "./Tab";
import { Panel, ITabPanel } from "./Panel";

interface ITabsContext {
  activeTab: string; // state
  setActiveTab: (label: string) => void; // setter
}

interface ITabsComposition {
  Tab: React.FC<ITabProps>;
  Panel: React.FC<ITabPanel>;
}

export const TabsContext = React.createContext<ITabsContext | undefined>(
  undefined
);

const Tabs: React.FC & ITabsComposition = props => {
  const [activeTab, setActiveTab] = useState("b");
  return (
    <TabsContext.Provider value={{ activeTab, setActiveTab }}>
      {props.children}
    </TabsContext.Provider>
  );
};

// Define here in a custom hook, safe default as well some other things when necessary
const useTabsContext = () => {
  const ctx = React.useContext(TabsContext);

  // NOTE: Check if we are inside TabContext.Provider wrapper!?
  if (ctx === undefined) {
    throw new Error("useTabContext must be used within a TabContext.Provider");
  }
  return ctx;
};

Tabs.Tab = Tab;
Tabs.Panel = Panel;

export { Tabs, useTabsContext };

import * as React from "react";
import { useTabsContext } from "./Tabs";

export interface ITabProps {
  label: string;
}

const Tab: React.FC<ITabProps> = props => {
  const { setActiveTab } = useTabsContext();

  return (
    <button
      className="border-4 border-gray-400 m-2"
      onClick={() => setActiveTab(props.label)}
    >
      {props.children}
    </button>
  );
};

export { Tab };

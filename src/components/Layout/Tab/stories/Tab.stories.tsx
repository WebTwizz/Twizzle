import { ComponentStory, ComponentMeta } from "@storybook/react";
import React, { useState } from "react";
import { Tab, TabList } from "..";

export default {
  title: "Components/Layout/Tab",
  component: TabList,
} as ComponentMeta<typeof TabList>;

const Tabs = [
    {
        label: "Tab 1",
        content: "Tab 1 content"
    },
    {
        label: "Tab 2",
        content: "Tab 2 content"
    },
    {
        label: "Tab 3",
        content: "Tab 3 content"
    },
    {
        label: "Tab 4",
        content: "Tab 4 content"
    },
    {
        label: "Tab 5",
        content: "Tab 5 content"
    },
    {
        label: "Tab 6",
        content: "Tab 6 content"
    },
    {
        label: "Tab 7",
        content: "Tab 7 content"
    },
    {
        label: "Tab 8",
        content: "Tab 8 content"
    },
];

const TabTemplate: ComponentStory<typeof TabList> = () => {
  const [selectedIndex, setSelectedIndex] = useState(0);

  return (
    <div>
    <TabList
        style={{
            paddingBottom: '10px',
        }}
    >
      {Tabs.map((tab, index) => (
        <div>
        <Tab
          isActive={selectedIndex == index}
          onClick={() => setSelectedIndex(index)}
          key={index}
          style={{
            width: '120px',
          }}
        >
          {tab.label}
        </Tab>
        </div>
      ))}
    </TabList>
        {Tabs[selectedIndex].content}
    </div>

  );
};

const VerticalTabTemplate: ComponentStory<typeof TabList> = () => {
  const [selectedIndex, setSelectedIndex] = useState(0);

  return (
    <div
    style={{
        display: 'flex',
        width: '100%',
        height: '200px',
        backgroundColor: '#f5f5f5',
    }}
    >
      <TabList orientation="vertical" style={{marginRight: '10px', width: '25%'}}>
        {Tabs.map((tab, index) => (
          <Tab
            isActive={selectedIndex == index}
            onClick={() => setSelectedIndex(index)}
            key={index}
          >
            {tab.label}
          </Tab>
        ))}
      </TabList>
        {Tabs[selectedIndex].content}
    </div>
  );
};

export const TabComponent = TabTemplate.bind({});
export const VerticalTabComponent = VerticalTabTemplate.bind({});

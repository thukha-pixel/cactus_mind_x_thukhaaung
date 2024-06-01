'use client';

import styles from './tab.module.css';
import { useState } from 'react';

const Tab: React.FC = () => {
  const tabs = [
    {
      label: "NFC + QR Sharing",
      content: "Thi is conent of NFC + QR Sharing.",
    },
    {
      label: "Real Time Editing",
      content: "This is content of Real Time Editing.",
    },
    {
      label: "Sustainable",
      content: "This is content of Sustainable.",
    },
    {
      label: "Versality",
      content: "This is content of Versality.",
    },
    {
      label: "Cost Effective",
      content: "This is content of Cost Effective.",
    },
    {
      label: "Lead Collection",
      content: "This is content of Lead Collection.",
    }
  ];

  const [activeTab, setActiveTab] = useState(0);

  return (
    <div className={styles["tab-container"]}>
      <ul>
        {
          tabs.map((tab, index) => (
            <li key={index} onClick={() => setActiveTab(index)}>
              {tab.label}
            </li>
          ))
        }
      </ul>
      <div className={styles["tab-whiteboard"]}>
        {tabs[activeTab].content}
      </div>
    </div>
  );
};

export default Tab;
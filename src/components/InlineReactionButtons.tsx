"use client"; // Mark this component as a Client Component

import { useEffect } from "react";
import dynamic from "next/dynamic";
import React from "react";

// Dynamically import InlineReactionButtons from the sharethis-reactjs package
const InlineReactionButtons = dynamic(
  () => import('sharethis-reactjs').then(mod => mod.InlineReactionButtons),
  { ssr: false }
);

const InlineReactionButtonsComponent: React.FC = () => {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://platform-api.sharethis.com/js/sharethis.js#property=67231db2f9d5250012f5d9c5&product=inline-reaction-buttons&source=platform";
    script.async = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <InlineReactionButtons
      config={{
        alignment: 'center',
        enabled: true,
        language: 'en',
        min_count: 0,
        padding: 12,
        reactions: [
          'slight_smile',
          'heart_eyes',
          'laughing',
          'astonished',
          'sob',
          'rage'
        ],
        radius: 4,
        size: 48,
        show_total: true,
      }}
    />
  );
};

export default InlineReactionButtonsComponent;

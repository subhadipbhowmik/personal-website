"use client";

import dynamic from "next/dynamic";
import React from "react";

// Dynamically import InlineReactionButtons from the sharethis-reactjs package
const InlineReactionButtons = dynamic(
  () => import('sharethis-reactjs').then(mod => mod.InlineReactionButtons),
  { ssr: false }
);

interface InlineReactionButtonsProps {
  url: string; // Pass in the URL to share
}

const InlineReactionButtonsComponent: React.FC<InlineReactionButtonsProps> = ({ url }) => {
  return (
    <InlineReactionButtons
      config={{
        alignment: 'center',  // alignment of buttons (left, center, right)
        enabled: true,        // show/hide buttons (true, false)
        language: 'en',       // which language to use
        min_count: 0,         // hide react counts less than min_count (INTEGER)
        padding: 12,          // padding within buttons (INTEGER)
        reactions: [          // which reactions to include
          'slight_smile',
          'heart_eyes',
          'laughing',
          'astonished',
          'sob',
          'rage'
        ],
        radius: 4,            // the corner radius on each button (INTEGER)
        size: 48,             // the size of each button (INTEGER)
        show_total: true,     // show/hide the total count (true, false)
        url: url              // URL for sharing (defaults to current URL)
      }}
    />
  );
};

export default InlineReactionButtonsComponent;

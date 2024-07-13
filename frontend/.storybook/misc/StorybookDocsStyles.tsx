import React from "react";

const StorybookDocsStyles = () => (
  <style dangerouslySetInnerHTML={{ __html: `
    .sbdocs {
      background: transparent;
    }

    html.dark .sbdocs-title {
      color: #c9cdcf;
    }

    html.dark .sb-main-fullscreen {
      background-color: #000000;
    }

    html.dark .sb-bar {
      background-color: rgba(2, 156, 253, 0.07);
    }
    
    html.dark .sbdocs-preview {
      border-color: rgba(255, 255, 255, .1);
    }

    html.dark .docblock-argstable-head th {
      color: #798186;
    }

    html.dark .docblock-argstable-body {
      color: #c9cdcf;
    }

    html.dark .docblock-argstable-body td {
      background: transparent;
    }

    html.dark .docblock-argstable-body td:nth-of-type(2) span {
      color: #c9cdcf;
      background: #222425;
      border-color: rgba(255, 255, 255, .1);
    }

    html.dark .docblock-argstable-body textarea,
    html.dark .docblock-argstable-body select {
      color: #c9cdcf;
      background: transparent;
      box-shadow: hsla(203, 50%, 30%, 0.95) 0 0 0 1px inset;;
    }

    html.dark .docs-story > div:last-child {
      background-color: transparent;
    }

    html.dark .docblock-code-toggle {
      color: #c9cdcf;
      background: transparent;
      border-color: rgba(255, 255, 255, .1);
    }

    html.dark #stories {
      color: #798186;
    }

    html.dark #primary,
    html.dark #secondary,
    html.dark #tertiary,
    html.dark .sb-anchor > h3 {
      color: #c9cdcf;
    }
  `}}/>
)

export default StorybookDocsStyles;
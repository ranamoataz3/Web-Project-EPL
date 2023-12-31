/** @type {import('tailwindcss').Config} */
const plugin = require("tailwindcss/plugin");
const {
  default: flattenColorPalette,
} = require("tailwindcss/lib/util/flattenColorPalette");
const baseTypographyPlugins =
  require("./src/core/assets/styles/configs/typography").baseTypographyPlugins;

const components = plugin(function ({ addComponents, theme }) {
  const separatorBorderImage =
    "radial-gradient(circle, var(--color-border) 0%, rgba(0,0,0,0) 70%) 1 100%";
  addComponents({
    ".card": {
      transition: "box-shadow 300ms ease-in , top 300ms ease-in, transform 200ms ease-in",
      position: "relative",
      top: "0",
      "&:hover": {
        border: "1px solid var(--color-border)",
        "box-shadow": "1px 1px 2px 0px #4f6986",
        // top: "10px",
        transform: 'scale(1.02)',
      },
    },
    ".hoverable-card": {
      borderRadius: "8px",
      position: "relative",
      isolation: "isolate",
      "&::before": {
        content: "''",
        position: "absolute",
        inset: "0",
        background: "var(--color-primary)",
        borderRadius: "8px",
        transform: "translate(0)",
        bottom: "0",
        transition: "all 150ms cubic-bezier(0.18, 0.89, 0.32, 0.98)",
        zIndex: "-1",
      },
      "&>div": {
        background: "var(--color-white)",
        position: "relative",
        top: "0",
        transform: "translate(0px)",
        transition: "all 250ms cubic-bezier(0.18, 0.89, 0.32, 0.98)",
      },
      "&:hover": {
        "&>div": {
          top: "-8px",
          transform: "translate(8px)",
        },
        "&::before": {
          transform: "translate(-4px)",
          bottom: "-5px",
        },
      },
    },
    ".icon-container": {
      width: "24px",
      height: "24px",
      borderRadius: "50%",
      display: "flex",
      "align-items": "center",
      "justify-content": "center",
      background: "transparent",
    },
    ".bordered": {
      border: "1px solid var(--color-border)",
    },
    ".bordered-top": {
      borderTop: "1px solid var(--color-border)",
    },
    ".bordered-bottom": {
      borderBottom: "1px solid var(--color-border)",
    },
    ".bordered-end": {
      borderInlineEnd: "1px solid var(--color-border)",
    },
    ".bordered-start": {
      borderInlineStart: "1px solid var(--color-border)",
    },
    ".separated-start": {
      borderImage: separatorBorderImage,
      borderInlineStart: "1px solid",
    },
    ".separated-end": {
      borderImage: separatorBorderImage,
      borderInlineEnd: "1px solid black",
    },
    ".separator-vertical": {
      width: "1px",
      height: "100%",
      minHeight: "100%",
      maxHeight: "100%",
      background:
        "radial-gradient(circle, var(--color-border) 0%, rgba(0,0,0,0) 90%)",
    },
    ".elevated": {
      zIndex: "10",
    },

    ".select-image-none": {
      "user-drag": "none",
      "-webkit-user-drag": "none",
      " user-select": "none",
      " -moz-user-select": "none",
      "-webkit-user-select": "none",
      "-ms-user-select": "none",
    },
  });
});

const iconsPlugin = plugin(function ({ matchUtilities, theme }) {
  matchUtilities(
    {
      size: (value) => {
        return {
          width: value,
          height: value,
        };
      },
    },
    { values: { ...theme("spacing") } }
  );
  matchUtilities(
    {
      "grid-auto": (value) => {
        value ??= "200px";
        return {
          display: "grid",
          gridTemplateColumns: `repeat(auto-fill, minmax(${value}, 1fr))`,
        };
      },
    },
    {
      values: { ...theme("spacing") },
      type: "size",
    }
  );
  matchUtilities(
    {
      "icon-col": (value) => {
        return {
          color: value,
          fill: value,
          stroke: value,
        };
      },
    },
    {
      values: flattenColorPalette(theme("colors")),
      type: "color",
    }
  );
});

const colorUtilities = plugin(function ({ addUtilities, theme }) {
  addUtilities({
    ".primary-container": {
      background: theme("colors.primary-container"),
      color: theme("colors.on-primary-container"),
      fill: theme("colors.on-primary-container"),
      stroke: theme("colors.on-primary-container"),
    },
  });
});

const flexUtils = plugin(function ({ addUtilities }) {
  addUtilities({
    ".centered": {
      display: "flex",
      "align-items": "center",
      "justify-content": "center",
    },
    ".row": {
      display: "flex",
      "flex-direction": "row",
      "align-items": "center",
    },
    ".row-between": {
      display: "flex !important",
      "flex-direction": "row",
      "align-items": "center",
      "justify-content": "space-between",
    },
    ".column": {
      display: "flex",
      "flex-direction": "column",
    },
    ".column-center": {
      display: "flex",
      "flex-direction": "column",
      "align-items": "center",
    },
  });
});

module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        "primary-gradient": "var(--color-primary-gradient)",
      },
      colors: {
        primary: "var(--color-primary)",
        "con-primary": "var(--color-on-primary)",
        "primary-container": "var(--color-primary-container)",
        "primary-container-lighter": "var(--color-primary-container-lighter)",
        "on-primary-container": "var(--color-on-primary-container)",
        background: "var(--color-background)",
        shading: "var(--color-shading)",
        "on-background": "var(--color-on-background)",
        border: "var(--color-border)",
        "font-0": "var(--color-font-0)",
        "font-1": "var(--color-font-1)",
        "font-2": "var(--color-font-2)",
        "font-3": "var(--color-font-3)",
        "font-4": "var(--color-font-4)",
        "font-5": "var(--color-font-5)",
        "font-placeholder": "var(--color-font-placeholder)",
        divider: "var(--color-divider)",
        "icon-1": "var(--color-icon-1)",
        "icon-2": "var(--color-icon-2)",
        "icon-3": "var(--color-icon-3)",
        "icon-4": "var(--color-icon-4)",
        neutral: "var(--color-neutral)",
        white: "var(--color-white)",
        black: "var(--color-black)",
        green: "var(--color-green)",
        red: "var(--color-red)",
        yellow: "var(--color-yellow)",
        orange: "var(--color-orange)",
      },
      borderRadius: {
        none: "0",
        xs: "var(--rounded-xs)",
        sm: "var(--rounded-sm)",
        DEFAULT: "var(--rounded-sm)",
        md: "var(--rounded-md)",
        lg: "var(--rounded-lg)",
        full: "200px",
      },
      boxShadow: {
        navButton: "1px 0px 2px 0px #DFE4EB",
        nav: "1px 0px 2px 0px #DFE4EB",
        container: "var(--shadow-container)",
        action: "var(--shadow-action)",
        popup: "1px 1px 4px 0px rgba(204, 200, 196, 0.20)",
      },
    },
  },
  corePlugins: {
    preflight: false,
  },
  plugins: [
    iconsPlugin,
    baseTypographyPlugins,
    components,
    colorUtilities,
    flexUtils,
  ],
};

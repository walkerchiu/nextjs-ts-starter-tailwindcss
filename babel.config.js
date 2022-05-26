const presets = [
  "next/babel"
];

const plugins = [
  "@emotion",
  "macros"
];

if (process.env["ENV"] === "prod") {
}

module.exports = { presets, plugins };

const presets = [
  "next/babel"
];

const plugins = [
  "@emotion"
];

if (process.env["ENV"] === "prod") {
}

module.exports = { presets, plugins };

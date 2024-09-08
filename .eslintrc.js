module.exports = {
  root: true,
  extends: ["next", "next/core-web-vitals"],
  rules: {
    "react-hooks/exhaustive-deps": "off", // Disable for useEffect dependencies
    "react/jsx-no-undef": "off", // Disable the undefined component rule
  },
};
// {
//   "extends": "next/core-web-vitals"
// }

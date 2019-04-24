module.exports = {
  "apps": [
    {
      "name": "react-server",
      "script": "npm",
      "args": "start"
    },
    {
      "name": "electron-app",
      "script": "node .\src\electron-wait-react.js"
    }
  ]
};

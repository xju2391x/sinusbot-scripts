registerPlugin({
    name: "League of TeamSpeak",
    version: "0.0.1",
    description: "Connect LoL your account with your TS3 account",
    author: "DrWarpMan <drwarpman@gmail.com>",
    backends: ["ts3"],
    engine: ">= 1.0",
    autorun: false,
    enableWeb: false,
    hidden: false,
    requiredModules: [],
    voiceCommands: [],
    vars: []
}, (_, config, { name, version, author }) => {

    const backend = require("backend");

    // SCRIPT LOADED SUCCCESFULLY
    engine.log(`\n[Script] "${name}" [Version] "${version}" [Author] "${author}"`);
});
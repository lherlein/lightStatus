const fetch = require('node-fetch');
const endpoints = require('./endpoints.js');

async function pix() {
    const status = await fetch(endpoints.lightsEndpoints.pixley.commands.status);
    const data = await status.json();
    return data;
}

async function back() {
    const status = await fetch(endpoints.lightsEndpoints.backyard.commands.status);
    const data = await status.json();
    return data;
}

async function base() {
    const status = await fetch(endpoints.lightsEndpoints.basement.commands.status);
    const data = await status.json();
    return data;
}

async function getLightStatus() {
    const pixley = await pix();
    const backyard = await back();
    const basement = await base();
    
    return {
        pixley,
        backyard,
        basement
    }
}

async function toggleLight(light, status) {
    if (status === 'ON') {
        let url = endpoints.lightsEndpoints[light].commands.off;
        fetch(url);
    } else {
        let url = endpoints.lightsEndpoints[light].commands.on;
        fetch(url);
    }
}

module.exports = {
    getLightStatus,
    toggleLight
}
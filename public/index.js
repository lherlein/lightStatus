//import fetch from 'node-fetch';

const lightsEndpoints = {
    "pixley": {
        "commands": {
            "on": "http://lights-pixley/cm?cmnd=POWER+ON",
            "off": "http://lights-pixley/cm?cmnd=POWER+OFF",
            "status": "http://lights-pixley/cm?cmnd=POWER"
        }
    },
    "basement": {
        "commands": {
            "on": "http://lights-basement/cm?cmnd=POWER+ON",
            "off": "http://lights-basement/cm?cmnd=POWER+OFF",
            "status": "http://lights-basement/cm?cmnd=POWER"
        }
    },
    "backyard": {
        "commands": {
            "on": "http://lights-backyard/cm?cmnd=POWER+ON",
            "off": "http://lights-backyard/cm?cmnd=POWER+OFF",
            "status": "http://lights-backyard/cm?cmnd=POWER"
        }
    }
}

// get light status
// pixley

async function getPixleyStatus() {
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    headers.append('Accept', 'application/json')
    let requestOptions = {
        method: 'GET',
    };
    let url = lightsEndpoints.pixley.commands.status;
    let response = await fetch(url, requestOptions);

    if (response.ok) {
        let data = await response.json()
        return data;
    } else {
        throw new Error(`Error: ${response.status}`);
    }
}

async function getBasementStatus() {
    let requestOptions = {
        method: 'GET',
    };
    let url = lightsEndpoints.basement.commands.status;
    let response = await fetch(url, requestOptions);

    if (response.ok) {
        let data = await response.json();
        return data;
        
    } else {
        throw new Error(`Error: ${response.status}`);
    }
}

async function getBackyardStatus() {
    let requestOptions = {
        method: 'GET',
    };
    let url = lightsEndpoints.backyard.commands.status;
    let response = await fetch(url, requestOptions);

    if (response.ok) {
        let data = await response.json();
        return data;
        
    } else {
        throw new Error(`Error: ${response.status}`);
    }
}

function populateText(pixStatus, baseStatus, backyardStatus) {
    
    const pixInnerHtml = `<h1>Pixley Light Status</h1>\n<p id="status">${pixStatus}</p>`
    const baseInnerHtml = `<h1>Basement Light Status</h1>\n<p id="status">${baseStatus}</p>`
    const backyardInnerHtml = `<h1>Backyard Light Status</h1>\n<p id="status">${backyardStatus}</p>`
    
    const t1 = document.getElementById('pixley-status');
    const t2 = document.getElementById('basement-status');
    const t3 = document.getElementById('backyard-status');

    if (t1 && t2 && t3) {
        t1.innerHTML = pixInnerHtml;
        t2.innerHTML = baseInnerHtml;
        t3.innerHTML = backyardInnerHtml;
    }
}

async function main() {
    try {
        const pixStatus = await getPixleyStatus();
        const baseStatus = await getBasementStatus();
        const backyardStatus = await getBackyardStatus();
        populateText(pixStatus.POWER, baseStatus.POWER, backyardStatus.POWER);
    } catch (error) {
        console.error(error);
    }
}

main();
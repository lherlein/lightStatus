import fetch, { Response } from 'node-fetch';
import { lightsEndpoints } from './util/endpoints';
import { apiResponse } from './types';


// get light status
// pixley

async function getPixleyStatus(): Promise<apiResponse> {
    let requestOptions = {
        method: 'GET',
    };
    let url = lightsEndpoints.pixley.commands.status;
    let response: Response = await fetch(url, requestOptions);

    if (response.ok) {
        let data = await response.json() as apiResponse;
        return data;
    } else {
        throw new Error(`Error: ${response.status}`);
    }
}

async function getBasementStatus(): Promise<apiResponse> {
    let requestOptions = {
        method: 'GET',
    };
    let url = lightsEndpoints.basement.commands.status;
    let response: Response = await fetch(url, requestOptions);

    if (response.ok) {
        let data = await response.json() as apiResponse;
        return data;
          
    } else {
        throw new Error(`Error: ${response.status}`);
    }
}

async function getBackyardStatus(): Promise<apiResponse> {
    let requestOptions = {
        method: 'GET',
    };
    let url = lightsEndpoints.backyard.commands.status;
    let response: Response = await fetch(url, requestOptions);

    if (response.ok) {
        let data = await response.json() as apiResponse;
        return data;
          
    } else {
        throw new Error(`Error: ${response.status}`);
    }
}

function populateText(pixStatus: string, baseStatus: string, backyardStatus: string) {
    
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
        const pixStatus: apiResponse = await getPixleyStatus();
        const baseStatus: apiResponse = await getBasementStatus();
        const backyardStatus: apiResponse = await getBackyardStatus();
        populateText(pixStatus.POWER, baseStatus.POWER, backyardStatus.POWER);
    } catch (error) {
        console.error(error);
    }
}

window.onload = main;
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

function populateText(pixStatus: string, baseStatus: string) {
    
    const pixInnerHtml = `<h1>Pixley Light Status</h1>\n<p id="status">${pixStatus}</p>`
    const baseInnerHtml = `<h1>Basement Light Status</h1>\n<p id="status">${baseStatus}</p>`
    
    const t1 = document.getElementById('pixley-status');
    const t2 = document.getElementById('basement-status');

    if (t1 && t2) {
        t1.innerHTML = pixInnerHtml;
        t2.innerHTML = baseInnerHtml;
    }
}

async function main() {
    try {
        const pixStatus: {[key: string]: string} = await getPixleyStatus();
        const baseStatus = await getBasementStatus();
        populateText(pixStatus.POWER, baseStatus.POWER);
    } catch (error) {
        console.error(error);
    }
}

window.onload = main;
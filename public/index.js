async function main() {
    try {
        const res = await fetch('http://localhost:13500/statusCheck');
        const data = await res.json();
        populateText(data.pixley.POWER, data.basement.POWER, data.backyard.POWER);
        buttonHandler();
    } catch (error) {
        console.error(error);
    }
}

function populateText(pixStatus, baseStatus, backyardStatus) {    
    const t1 = document.getElementById('pixley-status');
    const t2 = document.getElementById('basement-status');
    const t3 = document.getElementById('backyard-status');

    if (t1 && t2 && t3) {
        t1.innerHTML = pixStatus;
        t2.innerHTML = baseStatus;
        t3.innerHTML = backyardStatus;
    }
}

async function buttonHandler() {
    const pixleyButton = document.getElementById('pixley-button');
    const basementButton = document.getElementById('basement-button');
    const backyardButton = document.getElementById('backyard-button');

    pixleyButton.addEventListener('click', function() {;
        fetch('http://localhost:13500/togglePix');
        window.location.href = 'http://localhost:13500/';
    });

    basementButton.addEventListener('click', function() {;
        fetch('http://localhost:13500/toggleBase');
        window.location.href = 'http://localhost:13500/';
    });

    backyardButton.addEventListener('click', function() {;
        fetch('http://localhost:13500/toggleBack');
        window.location.href = 'http://localhost:13500/';
    });
}

main();
export const lightsEndpoints = {
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
    }
}
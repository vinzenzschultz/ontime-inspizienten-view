// app.js
// Real-time client for new OnTime view
// Connects via WebSocket and handles real-time clock and project title via REST and WebSocket

// Utility: Left-pad numbers to 2 digits
const leftPad = num => String(num).padStart(2, '0');

// Update project title in the header
function updateProjectHeader(name) {
    document.getElementById('projekttitel').innerText = name;
}

function updateTitelNow(name) {
    if (name == null) {
        document.querySelector('.updateTitelNow').textContent = "--";
    } else {
        document.querySelector('.updateTitelNow').textContent = name;
        makeTitleCardBlinkGreen();
    }
}

function updateAktuellerBlock(name) {
    if (name == null) {
        document.querySelector('.aktueller-block').textContent = "--";
    } else {
        document.querySelector('.aktueller-block').textContent = name;
        makeTitleCardBlinkGreen();
    }
}

function updateTitelNext(name) {
    if (name == null) {
        document.querySelector('.updateTitelNext').textContent = "--";
    } else {
        document.querySelector('.updateTitelNext').textContent = name;
        makeTitleCardBlinkGreen();
    }
}

function updatePosition(zaehler, nenner) {
    if (zaehler == null) {
        zaehler = '--';
    }
    document.getElementById('stage_time_position').innerText = String(zaehler) + "/" + String(nenner);
}

const updateTimerCurrent = (current) => {
    const currentTimeElement = document.querySelector('.stage_time_aktuell');
    if (currentTimeElement && current !== null) {
        const isNegative = current < 0;
        const absCurrent = Math.abs(current);
        const hours = Math.floor(absCurrent / (60 * 60 * 1000));
        const minutes = Math.floor((absCurrent % (60 * 60 * 1000)) / (60 * 1000));
        const seconds = Math.floor((absCurrent % (60 * 1000)) / 1000);

        if (hours > 0) {
            currentTimeElement.textContent = `${isNegative ? '-' : ''}${String(hours).padStart(2, '0')}:${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
        } else {
            currentTimeElement.textContent = `${isNegative ? '-' : ''}${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
        }
    } else if (currentTimeElement) {
        currentTimeElement.textContent = '--:--:--';
    }
};

const updateTimerNext = (current) => {
    const currentTimeElement = document.querySelector('.stage_time_next');
    if (currentTimeElement && current !== null) {
        const isNegative = current < 0;
        const absCurrent = Math.abs(current);
        const hours = Math.floor(absCurrent / (60 * 60 * 1000));
        const minutes = Math.floor((absCurrent % (60 * 60 * 1000)) / (60 * 1000));
        const seconds = Math.floor((absCurrent % (60 * 1000)) / 1000);

        if (hours > 0) {
            currentTimeElement.textContent = `${isNegative ? '-' : ''}${String(hours).padStart(2, '0')}:${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
        } else {
            currentTimeElement.textContent = `${isNegative ? '-' : ''}${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
        }
    } else if (currentTimeElement) {
        currentTimeElement.textContent = '--:--:--';
    }
};

const updateCueStart = (current) => {
    const currentTimeElement = document.querySelector('.stage_timer_start');
    if (currentTimeElement && current !== null) {
        const isNegative = current < 0;
        const absCurrent = Math.abs(current);
        const hours = Math.floor(absCurrent / (60 * 60 * 1000));
        const minutes = Math.floor((absCurrent % (60 * 60 * 1000)) / (60 * 1000));
        const seconds = Math.floor((absCurrent % (60 * 1000)) / 1000);

        if (hours > 0) {
            currentTimeElement.textContent = `${isNegative ? '-' : ''}${String(hours).padStart(2, '0')}:${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
        } else {
            currentTimeElement.textContent = `${isNegative ? '-' : ''}${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
        }
    } else if (currentTimeElement) {
        currentTimeElement.textContent = '--:--:--';
    }
};

const updateNextStart = (current) => {
    const currentTimeElement = document.querySelector('.stage_time_next_start');
    if (currentTimeElement && current !== null) {
        const isNegative = current < 0;
        const absCurrent = Math.abs(current);
        const hours = Math.floor(absCurrent / (60 * 60 * 1000));
        const minutes = Math.floor((absCurrent % (60 * 60 * 1000)) / (60 * 1000));
        const seconds = Math.floor((absCurrent % (60 * 1000)) / 1000);

        if (hours > 0) {
            currentTimeElement.textContent = `${isNegative ? '-' : ''}${String(hours).padStart(2, '0')}:${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
        } else {
            currentTimeElement.textContent = `${isNegative ? '-' : ''}${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
        }
    } else if (currentTimeElement) {
        currentTimeElement.textContent = '--:--:--';
    }
};

const updateOffset = (current) => {
    const currentTimeElement = document.querySelector('.stage_time_offset');
    if (currentTimeElement && current !== null) {
        const isNegative = current < 0;
        const absCurrent = Math.abs(current);
        const hours = Math.floor(absCurrent / (60 * 60 * 1000));
        const minutes = Math.floor((absCurrent % (60 * 60 * 1000)) / (60 * 1000));
        const seconds = Math.floor((absCurrent % (60 * 1000)) / 1000);

        if (hours > 0) {
            currentTimeElement.textContent = `${isNegative ? '-' : ''}${String(hours).padStart(2, '0')}:${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
        } else {
            currentTimeElement.textContent = `${isNegative ? '-' : ''}${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
        }
    } else if (currentTimeElement) {
        currentTimeElement.textContent = '--:--:--';
    }
};

const updateexpectedFinish = (current) => {
    const currentTimeElement = document.querySelector('.stage_timer_ende');
    if (currentTimeElement && current !== null) {
        const isNegative = current < 0;
        const absCurrent = Math.abs(current);
        const hours = Math.floor(absCurrent / (60 * 60 * 1000));
        const minutes = Math.floor((absCurrent % (60 * 60 * 1000)) / (60 * 1000));
        const seconds = Math.floor((absCurrent % (60 * 1000)) / 1000);

        if (hours > 0) {
            currentTimeElement.textContent = `${isNegative ? '-' : ''}${String(hours).padStart(2, '0')}:${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
        } else {
            currentTimeElement.textContent = `${isNegative ? '-' : ''}${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
        }
    } else if (currentTimeElement) {
        currentTimeElement.textContent = '--:--:--';
    }
};

const updateNextFinish = (current) => {
    const currentTimeElement = document.querySelector('.stage_time_next_ende');
    if (currentTimeElement && current !== null) {
        const isNegative = current < 0;
        const absCurrent = Math.abs(current);
        const hours = Math.floor(absCurrent / (60 * 60 * 1000));
        const minutes = Math.floor((absCurrent % (60 * 60 * 1000)) / (60 * 1000));
        const seconds = Math.floor((absCurrent % (60 * 1000)) / 1000);

        if (hours > 0) {
            currentTimeElement.textContent = `${isNegative ? '-' : ''}${String(hours).padStart(2, '0')}:${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
        } else {
            currentTimeElement.textContent = `${isNegative ? '-' : ''}${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
        }
    } else if (currentTimeElement) {
        currentTimeElement.textContent = '--:--:--';
    }
};

const updateProgressBar = (elapsed, duration) => {
    const progressBarElement = document.querySelector('.aktueller-cue-fortschritt');
    if (progressBarElement && duration > 0) {
        const percentage = Math.min((elapsed / duration) * 100, 100);
        progressBarElement.style.width = `${percentage}%`;
    }
};

// Fetch project name via REST endpoint, since WS payload doesn't include it
const fetchProjectName = async () => {
    try {
        const response = await fetch(`/data/project`);
        if (!response.ok) {
            throw new Error(`Failed to fetch project name: ${response.statusText}`);
        }
        const data = await response.json();
        if (data.title) {
            updateProjectHeader(data.title);
        }
    } catch (error) {
        console.error('Error fetching project name:', error);
    }
};

// Update the live clock from WS payload (ms since midnight)
function updateClock(clockMs) {
    const el = document.querySelector('.uhr__time');
    if (!el) return;
    const now = new Date(clockMs);
    const hh = leftPad(now.getUTCHours());
    const mm = leftPad(now.getMinutes());
    const ss = leftPad(now.getSeconds());
    el.textContent = `${hh}:${mm}:${ss}`;
}

// Blink the current cue card green briefly
function makeTitleCardBlinkGreen() {
    const el = document.querySelector('.aktueller-cue');
    if (el) {
        el.classList.add('blink');
        setTimeout(() => el.classList.remove('blink'), 3000);
    }
}

async function updateInfos(customData) {
    // 1) Container auswählen
    const container = document.querySelector('.cue-info-aktuell');
    if (!container) return;

    // 2) Farben per HTTP laden
    let colorMap = {};
    try {
        const res = await fetch('/data/custom-fields', {
            headers: { 'Accept': 'application/json' }
        });
        if (res.ok) {
            colorMap = await res.json();
        } else {
            console.warn(`Fetch Farben fehlgeschlagen: ${res.status}`);
        }
    } catch (err) {
        console.error('Fehler beim Laden der Custom-Farben:', err);
    }

    // 3) Alte Einträge entfernen
    container.innerHTML = '';

    // 4) Neue Einträge bauen
    Object.entries(customData).forEach(([key, value]) => {
        const wrapper = document.createElement('div');

        // Label mit Farbe aus colorMap (Fallback #888)
        const label = document.createElement('span');
        label.classList.add('cue-infos__label');
        label.textContent = key;
        label.style.backgroundColor = colorMap[key].colour || 'rgba(255, 255, 255, 0.8)';

        // Text
        const text = document.createElement('div');
        text.classList.add('cue-infos__text', 'beschriftung');
        text.textContent = value;

        wrapper.append(label, text);
        container.append(wrapper);
    });
}

async function updateNextInfos(customData) {
    // 1) Container auswählen
    const container = document.querySelector('.cue-info-next');
    if (!container) return;

    // 2) Farben per HTTP laden
    let colorMap = {};
    try {
        const res = await fetch('/data/custom-fields', {
            headers: { 'Accept': 'application/json' }
        });
        if (res.ok) {
            colorMap = await res.json();
        } else {
            console.warn(`Fetch Farben fehlgeschlagen: ${res.status}`);
        }
    } catch (err) {
        console.error('Fehler beim Laden der Custom-Farben:', err);
    }

    // 3) Alte Einträge entfernen
    container.innerHTML = '';

    // 4) Neue Einträge bauen
    Object.entries(customData).forEach(([key, value]) => {
        const wrapper = document.createElement('div');

        // Label mit Farbe aus colorMap (Fallback #888)
        const label = document.createElement('span');
        label.classList.add('cue-infos__label');
        label.textContent = key;
        label.style.backgroundColor = colorMap[key].colour || 'rgba(255, 255, 255, 0.8)';

        // Text
        const text = document.createElement('div');
        text.classList.add('cue-infos__text', 'beschriftung');
        text.textContent = value;

        wrapper.append(label, text);
        container.append(wrapper);
    });
}

async function updateNextTwoCues() {
    try {
        const res = await fetch('/data/rundown', {
            headers: { 'Accept': 'application/json' }
        });
        if (!res.ok) throw new Error(`Status ${res.status}`);
        const data = await res.json();

        if (Array.isArray(data)) {
            // 1. Array: zuerst alle block-Items rausfiltern,
            //    dann auf jedem verbleibenden Element rekursiv anwenden.
            return data
                .filter(item => !(item && item.type === 'block'))
                .map(item => filterOutBlocks(item));
        }
        else if (data !== null && typeof data === 'object') {
            // 2. Objekt: für jede Property rekursiv anwenden
            const result = {};
            for (const [key, val] of Object.entries(data)) {
                const filteredVal = filterOutBlocks(val);
                // optional: nur setzen, wenn filteredVal nicht undefined ist
                if (filteredVal !== undefined) {
                    result[key] = filteredVal;
                }
            }
            return result;
        }

        console.log(data);


    } catch (err) {
        console.error('Fehler beim Laden des Rundown:', err);
    }
}

function resetView() {
    document.querySelector('.updateTitelNow').textContent = "--";
    document.querySelector('.updateTitelNext').textContent = "--";
    document.querySelector('.aktueller-block').textContent = "--";
    document.querySelector('.cue-info-aktuell').innerHTML = "";
    document.querySelector('.cue-info-next').innerHTML = "";
    document.querySelector('.aktueller-cue-fortschritt').style.width = `0%`;
    document.querySelector('.stage_time_next_start').textContent = "--:--:--";
    document.querySelector('.stage_time_next_ende').textContent = "--:--:--";
    document.querySelector('.stage_time_next').textContent = "--:--:--";
    document.querySelector('.block-zeit').textContent = "--:--:--";

}

// WebSocket connection & reconnection logic
function connectWebSocket() {
    const protocol = location.protocol === 'https:' ? 'wss' : 'ws';
    const url = `${protocol}://${location.hostname}:${location.port}/ws`;
    const ws = new WebSocket(url);

    ws.onopen = () => {
        console.log('WebSocket connected to', url);
        //makeTitleCardBlinkGreen();
        fetchProjectName();
    };

    ws.onclose = e => {
        console.warn(`WebSocket closed (code=${e.code}), reconnecting...`);
        setTimeout(connectWebSocket, 1000);
    };

    ws.onerror = err => console.error('WebSocket error:', err);

    let offset = 0;

    ws.onmessage = ({ data }) => {
        let msg;
        try {
            msg = JSON.parse(data);
        } catch {
            return console.error('Invalid JSON:', data);
        }
        const { type, payload } = msg;
        switch (type) {
            case 'ontime-clock':
                updateClock(payload);
                break;
            case 'ontime-timer':
                updateTimerCurrent(payload.current);
                updateexpectedFinish(payload.expectedFinish);
                updateCueStart(payload.startedAt);
                updateProgressBar(payload.elapsed, payload.duration);
                break;
            case 'ontime-runtime':
                console.log('runtime');
                console.log(payload);
                updateOffset(payload.offset);
                offset = payload.offset;
                updatePosition(payload.selectedEventIndex, payload.numEvents)
                updateNextTwoCues(payload.selectedEventIndex);
                if (payload.selectedEventIndex == null) {
                    resetView();
                }
                break;
            case 'ontime':
                console.log('ontime');
                console.log(payload);
                updateTitelNow(payload.eventNow.title);
                updateOffset(payload.runtime.offset);
                offset = payload.runtime.offset;
                updateTitelNext(payload.eventNext.title);
                updateTimerNext(payload.eventNext.duration);
                updateNextStart(payload.eventNext.timeStart - offset);
                updateNextFinish(payload.eventNext.timeEnd - offset);
                updatePosition(payload.runtime.selectedEventIndex, payload.runtime.numEvents)
                updateInfos(payload.eventNow.custom);
                updateNextInfos(payload.eventNext.custom);
                updateTitelNow(payload.event.Now.title);
            case 'ontime-eventNow':
                console.log('ontime-eventNow');
                console.log(payload);
                updateTitelNow(payload.title);
                updateInfos(payload.custom);
                break;
            case 'ontime-eventNext':
                console.log('ontime-eventNext');
                console.log(payload);
                updateTitelNext(payload.title);
                updateTimerNext(payload.duration);
                updateNextFinish(payload.timeEnd - offset);
                updateNextStart(payload.timeStart - offset);
                updateNextInfos(payload.custom);
                break;
            case 'ontime-currentBlock':
                updateAktuellerBlock(payload.block.title);
            default:
                console.debug('Unhandled WS type:', type);
                console.log(payload);
        }
    };
}

// Initialize
connectWebSocket();
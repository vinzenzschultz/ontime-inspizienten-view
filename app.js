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
        document.querySelector('.updateTitelNow').textContent = "--"
    } else {
        document.querySelector('.updateTitelNow').textContent = name;
        makeTitleCardBlinkGreen();
    }
}

function updateTitelNext(name) {
    if (name == null) {
        document.querySelector('.updateTitelNext').textContent = "--"
    } else {
        document.querySelector('.updateTitelNext').textContent = name;
        makeTitleCardBlinkGreen();
    }
}

function updatePosition(zaehler, nenner) {
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

function updateInfos(customData) {
    // Container auswählen (passt ggf. den Selector an, wenn du mehrere .cue-info hast)
    const container = document.querySelector('.cue-info-aktuell');
    if (!container) return;

    // Alle alten Einträge entfernen
    container.innerHTML = '';

    // Für jeden Eintrag in customData ein neues DIV bauen
    Object.entries(customData).forEach(([key, value]) => {
        // Wrapper DIV
        const wrapper = document.createElement('div');

        // Label
        const label = document.createElement('span');
        label.classList.add('cue-infos__label');
        label.textContent = key;

        // Text
        const text = document.createElement('div');
        text.classList.add('cue-infos__text', 'beschriftung');
        text.textContent = value;

        // Einfügen
        wrapper.append(label, text);
        container.append(wrapper);
    });
}

function updateNextInfos(customData) {
    // Container auswählen (passt ggf. den Selector an, wenn du mehrere .cue-info hast)
    const container = document.querySelector('.cue-info-next');
    if (!container) return;

    // Alle alten Einträge entfernen
    container.innerHTML = '';

    // Für jeden Eintrag in customData ein neues DIV bauen
    Object.entries(customData).forEach(([key, value]) => {
        // Wrapper DIV
        const wrapper = document.createElement('div');

        // Label
        const label = document.createElement('span');
        label.classList.add('cue-infos__label');
        label.textContent = key;

        // Text
        const text = document.createElement('div');
        text.classList.add('cue-infos__text', 'beschriftung');
        text.textContent = value;

        // Einfügen
        wrapper.append(label, text);
        container.append(wrapper);
    });
}

// WebSocket connection & reconnection logic
function connectWebSocket() {
    const protocol = location.protocol === 'https:' ? 'wss' : 'ws';
    const url = `${protocol}://${location.hostname}:${location.port}/ws`;
    const ws = new WebSocket(url);

    ws.onopen = () => {
        console.log('WebSocket connected to', url);
        //makeTitleCardBlinkGreen();            // blink cue card
        fetchProjectName();                  // load project title via REST
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
            default:
                console.debug('Unhandled WS type:', type);
                console.log(payload);
        }
    };
}

// Initialize
connectWebSocket();
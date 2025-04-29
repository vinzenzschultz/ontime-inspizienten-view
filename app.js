const leftPad = (num) => String(num).padStart(2, "0");

// Update project title in the header
function updateProjectHeader(name) {
  document.getElementById("projekttitel").innerText = name;
}

function updateTitelNow(name) {
  if (name == null) {
    document.querySelector(".updateTitelNow").textContent = "--";
  } else {
    document.querySelector(".updateTitelNow").innerHTML =
      '<span class="beschriftung_dunkler paddingRechts">Jetzt</span>' + name;
    makeTitleCardBlinkGreen();
  }
}

function updateAktuellerBlock(name) {
  if (name == null) {
    document.querySelector(".aktueller-block").textContent = "--";
  } else {
    document.querySelector(".aktueller-block").textContent = name;
  }
}

function updateTitelNext(name) {
  if (name == null) {
    document.querySelector(".updateTitelNext").textContent = "--";
  } else {
    document.querySelector(".updateTitelNext").innerHTML =
      '<span class="beschriftung_dunkler paddingRechts">Next</span>' + name;
  }
}

function updatePosition(zaehler, nenner) {
  if (zaehler == null) {
    zaehler = "--";
  } else {
    zaehler += +1;
  }
  document.getElementById("stage_time_position").innerText =
    String(zaehler) + "/" + String(nenner);
}

const updateTimerCurrent = (current) => {
  const currentTimeElement = document.querySelector(".stage_time_aktuell");
  if (currentTimeElement && current !== null) {
    const isNegative = current < 0;
    const absCurrent = Math.abs(current);
    const hours = Math.floor(absCurrent / (60 * 60 * 1000));
    const minutes = Math.floor((absCurrent % (60 * 60 * 1000)) / (60 * 1000));
    const seconds = Math.floor((absCurrent % (60 * 1000)) / 1000);

    if (hours > 0) {
      currentTimeElement.textContent = `${isNegative ? "-" : ""}${String(
        hours
      ).padStart(2, "0")}:${String(minutes).padStart(2, "0")}:${String(
        seconds
      ).padStart(2, "0")}`;
    } else {
      currentTimeElement.textContent = `${isNegative ? "-" : ""}${String(
        minutes
      ).padStart(2, "0")}:${String(seconds).padStart(2, "0")}`;
    }
  } else if (currentTimeElement) {
    currentTimeElement.textContent = "--:--:--";
  }
};

const updateTimeInBlock = (uhrzeit, blockzeit) => {
  const currentTimeElement = document.querySelector(".block-zeit");
  let current = uhrzeit - blockzeit;
  if (currentTimeElement && current !== null) {
    const isNegative = current < 0;
    const absCurrent = Math.abs(current);
    const hours = Math.floor(absCurrent / (60 * 60 * 1000));
    const minutes = Math.floor((absCurrent % (60 * 60 * 1000)) / (60 * 1000));
    const seconds = Math.floor((absCurrent % (60 * 1000)) / 1000);

    if (hours > 0) {
      currentTimeElement.textContent = `${isNegative ? "-" : ""}${String(
        hours
      ).padStart(2, "0")}:${String(minutes).padStart(2, "0")}:${String(
        seconds
      ).padStart(2, "0")}`;
    } else {
      currentTimeElement.textContent = `${isNegative ? "-" : ""}${String(
        minutes
      ).padStart(2, "0")}:${String(seconds).padStart(2, "0")}`;
    }
  } else if (currentTimeElement) {
    currentTimeElement.textContent = "--:--:--";
  }
};

const updateTimerNext = (current) => {
  const currentTimeElement = document.querySelector(".stage_time_next");
  if (currentTimeElement && current !== null) {
    const isNegative = current < 0;
    const absCurrent = Math.abs(current);
    const hours = Math.floor(absCurrent / (60 * 60 * 1000));
    const minutes = Math.floor((absCurrent % (60 * 60 * 1000)) / (60 * 1000));
    const seconds = Math.floor((absCurrent % (60 * 1000)) / 1000);

    if (hours > 0) {
      currentTimeElement.textContent = `${isNegative ? "-" : ""}${String(
        hours
      ).padStart(2, "0")}:${String(minutes).padStart(2, "0")}:${String(
        seconds
      ).padStart(2, "0")}`;
    } else {
      currentTimeElement.textContent = `${isNegative ? "-" : ""}${String(
        minutes
      ).padStart(2, "0")}:${String(seconds).padStart(2, "0")}`;
    }
  } else if (currentTimeElement) {
    currentTimeElement.textContent = "--:--:--";
  }
};

const updateCueStart = (current) => {
  const currentTimeElement = document.querySelector(".stage_timer_start");
  if (currentTimeElement && current !== null) {
    const isNegative = current < 0;
    const absCurrent = Math.abs(current);
    const hours = Math.floor(absCurrent / (60 * 60 * 1000));
    const minutes = Math.floor((absCurrent % (60 * 60 * 1000)) / (60 * 1000));
    const seconds = Math.floor((absCurrent % (60 * 1000)) / 1000);

    currentTimeElement.textContent = `${isNegative ? "-" : ""}${String(
      hours
    ).padStart(2, "0")}:${String(minutes).padStart(2, "0")}:${String(
      seconds
    ).padStart(2, "0")}`;
  } else if (currentTimeElement) {
    currentTimeElement.textContent = "--:--:--";
  }
};

const updateNextStart = (current) => {
  const currentTimeElement = document.querySelector(".stage_time_next_start");
  if (currentTimeElement && current !== null) {
    const isNegative = current < 0;
    const absCurrent = Math.abs(current);
    const hours = Math.floor(absCurrent / (60 * 60 * 1000));
    const minutes = Math.floor((absCurrent % (60 * 60 * 1000)) / (60 * 1000));
    const seconds = Math.floor((absCurrent % (60 * 1000)) / 1000);

    currentTimeElement.textContent = `${isNegative ? "-" : ""}${String(
      hours
    ).padStart(2, "0")}:${String(minutes).padStart(2, "0")}:${String(
      seconds
    ).padStart(2, "0")}`;
  } else if (currentTimeElement) {
    currentTimeElement.textContent = "--:--:--";
  }
};

const updateOffset = (current) => {
  const currentTimeElement = document.querySelector(".stage_time_offset");
  if (currentTimeElement && current !== null) {
    const isNegative = current < 0;
    const absCurrent = Math.abs(current);
    const hours = Math.floor(absCurrent / (60 * 60 * 1000));
    const minutes = Math.floor((absCurrent % (60 * 60 * 1000)) / (60 * 1000));
    const seconds = Math.floor((absCurrent % (60 * 1000)) / 1000);

    if (hours > 0) {
      currentTimeElement.textContent = `${isNegative ? "-" : ""}${String(
        hours
      ).padStart(2, "0")}:${String(minutes).padStart(2, "0")}:${String(
        seconds
      ).padStart(2, "0")}`;
    } else {
      currentTimeElement.textContent = `${isNegative ? "-" : ""}${String(
        minutes
      ).padStart(2, "0")}:${String(seconds).padStart(2, "0")}`;
    }
  } else if (currentTimeElement) {
    currentTimeElement.textContent = "--:--:--";
  }
};

const updateexpectedFinish = (current) => {
  const currentTimeElement = document.querySelector(".stage_timer_ende");
  if (currentTimeElement && current !== null) {
    const isNegative = current < 0;
    const absCurrent = Math.abs(current);
    const hours = Math.floor(absCurrent / (60 * 60 * 1000));
    const minutes = Math.floor((absCurrent % (60 * 60 * 1000)) / (60 * 1000));
    const seconds = Math.floor((absCurrent % (60 * 1000)) / 1000);

    currentTimeElement.textContent = `${isNegative ? "-" : ""}${String(
      hours
    ).padStart(2, "0")}:${String(minutes).padStart(2, "0")}:${String(
      seconds
    ).padStart(2, "0")}`;
  } else if (currentTimeElement) {
    currentTimeElement.textContent = "--:--:--";
  }
};

const updateNextFinish = (current) => {
  const currentTimeElement = document.querySelector(".stage_time_next_ende");
  if (currentTimeElement && current !== null) {
    const isNegative = current < 0;
    const absCurrent = Math.abs(current);
    const hours = Math.floor(absCurrent / (60 * 60 * 1000));
    const minutes = Math.floor((absCurrent % (60 * 60 * 1000)) / (60 * 1000));
    const seconds = Math.floor((absCurrent % (60 * 1000)) / 1000);

    currentTimeElement.textContent = `${isNegative ? "-" : ""}${String(
      hours
    ).padStart(2, "0")}:${String(minutes).padStart(2, "0")}:${String(
      seconds
    ).padStart(2, "0")}`;
  } else if (currentTimeElement) {
    currentTimeElement.textContent = "--:--:--";
  }
};

const updateProgressBar = (elapsed, duration) => {
  const progressBarElement = document.querySelector(
    ".aktueller-cue-fortschritt"
  );
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
    console.error("Error fetching project name:", error);
  }
};

// Update the live clock from WS payload (ms since midnight)
function updateClock(clockMs) {
  const el = document.querySelector(".uhr__time");
  if (!el) return;
  const now = new Date(clockMs);
  const hh = leftPad(now.getUTCHours());
  const mm = leftPad(now.getMinutes());
  const ss = leftPad(now.getSeconds());
  el.textContent = `${hh}:${mm}:${ss}`;
}

// Blink the current cue card green briefly
async function makeTitleCardBlinkGreen() {
  const el = document.querySelector(".aktueller-cue");
  if (el) {
    el.classList.add("blink");
    setTimeout(() => el.classList.remove("blink"), 3000);
  }
}

async function updateInfos(customData) {
  // 1) Container auswählen
  const container = document.querySelector(".cue-info-aktuell");
  if (!container) return;

  // 2) Farben per HTTP laden
  let colorMap = {};
  try {
    const res = await fetch("/data/custom-fields", {
      headers: { Accept: "application/json" },
    });
    if (res.ok) {
      colorMap = await res.json();
    } else {
      console.warn(`Fetch Farben fehlgeschlagen: ${res.status}`);
    }
  } catch (err) {
    console.error("Fehler beim Laden der Custom-Farben:", err);
  }

  // 3) Alte Einträge entfernen
  container.innerHTML = "";

  // 4) Neue Einträge bauen
  Object.entries(customData).forEach(([key, value]) => {
    const wrapper = document.createElement("div");

    // Label mit Farbe aus colorMap (Fallback #888)
    const label = document.createElement("span");
    label.classList.add("cue-infos__label");
    label.textContent = key;
    label.style.backgroundColor =
      colorMap[key].colour || "rgba(255, 255, 255, 0.8)";

    // Text
    const text = document.createElement("div");
    text.classList.add("cue-infos__text", "beschriftung");
    text.textContent = value;

    wrapper.append(label, text);
    container.append(wrapper);
  });
}

async function updateNextInfos(customData) {
  // 1) Container auswählen
  const container = document.querySelector(".cue-info-next");
  if (!container) return;

  // 2) Farben per HTTP laden
  let colorMap = {};
  try {
    const res = await fetch("/data/custom-fields", {
      headers: { Accept: "application/json" },
    });
    if (res.ok) {
      colorMap = await res.json();
    } else {
      console.warn(`Fetch Farben fehlgeschlagen: ${res.status}`);
    }
  } catch (err) {
    console.error("Fehler beim Laden der Custom-Farben:", err);
  }

  // 3) Alte Einträge entfernen
  container.innerHTML = "";

  // 4) Neue Einträge bauen
  Object.entries(customData).forEach(([key, value]) => {
    const wrapper = document.createElement("div");

    // Label mit Farbe aus colorMap (Fallback #888)
    const label = document.createElement("span");
    label.classList.add("cue-infos__label");
    label.textContent = key;
    label.style.backgroundColor =
      colorMap[key].colour || "rgba(255, 255, 255, 0.8)";

    // Text
    const text = document.createElement("div");
    text.classList.add("cue-infos__text", "beschriftung");
    text.textContent = value;

    wrapper.append(label, text);
    container.append(wrapper);
  });
}

async function fetchRundownAndUpdate(currentEventId) {
  try {
    const res = await fetch("/data/rundown", {
      headers: { Accept: "application/json" },
    });
    if (!res.ok) {
      console.error(`Rundown-Fetch fehlgeschlagen: ${res.status}`);
      return;
    }
    const data = await res.json();
    // Dein API liefert evtl. direkt ein Array oder ein Objekt { rundown: [...] }
    const events = Array.isArray(data)
      ? data
      : Array.isArray(data.rundown)
      ? data.rundown
      : [];

    updateUpcomingLabels(events, currentEventId);
  } catch (err) {
    console.error("Fehler beim Laden des Rundowns:", err);
  }
}

function updateUpcomingLabels(events = [], currentEventId) {
  if (!Array.isArray(events)) events = [];

  // 1. Finde Index des aktuellen Events
  const idx = events.findIndex((event) => event.id === currentEventId);

  // Wenn nicht gefunden, setzen wir idx auf -1, damit slice bei 0 losgeht
  let i;
  try {
    if (events[idx + 1].type == "block") {
      i = 3;
    } else {
      i = 2;
    }
  } catch {}
  const start = idx >= 0 ? idx + i : 0;

  // 2. Nächste zwei Events ab diesem Punkt entnehmen
  const nextTwo = events.slice(start, start + 2);

  // 3. In die Labels schreiben (FALLBACK '--')
  nextTwo.forEach((evt, i) => {
    const labelEl = document.querySelector(`.demnaechsttext${i + 1}`);
    labelEl.textContent = evt?.title ?? "--";

    // Falls Event ein Block ist, span hinzufügen
    if (evt?.type === "block") {
      const span = document.createElement("span");
      span.classList.add("beschriftung_dunkler");
      span.textContent = " [Block]";
      labelEl.append(span);
    }
  });

  // 4. Falls weniger als zwei Events vorhanden, restliche Labels auf '--' setzen
  for (let i = nextTwo.length; i < 2; i++) {
    const labelEl = document.querySelector(`.demnaechsttext${i + 1}`);
    if (labelEl) labelEl.textContent = "--";
  }
}

function resetView() {
  document.querySelector(".updateTitelNow").textContent = "--";
  document.querySelector(".aktueller-block").textContent = "--";
  document.querySelector(".cue-info-aktuell").innerHTML = "";
  document.querySelector(".aktueller-cue-fortschritt").style.width = `0%`;
  document.querySelector(".block-zeit").textContent = "--:--:--";
  resetViewNext();
}

function resetViewNext() {
  document.querySelector(".stage_time_next_start").textContent = "--:--:--";
  document.querySelector(".stage_time_next_ende").textContent = "--:--:--";
  document.querySelector(".stage_time_next").textContent = "--:--:--";
  document.querySelector(".cue-info-next").innerHTML = "";
  document.querySelector(".updateTitelNext").textContent = "--";
  document.querySelector(".demnaechsttext1").textContent = "--";
  document.querySelector(".demnaechsttext2").textContent = "--";
}

// WebSocket connection & reconnection logic
function connectWebSocket() {
  const protocol = location.protocol === "https:" ? "wss" : "ws";
  const url = `${protocol}://${location.hostname}:${location.port}/ws`;
  const ws = new WebSocket(url);

  ws.onopen = () => {
    console.log("WebSocket connected to", url);
    //makeTitleCardBlinkGreen();
    fetchProjectName();
  };

  ws.onclose = (e) => {
    console.warn(`WebSocket closed (code=${e.code}), reconnecting...`);
    setTimeout(connectWebSocket, 1000);
  };

  ws.onerror = (err) => console.error("WebSocket error:", err);

  let offset = 0;
  let blocktime = null;
  let nextStart;
  let nextEnde;
  let nextEvent;

  ws.onmessage = ({ data }) => {
    let msg;
    try {
      msg = JSON.parse(data);
    } catch {
      return console.error("Invalid JSON:", data);
    }
    const { type, payload } = msg;
    switch (type) {
      case "ontime-clock":
        updateClock(payload);
        if (blocktime != null) {
          updateTimeInBlock(payload, blocktime);
        }
        break;
      case "ontime-timer":
        updateTimerCurrent(payload.current);
        updateexpectedFinish(payload.expectedFinish);
        updateCueStart(payload.startedAt);
        updateProgressBar(payload.elapsed, payload.duration);
        if (nextEvent) {
          updateNextFinish(nextEnde - offset);
          updateNextStart(nextStart - offset);
        }
        break;
      case "ontime-runtime":
        updateOffset(payload.offset);
        offset = payload.offset;
        updatePosition(payload.selectedEventIndex, payload.numEvents);
        if (payload.selectedEventIndex == null) {
          blocktime = 0;
          resetView();
        }
        break;
      case "ontime":
        if (payload.eventNow) {
          updateTitelNow(payload.eventNow.title);
          updateInfos(payload.eventNow.custom);
        }
        updateOffset(payload.runtime.offset);
        offset = payload.runtime.offset;
        if (payload.eventNext) {
          nextEvent = true;
          updateTitelNext(payload.eventNext.title);
          updateTimerNext(payload.eventNext.duration);
          nextStart = payload.eventNext.timeStart;
          updateNextStart(payload.eventNext.timeStart - offset);
          nextEnde = payload.eventNext.timeEnd;
          updateNextFinish(payload.eventNext.timeEnd - offset);
          updateNextInfos(payload.eventNext.custom);
        }
        updatePosition(
          payload.runtime.selectedEventIndex,
          payload.runtime.numEvents
        );
        if (payload.currentBlock.block) {
          updateAktuellerBlock(payload.currentBlock.block.title);
        } else {
          updateAktuellerBlock("--");
        }
        blocktime = payload.currentBlock.startedAt;
        if (payload.eventNow) {
          fetchRundownAndUpdate(payload.eventNow.id);
        }
        break;
      case "ontime-eventNow":
        if (payload == null) {
          resetView();
          nextEvent = false;
        } else {
          updateTitelNow(payload.title);
          updateInfos(payload.custom);
          fetchRundownAndUpdate(payload.id);
        }
        break;
      case "ontime-eventNext":
        if (payload == null) {
          resetViewNext();
          nextEvent = false;
        } else {
          nextEvent = true;
          updateTitelNext(payload.title);
          updateTimerNext(payload.duration);
          nextEnde = payload.timeEnd;
          updateNextFinish(payload.timeEnd - offset);
          nextStart = payload.timeStart;
          updateNextStart(payload.timeStart - offset);
          updateNextInfos(payload.custom);
        }
        break;
      case "ontime-currentBlock":
        blocktime = payload.startedAt;
        if (payload.block != null) {
          updateAktuellerBlock(payload.block.title);
        } else {
          updateAktuellerBlock("--");
        }
        break;
      default:
        //console.debug("Unhandled WS type:", type);
        //console.log(payload);
        break;
    }
  };
}


const LOCK_TIMEOUT = 3000; // 5 seconds

// ----- HTTP Command Functions -----
async function sendBackCommandHttp() {
  try {
    const res = await fetch("/api/start/previous", { method: "GET" });
    if (!res.ok) throw new Error(`Server responded with ${res.status}`);
  } catch (err) {
    console.error("Error sending Back command:", err);
  }
}

async function sendPauseCommandHttp() {
  try {
    document.getElementById("start-btn").style.display = "block";
    document.getElementById("pause-btn").style.display = "none";
    const res = await fetch("/api/pause", { method: "GET" });
    if (!res.ok) throw new Error(`Server responded with ${res.status}`);
  } catch (err) {
    console.error("Error sending Pause command:", err);
  }
}

async function sendGoCommandHttp() {
  try {
    const res = await fetch("/api/start/next", { method: "GET" });
    if (!res.ok) throw new Error(`Server responded with ${res.status}`);
  } catch (err) {
    console.error("Error sending Go command:", err);
  }
}

async function sendStartCommandHttp() {
  try {
    document.getElementById("start-btn").style.display = "none";
    document.getElementById("pause-btn").style.display = "block";
    const res = await fetch("/api/start", { method: "GET" });
    if (!res.ok) throw new Error(`Server responded with ${res.status}`);
    makeTitleCardBlinkGreen();
  } catch (err) {
    console.error("Error sending Start command:", err);
  }
}

async function sendGotoCommandHttp(id) {
  try {
    document.getElementById("start-btn").style.display = "block";
    document.getElementById("pause-btn").style.display = "none";
    const res = await fetch(`/api/load/id/${id}`, { method: "GET" });
    if (!res.ok) throw new Error(`Server responded with ${res.status}`);
  } catch (err) {
    console.error("Error sending Goto command:", err);
  }
}

// ----- Goto Dropdown -----
function toggleGotoList() {
  const existing = document.querySelector(".goto-list");
  if (existing) {
    existing.remove();
    document.removeEventListener("click", outsideClickListener);
    return;
  }
  const gotoBtn = document.getElementById("goto-btn");
  if (!gotoBtn) return;
  const list = document.createElement("div");
  list.className = "goto-list";
  // fetch rundown
  fetch("/data/rundown")
    .then((res) => res.json())
    .then((data) => {
      const events = Array.isArray(data)
        ? data
        : Array.isArray(data.rundown)
        ? data.rundown
        : [];
      events.forEach((evt) => {
        const item = document.createElement("div");
        if (evt.type == "block") {
          item.className = "goto-item beschriftung_dunkler";
          let titel = evt.title || evt.name || "--";
          item.textContent = titel + " [Block]";
        } else {
          item.className = "goto-item";
          item.textContent = evt.title || evt.name || "--";
        }
        if (evt.type != "block") {
          item.addEventListener("click", () => {
            sendGotoCommandHttp(evt.id);
            toggleGotoList();
          });
        }
        list.append(item);
      });
    })
    .catch((err) => console.error("Error loading rundown for Goto:", err));
  // position list over button
  gotoBtn.parentElement.style.position = "relative";
  list.style.position = "absolute";
  list.style.bottom = "105%";
  list.style.left = "42%";
  list.style.transform = "translateX(-37%)";
  list.style.background = "#101010";
  list.style.color = "rgba(255, 255, 255, 0.45)";
  list.style.border = "1px solid #101010";
  list.style.borderRadius = "4px";
  list.style.maxHeight = "60vh";
  list.style.overflowY = "auto";
  list.style.boxShadow = "0 2px 8px #101010";
  list.style.zIndex = "1000";
  list.style.padding = "10px";
  list.style.fontSize = "20px";
  gotoBtn.parentElement.append(list);
  document.addEventListener("click", outsideClickListener);
}

function outsideClickListener(e) {
  const list = document.querySelector(".goto-list");
  if (list && !list.contains(e.target) && e.target.id !== "goto-btn") {
    toggleGotoList();
  }
}

// ----- Setup Control Buttons -----
window.addEventListener("load", () => {
  const lockBtn = document.getElementById("lock-btn");
  const backBtn = document.getElementById("back-btn");
  const pauseBtn = document.getElementById("pause-btn");
  const goBtn = document.getElementById("go-ontime-btn");
  const startBtn = document.getElementById("start-btn");
  const gotoBtn = document.getElementById("goto-btn");

  const controlButtons = [backBtn, pauseBtn, goBtn, startBtn, gotoBtn];

  // initial lock
  lockBtn.classList.add("locked");
  controlButtons.forEach((btn) => (btn.disabled = true));

  // lock toggle
  lockBtn.addEventListener("click", () => {
    controlButtons.forEach((btn) => (btn.disabled = false));
    lockBtn.classList.remove("locked");
    setTimeout(() => {
      controlButtons.forEach((btn) => (btn.disabled = true));
      lockBtn.classList.add("locked");
    }, LOCK_TIMEOUT);
  });

  // command handlers
  backBtn.addEventListener("click", sendBackCommandHttp);
  pauseBtn.addEventListener("click", sendPauseCommandHttp);
  goBtn.addEventListener("click", sendGoCommandHttp);
  startBtn.addEventListener("click", sendStartCommandHttp);
  gotoBtn.addEventListener("click", (e) => {
    e.stopPropagation();
    toggleGotoList();
  });
});

connectWebSocket();

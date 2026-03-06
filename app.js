/* =========================================
   CATalyst Academy — app.js
   ENGL465 Interactive CAT Learning Platform
   ========================================= */

(() => {
  "use strict";

  const DATA = window.CATALYST_DATA;
  if (!DATA) {
    console.error("CATALYST_DATA not found. Make sure data.js is loaded before app.js.");
    return;
  }

  const STORAGE_KEY = "CATALYST_ACADEMY_STATE_V2";

  const $ = (sel, root = document) => root.querySelector(sel);
  const $$ = (sel, root = document) => Array.from(root.querySelectorAll(sel));

  const els = {
    welcomeScreen: $("#welcomeScreen"),
    enterWithMusicBtn: $("#enterWithMusicBtn"),
    enterMutedBtn: $("#enterMutedBtn"),

    navTabs: $$(".nav-tab"),
    sections: $$(".page-section"),
    statusLine: $("#statusLine"),

    toastStack: $("#toastStack"),

    modalOverlay: $("#modalOverlay"),
    modalTitle: $("#modalTitle"),
    modalBody: $("#modalBody"),
    closeModalBtn: $("#closeModalBtn"),

    bgAudio: $("#bgAudio"),
    musicToggleBtn: $("#musicToggleBtn"),
    prevTrackBtn: $("#prevTrackBtn"),
    nextTrackBtn: $("#nextTrackBtn"),
    musicVolume: $("#musicVolume"),

    globalSearchInput: $("#globalSearchInput"),
    globalSearchBtn: $("#globalSearchBtn"),
    searchResultsPanel: $("#searchResultsPanel"),

    statLevel: $("#statLevel"),
    statXP: $("#statXP"),
    statCoins: $("#statCoins"),
    statStreak: $("#statStreak"),
    masteryText: $("#masteryText"),
    masteryBar: $("#masteryBar"),
    completionText: $("#completionText"),
    completionBar: $("#completionBar"),
    dashboardBadges: $("#dashboardBadges"),

    dailyChallengeCard: $("#dailyChallengeCard"),
    dailyChallengeBtn: $("#dailyChallengeBtn"),
    openDailyChallengeBtn: $("#openDailyChallengeBtn"),

    snapshotList: $("#snapshotList"),

    topicCardGrid: $("#topicCardGrid"),
    topicQuickList: $("#topicQuickList"),
    topicFilters: $$(".topic-filter"),

    lessonCode: $("#lessonCode"),
    lessonTitle: $("#lessonTitle"),
    lessonMeta: $("#lessonMeta"),
    lessonOverview: $("#lessonOverview"),
    lessonDefinitions: $("#lessonDefinitions"),
    lessonKeyPoints: $("#lessonKeyPoints"),
    lessonExamples: $("#lessonExamples"),
    lessonProcess: $("#lessonProcess"),
    lessonCompare: $("#lessonCompare"),
    lessonExamTips: $("#lessonExamTips"),
    lessonCitations: $("#lessonCitations"),
    lessonToFlashcardsBtn: $("#lessonToFlashcardsBtn"),
    lessonToQuizBtn: $("#lessonToQuizBtn"),
    lessonToMindmapBtn: $("#lessonToMindmapBtn"),

    flashTopicSelect: $("#flashTopicSelect"),
    flashDifficultySelect: $("#flashDifficultySelect"),
    shuffleFlashcardsBtn: $("#shuffleFlashcardsBtn"),
    resetFlashDeckBtn: $("#resetFlashDeckBtn"),
    flashDeckLabel: $("#flashDeckLabel"),
    flashPositionLabel: $("#flashPositionLabel"),
    flashStatusLabel: $("#flashStatusLabel"),
    flashcard: $("#flashcard"),
    flipFlashcardBtn: $("#flipFlashcardBtn"),
    flashFrontText: $("#flashFrontText"),
    flashBackText: $("#flashBackText"),
    flashFrontMeta: $("#flashFrontMeta"),
    flashBackMeta: $("#flashBackMeta"),
    prevFlashcardBtn: $("#prevFlashcardBtn"),
    nextFlashcardBtn: $("#nextFlashcardBtn"),
    flashHardBtn: $("#flashHardBtn"),
    flashGoodBtn: $("#flashGoodBtn"),
    flashMasteredBtn: $("#flashMasteredBtn"),

    quizTopicSelect: $("#quizTopicSelect"),
    quizModeSelect: $("#quizModeSelect"),
    quizLengthSelect: $("#quizLengthSelect"),
    generateQuizBtn: $("#generateQuizBtn"),
    quizTopicLabel: $("#quizTopicLabel"),
    quizProgressLabel: $("#quizProgressLabel"),
    quizScoreLabel: $("#quizScoreLabel"),
    quizQuestionText: $("#quizQuestionText"),
    quizOptions: $("#quizOptions"),
    submitQuizAnswerBtn: $("#submitQuizAnswerBtn"),
    nextQuizQuestionBtn: $("#nextQuizQuestionBtn"),
    quizFeedback: $("#quizFeedback"),
    quizSummaryPanel: $("#quizSummaryPanel"),

    mindmapTopicSelect: $("#mindmapTopicSelect"),
    loadMindmapBtn: $("#loadMindmapBtn"),
    resetMindmapBtn: $("#resetMindmapBtn"),
    zoomInMindmapBtn: $("#zoomInMindmapBtn"),
    zoomOutMindmapBtn: $("#zoomOutMindmapBtn"),
    mindmapStage: $("#mindmapStage"),
    mindmapSvg: $("#mindmapSvg"),
    mindmapNodesLayer: $("#mindmapNodesLayer"),
    mindmapNodeDetails: $("#mindmapNodeDetails"),

    startRapidMatchBtn: $("#startRapidMatchBtn"),
    rapidStreakLabel: $("#rapidStreakLabel"),
    rapidBestLabel: $("#rapidBestLabel"),
    rapidTimerLabel: $("#rapidTimerLabel"),
    rapidPrompt: $("#rapidPrompt"),
    rapidOptions: $("#rapidOptions"),
    rapidFeedback: $("#rapidFeedback"),

    achievementPanel: $("#achievementPanel"),

    termLabInput: $("#termLabInput"),
    extractPatternBtn: $("#extractPatternBtn"),
    extractStatBtn: $("#extractStatBtn"),
    extractHybridBtn: $("#extractHybridBtn"),
    clearTermLabBtn: $("#clearTermLabBtn"),
    termLabOutput: $("#termLabOutput"),

    glossaryTermInput: $("#glossaryTermInput"),
    glossaryEquivalentInput: $("#glossaryEquivalentInput"),
    glossaryNoteInput: $("#glossaryNoteInput"),
    addGlossaryEntryBtn: $("#addGlossaryEntryBtn"),
    exportGlossaryBtn: $("#exportGlossaryBtn"),
    clearGlossaryBtn: $("#clearGlossaryBtn"),
    glossaryOutput: $("#glossaryOutput"),

    sourceFileGrid: $("#sourceFileGrid"),
    allCitationsPanel: $("#allCitationsPanel"),

    weakAreasPanel: $("#weakAreasPanel"),
    reviewChecklist: $("#reviewChecklist"),
    revisionPlanPanel: $("#revisionPlanPanel"),

    startFlashcardsBtn: $("#startFlashcardsBtn"),
    startMixedQuizBtn: $("#startMixedQuizBtn"),
    browseTopicsBtn: $("#browseTopicsBtn"),
    resetProgressBtn: $("#resetProgressBtn"),

    catalystCanvas: $("#catalystCanvas")
  };

  const mapsById = Object.fromEntries(DATA.topics.map(t => [t.id, t]));
  const achievementById = Object.fromEntries(DATA.achievements.map(a => [a.id, a]));

  function createDefaultState() {
    return {
      xp: 0,
      coins: 0,
      streak: 0,
      lastStudyDate: null,
      badges: [],
      sectionVisits: {},
      viewedTopics: {},
      flashRatings: {}, // -1 hard, 1 good, 2 mastered
      flashSeen: {},
      quizAttempted: 0,
      quizCorrect: 0,
      glossary: [],
      rapidBest: 0,
      currentTrackIndex: 0,
      musicEnabled: false,
      daily: {
        date: null,
        challengeId: null,
        progress: {
          flashMastered: 0,
          quizCorrect: 0,
          glossaryAdded: 0,
          mindmapOpened: 0,
          rapidWins: 0
        },
        claimed: false
      }
    };
  }

  function loadState() {
    try {
      const parsed = JSON.parse(localStorage.getItem(STORAGE_KEY) || "{}");
      return deepMerge(createDefaultState(), parsed);
    } catch {
      return createDefaultState();
    }
  }

  function deepMerge(base, extra) {
    if (!extra || typeof extra !== "object") return base;
    const out = { ...base };
    for (const k of Object.keys(extra)) {
      if (Array.isArray(extra[k])) out[k] = [...extra[k]];
      else if (extra[k] && typeof extra[k] === "object" && !Array.isArray(base[k])) {
        out[k] = deepMerge(base[k] || {}, extra[k]);
      } else {
        out[k] = extra[k];
      }
    }
    return out;
  }

  let state = loadState();

  let currentTopicId = DATA.topics[0]?.id || null;

  let flashDeck = [];
  let flashIndex = 0;

  let currentQuiz = {
    items: [],
    index: 0,
    score: 0,
    selected: null,
    locked: false,
    summary: []
  };

  let musicTrackIndex = state.currentTrackIndex || 0;
  let mindmapZoom = 1;
  let mindmapNodeRegistry = [];
  let rapidTimer = null;
  let rapidTimeLeft = 0;
  let rapidStreak = 0;

  /* ------------------------ Helpers ------------------------ */

  function saveState() {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
  }

  function todayKey() {
    const d = new Date();
    return `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, "0")}-${String(d.getDate()).padStart(2, "0")}`;
  }

  function escapeHtml(str) {
    return String(str)
      .replaceAll("&", "&amp;")
      .replaceAll("<", "&lt;")
      .replaceAll(">", "&gt;")
      .replaceAll('"', "&quot;")
      .replaceAll("'", "&#039;");
  }

  function shuffle(arr) {
    const a = [...arr];
    for (let i = a.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [a[i], a[j]] = [a[j], a[i]];
    }
    return a;
  }

  function sample(arr, n) {
    return shuffle(arr).slice(0, n);
  }

  function getLevelFromXP(xp) {
    return Math.floor(xp / 120) + 1;
  }

  function masteredCount() {
    return Object.values(state.flashRatings).filter(v => v >= 2).length;
  }

  function newCount() {
    return DATA.flashcards.filter(c => !state.flashSeen[c.id]).length;
  }

  function uniqueSectionCount() {
    return Object.keys(state.sectionVisits).length;
  }

  function viewedTopicCount() {
    return Object.keys(state.viewedTopics).length;
  }

  function flashStatusLabel(val) {
    if (val >= 2) return "Mastered";
    if (val === 1) return "Good";
    if (val === -1) return "Hard";
    return "New";
  }

  function setStatus(text) {
    if (els.statusLine) els.statusLine.textContent = text;
  }

  function toast(message, type = "info", ms = 2600) {
    const div = document.createElement("div");
    div.className = `toast ${type}`;
    div.innerHTML = message;
    els.toastStack.appendChild(div);
    setTimeout(() => {
      div.style.opacity = "0";
      div.style.transform = "translateY(-4px)";
      setTimeout(() => div.remove(), 240);
    }, ms);
  }

  function openModal(title, html) {
    els.modalTitle.textContent = title;
    els.modalBody.innerHTML = html;
    els.modalOverlay.classList.remove("hidden");
    els.modalOverlay.setAttribute("aria-hidden", "false");
  }

  function closeModal() {
    els.modalOverlay.classList.add("hidden");
    els.modalOverlay.setAttribute("aria-hidden", "true");
  }

  function award(xp, coins, reason) {
    state.xp += xp;
    state.coins += coins;
    saveState();
    renderProgress();
    renderAchievements();
    renderDailyChallenge();
    maybeUnlockAchievements();
    setStatus(`+${xp} XP, +${coins} coins — ${reason}`);
    toast(`<strong>${reason}</strong><br>+${xp} XP • +${coins} coins`, "success");
  }

  function incrementDailyProgress(type, amount = 1) {
    ensureDailyChallengeState();
    if (typeof state.daily.progress[type] === "number") {
      state.daily.progress[type] += amount;
      saveState();
      renderDailyChallenge();
      maybeClaimDailyChallenge();
    }
  }

  function ensureDailyChallengeState() {
    const today = todayKey();
    if (state.daily.date !== today) {
      const challenge = getTodayChallenge();
      state.daily = {
        date: today,
        challengeId: challenge.id,
        progress: {
          flashMastered: 0,
          quizCorrect: 0,
          glossaryAdded: 0,
          mindmapOpened: 0,
          rapidWins: 0
        },
        claimed: false
      };
      saveState();
    }
  }

  function touchStudyDay() {
    const today = todayKey();
    if (!state.lastStudyDate) {
      state.streak = 1;
      state.lastStudyDate = today;
      saveState();
      return;
    }
    if (state.lastStudyDate === today) return;

    const last = new Date(state.lastStudyDate + "T00:00:00");
    const now = new Date(today + "T00:00:00");
    const diff = Math.round((now - last) / 86400000);

    state.streak = diff === 1 ? state.streak + 1 : 1;
    state.lastStudyDate = today;
    saveState();
  }

  function markSectionVisit(id) {
    state.sectionVisits[id] = (state.sectionVisits[id] || 0) + 1;
    saveState();
    maybeUnlockAchievements();
  }

  function markTopicViewed(topicId) {
    state.viewedTopics[topicId] = true;
    saveState();
    renderProgress();
  }

  function maybeUnlockAchievements(extra = {}) {
    const unlocked = new Set(state.badges);
    const unlock = (id) => {
      if (!unlocked.has(id)) {
        unlocked.add(id);
        state.badges.push(id);
        toast(`Badge unlocked: <strong>${escapeHtml(achievementById[id]?.label || id)}</strong>`, "success", 3200);
      }
    };

    if (uniqueSectionCount() >= 3) unlock("explorer");
    if (Object.keys(state.flashRatings).length >= 1) unlock("flashStarter");
    if (masteredCount() >= 5) unlock("flashMaster5");
    if (masteredCount() >= 15) unlock("flashMaster15");
    if (state.quizCorrect >= 1) unlock("quizStarter");
    if (state.glossary.length >= 5) unlock("terminologist");
    if (state.streak >= 3) unlock("streak3");
    if (state.xp >= 500) unlock("scholar500");
    if (extra.quizAce) unlock("quizAce");
    if (extra.mindMapper) unlock("mindMapper");

    saveState();
    renderAchievements();
    renderProgress();
  }

  function getTodayChallenge() {
    const idx = new Date().getDate() % DATA.dailyChallenges.length;
    return DATA.dailyChallenges[idx];
  }

  function maybeClaimDailyChallenge() {
    const challenge = getTodayChallenge();
    const progress = state.daily.progress[challenge.type] || 0;
    if (progress >= challenge.goal && !state.daily.claimed) {
      state.daily.claimed = true;
      saveState();
      award(40, 15, "Daily challenge completed");
    }
  }

  function currentTopic() {
    return mapsById[currentTopicId] || DATA.topics[0];
  }

  function goToSection(sectionId) {
    els.sections.forEach(sec => sec.classList.toggle("active", sec.id === sectionId));
    els.navTabs.forEach(tab => tab.classList.toggle("active", tab.dataset.target === sectionId));
    markSectionVisit(sectionId);
    setStatus(`Opened: ${sectionId.replace("Section", "")}`);
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  /* ------------------------ Render: Dashboard ------------------------ */

  function renderProgress() {
    const level = getLevelFromXP(state.xp);
    const mastered = masteredCount();
    const masteryPct = Math.round((mastered / DATA.flashcards.length) * 100);

    const topicProgress = viewedTopicCount() / DATA.topics.length;
    const flashProgress = mastered / DATA.flashcards.length;
    const quizProgress = DATA.quizzes.length ? Math.min(state.quizAttempted / DATA.quizzes.length, 1) : 0;
    const completion = Math.round(((topicProgress + flashProgress + quizProgress) / 3) * 100);

    els.statLevel.textContent = level;
    els.statXP.textContent = state.xp;
    els.statCoins.textContent = state.coins;
    els.statStreak.textContent = state.streak;

    els.masteryText.textContent = `${masteryPct}%`;
    els.masteryBar.style.width = `${masteryPct}%`;

    els.completionText.textContent = `${completion}%`;
    els.completionBar.style.width = `${completion}%`;

    const badgeHtml = state.badges.length
      ? state.badges.map(id => `<span class="badge">${escapeHtml(achievementById[id]?.label || id)}</span>`).join("")
      : `<span class="muted">No badges yet.</span>`;

    els.dashboardBadges.innerHTML = badgeHtml;
  }

  function renderSnapshot() {
    els.snapshotList.innerHTML = DATA.snapshotPoints
      .map(point => `<div class="bullet-item">${escapeHtml(point)}</div>`)
      .join("");
  }

  function renderDailyChallenge() {
    ensureDailyChallengeState();
    const challenge = getTodayChallenge();
    const progress = state.daily.progress[challenge.type] || 0;
    const done = state.daily.claimed ? "✅ Completed" : `${progress} / ${challenge.goal}`;

    els.dailyChallengeCard.innerHTML = `
      <div><strong>${escapeHtml(challenge.text)}</strong></div>
      <div class="muted" style="margin-top:8px">Progress: ${done}</div>
      <div class="muted" style="margin-top:6px">Reward: 40 XP + 15 coins</div>
    `;
  }

  /* ------------------------ Render: Topics ------------------------ */

  function renderTopicCards(filter = "all") {
    const topics = filter === "all" ? DATA.topics : DATA.topics.filter(t => t.category === filter);

    els.topicCardGrid.innerHTML = topics.map(topic => `
      <article class="topic-card" data-topic-id="${topic.id}">
        <div style="display:flex;justify-content:space-between;gap:10px;align-items:flex-start">
          <span class="topic-code">${escapeHtml(topic.code)}</span>
          <span class="meta-pill">${escapeHtml(topic.category)}</span>
        </div>
        <h3>${escapeHtml(topic.title)}</h3>
        <p>${escapeHtml(topic.overview[0])}</p>
        <div class="bullet-list">
          ${topic.keyPoints.slice(0, 3).map(p => `<div class="bullet-item">${escapeHtml(p)}</div>`).join("")}
        </div>
        <div class="muted">${escapeHtml(topic.source.file)} • ${escapeHtml(topic.source.pages)}</div>
        <div class="toolbar">
          <button class="btn btn-small btn-primary open-topic-btn" data-topic-id="${topic.id}">Open Lesson</button>
        </div>
      </article>
    `).join("");
  }

  function renderTopicQuickList() {
    els.topicQuickList.innerHTML = DATA.topics.map(topic => `
      <button class="stack-item quick-topic-btn" data-topic-id="${topic.id}">
        <strong>${escapeHtml(topic.code)}</strong><br>
        <span class="muted">${escapeHtml(topic.title)}</span>
      </button>
    `).join("");
  }

  function renderLesson(topicId) {
    const topic = mapsById[topicId];
    if (!topic) return;

    currentTopicId = topicId;
    markTopicViewed(topicId);

    els.lessonCode.textContent = topic.code;
    els.lessonTitle.textContent = topic.title;
    els.lessonMeta.textContent = `${topic.source.file} • ${topic.source.pages}`;

    els.lessonOverview.innerHTML = topic.overview.map(x => `<div class="bullet-item">${escapeHtml(x)}</div>`).join("");
    els.lessonDefinitions.innerHTML = topic.definitions.map(d => `
      <div class="definition-item">
        <div class="definition-term"><strong>${escapeHtml(d.term)}</strong></div>
        <div class="muted">${escapeHtml(d.meaning)}</div>
      </div>
    `).join("");
    els.lessonKeyPoints.innerHTML = topic.keyPoints.map(x => `<div class="bullet-item">${escapeHtml(x)}</div>`).join("");
    els.lessonExamples.innerHTML = topic.examples.map(x => `<div class="bullet-item">${escapeHtml(x)}</div>`).join("");
    els.lessonProcess.innerHTML = topic.process.map(step => `
      <div class="timeline-step">
        <div class="timeline-marker">${escapeHtml(step.step)}</div>
        <div class="timeline-content">
          <strong>${escapeHtml(step.title)}</strong><br>
          <span class="muted">${escapeHtml(step.detail)}</span>
        </div>
      </div>
    `).join("");

    els.lessonCompare.innerHTML = `
      <table class="compare-table">
        <thead>
          <tr>${topic.compare.headers.map(h => `<th>${escapeHtml(h)}</th>`).join("")}</tr>
        </thead>
        <tbody>
          ${topic.compare.rows.map(row => `<tr>${row.map(cell => `<td>${escapeHtml(cell)}</td>`).join("")}</tr>`).join("")}
        </tbody>
      </table>
    `;

    els.lessonExamTips.innerHTML = topic.examTips.map(x => `<div class="bullet-item">${escapeHtml(x)}</div>`).join("");
    els.lessonCitations.innerHTML = topic.citations.map(c => `
      <div class="citation-item">
        <div class="source-file"><strong>${escapeHtml(c.label)}</strong></div>
        <div class="source-page">${escapeHtml(c.file)} • ${escapeHtml(c.page)}</div>
      </div>
    `).join("");

    setStatus(`Loaded lesson: ${topic.title}`);
  }

  /* ------------------------ Render: Flashcards ------------------------ */

  function fillTopicSelects() {
    const topicOptions = DATA.topics.map(t =>
      `<option value="${t.id}">${escapeHtml(t.code)} — ${escapeHtml(t.title)}</option>`
    ).join("");

    els.flashTopicSelect.innerHTML = `<option value="all">All Topics</option>${topicOptions}`;
    els.quizTopicSelect.innerHTML = `<option value="all">All Topics</option>${topicOptions}`;
    els.mindmapTopicSelect.innerHTML = topicOptions;
  }

  function buildFlashDeck() {
    const topicFilter = els.flashTopicSelect.value;
    const statusFilter = els.flashDifficultySelect.value;

    let deck = DATA.flashcards.filter(card => topicFilter === "all" ? true : card.topicId === topicFilter);

    if (statusFilter === "weak") deck = deck.filter(c => (state.flashRatings[c.id] || 0) < 2);
    if (statusFilter === "new") deck = deck.filter(c => !state.flashSeen[c.id]);
    if (statusFilter === "mastered") deck = deck.filter(c => (state.flashRatings[c.id] || 0) >= 2);

    if (!deck.length) deck = DATA.flashcards.filter(card => topicFilter === "all" ? true : card.topicId === topicFilter);

    flashDeck = deck;
    flashIndex = 0;
    renderFlashcard();
  }

  function renderFlashcard() {
    if (!flashDeck.length) {
      els.flashFrontText.textContent = "No cards in this deck.";
      els.flashBackText.textContent = "Try another filter.";
      return;
    }

    const card = flashDeck[flashIndex];
    const rating = state.flashRatings[card.id] || 0;

    state.flashSeen[card.id] = true;
    saveState();

    els.flashcard.classList.remove("flipped");
    els.flashFrontText.textContent = card.front;
    els.flashBackText.textContent = card.back;
    els.flashFrontMeta.textContent = card.ref;
    els.flashBackMeta.textContent = card.ref;
    els.flashDeckLabel.textContent = `Deck: ${els.flashTopicSelect.selectedOptions[0].textContent}`;
    els.flashPositionLabel.textContent = `Card ${flashIndex + 1} / ${flashDeck.length}`;
    els.flashStatusLabel.textContent = `Status: ${flashStatusLabel(rating)}`;
  }

  function rateFlashcard(value) {
    if (!flashDeck.length) return;
    const card = flashDeck[flashIndex];
    const old = state.flashRatings[card.id] || 0;
    state.flashRatings[card.id] = value;
    saveState();

    if (value === 1) award(8, 2, "Good flashcard");
    if (value >= 2) {
      award(14, 4, "Mastered flashcard");
      if (old < 2) incrementDailyProgress("flashMastered", 1);
    }
    maybeUnlockAchievements();
    renderFlashcard();

    setTimeout(() => {
      flashIndex = (flashIndex + 1) % flashDeck.length;
      renderFlashcard();
    }, 180);
  }

  /* ------------------------ Render: Quiz ------------------------ */

  function generateQuiz() {
    const topicId = els.quizTopicSelect.value;
    const mode = els.quizModeSelect.value;
    const length = Number(els.quizLengthSelect.value);

    let pool = [...DATA.quizzes];
    if (mode === "topic" && topicId !== "all") pool = pool.filter(q => q.topicId === topicId);
    if (mode === "topic" && topicId === "all") pool = [...DATA.quizzes];
    if (mode === "mixed") pool = [...DATA.quizzes];
    if (mode === "exam") pool = shuffle(DATA.quizzes).sort((a, b) => (a.difficulty || "").localeCompare(b.difficulty || ""));

    currentQuiz = {
      items: sample(pool, Math.min(length, pool.length)),
      index: 0,
      score: 0,
      selected: null,
      locked: false,
      summary: []
    };

    renderQuizQuestion();
    setStatus("Quiz generated.");
  }

  function renderQuizQuestion() {
    const q = currentQuiz.items[currentQuiz.index];
    if (!q) {
      els.quizQuestionText.textContent = "Generate a quiz to begin.";
      els.quizOptions.innerHTML = "";
      return;
    }

    currentQuiz.selected = null;
    currentQuiz.locked = false;

    const topicName = els.quizModeSelect.value === "mixed"
      ? "Mixed Quiz"
      : (els.quizTopicSelect.selectedOptions[0]?.textContent || "Quiz");

    els.quizTopicLabel.textContent = `Topic: ${topicName}`;
    els.quizProgressLabel.textContent = `Question ${currentQuiz.index + 1} / ${currentQuiz.items.length}`;
    els.quizScoreLabel.textContent = `Score: ${currentQuiz.score}`;
    els.quizQuestionText.textContent = q.question;

    els.quizOptions.innerHTML = q.options.map((opt, idx) => `
      <div class="quiz-option" data-index="${idx}">${escapeHtml(opt)}</div>
    `).join("");

    els.quizFeedback.innerHTML = `Select an answer and submit.<br><span class="muted">${escapeHtml(q.ref)}</span>`;


    $$(".quiz-option", els.quizOptions).forEach(opt => {
      opt.addEventListener("click", () => {
        if (currentQuiz.locked) return;

        $$(".quiz-option", els.quizOptions).forEach(x => x.classList.remove("selected"));
        opt.classList.add("selected");
        currentQuiz.selected = Number(opt.dataset.index);
      });
    });

    renderQuizSummary();
  }

  function renderQuizSummary() {
    els.quizSummaryPanel.innerHTML = currentQuiz.items.map((item, idx) => {
      const result = currentQuiz.summary[idx];
      let status = "Pending";
      if (result === true) status = "✅ Correct";
      if (result === false) status = "❌ Incorrect";
      return `
        <div class="stack-item">
          <strong>Q${idx + 1}</strong><br>
          <span class="muted">${escapeHtml(status)}</span>
        </div>
      `;
    }).join("");
  }

  function submitQuizAnswer() {
    if (currentQuiz.locked) return;
    const q = currentQuiz.items[currentQuiz.index];
    if (!q) return;

    if (currentQuiz.selected === null) {
      toast("Select an answer first.", "warning");
      return;
    }

    currentQuiz.locked = true;
    state.quizAttempted += 1;

    const options = $$(".quiz-option", els.quizOptions);
    options.forEach((opt, idx) => {
      if (idx === q.answer) opt.classList.add("correct");
      if (idx === currentQuiz.selected && idx !== q.answer) opt.classList.add("wrong");
    });

    const correct = currentQuiz.selected === q.answer;
    currentQuiz.summary[currentQuiz.index] = correct;

    if (correct) {
      currentQuiz.score += 1;
      state.quizCorrect += 1;
      incrementDailyProgress("quizCorrect", 1);
      award(20, 5, "Correct quiz answer");
      els.quizFeedback.innerHTML = `<strong>Correct.</strong> ${escapeHtml(q.explanation)}<br><span class="muted">${escapeHtml(q.ref)}</span>`;
    } else {
      els.quizFeedback.innerHTML = `<strong>Incorrect.</strong> ${escapeHtml(q.explanation)}<br><span class="muted">Correct answer: ${escapeHtml(q.options[q.answer])} • ${escapeHtml(q.ref)}</span>`;
    }

    saveState();
    renderQuizSummary();
    els.quizScoreLabel.textContent = `Score: ${currentQuiz.score}`;
    maybeUnlockAchievements();
  }

  function nextQuizQuestion() {
    if (!currentQuiz.items.length) return;
    if (currentQuiz.index < currentQuiz.items.length - 1) {
      currentQuiz.index += 1;
      renderQuizQuestion();
      return;
    }

    const finalPct = Math.round((currentQuiz.score / currentQuiz.items.length) * 100);
    if (finalPct >= 80) maybeUnlockAchievements({ quizAce: true });

    els.quizFeedback.innerHTML = `
      <strong>Quiz complete.</strong><br>
      Final score: ${currentQuiz.score}/${currentQuiz.items.length} (${finalPct}%)
    `;
    toast(`Quiz finished: ${currentQuiz.score}/${currentQuiz.items.length}`, "success", 3200);
    setStatus(`Quiz finished: ${currentQuiz.score}/${currentQuiz.items.length}`);
  }

  /* ------------------------ Render: Mind Maps ------------------------ */

  function applyMindmapZoom() {
    const scale = `scale(${mindmapZoom})`;
    els.mindmapNodesLayer.style.transform = scale;
    els.mindmapNodesLayer.style.transformOrigin = "top left";
    els.mindmapSvg.style.transform = scale;
    els.mindmapSvg.style.transformOrigin = "top left";
  }

  function renderMindmap(topicId) {
    const map = DATA.mindmaps[topicId];
    if (!map) return;

    maybeUnlockAchievements({ mindMapper: true });
    incrementDailyProgress("mindmapOpened", 1);

    els.mindmapSvg.innerHTML = "";
    els.mindmapNodesLayer.innerHTML = "";
    mindmapNodeRegistry = [];

    const centerX = 800;
    const centerY = 500;
    const branchRadius = 280;
    const childRadius = 190;

    const centerNode = {
      id: `${topicId}-center`,
      x: centerX,
      y: centerY,
      label: map.center.label,
      note: map.center.note,
      citation: map.center.citation,
      type: "center",
      visible: true
    };
    mindmapNodeRegistry.push(centerNode);

    const branchAngleStep = (Math.PI * 2) / Math.max(map.branches.length, 1);

    map.branches.forEach((branch, i) => {
      const angle = -Math.PI / 2 + i * branchAngleStep;
      const bx = centerX + Math.cos(angle) * branchRadius;
      const by = centerY + Math.sin(angle) * branchRadius;

      const branchNode = {
        id: `${topicId}-branch-${i}`,
        parentId: centerNode.id,
        x: bx,
        y: by,
        label: branch.label,
        note: branch.note,
        citation: branch.citation,
        type: "primary",
        visible: true,
        expanded: false
      };
      mindmapNodeRegistry.push(branchNode);

      const childStep = branch.children.length > 1 ? 0.5 / (branch.children.length - 1) : 0;
      branch.children.forEach((child, j) => {
        const childAngle = angle - 0.25 + j * childStep;
        const cx = bx + Math.cos(childAngle) * childRadius;
        const cy = by + Math.sin(childAngle) * childRadius;

        mindmapNodeRegistry.push({
          id: `${topicId}-child-${i}-${j}`,
          parentId: branchNode.id,
          x: cx,
          y: cy,
          label: child.label,
          note: child.note,
          citation: child.citation,
          type: "secondary",
          visible: false
        });
      });
    });

    drawMindmapLinks();
    drawMindmapNodes(topicId);
    renderMindmapDetails(centerNode);
    applyMindmapZoom();
    setStatus(`Mind map loaded: ${mapsById[topicId]?.title || topicId}`);
  }

  function drawMindmapLinks() {
    const svgNS = "http://www.w3.org/2000/svg";
    const nodesById = Object.fromEntries(mindmapNodeRegistry.map(n => [n.id, n]));

    mindmapNodeRegistry.forEach(node => {
      if (!node.parentId || !node.visible) return;
      const parent = nodesById[node.parentId];
      if (!parent || !parent.visible) return;

      const line = document.createElementNS(svgNS, "line");
      line.setAttribute("x1", parent.x);
      line.setAttribute("y1", parent.y);
      line.setAttribute("x2", node.x);
      line.setAttribute("y2", node.y);
      line.setAttribute("stroke", "rgba(97,139,255,0.25)");
      line.setAttribute("stroke-width", "2");
      els.mindmapSvg.appendChild(line);
    });
  }

  function drawMindmapNodes(topicId) {
    els.mindmapNodesLayer.innerHTML = "";
    els.mindmapSvg.innerHTML = "";
    drawMindmapLinks();

    const nodesById = Object.fromEntries(mindmapNodeRegistry.map(n => [n.id, n]));

    mindmapNodeRegistry.forEach(node => {
      if (!node.visible) return;

      const div = document.createElement("button");
      div.className = `mindmap-node ${node.type}`;
      div.style.left = `${node.x - (node.type === "center" ? 100 : 80)}px`;
      div.style.top = `${node.y - 30}px`;
      div.innerHTML = `
        <div class="node-title">${escapeHtml(node.label)}</div>
        <div class="node-mini">${escapeHtml(node.citation || "")}</div>
      `;
      div.addEventListener("click", () => {

        $$(".mindmap-node", els.mindmapNodesLayer).forEach(n => n.classList.remove("active"));
        div.classList.add("active");

        if (node.type === "primary") {
          const children = mindmapNodeRegistry.filter(n => n.parentId === node.id);
          const currentlyVisible = children.some(c => c.visible);
          children.forEach(c => c.visible = !currentlyVisible);
          drawMindmapNodes(topicId);
        }

        renderMindmapDetails(node, nodesById);
      });

      els.mindmapNodesLayer.appendChild(div);
    });
  }

  function renderMindmapDetails(node, nodesById = null) {
    const children = mindmapNodeRegistry.filter(n => n.parentId === node.id);
    els.mindmapNodeDetails.innerHTML = `
      <h4>${escapeHtml(node.label)}</h4>
      <p>${escapeHtml(node.note || "No note available.")}</p>
      <div class="node-tags">
        <span class="node-tag">${escapeHtml(node.type)}</span>
        ${node.citation ? `<span class="node-tag">${escapeHtml(node.citation)}</span>` : ""}
      </div>
      ${children.length ? `
        <h5>Connected Ideas</h5>
        <div class="stack-list">
          ${children.map(c => `<div class="stack-item"><strong>${escapeHtml(c.label)}</strong><br><span class="muted">${escapeHtml(c.note)}</span></div>`).join("")}
        </div>
      ` : ""}
      <div class="toolbar" style="margin-top:12px">
        <button class="btn btn-small" id="openNodeModalBtn">Open Detail View</button>
      </div>
    `;

    const modalBtn = $("#openNodeModalBtn");
    if (modalBtn) {
      modalBtn.addEventListener("click", () => {
        openModal(node.label, `
          <p>${escapeHtml(node.note || "")}</p>
          <p><strong>Citation:</strong> ${escapeHtml(node.citation || "—")}</p>
          ${children.length ? `<hr><p><strong>Connected Ideas:</strong></p><ul>${children.map(c => `<li>${escapeHtml(c.label)} — ${escapeHtml(c.note)}</li>`).join("")}</ul>` : ""}
        `);
      });
    }
  }

  /* ------------------------ Render: Rapid Match ------------------------ */

  function clearRapidTimer() {
    if (rapidTimer) {
      clearInterval(rapidTimer);
      rapidTimer = null;
    }
  }

  function startRapidMatch() {
    clearRapidTimer();
    const card = DATA.flashcards[Math.floor(Math.random() * DATA.flashcards.length)];
    const wrongAnswers = sample(DATA.flashcards.filter(c => c.id !== card.id), 3).map(c => c.back);
    const options = shuffle([card.back, ...wrongAnswers]);

    rapidTimeLeft = 15;
    els.rapidTimerLabel.textContent = `Time: ${rapidTimeLeft}s`;
    els.rapidPrompt.textContent = card.front;
    els.rapidFeedback.textContent = "Choose the correct answer before time runs out.";

    els.rapidOptions.innerHTML = options.map((opt, idx) => `
      <div class="quiz-option rapid-option" data-correct="${opt === card.back ? "1" : "0"}">${escapeHtml(opt)}</div>
    `).join("");


    $$(".rapid-option", els.rapidOptions).forEach(opt => {
      opt.addEventListener("click", () => {
        if (!rapidTimer) return;
        clearRapidTimer();
        const correct = opt.dataset.correct === "1";


        $$(".rapid-option", els.rapidOptions).forEach(o => {
          const isCorrect = o.dataset.correct === "1";
          if (isCorrect) o.classList.add("correct");
          if (o === opt && !isCorrect) o.classList.add("wrong");
          o.style.pointerEvents = "none";
        });

        if (correct) {
          rapidStreak += 1;
          if (rapidStreak > state.rapidBest) state.rapidBest = rapidStreak;
          incrementDailyProgress("rapidWins", 1);
          award(12, 3, "Rapid Match win");
          els.rapidFeedback.innerHTML = `<strong>Correct.</strong> ${escapeHtml(card.ref)}`;
        } else {
          rapidStreak = 0;
          els.rapidFeedback.innerHTML = `<strong>Incorrect.</strong> ${escapeHtml(card.ref)}`;
        }

        saveState();
        renderRapidStats();
        setTimeout(() => startRapidMatch(), 900);
      });
    });

    rapidTimer = setInterval(() => {
      rapidTimeLeft -= 1;
      els.rapidTimerLabel.textContent = `Time: ${rapidTimeLeft}s`;
      if (rapidTimeLeft <= 0) {
        clearRapidTimer();
        rapidStreak = 0;
        renderRapidStats();
        els.rapidFeedback.innerHTML = `<strong>Time up.</strong> Correct answer highlighted.`;

        $$(".rapid-option", els.rapidOptions).forEach(o => {
          if (o.dataset.correct === "1") o.classList.add("correct");
          o.style.pointerEvents = "none";
        });
      }
    }, 1000);

    renderRapidStats();
  }

  function renderRapidStats() {
    els.rapidStreakLabel.textContent = `Streak: ${rapidStreak}`;
    els.rapidBestLabel.textContent = `Best: ${state.rapidBest || 0}`;
  }

  /* ------------------------ Term Lab / Glossary ------------------------ */

  function extractTerms(mode) {
    const text = els.termLabInput.value.trim();
    if (!text) {
      els.termLabOutput.textContent = "Paste text first.";
      return;
    }

    const stop = new Set([
      "the","a","an","and","or","but","to","of","in","on","for","with","by","as","is","are","was","were",
      "be","been","this","that","these","those","it","its","their","they","we","you","i","at","from","into",
      "over","under","than","then","which","who","whom","can","could","should","would","may","might","will","also","not"
    ]);

    const clean = text.replace(/[^\w\s\-']/g, " ").replace(/\s+/g, " ").trim();
    const tokens = clean.split(" ").filter(Boolean);
    const uni = new Map();
    const bi = new Map();

    for (let i = 0; i < tokens.length; i++) {
      const w = tokens[i].toLowerCase();
      if (w.length > 3 && !stop.has(w)) uni.set(w, (uni.get(w) || 0) + 1);
      if (i < tokens.length - 1) {
        const a = tokens[i].toLowerCase();
        const b = tokens[i + 1].toLowerCase();
        if (a.length > 2 && b.length > 2 && !stop.has(a) && !stop.has(b)) {
          const pair = `${a} ${b}`;
          bi.set(pair, (bi.get(pair) || 0) + 1);
        }
      }
    }

    const linguistic = new Set();
    const caps = text.match(/\b[A-Z][a-z]+(?:\s+[A-Z][a-z]+){0,2}\b/g) || [];
    caps.forEach(x => linguistic.add(x));
    const hyphenated = text.match(/\b\w+(?:-\w+)+\b/g) || [];
    hyphenated.forEach(x => linguistic.add(x));

    [
      "translation memory", "computer-assisted translation", "machine translation",
      "minority language", "post-editing", "term bank", "termbase", "sublanguage",
      "localization", "internationalization", "globalization"
    ].forEach(phrase => {
      if (text.toLowerCase().includes(phrase)) linguistic.add(phrase);
    });

    const statistical = new Set();
    for (const [term, count] of uni.entries()) if (count >= 2) statistical.add(term);
    for (const [term, count] of bi.entries()) if (count >= 2) statistical.add(term);

    let out = [];
    if (mode === "pattern") out = [...linguistic];
    if (mode === "stat") out = [...statistical];
    if (mode === "hybrid") out = [...new Set([...linguistic, ...statistical])];

    out = out.slice(0, 30);

    els.termLabOutput.innerHTML = out.length
      ? `
        <div><strong>${mode === "pattern" ? "Pattern-Based" : mode === "stat" ? "Frequency-Based" : "Hybrid"} Results</strong></div>
        <div style="margin-top:10px;display:flex;gap:8px;flex-wrap:wrap">
          ${out.map(t => `<span class="meta-pill">${escapeHtml(t)}</span>`).join("")}
        </div>
      `
      : "No candidate terms found. Try a longer or more technical text.";
  }

  function renderGlossary() {
    if (!state.glossary.length) {
      els.glossaryOutput.textContent = "No glossary entries yet.";
      return;
    }

    els.glossaryOutput.innerHTML = state.glossary.slice().reverse().map((g, idx) => `
      <div class="stack-item">
        <strong>${escapeHtml(g.term)}</strong> → ${escapeHtml(g.equivalent)}
        <br><span class="muted">${escapeHtml(g.note || "—")}</span>
      </div>
    `).join("");
  }

  function addGlossaryEntry() {
    const term = els.glossaryTermInput.value.trim();
    const equivalent = els.glossaryEquivalentInput.value.trim();
    const note = els.glossaryNoteInput.value.trim();

    if (!term || !equivalent) {
      toast("Enter both term and equivalent.", "warning");
      return;
    }

    state.glossary.push({ term, equivalent, note });
    saveState();
    renderGlossary();
    incrementDailyProgress("glossaryAdded", 1);
    award(6, 2, "Glossary entry added");
    maybeUnlockAchievements();

    els.glossaryTermInput.value = "";
    els.glossaryEquivalentInput.value = "";
    els.glossaryNoteInput.value = "";
  }

  /* ------------------------ Search ------------------------ */

  function searchAll(query) {
    const q = query.trim().toLowerCase();
    if (!q) {
      els.searchResultsPanel.innerHTML = `<p class="muted">Enter a search term.</p>`;
      return;
    }

    const hits = [];

    DATA.topics.forEach(topic => {
      const hay = [
        topic.code,
        topic.title,
        ...topic.overview,
        ...topic.keyPoints,
        ...topic.examples,
        ...topic.examTips
      ].join(" ").toLowerCase();

      if (hay.includes(q)) {
        hits.push({
          type: "Topic",
          title: topic.title,
          extra: `${topic.source.file} • ${topic.source.pages}`,
          action: () => {
            goToSection("topicsSection");
            renderLesson(topic.id);
          }
        });
      }
    });

    DATA.flashcards.forEach(card => {
      const hay = `${card.front} ${card.back} ${card.ref}`.toLowerCase();
      if (hay.includes(q)) {
        hits.push({
          type: "Flashcard",
          title: card.front,
          extra: card.ref,
          action: () => {
            goToSection("flashcardsSection");
            els.flashTopicSelect.value = card.topicId;
            els.flashDifficultySelect.value = "all";
            buildFlashDeck();
            const idx = flashDeck.findIndex(c => c.id === card.id);
            if (idx >= 0) {
              flashIndex = idx;
              renderFlashcard();
            }
          }
        });
      }
    });

    DATA.quizzes.forEach(qz => {
      const hay = `${qz.question} ${qz.options.join(" ")} ${qz.explanation} ${qz.ref}`.toLowerCase();
      if (hay.includes(q)) {
        hits.push({
          type: "Quiz",
          title: qz.question,
          extra: qz.ref,
          action: () => {
            goToSection("quizzesSection");
            els.quizTopicSelect.value = qz.topicId;
            els.quizModeSelect.value = "topic";
            generateQuiz();
          }
        });
      }
    });

    DATA.topics.forEach(topic => {
      topic.citations.forEach(c => {
        const hay = `${c.label} ${c.file} ${c.page}`.toLowerCase();
        if (hay.includes(q)) {
          hits.push({
            type: "Citation",
            title: c.label,
            extra: `${c.file} • ${c.page}`,
            action: () => {
              goToSection("topicsSection");
              renderLesson(topic.id);
            }
          });
        }
      });
    });

    if (!hits.length) {
      els.searchResultsPanel.innerHTML = `<p>No results for <strong>${escapeHtml(q)}</strong>.</p>`;
      return;
    }

    els.searchResultsPanel.innerHTML = hits.slice(0, 14).map((hit, idx) => `
      <div class="stack-item search-hit" data-hit-index="${idx}">
        <strong>${escapeHtml(hit.type)}</strong> — ${escapeHtml(hit.title)}<br>
        <span class="muted">${escapeHtml(hit.extra)}</span>
      </div>
    `).join("");


    $$(".search-hit", els.searchResultsPanel).forEach((el, idx) => {
      el.addEventListener("click", () => hits[idx].action());
    });
  }

  /* ------------------------ Sources / Review ------------------------ */

  function renderSources() {
    els.sourceFileGrid.innerHTML = DATA.topics.map(topic => `
      <div class="topic-card">
        <span class="topic-code">${escapeHtml(topic.code)}</span>
        <h3>${escapeHtml(topic.title)}</h3>
        <p>${escapeHtml(topic.source.file)} • ${escapeHtml(topic.source.pages)}</p>
        <div class="toolbar">
          <a class="btn btn-small" href="${escapeHtml(topic.source.path)}" target="_blank" rel="noopener">Open PDF</a>
        </div>
      </div>
    `).join("");

    const allCitations = DATA.topics.flatMap(topic =>
      topic.citations.map(c => ({
        topic: topic.title,
        ...c
      }))
    );

    els.allCitationsPanel.innerHTML = allCitations.map(c => `
      <div class="citation-item">
        <div class="source-file"><strong>${escapeHtml(c.topic)}</strong> — ${escapeHtml(c.label)}</div>
        <div class="source-page">${escapeHtml(c.file)} • ${escapeHtml(c.page)}</div>
      </div>
    `).join("");
  }

  function renderWeakAreas() {
    const weak = DATA.flashcards.filter(card => (state.flashRatings[card.id] || 0) < 2);

    els.weakAreasPanel.innerHTML = weak.length
      ? weak.slice(0, 20).map(card => `
        <div class="stack-item">
          <strong>${escapeHtml(card.front)}</strong><br>
          <span class="muted">${escapeHtml(card.ref)} • ${escapeHtml(flashStatusLabel(state.flashRatings[card.id] || 0))}</span>
        </div>
      `).join("")
      : `<p><strong>Excellent.</strong> All flashcards are currently mastered.</p>`;
  }

  function renderReviewChecklist() {
    els.reviewChecklist.innerHTML = DATA.reviewChecklist.map(item => `<div class="bullet-item">${escapeHtml(item)}</div>`).join("");
  }

  function renderRevisionPlan() {
    els.revisionPlanPanel.innerHTML = DATA.revisionPlan.map(step => `
      <div class="timeline-step">
        <div class="timeline-marker">${escapeHtml(step.step)}</div>
        <div class="timeline-content">
          <strong>${escapeHtml(step.title)}</strong><br>
          <span class="muted">${escapeHtml(step.detail)}</span>
        </div>
      </div>
    `).join("");
  }

  function renderAchievements() {
    els.achievementPanel.innerHTML = state.badges.length
      ? state.badges.map(id => `<span class="badge">${escapeHtml(achievementById[id]?.label || id)}</span>`).join("")
      : `<span class="muted">No badges unlocked yet.</span>`;
  }

  /* ------------------------ Music ------------------------ */

  function loadTrack(index) {
    if (!DATA.musicPlaylist.length) return;
    musicTrackIndex = (index + DATA.musicPlaylist.length) % DATA.musicPlaylist.length;
    const track = DATA.musicPlaylist[musicTrackIndex];
    els.bgAudio.src = track.file;
    els.bgAudio.dataset.title = track.title;
    state.currentTrackIndex = musicTrackIndex;
    saveState();
    setStatus(`Track loaded: ${track.title}`);
  }

  async function playMusic() {
    if (!DATA.musicPlaylist.length) {
      toast("No music playlist configured.", "warning");
      return;
    }
    if (!els.bgAudio.src) loadTrack(musicTrackIndex);
    els.bgAudio.volume = Number(els.musicVolume.value) / 100;
    try {
      await els.bgAudio.play();
      state.musicEnabled = true;
      saveState();
      els.musicToggleBtn.textContent = "❚❚ Music";
      setStatus(`Playing: ${els.bgAudio.dataset.title || "Track"}`);
    } catch {
      toast("Could not play music. Make sure the audio files exist in /audio.", "warning", 3600);
    }
  }

  function pauseMusic() {
    els.bgAudio.pause();
    state.musicEnabled = false;
    saveState();
    els.musicToggleBtn.textContent = "♪ Music";
    setStatus("Music paused.");
  }

  function toggleMusic() {
    if (els.bgAudio.paused) playMusic();
    else pauseMusic();
  }

  /* ------------------------ Background ------------------------ */

  function initCatalystBackground() {
    const canvas = els.catalystCanvas;
    const ctx = canvas.getContext("2d");
    let particles = [];

    function resize() {
      canvas.width = window.innerWidth * devicePixelRatio;
      canvas.height = window.innerHeight * devicePixelRatio;
      canvas.style.width = `${window.innerWidth}px`;
      canvas.style.height = `${window.innerHeight}px`;
      ctx.setTransform(devicePixelRatio, 0, 0, devicePixelRatio, 0, 0);

      const count = Math.max(34, Math.floor(window.innerWidth / 28));
      particles = Array.from({ length: count }, () => ({
        x: Math.random() * window.innerWidth,
        y: Math.random() * window.innerHeight,
        vx: (Math.random() - 0.5) * 0.55,
        vy: (Math.random() - 0.5) * 0.55,
        r: 1.2 + Math.random() * 2.4
      }));
    }

    function draw() {
      ctx.clearRect(0, 0, window.innerWidth, window.innerHeight);

      for (const p of particles) {
        p.x += p.vx;
        p.y += p.vy;
        if (p.x < 0 || p.x > window.innerWidth) p.vx *= -1;
        if (p.y < 0 || p.y > window.innerHeight) p.vy *= -1;

        const grad = ctx.createRadialGradient(p.x, p.y, 0, p.x, p.y, p.r * 7);
        grad.addColorStop(0, "rgba(23,181,156,0.26)");
        grad.addColorStop(0.6, "rgba(97,139,255,0.10)");
        grad.addColorStop(1, "rgba(97,139,255,0)");
        ctx.fillStyle = grad;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r * 7, 0, Math.PI * 2);
        ctx.fill();

        ctx.fillStyle = "rgba(23,181,156,0.28)";
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fill();
      }

      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const a = particles[i];
          const b = particles[j];
          const d = Math.hypot(a.x - b.x, a.y - b.y);
          if (d < 120) {
            ctx.strokeStyle = `rgba(97,139,255,${0.1 * (1 - d / 120)})`;
            ctx.lineWidth = 1;
            ctx.beginPath();
            ctx.moveTo(a.x, a.y);
            ctx.lineTo(b.x, b.y);
            ctx.stroke();
          }
        }
      }

      requestAnimationFrame(draw);
    }

    resize();
    draw();
    window.addEventListener("resize", resize);
  }

  /* ------------------------ Events ------------------------ */

  function bindEvents() {
    els.closeModalBtn.addEventListener("click", closeModal);
    els.modalOverlay.addEventListener("click", (e) => {
      if (e.target === els.modalOverlay) closeModal();
    });

    els.navTabs.forEach(tab => {
      tab.addEventListener("click", () => goToSection(tab.dataset.target));
    });

    els.enterWithMusicBtn.addEventListener("click", async () => {
      touchStudyDay();
      els.welcomeScreen.classList.add("hidden");
      loadTrack(musicTrackIndex);
      await playMusic();
      renderProgress();
    });

    els.enterMutedBtn.addEventListener("click", () => {
      touchStudyDay();
      els.welcomeScreen.classList.add("hidden");
      pauseMusic();
      renderProgress();
    });

    els.musicToggleBtn.addEventListener("click", toggleMusic);
    els.prevTrackBtn.addEventListener("click", async () => {
      loadTrack(musicTrackIndex - 1);
      await playMusic();
    });
    els.nextTrackBtn.addEventListener("click", async () => {
      loadTrack(musicTrackIndex + 1);
      await playMusic();
    });
    els.musicVolume.addEventListener("input", () => {
      els.bgAudio.volume = Number(els.musicVolume.value) / 100;
    });
    els.bgAudio.addEventListener("ended", async () => {
      loadTrack(musicTrackIndex + 1);
      await playMusic();
    });
    els.bgAudio.addEventListener("error", () => {
      toast("Audio file missing or could not be loaded.", "warning", 3600);
      pauseMusic();
    });

    els.globalSearchBtn.addEventListener("click", () => searchAll(els.globalSearchInput.value));
    els.globalSearchInput.addEventListener("keydown", (e) => {
      if (e.key === "Enter") searchAll(els.globalSearchInput.value);
    });

    els.startFlashcardsBtn.addEventListener("click", () => goToSection("flashcardsSection"));
    els.startMixedQuizBtn.addEventListener("click", () => {
      goToSection("quizzesSection");
      els.quizModeSelect.value = "mixed";
      generateQuiz();
    });
    els.browseTopicsBtn.addEventListener("click", () => goToSection("topicsSection"));

    els.dailyChallengeBtn.addEventListener("click", () => {
      const ch = getTodayChallenge();
      goToSection(ch.route);
    });
    els.openDailyChallengeBtn.addEventListener("click", () => {
      const ch = getTodayChallenge();
      goToSection(ch.route);
    });

    els.topicFilters.forEach(btn => {
      btn.addEventListener("click", () => {
        els.topicFilters.forEach(b => b.classList.remove("active"));
        btn.classList.add("active");
        renderTopicCards(btn.dataset.filter);
      });
    });

    els.topicCardGrid.addEventListener("click", (e) => {
      const btn = e.target.closest(".open-topic-btn");
      const card = e.target.closest("[data-topic-id]");
      const topicId = btn?.dataset.topicId || card?.dataset.topicId;
      if (!topicId) return;
      renderLesson(topicId);
      goToSection("topicsSection");
    });

    els.topicQuickList.addEventListener("click", (e) => {
      const btn = e.target.closest(".quick-topic-btn");
      if (!btn) return;
      renderLesson(btn.dataset.topicId);
    });

    els.lessonToFlashcardsBtn.addEventListener("click", () => {
      els.flashTopicSelect.value = currentTopicId;
      els.flashDifficultySelect.value = "all";
      buildFlashDeck();
      goToSection("flashcardsSection");
    });
    els.lessonToQuizBtn.addEventListener("click", () => {
      els.quizTopicSelect.value = currentTopicId;
      els.quizModeSelect.value = "topic";
      generateQuiz();
      goToSection("quizzesSection");
    });
    els.lessonToMindmapBtn.addEventListener("click", () => {
      els.mindmapTopicSelect.value = currentTopicId;
      renderMindmap(currentTopicId);
      goToSection("mindmapsSection");
    });

    els.flashTopicSelect.addEventListener("change", buildFlashDeck);
    els.flashDifficultySelect.addEventListener("change", buildFlashDeck);
    els.shuffleFlashcardsBtn.addEventListener("click", () => {
      flashDeck = shuffle(flashDeck);
      flashIndex = 0;
      renderFlashcard();
      setStatus("Flashcards shuffled.");
    });
    els.resetFlashDeckBtn.addEventListener("click", buildFlashDeck);
    els.flipFlashcardBtn.addEventListener("click", () => els.flashcard.classList.toggle("flipped"));
    els.flashcard.addEventListener("click", (e) => {
      if (e.target.closest("button")) return;
      els.flashcard.classList.toggle("flipped");
    });
    els.prevFlashcardBtn.addEventListener("click", () => {
      if (!flashDeck.length) return;
      flashIndex = (flashIndex - 1 + flashDeck.length) % flashDeck.length;
      renderFlashcard();
    });
    els.nextFlashcardBtn.addEventListener("click", () => {
      if (!flashDeck.length) return;
      flashIndex = (flashIndex + 1) % flashDeck.length;
      renderFlashcard();
    });
    els.flashHardBtn.addEventListener("click", () => rateFlashcard(-1));
    els.flashGoodBtn.addEventListener("click", () => rateFlashcard(1));
    els.flashMasteredBtn.addEventListener("click", () => rateFlashcard(2));

    els.generateQuizBtn.addEventListener("click", generateQuiz);
    els.submitQuizAnswerBtn.addEventListener("click", submitQuizAnswer);
    els.nextQuizQuestionBtn.addEventListener("click", nextQuizQuestion);

    els.loadMindmapBtn.addEventListener("click", () => {
      renderMindmap(els.mindmapTopicSelect.value);
    });
    els.resetMindmapBtn.addEventListener("click", () => {
      mindmapZoom = 1;
      applyMindmapZoom();
      renderMindmap(els.mindmapTopicSelect.value);
    });
    els.zoomInMindmapBtn.addEventListener("click", () => {
      mindmapZoom = Math.min(2.2, mindmapZoom + 0.15);
      applyMindmapZoom();
    });
    els.zoomOutMindmapBtn.addEventListener("click", () => {
      mindmapZoom = Math.max(0.7, mindmapZoom - 0.15);
      applyMindmapZoom();
    });

    els.startRapidMatchBtn.addEventListener("click", startRapidMatch);

    els.extractPatternBtn.addEventListener("click", () => extractTerms("pattern"));
    els.extractStatBtn.addEventListener("click", () => extractTerms("stat"));
    els.extractHybridBtn.addEventListener("click", () => extractTerms("hybrid"));
    els.clearTermLabBtn.addEventListener("click", () => {
      els.termLabInput.value = "";
      els.termLabOutput.textContent = "Candidate terms will appear here.";
    });

    els.addGlossaryEntryBtn.addEventListener("click", addGlossaryEntry);
    els.exportGlossaryBtn.addEventListener("click", () => {
      if (!state.glossary.length) {
        toast("No glossary entries to export.", "warning");
        return;
      }
      const rows = ["TERM\tEQUIVALENT\tNOTE", ...state.glossary.map(g => `${g.term}\t${g.equivalent}\t${g.note || ""}`)];
      openModal("Glossary Export", `<pre style="white-space:pre-wrap;margin:0">${escapeHtml(rows.join("\n"))}</pre>`);
    });
    els.clearGlossaryBtn.addEventListener("click", () => {
      state.glossary = [];
      saveState();
      renderGlossary();
      toast("Glossary cleared.", "warning");
    });

    els.resetProgressBtn.addEventListener("click", () => {
      const ok = window.confirm("Reset all saved progress on this device?");
      if (!ok) return;
      state = createDefaultState();
      saveState();
      ensureDailyChallengeState();
      rapidStreak = 0;
      renderAll();
      toast("Progress reset.", "warning");
      setStatus("Progress reset.");
    });
  }

  /* ------------------------ Initial Render ------------------------ */

  function renderAll() {
    ensureDailyChallengeState();
    renderProgress();
    renderSnapshot();
    renderDailyChallenge();
    renderTopicCards("all");
    renderTopicQuickList();
    renderLesson(currentTopicId);
    fillTopicSelects();
    buildFlashDeck();
    generateQuiz();
    renderMindmap(els.mindmapTopicSelect.value || DATA.topics[0].id);
    renderRapidStats();
    renderGlossary();
    renderSources();
    renderWeakAreas();
    renderReviewChecklist();
    renderRevisionPlan();
    renderAchievements();
  }

  /* ------------------------ Boot ------------------------ */

  function init() {
    ensureDailyChallengeState();
    touchStudyDay();
    bindEvents();
    renderAll();
    initCatalystBackground();

    if (state.musicEnabled) {
      loadTrack(musicTrackIndex);
    }

    setStatus("Ready.");
  }

  init();
})();

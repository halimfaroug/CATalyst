/* =========================================================
   CATalyst Academy — app.js  (Final Corrected Version)
   ENGL465 Computer-Assisted Translation
   ========================================================= */
(function () {
  "use strict";

  const DATA = window.CATALYST_DATA;
  if (!DATA) {
    document.body.innerHTML =
      '<div style="padding:3rem;font-family:sans-serif;color:#c00">' +
      '<h2>⚠️ data.js failed to load.</h2>' +
      '<p>Run the project through a local server (VS Code Live Server or <code>python -m http.server 8000</code>). ' +
      'Do NOT open index.html directly via file:///.</p></div>';
    return;
  }

  /* ── Constants ── */
  const STORAGE_KEY = "CATALYST_ACADEMY_STATE_V2";

  /* ── Element map ── */
  const $ = (sel, ctx = document) => ctx.querySelector(sel);
  const $$ = (sel, ctx = document) => [...ctx.querySelectorAll(sel)];

  const els = {
    /* welcome */
    welcomeScreen: $("#welcomeScreen"),
    startBtn: $("#startBtn"),

    /* header */
    statusLine: $("#statusLine"),
    globalSearch: $("#globalSearch"),
    musicToggleBtn: $("#musicToggleBtn"),
    prevTrackBtn: $("#prevTrackBtn"),
    nextTrackBtn: $("#nextTrackBtn"),
    volumeRange: $("#volumeRange"),
    dailyChallengeBtn: $("#dailyChallengeBtn"),
    resetProgressBtn: $("#resetProgressBtn"),

    /* nav */
    navTabs: $$(".nav-tab"),

    /* sections */
    sections: $$("section[id]"),

    /* toast */
    toastStack: $("#toastStack"),

    /* modal */
    modalOverlay: $("#modalOverlay"),
    modalTitle: $("#modalTitle"),
    modalBody: $("#modalBody"),
    modalClose: $("#modalClose"),

    /* dashboard */
    statLevel: $("#statLevel"),
    statXP: $("#statXP"),
    statCoins: $("#statCoins"),
    statStreak: $("#statStreak"),
    masteryMeter: $("#masteryMeter"),
    completionMeter: $("#completionMeter"),
    badgesArea: $("#badgesArea"),
    snapshotList: $("#snapshotList"),
    dailyChallengeCard: $("#dailyChallengeCard"),
    searchResultsSection: $("#searchResultsSection"),
    searchResults: $("#searchResults"),

    /* topics */
    topicGrid: $("#topicGrid"),
    topicFilter: $$(".topic-filter-btn"),
    lessonView: $("#lessonView"),
    lessonContent: $("#lessonContent"),
    closeLessonBtn: $("#closeLessonBtn"),
    quickTopicList: $("#quickTopicList"),

    /* flashcards */
    fcTopicSelect: $("#fcTopicSelect"),
    fcDiffSelect: $("#fcDiffSelect"),
    fcMeta: $("#fcMeta"),
    flashcardEl: $("#flashcard"),
    fcFront: $("#fcFront"),
    fcBack: $("#fcBack"),
    fcHardBtn: $("#fcHardBtn"),
    fcGoodBtn: $("#fcGoodBtn"),
    fcMasteredBtn: $("#fcMasteredBtn"),
    fcPrevBtn: $("#fcPrevBtn"),
    fcNextBtn: $("#fcNextBtn"),
    fcShuffleBtn: $("#fcShuffleBtn"),
    fcRestartBtn: $("#fcRestartBtn"),

    /* quiz */
    quizTopicSelect: $("#quizTopicSelect"),
    quizModeSelect: $("#quizModeSelect"),
    quizLengthSelect: $("#quizLengthSelect"),
    generateQuizBtn: $("#generateQuizBtn"),
    quizMeta: $("#quizMeta"),
    quizQuestionEl: $("#quizQuestion"),
    quizOptionsEl: $("#quizOptions"),
    quizNextBtn: $("#quizNextBtn"),
    quizSummary: $("#quizSummary"),

    /* mindmap */
    mmTopicSelect: $("#mmTopicSelect"),
    mmLoadBtn: $("#mmLoadBtn"),
    mmResetBtn: $("#mmResetBtn"),
    mmZoomInBtn: $("#mmZoomInBtn"),
    mmZoomOutBtn: $("#mmZoomOutBtn"),
    mmSvg: $("#mmSvg"),
    mmNodesLayer: $("#mmNodesLayer"),
    mmSidebar: $("#mmSidebar"),

    /* game lab */
    rmStartBtn: $("#rmStartBtn"),
    rmTimer: $("#rmTimer"),
    rmStreak: $("#rmStreak"),
    rmBest: $("#rmBest"),
    rmQuestion: $("#rmQuestion"),
    rmOptions: $("#rmOptions"),
    achievementsPanel: $("#achievementsPanel"),

    /* glossary lab */
    tlText: $("#tlText"),
    tlModeSelect: $("#tlModeSelect"),
    tlExtractBtn: $("#tlExtractBtn"),
    tlResults: $("#tlResults"),
    glossTermInput: $("#glossTermInput"),
    glossEquivInput: $("#glossEquivInput"),
    glossNoteInput: $("#glossNoteInput"),
    glossAddBtn: $("#glossAddBtn"),
    glossExportBtn: $("#glossExportBtn"),
    glossClearBtn: $("#glossClearBtn"),
    glossList: $("#glossList"),

    /* sources */
    sourceGrid: $("#sourceGrid"),
    citationsList: $("#citationsList"),

    /* review */
    weakAreasList: $("#weakAreasList"),
    reviewChecklist: $("#reviewChecklist"),
    revisionPlan: $("#revisionPlan"),

    /* audio */
    bgAudio: $("#bgAudio"),

    /* canvas */
    catalystCanvas: $("#catalystCanvas"),
  };

  /* ── State ── */
  function createDefaultState() {
    return {
      xp: 0,
      coins: 0,
      streak: 0,
      lastStudyDay: "",
      badges: [],
      sectionVisits: {},
      topicsOpened: [],
      fcRatings: {},
      quizStats: { attempted: 0, correct: 0, byTopic: {} },
      glossary: [],
      rapidBest: 0,
      musicTrackIndex: 0,
      dailyChallengeDay: "",
      dailyChallengeIndex: 0,
      dailyChallengeProgress: 0,
      checkedItems: [],
      currentSection: "dashboard",
    };
  }

  let state = createDefaultState();

  function loadState() {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      if (raw) {
        const saved = JSON.parse(raw);
        state = Object.assign(createDefaultState(), saved);
      }
    } catch (e) {
      console.warn("State load error:", e);
    }
  }

  function saveState() {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
    } catch (e) {
      console.warn("State save error:", e);
    }
  }

  /* ── Helpers ── */
  function todayKey() {
    return new Date().toISOString().slice(0, 10);
  }

  function escapeHtml(str) {
    return String(str)
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;");
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
    return shuffle(arr).slice(0, Math.min(n, arr.length));
  }

  function calcLevel(xp) {
    return Math.floor(xp / 100) + 1;
  }

  function toast(msg, type = "success") {
    const div = document.createElement("div");
    div.className = `toast toast-${type}`;
    div.textContent = msg;
    if (els.toastStack) {
      els.toastStack.appendChild(div);
      setTimeout(() => div.remove(), 3500);
    }
  }

  function setStatus(msg) {
    if (els.statusLine) els.statusLine.textContent = msg;
  }

  function showModal(title, bodyHtml) {
    if (els.modalTitle) els.modalTitle.textContent = title;
    if (els.modalBody) els.modalBody.innerHTML = bodyHtml;
    if (els.modalOverlay) els.modalOverlay.classList.add("active");
  }

  function closeModal() {
    if (els.modalOverlay) els.modalOverlay.classList.remove("active");
  }

  function award(xp, coins, msg) {
    state.xp += xp;
    state.coins += coins;
    saveState();
    renderProgress();
    if (msg) toast(`+${xp} XP  +${coins} coins — ${msg}`, "success");
    checkAchievements();
  }

  /* ── Streak ── */
  function updateStreak() {
    const today = todayKey();
    if (state.lastStudyDay === today) return;
    const yesterday = new Date(Date.now() - 86400000).toISOString().slice(0, 10);
    state.streak = state.lastStudyDay === yesterday ? state.streak + 1 : 1;
    state.lastStudyDay = today;
    saveState();
  }

  /* ── Daily Challenge ── */
  function ensureDailyChallenge() {
    const today = todayKey();
    if (state.dailyChallengeDay !== today) {
      state.dailyChallengeDay = today;
      state.dailyChallengeIndex =
        (state.dailyChallengeIndex + 1) % (DATA.dailyChallenges || []).length;
      state.dailyChallengeProgress = 0;
      saveState();
    }
  }

  function incrementDailyChallenge() {
    const ch = (DATA.dailyChallenges || [])[state.dailyChallengeIndex];
    if (!ch) return;
    if (state.dailyChallengeProgress < ch.target) {
      state.dailyChallengeProgress++;
      saveState();
      if (state.dailyChallengeProgress >= ch.target) {
        award(40, 15, "Daily Challenge complete!");
        toast("🎯 Daily Challenge Complete!", "success");
      }
    }
    renderDailyChallenge();
  }

  /* ── Achievements ── */
  function checkAchievements() {
    const achs = DATA.achievements || [];
    achs.forEach((ach) => {
      if (state.badges.includes(ach.id)) return;
      let earned = false;
      const visits = Object.values(state.sectionVisits || {}).reduce(
        (a, b) => a + b,
        0
      );
      const mastered = Object.values(state.fcRatings || {}).filter(
        (v) => v === "mastered"
      ).length;
      if (ach.id === "explorer" && visits >= 3) earned = true;
      if (ach.id === "flashStarter" && mastered >= 1) earned = true;
      if (ach.id === "quizAce" && state.quizStats.correct >= 10) earned = true;
      if (ach.id === "xpHunter" && state.xp >= 500) earned = true;
      if (ach.id === "streakMaster" && state.streak >= 3) earned = true;
      if (ach.id === "glossaryGuru" && state.glossary.length >= 5) earned = true;
      if (ach.id === "topicTrailblazer" && state.topicsOpened.length >= 5)
        earned = true;
      if (ach.id === "rapidChamp" && state.rapidBest >= 5) earned = true;
      if (ach.id === "masteryKing" && mastered >= 10) earned = true;
      if (earned) {
        state.badges.push(ach.id);
        saveState();
        toast(`🏆 Badge Unlocked: ${ach.title}`, "success");
        renderBadges();
      }
    });
  }

  /* ================================================================
     RENDER: Progress / Dashboard
     ================================================================ */
  function renderProgress() {
    const level = calcLevel(state.xp);
    if (els.statLevel) els.statLevel.textContent = level;
    if (els.statXP) els.statXP.textContent = state.xp;
    if (els.statCoins) els.statCoins.textContent = state.coins;
    if (els.statStreak) els.statStreak.textContent = state.streak + "🔥";

    const totalCards = (DATA.flashcards || []).length || 1;
    const mastered = Object.values(state.fcRatings || {}).filter(
      (v) => v === "mastered"
    ).length;
    const mastPct = Math.round((mastered / totalCards) * 100);

    const totalTopics = (DATA.topics || []).length || 1;
    const opened = (state.topicsOpened || []).length;
    const compPct = Math.round((opened / totalTopics) * 100);

    if (els.masteryMeter) {
      els.masteryMeter.style.width = mastPct + "%";
      els.masteryMeter.textContent = mastPct + "%";
    }
    if (els.completionMeter) {
      els.completionMeter.style.width = compPct + "%";
      els.completionMeter.textContent = compPct + "%";
    }
  }

  function renderBadges() {
    if (!els.badgesArea) return;
    const achs = DATA.achievements || [];
    els.badgesArea.innerHTML = achs
      .map((a) => {
        const earned = state.badges.includes(a.id);
        return `<span class="badge ${earned ? "badge-earned" : "badge-locked"}" title="${escapeHtml(a.desc)}">
          ${escapeHtml(a.icon || "🏅")} ${escapeHtml(a.title)}
        </span>`;
      })
      .join("");
  }

  function renderSnapshot() {
    if (!els.snapshotList) return;
    const pts = DATA.snapshotPoints || [];
    els.snapshotList.innerHTML = pts
      .map((p) => `<li>${escapeHtml(p)}</li>`)
      .join("");
  }

  function renderDailyChallenge() {
    if (!els.dailyChallengeCard) return;
    const ch = (DATA.dailyChallenges || [])[state.dailyChallengeIndex];
    if (!ch) {
      els.dailyChallengeCard.innerHTML = "<p>No challenge today.</p>";
      return;
    }
    const prog = state.dailyChallengeProgress;
    const pct = Math.min(Math.round((prog / ch.target) * 100), 100);
    els.dailyChallengeCard.innerHTML = `
      <h3>🎯 Daily Challenge</h3>
      <p><strong>${escapeHtml(ch.title)}</strong> — ${escapeHtml(ch.desc)}</p>
      <div class="meter-wrap">
        <div class="meter" id="dcMeter" style="width:${pct}%">${pct}%</div>
      </div>
      <p>${prog} / ${ch.target} completed</p>`;
  }

  /* ================================================================
     RENDER: Topics
     ================================================================ */
  function renderTopicGrid(filter = "all") {
    if (!els.topicGrid) return;
    const topics = (DATA.topics || []).filter(
      (t) => filter === "all" || t.category === filter
    );
    els.topicGrid.innerHTML = topics
      .map(
        (t) => `
      <div class="card topic-card" data-id="${escapeHtml(t.id)}">
        <span class="topic-code">${escapeHtml(t.code || "")}</span>
        <h3>${escapeHtml(t.title)}</h3>
        <p>${escapeHtml((t.overview || "").slice(0, 100))}…</p>
        <button class="btn btn-primary open-lesson-btn" data-id="${escapeHtml(t.id)}">Open Lesson →</button>
      </div>`
      )
      .join("");
  }

  function renderQuickTopicList() {
    if (!els.quickTopicList) return;
    els.quickTopicList.innerHTML = (DATA.topics || [])
      .map(
        (t) => `<button class="quick-topic-btn" data-id="${escapeHtml(t.id)}">${escapeHtml(t.code)}: ${escapeHtml(t.title)}</button>`
      )
      .join("");
  }

  function openLesson(topicId) {
    const topic = (DATA.topics || []).find((t) => t.id === topicId);
    if (!topic) return;

    if (!state.topicsOpened.includes(topicId)) {
      state.topicsOpened.push(topicId);
      award(10, 3, `Opened: ${topic.title}`);
      saveState();
    }
    incrementDailyChallenge();

    let html = `<h2>${escapeHtml(topic.code)}: ${escapeHtml(topic.title)}</h2>`;

    if (topic.overview)
      html += `<h3>Overview</h3><p>${escapeHtml(topic.overview)}</p>`;

    if (topic.definitions && topic.definitions.length) {
      html += `<h3>Key Definitions</h3><ul>` +
        topic.definitions.map((d) => `<li><strong>${escapeHtml(d.term)}</strong>: ${escapeHtml(d.def)}</li>`).join("") +
        `</ul>`;
    }

    if (topic.keyPoints && topic.keyPoints.length) {
      html += `<h3>Key Points</h3><ul>` +
        topic.keyPoints.map((p) => `<li>${escapeHtml(p)}</li>`).join("") +
        `</ul>`;
    }

    if (topic.examples && topic.examples.length) {
      html += `<h3>Examples</h3>` +
        topic.examples.map((e) =>
          `<div class="example-block"><strong>${escapeHtml(e.label || "")}:</strong> ${escapeHtml(e.text || "")}</div>`
        ).join("");
    }

    if (topic.process && topic.process.length) {
      html += `<h3>Process Steps</h3><ol>` +
        topic.process.map((s) => `<li><strong>${escapeHtml(s.step || "")}:</strong> ${escapeHtml(s.desc || "")}</li>`).join("") +
        `</ol>`;
    }

    if (topic.comparison) {
      html += `<h3>Comparison</h3>
        <table class="compare-table"><thead><tr>
          <th>${escapeHtml(topic.comparison.colA || "A")}</th>
          <th>${escapeHtml(topic.comparison.colB || "B")}</th>
        </tr></thead><tbody>` +
        (topic.comparison.rows || []).map((r) =>
          `<tr><td>${escapeHtml(r[0] || "")}</td><td>${escapeHtml(r[1] || "")}</td></tr>`
        ).join("") +
        `</tbody></table>`;
    }

    if (topic.examTips && topic.examTips.length) {
      html += `<h3>Exam Tips</h3><ul class="exam-tips">` +
        topic.examTips.map((tip) => `<li>💡 ${escapeHtml(tip)}</li>`).join("") +
        `</ul>`;
    }

    if (topic.citations && topic.citations.length) {
      html += `<h3>Citations</h3><ul class="citations">` +
        topic.citations.map((c) => `<li>${escapeHtml(c)}</li>`).join("") +
        `</ul>`;
    }

    if (els.lessonContent) els.lessonContent.innerHTML = html;
    if (els.lessonView) els.lessonView.classList.remove("hidden");
    setStatus(`Lesson: ${topic.title}`);
  }

  /* ================================================================
     RENDER: Flashcards
     ================================================================ */
  let fcDeck = [];
  let fcIndex = 0;
  let fcFlipped = false;

  function buildFcDeck() {
    const topicId = els.fcTopicSelect ? els.fcTopicSelect.value : "all";
    const diff = els.fcDiffSelect ? els.fcDiffSelect.value : "all";
    let cards = [...(DATA.flashcards || [])];
    if (topicId !== "all") cards = cards.filter((c) => c.topicId === topicId);
    if (diff !== "all") cards = cards.filter((c) => c.difficulty === diff);
    fcDeck = shuffle(cards);
    fcIndex = 0;
    fcFlipped = false;
    renderFcCard();
  }

  function renderFcCard() {
    if (!fcDeck.length) {
      if (els.fcFront) els.fcFront.textContent = "No flashcards match.";
      if (els.fcBack) els.fcBack.textContent = "";
      if (els.fcMeta) els.fcMeta.textContent = "";
      return;
    }
    const card = fcDeck[fcIndex];
    if (els.fcFront) els.fcFront.textContent = card.front || card.question || "";
    if (els.fcBack) els.fcBack.textContent = card.back || card.answer || "";
    if (els.fcMeta)
      els.fcMeta.textContent = `Card ${fcIndex + 1} / ${fcDeck.length}  |  Topic: ${card.topicId || ""}`;
    if (els.flashcardEl) els.flashcardEl.classList.remove("flipped");
    fcFlipped = false;
  }

  /* ================================================================
     RENDER: Quizzes  ← FIXED generateQuiz
     ================================================================ */
  let currentQuiz = { items: [], index: 0, score: 0, selected: null, locked: false, summary: [] };

  function generateQuiz() {
    const topicId = els.quizTopicSelect ? els.quizTopicSelect.value : "all";
    const mode = els.quizModeSelect ? els.quizModeSelect.value : "mixed";
    const length = Number(els.quizLengthSelect ? els.quizLengthSelect.value : 10);

    // Always start with full pool
    let pool = [...(DATA.quizzes || [])];

    // Apply filter only for 'topic' mode
    if (mode === "topic" && topicId !== "all") {
      pool = pool.filter((q) => q.topicId === topicId);
    }
    // 'exam' mode: sort by difficulty
    if (mode === "exam") {
      pool = pool.sort((a, b) =>
        (a.difficulty || "").localeCompare(b.difficulty || "")
      );
    }
    // 'mixed': full pool (already set above)

    const count = Math.min(length, pool.length);

    currentQuiz = {
      items: sample(pool, count),
      index: 0,
      score: 0,
      selected: null,
      locked: false,
      summary: [],
    };

    if (els.quizSummary) els.quizSummary.classList.add("hidden");
    renderQuizQuestion();
    setStatus(`Quiz: ${currentQuiz.items.length} questions | Mode: ${mode}`);
  }

  function renderQuizQuestion() {
    if (!currentQuiz.items.length) {
      if (els.quizQuestionEl)
        els.quizQuestionEl.textContent = "No questions available. Please generate a quiz.";
      if (els.quizMeta) els.quizMeta.textContent = "";
      return;
    }
    if (currentQuiz.index >= currentQuiz.items.length) {
      showQuizSummary();
      return;
    }
    const q = currentQuiz.items[currentQuiz.index];
    if (els.quizMeta)
      els.quizMeta.textContent = `Question ${currentQuiz.index + 1} / ${currentQuiz.items.length}  |  Score: ${currentQuiz.score}`;
    if (els.quizQuestionEl) els.quizQuestionEl.textContent = q.question || "";
    if (els.quizOptionsEl) {
      els.quizOptionsEl.innerHTML = (q.options || [])
        .map(
          (opt, i) =>
            `<button class="quiz-option btn btn-secondary" data-index="${i}">${escapeHtml(opt)}</button>`
        )
        .join("");
    }
    if (els.quizNextBtn) els.quizNextBtn.classList.add("hidden");
    currentQuiz.selected = null;
    currentQuiz.locked = false;
  }

  function answerQuiz(idx) {
    if (currentQuiz.locked) return;
    currentQuiz.locked = true;
    currentQuiz.selected = idx;
    const q = currentQuiz.items[currentQuiz.index];
    const correct = q.answer === idx;

    if (correct) {
      currentQuiz.score++;
      state.quizStats.correct++;
      award(20, 5, "Correct answer!");
      toast("✅ Correct!", "success");
    } else {
      toast(`❌ Incorrect. Answer: ${escapeHtml(q.options[q.answer])}`, "error");
    }
    state.quizStats.attempted++;
    const tid = q.topicId || "general";
    if (!state.quizStats.byTopic[tid]) state.quizStats.byTopic[tid] = { a: 0, c: 0 };
    state.quizStats.byTopic[tid].a++;
    if (correct) state.quizStats.byTopic[tid].c++;
    saveState();
    incrementDailyChallenge();

    // Highlight answers

    $$(".quiz-option", els.quizOptionsEl).forEach((btn, i) => {
      if (i === q.answer) btn.classList.add("quiz-correct");
      else if (i === idx) btn.classList.add("quiz-wrong");
      btn.disabled = true;
    });

    if (q.explanation && els.quizOptionsEl) {
      const exp = document.createElement("p");
      exp.className = "quiz-explanation";
      exp.textContent = `💡 ${q.explanation}`;
      els.quizOptionsEl.appendChild(exp);
    }

    currentQuiz.summary.push({ q: q.question, correct, yourAnswer: q.options[idx], rightAnswer: q.options[q.answer] });
    if (els.quizNextBtn) els.quizNextBtn.classList.remove("hidden");
  }

  function showQuizSummary() {
    const total = currentQuiz.items.length;
    const score = currentQuiz.score;
    const pct = total ? Math.round((score / total) * 100) : 0;
    if (els.quizSummary) {
      els.quizSummary.classList.remove("hidden");
      els.quizSummary.innerHTML = `
        <h3>Quiz Complete!</h3>
        <p>Score: <strong>${score} / ${total}</strong> (${pct}%)</p>
        <p>${pct >= 80 ? "🎉 Excellent!" : pct >= 60 ? "👍 Good effort!" : "📚 Keep studying!"}</p>
        <h4>Review:</h4>
        <ul>${currentQuiz.summary.map((s) =>
          `<li>${s.correct ? "✅" : "❌"} ${escapeHtml(s.q)} — Your answer: <em>${escapeHtml(s.yourAnswer)}</em>${!s.correct ? ` (Correct: <strong>${escapeHtml(s.rightAnswer)}</strong>)` : ""}</li>`
        ).join("")}</ul>
        <button class="btn btn-primary" id="retakeQuizBtn">Retake Quiz</button>`;
      $("#retakeQuizBtn") && $("#retakeQuizBtn").addEventListener("click", generateQuiz);
    }
    if (els.quizQuestionEl) els.quizQuestionEl.textContent = "";
    if (els.quizOptionsEl) els.quizOptionsEl.innerHTML = "";
    if (els.quizMeta) els.quizMeta.textContent = `Final score: ${score}/${total}`;
  }

  /* ================================================================
     RENDER: Mind Map
     ================================================================ */
  let mmZoom = 1;
  let mmMap = null;

  function loadMindMap(topicId) {
    mmMap = (DATA.mindmaps || []).find((m) => m.topicId === topicId);
    mmZoom = 1;
    drawMindMap();
  }

  function drawMindMap() {
    if (!els.mmSvg || !els.mmNodesLayer) return;
    els.mmNodesLayer.innerHTML = "";
    if (!mmMap) {
      els.mmNodesLayer.innerHTML = `<text x="50%" y="50%" text-anchor="middle" fill="#888">No mind map for this topic.</text>`;
      return;
    }
    const cx = 400, cy = 260;
    els.mmNodesLayer.innerHTML = `
      <g transform="scale(${mmZoom})">
        <circle cx="${cx}" cy="${cy}" r="50" fill="var(--accent)" opacity="0.9"/>
        <text x="${cx}" y="${cy + 5}" text-anchor="middle" fill="#fff" font-size="13" font-weight="bold">${escapeHtml(mmMap.center || "")}</text>
        ${(mmMap.branches || []).map((branch, bi) => {
          const angle = (2 * Math.PI * bi) / (mmMap.branches.length);
          const bx = cx + 180 * Math.cos(angle);
          const by = cy + 130 * Math.sin(angle);
          const childNodes = (branch.children || []).map((child, ci) => {
            const ca = angle + (ci - (branch.children.length - 1) / 2) * 0.4;
            const childX = bx + 110 * Math.cos(ca);
            const childY = by + 80 * Math.sin(ca);
            return `
              <line x1="${bx}" y1="${by}" x2="${childX}" y2="${childY}" stroke="#aaa" stroke-width="1.5"/>
              <rect x="${childX - 45}" y="${childY - 14}" width="90" height="28" rx="6" fill="#e8f9f6" stroke="var(--accent)" stroke-width="1"/>
              <text x="${childX}" y="${childY + 5}" text-anchor="middle" font-size="10" fill="#333">${escapeHtml(child)}</text>`;
          }).join("");
          return `
            <line x1="${cx}" y1="${cy}" x2="${bx}" y2="${by}" stroke="var(--accent)" stroke-width="2"/>
            <rect x="${bx - 55}" y="${by - 18}" width="110" height="36" rx="8" fill="var(--accent)" opacity="0.85"/>
            <text x="${bx}" y="${by + 6}" text-anchor="middle" fill="#fff" font-size="12">${escapeHtml(branch.label || "")}</text>
            ${childNodes}`;
        }).join("")}
      </g>`;
  }

  /* ================================================================
     RENDER: Rapid Match Game
     ================================================================ */
  let rmActive = false;
  let rmTimer = null;
  let rmTimeLeft = 15;
  let rmCurrentStreak = 0;

  function startRapidMatch() {
    rmActive = true;
    rmCurrentStreak = 0;
    rmTimeLeft = 15;
    if (els.rmTimer) els.rmTimer.textContent = "15";
    if (els.rmStreak) els.rmStreak.textContent = "0";
    clearInterval(rmTimer);
    rmTimer = setInterval(() => {
      rmTimeLeft--;
      if (els.rmTimer) els.rmTimer.textContent = rmTimeLeft;
      if (rmTimeLeft <= 0) endRapidMatch();
    }, 1000);
    nextRapidQuestion();
  }

  function endRapidMatch() {
    clearInterval(rmTimer);
    rmActive = false;
    if (rmCurrentStreak > state.rapidBest) {
      state.rapidBest = rmCurrentStreak;
      saveState();
    }
    if (els.rmBest) els.rmBest.textContent = state.rapidBest;
    if (els.rmQuestion) els.rmQuestion.textContent = "Time's up!";
    if (els.rmOptions) els.rmOptions.innerHTML = "";
    award(12, 3, `Rapid Match! Streak: ${rmCurrentStreak}`);
    toast(`⚡ Rapid Match ended! Streak: ${rmCurrentStreak}`, "success");
    checkAchievements();
  }

  function nextRapidQuestion() {
    if (!rmActive) return;
    const fc = DATA.flashcards || [];
    if (!fc.length) return;
    const card = fc[Math.floor(Math.random() * fc.length)];
    if (els.rmQuestion)
      els.rmQuestion.textContent = card.front || card.question || "?";
    const wrongAnswers = shuffle(fc.filter((c) => c !== card)).slice(0, 3);
    const choices = shuffle([card, ...wrongAnswers]);
    if (els.rmOptions) {
      els.rmOptions.innerHTML = choices
        .map(
          (c) =>
            `<button class="btn btn-secondary rm-option" data-correct="${c === card}">${escapeHtml(c.back || c.answer || "")}</button>`
        )
        .join("");
    }
  }

  /* ================================================================
     RENDER: Term Lab / Glossary
     ================================================================ */
  function extractTerms() {
    const text = els.tlText ? els.tlText.value.trim() : "";
    const mode = els.tlModeSelect ? els.tlModeSelect.value : "pattern";
    if (!text) { toast("Please paste text to extract from.", "warning"); return; }
    let results = [];

    if (mode === "pattern" || mode === "hybrid") {
      const patterns = [
        /\b[A-Z]{2,}\b/g,
        /\b\w+(?:tion|ment|ology|ware|base|file|data|system|process|tool|memory|engine|module)\b/gi,
        /\b(?:translation memory|term base|CAT tool|machine translation|quality assurance|post.?editing|localization|terminology|workflow|alignment)\b/gi,
      ];
      patterns.forEach((pat) => {
        const matches = text.match(pat) || [];
        matches.forEach((m) => { if (!results.includes(m)) results.push(m); });
      });
    }
    if (mode === "frequency" || mode === "hybrid") {
      const words = text.toLowerCase().match(/\b\w{4,}\b/g) || [];
      const freq = {};
      words.forEach((w) => (freq[w] = (freq[w] || 0) + 1));
      const topWords = Object.entries(freq)
        .filter(([, c]) => c >= 2)
        .sort((a, b) => b[1] - a[1])
        .slice(0, 20)
        .map(([w]) => w);
      topWords.forEach((w) => { if (!results.includes(w)) results.push(w); });
    }

    if (!results.length) { toast("No terms found.", "warning"); return; }
    if (els.tlResults) {
      els.tlResults.innerHTML = `<h4>Extracted Terms (${results.length})</h4>` +
        results.map((r) => `<span class="term-chip">${escapeHtml(r)}</span>`).join(" ");
    }
    award(6, 2, "Term extraction done!");
    incrementDailyChallenge();
  }

  function renderGlossList() {
    if (!els.glossList) return;
    if (!state.glossary.length) {
      els.glossList.innerHTML = "<em>No glossary entries yet.</em>";
      return;
    }
    els.glossList.innerHTML = state.glossary
      .map((e, i) =>
        `<div class="gloss-entry"><strong>${escapeHtml(e.term)}</strong> → ${escapeHtml(e.equiv)}
        ${e.note ? `<span class="gloss-note">(${escapeHtml(e.note)})</span>` : ""}
        <button class="btn btn-ghost btn-xs gloss-del" data-i="${i}">✕</button></div>`
      )
      .join("");
  }

  function addGlossEntry() {
    const term = els.glossTermInput ? els.glossTermInput.value.trim() : "";
    const equiv = els.glossEquivInput ? els.glossEquivInput.value.trim() : "";
    if (!term || !equiv) { toast("Enter both term and equivalent.", "warning"); return; }
    state.glossary.push({ term, equiv, note: els.glossNoteInput ? els.glossNoteInput.value.trim() : "" });
    saveState();
    if (els.glossTermInput) els.glossTermInput.value = "";
    if (els.glossEquivInput) els.glossEquivInput.value = "";
    if (els.glossNoteInput) els.glossNoteInput.value = "";
    renderGlossList();
    award(6, 2, "Glossary entry added!");
    checkAchievements();
    incrementDailyChallenge();
  }

  function exportGloss() {
    if (!state.glossary.length) { toast("Nothing to export.", "warning"); return; }
    const lines = state.glossary.map((e) => `${e.term}\t${e.equiv}\t${e.note || ""}`);
    const blob = new Blob(["Term\tEquivalent\tNote\n" + lines.join("\n")], { type: "text/plain" });
    const a = document.createElement("a");
    a.href = URL.createObjectURL(blob);
    a.download = "catalyst_glossary.txt";
    a.click();
    toast("Glossary exported!", "success");
  }

  /* ================================================================
     RENDER: Sources
     ================================================================ */
  function renderSources() {
    if (!els.sourceGrid) return;
    const topics = DATA.topics || [];
    els.sourceGrid.innerHTML = topics
      .map(
        (t) => `
      <div class="card source-card">
        <h4>${escapeHtml(t.code)}</h4>
        <p>${escapeHtml(t.title)}</p>
        ${t.sourcePdf ? `<a class="btn btn-ghost" href="${escapeHtml(t.sourcePdf)}" target="_blank">📄 Open PDF</a>` : "<em>PDF not linked</em>"}
      </div>`
      )
      .join("");

    if (!els.citationsList) return;
    const allCites = [];
    topics.forEach((t) => (t.citations || []).forEach((c) => allCites.push(`[${t.code}] ${c}`)));
    els.citationsList.innerHTML = allCites.map((c) => `<li>${escapeHtml(c)}</li>`).join("") || "<li>No citations.</li>";
  }

  /* ================================================================
     RENDER: Review
     ================================================================ */
  function renderReview() {
    renderWeakAreas();
    renderChecklist();
    renderRevisionPlan();
  }

  function renderWeakAreas() {
    if (!els.weakAreasList) return;
    const byTopic = state.quizStats.byTopic || {};
    const topics = DATA.topics || [];
    const weak = topics.filter((t) => {
      const s = byTopic[t.id];
      return s && s.a > 0 && s.c / s.a < 0.6;
    });
    els.weakAreasList.innerHTML = weak.length
      ? weak.map((t) => {
          const s = byTopic[t.id];
          const pct = Math.round((s.c / s.a) * 100);
          return `<li>${escapeHtml(t.title)} — ${pct}% correct</li>`;
        }).join("")
      : "<li>No weak areas detected yet. Complete some quizzes!</li>";
  }

  function renderChecklist() {
    if (!els.reviewChecklist) return;
    const items = DATA.reviewChecklist || [];
    els.reviewChecklist.innerHTML = items
      .map(
        (item, i) => `
      <label class="checklist-item">
        <input type="checkbox" data-i="${i}" ${state.checkedItems.includes(i) ? "checked" : ""}/>
        ${escapeHtml(item)}
      </label>`
      )
      .join("");
  }

  function renderRevisionPlan() {
    if (!els.revisionPlan) return;
    const plan = DATA.revisionPlan || [];
    els.revisionPlan.innerHTML = plan
      .map(
        (step, i) => `
      <div class="card revision-step">
        <h4>Day ${i + 1}: ${escapeHtml(step.title)}</h4>
        <p>${escapeHtml(step.detail)}</p>
      </div>`
      )
      .join("");
  }

  /* ================================================================
     RENDER: Achievements
     ================================================================ */
  function renderAchievements() {
    if (!els.achievementsPanel) return;
    const achs = DATA.achievements || [];
    els.achievementsPanel.innerHTML = `
      <h3>🏆 Achievements</h3>
      <div class="achievements-grid">
        ${achs.map((a) => {
          const earned = state.badges.includes(a.id);
          return `<div class="achievement-card ${earned ? "earned" : "locked"}">
            <span class="ach-icon">${escapeHtml(a.icon || "🏅")}</span>
            <strong>${escapeHtml(a.title)}</strong>
            <p>${escapeHtml(a.desc)}</p>
            ${earned ? '<span class="ach-badge">✅ Earned</span>' : '<span class="ach-badge locked">🔒 Locked</span>'}
          </div>`;
        }).join("")}
      </div>`;
  }

  /* ================================================================
     RENDER: Global Search
     ================================================================ */
  function runSearch(query) {
    if (!query.trim()) {
      if (els.searchResultsSection) els.searchResultsSection.classList.add("hidden");
      return;
    }
    const q = query.toLowerCase();
    const results = [];
    (DATA.topics || []).forEach((t) => {
      if ((t.title || "").toLowerCase().includes(q) || (t.overview || "").toLowerCase().includes(q))
        results.push({ type: "Topic", text: t.title, id: t.id });
    });
    (DATA.flashcards || []).forEach((f) => {
      if ((f.front || f.question || "").toLowerCase().includes(q))
        results.push({ type: "Flashcard", text: f.front || f.question });
    });
    (DATA.quizzes || []).forEach((qz) => {
      if ((qz.question || "").toLowerCase().includes(q))
        results.push({ type: "Quiz", text: qz.question });
    });

    if (els.searchResults) {
      els.searchResults.innerHTML = results.length
        ? results.map((r) => `<div class="search-result-item"><strong>[${escapeHtml(r.type)}]</strong> ${escapeHtml(r.text)}</div>`).join("")
        : "<p>No results found.</p>";
    }
    if (els.searchResultsSection) els.searchResultsSection.classList.remove("hidden");
  }

  /* ================================================================
     NAVIGATION
     ================================================================ */
  function showSection(id) {
    els.sections.forEach((s) => s.classList.add("hidden"));
    const target = document.getElementById(id);
    if (target) target.classList.remove("hidden");
    els.navTabs.forEach((tab) => {
      tab.classList.toggle("active", tab.dataset.section === id);
    });
    state.currentSection = id;
    state.sectionVisits[id] = (state.sectionVisits[id] || 0) + 1;
    saveState();
    checkAchievements();
    setStatus(`Section: ${id}`);

    // Lazy renders
    if (id === "sources") renderSources();
    if (id === "review") renderReview();
    if (id === "gamelab") renderAchievements();
  }

  /* ================================================================
     BACKGROUND CANVAS
     ================================================================ */
  function startCanvas() {
    const canvas = els.catalystCanvas;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    const particles = [];
    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resize();
    window.addEventListener("resize", resize);
    for (let i = 0; i < 40; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        r: Math.random() * 3 + 1,
        dx: (Math.random() - 0.5) * 0.5,
        dy: (Math.random() - 0.5) * 0.5,
        alpha: Math.random() * 0.4 + 0.1,
      });
    }
    function draw() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      particles.forEach((p) => {
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(23,181,156,${p.alpha})`;
        ctx.fill();
        p.x += p.dx;
        p.y += p.dy;
        if (p.x < 0 || p.x > canvas.width) p.dx *= -1;
        if (p.y < 0 || p.y > canvas.height) p.dy *= -1;
      });
      requestAnimationFrame(draw);
    }
    draw();
  }

  /* ================================================================
     MUSIC (disabled — no playlist)
     ================================================================ */
  function initMusic() {
    if (!DATA.musicPlaylist || !DATA.musicPlaylist.length) {
      // Hide all music controls gracefully

      $$(".music-controls, #musicToggleBtn, #prevTrackBtn, #nextTrackBtn, .range-wrap").forEach(
        (el) => (el.style.display = "none")
      );
      return;
    }
    // Future: full music init if playlist added
  }

  /* ================================================================
     EVENT BINDING
     ================================================================ */
  function bindEvents() {
    // Welcome screen
    if (els.startBtn) {
      els.startBtn.addEventListener("click", () => {
        if (els.welcomeScreen) els.welcomeScreen.classList.add("hidden");
        showSection("dashboard");
      });
    }

    // Modal
    if (els.modalClose) els.modalClose.addEventListener("click", closeModal);
    if (els.modalOverlay)
      els.modalOverlay.addEventListener("click", (e) => {
        if (e.target === els.modalOverlay) closeModal();
      });

    // Navigation
    els.navTabs.forEach((tab) => {
      tab.addEventListener("click", () => showSection(tab.dataset.section));
    });

    // Global search
    if (els.globalSearch) {
      els.globalSearch.addEventListener("input", (e) => runSearch(e.target.value));
    }

    // Reset progress
    if (els.resetProgressBtn) {
      els.resetProgressBtn.addEventListener("click", () => {
        if (confirm("Reset all progress? This cannot be undone.")) {
          localStorage.removeItem(STORAGE_KEY);
          state = createDefaultState();
          saveState();
          renderAll();
          toast("Progress reset.", "warning");
        }
      });
    }

    // Daily challenge button
    if (els.dailyChallengeBtn) {
      els.dailyChallengeBtn.addEventListener("click", () => {
        showSection("dashboard");
        toast("📅 Daily Challenge loaded!", "success");
      });
    }

    // Topic filters
    els.topicFilter.forEach((btn) => {
      btn.addEventListener("click", () => {
        els.topicFilter.forEach((b) => b.classList.remove("active"));
        btn.classList.add("active");
        renderTopicGrid(btn.dataset.filter || "all");
      });
    });

    // Open lesson (delegated)
    if (els.topicGrid) {
      els.topicGrid.addEventListener("click", (e) => {
        const btn = e.target.closest(".open-lesson-btn");
        if (btn) openLesson(btn.dataset.id);
      });
    }

    // Close lesson
    if (els.closeLessonBtn) {
      els.closeLessonBtn.addEventListener("click", () => {
        if (els.lessonView) els.lessonView.classList.add("hidden");
      });
    }

    // Quick topic list (delegated)
    if (els.quickTopicList) {
      els.quickTopicList.addEventListener("click", (e) => {
        const btn = e.target.closest(".quick-topic-btn");
        if (btn) openLesson(btn.dataset.id);
      });
    }

    // Flashcard controls
    if (els.fcTopicSelect) els.fcTopicSelect.addEventListener("change", buildFcDeck);
    if (els.fcDiffSelect) els.fcDiffSelect.addEventListener("change", buildFcDeck);
    if (els.flashcardEl) {
      els.flashcardEl.addEventListener("click", () => {
        els.flashcardEl.classList.toggle("flipped");
        fcFlipped = !fcFlipped;
      });
    }
    if (els.fcPrevBtn) {
      els.fcPrevBtn.addEventListener("click", () => {
        if (fcIndex > 0) { fcIndex--; renderFcCard(); }
      });
    }
    if (els.fcNextBtn) {
      els.fcNextBtn.addEventListener("click", () => {
        if (fcIndex < fcDeck.length - 1) { fcIndex++; renderFcCard(); }
      });
    }
    if (els.fcShuffleBtn) els.fcShuffleBtn.addEventListener("click", buildFcDeck);
    if (els.fcRestartBtn) {
      els.fcRestartBtn.addEventListener("click", () => {
        fcIndex = 0;
        renderFcCard();
      });
    }
    if (els.fcHardBtn) {
      els.fcHardBtn.addEventListener("click", () => {
        if (!fcDeck.length) return;
        state.fcRatings[fcDeck[fcIndex].id] = "hard";
        saveState();
        toast("Marked: Hard", "warning");
        if (fcIndex < fcDeck.length - 1) { fcIndex++; renderFcCard(); }
      });
    }
    if (els.fcGoodBtn) {
      els.fcGoodBtn.addEventListener("click", () => {
        if (!fcDeck.length) return;
        state.fcRatings[fcDeck[fcIndex].id] = "good";
        saveState();
        award(8, 2, "Flashcard: Good");
        if (fcIndex < fcDeck.length - 1) { fcIndex++; renderFcCard(); }
      });
    }
    if (els.fcMasteredBtn) {
      els.fcMasteredBtn.addEventListener("click", () => {
        if (!fcDeck.length) return;
        state.fcRatings[fcDeck[fcIndex].id] = "mastered";
        saveState();
        award(14, 4, "Flashcard: Mastered!");
        checkAchievements();
        if (fcIndex < fcDeck.length - 1) { fcIndex++; renderFcCard(); }
      });
    }

    // Quiz controls
    if (els.generateQuizBtn) els.generateQuizBtn.addEventListener("click", generateQuiz);
    if (els.quizOptionsEl) {
      els.quizOptionsEl.addEventListener("click", (e) => {
        const btn = e.target.closest(".quiz-option");
        if (btn) answerQuiz(Number(btn.dataset.index));
      });
    }
    if (els.quizNextBtn) {
      els.quizNextBtn.addEventListener("click", () => {
        currentQuiz.index++;
        renderQuizQuestion();
      });
    }

    // Mind map
    if (els.mmLoadBtn) {
      els.mmLoadBtn.addEventListener("click", () => {
        if (els.mmTopicSelect) loadMindMap(els.mmTopicSelect.value);
      });
    }
    if (els.mmResetBtn) {
      els.mmResetBtn.addEventListener("click", () => {
        mmZoom = 1;
        drawMindMap();
      });
    }
    if (els.mmZoomInBtn) {
      els.mmZoomInBtn.addEventListener("click", () => {
        mmZoom = Math.min(mmZoom + 0.2, 3);
        drawMindMap();
      });
    }
    if (els.mmZoomOutBtn) {
      els.mmZoomOutBtn.addEventListener("click", () => {
        mmZoom = Math.max(mmZoom - 0.2, 0.3);
        drawMindMap();
      });
    }

    // Rapid Match
    if (els.rmStartBtn) els.rmStartBtn.addEventListener("click", startRapidMatch);
    if (els.rmOptions) {
      els.rmOptions.addEventListener("click", (e) => {
        const btn = e.target.closest(".rm-option");
        if (!btn || !rmActive) return;
        if (btn.dataset.correct === "true") {
          rmCurrentStreak++;
          if (els.rmStreak) els.rmStreak.textContent = rmCurrentStreak;
          toast("⚡ Correct!", "success");
          nextRapidQuestion();
        } else {
          toast("❌ Wrong!", "error");
          endRapidMatch();
        }
      });
    }

    // Term Lab
    if (els.tlExtractBtn) els.tlExtractBtn.addEventListener("click", extractTerms);

    // Glossary
    if (els.glossAddBtn) els.glossAddBtn.addEventListener("click", addGlossEntry);
    if (els.glossExportBtn) els.glossExportBtn.addEventListener("click", exportGloss);
    if (els.glossClearBtn) {
      els.glossClearBtn.addEventListener("click", () => {
        if (confirm("Clear entire glossary?")) {
          state.glossary = [];
          saveState();
          renderGlossList();
          toast("Glossary cleared.", "warning");
        }
      });
    }
    if (els.glossList) {
      els.glossList.addEventListener("click", (e) => {
        const btn = e.target.closest(".gloss-del");
        if (btn) {
          state.glossary.splice(Number(btn.dataset.i), 1);
          saveState();
          renderGlossList();
        }
      });
    }

    // Checklist (delegated)
    if (els.reviewChecklist) {
      els.reviewChecklist.addEventListener("change", (e) => {
        if (e.target.type === "checkbox") {
          const i = Number(e.target.dataset.i);
          if (e.target.checked) {
            if (!state.checkedItems.includes(i)) {
              state.checkedItems.push(i);
              award(5, 1, "Checklist item done!");
            }
          } else {
            state.checkedItems = state.checkedItems.filter((x) => x !== i);
          }
          saveState();
        }
      });
    }
  }

  /* ================================================================
     INITIAL RENDER (all sections)
     ================================================================ */
  function renderAll() {
    renderProgress();
    renderBadges();
    renderSnapshot();
    renderDailyChallenge();
    renderTopicGrid("all");
    renderQuickTopicList();
    buildFcDeck();
    renderGlossList();
    renderAchievements();
    if (els.mmTopicSelect && DATA.mindmaps && DATA.mindmaps.length) {
      loadMindMap(els.mmTopicSelect.value || DATA.mindmaps[0].topicId);
    }

    // Populate flashcard topic select
    if (els.fcTopicSelect) {
      els.fcTopicSelect.innerHTML =
        `<option value="all">All Topics</option>` +
        (DATA.topics || []).map((t) => `<option value="${t.id}">${escapeHtml(t.code)}: ${escapeHtml(t.title)}</option>`).join("");
    }

    // Populate quiz topic select
    if (els.quizTopicSelect) {
      els.quizTopicSelect.innerHTML =
        `<option value="all">All Topics</option>` +
        (DATA.topics || []).map((t) => `<option value="${t.id}">${escapeHtml(t.code)}: ${escapeHtml(t.title)}</option>`).join("");
    }

    // Populate mind map topic select
    if (els.mmTopicSelect) {
      els.mmTopicSelect.innerHTML = (DATA.mindmaps || [])
        .map((m) => {
          const t = (DATA.topics || []).find((x) => x.id === m.topicId);
          return `<option value="${m.topicId}">${escapeHtml(t ? t.title : m.topicId)}</option>`;
        })
        .join("");
    }
  }

  /* ================================================================
     BOOT
     ================================================================ */
  function init() {
    loadState();
    updateStreak();
    ensureDailyChallenge();
    bindEvents();
    renderAll();
    startCanvas();
    initMusic();

    // Hide all sections except welcome initially
    els.sections.forEach((s) => s.classList.add("hidden"));
    if (els.welcomeScreen) els.welcomeScreen.classList.remove("hidden");

    setStatus("CATalyst Academy ready. Click Start to begin.");
    console.log(
      `%cCATalyst Academy loaded ✓ | Quizzes: ${(DATA.quizzes || []).length} | Flashcards: ${(DATA.flashcards || []).length} | Topics: ${(DATA.topics || []).length}`,
      "color:#17b59c;font-weight:bold"
    );
  }

  init();
})();

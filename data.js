window.CATALYST_DATA = {
  appMeta: {
    title: "CATalyst Academy",
    course: "ENGL465 — Computer-Assisted Translation",
    version: "TEST"
  },

  musicPlaylist: [],

  snapshotPoints: [
    "CAT helps human translators using digital tools.",
    "TM stores previous translations for reuse.",
    "Terminology tools improve consistency.",
    "Localization goes beyond translation."
  ],

  topics: [
    {
      id: "topic1",
      code: "Topic 1",
      title: "Introduction to CAT",
      category: "foundation",
      source: {
        file: "ENGL465-Topic 1.pdf",
        path: "./pdf/ENGL465-Topic 1.pdf",
        pages: "pp. 4–12"
      },
      overview: [
        "CAT supports human translators with digital tools.",
        "It differs from MT because the human remains central."
      ],
      definitions: [
        {
          term: "CAT",
          meaning: "Computer-Assisted Translation."
        },
        {
          term: "MT",
          meaning: "Machine Translation."
        }
      ],
      keyPoints: [
        "CAT improves consistency.",
        "CAT improves efficiency.",
        "CAT does not replace the translator."
      ],
      examples: [
        "Using TM to reuse a repeated sentence.",
        "Using a glossary for technical terms."
      ],
      process: [
        { step: "1", title: "Prepare", detail: "Set up tools." },
        { step: "2", title: "Translate", detail: "Translate using CAT support." },
        { step: "3", title: "Review", detail: "Check the output." }
      ],
      compare: {
        headers: ["Aspect", "CAT", "MT"],
        rows: [
          ["Control", "Human-led", "System-led"],
          ["Purpose", "Assist", "Automate"]
        ]
      },
      examTips: [
        "Define CAT clearly.",
        "Contrast CAT with MT."
      ],
      citations: [
        { label: "CAT definition", file: "ENGL465-Topic 1.pdf", page: "p. 4" }
      ]
    }
  ],

  flashcards: [
    {
      id: "f1",
      topicId: "topic1",
      front: "What is CAT?",
      back: "CAT is the use of computer tools to assist human translators.",
      ref: "Topic 1, p. 4"
    },
    {
      id: "f2",
      topicId: "topic1",
      front: "How does CAT differ from MT?",
      back: "CAT assists the human translator, while MT automates translation.",
      ref: "Topic 1, p. 4"
    }
  ],

  quizzes: [
    {
      id: "q1",
      topicId: "topic1",
      question: "Which statement best defines CAT?",
      options: [
        "It replaces translators completely.",
        "It assists human translators with digital tools.",
        "It is only OCR.",
        "It is localization."
      ],
      answer: 1,
      explanation: "CAT supports human translators rather than replacing them.",
      ref: "Topic 1, p. 4",
      difficulty: "basic"
    }
  ],

  mindmaps: {
    topic1: {
      center: {
        label: "Introduction to CAT",
        note: "CAT supports human translators.",
        citation: "Topic 1, p. 4"
      },
      branches: [
        {
          label: "Definition",
          note: "CAT is tool-assisted translation.",
          citation: "Topic 1, p. 4",
          children: [
            {
              label: "Human control",
              note: "Translator remains central.",
              citation: "Topic 1, p. 4"
            }
          ]
        },
        {
          label: "Benefits",
          note: "CAT improves consistency and speed.",
          citation: "Topic 1, p. 11",
          children: [
            {
              label: "Consistency",
              note: "TM and terminology help.",
              citation: "Topic 1, p. 11"
            }
          ]
        }
      ]
    }
  },

  achievements: [
    { id: "explorer", label: "Explorer", desc: "Visit 3 sections." },
    { id: "flashStarter", label: "Flash Starter", desc: "Rate your first flashcard." },
    { id: "quizStarter", label: "Quiz Starter", desc: "Answer one quiz correctly." }
  ],

  dailyChallenges: [
    {
      id: "d1",
      text: "Master 1 flashcard today.",
      type: "flashMastered",
      goal: 1,
      route: "flashcardsSection"
    }
  ],

  reviewChecklist: [
    "Define CAT.",
    "Distinguish CAT from MT.",
    "Know TM and terminology basics."
  ],

  revisionPlan: [
    {
      step: "Day 1",
      title: "Intro Revision",
      detail: "Study CAT definition, components, and CAT vs MT."
    }
  ]
};

/* =========================================
   CATalyst Academy — data.js
   ENGL465 Interactive CAT Learning Platform
   ========================================= */

window.CATALYST_DATA = {
  appMeta: {
    title: "CATalyst Academy",
    course: "ENGL465 — Computer-Assisted Translation",
    version: "2.0",
    note: "Built from attached ENGL465 Topics 1–8 and 11–13."
  },

  musicPlaylist: [
    { title: "Serene Study 1", file: "./audio/serene-1.mp3" },
    { title: "Serene Study 2", file: "./audio/serene-2.mp3" },
    { title: "Serene Study 3", file: "./audio/serene-3.mp3" }
  ],

  snapshotPoints: [
    "CAT supports human translators with tools such as TM, terminology management, QA, and project features.",
    "The translator’s workstation combines word processing, lexical resources, corpora, term tools, and MT support.",
    "TM systems store previous translations and provide exact, context, fuzzy, and fragment matches.",
    "Terminology tools improve consistency, speed, and collaboration and rely on structured term records.",
    "Localization adapts products linguistically, culturally, and technically for specific target markets.",
    "Minority languages often suffer from low digital support and need corpora, dictionaries, and engineering resources.",
    "Corpora support translation studies, translator training, contrastive analysis, and professional practice.",
    "Translation is difficult for computers because of ambiguity, context, common sense, and combinatorial complexity.",
    "MT evaluation requires both human judgment and automatic metrics such as BLEU, METEOR, and TER.",
    "Sublanguages improve MT performance because they restrict vocabulary, grammar, and format.",
    "Post-editing combines MT speed with human correction and often uses structured error classification."
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
        "Computer-Assisted Translation (CAT) refers to the use of software and computer tools to support human translators in producing accurate, efficient, and consistent translations.",
        "Unlike Machine Translation (MT), CAT does not aim to replace the translator. Instead, it keeps the translator in control while technology handles repetitive or support tasks.",
        "CAT became especially important after early MT disappointments, because researchers realized that computer aids could improve human translation more effectively than trying to automate the entire process."
      ],
      definitions: [
        { term: "Computer-Assisted Translation (CAT)", meaning: "The use of computer tools to assist human translators in translating more efficiently and consistently." },
        { term: "Machine Translation (MT)", meaning: "Automatic translation performed by a computer system without full human control over every segment." },
        { term: "Translation Memory (TM)", meaning: "A database that stores previously translated segments for reuse in future translation." },
        { term: "Terminology Management", meaning: "The creation, storage, and control of preferred terms and glossaries." },
        { term: "Quality Assurance (QA)", meaning: "Automated checks for spelling, terminology consistency, formatting, and related issues." }
      ],
      keyPoints: [
        "CAT helps in repetitive, technical, legal, and structured content where consistency is crucial.",
        "The translator remains the decision-maker, especially for style, context, and culture.",
        "Historically, the ALPAC report weakened confidence in full MT and encouraged translation aids.",
        "Modern CAT tools often combine TM, terminology tools, QA, and project management.",
        "CAT improves speed, consistency, and collaboration but still depends on good setup and skilled users."
      ],
      examples: [
        "Reusing a previously translated user-manual sentence through TM.",
        "Using a glossary to ensure the same legal term is translated consistently across a whole contract.",
        "Running QA to detect a number mismatch between source and target."
      ],
      process: [
        { step: "1", title: "Prepare resources", detail: "Set up TM, termbase, and reference materials." },
        { step: "2", title: "Translate with support", detail: "Use CAT suggestions while making final human decisions." },
        { step: "3", title: "Review and QA", detail: "Check consistency, spelling, formatting, and terminology." },
        { step: "4", title: "Update resources", detail: "Save new segments and terms for future reuse." }
      ],
      compare: {
        headers: ["Aspect", "CAT", "MT"],
        rows: [
          ["Control", "Human stays in control", "System generates draft automatically"],
          ["Goal", "Assist translator", "Automate translation"],
          ["Strength", "Consistency and reuse", "Speed at scale"],
          ["Weakness", "Needs setup and human effort", "May lose meaning, tone, or context"]
        ]
      },
      examTips: [
        "Always define CAT clearly and contrast it with MT.",
        "Mention TM, terminology tools, and QA as core components.",
        "If asked historically, refer to the ALPAC report and the shift toward translation aids."
      ],
      citations: [
        { label: "Definition of CAT", file: "ENGL465-Topic 1.pdf", page: "p. 4" },
        { label: "Historical overview and Weaver", file: "ENGL465-Topic 1.pdf", page: "pp. 5–6" },
        { label: "ALPAC and shift to CAT", file: "ENGL465-Topic 1.pdf", page: "pp. 7–8" },
        { label: "Key CAT components", file: "ENGL465-Topic 1.pdf", page: "pp. 9–10" },
        { label: "Benefits and limitations", file: "ENGL465-Topic 1.pdf", page: "pp. 11–12" }
      ]
    },

    {
      id: "topic2",
      code: "Topic 2",
      title: "The Translator’s Workstation",
      category: "tools",
      source: {
        file: "ENGL465-Topic 2.pdf",
        path: "./pdf/ENGL465-Topic 2.pdf",
        pages: "pp. 4–15"
      },
      overview: [
        "The translator’s workstation is an integrated environment of technologies designed to support translation work.",
        "It brings together tools such as word processors, terminology systems, lexical resources, concordancers, corpora, desktop publishing utilities, and sometimes MT support.",
        "The workstation concept reflects the idea that the best translation environment is not a single tool, but a coordinated set of tools centered on the translator."
      ],
      definitions: [
        { term: "Translator’s Workstation", meaning: "A set of interconnected software tools used to assist translators in drafting, researching, editing, and delivering translations." },
        { term: "MAHT", meaning: "Machine-Aided Human Translation, where the human leads and the computer assists." },
        { term: "HAMT", meaning: "Human-Aided Machine Translation, where the system leads and humans guide or correct it." },
        { term: "Concordance", meaning: "A list of occurrences of a word or phrase with surrounding context." },
        { term: "Lexical Resources", meaning: "Dictionaries, term banks, encyclopedias, and other language reference tools." }
      ],
      keyPoints: [
        "The workstation idea is linked to Martin Kay’s thinking on the proper role of humans and machines.",
        "Core tools include word processing, terminology management, lexical resources, corpora, and communication technologies.",
        "Dictation tools may improve speed but require training and may misrecognize speech.",
        "Desktop publishing and markup languages become important when format and structure matter.",
        "Commercial MT systems can be part of a workstation, but they still require pre-editing, post-editing, and dictionary updates."
      ],
      examples: [
        "Using concordancing software to check how a technical phrase was translated before.",
        "Using markup tags in HTML or SGML to preserve structure during translation.",
        "Using online term banks such as Termium-like resources for specialist terminology."
      ],
      process: [
        { step: "1", title: "Receive and inspect files", detail: "Check format, language, and resource needs." },
        { step: "2", title: "Consult workstation tools", detail: "Use dictionaries, corpora, and termbases." },
        { step: "3", title: "Translate and format", detail: "Draft the target text while preserving layout and structure." },
        { step: "4", title: "Finalize and deliver", detail: "Review, export, and transmit the completed work." }
      ],
      compare: {
        headers: ["Aspect", "MAHT", "HAMT"],
        rows: [
          ["Main driver", "Human translator", "Machine system"],
          ["Human role", "Decision-maker", "Guide, pre-editor, or post-editor"],
          ["Best use", "Professional controlled workflows", "Heavier automation scenarios"],
          ["Risk", "Slower than full automation", "More system-generated errors"]
        ]
      },
      examTips: [
        "Mention that the workstation is an ecosystem, not one program.",
        "Be ready to list core components and explain the role of corpora and lexical resources.",
        "Distinguish MAHT from HAMT clearly."
      ],
      citations: [
        { label: "Technology role and MAHT/HAMT", file: "ENGL465-Topic 2.pdf", page: "p. 4" },
        { label: "Historical context", file: "ENGL465-Topic 2.pdf", page: "pp. 5–6" },
        { label: "Core tools", file: "ENGL465-Topic 2.pdf", page: "pp. 7–10" },
        { label: "Commercial MT features", file: "ENGL465-Topic 2.pdf", page: "pp. 11–12" },
        { label: "Corpus-based resources and conclusion", file: "ENGL465-Topic 2.pdf", page: "pp. 13–15" }
      ]
    },

    {
      id: "topic3",
      code: "Topic 3",
      title: "Translation Memory Systems",
      category: "tools",
      source: {
        file: "ENGL465-Topic 3.pdf",
        path: "./pdf/ENGL465-Topic 3.pdf",
        pages: "pp. 4–14"
      },
      overview: [
        "Translation Memory (TM) is a computer-based system that stores source-target segment pairs and suggests prior translations when similar segments appear again.",
        "TM is especially valuable in repetitive technical domains, documentation, and update-heavy projects.",
        "Its usefulness depends on database quality, alignment accuracy, and matching performance."
      ],
      definitions: [
        { term: "Translation Memory", meaning: "A database of previously translated segments used to suggest matches during translation." },
        { term: "Aligned Parallel Corpus", meaning: "A source text and its translation matched segment by segment." },
        { term: "Alignment", meaning: "The process of matching corresponding source and target segments." },
        { term: "Fuzzy Match", meaning: "A similar but not identical segment retrieved by the TM system." },
        { term: "Context Match", meaning: "An exact segment match where the surrounding context also matches." }
      ],
      keyPoints: [
        "TM can be built while translating, imported from others, or created through alignment of existing translations.",
        "Alignment is difficult because sentence boundaries and ordering do not always match across languages.",
        "Most TM systems prioritize efficient retrieval over deep linguistic analysis.",
        "The value of TM lies in reuse, consistency, and reduced translator effort for repeated content.",
        "Match types include exact, context, fuzzy, and fragment matches."
      ],
      examples: [
        "A sentence in a software manual repeated across versions can be inserted automatically as a 100% match.",
        "A similar sentence with a minor number or term change may appear as a fuzzy match.",
        "A translator can reuse a recurring phrase from a fragment match even when the full sentence is new."
      ],
      process: [
        { step: "1", title: "Build database", detail: "Translate new segments or align old translations." },
        { step: "2", title: "Segment and store", detail: "Store source and target units in the TM." },
        { step: "3", title: "Match new input", detail: "Search for exact, context, fuzzy, or fragment matches." },
        { step: "4", title: "Edit and confirm", detail: "Adjust suggestions and save improved versions back into the TM." }
      ],
      compare: {
        headers: ["Match Type", "Meaning", "Typical Use"],
        rows: [
          ["Exact", "Identical source segment", "Direct reuse"],
          ["Context", "Exact segment plus same surrounding context", "Safer reuse in structured texts"],
          ["Fuzzy", "Similar segment with differences", "Edit prior translation"],
          ["Fragment", "Partial phrase reuse", "Support terminology or recurring chunks"]
        ]
      },
      examTips: [
        "If asked about TM, explain both storage and retrieval.",
        "Be ready to describe alignment problems and why they matter.",
        "Use the four match types as an organizing framework."
      ],
      citations: [
        { label: "TM definition and basic function", file: "ENGL465-Topic 3.pdf", page: "pp. 4–5" },
        { label: "Historical sketch", file: "ENGL465-Topic 3.pdf", page: "pp. 7–8" },
        { label: "Database building", file: "ENGL465-Topic 3.pdf", page: "pp. 9–11" },
        { label: "Match types", file: "ENGL465-Topic 3.pdf", page: "pp. 13–14" }
      ]
    },

    {
      id: "topic4",
      code: "Topic 4",
      title: "Terminology Tools for Translators",
      category: "tools",
      source: {
        file: "ENGL465-Topic 4.pdf",
        path: "./pdf/ENGL465-Topic 4.pdf",
        pages: "pp. 4–11"
      },
      overview: [
        "Terminology management is central to professional translation because specialized fields depend on exact terms and client-preferred usage.",
        "Terminology tools store, organize, retrieve, and update term records across projects.",
        "Modern term tools also support extraction, search, multilingual storage, and integration with CAT systems."
      ],
      definitions: [
        { term: "Terminology", meaning: "The collection, organization, and use of specialized terms in specific knowledge domains." },
        { term: "Term Record", meaning: "A structured record containing information about a concept and its term(s)." },
        { term: "Term Bank", meaning: "A detailed and often encyclopedic terminology resource." },
        { term: "Termbase", meaning: "A shorter, practical collection of terms used in active translation workflows." },
        { term: "Noise", meaning: "Items extracted as terms that are not actually useful terms." },
        { term: "Silence", meaning: "Important terms that the extraction process misses." }
      ],
      keyPoints: [
        "Term records differ depending on whether humans or machines will use them.",
        "Modern terminology software supports custom fields, multilingual search, and CAT integration.",
        "Term extraction can be linguistic, statistical, or hybrid.",
        "Linguistic extraction uses grammar patterns but may be language-dependent.",
        "Statistical extraction works across languages but may over-select frequent non-terms."
      ],
      examples: [
        "A legal client may require one approved translation for a repeated legal concept across all files.",
        "A software localization team may keep only source term, target equivalent, and brief usage note in a termbase.",
        "A hybrid term extractor may combine repeated multiword units with grammatical patterns."
      ],
      process: [
        { step: "1", title: "Collect candidate terms", detail: "Read source texts or use extraction tools." },
        { step: "2", title: "Verify meaning and usage", detail: "Check domain, context, and equivalents." },
        { step: "3", title: "Create term records", detail: "Store term, equivalent, note, and metadata." },
        { step: "4", title: "Maintain and update", detail: "Refine records across projects and clients." }
      ],
      compare: {
        headers: ["Approach", "How It Works", "Main Risk"],
        rows: [
          ["Linguistic", "Uses grammatical patterns and tagging", "Language dependence and missed terms"],
          ["Statistical", "Uses frequency and co-occurrence", "Noise from common phrases"],
          ["Hybrid", "Combines both methods", "Still needs human validation"]
        ]
      },
      examTips: [
        "Differentiate term bank and termbase with one clear sentence each.",
        "Explain noise and silence because they are key in extraction questions.",
        "Mention that humans still validate extracted terms."
      ],
      citations: [
        { label: "Introduction and importance", file: "ENGL465-Topic 4.pdf", page: "p. 4" },
        { label: "History of terminology tools", file: "ENGL465-Topic 4.pdf", page: "p. 5" },
        { label: "Term records and users", file: "ENGL465-Topic 4.pdf", page: "pp. 6–7" },
        { label: "Modern terminology features", file: "ENGL465-Topic 4.pdf", page: "pp. 8–9" },
        { label: "Term extraction methods", file: "ENGL465-Topic 4.pdf", page: "p. 10" }
      ]
    },

    {
      id: "topic5",
      code: "Topic 5",
      title: "Localization & Translation",
      category: "technology",
      source: {
        file: "ENGL465-Topic 5.pdf",
        path: "./pdf/ENGL465-Topic 5.pdf",
        pages: "pp. 4–13"
      },
      overview: [
        "Localization means adapting a product so it becomes linguistically, culturally, and technically appropriate for a specific target market.",
        "It differs from traditional translation because it often involves software, interfaces, documentation, web content, and technical adaptation.",
        "Localization projects involve specialized teams, workflows, testing, and integrated translation technology."
      ],
      definitions: [
        { term: "Localization (L10n)", meaning: "Adapting content or products to the language, culture, and technical expectations of a target locale." },
        { term: "Internationalization (i18n)", meaning: "Designing products in a way that makes localization possible for multiple languages and regions." },
        { term: "Globalization (g11n)", meaning: "The broader international-market process that includes internationalization, localization, marketing, and support." },
        { term: "Locale", meaning: "A specific regional setting defined by language, date formats, currency, and local conventions." }
      ],
      keyPoints: [
        "Localization includes text translation plus cultural, visual, and technical adjustment.",
        "Localization often handles software GUIs, web interfaces, online help, and documentation.",
        "Localization differs from translation in activity range, project complexity, adaptation level, and technology.",
        "Projects involve project managers, engineers, language managers, translators, proofreaders, DTP specialists, and CAT experts.",
        "The process usually includes setup, translation, review, production, QA, and closure."
      ],
      examples: [
        "Changing currency to euros and payment methods for a European e-commerce site.",
        "Adjusting paper size references from Letter to A4.",
        "Ensuring buttons in software still fit translated strings without truncation."
      ],
      process: [
        { step: "1", title: "Project setup", detail: "Kick-off, terminology approval, source analysis, and file preparation." },
        { step: "2", title: "Translation", detail: "Translate software, manuals, help files, and guides with CAT support." },
        { step: "3", title: "Review", detail: "Perform in-house review and early client validation." },
        { step: "4", title: "Production", detail: "Fix interface issues, compile files, capture screenshots, and format docs." },
        { step: "5", title: "Quality assurance", detail: "Proofread language and layout; test and approve outputs." },
        { step: "6", title: "Project closure", detail: "Deliver files and archive materials for future updates." }
      ],
      compare: {
        headers: ["Aspect", "Translation", "Localization"],
        rows: [
          ["Scope", "Mainly text transfer", "Text, culture, and technical adaptation"],
          ["Complexity", "Often single documents", "Large multi-component projects"],
          ["Technology", "Basic CAT support", "TM systems, localization tools, testing tools"],
          ["Output", "Translated text", "Market-ready localized product"]
        ]
      },
      examTips: [
        "Always explain that localization goes beyond language.",
        "Use i18n / l10n / g11n correctly and in relation to one another.",
        "If asked about process, present the six steps in order."
      ],
      citations: [
        { label: "Localization definition", file: "ENGL465-Topic 5.pdf", page: "p. 4" },
        { label: "Related terms", file: "ENGL465-Topic 5.pdf", page: "p. 5" },
        { label: "Translation vs localization", file: "ENGL465-Topic 5.pdf", page: "p. 6" },
        { label: "Project components", file: "ENGL465-Topic 5.pdf", page: "p. 7" },
        { label: "Project team", file: "ENGL465-Topic 5.pdf", page: "p. 8" },
        { label: "Process steps", file: "ENGL465-Topic 5.pdf", page: "pp. 9–10" },
        { label: "Technology and industry", file: "ENGL465-Topic 5.pdf", page: "pp. 11–13" }
      ]
    },

    {
      id: "topic6",
      code: "Topic 6",
      title: "Translation Technologies and Minority Languages",
      category: "technology",
      source: {
        file: "ENGL465-Topic 6.pdf",
        path: "./pdf/ENGL465-Topic 6.pdf",
        pages: "pp. 4–9"
      },
      overview: [
        "Translation technologies tend to support economically dominant languages more strongly than minority languages.",
        "Many minority languages lack even basic digital tools such as spell-checkers, dictionaries, OCR, or CAT systems.",
        "Developing resources for such languages requires deliberate work in corpora, lexical resources, linguistic description, and open collaboration."
      ],
      definitions: [
        { term: "Minority Language", meaning: "A language spoken by fewer than 50% of the population in a geopolitical area and often lacking official recognition." },
        { term: "High-resource Language", meaning: "A language with strong digital resources and advanced language technologies." },
        { term: "Mid-resource Language", meaning: "A language with some tools but still limited technological support." },
        { term: "Low-resource Language", meaning: "A language with little or no advanced computational support." },
        { term: "NIML", meaning: "Non-Indigenous Minority Language." }
      ],
      keyPoints: [
        "Digital inequality often follows political and economic power.",
        "Resource gaps affect keyboards, OCR, spell-checkers, dictionaries, CAT tools, and MT systems.",
        "Languages using non-Roman scripts often face additional technical challenges.",
        "Solutions include corpora, word-list extraction, machine-readable dictionaries, bilingual corpora, and linguistic annotation.",
        "Funding and commercial incentives are weak, which slows progress."
      ],
      examples: [
        "A major language may have strong MT and grammar-checking while a minority language lacks even a robust keyboard setup.",
        "Hindi or Urdu may have some resources but not the same ecosystem depth as English or French.",
        "An open-source bilingual corpus can support both dictionary building and basic TM creation."
      ],
      process: [
        { step: "1", title: "Collect texts", detail: "Gather well-typed material in the target language." },
        { step: "2", title: "Extract word-lists", detail: "Build lexical foundations from corpora." },
        { step: "3", title: "Digitize dictionaries", detail: "Convert print or older resources into usable digital formats." },
        { step: "4", title: "Build bilingual corpora", detail: "Use parallel texts for terminology and TM support." },
        { step: "5", title: "Develop linguistic descriptions", detail: "Create the grammar and tagging knowledge needed for advanced tools." }
      ],
      compare: {
        headers: ["Tier", "Resource Profile", "Examples from Topic"],
        rows: [
          ["High-resource", "Advanced MT/CAT and proofreading tools", "English, Mandarin"],
          ["Mid-resource", "Partial support and limited tools", "Swahili, Tamil"],
          ["Low-resource", "Minimal or missing computational tools", "Many minority and refugee languages"]
        ]
      },
      examTips: [
        "Define minority language using both size and status.",
        "Explain that the problem is technological inequality, not linguistic inferiority.",
        "Mention both short-term and long-term solutions."
      ],
      citations: [
        { label: "Introduction to inequality", file: "ENGL465-Topic 6.pdf", page: "p. 4" },
        { label: "Definition and tiers", file: "ENGL465-Topic 6.pdf", page: "p. 5" },
        { label: "Resource categories", file: "ENGL465-Topic 6.pdf", page: "pp. 6–7" },
        { label: "Developing resources", file: "ENGL465-Topic 6.pdf", page: "p. 8" },
        { label: "Conclusions and obstacles", file: "ENGL465-Topic 6.pdf", page: "p. 9" }
      ]
    },

    {
      id: "topic7",
      code: "Topic 7",
      title: "Corpora & the Translator",
      category: "tools",
      source: {
        file: "ENGL465-Topic 7.pdf",
        path: "./pdf/ENGL465-Topic 7.pdf",
        pages: "pp. 4–12"
      },
      overview: [
        "A corpus is a collection of texts stored on a computer for linguistic analysis.",
        "In translation, corpora support terminology work, translation studies, contrastive linguistics, training, and professional practice.",
        "Corpora can help translators understand real usage, compare source and target patterns, and retrieve contextualized examples."
      ],
      definitions: [
        { term: "Corpus", meaning: "A structured collection of texts stored electronically for analysis." },
        { term: "Parallel Corpus", meaning: "A corpus that contains source texts and their translations." },
        { term: "Comparable Corpus", meaning: "A corpus made of separate but comparable text collections in different languages or translation conditions." },
        { term: "Concordance", meaning: "A display of a word or phrase in multiple contexts." },
        { term: "TEC", meaning: "The Translational English Corpus, a web-based corpus of translated English." }
      ],
      keyPoints: [
        "Parallel corpora may be mono-directional or bi-directional.",
        "Comparable corpora help compare translated texts with original texts.",
        "Corpus-based research studies patterns such as simplification, explicitation, and normalization.",
        "Translator training benefits from corpus creation, analysis, and concordancing.",
        "Professional translators can use corpora for style, context, terminology, and consistency."
      ],
      examples: [
        "A bilingual concordance helps a translator see how a technical term was translated before.",
        "A translator trainee may build a specialized corpus to understand a subject field before translating.",
        "TEC can be compared with original English corpora to analyze translated English."
      ],
      process: [
        { step: "1", title: "Collect texts", detail: "Choose texts according to clear linguistic criteria." },
        { step: "2", title: "Store and organize", detail: "Digitize and structure the corpus." },
        { step: "3", title: "Analyze", detail: "Use concordances, frequency lists, and comparative methods." },
        { step: "4", title: "Apply findings", detail: "Use the results in training, research, or professional translation." }
      ],
      compare: {
        headers: ["Corpus Type", "Contents", "Use"],
        rows: [
          ["Parallel", "Source texts + translations", "Equivalence and translation comparison"],
          ["Comparable", "Comparable text groups", "Contrastive study and translation pattern research"],
          ["Monolingual translated corpus", "Translated texts in one language", "Study of translated language features"]
        ]
      },
      examTips: [
        "Give one clear definition of corpus first.",
        "Then distinguish parallel vs comparable corpora.",
        "If discussing translators, mention both training and professional benefits."
      ],
      citations: [
        { label: "Corpus introduction", file: "ENGL465-Topic 7.pdf", page: "p. 4" },
        { label: "Corpus typology", file: "ENGL465-Topic 7.pdf", page: "pp. 5–6" },
        { label: "Descriptive corpus research", file: "ENGL465-Topic 7.pdf", page: "p. 7" },
        { label: "Corpora in translator training", file: "ENGL465-Topic 7.pdf", page: "pp. 8–9" },
        { label: "TEC", file: "ENGL465-Topic 7.pdf", page: "pp. 10–11" },
        { label: "Professional translator", file: "ENGL465-Topic 7.pdf", page: "p. 12" }
      ]
    },

    {
      id: "topic8",
      code: "Topic 8",
      title: "Why Translation Is Difficult for Computers",
      category: "technology",
      source: {
        file: "ENGL465-Topic 8.pdf",
        path: "./pdf/ENGL465-Topic 8.pdf",
        pages: "pp. 4–9"
      },
      overview: [
        "Translation requires more than word substitution: it requires meaning interpretation, contextual disambiguation, and natural reformulation.",
        "Computers struggle because language is ambiguous, culturally embedded, and highly context-sensitive.",
        "Even improved methods such as EBMT and SMT face data and selection limitations."
      ],
      definitions: [
        { term: "Analysis Problem", meaning: "Difficulty in determining the intended meaning of source language items." },
        { term: "Transfer Problem", meaning: "Difficulty in converting understood meaning into an equivalent structure in the target language." },
        { term: "Synthesis Problem", meaning: "Difficulty in choosing the most natural target-language expression." },
        { term: "Problem of Description", meaning: "Difficulty in encoding enough linguistic and world knowledge for translation." },
        { term: "EBMT", meaning: "Example-Based Machine Translation." },
        { term: "SMT", meaning: "Statistical Machine Translation." }
      ],
      keyPoints: [
        "Computers struggle with vaguely defined tasks such as contextual interpretation.",
        "They lack human-like learning from lived experience in ordinary translation situations.",
        "They do not perform common-sense reasoning the way humans do.",
        "Translation requires huge bodies of lexical, grammatical, cultural, and contextual knowledge.",
        "New approaches improved some performance but still depend heavily on data and probability."
      ],
      examples: [
        "The word 'pen' can mean a writing tool or an animal enclosure.",
        "English 'He ran into the room' may require a different verb choice in French.",
        "The phrase 'I miss you' cannot simply be mapped word-for-word across languages."
      ],
      process: [
        { step: "1", title: "Analyze source", detail: "Identify meaning, grammar, and context." },
        { step: "2", title: "Transfer meaning", detail: "Map meaning into target-language structures." },
        { step: "3", title: "Synthesize output", detail: "Generate a natural and acceptable target expression." },
        { step: "4", title: "Evaluate and revise", detail: "Check whether the output preserves meaning and reads well." }
      ],
      compare: {
        headers: ["Human Translator", "Computer System"],
        rows: [
          ["Uses context and world knowledge", "Depends on encoded or learned patterns"],
          ["Handles ambiguity flexibly", "May select the wrong sense"],
          ["Can reason about intent and tone", "Often weak in common-sense interpretation"],
          ["Can creatively reformulate", "Often limited to known patterns and probabilities"]
        ]
      },
      examTips: [
        "Use the four limitations and four problems as your main structure.",
        "A strong answer should include an ambiguity example.",
        "Mention EBMT and SMT as improvements, but not complete solutions."
      ],
      citations: [
        { label: "Nature of translation", file: "ENGL465-Topic 8.pdf", page: "p. 4" },
        { label: "Four computer limitations", file: "ENGL465-Topic 8.pdf", page: "p. 5" },
        { label: "Analysis and transfer", file: "ENGL465-Topic 8.pdf", page: "p. 6" },
        { label: "Synthesis and description", file: "ENGL465-Topic 8.pdf", page: "p. 7" },
        { label: "EBMT and SMT", file: "ENGL465-Topic 8.pdf", page: "p. 8" }
      ]
    },

    {
      id: "topic11",
      code: "Topic 11",
      title: "How to Evaluate Machine Translation",
      category: "practice",
      source: {
        file: "ENGL465-Topic 11.pdf",
        path: "./pdf/ENGL465-Topic 11.pdf",
        pages: "pp. 4–13"
      },
      overview: [
        "MT evaluation is necessary because machine-translated output varies in quality depending on text type, purpose, and user needs.",
        "Evaluation can focus on translation quality, system performance, usability, or stakeholder interests.",
        "No single evaluation method is enough; strong evaluation combines human and automatic perspectives."
      ],
      definitions: [
        { term: "Declarative Evaluation", meaning: "Evaluation based on predefined quality judgments such as accuracy and usefulness." },
        { term: "Black-box Evaluation", meaning: "Evaluation based on system input and output without examining internal mechanisms." },
        { term: "Glass-box Evaluation", meaning: "Evaluation that looks into the internal workings of the MT system." },
        { term: "Adequacy", meaning: "How much of the source meaning is preserved in the translation." },
        { term: "Fluency", meaning: "How natural and grammatically acceptable the translation sounds." },
        { term: "BLEU", meaning: "An automatic metric that compares MT output to reference translations using overlap." }
      ],
      keyPoints: [
        "Error analysis identifies grammar, lexical, semantic, and structural problems.",
        "Adequacy and fluency ratings are important because they reflect both meaning and readability.",
        "Informativeness asks whether users can obtain needed information from the translation.",
        "Usability and cost-effectiveness matter in institutional and business contexts.",
        "Automatic metrics are fast but limited in their ability to judge true meaning and quality."
      ],
      examples: [
        "A translation may score well on word overlap but still misrepresent the source meaning.",
        "A company may accept lower fluency if the system saves enough time for internal use.",
        "A developer may focus on error patterns while an end-user focuses on readability and usefulness."
      ],
      process: [
        { step: "1", title: "Set evaluation goal", detail: "Decide whether the focus is quality, cost, speed, or usability." },
        { step: "2", title: "Choose methods", detail: "Use human judgments, error analysis, and/or automatic metrics." },
        { step: "3", title: "Test and compare", detail: "Evaluate outputs, systems, or workflows." },
        { step: "4", title: "Interpret results", detail: "Relate the outcome to stakeholder needs." }
      ],
      compare: {
        headers: ["Method Type", "Strength", "Limitation"],
        rows: [
          ["Human evaluation", "Captures meaning and fluency better", "Slow and costly"],
          ["Automatic evaluation", "Fast and scalable", "Weak on deep semantics and style"],
          ["Operational evaluation", "Reflects real use conditions", "May sacrifice detailed linguistic insight"]
        ]
      },
      examTips: [
        "Discuss both human and automatic evaluation in any full answer.",
        "Use adequacy and fluency as a human-evaluation anchor.",
        "Mention BLEU critically rather than presenting it as perfect."
      ],
      citations: [
        { label: "Introduction", file: "ENGL465-Topic 11.pdf", page: "p. 4" },
        { label: "Evaluation approaches", file: "ENGL465-Topic 11.pdf", page: "p. 5" },
        { label: "Quality methods", file: "ENGL465-Topic 11.pdf", page: "pp. 6–8" },
        { label: "Challenges", file: "ENGL465-Topic 11.pdf", page: "p. 9" },
        { label: "Stakeholders", file: "ENGL465-Topic 11.pdf", page: "pp. 10–11" },
        { label: "Automatic methods", file: "ENGL465-Topic 11.pdf", page: "p. 12" }
      ]
    },

    {
      id: "topic12",
      code: "Topic 12",
      title: "Sublanguage",
      category: "technology",
      source: {
        file: "ENGL465-Topic 12.pdf",
        path: "./pdf/ENGL465-Topic 12.pdf",
        pages: "pp. 4–10"
      },
      overview: [
        "A sublanguage is a specialized variety of language associated with a restricted field, community, or task.",
        "Sublanguages are useful in MT because they reduce variability: vocabulary is limited, grammar is predictable, and text structure is regular.",
        "The Canadian Météo system is a classic case showing that MT can work very well in restricted domains."
      ],
      definitions: [
        { term: "Sublanguage", meaning: "A smaller, specialized version of a language used in a specific domain such as weather, medicine, or finance." },
        { term: "Controlled Language", meaning: "A deliberately restricted language with explicit rules; unlike sublanguage, it does not arise naturally." },
        { term: "Météo System", meaning: "A machine translation system that translated weather bulletins from English to French with high success." }
      ],
      keyPoints: [
        "Sublanguages typically have specialized vocabulary.",
        "They often favor recurring grammatical structures.",
        "Document formats are usually predictable and repeated.",
        "These properties make them more MT-friendly than general everyday language.",
        "Not all sublanguages are equally easy: weather reports and stock reports are easier than legalese or technical maintenance language."
      ],
      examples: [
        "Weather bulletins use a small, repeated vocabulary and simple sentence structures.",
        "Finance reports use recurring verbs for rise and fall.",
        "Legal language may still count as a sublanguage, but it is harder for MT because of long, complex syntax."
      ],
      process: [
        { step: "1", title: "Identify restricted domain", detail: "Choose a domain with stable terminology and format." },
        { step: "2", title: "Describe vocabulary and grammar", detail: "List domain terms and recurring structures." },
        { step: "3", title: "Build transformations", detail: "Create translation rules or patterns for the domain." },
        { step: "4", title: "Test repeatedly", detail: "Evaluate accuracy on real domain texts." }
      ],
      compare: {
        headers: ["Type", "Why Easier/Harder for MT", "Example"],
        rows: [
          ["Easy sublanguage", "Restricted vocabulary and simple patterns", "Weather reports"],
          ["Moderate sublanguage", "Repeated domain expressions but some variation", "Stock reports, medical reports"],
          ["Hard sublanguage", "Long complex syntax and dense phrasing", "Legalese, aircraft manuals"]
        ]
      },
      examTips: [
        "Define sublanguage clearly and distinguish it from controlled language.",
        "Use the Météo system as your main example.",
        "Explain vocabulary, grammar, and text format as the three key features."
      ],
      citations: [
        { label: "What is a sublanguage?", file: "ENGL465-Topic 12.pdf", page: "p. 4" },
        { label: "Why important for MT", file: "ENGL465-Topic 12.pdf", page: "p. 5" },
        { label: "Features", file: "ENGL465-Topic 12.pdf", page: "pp. 6–7" },
        { label: "Challenges and easy vs difficult cases", file: "ENGL465-Topic 12.pdf", page: "p. 8" },
        { label: "Météo case study", file: "ENGL465-Topic 12.pdf", page: "p. 9" }
      ]
    },

    {
      id: "topic13",
      code: "Topic 13",
      title: "Post-Editing",
      category: "practice",
      source: {
        file: "ENGL465-Topic 13.pdf",
        path: "./pdf/ENGL465-Topic 13.pdf",
        pages: "pp. 4–13"
      },
      overview: [
        "Post-editing is the process of correcting machine-translated text so that it becomes accurate, usable, and appropriately fluent.",
        "Its level depends on purpose: some texts only need to be understandable, while others must be polished for publication.",
        "As MT improves, post-editing becomes a more specialized professional skill."
      ],
      definitions: [
        { term: "Post-Editing", meaning: "Human correction of machine-translated text." },
        { term: "Minimal Post-Editing (MPE)", meaning: "A level of post-editing aimed at basic understandability with minimal effort." },
        { term: "Full Post-Editing (FPE)", meaning: "A higher level of post-editing aimed at near-human quality." },
        { term: "SAE J2450", meaning: "A structured translation error classification standard used in technical and post-editing evaluation." }
      ],
      keyPoints: [
        "Post-editing is necessary because MT still makes contextual, lexical, and stylistic mistakes.",
        "MPE and FPE differ in purpose, effort, and expected quality.",
        "Common challenges include fatigue, inconsistent MT output, and balancing speed against quality.",
        "Best practices include pre-editing, glossary use, TM support, and post-editor training.",
        "SAE J2450 identifies seven error types relevant to technical and post-editing contexts."
      ],
      examples: [
        "A quick internal report may only require MPE.",
        "A public-facing marketing document would require FPE or even full retranslation.",
        "A repeated MT terminology inconsistency can be fixed with a termbase or glossary."
      ],
      process: [
        { step: "1", title: "Assess purpose", detail: "Decide whether MPE or FPE is required." },
        { step: "2", title: "Correct major issues", detail: "Fix mistranslations, omissions, and grammatical breakdowns." },
        { step: "3", title: "Refine style and consistency", detail: "Improve terminology, punctuation, and fluency as needed." },
        { step: "4", title: "Finalize and evaluate", detail: "Check against quality standards and workflow needs." }
      ],
      compare: {
        headers: ["Aspect", "MPE", "FPE"],
        rows: [
          ["Goal", "Understandability", "High-quality, polished text"],
          ["Effort", "Lower", "Higher"],
          ["Use case", "Internal or quick-use documents", "Published, official, or public content"],
          ["Naturalness", "Not the main priority", "Important priority"]
        ]
      },
      examTips: [
        "Always define post-editing first, then split the answer into MPE and FPE.",
        "Use at least two best practices in your answer.",
        "If SAE J2450 appears, list the seven errors clearly."
      ],
      citations: [
        { label: "Definition", file: "ENGL465-Topic 13.pdf", page: "p. 4" },
        { label: "Types of post-editing", file: "ENGL465-Topic 13.pdf", page: "p. 5" },
        { label: "Challenges", file: "ENGL465-Topic 13.pdf", page: "p. 6" },
        { label: "Best practices", file: "ENGL465-Topic 13.pdf", page: "pp. 7–9" },
        { label: "Future of post-editing", file: "ENGL465-Topic 13.pdf", page: "p. 10" },
        { label: "SAE J2450 activity", file: "ENGL465-Topic 13.pdf", page: "pp. 12–13" }
      ]
    }
  ],

  flashcards: [
    /* Topic 1 */
    { id: "f1", topicId: "topic1", front: "Define Computer-Assisted Translation (CAT).", back: "CAT is the use of computer tools to assist human translators in producing accurate, efficient, and consistent translations.", ref: "Topic 1, p. 4" },
    { id: "f2", topicId: "topic1", front: "How does CAT differ from MT?", back: "CAT assists the human translator, while MT attempts to automate translation itself.", ref: "Topic 1, p. 4" },
    { id: "f3", topicId: "topic1", front: "Why are CAT tools useful in technical translation?", back: "Because technical texts are repetitive and require strong consistency in terminology and phrasing.", ref: "Topic 1, pp. 4, 11" },
    { id: "f4", topicId: "topic1", front: "What did Warren Weaver propose in 1949?", back: "He suggested applying computational methods and pattern-based ideas to translation.", ref: "Topic 1, p. 5" },
    { id: "f5", topicId: "topic1", front: "Why was the ALPAC report influential?", back: "It concluded early MT was slow, inaccurate, and expensive, which redirected attention toward translator aids.", ref: "Topic 1, pp. 7–8" },
    { id: "f6", topicId: "topic1", front: "Name three core CAT components.", back: "Translation memory, terminology management, and quality assurance.", ref: "Topic 1, pp. 9–10" },
    { id: "f7", topicId: "topic1", front: "Give one major limitation of CAT.", back: "CAT tools cannot replace human creativity or deep cultural understanding.", ref: "Topic 1, p. 12" },

    /* Topic 2 */
    { id: "f8", topicId: "topic2", front: "What is a translator’s workstation?", back: "A coordinated set of tools that supports translation, research, formatting, and delivery.", ref: "Topic 2, pp. 4, 15" },
    { id: "f9", topicId: "topic2", front: "What does MAHT stand for?", back: "Machine-Aided Human Translation.", ref: "Topic 2, p. 4" },
    { id: "f10", topicId: "topic2", front: "What does HAMT stand for?", back: "Human-Aided Machine Translation.", ref: "Topic 2, p. 4" },
    { id: "f11", topicId: "topic2", front: "Name two basic tools in a workstation.", back: "Word processors and terminology management systems.", ref: "Topic 2, p. 7" },
    { id: "f12", topicId: "topic2", front: "What is the role of dictation tools?", back: "They allow speech recognition input, which can improve speed and reduce typing strain.", ref: "Topic 2, p. 8" },
    { id: "f13", topicId: "topic2", front: "What is a concordance?", back: "A list showing occurrences of a word or phrase with its surrounding context.", ref: "Topic 2, p. 13" },
    { id: "f14", topicId: "topic2", front: "Why are markup languages important in translation workflows?", back: "They preserve structure and formatting and can carry hidden instructions or annotations.", ref: "Topic 2, p. 9" },

    /* Topic 3 */
    { id: "f15", topicId: "topic3", front: "What is the basic purpose of a TM system?", back: "To store previous translations and retrieve similar ones for reuse.", ref: "Topic 3, pp. 4–5" },
    { id: "f16", topicId: "topic3", front: "What is an aligned parallel corpus?", back: "A source text and its translation matched segment by segment.", ref: "Topic 3, p. 9" },
    { id: "f17", topicId: "topic3", front: "Name three ways to build a TM database.", back: "Build as you go, import an existing TM, or align a parallel text.", ref: "Topic 3, pp. 9–10" },
    { id: "f18", topicId: "topic3", front: "What is an exact match?", back: "A retrieved TM segment identical to the new source segment.", ref: "Topic 3, p. 13" },
    { id: "f19", topicId: "topic3", front: "What is a context match?", back: "An exact match where the surrounding segments also match.", ref: "Topic 3, p. 13" },
    { id: "f20", topicId: "topic3", front: "What is a fuzzy match?", back: "A similar but not identical segment suggested by the TM.", ref: "Topic 3, p. 14" },
    { id: "f21", topicId: "topic3", front: "Why is alignment difficult?", back: "Because sentences may split, merge, reorder, or use different punctuation across languages.", ref: "Topic 3, pp. 10–11" },

    /* Topic 4 */
    { id: "f22", topicId: "topic4", front: "What is terminology in translation?", back: "The organized use of specialized terms within specific subject fields.", ref: "Topic 4, p. 4" },
    { id: "f23", topicId: "topic4", front: "What is a term record?", back: "A structured record containing information about a concept and its term(s).", ref: "Topic 4, p. 6" },
    { id: "f24", topicId: "topic4", front: "How does a term bank differ from a termbase?", back: "A term bank is richer and more encyclopedic; a termbase is shorter and more operational.", ref: "Topic 4, pp. 6–7" },
    { id: "f25", topicId: "topic4", front: "Why do machine-oriented term records need more structure?", back: "Because machines require explicit grammatical, semantic, and compatibility information.", ref: "Topic 4, p. 7" },
    { id: "f26", topicId: "topic4", front: "What is linguistic term extraction?", back: "Extraction based on grammatical patterns such as adjective + noun combinations.", ref: "Topic 4, p. 10" },
    { id: "f27", topicId: "topic4", front: "What is statistical term extraction?", back: "Extraction based on frequency and co-occurrence patterns in text.", ref: "Topic 4, p. 10" },
    { id: "f28", topicId: "topic4", front: "Define noise and silence in term extraction.", back: "Noise is false positives; silence is important terms that were missed.", ref: "Topic 4, p. 10" },

    /* Topic 5 */
    { id: "f29", topicId: "topic5", front: "What is localization?", back: "Adapting a product linguistically, culturally, and technically for a target market.", ref: "Topic 5, p. 4" },
    { id: "f30", topicId: "topic5", front: "What does i18n mean?", back: "Internationalization: designing a product so it can support multiple languages and markets.", ref: "Topic 5, p. 5" },
    { id: "f31", topicId: "topic5", front: "What does g11n mean?", back: "Globalization: the wider process of bringing products to international markets.", ref: "Topic 5, p. 5" },
    { id: "f32", topicId: "topic5", front: "Name one difference between translation and localization.", back: "Localization includes cultural and technical adaptation, not only language transfer.", ref: "Topic 5, p. 6" },
    { id: "f33", topicId: "topic5", front: "List two major components of a localization project.", back: "Examples: software, online help, documentation, and web content.", ref: "Topic 5, p. 7" },
    { id: "f34", topicId: "topic5", front: "Who oversees the whole localization project?", back: "The project manager.", ref: "Topic 5, p. 8" },
    { id: "f35", topicId: "topic5", front: "Name the six localization process stages.", back: "Project setup, translation, review, production, quality assurance, and project closure.", ref: "Topic 5, pp. 9–10" },

    /* Topic 6 */
    { id: "f36", topicId: "topic6", front: "How is a minority language defined in this topic?", back: "It is spoken by fewer than 50% of the population in an area and often lacks official status.", ref: "Topic 6, p. 5" },
    { id: "f37", topicId: "topic6", front: "What is a high-resource language?", back: "A language with advanced digital tools such as MT, CAT, dictionaries, and grammar tools.", ref: "Topic 6, p. 5" },
    { id: "f38", topicId: "topic6", front: "What is a low-resource language?", back: "A language with little or no advanced computational support.", ref: "Topic 6, p. 5" },
    { id: "f39", topicId: "topic6", front: "Why are some non-Roman-script languages especially underserved?", back: "Because advanced input, OCR, and other tools are harder to develop and often less available.", ref: "Topic 6, pp. 6–7" },
    { id: "f40", topicId: "topic6", front: "What can monolingual word-lists be used for?", back: "They help build dictionaries and customized spell-checkers.", ref: "Topic 6, p. 8" },
    { id: "f41", topicId: "topic6", front: "Why are bilingual corpora useful for minority languages?", back: "They support vocabulary extraction and TM-like reuse.", ref: "Topic 6, p. 8" },
    { id: "f42", topicId: "topic6", front: "What are two major obstacles to better tools for minority languages?", back: "Lack of funding and lack of commercial interest.", ref: "Topic 6, p. 9" },

    /* Topic 7 */
    { id: "f43", topicId: "topic7", front: "What is a corpus?", back: "A collection of texts stored on a computer for analysis.", ref: "Topic 7, p. 4" },
    { id: "f44", topicId: "topic7", front: "What is a parallel corpus?", back: "A corpus containing source texts and their translations.", ref: "Topic 7, p. 5" },
    { id: "f45", topicId: "topic7", front: "What is a comparable corpus?", back: "A corpus made of comparable text collections rather than direct source-translation pairs.", ref: "Topic 7, p. 5" },
    { id: "f46", topicId: "topic7", front: "How do corpora support translator training?", back: "They help trainees analyze usage, improve comprehension, and develop more natural phrasing.", ref: "Topic 7, pp. 8–9" },
    { id: "f47", topicId: "topic7", front: "What is TEC?", back: "The Translational English Corpus, a web-based corpus of translated English.", ref: "Topic 7, p. 10" },
    { id: "f48", topicId: "topic7", front: "Name one use of a bilingual concordance.", back: "It helps a translator see how a word, phrase, or term was translated in context.", ref: "Topic 7, p. 12 and Topic 2, p. 13" },
    { id: "f49", topicId: "topic7", front: "Name one translation feature studied in corpora.", back: "Examples include simplification, normalization, and explicitation.", ref: "Topic 7, pp. 7, 10" },

    /* Topic 8 */
    { id: "f50", topicId: "topic8", front: "Why is translation difficult for computers?", back: "Because translation requires contextual understanding, ambiguity resolution, common sense, and natural reformulation.", ref: "Topic 8, pp. 4–7" },
    { id: "f51", topicId: "topic8", front: "What is the analysis problem?", back: "The difficulty of identifying the correct meaning of source language words and expressions.", ref: "Topic 8, p. 6" },
    { id: "f52", topicId: "topic8", front: "What is the transfer problem?", back: "The difficulty of expressing understood meaning appropriately in the target language.", ref: "Topic 8, p. 6" },
    { id: "f53", topicId: "topic8", front: "What is the synthesis problem?", back: "The difficulty of choosing the most natural target-language form among many possibilities.", ref: "Topic 8, p. 7" },
    { id: "f54", topicId: "topic8", front: "What is the problem of description?", back: "The challenge of encoding enough grammar, vocabulary, and world knowledge for translation.", ref: "Topic 8, p. 7" },
    { id: "f55", topicId: "topic8", front: "What is EBMT?", back: "Example-Based Machine Translation, which uses stored examples to propose translations.", ref: "Topic 8, p. 8" },
    { id: "f56", topicId: "topic8", front: "What is a core limitation of SMT?", back: "It needs large datasets and may still struggle to choose the best translation among many options.", ref: "Topic 8, p. 8" },

    /* Topic 11 */
    { id: "f57", topicId: "topic11", front: "What is MT evaluation?", back: "The process of assessing translation quality and system performance in machine translation.", ref: "Topic 11, pp. 4–5" },
    { id: "f58", topicId: "topic11", front: "What is black-box evaluation?", back: "Evaluation of an MT system based on input and output without inspecting internal mechanisms.", ref: "Topic 11, p. 5" },
    { id: "f59", topicId: "topic11", front: "What is glass-box evaluation?", back: "Evaluation that examines the internal workings of the MT system.", ref: "Topic 11, p. 5" },
    { id: "f60", topicId: "topic11", front: "What does adequacy measure?", back: "How much of the source content and meaning is preserved.", ref: "Topic 11, p. 7" },
    { id: "f61", topicId: "topic11", front: "What does fluency measure?", back: "How natural and grammatically well-formed the translation sounds.", ref: "Topic 11, p. 7" },
    { id: "f62", topicId: "topic11", front: "What is BLEU?", back: "An automatic MT evaluation metric based on overlap with human reference translations.", ref: "Topic 11, p. 12" },
    { id: "f63", topicId: "topic11", front: "Why can’t automatic metrics fully replace humans?", back: "Because they often miss deeper meaning, context, and stylistic quality.", ref: "Topic 11, pp. 12–13" },

    /* Topic 12 */
    { id: "f64", topicId: "topic12", front: "What is a sublanguage?", back: "A specialized variety of language used in a limited domain such as weather, medicine, or finance.", ref: "Topic 12, p. 4" },
    { id: "f65", topicId: "topic12", front: "Why are sublanguages useful for MT?", back: "Because they often have limited vocabulary, predictable grammar, and stable text formats.", ref: "Topic 12, pp. 5–7" },
    { id: "f66", topicId: "topic12", front: "Name the three main features of sublanguages.", back: "Vocabulary, grammar, and text format.", ref: "Topic 12, pp. 6–7" },
    { id: "f67", topicId: "topic12", front: "Why are weather reports MT-friendly?", back: "They use a small vocabulary, simple grammar, and fixed templates.", ref: "Topic 12, pp. 5, 8–9" },
    { id: "f68", topicId: "topic12", front: "What is the Météo system?", back: "A Canadian MT system that translated weather bulletins from English into French with high success.", ref: "Topic 12, p. 9" },
    { id: "f69", topicId: "topic12", front: "Give one difficult-to-translate sublanguage example.", back: "Legal language or aircraft maintenance manuals.", ref: "Topic 12, p. 8" },
    { id: "f70", topicId: "topic12", front: "How many words did the Météo system reportedly work with?", back: "About 1,000 words, excluding place names.", ref: "Topic 12, pp. 6, 9" },

    /* Topic 13 */
    { id: "f71", topicId: "topic13", front: "What is post-editing?", back: "Improving machine-translated text by correcting errors for accuracy, fluency, and readability.", ref: "Topic 13, p. 4" },
    { id: "f72", topicId: "topic13", front: "What is minimal post-editing?", back: "Post-editing aimed mainly at understandability with minimal intervention.", ref: "Topic 13, p. 5" },
    { id: "f73", topicId: "topic13", front: "What is full post-editing?", back: "Post-editing aimed at high-quality output close to human translation standards.", ref: "Topic 13, p. 5" },
    { id: "f74", topicId: "topic13", front: "Name one challenge in post-editing.", back: "Mental fatigue caused by constant error detection and decision-making.", ref: "Topic 13, p. 6" },
    { id: "f75", topicId: "topic13", front: "Name one best practice in post-editing.", back: "Pre-editing the source text, or using TM and glossaries to support consistency.", ref: "Topic 13, pp. 7–8" },
    { id: "f76", topicId: "topic13", front: "What does SAE J2450 provide?", back: "A classification of translation error types used in technical and post-editing evaluation.", ref: "Topic 13, p. 8" },
    { id: "f77", topicId: "topic13", front: "Name three SAE J2450 error types.", back: "Examples: Wrong Term, Omission, Misspelling, Syntactic Error, Agreement Error, Punctuation Error, Miscellaneous Error.", ref: "Topic 13, pp. 8–9" }
  ],

  quizzes: [
    /* Topic 1 */
    { id: "q1", topicId: "topic1", question: "Which statement best defines CAT?", options: ["It replaces translators completely.", "It assists human translators with digital tools.", "It only performs OCR.", "It is another name for localization."], answer: 1, explanation: "CAT is designed to assist human translators rather than replace them.", ref: "Topic 1, p. 4", difficulty: "basic" },
    { id: "q2", topicId: "topic1", question: "Which event pushed the field toward translator aids instead of full MT?", options: ["The Météo system", "The ALPAC report", "The TEC project", "The Lingua project"], answer: 1, explanation: "The ALPAC report criticized MT performance and promoted translation aids.", ref: "Topic 1, pp. 7–8", difficulty: "basic" },
    { id: "q3", topicId: "topic1", question: "Which is NOT a core CAT component listed in the topic?", options: ["Translation Memory", "Terminology Management", "Quality Assurance", "Satellite Navigation"], answer: 3, explanation: "Satellite navigation is unrelated to CAT tool components.", ref: "Topic 1, pp. 9–10", difficulty: "basic" },
    { id: "q4", topicId: "topic1", question: "CAT is especially useful in which kind of

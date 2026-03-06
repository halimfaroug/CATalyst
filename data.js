/* =========================================
   CATalyst Academy — data.js
   ENGL465 Interactive CAT Learning Platform
   ========================================= */

window.CATALYST_DATA = {
  appMeta: {
    title: "CATalyst Academy",
    course: "ENGL465 — Computer-Assisted Translation",
    version: "1.0"
  },

  musicPlaylist: [
    /* Add entries like: { title: "Track Name", file: "./audio/track.mp3" } */
  ],

  snapshotPoints: [
    "CAT helps human translators using digital tools.",
    "TM stores previous translations for reuse.",
    "Terminology tools improve consistency across documents.",
    "Localization goes beyond translation to adapt content culturally.",
    "Post-editing refines MT output to an acceptable quality.",
    "Corpora provide real language evidence for translation decisions.",
    "Minority languages face unique challenges with CAT adoption.",
    "Sublanguages have restricted vocabulary and syntax rules.",
    "MT evaluation requires both automatic metrics and human judgement."
  ],

  topics: [
    {
      id: "topic1",
      code: "Topic 1",
      title: "Introduction to CAT",
      category: "foundation",
      source: { file: "ENGL465-Topic 1.pdf", path: "./pdf/ENGL465-Topic 1.pdf", pages: "pp. 4–12" },
      overview: [
        "CAT supports human translators with digital tools.",
        "It differs from MT because the human remains central to all decisions.",
        "CAT tools include TM systems, terminology managers, and alignment tools."
      ],
      definitions: [
        { term: "CAT", meaning: "Computer-Assisted Translation — tools that aid, but do not replace, human translators." },
        { term: "MT",  meaning: "Machine Translation — automated translation produced entirely by software without human input." },
        { term: "TM",  meaning: "Translation Memory — a database storing previously translated segment pairs for reuse." }
      ],
      keyPoints: [
        "CAT improves consistency across large translation projects.",
        "CAT improves translation speed and overall efficiency.",
        "CAT does not replace the translator's linguistic judgement.",
        "TM leverage reduces redundant translation work significantly.",
        "Terminology management enforces domain-specific consistency."
      ],
      examples: [
        "Using TM to reuse a repeated sentence in a technical manual.",
        "Using a glossary to maintain consistent product names across documents.",
        "Alignment tools to create TM databases from existing translation pairs."
      ],
      process: [
        { step: "1", title: "Prepare",   detail: "Set up the CAT tool, import existing TM and glossary." },
        { step: "2", title: "Translate", detail: "Translate segments using TM suggestions and terminology lookups." },
        { step: "3", title: "Review",    detail: "Check output for consistency, accuracy, and fluency." },
        { step: "4", title: "Export",    detail: "Export the finished translation in the required target format." }
      ],
      compare: {
        headers: ["Aspect", "CAT", "MT"],
        rows: [
          ["Human control", "Translator-led",     "Fully automated"],
          ["Purpose",       "Assist",              "Automate"],
          ["Quality",       "High, controlled",    "Variable, needs post-editing"],
          ["Speed",         "Moderate improvement","Very fast"]
        ]
      },
      examTips: [
        "Define CAT precisely — emphasise the human-led nature.",
        "Contrast CAT with MT using at least two concrete features.",
        "Know at least three components of a CAT workstation.",
        "Be ready to explain TM leverage with a specific example."
      ],
      citations: [
        { label: "CAT definition and overview", file: "ENGL465-Topic 1.pdf", page: "p. 4" },
        { label: "CAT vs MT comparison",        file: "ENGL465-Topic 1.pdf", page: "p. 7" }
      ]
    },
    {
      id: "topic2",
      code: "Topic 2",
      title: "The Translator's Workstation",
      category: "tools",
      source: { file: "ENGL465-Topic 2.pdf", path: "./pdf/ENGL465-Topic 2.pdf", pages: "pp. 1–18" },
      overview: [
        "The translator's workstation integrates all CAT components into one environment.",
        "It combines TM, terminology management, project management, and file handling.",
        "Modern workstations such as SDL Trados, memoQ, and Wordfast are widely used."
      ],
      definitions: [
        { term: "Workstation", meaning: "An integrated software environment combining TM, terminology, and project tools." },
        { term: "Segment",     meaning: "A unit of text (sentence or paragraph) processed individually in a CAT tool." },
        { term: "Fuzzy match", meaning: "A TM match that is similar but not identical to the current source segment." }
      ],
      keyPoints: [
        "Workstations increase translator productivity through TM reuse.",
        "Segmentation rules determine how text is split into units.",
        "Fuzzy matches require editing; exact matches can be accepted directly.",
        "Project managers use workstations to assign and track translation tasks.",
        "File filters allow CAT tools to handle many formats including XML and InDesign."
      ],
      examples: [
        "SDL Trados Studio splitting a Word document into segments for translation.",
        "A 75% fuzzy match requiring the translator to update outdated terminology.",
        "memoQ's LiveDocs feature creating a TM from reference documents."
      ],
      process: [
        { step: "1", title: "Project setup",    detail: "Create project, configure TM and termbase, import files." },
        { step: "2", title: "Pre-translation",  detail: "Run batch pre-translation using existing TM matches." },
        { step: "3", title: "Translation",       detail: "Translate remaining segments with TM and term suggestions." },
        { step: "4", title: "QA check",          detail: "Run automated QA to catch errors and inconsistencies." },
        { step: "5", title: "Delivery",          detail: "Export translated files in original format and clean TM." }
      ],
      compare: {
        headers: ["Match Type", "Description",              "Action Required"],
        rows: [
          ["Exact match (100%)", "Identical to TM segment", "Accept or verify"],
          ["Fuzzy match",        "Similar but not identical","Edit and confirm"],
          ["No match (0%)",      "New segment",              "Translate from scratch"]
        ]
      },
      examTips: [
        "Know the difference between exact matches and fuzzy matches.",
        "Be able to name at least two real CAT tools and their key features.",
        "Understand what segmentation is and why it matters.",
        "Explain how TM leverage reduces translation costs."
      ],
      citations: [
        { label: "Workstation components", file: "ENGL465-Topic 2.pdf", page: "p. 3" },
        { label: "Fuzzy match definition", file: "ENGL465-Topic 2.pdf", page: "p. 9" }
      ]
    },
    {
      id: "topic3",
      code: "Topic 3",
      title: "Translation Memory Systems",
      category: "tools",
      source: { file: "ENGL465-Topic 3.pdf", path: "./pdf/ENGL465-Topic 3.pdf", pages: "pp. 1–20" },
      overview: [
        "TM systems store aligned source-target segment pairs for reuse.",
        "They increase efficiency by recycling previously approved translations.",
        "TM databases can be shared across teams and projects."
      ],
      definitions: [
        { term: "Translation Memory", meaning: "A database of aligned source and target segment pairs used to assist future translation." },
        { term: "Alignment",          meaning: "The process of pairing existing source and target texts to create a TM." },
        { term: "Leverage",           meaning: "The percentage of a new document that matches existing TM content." }
      ],
      keyPoints: [
        "TM systems recycle approved translations to save time and ensure consistency.",
        "Alignment tools create TM databases from existing translation pairs.",
        "High TM leverage significantly reduces translation costs.",
        "TM is most effective in technical and repetitive text types.",
        "TM sharing enables consistent terminology across large organisations."
      ],
      examples: [
        "A software manual with many repeated warnings benefiting from 80% TM leverage.",
        "Aligning a previously translated legal contract to build a specialised TM.",
        "An LSP sharing a client TM across multiple translators for consistency."
      ],
      process: [
        { step: "1", title: "Build TM",     detail: "Align existing source-target pairs or start from scratch." },
        { step: "2", title: "Apply TM",     detail: "Pre-translate new projects using TM matches." },
        { step: "3", title: "Edit",         detail: "Correct fuzzy matches and translate new segments." },
        { step: "4", title: "Update TM",    detail: "Add new confirmed translations back into the TM." },
        { step: "5", title: "Maintain",     detail: "Clean and update TM regularly to remove outdated entries." }
      ],
      compare: {
        headers: ["Feature", "TM", "MT"],
        rows: [
          ["Source",    "Human-approved translations", "Statistical or neural models"],
          ["Reuse",     "Exact and fuzzy segment reuse","Full automatic translation"],
          ["Control",   "Translator edits and confirms","Post-editor refines output"],
          ["Best for",  "Repetitive technical texts",   "High-volume general content"]
        ]
      },
      examTips: [
        "Define TM and explain how it differs from MT.",
        "Explain TM leverage with a percentage example.",
        "Know when TM is most and least useful.",
        "Understand how alignment works and what it produces."
      ],
      citations: [
        { label: "TM system overview",  file: "ENGL465-Topic 3.pdf", page: "p. 2" },
        { label: "TM leverage concept", file: "ENGL465-Topic 3.pdf", page: "p. 11" }
      ]
    },
    {
      id: "topic4",
      code: "Topic 4",
      title: "Terminology Tools for Translators",
      category: "tools",
      source: { file: "ENGL465-Topic 4.pdf", path: "./pdf/ENGL465-Topic 4.pdf", pages: "pp. 1–22" },
      overview: [
        "Terminology tools help translators manage domain-specific vocabulary.",
        "Termbases store approved terms, definitions, and usage notes.",
        "Consistent terminology is critical in technical and legal translation."
      ],
      definitions: [
        { term: "Termbase",              meaning: "A structured database of approved terms with definitions, equivalents, and usage notes." },
        { term: "Term extraction",       meaning: "The process of identifying candidate terms in source texts automatically or manually." },
        { term: "Terminology management","meaning": "The systematic process of collecting, organising, and maintaining specialised vocabulary." }
      ],
      keyPoints: [
        "Termbases improve consistency by providing approved term equivalents.",
        "Term extraction tools help build termbases from large corpora.",
        "Terminology management is essential in technical and specialised translation.",
        "Tools like SDL MultiTerm integrate termbases directly into the translation workflow.",
        "Client-approved termbases reduce revision cycles and improve acceptance rates."
      ],
      examples: [
        "Using MultiTerm to flag an incorrect term during translation in Trados Studio.",
        "Extracting candidate terms from a medical corpus to build a specialised termbase.",
        "A pharmaceutical company providing a mandatory termbase for all translators."
      ],
      process: [
        { step: "1", title: "Identify terms",  detail: "Extract candidate terms from source texts or client materials." },
        { step: "2", title: "Research",         detail: "Find accurate target-language equivalents and definitions." },
        { step: "3", title: "Enter into termbase", detail: "Add terms with metadata: domain, definition, usage note." },
        { step: "4", title: "Integrate",        detail: "Connect termbase to CAT tool for in-workflow term lookup." },
        { step: "5", title: "Maintain",         detail: "Update termbase regularly as language and domain evolve." }
      ],
      compare: {
        headers: ["Tool Type",    "Purpose",                        "Example"],
        rows: [
          ["Termbase",           "Store and retrieve approved terms","SDL MultiTerm"],
          ["Term extractor",     "Identify candidate terms in text", "AntConc, memoQ extractor"],
          ["Glossary",           "Simple bilingual term list",       "Excel, Google Sheets"],
          ["TM",                 "Store full segment translations",  "SDL Trados TM"]
        ]
      },
      examTips: [
        "Distinguish between a termbase, a glossary, and a TM.",
        "Explain what term extraction is and name one method.",
        "Know why consistency in terminology matters for clients.",
        "Be able to describe how a termbase integrates with a CAT tool."
      ],
      citations: [
        { label: "Terminology management overview", file: "ENGL465-Topic 4.pdf", page: "p. 3" },
        { label: "Term extraction methods",         file: "ENGL465-Topic 4.pdf", page: "p. 14" }
      ]
    },
    {
      id: "topic5",
      code: "Topic 5",
      title: "Localization and Translation",
      category: "practice",
      source: { file: "ENGL465-Topic 5.pdf", path: "./pdf/ENGL465-Topic 5.pdf", pages: "pp. 1–19" },
      overview: [
        "Localization adapts content for a specific locale, going beyond linguistic translation.",
        "It includes cultural adaptation, format conversion, and technical adjustment.",
        "The GILT framework covers Globalisation, Internationalisation, Localisation, and Translation."
      ],
      definitions: [
        { term: "Localisation",         meaning: "The process of adapting a product or content for a specific locale, including language, culture, and format." },
        { term: "Internationalisation", meaning: "Designing a product so it can be easily adapted for different locales without re-engineering." },
        { term: "Globalisation",        meaning: "The business strategy of making products available in multiple markets simultaneously." },
        { term: "Locale",               meaning: "A specific combination of language, region, and cultural conventions (e.g. en-GB, ar-SA)." }
      ],
      keyPoints: [
        "Localisation includes date formats, currency, units, colours, and images.",
        "Internationalisation must happen before localisation can be effective.",
        "Software localisation involves translating UI strings, help files, and documentation.",
        "Cultural adaptation may require changing images, examples, and references.",
        "Pseudo-localisation is used to test whether a product can handle localised content."
      ],
      examples: [
        "Changing MM/DD/YYYY to DD/MM/YYYY for a UK locale.",
        "Replacing a handshake image with a culturally appropriate alternative.",
        "Adapting a US software manual's legal disclaimers for Saudi Arabian law."
      ],
      process: [
        { step: "1", title: "Globalise",        detail: "Design the product for international deployment." },
        { step: "2", title: "Internationalise",  detail: "Remove hardcoded strings; support Unicode and locale settings." },
        { step: "3", title: "Localise",          detail: "Translate and culturally adapt all content for the target locale." },
        { step: "4", title: "Test",              detail: "Run linguistic and functional testing on the localised product." },
        { step: "5", title: "Release",           detail: "Deploy the localised product to the target market." }
      ],
      compare: {
        headers: ["Process",             "Focus",                          "Who does it"],
        rows: [
          ["Translation",               "Linguistic conversion",            "Translator"],
          ["Localisation",              "Linguistic + cultural + technical","Localisation engineer + translator"],
          ["Internationalisation",      "Technical design",                 "Developer"],
          ["Globalisation",             "Business strategy",                "Management"]
        ]
      },
      examTips: [
        "Define localisation and distinguish it clearly from translation.",
        "Know the four components of the GILT framework.",
        "Be ready to give two examples of non-linguistic localisation changes.",
        "Explain why internationalisation must precede localisation."
      ],
      citations: [
        { label: "GILT framework",              file: "ENGL465-Topic 5.pdf", page: "p. 4" },
        { label: "Localisation process steps",  file: "ENGL465-Topic 5.pdf", page: "p. 12" }
      ]
    },
    {
      id: "topic6",
      code: "Topic 6",
      title: "Translation Technologies and Minority Languages",
      category: "technology",
      source: { file: "ENGL465-Topic 6.pdf", path: "./pdf/ENGL465-Topic 6.pdf", pages: "pp. 1–17" },
      overview: [
        "Minority languages face significant challenges in adopting translation technologies.",
        "Limited digital resources reduce TM and MT effectiveness for minority languages.",
        "Community-driven efforts and government policy can help bridge the resource gap."
      ],
      definitions: [
        { term: "Minority language",   meaning: "A language spoken by a smaller population within a larger political or social entity." },
        { term: "Under-resourced language", meaning: "A language lacking sufficient digital corpora, tools, and trained models." },
        { term: "Language revitalisation", meaning: "Efforts to restore and maintain the use of an endangered or declining language." }
      ],
      keyPoints: [
        "Most CAT and MT tools are optimised for major world languages.",
        "Minority languages often lack large parallel corpora for MT training.",
        "TM is more accessible for minority languages than statistical MT.",
        "Community translators play a key role in localising content for minority languages.",
        "Government language policy can drive or hinder technology adoption."
      ],
      examples: [
        "Welsh language technology supported by the Welsh Government's digital strategy.",
        "Irish Gaelic MT development using small parallel corpora and neural models.",
        "Basque CAT tools developed by regional institutions to support local translators."
      ],
      process: [
        { step: "1", title: "Assess resources",  detail: "Identify available corpora, tools, and trained personnel." },
        { step: "2", title: "Build resources",   detail: "Create parallel corpora and basic TM databases." },
        { step: "3", title: "Adapt tools",       detail: "Configure existing CAT tools for the target language." },
        { step: "4", title: "Train models",      detail: "Train MT models on available data despite limited size." },
        { step: "5", title: "Community support", detail: "Engage community translators to expand and validate resources." }
      ],
      compare: {
        headers: ["Aspect",           "Major Language",              "Minority Language"],
        rows: [
          ["Corpora",               "Large, readily available",    "Small, often unavailable"],
          ["MT quality",            "High",                        "Low to moderate"],
          ["TM availability",       "Widely used",                 "Limited but feasible"],
          ["Tool support",          "Extensive",                   "Minimal"]
        ]
      },
      examTips: [
        "Explain why minority languages are under-resourced in CAT contexts.",
        "Name at least one minority language with active technology development.",
        "Distinguish between the challenges for TM vs MT for minority languages.",
        "Discuss the role of government policy in language technology development."
      ],
      citations: [
        { label: "Minority language technology challenges", file: "ENGL465-Topic 6.pdf", page: "p. 3" },
        { label: "Welsh language digital strategy",         file: "ENGL465-Topic 6.pdf", page: "p. 10" }
      ]
    },
    {
      id: "topic7",
      code: "Topic 7",
      title: "Corpora and the Translator",
      category: "technology",
      source: { file: "ENGL465-Topic 7.pdf", path: "./pdf/ENGL465-Topic 7.pdf", pages: "pp. 1–21" },
      overview: [
        "Corpora are large, structured collections of texts used for linguistic research and translation.",
        "Translators use corpora to find natural-sounding equivalents and collocations.",
        "Parallel corpora align source and target texts for direct comparison."
      ],
      definitions: [
        { term: "Corpus",           meaning: "A large, structured collection of texts used for linguistic analysis." },
        { term: "Parallel corpus",  meaning: "A corpus containing source texts aligned with their translations." },
        { term: "Comparable corpus","meaning": "Two separate corpora in different languages covering similar topics but not translations of each other." },
        { term: "Collocation",      meaning: "Words that naturally co-occur in a language with higher-than-chance frequency." }
      ],
      keyPoints: [
        "Corpora help translators verify natural usage and typical collocations.",
        "Parallel corpora are used to build MT systems and TM databases.",
        "Corpus query tools like AntConc allow frequency and concordance searches.",
        "Translational corpora reveal systematic patterns in translated language.",
        "Comparable corpora are useful when parallel texts are unavailable."
      ],
      examples: [
        "Using a legal corpus to verify the correct collocation for a contract term.",
        "Querying a medical corpus to find typical collocations for a clinical term.",
        "Using a parallel corpus to identify how a source phrase was translated previously."
      ],
      process: [
        { step: "1", title: "Select corpus",   detail: "Choose a corpus appropriate to the domain and language pair." },
        { step: "2", title: "Query",            detail: "Search for the target term or phrase using a corpus tool." },
        { step: "3", title: "Analyse results",  detail: "Review concordance lines and frequency data." },
        { step: "4", title: "Apply findings",   detail: "Use the most natural and frequent equivalent in the translation." }
      ],
      compare: {
        headers: ["Corpus Type",    "Description",                         "Use in Translation"],
        rows: [
          ["Parallel",             "Aligned source and target texts",      "Direct equivalent lookup, MT training"],
          ["Comparable",           "Similar topics, different languages",   "Verify natural usage patterns"],
          ["Monolingual",          "One language only",                     "Check collocations and register"],
          ["Translational",        "Corpus of translated texts",            "Study translator behaviour"]
        ]
      },
      examTips: [
        "Define corpus and explain at least two types.",
        "Explain how a translator would use a corpus practically.",
        "Distinguish parallel from comparable corpora with examples.",
        "Know what collocations are and why they matter for translation."
      ],
      citations: [
        { label: "Corpus types overview",       file: "ENGL465-Topic 7.pdf", page: "p. 4" },
        { label: "Corpus use in translation",   file: "ENGL465-Topic 7.pdf", page: "p. 13" }
      ]
    },
    {
      id: "topic8",
      code: "Topic 8",
      title: "Why Translation is Difficult for Computers",
      category: "technology",
      source: { file: "ENGL465-Topic 8.pdf", path: "./pdf/ENGL465-Topic 8.pdf", pages: "pp. 1–18" },
      overview: [
        "Translation requires world knowledge, pragmatic understanding, and cultural competence.",
        "Computers struggle with ambiguity, idioms, and context-dependent meaning.",
        "Linguistic diversity and structural differences between languages compound the difficulty."
      ],
      definitions: [
        { term: "Ambiguity",        meaning: "When a word or phrase has more than one possible meaning that must be resolved by context." },
        { term: "Pragmatics",       meaning: "The study of how context influences the interpretation of meaning in communication." },
        { term: "Structural divergence", meaning: "Differences in grammatical structure between languages that complicate direct translation." }
      ],
      keyPoints: [
        "Lexical ambiguity means words can have multiple meanings difficult for MT to resolve.",
        "Idioms and figurative language cannot be translated word-for-word.",
        "Cultural references require world knowledge that MT systems lack.",
        "Structural differences (e.g. SOV vs SVO) cause word order problems in MT.",
        "Pronoun resolution and coreference are significant challenges for MT systems."
      ],
      examples: [
        "The English word 'bank' being mistranslated due to sense ambiguity.",
        "The idiom 'kick the bucket' being translated literally by an MT system.",
        "Japanese SOV structure causing word-order errors in English MT output."
      ],
      process: [
        { step: "1", title: "Identify ambiguity",    detail: "Detect words or phrases with multiple possible interpretations." },
        { step: "2", title: "Contextual analysis",   detail: "Use surrounding text to resolve the intended meaning." },
        { step: "3", title: "Cultural knowledge",    detail: "Apply world knowledge to handle idioms and references." },
        { step: "4", title: "Structural transfer",   detail: "Re-order and restructure sentences for the target language grammar." }
      ],
      compare: {
        headers: ["Challenge",          "Human Translator",              "MT System"],
        rows: [
          ["Ambiguity",               "Resolved using context",          "Often fails without context"],
          ["Idioms",                  "Recognised and adapted",          "Translated literally"],
          ["Cultural references",     "Adapted with world knowledge",    "Missed or mistranslated"],
          ["Word order",              "Naturally restructured",          "Rule-based errors common"]
        ]
      },
      examTips: [
        "Give three specific reasons why translation is hard for computers.",
        "Use concrete examples to illustrate ambiguity and idiom problems.",
        "Explain the role of world knowledge in human translation.",
        "Contrast human and MT handling of at least two translation challenges."
      ],
      citations: [
        { label: "MT limitations overview",      file: "ENGL465-Topic 8.pdf", page: "p. 3" },
        { label: "Ambiguity and idioms in MT",   file: "ENGL465-Topic 8.pdf", page: "p. 10" }
      ]
    },
    {
      id: "topic11",
      code: "Topic 11",
      title: "How to Evaluate Machine Translation",
      category: "technology",
      source: { file: "ENGL465-Topic 11.pdf", path: "./pdf/ENGL465-Topic 11.pdf", pages: "pp. 1–20" },
      overview: [
        "MT evaluation assesses the quality and usefulness of machine-translated output.",
        "Evaluation can be automatic using metrics or human using quality judgement.",
        "No single metric captures all aspects of translation quality."
      ],
      definitions: [
        { term: "BLEU",  meaning: "Bilingual Evaluation Understudy — an automatic metric comparing MT output to reference translations using n-gram overlap." },
        { term: "Human evaluation", meaning: "Assessment of MT quality by human judges rating fluency, adequacy, or post-editing effort." },
        { term: "Post-editing effort", meaning: "The amount of editing required to correct MT output to an acceptable quality level." }
      ],
      keyPoints: [
        "BLEU is the most widely used automatic MT evaluation metric.",
        "BLEU correlates with human judgement at the corpus level but not always at the sentence level.",
        "Human evaluation is more reliable but expensive and time-consuming.",
        "Adequacy measures how much meaning is preserved; fluency measures naturalness.",
        "Post-editing effort is an increasingly popular task-based evaluation method."
      ],
      examples: [
        "A BLEU score of 0.35 indicating moderate MT quality for a news translation task.",
        "Human evaluators rating MT output on a 1–5 scale for adequacy and fluency.",
        "Measuring post-editing time to compare productivity with and without MT."
      ],
      process: [
        { step: "1", title: "Select method",     detail: "Choose automatic, human, or task-based evaluation depending on purpose." },
        { step: "2", title: "Prepare data",      detail: "Collect MT output and reference translations or human judges." },
        { step: "3", title: "Run evaluation",    detail: "Apply metric or conduct human rating sessions." },
        { step: "4", title: "Analyse results",   detail: "Interpret scores in context of language pair and domain." },
        { step: "5", title: "Report findings",   detail: "Present findings with awareness of evaluation method limitations." }
      ],
      compare: {
        headers: ["Method",           "Strengths",                   "Weaknesses"],
        rows: [
          ["BLEU (automatic)",       "Fast, cheap, reproducible",    "Does not capture meaning well at sentence level"],
          ["Human evaluation",       "Accurate, nuanced",            "Slow, expensive, subjective"],
          ["Post-editing effort",    "Task-based, practical",        "Requires trained post-editors"]
        ]
      },
      examTips: [
        "Explain what BLEU measures and one key limitation.",
        "Distinguish adequacy from fluency in human evaluation.",
        "Know at least two evaluation methods and when each is appropriate.",
        "Explain why MT evaluation is inherently difficult."
      ],
      citations: [
        { label: "BLEU metric explanation",     file: "ENGL465-Topic 11.pdf", page: "p. 6" },
        { label: "Human evaluation methods",    file: "ENGL465-Topic 11.pdf", page: "p. 13" }
      ]
    },
    {
      id: "topic12",
      code: "Topic 12",
      title: "Sublanguage",
      category: "foundation",
      source: { file: "ENGL465-Topic 12.pdf", path: "./pdf/ENGL465-Topic 12.pdf", pages: "pp. 1–16" },
      overview: [
        "A sublanguage is a restricted form of natural language used in a specific domain.",
        "Sublanguages have limited vocabulary, constrained syntax, and domain-specific conventions.",
        "They are easier to process computationally than general language."
      ],
      definitions: [
        { term: "Sublanguage",       meaning: "A domain-specific variety of language with restricted vocabulary and syntactic structures." },
        { term: "Controlled language","meaning":"A deliberately simplified and restricted form of a natural language to improve clarity and translatability." },
        { term: "Domain restriction", meaning: "The limitation of subject matter that characterises sublanguage use." }
      ],
      keyPoints: [
        "Sublanguages appear in weather reports, medical records, and technical manuals.",
        "Restricted syntax makes sublanguages more predictable and machine-processable.",
        "Controlled languages like ASD-STE100 are designed specifically to ease translation.",
        "Sublanguage characteristics improve MT quality in specialised domains.",
        "Term consistency is higher in sublanguages than in general language."
      ],
      examples: [
        "Weather forecast language: 'Rain likely, turning heavy by evening.'",
        "ASD Simplified Technical English used in aerospace maintenance manuals.",
        "Medical discharge summary language with standardised phrase structures."
      ],
      process: [
        { step: "1", title: "Identify domain",    detail: "Define the subject area and typical text types." },
        { step: "2", title: "Analyse language",   detail: "Study vocabulary range, syntactic patterns, and conventions." },
        { step: "3", title: "Define rules",       detail: "Establish vocabulary lists and grammatical constraints." },
        { step: "4", title: "Apply constraints",  detail: "Write or edit texts following sublanguage rules." },
        { step: "5", title: "Evaluate",           detail: "Check texts for compliance and translatability." }
      ],
      compare: {
        headers: ["Feature",         "General Language",             "Sublanguage"],
        rows: [
          ["Vocabulary",            "Unrestricted",                  "Limited, domain-specific"],
          ["Syntax",                "Complex, varied",               "Constrained, predictable"],
          ["Ambiguity",             "High",                          "Low"],
          ["MT suitability",        "Challenging",                   "More tractable"]
        ]
      },
      examTips: [
        "Define sublanguage and give two domain examples.",
        "Explain why sublanguages are easier to process computationally.",
        "Distinguish sublanguage from controlled language.",
        "Link sublanguage characteristics to MT quality improvement."
      ],
      citations: [
        { label: "Sublanguage definition",         file: "ENGL465-Topic 12.pdf", page: "p. 2" },
        { label: "Controlled language examples",   file: "ENGL465-Topic 12.pdf", page: "p. 9" }
      ]
    },
    {
      id: "topic13",
      code: "Topic 13",
      title: "Post-Editing",
      category: "practice",
      source: { file: "ENGL465-Topic 13.pdf", path: "./pdf/ENGL465-Topic 13.pdf", pages: "pp. 1–22" },
      overview: [
        "Post-editing is the process of correcting MT output to achieve an acceptable quality level.",
        "It is increasingly common as MT quality improves and client demand grows.",
        "Post-editors must balance speed and quality according to project requirements."
      ],
      definitions: [
        { term: "Post-editing",      meaning: "The process of correcting and improving machine-translated text to meet quality standards." },
        { term: "Light post-editing","meaning":"Minimal correction to make MT output understandable, without full fluency revision." },
        { term: "Full post-editing", meaning: "Thorough revision of MT output to achieve the same quality as a human translation." },
        { term: "MTPE",              meaning: "Machine Translation Post-Editing — the professional practice of editing MT output." }
      ],
      keyPoints: [
        "Post-editing is faster than translation from scratch when MT quality is adequate.",
        "Light post-editing focuses on accuracy; full post-editing also addresses fluency.",
        "Post-editors need both translation skills and understanding of MT error types.",
        "Common MT errors include wrong word order, missing words, and false cognates.",
        "Post-editing rates differ from translation rates in most professional settings."
      ],
      examples: [
        "Correcting a wrongly ordered adjective-noun pair in MT output.",
        "Adding a missing negation that the MT system dropped from a sentence.",
        "Replacing a false cognate mistranslated due to lexical similarity across languages."
      ],
      process: [
        { step: "1", title: "Assess MT quality",  detail: "Evaluate whether MT output is suitable for post-editing." },
        { step: "2", title: "Identify errors",    detail: "Spot accuracy, fluency, and terminology errors." },
        { step: "3", title: "Correct errors",     detail: "Edit text to the required quality level (light or full)." },
        { step: "4", title: "Verify",             detail: "Check against source text for accuracy and completeness." },
        { step: "5", title: "Deliver",            detail: "Submit post-edited text and update TM if required." }
      ],
      compare: {
        headers: ["Type",             "Goal",                           "Effort"],
        rows: [
          ["Light post-editing",     "Understandable, accurate",        "Low — minimal changes"],
          ["Full post-editing",      "Publication quality",             "High — fluency and style"],
          ["Translation from scratch","Full human translation",         "Highest — no MT baseline"]
        ]
      },
      examTips: [
        "Define post-editing and distinguish light from full post-editing.",
        "List three common MT error types a post-editor must correct.",
        "Explain when post-editing is more efficient than translating from scratch.",
        "Discuss the skills a professional post-editor needs."
      ],
      citations: [
        { label: "Post-editing definition and types", file: "ENGL465-Topic 13.pdf", page: "p. 3" },
        { label: "MT error types",                    file: "ENGL465-Topic 13.pdf", page: "p. 12" }
      ]
    }
  ],

  flashcards: [
    /* Topic 1 */
    { id:"f1",  topicId:"topic1",  front:"What is CAT?",                          back:"Computer-Assisted Translation — tools that assist human translators; the translator remains in control.",   ref:"Topic 1, p. 4" },
    { id:"f2",  topicId:"topic1",  front:"How does CAT differ from MT?",          back:"CAT assists the human; MT automates translation fully without human input during the process.",              ref:"Topic 1, p. 4" },
    { id:"f3",  topicId:"topic1",  front:"What is a Translation Memory?",         back:"A database of aligned source-target segment pairs stored for reuse in future translations.",                 ref:"Topic 1, p. 6" },
    { id:"f4",  topicId:"topic1",  front:"What is TM leverage?",                  back:"The percentage of a new document that matches existing TM segments, reducing translation effort.",            ref:"Topic 1, p. 8" },
    { id:"f5",  topicId:"topic1",  front:"Name three benefits of CAT tools.",     back:"Consistency, speed/efficiency, and reduced cost through TM reuse.",                                          ref:"Topic 1, p. 10" },
    /* Topic 2 */
    { id:"f6",  topicId:"topic2",  front:"What is a fuzzy match?",                back:"A TM match that is similar but not identical to the source segment — requires editing before acceptance.",   ref:"Topic 2, p. 9" },
    { id:"f7",  topicId:"topic2",  front:"What is segmentation in CAT tools?",    back:"The process of splitting source text into individual units (segments) for translation.",                     ref:"Topic 2, p. 5" },
    { id:"f8",  topicId:"topic2",  front:"Name two widely used CAT workstations.", back:"SDL Trados Studio and memoQ are the two most widely used professional CAT workstations.",                   ref:"Topic 2, p. 3" },
    /* Topic 3 */
    { id:"f9",  topicId:"topic3",  front:"What is TM alignment?",                 back:"The process of pairing existing source and target texts to create a Translation Memory database.",           ref:"Topic 3, p. 7" },
    { id:"f10", topicId:"topic3",  front:"When is TM most effective?",            back:"TM is most effective with repetitive technical texts such as manuals, legal contracts, and software strings.", ref:"Topic 3, p. 13" },
    /* Topic 4 */
    { id:"f11", topicId:"topic4",  front:"What is a termbase?",                   back:"A structured database of approved terms with definitions, target-language equivalents, and usage notes.",    ref:"Topic 4, p. 3" },
    { id:"f12", topicId:"topic4",  front:"What is term extraction?",              back:"The process of automatically or manually identifying candidate terms from source texts.",                     ref:"Topic 4, p. 14" },
    /* Topic 5 */
    { id:"f13", topicId:"topic5",  front:"What does localisation include beyond translation?", back:"Cultural adaptation, format conversion (dates, currency), and technical adjustments for the target locale.", ref:"Topic 5, p. 4" },
    { id:"f14", topicId:"topic5",  front:"What is internationalisation?",         back:"Designing a product so it can be easily adapted for different locales without re-engineering the core product.", ref:"Topic 5, p. 6" },
    { id:"f15", topicId:"topic5",  front:"What does GILT stand for?",             back:"Globalisation, Internationalisation, Localisation, Translation.",                                             ref:"Topic 5, p. 4" },
    /* Topic 6 */
    { id:"f16", topicId:"topic6",  front:"Why are minority languages under-resourced for MT?", back:"They lack large parallel corpora needed to train statistical or neural MT models effectively.",  ref:"Topic 6, p. 3" },
    { id:"f17", topicId:"topic6",  front:"Which technology is more accessible for minority languages — TM or MT?", back:"TM is more accessible because it does not require large training corpora.", ref:"Topic 6, p. 8" },
    /* Topic 7 */
    { id:"f18", topicId:"topic7",  front:"What is a parallel corpus?",            back:"A corpus containing source texts aligned with their translations in another language.",                       ref:"Topic 7, p. 4" },
    { id:"f19", topicId:"topic7",  front:"What is a comparable corpus?",          back:"Two separate corpora in different languages covering similar topics but not translations of each other.",     ref:"Topic 7, p. 5" },
    { id:"f20", topicId:"topic7",  front:"How do translators use corpora?",       back:"To verify natural usage, find collocations, and check typical equivalents in authentic texts.",              ref:"Topic 7, p. 13" },
    /* Topic 8 */
    { id:"f21", topicId:"topic8",  front:"Why do idioms cause problems for MT?",  back:"MT systems translate idioms literally because they lack the world knowledge to recognise figurative meaning.", ref:"Topic 8, p. 10" },
    { id:"f22", topicId:"topic8",  front:"What is lexical ambiguity in MT?",      back:"When a source word has multiple meanings and the MT system selects the wrong one without contextual understanding.", ref:"Topic 8, p. 5" },
    /* Topic 11 */
    { id:"f23", topicId:"topic11", front:"What does BLEU measure?",               back:"BLEU measures MT quality by comparing n-gram overlap between MT output and human reference translations.",   ref:"Topic 11, p. 6" },
    { id:"f24", topicId:"topic11", front:"What is one limitation of BLEU?",       back:"BLEU does not capture meaning well at the sentence level and can reward incorrect translations with similar words.", ref:"Topic 11, p. 8" },
    { id:"f25", topicId:"topic11", front:"What is adequacy in MT evaluation?",    back:"How much of the source meaning is preserved in the MT output.",                                               ref:"Topic 11, p. 13" },
    /* Topic 12 */
    { id:"f26", topicId:"topic12", front:"What is a sublanguage?",                back:"A domain-specific variety of language with restricted vocabulary and constrained syntactic structures.",      ref:"Topic 12, p. 2" },
    { id:"f27", topicId:"topic12", front:"Give one example of a sublanguage.",    back:"Weather forecast language — restricted vocabulary and formulaic syntax (e.g. 'Rain likely, turning heavy').", ref:"Topic 12, p. 5" },
    { id:"f28", topicId:"topic12", front:"What is a controlled language?",        back:"A deliberately simplified and restricted form of natural language designed to improve clarity and translatability.", ref:"Topic 12, p. 9" },
    /* Topic 13 */
    { id:"f29", topicId:"topic13", front:"What is post-editing?",                 back:"The process of correcting MT output to achieve an acceptable or publication-ready quality level.",           ref:"Topic 13, p. 3" },
    { id:"f30", topicId:"topic13", front:"Distinguish light from full post-editing.", back:"Light PE aims for understandable and accurate output with minimal changes; full PE targets publication quality including fluency and style.", ref:"Topic 13, p. 4" },
    { id:"f31", topicId:"topic13", front:"Name two common MT error types.",       back:"Wrong word order and missing words (e.g. dropped negations) are two of the most frequent MT errors.",        ref:"Topic 13, p. 12" }
  ],

  quizzes: [
    { id:"q1",  topicId:"topic1",  difficulty:"basic",
      question:"Which statement best defines CAT?",
      options:["It replaces translators completely.","It assists human translators with digital tools.","It is purely optical character recognition.","It is the same as localisation."],
      answer:1, explanation:"CAT supports human translators rather than replacing them; the translator remains in control.", ref:"Topic 1, p. 4" },
    { id:"q2",  topicId:"topic1",  difficulty:"basic",
      question:"What does a Translation Memory store?",
      options:["Audio recordings of sessions.","Source and target segment pairs for reuse.","Grammar rules of the target language.","Statistical frequency tables."],
      answer:1, explanation:"A TM stores aligned source-target segment pairs that can be retrieved for future translations.", ref:"Topic 1, p. 6" },
    { id:"q3",  topicId:"topic1",  difficulty:"intermediate",
      question:"Which is a key difference between CAT and MT?",
      options:["CAT is faster than MT.","MT requires human approval for every segment.","CAT keeps the human translator in control; MT automates the process.","CAT and MT are identical technologies."],
      answer:2, explanation:"The defining distinction is human control: CAT aids the translator while MT produces translations automatically.", ref:"Topic 1, p. 7" },
    { id:"q4",  topicId:"topic2",  difficulty:"basic",
      question:"What is a fuzzy match in a CAT tool?",
      options:["An exact match from the TM.","A match that is similar but not identical to the source segment.","A match from a different language pair.","An untranslated segment."],
      answer:1, explanation:"A fuzzy match is similar but not identical to the current source segment and requires editing.", ref:"Topic 2, p. 9" },
    { id:"q5",  topicId:"topic2",  difficulty:"intermediate",
      question:"What does segmentation do in a CAT tool?",
      options:["Translates the text automatically.","Splits the source text into individual units for translation.","Exports the finished file.","Runs quality assurance checks."],
      answer:1, explanation:"Segmentation splits source text into units (usually sentences) that are processed and stored individually.", ref:"Topic 2, p. 5" },
    { id:"q6",  topicId:"topic3",  difficulty:"basic",
      question:"What is TM alignment used for?",
      options:["Training neural MT models from scratch.","Creating a TM from existing source-target text pairs.","Running QA checks on translated files.","Exporting glossary entries."],
      answer:1, explanation:"Alignment pairs existing source and target texts to build a TM database that can be reused in future projects.", ref:"Topic 3, p. 7" },
    { id:"q7",  topicId:"topic4",  difficulty:"basic",
      question:"What is the main purpose of a termbase?",
      options:["To store full sentence translations.","To store approved terms with definitions and target equivalents.","To align parallel texts.","To evaluate MT output quality."],
      answer:1, explanation:"A termbase stores approved terms with metadata — definitions, equivalents, domain, and usage notes.", ref:"Topic 4, p. 3" },
    { id:"q8",  topicId:"topic5",  difficulty:"basic",
      question:"What does GILT stand for?",
      options:["Grammar, Interpretation, Language, Translation.","Globalisation, Internationalisation, Localisation, Translation.","Glossary, Index, Lexicon, Terminology.","Graphics, Icons, Layout, Text."],
      answer:1, explanation:"GILT is the framework covering Globalisation, Internationalisation, Localisation, and Translation.", ref:"Topic 5, p. 4" },
    { id:"q9",  topicId:"topic5",  difficulty:"intermediate",
      question:"Which of the following is a non-linguistic aspect of localisation?",
      options:["Translating the user interface strings.","Adapting date and currency formats for the target locale.","Checking grammar in the target text.","Building a parallel corpus."],
      answer:1, explanation:"Localisation includes technical adaptations such as date formats, currency symbols, and units of measurement.", ref:"Topic 5, p. 8" },
    { id:"q10", topicId:"topic6",  difficulty:"intermediate",
      question:"Why do minority languages benefit more from TM than from MT?",
      options:["TM requires more training data than MT.","MT works better with small corpora.","TM does not require large training corpora, unlike statistical or neural MT.","MT is cheaper to implement for minority languages."],
      answer:2, explanation:"TM reuses existing human translations without requiring large data sets, making it more viable for under-resourced minority languages.", ref:"Topic 6, p. 8" },
    { id:"q11", topicId:"topic7",  difficulty:"basic",
      question:"What distinguishes a parallel corpus from a comparable corpus?",
      options:["A parallel corpus is larger.","A parallel corpus contains aligned source-translation pairs; a comparable corpus does not.","A comparable corpus is used for MT training only.","They are the same thing."],
      answer:1, explanation:"A parallel corpus aligns source texts with their translations; a comparable corpus covers similar topics in different languages but without direct translation alignment.", ref:"Topic 7, p. 5" },
    { id:"q12", topicId:"topic8",  difficulty:"basic",
      question:"Why do idioms cause problems for MT systems?",
      options:["Idioms are always very long.","MT systems lack the world knowledge to recognise figurative meaning and translate idioms literally.","Idioms use rare vocabulary.","MT systems refuse to process idioms."],
      answer:1, explanation:"Without world knowledge and pragmatic understanding, MT systems translate idioms word-for-word, producing nonsensical output.", ref:"Topic 8, p. 10" },
    { id:"q13", topicId:"topic11", difficulty:"basic",
      question:"What does BLEU measure in MT evaluation?",
      options:["The number of words in the MT output.","N-gram overlap between MT output and human reference translations.","The time taken to post-edit MT output.","The fluency of MT output only."],
      answer:1, explanation:"BLEU calculates how many n-grams in the MT output match those in one or more human reference translations.", ref:"Topic 11, p. 6" },
    { id:"q14", topicId:"topic11", difficulty:"intermediate",
      question:"What is a major limitation of BLEU?",
      options:["It is too expensive to calculate.","It requires post-editors.","It does not capture meaning well at sentence level and can reward incorrect translations with similar surface forms.","It only works for European languages."],
      answer:2, explanation:"BLEU is a surface-level metric; it can give high scores to translations that have the right words but the wrong meaning.", ref:"Topic 11, p. 8" },
    { id:"q15", topicId:"topic12", difficulty:"basic",
      question:"What is a sublanguage?",
      options:["A pidgin or creole language.","A domain-specific variety of language with restricted vocabulary and syntax.","A language spoken by fewer than 1,000 people.","An early stage of language acquisition."],
      answer:1, explanation:"A sublanguage is a restricted form of natural language used in a specific domain with limited vocabulary and constrained syntax.", ref:"Topic 12, p. 2" },
    { id:"q16", topicId:"topic13", difficulty:"basic",
      question:"What is light post-editing?",
      options:["Full revision of MT output to publication quality.","Minimal correction to make MT output understandable and accurate without full fluency revision.","Translating a text from scratch using MT as reference.","Evaluating MT quality using BLEU."],
      answer:1, explanation:"Light post-editing aims for comprehensibility and accuracy with minimal changes, not full stylistic revision.", ref:"Topic 13, p. 4" },
    { id:"q17", topicId:"topic13", difficulty:"intermediate",
      question:"Which skill is most important for a professional post-editor?",
      options:["Ability to write original creative content.","Translation competence combined with understanding of MT error types.","Advanced programming skills.","Knowledge of BLEU score calculation."],
      answer:1, explanation:"Post-editors need linguistic translation skills AND awareness of how MT systems fail in order to spot and correct errors efficiently.", ref:"Topic 13, p. 9" }
  ],

  mindmaps: {
    topic1: {
      center: { label:"Introduction to CAT", note:"CAT supports human translators using digital tools.", citation:"Topic 1, p. 4" },
      branches: [
        { label:"Definition", note:"CAT = tool-assisted, human-led translation.", citation:"Topic 1, p. 4",
          children:[
            { label:"Human control", note:"Translator remains central to all decisions.", citation:"Topic 1, p. 4" },
            { label:"CAT vs MT",     note:"MT automates; CAT assists.",                  citation:"Topic 1, p. 7" }
          ]
        },
        { label:"Core Components", note:"TM, terminology tools, alignment tools.", citation:"Topic 1, p. 5",
          children:[
            { label:"Translation Memory",  note:"Stores segment pairs for reuse.",         citation:"Topic 1, p. 6" },
            { label:"Terminology Manager", note:"Enforces consistent term usage.",          citation:"Topic 1, p. 6" }
          ]
        },
        { label:"Benefits", note:"CAT improves consistency, speed, and cost-efficiency.", citation:"Topic 1, p. 10",
          children:[
            { label:"TM Leverage",  note:"Reduces rework on repeated segments.", citation:"Topic 1, p. 8"  },
            { label:"Consistency",  note:"Same terms and phrases used throughout.", citation:"Topic 1, p. 11" }
          ]
        }
      ]
    },
    topic2: {
      center: { label:"The Translator's Workstation", note:"An integrated environment combining TM, terminology, and project tools.", citation:"Topic 2, p. 3" },
      branches: [
        { label:"TM System", note:"Stores and retrieves segment matches.", citation:"Topic 2, p. 4",
          children:[
            { label:"Exact match", note:"100% match — accept directly.",    citation:"Topic 2, p. 9" },
            { label:"Fuzzy match", note:"Partial match — edit then accept.", citation:"Topic 2, p. 9" }
          ]
        },
        { label:"Terminology", note:"Integrated termbase for in-workflow lookups.", citation:"Topic 2, p. 6",
          children:[
            { label:"MultiTerm", note:"SDL's termbase system.",         citation:"Topic 2, p. 6" },
            { label:"memoQ TB",  note:"memoQ's integrated termbase.",   citation:"Topic 2, p. 6" }
          ]
        },
        { label:"Tools", note:"Popular CAT workstation software.", citation:"Topic 2, p. 3",
          children:[
            { label:"SDL Trados", note:"Industry-leading CAT workstation.", citation:"Topic 2, p. 3" },
            { label:"memoQ",      note:"Widely used collaborative CAT tool.", citation:"Topic 2, p. 3" }
          ]
        }
      ]
    },
    topic13: {
      center: { label:"Post-Editing", note:"Correcting MT output to reach an acceptable quality level.", citation:"Topic 13, p. 3" },
      branches: [
        { label:"Types", note:"Light vs full post-editing.", citation:"Topic 13, p. 4",
          children:[
            { label:"Light PE", note:"Understandable and accurate — minimal changes.", citation:"Topic 13, p. 4" },
            { label:"Full PE",  note:"Publication quality — fluency and style.",      citation:"Topic 13, p. 4" }
          ]
        },
        { label:"MT Error Types", note:"Common errors post-editors must fix.", citation:"Topic 13, p. 12",
          children:[
            { label:"Word order",    note:"Incorrect grammatical ordering in the target.", citation:"Topic 13, p. 12" },
            { label:"Missing words", note:"Dropped negations or key content words.",       citation:"Topic 13, p. 12" },
            { label:"False cognates",note:"Lexically similar but semantically wrong.",     citation:"Topic 13, p. 13" }
          ]
        },
        { label:"Skills Needed", note:"Translation + MT error awareness.", citation:"Topic 13, p. 9",
          children:[
            { label:"Linguistic competence", note:"Strong target-language writing skills.",    citation:"Topic 13, p. 9" },
            { label:"MT knowledge",          note:"Understanding of how MT systems fail.",     citation:"Topic 13, p. 9" }
          ]
        }
      ]
    }
  },

  achievements: [
    { id:"explorer",      label:"Explorer",       desc:"Visit 3 different sections." },
    { id:"flashStarter",  label:"Flash Starter",  desc:"Rate your first flashcard." },
    { id:"flashMaster5",  label:"Flash Master",   desc:"Master 5 flashcards." },
    { id:"flashMaster15", label:"Flash Expert",   desc:"Master 15 flashcards." },
    { id:"quizStarter",   label:"Quiz Starter",   desc:"Answer one quiz question correctly." },
    { id:"quizAce",       label:"Quiz Ace",       desc:"Score 80% or above on any quiz." },
    { id:"terminologist", label:"Terminologist",  desc:"Add 5 glossary entries." },
    { id:"streak3",       label:"3-Day Streak",   desc:"Study for 3 consecutive days." },
    { id:"scholar500",    label:"Scholar",        desc:"Earn 500 XP." },
    { id:"mindMapper",    label:"Mind Mapper",    desc:"Open any mind map." }
  ],

  dailyChallenges: [
    { id:"d1", text:"Master 1 flashcard today.",          type:"flashMastered", goal:1, route:"flashcardsSection" },
    { id:"d2", text:"Answer 3 quiz questions correctly.", type:"quizCorrect",   goal:3, route:"quizzesSection"    },
    { id:"d3", text:"Add 1 entry to your glossary.",      type:"glossaryAdded", goal:1, route:"labSection"        },
    { id:"d4", text:"Open a mind map.",                   type:"mindmapOpened", goal:1, route:"mindmapsSection"   },
    { id:"d5", text:"Win 3 Rapid Match rounds.",          type:"rapidWins",     goal:3, route:"gamesSection"      }
  ],

  reviewChecklist: [
    "Define CAT and explain its role in modern translation workflows.",
    "Distinguish CAT from MT with at least two concrete differences.",
    "Explain what a Translation Memory is and how TM leverage works.",
    "Describe the core components of a CAT workstation.",
    "Know at least three benefits of using CAT tools.",
    "Define localisation and list two non-linguistic localisation changes.",
    "Explain the GILT framework and the order of its stages.",
    "Describe why minority languages are under-resourced for MT.",
    "Define sublanguage and explain why it is easier to process computationally.",
    "Distinguish light from full post-editing with examples.",
    "Explain what BLEU measures and name one key limitation.",
    "Explain why idioms and ambiguity cause problems for MT systems."
  ],

  revisionPlan: [
    { step:"Day 1", title:"Foundations",          detail:"Study Topics 1–2: CAT definition, workstation components, TM and fuzzy matches." },
    { step:"Day 2", title:"Tools and Resources",  detail:"Study Topics 3–4: TM systems, terminology management, termbases." },
    { step:"Day 3", title:"Localisation and Tech",detail:"Study Topics 5–6: GILT framework, localisation process, minority languages." },
    { step:"Day 4", title:"Corpora and MT Limits",detail:"Study Topics 7–8: Corpus types, how translators use corpora, MT difficulties." },
    { step:"Day 5", title:"MT Evaluation and PE", detail:"Study Topics 11–13: BLEU, human evaluation, sublanguage, post-editing types." },
    { step:"Day 6", title:"Flashcard Review",     detail:"Work through all flashcards and mark all weak-rated cards for extra review." },
    { step:"Day 7", title:"Quiz and Consolidation",detail:"Run mixed quizzes, review all incorrect answers, and revisit weak areas." }
  ]
};

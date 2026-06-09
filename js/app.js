const docs = {
  welcome: {
    title: "Welcome",
    category: "Getting Started",
    read: "10 min read",
    summary: "A documentation site is a centralized home for technical manuals, software docs, internal guidelines, and knowledge base articles. It becomes the place where teams can read, search, review, and keep the same source of truth without hunting through scattered files.",
    tags: ["wiki", "documentation", "knowledge base", "knowledge hub"],
    sections: [
      ["Project goal", "This project demonstrates the core behavior of a documentation hub: readable articles, organized navigation, search, code snippets, version-aware content, and a layout that stays calm even when the content gets dense."],
      ["Best use cases", "Use this format for product guides, class references, engineering manuals, employee handbooks, support libraries, API references, research notes, onboarding handbooks, and policy centers."],
      ["Reader promise", "Every page should help a reader finish a task, answer a question, or verify a rule without digging through scattered files. The site should feel useful on the first visit and still hold up after the tenth revisit."],
      ["What good docs feel like", "Good documentation feels direct, searchable, and complete. The reader should understand where they are, what version they are reading, who owns the content, and what they should do next."],
      ["Why this matters", "A well-built docs site lowers support questions, shortens onboarding, gives teams a common vocabulary, and makes technical work easier to hand off between people."],
      ["How to read this hub", "Start with the introduction page for structure, then use the docs workspace to browse the main articles, search by keyword, and switch version context when the project changes."]
    ],
    bullets: [
      "Sidebar navigation trees",
      "Global quick find search",
      "Styled code examples",
      "Current, stable, and legacy version states",
      "Article ownership labels",
      "Reusable note and callout blocks",
      "Reader-friendly content spacing"
    ],
    callout: "The design focuses on a clean docs workspace with clear navigation, fast search, practical content blocks, and room for long-form reading without losing the thread.",
    references: [
      ["Developer portals", "API documentation, onboarding, recipes, and changelogs"],
      ["Docs platforms", "Product docs, knowledge bases, and help centers"],
      ["Notion Docs", "Internal team guidelines and lightweight wiki pages"]
    ]
  },
  quickstart: {
    title: "Quickstart",
    category: "Getting Started",
    read: "3 min read",
    summary: "A quickstart page gives readers the fastest path from first visit to a successful result.",
    tags: ["onboarding", "tutorial", "first steps"],
    sections: [
      ["Before you begin", "State requirements such as account access, permissions, product version, software dependencies, or team ownership."],
      ["Recommended flow", "Start with the goal, show the minimum steps, include expected output, then link to deeper reference pages."],
      ["Validation", "Readers should know what success looks like before they leave the page."]
    ],
    bullets: ["Open the workspace", "Choose the correct version", "Search for a topic", "Copy a snippet", "Review related articles"],
    code: {
      language: "markdown",
      value: "# Create a documentation page\n\n## Goal\nPublish a searchable guide for a repeated task.\n\n## Steps\n1. Write the task outcome.\n2. Add requirements.\n3. List the steps.\n4. Add expected results.\n5. Link related references."
    }
  },
  structure: {
    title: "Site Structure",
    category: "Getting Started",
    read: "5 min read",
    summary: "Strong documentation starts with information architecture that matches how readers think.",
    tags: ["navigation", "sidebar", "taxonomy"],
    sections: [
      ["Navigation tree", "Group articles by intent: getting started, product docs, developer references, knowledge base, and governance."],
      ["Page depth", "Keep first-level sections short and predictable. Use nested pages for deep topics instead of one very long page."],
      ["Naming", "Prefer clear action titles such as Configure Authentication, Review a Draft, or Create an API Token."]
    ],
    code: {
      language: "text",
      value: "Documentation\n  Getting Started\n    Welcome\n    Quickstart\n  Product Docs\n    Technical Manuals\n    Knowledge Base\n  Developer Portal\n    API Reference\n    Authentication\n  Governance\n    Versioning\n    Review Workflow"
    }
  },
  recipes: {
    title: "Recipes",
    category: "Getting Started",
    read: "8 min read",
    summary: "Recipes are step-by-step walkthroughs for common workflows. They are more practical than reference pages because they show a complete path from problem to result.",
    tags: ["recipes", "walkthroughs", "examples"],
    sections: [
      ["Purpose", "A recipe teaches a repeatable workflow such as creating an API key, publishing a release note, or connecting a repository."],
      ["Format", "Start with the outcome, list requirements, show the steps, include a working snippet, and finish with verification."],
      ["When to use", "Use recipes when readers need a practical sequence, not just a definition or configuration table."],
      ["Maintenance", "Recipes should be tested after product changes because they often depend on UI labels, endpoint names, or permissions."]
    ],
    code: {
      language: "markdown",
      value: "## Recipe: Publish a release note\n\n1. Open Changelog.\n2. Draft the update.\n3. Add version labels.\n4. Review affected APIs.\n5. Publish and link related docs."
    }
  },
  creatingProject: {
    title: "Creating a Project",
    category: "Product Docs",
    read: "8 min read",
    summary: "A project setup page teaches workspace owners how to create a documentation hub, define the audience, choose the main sections, and prepare the first publishable pages.",
    tags: ["project setup", "dashboard", "workspace"],
    sections: [
      ["Create the workspace", "Start by naming the project, choosing the main audience, and selecting the first page groups that should appear in the navigation. This gives the docs a real structure before authors begin adding individual articles."],
      ["Your dashboard and profile", "The dashboard should show draft activity, recent updates, owner notes, and review reminders. A profile area helps contributors see what they own, what they recently changed, and which pages still need attention."],
      ["Choose the first pages", "Create a welcome page, quickstart, API reference, changelog, and discussion page before adding specialized content. These pages give readers a complete first path through the product."],
      ["Publish safely", "Before publishing, verify search keywords, sidebar placement, links, version labels, and account access. A project setup page should make owners confident that the first release is organized."]
    ],
    bullets: ["Name the project", "Choose reader groups", "Create first sections", "Assign owners", "Review before publish"],
    callout: "Project setup is the foundation of the docs experience. If the structure is clear at the start, every later article becomes easier to place."
  },
  dashboardProfile: {
    title: "Dashboard and Profile",
    category: "Product Docs",
    read: "6 min read",
    summary: "A dashboard and profile page helps contributors understand their workspace activity, owned pages, pending reviews, and recent content changes.",
    tags: ["dashboard", "profile", "workspace"],
    sections: [
      ["Dashboard purpose", "The dashboard should summarize what needs attention: stale articles, draft changes, unresolved discussions, broken links, and pages waiting for review."],
      ["Profile details", "A contributor profile can show name, role, owned pages, recent edits, and saved preferences. This makes ownership visible and helps teams know who to contact."],
      ["Activity feed", "Recent changes give the workspace a sense of life. Readers and maintainers can see what was updated, when it changed, and why the update matters."],
      ["Saved preferences", "Theme, version, and account state can be saved locally for this demo. A production version would store preferences in a secure server database."]
    ],
    bullets: ["Owned pages", "Draft activity", "Review tasks", "Saved preferences", "Recent updates"]
  },
  navigateDocs: {
    title: "Navigate Your Docs",
    category: "Product Docs",
    read: "7 min read",
    summary: "Navigation pages teach readers how to move through the docs using the sidebar, top tabs, global search, article jump links, and related page suggestions.",
    tags: ["navigation", "sidebar", "search"],
    sections: [
      ["Sidebar tree", "The sidebar groups pages by reader intent, such as getting started, project setup, developer portal, platform features, and governance. This helps people browse even before they know the exact title they need."],
      ["Top modes", "Top tabs provide fast entry points for guides, recipes, API reference, changelog, and discussions. They are useful for readers who know the type of content they want."],
      ["Article jump links", "The right rail shows headings from the current page so readers can jump within long articles. This keeps long documentation comfortable to scan."],
      ["Search first", "When a reader knows a keyword, global search is faster than browsing. Search should include titles, summaries, tags, sections, and code snippets."]
    ],
    code: {
      language: "text",
      value: "Browse by structure\nSearch by keyword\nJump by heading\nAsk the assistant\nOpen related pages"
    }
  },
  customDomain: {
    title: "Custom Domain and SSL",
    category: "Product Docs",
    read: "6 min read",
    summary: "Custom domain documentation explains how teams connect a branded URL, verify DNS records, wait for SSL, and test the final public docs address.",
    tags: ["domain", "ssl", "publishing"],
    sections: [
      ["Domain planning", "Choose a docs URL that readers can remember, such as docs.example.com or help.example.com. Keep the naming consistent with the product and support channels."],
      ["DNS records", "Explain which record type is required, where to add it, and how long propagation can take. Readers should know that DNS changes may not appear instantly."],
      ["SSL verification", "SSL should be verified before the docs are promoted publicly. Include a simple test step so owners can confirm that the secure URL loads correctly."],
      ["Launch checklist", "Before launch, test search, navigation, login links, redirects, and important article URLs on the custom domain."]
    ],
    bullets: ["Choose domain", "Add DNS record", "Wait for SSL", "Test public URL", "Update links"]
  },
  systemConfig: {
    title: "System Configuration",
    category: "Product Docs",
    read: "7 min read",
    summary: "System configuration pages document workspace defaults, search behavior, theme preferences, account settings, version labels, and publishing rules.",
    tags: ["settings", "configuration", "admin"],
    sections: [
      ["Workspace defaults", "Admins should define default version, landing page, sidebar behavior, search scope, and article review rules. These defaults help the site behave consistently."],
      ["Access and account settings", "Configuration should explain who can sign in, who can publish, and who can manage private pages. Even a demo site benefits from showing the idea of access control."],
      ["Visual settings", "Theme choices, cards, animations, and layout density should support reading instead of distracting from content. The goal is a polished workspace that still feels calm."],
      ["Maintenance", "System settings should be reviewed after releases, team changes, and content migrations so the site does not drift away from its intended structure."]
    ],
    code: {
      language: "json",
      value: "{\n  \"defaultVersion\": \"v4\",\n  \"searchScope\": \"all-docs\",\n  \"sidebarMode\": \"hover\",\n  \"discussionStatus\": \"enabled\"\n}"
    }
  },
  landingPage: {
    title: "Landing Page",
    category: "Platform Features",
    read: "6 min read",
    summary: "A landing page introduces the documentation hub and routes readers toward guides, references, examples, and discussions without turning the site into a marketing page.",
    tags: ["landing page", "home", "routing"],
    sections: [
      ["First impression", "The first screen should make the project identity clear and immediately offer useful paths into the docs. Readers should not need to scroll for the main action."],
      ["Reader routes", "Use clear routes for getting started, API reference, examples, and discussions. Each route should connect to a real page rather than a decorative card."],
      ["Content preview", "A small preview of the docs workspace can show search, versioning, snippets, and navigation without overwhelming the home page."]
    ],
    bullets: ["Project identity", "Primary docs path", "Search entry", "Examples path", "Account action"]
  },
  customPages: {
    title: "Custom Pages",
    category: "Platform Features",
    read: "5 min read",
    summary: "Custom pages let teams add content that does not fit a standard guide or reference, such as status pages, legal notes, onboarding portals, or release collections.",
    tags: ["custom pages", "layout", "content"],
    sections: [
      ["When to create one", "Create a custom page when the content needs a different layout, a special workflow, or a broader overview than a normal article."],
      ["Keep it findable", "Even custom pages should appear in search, related links, and navigation when readers need them."],
      ["Avoid clutter", "A custom layout should solve a real communication problem. If a normal article works, use the normal article pattern."]
    ],
    references: [
      ["Status page", "Shows incidents, uptime, and maintenance windows"],
      ["Onboarding page", "Groups role-specific starting paths"],
      ["Release collection", "Collects launch notes and migration links"]
    ]
  },
  reusableContent: {
    title: "Reusable Content",
    category: "Platform Features",
    read: "7 min read",
    summary: "Reusable content keeps repeated warnings, setup steps, code snippets, and policy language consistent across the docs library.",
    tags: ["reusable content", "snippets", "components"],
    sections: [
      ["Shared blocks", "Use shared blocks for repeated notes, security warnings, install steps, and support contact details. This prevents teams from editing the same sentence in many places."],
      ["Snippet discipline", "Code examples should be reusable only when they are generic enough to stay correct across pages. If a snippet needs page-specific context, keep it local."],
      ["Review impact", "When a shared block changes, review every page that uses it. Reusable content is powerful, but it needs ownership and testing."]
    ],
    code: {
      language: "markdown",
      value: "{{security-warning}}\n{{install-prerequisites}}\n{{support-escalation-path}}"
    }
  },
  manuals: {
    title: "Technical Manuals",
    category: "Product Docs",
    read: "6 min read",
    summary: "Technical manuals explain system behavior, operations, maintenance, setup, and troubleshooting.",
    tags: ["manuals", "operations", "troubleshooting"],
    sections: [
      ["Manual format", "Start with the system purpose, supported versions, required tools, operating limits, and safety notes."],
      ["Troubleshooting", "Each issue should include symptoms, likely causes, resolution steps, and escalation rules."],
      ["Maintenance", "Recurring tasks should include cadence, owner, checklist, and expected evidence after completion."]
    ],
    bullets: ["Installation guide", "Configuration guide", "Troubleshooting index", "Maintenance checklist", "Release notes"]
  },
  knowledge: {
    title: "Knowledge Base",
    category: "Product Docs",
    read: "4 min read",
    summary: "Knowledge bases collect reusable answers for support, onboarding, research, operations, and team learning.",
    tags: ["faq", "support", "knowledge base"],
    sections: [
      ["Article style", "Lead with the answer, then provide context, exceptions, examples, and links to related pages."],
      ["Search quality", "Add tags, synonyms, and common phrases so readers can find articles even when they do not know the official term."],
      ["Content gaps", "Repeated support questions and failed searches should become new knowledge base pages."]
    ],
    references: [
      ["FAQ article", "Short direct answer with related links"],
      ["How-to article", "Step-by-step workflow for repeat tasks"],
      ["Reference article", "Stable facts, tables, and definitions"]
    ]
  },
  guidelines: {
    title: "Company Guidelines",
    category: "Product Docs",
    read: "4 min read",
    summary: "Internal guidelines document policies, approval paths, writing standards, team rituals, and security expectations.",
    tags: ["internal docs", "policies", "guidelines"],
    sections: [
      ["Ownership", "Every guideline page needs an owner, review date, and decision authority."],
      ["Policy clarity", "Explain when the rule applies, what action is required, who approves exceptions, and where templates live."],
      ["Confidentiality", "Sensitive pages should define who can view, edit, approve, and export the content."]
    ],
    callout: "A documentation hub is not only for developers. It can also become the reliable source of truth for a whole organization."
  },
  publishing: {
    title: "Publishing Flow",
    category: "Product Docs",
    read: "5 min read",
    summary: "Publishing flow pages explain how drafts become reviewed, searchable documentation.",
    tags: ["publishing", "drafts", "workflow"],
    sections: [
      ["Draft stage", "Authors create pages from templates, add owners, and connect the article to the right sidebar group."],
      ["Review stage", "A reviewer checks accuracy, links, screenshots, snippets, and version labels before the page becomes public."],
      ["Release stage", "Published pages enter global search, appear in navigation, and receive a next-review date."]
    ],
    bullets: ["Create draft", "Assign owner", "Request review", "Publish page", "Monitor feedback"],
    callout: "A strong publishing flow keeps documentation from becoming a pile of unreviewed notes."
  },
  contentStrategy: {
    title: "Content Strategy",
    category: "Product Docs",
    read: "8 min read",
    summary: "Content strategy keeps the docs library focused, useful, and easier to grow without drifting into clutter.",
    tags: ["strategy", "planning", "content"],
    sections: [
      ["Audience", "Write for the people who need the answer now: customers, support teams, product managers, engineers, or internal staff."],
      ["Purpose", "Each article should solve one main problem. If a page tries to do too much, split it into a guide, a reference, and a troubleshooting note."],
      ["Maintenance", "Treat docs as living content. Review older pages, refresh examples, and remove stale language before readers rely on it too heavily."],
      ["Consistency", "Keep title style, tone, labels, and examples consistent so readers do not need to relearn the site each time they open a new page."]
    ],
    bullets: ["Audience first", "One purpose per page", "Regular review cycle", "Consistent labels", "Clear ownership"]
  },
  api: {
    title: "API Reference",
    category: "Developer Portal",
    read: "7 min read",
    summary: "API references define endpoints, authentication, parameters, responses, status codes, and examples.",
    tags: ["api", "developer docs", "reference"],
    sections: [
      ["Endpoint layout", "Show method, URL, authentication, parameters, request body, response example, and common errors."],
      ["Examples", "Keep examples realistic but avoid secrets, private domains, and personally identifiable data."],
      ["Error handling", "Document expected status codes and how developers should recover from each one."]
    ],
    code: {
      language: "http",
      value: "GET /v4/articles?status=published\nAuthorization: Bearer <token>\n\n200 OK\n{\n  \"data\": [\n    {\n      \"id\": \"doc_2048\",\n      \"title\": \"Versioning\",\n      \"status\": \"published\"\n    }\n  ]\n}"
    }
  },
  apiExplorer: {
    title: "API Explorer",
    category: "Developer Portal",
    read: "9 min read",
    summary: "An API explorer lets developers understand endpoints, parameters, authentication, and responses without leaving the documentation.",
    tags: ["api explorer", "requests", "endpoints"],
    sections: [
      ["Explorer goal", "The explorer should help a developer see the method, endpoint path, required headers, body fields, and expected response in one place."],
      ["Request builder", "Readers should be able to inspect sample headers, query parameters, request bodies, and response examples before writing code."],
      ["Authentication", "Explain whether a request uses bearer tokens, API keys, OAuth, session cookies, or another access model."],
      ["Response design", "Show success and error responses side by side so developers know how to handle real production behavior."]
    ],
    code: {
      language: "http",
      value: "POST /v4/branches\nAuthorization: Bearer <token>\nContent-Type: application/json\n\n{\n  \"name\": \"release-2026-06\",\n  \"source\": \"main\"\n}"
    }
  },
  auth: {
    title: "Authentication",
    category: "Developer Portal",
    read: "5 min read",
    summary: "Authentication pages explain how users and applications prove identity before accessing protected resources.",
    tags: ["auth", "security", "tokens"],
    sections: [
      ["Token rules", "Never expose private tokens in frontend code. Use short-lived credentials for sensitive operations."],
      ["Scopes", "Document the exact permission scopes required by each endpoint."],
      ["Rotation", "Credentials should be rotated after team changes, suspected exposure, or scheduled security reviews."]
    ],
    code: {
      language: "javascript",
      value: "async function listArticles(token) {\n  const response = await fetch('/v4/articles', {\n    headers: {\n      Authorization: `Bearer ${token}`\n    }\n  });\n\n  return response.json();\n}"
    }
  },
  snippets: {
    title: "Snippet Library",
    category: "Developer Portal",
    read: "3 min read",
    summary: "Snippet libraries help technical readers reuse tested examples with less friction.",
    tags: ["code", "snippets", "copy"],
    sections: [
      ["Snippet checklist", "Label the language, include required headers or imports, avoid secrets, and show expected output."],
      ["Copy behavior", "Copy buttons make examples faster to reuse while preserving formatting."],
      ["Testing", "Snippets should be checked during article review so examples do not become stale."]
    ],
    code: {
      language: "css",
      value: ".code-card {\n  background: #101722;\n  color: #e8eef7;\n  border-radius: 8px;\n  overflow: hidden;\n}"
    }
  },
  integrations: {
    title: "Integrations",
    category: "Developer Portal",
    read: "6 min read",
    summary: "Integrations connect documentation with repositories, issue trackers, support tools, analytics, and product surfaces.",
    tags: ["integrations", "git sync", "support", "embed"],
    sections: [
      ["Git sync", "Technical teams can keep docs close to source code by reviewing markdown, snippets, and release notes alongside product changes."],
      ["Support connection", "Support questions can reveal missing docs, unclear article titles, and repeated troubleshooting patterns."],
      ["Embedded docs", "Documentation can appear inside a product through links, widgets, contextual help, or an assistant-style search experience."]
    ],
    code: {
      language: "json",
      value: "{\n  \"source\": \"support-ticket\",\n  \"suggestedArticle\": \"Troubleshooting Login Errors\",\n  \"priority\": \"high\",\n  \"owner\": \"docs-team\"\n}"
    }
  },
  openapi: {
    title: "OpenAPI Format",
    category: "Developer Portal",
    read: "9 min read",
    summary: "OpenAPI describes endpoints in a structured format so documentation, SDKs, mock servers, and API references can stay consistent.",
    tags: ["openapi", "oas", "yaml"],
    sections: [
      ["Why structure matters", "A structured API description reduces ambiguity. Developers can see paths, operations, schemas, security rules, and examples from one source."],
      ["Required fields", "Every operation should include method, path, summary, parameters, response status codes, and schema definitions."],
      ["Versioning", "When the API changes, keep the OpenAPI file aligned with the visible docs so readers do not copy stale requests."],
      ["Review process", "Treat API schema updates like code changes: review them, test them, and link them to release notes."]
    ],
    code: {
      language: "yaml",
      value: "openapi: 3.1.0\ninfo:\n  title: KnowledgeForge API\n  version: 4.0.0\npaths:\n  /articles:\n    get:\n      summary: List published articles\n      responses:\n        '200':\n          description: Article list returned"
    }
  },
  mdx: {
    title: "MDX Components",
    category: "Developer Portal",
    read: "7 min read",
    summary: "MDX lets docs combine markdown text with reusable interface components such as callouts, tabs, cards, and code examples.",
    tags: ["mdx", "components", "markdown"],
    sections: [
      ["Use case", "MDX is useful when a plain markdown page needs interactive blocks, custom components, or reusable layouts."],
      ["Component discipline", "Reusable components should clarify the article rather than decorate it. A callout, card, or tab should have a clear purpose."],
      ["Portability", "Keep core explanations readable even if a custom component fails, because documentation should not depend entirely on presentation."],
      ["Governance", "Create a small component library and document when each block should be used."]
    ],
    code: {
      language: "mdx",
      value: "<Callout type=\"info\">\n  Use this endpoint after creating an access token.\n</Callout>\n\n<Tabs>\n  <Tab title=\"JavaScript\">fetch('/v4/articles')</Tab>\n  <Tab title=\"cURL\">curl /v4/articles</Tab>\n</Tabs>"
    }
  },
  globalSearchDoc: {
    title: "Global Search",
    category: "Platform Features",
    read: "5 min read",
    summary: "Global search helps readers find pages through titles, tags, article bodies, code examples, and common keywords.",
    tags: ["search", "quick find", "ctrl+k"],
    sections: [
      ["Search scope", "A useful docs search should include titles, summaries, tags, headings, code, owners, and related terms."],
      ["Result previews", "Each result should show category, reading time, and a short summary so readers can choose quickly."],
      ["No-result handling", "When nothing matches, suggest nearby topics such as API, versioning, permissions, snippets, or policies."]
    ],
    bullets: ["Search all docs", "Preview matching pages", "Jump to selected article", "Support keyboard access"]
  },
  collaboration: {
    title: "Collaboration",
    category: "Platform Features",
    read: "6 min read",
    summary: "Collaboration features help writers, reviewers, engineers, and support teams keep documentation accurate together.",
    tags: ["collaboration", "comments", "owners"],
    sections: [
      ["Roles", "Readers consume pages, contributors propose changes, reviewers approve updates, and admins manage structure and access."],
      ["Comments", "Inline comments make it easier to discuss unclear wording, missing screenshots, or outdated examples."],
      ["Ownership", "Every important page should have a person or team responsible for keeping it current."]
    ],
    references: [
      ["Contributor", "Suggests edits and adds draft content"],
      ["Reviewer", "Approves technical accuracy and publishing"],
      ["Admin", "Manages workspace settings and permissions"]
    ]
  },
  analytics: {
    title: "Docs Analytics",
    category: "Platform Features",
    read: "4 min read",
    summary: "Analytics show what readers search, which pages they open, and where documentation needs improvement.",
    tags: ["analytics", "insights", "quality"],
    sections: [
      ["Search analytics", "Repeated searches with poor results reveal missing articles or weak page titles."],
      ["Page analytics", "High-traffic pages deserve more frequent review because more people depend on them."],
      ["Support analytics", "If support keeps answering the same question, the docs need a clearer article or better search keywords."]
    ],
    bullets: ["Top searches", "No-result queries", "Popular pages", "Stale articles", "Support deflection"]
  },
  linter: {
    title: "Docs Linter",
    category: "Platform Features",
    read: "8 min read",
    summary: "A docs linter checks style, clarity, broken links, missing owners, stale examples, and inconsistent terminology before publishing.",
    tags: ["linter", "quality", "review"],
    sections: [
      ["Style checks", "A linter can flag unclear headings, passive wording, undefined acronyms, missing summaries, and inconsistent labels."],
      ["Technical checks", "It can also look for broken links, missing code language labels, outdated version references, and empty required metadata."],
      ["Team value", "Linting keeps quality consistent even when many people contribute to the same documentation library."],
      ["Fix workflow", "Flag issues in drafts, fix them before review, and keep a record of what changed."]
    ],
    bullets: ["Broken links", "Missing summaries", "Unlabeled code", "Stale dates", "Inconsistent terminology"]
  },
  articleDesign: {
    title: "Article Design",
    category: "Platform Features",
    read: "7 min read",
    summary: "Article design decides how long pages stay readable when content gets dense with examples, notes, and references.",
    tags: ["layout", "articles", "design"],
    sections: [
      ["Opening", "Start with a summary that tells the reader what the page is for, what they will learn, and when they should use it."],
      ["Body structure", "Break the content into short sections with descriptive headings, supporting notes, and lists when the information needs scanning."],
      ["Calls to action", "End with the next page, related article, or the most useful path forward so the reader does not get stranded."],
      ["Visual pacing", "Use enough spacing, labels, and boxed content to make the page feel readable even with a lot of text."]
    ],
    references: [
      ["Guides", "Good for step-by-step tasks"],
      ["Reference pages", "Good for stable facts and rules"],
      ["Troubleshooting", "Good for symptoms, causes, and fixes"]
    ]
  },
  versions: {
    title: "Versioning",
    category: "Governance",
    read: "5 min read",
    summary: "Version toggles prevent readers from using instructions meant for the wrong product or API release.",
    tags: ["versions", "release notes", "legacy"],
    sections: [
      ["Version labels", "Use plain labels such as Current, Stable, and Legacy so readers know which documentation applies."],
      ["Changed behavior", "When a feature changes, document the difference instead of silently replacing the old page."],
      ["Archived content", "Archived pages should remain findable when old projects still depend on them."]
    ],
    callout: "The selector in this website changes the visible documentation context to demonstrate version-aware articles."
  },
  branches: {
    title: "Branches",
    category: "Governance",
    read: "7 min read",
    summary: "Branches let teams draft and review documentation changes before merging them into the live site.",
    tags: ["branches", "review", "git"],
    sections: [
      ["Draft safely", "A branch gives writers room to update docs without changing the published reader experience immediately."],
      ["Review before merge", "Reviewers can check accuracy, structure, screenshots, snippets, and linked pages before approving the change."],
      ["Release coordination", "Branches are useful when docs need to ship with product releases, API updates, or policy changes."],
      ["Archive behavior", "Merged branches should leave a trace in changelog or review history so teams know why a page changed."]
    ],
    code: {
      language: "text",
      value: "main\n  release-2026-06\n  api-auth-refresh\n  support-faq-cleanup"
    }
  },
  review: {
    title: "Review Workflow",
    category: "Governance",
    read: "4 min read",
    summary: "A review workflow keeps documentation accurate, readable, and trustworthy after products change.",
    tags: ["review", "publishing", "quality"],
    sections: [
      ["Draft", "Authors write the page and connect it to related docs."],
      ["Technical review", "Subject experts verify steps, screenshots, code snippets, and policy details."],
      ["Publish", "Reviewed pages become searchable and receive an owner plus next review date."]
    ],
    bullets: ["Accuracy checked", "Links verified", "Version label confirmed", "Owner assigned", "Code snippets tested"]
  },
  permissions: {
    title: "Permissions",
    category: "Governance",
    read: "5 min read",
    summary: "Permissions protect private drafts, confidential guidelines, internal policies, and admin controls.",
    tags: ["permissions", "roles", "access"],
    sections: [
      ["Access levels", "Public docs can be open to everyone, while internal docs should require account access."],
      ["Role control", "Use roles to decide who can read, comment, edit, review, publish, or manage settings."],
      ["Account database", "A real production site would use a server database. This project uses localStorage as a front-end demo account store."]
    ],
    code: {
      language: "json",
      value: "{\n  \"role\": \"reviewer\",\n  \"permissions\": [\n    \"docs:read\",\n    \"docs:comment\",\n    \"docs:approve\"\n  ]\n}"
    }
  },
  changelog: {
    title: "Changelog",
    category: "Product Docs",
    read: "6 min read",
    summary: "A changelog keeps readers informed about product, API, policy, and documentation updates.",
    tags: ["changelog", "release notes", "updates"],
    sections: [
      ["Purpose", "A changelog explains what changed, who is affected, and what readers should do next."],
      ["Structure", "Use dates, version labels, affected areas, short summaries, and links to the updated articles."],
      ["Developer value", "For API docs, changelogs help developers plan migrations and avoid surprises."],
      ["Writing style", "Keep entries short, specific, and action-oriented."]
    ],
    bullets: ["Date", "Version", "Affected feature", "Impact", "Related docs"]
  },
  discussions: {
    title: "Discussions",
    category: "Product Docs",
    read: "6 min read",
    summary: "Discussions give readers a place to ask questions, report unclear docs, and suggest improvements.",
    tags: ["discussions", "feedback", "community"],
    sections: [
      ["Reader feedback", "Questions from readers reveal where the documentation is confusing, incomplete, or using the wrong words."],
      ["Moderation", "Keep discussions useful by tagging answers, closing duplicates, and linking solved questions back to the docs."],
      ["Support handoff", "When a discussion becomes a repeated support issue, convert it into a knowledge base article or troubleshooting guide."],
      ["Trust", "Visible discussions show that the docs are maintained and that readers can participate in improving them."]
    ],
    references: [
      ["Question", "A reader asks for help"],
      ["Answer", "A maintainer gives the accepted response"],
      ["Docs update", "The answer becomes part of the permanent documentation"]
    ]
  },
  searchTips: {
    title: "Search Tips",
    category: "Governance",
    read: "6 min read",
    summary: "Search tips help readers find the right article faster, especially when they only remember a fragment of the topic.",
    tags: ["search", "tips", "find"],
    sections: [
      ["Use common words", "Search terms should match how readers actually talk. If people say login, do not hide the article under a more technical name."],
      ["Think in synonyms", "A page can be found by multiple names: auth, sign in, login, access, or credentials."],
      ["Search by task", "People often search by what they want to do, not by what the page is called."],
      ["Narrow by version", "If the product changed, version keywords help readers avoid the wrong instructions."]
    ],
    bullets: ["Search by task", "Try synonyms", "Use version keywords", "Check article titles", "Open the best match first"]
  }
};

const versions = {
  v4: { label: "v4.0 Current", prefix: "Current edition", note: "latest navigation, search, and AI-ready knowledge patterns" },
  v3: { label: "v3.2 Stable", prefix: "Stable edition", note: "reviewed guidance for reliable production documentation" },
  v2: { label: "v2.1 Legacy", prefix: "Legacy edition", note: "archived guidance for older projects and migration checks" }
};

const docTitle = document.getElementById("docTitle");
const docCategory = document.getElementById("docCategory");
const docVersion = document.getElementById("docVersion");
const docReadTime = document.getElementById("docReadTime");
const docSummary = document.getElementById("docSummary");
const docBody = document.getElementById("docBody");
const railLinks = document.getElementById("railLinks");
const versionSelect = document.getElementById("versionSelect");
const sidebar = document.getElementById("sidebar");
const searchPanel = document.getElementById("searchPanel");
const globalSearch = document.getElementById("globalSearch");
const dialogSearch = document.getElementById("dialogSearch");
const searchResults = document.getElementById("searchResults");
const themeToggle = document.getElementById("themeToggle");
const toTop = document.getElementById("toTop");
const copyPageButton = document.getElementById("copyPageButton");
const railMenuButton = document.getElementById("railMenuButton");
const railMenu = document.getElementById("railMenu");
const returnButton = document.getElementById("returnButton");
const askQuestionButton = document.getElementById("askQuestionButton");
const questionPanel = document.getElementById("questionPanel");
const questionForm = document.getElementById("questionForm");
const closeQuestion = document.getElementById("closeQuestion");
const questionTitle = document.getElementById("questionTitle");
const questionDetails = document.getElementById("questionDetails");
const questionTopic = document.getElementById("questionTopic");
const discussionFeed = document.querySelector(".discussion-feed");
const discussionEmpty = document.getElementById("discussionEmpty");
const authPanel = document.getElementById("authPanel");
const authButton = document.getElementById("authButton");
const heroSignupButton = document.getElementById("heroSignupButton");
const closeAuth = document.getElementById("closeAuth");
const authForm = document.getElementById("authForm");
const authTitle = document.getElementById("authTitle");
const authSubmit = document.getElementById("authSubmit");
const authMessage = document.getElementById("authMessage");
const nameInput = document.getElementById("nameInput");
const emailInput = document.getElementById("emailInput");
const passwordInput = document.getElementById("passwordInput");
const accountStatus = document.getElementById("accountStatus");
const accountStatusText = document.getElementById("accountStatusText");
const pageType = document.body.dataset.page || "home";

let activeDoc = "welcome";
let activeMode = "guide";
let authMode = "login";
let toastTimer = null;
let activeDiscussionFilter = "faq";

const accountStoreKey = "knowledgeforgeAccounts";
const sessionStoreKey = "knowledgeforgeSession";
const targetDocKey = "knowledgeforgeTargetDoc";
const assistantStoreKey = "knowledgeforgeAssistantMessages";
const themeStoreKey = "knowledgeforgeTheme";
const discussionStoreKey = "knowledgeforgeDiscussionQuestions";

function applyTheme(mode) {
  const isDark = mode === "dark";
  document.body.classList.toggle("dark", isDark);
  if (themeToggle) {
    themeToggle.textContent = isDark ? "Light" : "Dark";
  }
}

applyTheme(localStorage.getItem(themeStoreKey) || "light");

function escapeHtml(value) {
  return String(value).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
}

function slug(value) {
  return value.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "");
}

function expandParagraph(text, heading) {
  const value = String(text || "").trim();
  const sentenceCount = (value.match(/[.!?]+(\s|$)/g) || []).length;

  if (sentenceCount >= 2) {
    return value;
  }

  const supportLine = heading
    ? ` It gives the ${heading.toLowerCase()} section more room to explain the idea clearly.`
    : " It gives the page more room to explain the idea clearly.";

  return `${value}${supportLine} The result is easier to scan, easier to maintain, and more useful for readers who need the full picture.`;
}

function createTutorialBlock(doc) {
  const firstSection = doc.sections[0] ? doc.sections[0][0].toLowerCase() : "the first section";
  const secondSection = doc.sections[1] ? doc.sections[1][0].toLowerCase() : "the next section";
  const thirdSection = doc.sections[2] ? doc.sections[2][0].toLowerCase() : "the final section";
  const steps = [
    `Read the summary first so you understand why ${doc.title} matters before scanning the details.`,
    `Open the ${firstSection} part and identify the main action, rule, or concept the reader should remember.`,
    `Move through ${secondSection} and ${thirdSection} slowly, checking examples, warnings, and related notes as you go.`,
    `Use the checklist and references to confirm the page is complete enough for a real workspace reader.`,
    `Ask the assistant or use Quick Find when you need a shortcut to related pages in the sidebar.`
  ];

  return `
    <section class="tutorial-panel">
      <span>Guided tutorial</span>
      <h3>How to use this topic</h3>
      <p>
        Treat this page as a practical tutorial, not just a definition. The best way to read ${doc.title}
        is to connect the explanation to a real task: setting up the docs hub, teaching a reader, maintaining
        a reference, or improving the content workflow. Take notes on the parts that affect your own project,
        then use the sidebar to compare this topic with related guides, API material, changelog updates, and
        discussion examples.
      </p>
      <ol>${steps.map((step) => `<li>${step}</li>`).join("")}</ol>
      <p>
        If you are building this into a production documentation site, add screenshots, product-specific
        examples, and ownership notes after the first draft. Long-form pages work best when they explain
        what to do, why it matters, what can go wrong, and where the reader should continue next.
      </p>
    </section>
  `;
}

function createFeedbackBlock() {
  return `
    <section class="page-feedback" aria-label="Page feedback">
      <strong>Did this page help you?</strong>
      <div>
        <button class="feedback-button" type="button" data-feedback="yes" aria-label="Yes, this page helped">👍 Yes</button>
        <button class="feedback-button" type="button" data-feedback="no" aria-label="No, this page did not help">👎 No</button>
      </div>
      <p id="feedbackMessage" aria-live="polite"></p>
    </section>
  `;
}

function renderDoc(id = activeDoc) {
  if (!docBody || !docTitle || !docCategory || !docVersion || !docReadTime || !docSummary) {
    return;
  }

  const doc = docs[id];
  const version = versions[versionSelect.value];

  activeDoc = id;
  docTitle.textContent = doc.title;
  docCategory.textContent = doc.category;
  docVersion.textContent = version.label;
  docReadTime.textContent = doc.read;
  docSummary.textContent = `${version.prefix}: ${doc.summary} This view uses ${version.note}.`;

  const tags = doc.tags.map((tag) => `<span class="tag">${tag}</span>`).join("");
  const sections = doc.sections.map(([heading, text]) => {
    const idValue = slug(heading);
    return `<section class="doc-section" id="${idValue}"><h3>${heading}</h3><p>${expandParagraph(text, heading)}</p></section>`;
  }).join("");
  const bullets = doc.bullets ? `<section class="doc-section"><h3>Checklist</h3><ul>${doc.bullets.map((item) => `<li>${item}</li>`).join("")}</ul></section>` : "";
  const callout = doc.callout ? `<div class="callout">${doc.callout}</div>` : "";
  const references = doc.references ? `<div class="reference-grid">${doc.references.map(([title, text]) => `<article><strong>${title}</strong><span>${text}</span></article>`).join("")}</div>` : "";
  const code = doc.code ? `<div class="code-card"><div class="code-head"><span>${doc.code.language}</span><button class="copy-code" type="button">Copy</button></div><pre><code>${escapeHtml(doc.code.value)}</code></pre></div>` : "";
  const tutorial = createTutorialBlock(doc);
  const feedback = createFeedbackBlock();
  const modeNote = {
    guide: "Guide mode shows practical explanation for readers completing a task.",
    reference: "Reference mode highlights stable facts, tags, ownership, and reusable article structure.",
    changelog: "Changelog mode explains what changed across documentation versions."
  }[activeMode];

  docBody.innerHTML = `<div class="tag-list">${tags}</div><div class="callout">${modeNote}</div>${tutorial}${sections}${bullets}${callout}${references}${code}${feedback}`;
  if (railLinks) {
    railLinks.innerHTML = doc.sections.map(([heading]) => `<a href="#${slug(heading)}">${heading}</a>`).join("");
  }

  document.querySelectorAll(".doc-link").forEach((button) => {
    button.classList.toggle("active", button.dataset.doc === id);
  });

  if (window.innerWidth <= 1120) {
    sidebar.classList.remove("open");
  }
}

function openSearch(query = "") {
  if (!searchPanel || !dialogSearch || !searchResults) {
    return;
  }

  searchPanel.classList.add("open");
  searchPanel.setAttribute("aria-hidden", "false");
  dialogSearch.value = query;
  renderSearch(query);
  window.setTimeout(() => dialogSearch.focus(), 0);
}

function closeSearch() {
  if (!searchPanel) {
    return;
  }

  searchPanel.classList.remove("open");
  searchPanel.setAttribute("aria-hidden", "true");
}

function getAccounts() {
  try {
    return JSON.parse(localStorage.getItem(accountStoreKey)) || [];
  } catch (error) {
    return [];
  }
}

function saveAccounts(accounts) {
  localStorage.setItem(accountStoreKey, JSON.stringify(accounts));
}

function getSession() {
  try {
    return JSON.parse(localStorage.getItem(sessionStoreKey));
  } catch (error) {
    return null;
  }
}

function setAuthMode(mode) {
  if (!authPanel || !authTitle || !authSubmit || !nameInput || !emailInput || !passwordInput || !authMessage) {
    return;
  }

  authMode = mode;
  const isSignup = mode === "signup";
  authTitle.textContent = isSignup ? "Create workspace account" : "Sign in";
  authSubmit.textContent = isSignup ? "Create account" : "Login";
  nameInput.parentElement.style.display = isSignup ? "grid" : "none";
  nameInput.required = isSignup;
  authMessage.textContent = "";

  document.querySelectorAll(".auth-tab").forEach((tab) => {
    tab.classList.toggle("active", tab.dataset.authMode === mode);
  });
}

function openAuth(mode = "login") {
  if (!authPanel) {
    return;
  }

  setAuthMode(mode);
  authPanel.classList.add("open");
  authPanel.setAttribute("aria-hidden", "false");
  window.setTimeout(() => (mode === "signup" ? nameInput : emailInput).focus(), 0);
}

function closeAuthPanel() {
  if (!authPanel || !authForm || !authMessage) {
    return;
  }

  authPanel.classList.remove("open");
  authPanel.setAttribute("aria-hidden", "true");
  authForm.reset();
  authMessage.textContent = "";
}

function updateAccountUi() {
  if (!authButton) {
    return;
  }

  const session = getSession();

  if (!session) {
    authButton.textContent = "Sign in";
    if (accountStatusText) {
      accountStatusText.textContent = "Sign in to save a local demo account for this docs hub.";
    }
    return;
  }

  authButton.textContent = session.name || session.email;
  if (accountStatusText) {
    accountStatusText.textContent = `Signed in as ${session.name || session.email}. This workspace account is stored locally in your browser.`;
  }
}

function ensureToast() {
  let toast = document.getElementById("toastNotice");

  if (toast) {
    return toast;
  }

  toast = document.createElement("div");
  toast.id = "toastNotice";
  toast.className = "toast";
  toast.setAttribute("role", "status");
  toast.setAttribute("aria-live", "polite");
  toast.innerHTML = `
    <div>
      <strong id="toastTitle"></strong>
      <p id="toastText"></p>
    </div>
    <button id="toastAction" type="button" hidden></button>
  `;
  document.body.appendChild(toast);
  return toast;
}

function showToast(title, text, actionLabel, actionHandler) {
  const toast = ensureToast();
  const toastTitle = toast.querySelector("#toastTitle");
  const toastText = toast.querySelector("#toastText");
  const toastAction = toast.querySelector("#toastAction");

  toastTitle.textContent = title;
  toastText.textContent = text;

  if (actionLabel && actionHandler) {
    toastAction.hidden = false;
    toastAction.textContent = actionLabel;
    toastAction.onclick = () => {
      actionHandler();
      hideToast();
    };
  } else {
    toastAction.hidden = true;
    toastAction.onclick = null;
  }

  toast.classList.add("show");

  window.clearTimeout(toastTimer);
  toastTimer = window.setTimeout(() => {
    hideToast();
  }, 3200);
}

function hideToast() {
  const toast = document.getElementById("toastNotice");
  if (toast) {
    toast.classList.remove("show");
  }
}

function getAssistantMessages() {
  try {
    return JSON.parse(localStorage.getItem(assistantStoreKey)) || [
      {
        role: "assistant",
        text: "Ask me about guides, recipes, API reference, changelog, discussions, OpenAPI, MDX, branches, or search. I can recommend the best page and open it for you.",
        links: ["welcome", "apiExplorer", "globalSearchDoc"]
      }
    ];
  } catch (error) {
    return [];
  }
}

function saveAssistantMessages(messages) {
  localStorage.setItem(assistantStoreKey, JSON.stringify(messages.slice(-12)));
}

function createAssistant() {
  if (document.getElementById("assistantPanel")) {
    return;
  }

  const launcher = document.createElement("button");
  launcher.className = "assistant-launcher";
  launcher.type = "button";
  launcher.textContent = "Ask";
  launcher.setAttribute("aria-label", "Open assistant");

  const panel = document.createElement("section");
  panel.id = "assistantPanel";
  panel.className = "assistant-panel";
  panel.setAttribute("aria-label", "Documentation assistant");
  panel.innerHTML = `
    <div class="assistant-head">
      <div>
        <strong>AI Docs Assistant</strong>
        <small>Connected to this website content</small>
      </div>
      <button type="button" id="assistantClose">Close</button>
    </div>
    <div class="assistant-log" id="assistantLog"></div>
    <div class="assistant-prompts" aria-label="Suggested prompts">
      <button type="button" data-prompt="What page should I read first?">Start</button>
      <button type="button" data-prompt="Help me with API documentation">API</button>
      <button type="button" data-prompt="How do I search this docs hub?">Search</button>
      <button type="button" data-prompt="Explain versioning and changelog">Versions</button>
    </div>
    <form class="assistant-form" id="assistantForm">
      <input id="assistantInput" type="text" placeholder="Ask anything about these docs...">
      <button type="submit">Send</button>
    </form>
  `;

  document.body.appendChild(launcher);
  document.body.appendChild(panel);

  launcher.addEventListener("click", () => {
    panel.classList.add("open");
    renderAssistantMessages();
    document.getElementById("assistantInput").focus();
  });

  document.querySelectorAll(".assistant-open").forEach((button) => {
    button.addEventListener("click", () => {
      panel.classList.add("open");
      renderAssistantMessages();
      document.getElementById("assistantInput").focus();
    });
  });

  document.getElementById("assistantClose").addEventListener("click", () => {
    panel.classList.remove("open");
  });

  document.querySelectorAll(".assistant-prompts button").forEach((button) => {
    button.addEventListener("click", () => askAssistant(button.dataset.prompt));
  });

  document.getElementById("assistantForm").addEventListener("submit", (event) => {
    event.preventDefault();
    const input = document.getElementById("assistantInput");
    const question = input.value.trim();
    if (!question) {
      return;
    }

    askAssistant(question);
    input.value = "";
  });

  document.getElementById("assistantLog").addEventListener("click", (event) => {
    const link = event.target.closest("[data-assistant-doc]");
    if (!link) {
      return;
    }

    navigateToDoc(link.dataset.assistantDoc);
    panel.classList.remove("open");
  });

  renderAssistantMessages();
}

function askAssistant(question) {
  const messages = getAssistantMessages();
  const answer = createAssistantAnswer(question);
  messages.push({ role: "user", text: question });
  messages.push(Object.assign({ role: "assistant" }, answer));
  saveAssistantMessages(messages);
  renderAssistantMessages();
}

function renderAssistantMessages() {
  const log = document.getElementById("assistantLog");
  if (!log) {
    return;
  }

  log.innerHTML = getAssistantMessages()
    .map((message) => {
      const links = Array.isArray(message.links) && message.links.length
        ? `<div class="assistant-links">${message.links
          .filter((id) => docs[id])
          .map((id) => `<a href="docs.html#${id}" target="_blank" rel="noopener">${escapeHtml(docs[id].title)}</a>`)
          .join("")}</div>`
        : "";
      return `<div class="assistant-msg ${message.role === "user" ? "user" : ""}">${escapeHtml(message.text)}${links}</div>`;
    })
    .join("");
  log.scrollTop = log.scrollHeight;
}

function createAssistantAnswer(question) {
  const term = question.toLowerCase().trim();
  const currentDoc = docs[activeDoc];
  const openCurrent = ["current", "this page", "summarize", "summary", "what is this"].some((keyword) => term.includes(keyword));

  if (openCurrent && currentDoc) {
    return {
      text: `You are currently reading ${currentDoc.title}. It is a ${currentDoc.category.toLowerCase()} page with a ${currentDoc.read} estimate. The main idea is: ${currentDoc.summary}`,
      links: [activeDoc]
    };
  }

  const topicRules = [
    {
      keywords: ["project", "setup", "dashboard", "profile", "domain", "ssl", "configuration", "config"],
      reply: "For project setup, start with Creating a Project, Dashboard and Profile, Navigate Your Docs, Custom Domain and SSL, and System Configuration. Those pages explain how to launch and manage the docs workspace.",
      links: ["creatingProject", "dashboardProfile", "navigateDocs", "customDomain", "systemConfig"]
    },
    {
      keywords: ["api", "endpoint", "request", "response", "openapi", "swagger", "curl"],
      reply: "For API work, start with API Explorer, API Reference, OpenAPI Format, Authentication, and MDX Components. Those pages cover request structure, security, schemas, and interactive docs.",
      links: ["apiExplorer", "api", "openapi", "auth", "mdx"]
    },
    {
      keywords: ["write", "writing", "docs", "documentation", "guide", "content", "article", "page"],
      reply: "For writing and structure, use Welcome, Content Strategy, Article Design, Recipes, and Search Tips. They explain how to plan, write, and keep docs readable.",
      links: ["welcome", "contentStrategy", "articleDesign", "recipes", "searchTips"]
    },
    {
      keywords: ["search", "find", "lookup", "quick find", "keyword"],
      reply: "For searching, use Global Search and Search Tips. The sidebar also holds the main article groups, and Quick Find can jump straight to matching pages.",
      links: ["globalSearchDoc", "searchTips", "structure"]
    },
    {
      keywords: ["version", "branch", "release", "changelog", "merge"],
      reply: "For version control and releases, use Versioning, Branches, Changelog, and Review Workflow. Those pages cover how docs move from draft to published state.",
      links: ["versions", "branches", "changelog", "review"]
    },
    {
      keywords: ["login", "sign in", "password", "account", "auth", "access"],
      reply: "For account and access questions, use Authentication and Permissions. If you want the local demo account, the sign-in button stores the session in this browser.",
      links: ["auth", "permissions"]
    },
    {
      keywords: ["assistant", "help", "ai", "chat", "question"],
      reply: "This assistant is connected to your website content. Ask about a task, feature, page type, or problem, and it will recommend matching documentation pages you can open.",
      links: ["welcome", "recipes", "apiExplorer", "linter"]
    },
    {
      keywords: ["collabor", "discussion", "comment", "feedback", "community"],
      reply: "For collaboration and feedback, use Discussions, Collaboration, Permissions, and Docs Linter. They cover reader feedback, review, and access control.",
      links: ["discussions", "collaboration", "permissions", "linter"]
    }
  ];

  const direct = topicRules.find((rule) => rule.keywords.some((keyword) => term.includes(keyword)));
  if (direct) {
    return { text: direct.reply, links: direct.links };
  }

  const words = term.split(/\s+/).filter((word) => word.length > 2);
  const matches = Object.entries(docs)
    .map(([id, doc]) => {
      const searchable = searchableText(doc);
      const score = words.reduce((total, word) => total + (searchable.includes(word) ? 1 : 0), 0) + (searchable.includes(term) ? 3 : 0);
      return { id, doc, score };
    })
    .filter((item) => item.score > 0)
    .sort((a, b) => b.score - a.score)
    .slice(0, 3);

  if (matches.length) {
    const titles = matches.map((item) => item.doc.title).join(", ");
    return {
      text: `I found the closest docs for that: ${titles}. Open the best match below, or ask a more specific follow-up and I will narrow it down.`,
      links: matches.map((item) => item.id)
    };
  }

  return {
    text: "I did not find an exact match yet. Try asking about API Explorer, Content Strategy, Recipes, Search Tips, Changelog, Versioning, Discussions, login, or OpenAPI.",
    links: ["welcome", "globalSearchDoc", "apiExplorer"]
  };
}

function handleAuthSubmit(event) {
  event.preventDefault();

  const name = nameInput.value.trim();
  const email = emailInput.value.trim().toLowerCase();
  const password = passwordInput.value;
  const accounts = getAccounts();

  if (password.length < 6) {
    authMessage.textContent = "Password must be at least 6 characters.";
    return;
  }

  if (authMode === "signup") {
    if (accounts.some((account) => account.email === email)) {
      authMessage.textContent = "An account already exists for this email.";
      return;
    }

    const account = {
      name,
      email,
      password,
      createdAt: new Date().toISOString()
    };
    accounts.push(account);
    saveAccounts(accounts);
    localStorage.setItem(sessionStoreKey, JSON.stringify({ name, email }));
    authMessage.textContent = "Account created. Opening your workspace...";
    updateAccountUi();
    showToast("Account saved", "Your workspace login is ready on this device.");
    window.setTimeout(closeAuthPanel, 700);
    return;
  }

  const match = accounts.find((account) => account.email === email && account.password === password);
  if (!match) {
    authMessage.textContent = "No matching local account found. Try Sign up first.";
    return;
  }

  localStorage.setItem(sessionStoreKey, JSON.stringify({ name: match.name, email: match.email }));
  authMessage.textContent = "Signed in. Welcome back.";
  updateAccountUi();
  showToast("Signed in", `Welcome back, ${match.name || match.email}.`);
  window.setTimeout(closeAuthPanel, 700);
}

function searchableText(doc) {
  return [
    doc.title,
    doc.category,
    doc.summary,
    doc.tags.join(" "),
    doc.sections.map((section) => section.join(" ")).join(" "),
    doc.bullets ? doc.bullets.join(" ") : "",
    doc.references ? doc.references.map((reference) => reference.join(" ")).join(" ") : "",
    doc.code ? `${doc.code.language} ${doc.code.value}` : ""
  ].join(" ").toLowerCase();
}

function navigateToDoc(id) {
  if (pageType === "docs") {
    renderDoc(id);
    window.history.replaceState(null, "", `#${id}`);
    window.scrollTo({ top: 0, behavior: "smooth" });
    return;
  }

  sessionStorage.setItem(targetDocKey, id);
  window.location.href = "docs.html";
}

function getDocFromUrl() {
  const hash = window.location.hash.replace(/^#/, "").trim();
  if (hash && docs[hash]) {
    return hash;
  }

  const params = new URLSearchParams(window.location.search);
  const docId = params.get("doc");
  if (docId && docs[docId]) {
    return docId;
  }

  return null;
}

function openRailMenu(nextState) {
  if (!railMenu || !railMenuButton) {
    return;
  }

  const shouldOpen = typeof nextState === "boolean" ? nextState : !railMenu.classList.contains("open");
  railMenu.classList.toggle("open", shouldOpen);
  railMenuButton.setAttribute("aria-expanded", shouldOpen ? "true" : "false");
}

function openDocInNewTab(id) {
  if (!docs[id]) {
    return;
  }

  window.open(`docs.html?doc=${encodeURIComponent(id)}`, "_blank", "noopener");
}

function getDiscussionQuestions() {
  try {
    const questions = JSON.parse(localStorage.getItem(discussionStoreKey));
    return Array.isArray(questions) ? questions : [];
  } catch (error) {
    return [];
  }
}

function saveDiscussionQuestions(questions) {
  localStorage.setItem(discussionStoreKey, JSON.stringify(questions));
}

function updateDiscussionCounts() {
  const cards = Array.from(document.querySelectorAll(".thread-card"));
  const counts = {
    faq: cards.filter((card) => card.dataset.faq === "true").length,
    recent: cards.length,
    unanswered: cards.filter((card) => (card.dataset.status || "open") === "open").length
  };

  Object.entries(counts).forEach(([filter, count]) => {
    const target = document.querySelector(`[data-filter-count="${filter}"]`);
    if (target) {
      target.textContent = count;
    }
  });
}

function createQuestionCard(question) {
  const article = document.createElement("article");
  article.className = question.status === "answered"
    ? "thread-card answered user-question"
    : "thread-card user-question";
  article.dataset.thread = question.id;
  article.dataset.questionId = question.id;
  article.dataset.status = question.status || "open";
  article.dataset.faq = question.faq ? "true" : "false";

  const comments = Array.isArray(question.comments) ? question.comments : [];
  const topic = docs[question.topic] ? question.topic : "discussions";
  const author = question.author || "Guest reader";
  const created = question.createdAt ? new Date(question.createdAt) : new Date();
  const createdLabel = Number.isNaN(created.getTime())
    ? "Recently"
    : created.toLocaleDateString(undefined, { month: "short", day: "numeric", year: "numeric" });

  article.innerHTML = `
    <div class="thread-stats">
      <button type="button" class="thread-react" aria-label="React to thread">Like 0</button>
      <button type="button" class="thread-comments-toggle" aria-label="Comments">Comments ${comments.length}</button>
      <span>${question.status === "answered" ? "Answered" : "Unanswered"}</span>
    </div>
    <div class="thread-body">
      <h3><a href="docs.html#${topic}">${escapeHtml(question.title)}</a></h3>
      <p>${escapeHtml(question.details)}</p>
      <small>Asked by ${escapeHtml(author)} · ${escapeHtml(createdLabel)}</small>
      <div class="thread-actions">
        <button type="button" class="thread-comments-toggle">View comments</button>
        <button type="button" class="thread-react">React</button>
        <button type="button" class="thread-reply">Reply</button>
      </div>
      <div class="thread-comments" hidden>
        ${comments.map((comment) => `<p><strong>${escapeHtml(comment.author)}:</strong> ${escapeHtml(comment.text)}</p>`).join("")}
      </div>
    </div>
  `;

  return article;
}

function renderSavedQuestions() {
  if (!discussionFeed) {
    return;
  }

  discussionFeed.querySelectorAll(".user-question").forEach((card) => card.remove());
  const firstThread = discussionFeed.querySelector(".thread-card");
  getDiscussionQuestions().forEach((question) => {
    discussionFeed.insertBefore(createQuestionCard(question), firstThread || null);
  });
  updateDiscussionCounts();
}

function openQuestionPanel() {
  if (!questionPanel) {
    return;
  }

  questionPanel.classList.add("open");
  questionPanel.setAttribute("aria-hidden", "false");
  if (questionTitle) {
    questionTitle.focus();
  }
}

function closeQuestionPanel() {
  if (!questionPanel) {
    return;
  }

  questionPanel.classList.remove("open");
  questionPanel.setAttribute("aria-hidden", "true");
}

function applyDiscussionFilter(filter) {
  activeDiscussionFilter = filter;

  document.querySelectorAll(".discussion-filter").forEach((button) => {
    button.classList.toggle("active", button.dataset.discussionFilter === filter);
  });

  let visibleCount = 0;
  document.querySelectorAll(".thread-card").forEach((card) => {
    const status = card.dataset.status || "open";
    const isFaq = card.dataset.faq === "true";
    const shouldShow = filter === "recent" || (filter === "faq" && isFaq) || (filter === "unanswered" && status === "open");
    card.hidden = !shouldShow;
    if (shouldShow) {
      visibleCount += 1;
    }
  });

  if (discussionEmpty) {
    discussionEmpty.hidden = visibleCount > 0;
  }
  updateDiscussionCounts();
}

function toggleThreadComments(card) {
  if (!card) {
    return;
  }

  const comments = card.querySelector(".thread-comments");
  if (!comments) {
    return;
  }

  const shouldShow = comments.hidden;
  comments.hidden = !shouldShow;

  card.querySelectorAll(".thread-comments-toggle").forEach((button) => {
    button.setAttribute("aria-expanded", shouldShow ? "true" : "false");
  });
}

function toggleThreadReaction(card, button) {
  if (!card || !button) {
    return;
  }

  const countButton = card.querySelector(".thread-stats .thread-react");
  if (!countButton) {
    return;
  }

  const currentCount = parseInt((countButton.textContent.match(/\d+/) || ["0"])[0], 10);
  const reacted = card.dataset.reacted === "true";
  const nextCount = reacted ? Math.max(0, currentCount - 1) : currentCount + 1;
  card.dataset.reacted = reacted ? "false" : "true";
  countButton.textContent = "👍 " + nextCount;
  if (button !== countButton) {
    button.textContent = reacted ? "React" : "Reacted";
  }
}

function openReplyComposer(card) {
  if (!card) {
    return;
  }

  const session = getSession();
  if (!session) {
    openAuth("login");
    showToast("Sign in first", "Your account is used for discussion replies and saved workspace activity.");
    return;
  }

  let composer = card.querySelector(".thread-reply-form");
  if (!composer) {
    composer = document.createElement("form");
    composer.className = "thread-reply-form";
    composer.innerHTML = `
      <label>
        Reply as ${escapeHtml(session.name || session.email)}
        <textarea rows="3" placeholder="Write a reply..."></textarea>
      </label>
      <div class="thread-reply-actions">
        <button type="submit">Post Reply</button>
        <button type="button" class="thread-reply-cancel">Cancel</button>
      </div>
    `;
    const body = card.querySelector(".thread-body");
    const comments = card.querySelector(".thread-comments");
    body.insertBefore(composer, comments || null);
  }

  composer.hidden = false;
  const textarea = composer.querySelector("textarea");
  if (textarea) {
    textarea.focus();
  }

  const cancel = composer.querySelector(".thread-reply-cancel");
  if (cancel && !cancel.dataset.bound) {
    cancel.dataset.bound = "true";
    cancel.addEventListener("click", () => {
      composer.hidden = true;
      composer.reset();
    });
  }

  if (!composer.dataset.bound) {
    composer.dataset.bound = "true";
    composer.addEventListener("submit", (event) => {
      event.preventDefault();
      const text = textarea ? textarea.value.trim() : "";
      if (!text) {
        return;
      }

      const comments = card.querySelector(".thread-comments");
      if (comments) {
        comments.hidden = false;
        const reply = document.createElement("p");
        reply.innerHTML = `<strong>${escapeHtml(session.name || session.email)}:</strong> ${escapeHtml(text)}`;
        comments.appendChild(reply);
      }

      const questionId = card.dataset.questionId;
      if (questionId) {
        const questions = getDiscussionQuestions();
        const question = questions.find((item) => item.id === questionId);
        if (question) {
          question.comments = Array.isArray(question.comments) ? question.comments : [];
          question.comments.push({
            author: session.name || session.email,
            text,
            createdAt: new Date().toISOString()
          });
          question.status = "answered";
          saveDiscussionQuestions(questions);
          card.dataset.status = "answered";
          card.classList.add("answered");

          const statusLabel = card.querySelector(".thread-stats span");
          const commentCount = card.querySelector(".thread-stats .thread-comments-toggle");
          if (statusLabel) {
            statusLabel.textContent = "Answered";
          }
          if (commentCount) {
            commentCount.textContent = `Comments ${question.comments.length}`;
          }
        }
      }

      composer.hidden = true;
      composer.reset();
      applyDiscussionFilter(activeDiscussionFilter);
      showToast("Reply posted", "Your comment was added to this discussion thread.");
    });
  }
}

function renderSearch(query) {
  if (!searchResults) {
    return;
  }

  const term = query.trim().toLowerCase();
  const entries = Object.entries(docs);
  const results = term
    ? entries.filter(([, doc]) => searchableText(doc).includes(term))
    : entries.slice(0, 6);

  searchResults.innerHTML = results.length
    ? results.map(([id, doc]) => `<button class="result-button" type="button" data-doc="${id}"><strong>${doc.title}</strong><span>${doc.summary}</span><em>${doc.category} / ${doc.read}</em></button>`).join("")
    : `<div class="callout"><strong>No exact matches.</strong><p>Try API, version, sidebar, manual, policy, snippet, or knowledge base.</p></div>`;
}

document.querySelectorAll(".doc-link").forEach((button) => {
  button.addEventListener("click", () => {
    navigateToDoc(button.dataset.doc);
    const workspace = document.getElementById("workspace");
    if (workspace) {
      workspace.scrollIntoView({ behavior: "smooth" });
    }
  });
});

document.querySelectorAll(".section-toggle").forEach((button) => {
  button.addEventListener("click", () => button.closest(".nav-section").classList.toggle("open"));
});

document.querySelectorAll(".tab-button").forEach((button) => {
  button.addEventListener("click", () => {
    activeMode = button.dataset.mode;
    document.querySelectorAll(".tab-button").forEach((tab) => tab.classList.toggle("active", tab === button));
    renderDoc(activeDoc);
  });
});

if (versionSelect) {
  versionSelect.addEventListener("change", () => renderDoc(activeDoc));
}

const menuButton = document.getElementById("menuButton");
if (menuButton) {
  menuButton.addEventListener("click", () => {
    if (sidebar) {
      sidebar.classList.toggle("open");
    }
  });
}

const openSearchButton = document.getElementById("openSearchButton");
if (openSearchButton) {
  openSearchButton.addEventListener("click", () => openSearch());
}

const closeSearchButton = document.getElementById("closeSearch");
if (closeSearchButton) {
  closeSearchButton.addEventListener("click", closeSearch);
}

if (heroSignupButton) {
  heroSignupButton.addEventListener("click", () => openAuth("signup"));
}

if (authButton) {
  authButton.addEventListener("click", () => {
    if (getSession()) {
      const session = getSession();
      const confirmLogout = window.confirm(`Sign out ${session.name || session.email}?`);
      if (!confirmLogout) {
        return;
      }

      localStorage.removeItem(sessionStoreKey);
      updateAccountUi();
      showToast("Signed out", "Your local session was cleared.");
      return;
    }

    openAuth("login");
  });
}

if (closeAuth) {
  closeAuth.addEventListener("click", closeAuthPanel);
}

if (authForm) {
  authForm.addEventListener("submit", handleAuthSubmit);
}

document.querySelectorAll(".auth-tab").forEach((button) => {
  button.addEventListener("click", () => setAuthMode(button.dataset.authMode));
});

if (globalSearch) {
  globalSearch.addEventListener("focus", () => openSearch(globalSearch.value));
  globalSearch.addEventListener("input", () => openSearch(globalSearch.value));
}

if (dialogSearch) {
  dialogSearch.addEventListener("input", () => renderSearch(dialogSearch.value));
}

if (searchResults) {
  searchResults.addEventListener("click", (event) => {
    const result = event.target.closest("[data-doc]");
    if (!result) {
      return;
    }
    navigateToDoc(result.dataset.doc);
    closeSearch();
    if (globalSearch) {
      globalSearch.value = "";
    }
    const workspace = document.getElementById("workspace");
    if (workspace) {
      workspace.scrollIntoView({ behavior: "smooth" });
    }
  });
}

if (docBody) {
  docBody.addEventListener("click", (event) => {
    const button = event.target.closest(".copy-code");
    if (!button) {
      return;
    }
    const text = button.closest(".code-card").querySelector("code").textContent;
    navigator.clipboard.writeText(text).then(() => {
      button.textContent = "Copied";
      window.setTimeout(() => {
        button.textContent = "Copy";
      }, 1300);
    });
  });
}

if (themeToggle) {
  themeToggle.addEventListener("click", () => {
    const nextTheme = document.body.classList.contains("dark") ? "light" : "dark";
    localStorage.setItem(themeStoreKey, nextTheme);
    applyTheme(nextTheme);
  });
}

document.addEventListener("keydown", (event) => {
  if ((event.ctrlKey || event.metaKey) && event.key.toLowerCase() === "k") {
    event.preventDefault();
    openSearch(globalSearch.value);
  }
  if (searchPanel && event.key === "Escape" && searchPanel.classList.contains("open")) {
    closeSearch();
  }
  if (authPanel && event.key === "Escape" && authPanel.classList.contains("open")) {
    closeAuthPanel();
  }
  if (questionPanel && event.key === "Escape" && questionPanel.classList.contains("open")) {
    closeQuestionPanel();
  }
});

window.addEventListener("scroll", () => {
  if (toTop) {
    toTop.classList.toggle("show", window.scrollY > 420);
  }
});

if (toTop) {
  toTop.addEventListener("click", () => window.scrollTo({ top: 0, behavior: "smooth" }));
}

if (returnButton) {
  returnButton.addEventListener("click", () => window.scrollTo({ top: 0, behavior: "smooth" }));
}

if (askQuestionButton) {
  askQuestionButton.addEventListener("click", () => {
    openRailMenu(false);
    openQuestionPanel();
  });
}

if (closeQuestion) {
  closeQuestion.addEventListener("click", closeQuestionPanel);
}

if (questionPanel) {
  questionPanel.addEventListener("click", (event) => {
    if (event.target === questionPanel) {
      closeQuestionPanel();
    }
  });
}

if (questionForm) {
  questionForm.addEventListener("submit", (event) => {
    event.preventDefault();
    const title = questionTitle ? questionTitle.value.trim() : "";
    const details = questionDetails ? questionDetails.value.trim() : "";
    if (!title || !details) {
      return;
    }

    const session = getSession();
    const questions = getDiscussionQuestions();
    questions.unshift({
      id: `question-${Date.now()}`,
      title,
      details,
      topic: questionTopic ? questionTopic.value : "discussions",
      author: session ? (session.name || session.email) : "Guest reader",
      createdAt: new Date().toISOString(),
      status: "open",
      faq: false,
      comments: []
    });
    saveDiscussionQuestions(questions);
    renderSavedQuestions();
    questionForm.reset();
    closeQuestionPanel();
    applyDiscussionFilter("unanswered");
    const discussions = document.getElementById("discussions");
    if (discussions) {
      discussions.scrollIntoView({ behavior: "smooth", block: "start" });
    }
    showToast("Question posted", "It is now listed under Unanswered in Discussions.");
  });
}

if (copyPageButton) {
  copyPageButton.addEventListener("click", () => {
    const title = docTitle ? docTitle.textContent : document.title;
    const summary = docSummary ? docSummary.textContent : "";
    const payload = `${title}\n${summary}\n${window.location.href}`;
    navigator.clipboard.writeText(payload).then(() => {
      showToast("Page copied", "Title, summary, and page link were copied.");
    });
  });
}

if (railMenuButton) {
  railMenuButton.addEventListener("click", () => openRailMenu());
}

if (railMenu) {
  railMenu.addEventListener("click", (event) => {
    const button = event.target.closest("button");
    if (!button) {
      return;
    }

    if (button.classList.contains("assistant-open")) {
      openRailMenu(false);
      const assistantPanel = document.getElementById("assistantPanel");
      if (assistantPanel) {
        assistantPanel.classList.add("open");
      }
      renderAssistantMessages();
      const assistantInput = document.getElementById("assistantInput");
      if (assistantInput) {
        assistantInput.focus();
      }
      return;
    }

    const title = docTitle ? docTitle.textContent : document.title;
    const summary = docSummary ? docSummary.textContent : "";
    const payload = `${title}\n${summary}\n${window.location.href}`;

    if (button.id === "openChatGptButton" || button.id === "openClaudeButton") {
      navigator.clipboard.writeText(payload).then(() => {
        showToast("Prompt copied", "Page title, summary, and link were copied.");
      });
      const link = button.id === "openChatGptButton"
        ? "https://chatgpt.com/"
        : "https://claude.ai/";
      window.open(link, "_blank", "noopener");
      return;
    }

    if (button.id === "connectCursorButton") {
      navigator.clipboard.writeText(`cursor docs context: ${title}`).then(() => {
        showToast("Cursor context copied", "A docs context prompt was copied.");
      });
      return;
    }

    if (button.id === "connectVsCodeButton") {
      navigator.clipboard.writeText(`vscode docs context: ${title}`).then(() => {
        showToast("VS Code context copied", "A docs context prompt was copied.");
      });
      return;
    }

    if (button.id === "copyMcpConfigButton") {
      navigator.clipboard.writeText(`mcp docs page: ${title}\nurl: ${window.location.href}`).then(() => {
        showToast("MCP config copied", "A simple docs context note was copied.");
      });
      return;
    }

    if (button.id === "copyMcpCommandButton") {
      navigator.clipboard.writeText(`open docs "${title}"`).then(() => {
        showToast("MCP command copied", "A command-style prompt was copied.");
      });
      return;
    }

    if (button.id === "viewMarkdownButton") {
      navigator.clipboard.writeText(`# ${title}\n\n${summary}\n`).then(() => {
        showToast("Markdown copied", "A markdown version of the current page was copied.");
      });
    }
  });
}

document.addEventListener("click", (event) => {
  if (!railMenu || !railMenuButton) {
    return;
  }

  if (!event.target.closest(".rail-tools")) {
    openRailMenu(false);
  }
});

if (docBody) {
  docBody.addEventListener("click", (event) => {
    const feedbackButton = event.target.closest(".feedback-button");
    if (!feedbackButton) {
      return;
    }

    const feedbackMessage = document.getElementById("feedbackMessage");
    if (!feedbackMessage) {
      return;
    }

    feedbackMessage.textContent = feedbackButton.dataset.feedback === "yes"
      ? "Thanks. That helps us keep the docs useful."
      : "Thanks. We will keep improving this page.";
  });
}

document.addEventListener("click", (event) => {
  const recipeButton = event.target.closest(".recipe-open");
  if (recipeButton && recipeButton.dataset.doc) {
    navigateToDoc(recipeButton.dataset.doc);
    const workspace = document.getElementById("workspace");
    if (workspace) {
      workspace.scrollIntoView({ behavior: "smooth" });
    }
    return;
  }

  const filterButton = event.target.closest(".discussion-filter");
  if (filterButton && filterButton.dataset.discussionFilter) {
    applyDiscussionFilter(filterButton.dataset.discussionFilter);
    return;
  }

  const commentToggle = event.target.closest(".thread-comments-toggle");
  if (commentToggle) {
    toggleThreadComments(commentToggle.closest(".thread-card"));
    return;
  }

  const reactButton = event.target.closest(".thread-react");
  if (reactButton) {
    toggleThreadReaction(reactButton.closest(".thread-card"), reactButton);
    return;
  }

  const replyButton = event.target.closest(".thread-reply");
  if (replyButton) {
    openReplyComposer(replyButton.closest(".thread-card"));
  }
});

renderDoc();
renderSearch("");
setAuthMode("login");
updateAccountUi();
createAssistant();
renderSavedQuestions();
applyDiscussionFilter(activeDiscussionFilter);

const existingSession = getSession();
if (existingSession) {
  showToast("Welcome back", `Signed in as ${existingSession.name || existingSession.email}.`);
}

window.history.scrollRestoration = "manual";
window.scrollTo({ top: 0, behavior: "auto" });

if (pageType === "docs") {
  const docFromUrl = getDocFromUrl();
  if (docFromUrl && docs[docFromUrl]) {
    renderDoc(docFromUrl);
  }
  const pendingDoc = sessionStorage.getItem(targetDocKey);
  if (pendingDoc && docs[pendingDoc]) {
    sessionStorage.removeItem(targetDocKey);
    renderDoc(pendingDoc);
  }
}


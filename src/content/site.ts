// Single source of truth for site copy.
// All content reflects Shaheer's real LinkedIn (verified May 2026).
// Writing rules:
//   - No em dashes
//   - No banned AI vocabulary (delve, tapestry, leverage, seamless, robust,
//     comprehensive, "in today's", "let's dive in", passionate, results-driven)
//   - No triadic "X, Y, and Z" phrasing
//   - Active verbs only

export const profile = {
  name: "Shaheer Bin Ijaz",
  firstName: "Shaheer",
  lastName: "Bin Ijaz",
  initials: "SI",
  title: "Senior Software Engineer",
  taglinePipes: "Python · Django · FastAPI · ETL · Computer Vision · Blockchain",
  location: "Lahore, Pakistan",
  email: "shaheer.ijaz03@gmail.com",
  github: "https://github.com/ShaheerIjaz97",
  linkedin: "https://www.linkedin.com/in/shaheer-bin-ijaz/",
  cvPath: "/cv.pdf",
  yearsExperience: "6+",
  availability: "Open to senior backend, data engineering, and ML roles",
};

export const hero = {
  status: {
    pill: "Available for senior engineering work",
    dot: true,
  },
  greeting: "Hi, I'm",
  nameLines: ["SHAHEER BIN", "IJAZ."],
  roleLine: "Senior Software Engineer",
  italicTag: "Python backends, data pipelines, ML & CV systems",
  subhead:
    "Six years building production Python services that take real load. Django and FastAPI on the request path. AWS Lambda and Postgres on the data side. PyTorch and YOLO when the problem is visual. The code is built to be read on day one and shipped on week one.",
  ctas: {
    primary:   { label: "See selected work", href: "#work" },
    secondary: { label: "Download CV",       href: "/cv.pdf" },
  },
  badges: [
    { kicker: "Backend", label: "Django · FastAPI",        position: "top-left"     },
    { kicker: "Data",    label: "ETL · BigQuery · Pandas", position: "top-right"    },
    { kicker: "ML & CV", label: "PyTorch · YOLO · CNN",    position: "bottom-left"  },
    { kicker: "Web3",    label: "Solana off-chain",        position: "bottom-right" },
  ],
  social: [
    { label: "GitHub",   href: "https://github.com/ShaheerIjaz97" },
    { label: "LinkedIn", href: "https://www.linkedin.com/in/shaheer-bin-ijaz/" },
    { label: "Email",    href: "mailto:shaheer.ijaz03@gmail.com" },
  ],
};

export const companies = {
  label: "Where I have worked",
  items: [
    { name: "Devsinc",       period: "2024 — Present" },
    { name: "Code District", period: "2022 — 2024" },
    { name: "Techesthete",   period: "2021 — 2022" },
    { name: "WiMetrix",      period: "2019 — 2021" },
  ],
};

// Quick-read facts strip below the hero (6 key/value pairs).
export const stripFacts = [
  { key: "ROLE",    value: "Senior Software Engineer" },
  { key: "STACK",   value: "Python · Django · FastAPI" },
  { key: "DATA",    value: "Postgres · BigQuery · Pandas" },
  { key: "ML / CV", value: "PyTorch · YOLO · OpenCV" },
  { key: "INFRA",   value: "Docker · AWS · GCP · Redis" },
  { key: "BASED",   value: "Lahore, PK · Remote-ready" },
];

export const about = {
  number: "01",
  label: "About",
  heading: "I work where backends, data, and ML meet.",
  paragraphs: [
    "Six years building Python services that take real load. Most of the work sits between three jobs that companies usually hire for separately. A Django service that has to talk to a payment provider one day. A Lambda pipeline ingesting product data into BigQuery the next. A YOLO model checking parts on a manufacturing line the day after. The skill is treating all three as the same job: a system that runs in production, gets observed, and gets fixed when it breaks.",
    "I started in computer vision and ML at WiMetrix, where I built CNN-based fabric-defect detectors and LSTM efficiency forecasts for industrial lines. Moved into ETL at Techesthete, building Walmart and Instacart pipelines through AWS Lambda into BigQuery. Spent two years at Code District building Django and FastAPI backends, including a Solana NFT marketplace and a refund-approvals system. Now Senior SWE at Devsinc, leading backend architecture work on Kenya's national healthcare initiative (HealthPro ERP / Tiberbu) and on Electus Education Global.",
    "I default to clean schemas, real tests, and a Dockerfile that another engineer can run on day one. I do not write code that needs me to be in the room to understand it. The architecture decisions go in a doc, not a Slack message.",
  ],
  bullets: [
    "Python backends in Django REST Framework and FastAPI, deployed on Docker",
    "ETL and data pipelines on AWS Lambda, S3, Postgres, BigQuery",
    "Computer vision and ML with PyTorch, YOLOv8, OpenCV, Keras, CNNs, LSTMs",
    "Solana off-chain backends and event indexers for marketplace apps",
    "Event-driven systems with Google Pub/Sub, RabbitMQ, outbox pattern",
    "GCP (Cloud Run, VPCs, Scheduler) and AWS infra, Postgres tuning, Celery",
  ],
};

export const work = {
  number: "02",
  label: "Selected work",
  heading: "Four systems. Each shipped with tests, a Dockerfile, and a real reason for the design choices.",
  intro:
    "These are public reconstructions of professional projects I have built and run. Each repo has its own ARCHITECTURE.md explaining the load-bearing decisions and the tradeoffs that came with them.",
  items: [
    {
      id: "01",
      kicker: "Backend · Workflow",
      title: "Django Refund Management System",
      summary:
        "Operational backend for refund workflows: explicit state machine, role-based approvals, immutable audit trail, async notifications.",
      detail:
        "Refunds are not a single API call. They have policy gates, approval chains, and audit requirements. This service models the workflow as a state machine, writes an immutable audit event on every transition, and pushes side effects (email, PSP calls) onto Celery workers so they never block the request path. Originally built at Code District.",
      stack: ["Django 5", "DRF", "Postgres", "Celery", "Redis", "Docker"],
      links: { repo: "https://github.com/ShaheerIjaz97/django-refund-management-system" },
    },
    {
      id: "02",
      kicker: "FastAPI · Solana",
      title: "FastAPI Solana Marketplace API",
      summary:
        "Off-chain backend for a Solana NFT/listing marketplace: wallet-signature auth, listing lifecycle, idempotent on-chain event indexer.",
      detail:
        "A marketplace that hits chain on every page load collapses under volume. The fix is an off-chain backend with Postgres as the read model, kept current by an indexer worker that follows on-chain events. Two processes, never sharing an event loop. Every ingest is keyed by signature:instruction_index so replays are safe by construction. Originally built at Code District.",
      stack: ["FastAPI", "SQLAlchemy 2", "Postgres", "Redis", "solders", "Docker"],
      links: { repo: "https://github.com/ShaheerIjaz97/fastapi-solana-marketplace-api" },
    },
    {
      id: "03",
      kicker: "ETL · AWS Lambda",
      title: "AWS Lambda ETL Pipeline",
      summary:
        "Scheduled ingest of retail pricing data (Walmart / Instacart APIs) into a warehouse, with strict Pydantic schemas and dead-letter routing on every quality failure.",
      detail:
        "Three Lambdas, S3 between each stage. Pydantic v2 with extra=forbid at every boundary so silent upstream drift hard-fails instead of poisoning the warehouse. Loader uses INSERT OR REPLACE on (vendor, sku, fetched_at) so re-running a batch is safe. Originally built at Techesthete.",
      stack: ["Python 3.11", "AWS Lambda", "S3", "Pydantic v2", "BigQuery / DuckDB"],
      links: { repo: "https://github.com/ShaheerIjaz97/aws-lambda-etl-pipeline" },
    },
    {
      id: "04",
      kicker: "Computer vision · QC",
      title: "Computer Vision Defect Detector",
      summary:
        "YOLO + OpenCV pipeline for automated visual QC on a manufacturing line: deterministic preprocessing, class-aware thresholds, FastAPI inference server.",
      detail:
        "Most CV bugs are not model bugs, they are preprocessing drift between training and inference. The same YAML config drives both. Per-class confidence thresholds let safety-critical defects favor recall while cosmetic ones favor precision. Originally built at WiMetrix for industrial fabric-fault detection.",
      stack: ["PyTorch", "YOLOv8", "OpenCV", "FastAPI", "Keras (legacy)"],
      links: { repo: "https://github.com/ShaheerIjaz97/computer-vision-defect-detector" },
    },
  ],
  more: { label: "More on GitHub", href: "https://github.com/ShaheerIjaz97?tab=repositories" },
};

export const stack = {
  number: "03",
  label: "Stack",
  heading: "What I reach for, grouped by where it sits in the system.",
  groups: [
    { title: "Languages",     items: ["Python", "SQL", "TypeScript (where needed)"] },
    { title: "Backend",       items: ["Django", "DRF", "FastAPI", "Celery", "SQLAlchemy", "Pydantic v2"] },
    { title: "Data",          items: ["Postgres", "BigQuery", "Pandas", "NumPy", "DuckDB", "Great Expectations"] },
    { title: "ML / CV",       items: ["PyTorch", "YOLOv8", "OpenCV", "Keras", "scikit-learn", "CNN / LSTM"] },
    { title: "Cloud & infra", items: ["GCP Cloud Run", "AWS Lambda / S3", "Docker", "Redis", "Nginx"] },
    { title: "Event-driven",  items: ["Google Pub/Sub", "RabbitMQ", "outbox pattern", "Celery workers"] },
    { title: "Blockchain",    items: ["Solana RPC", "solders", "off-chain indexers"] },
    { title: "Observability", items: ["OpenTelemetry", "Prometheus", "structlog"] },
  ],
};

export const experience = {
  number: "04",
  label: "Experience",
  heading: "Where the work has been.",
  items: [
    {
      role: "Senior Software Engineer",
      org: "Devsinc",
      period: "Aug 2024 — Present",
      location: "Lahore, Pakistan · On-site",
      bullets: [
        "Engineered scalable backend architectures for Electus Education Global and HealthPro ERP (Kenya's national healthcare initiative), transitioning monolithic Django systems to FastAPI microservices.",
        "Built event-driven systems with Google Pub/Sub, RabbitMQ, and the outbox pattern to guarantee reliable async communication across services.",
        "Managed GCP infra (Cloud Run, VPCs, Scheduler) and AWS for the Tiberbu project, orchestrating CI/CD pipelines for mission-critical national healthcare services.",
        "Tuned PostgreSQL via connection pooling, query plans, partitioning, and horizontal scaling to keep latency low under increased load.",
        "Integrated external systems: Dash, Visa, and QBO for billing in Electus; EMR systems for HealthPro ERP; national healthcare APIs for Tiberbu.",
        "Owned production incidents end-to-end: profiling, refactors, caching strategies, response-time reductions across the stack.",
      ],
    },
    {
      role: "Python Software Engineer",
      org: "Code District",
      period: "Jun 2022 — Aug 2024",
      location: "Lahore, Pakistan",
      bullets: [
        "Built a Refund Management System from the ground up using Django REST Framework (the public reconstruction is on my GitHub).",
        "Designed and implemented a Solana Blockchain marketplace for buying and trading NFTs using FastAPI.",
        "Integrated third-party APIs including Solana on-chain reads, payment flows, and external auth.",
        "Built schedulers, seeders, custom user models, custom commands, and middleware as repeatable internal patterns.",
        "Owned production maintenance and code review across multiple internal projects.",
      ],
    },
    {
      role: "Python ETL Developer",
      org: "Techesthete",
      period: "May 2021 — Jun 2022",
      location: "Lahore, Pakistan · On-site",
      bullets: [
        "Built ETL pipelines pulling product data from Walmart and Instacart APIs, transforming through AWS Lambda, and loading into Google BigQuery (the public reconstruction is on my GitHub).",
        "Developed backend APIs with Django REST Framework around the warehouse.",
        "Owned data-quality checks and pipeline observability for high-volume retail data.",
      ],
    },
    {
      role: "Machine Learning Engineer",
      org: "WiMetrix · Industrial Data Intelligence",
      period: "Nov 2019 — Apr 2021",
      location: "Lahore, Pakistan",
      bullets: [
        "Built ETL processes in Python and SQL Server, including data extraction and merging across operational tables.",
        "Trained CNN-based YOLO models to detect industrial fabric faults on a textile manufacturing line (the public reconstruction is on my GitHub).",
        "Built regression models to predict worker efficiency from operational signals.",
        "Solved time-series forecasting problems with LSTM models to predict shift-level output efficiency.",
        "Stack: Python 3 with NumPy, Pandas, Matplotlib, Keras.",
      ],
    },
  ],
};

export const education = {
  number: "05",
  label: "Education",
  heading: "Where I studied.",
  items: [
    {
      degree: "Master's degree, Computer Science",
      org: "University of Engineering and Technology, Lahore",
      period: "2020 — 2022",
    },
    {
      degree: "Bachelor of Science, Computer Sciences",
      org: "Lahore Garrison University",
      period: "2015 — 2019",
    },
  ],
};

export const principles = {
  number: "06",
  label: "How I work",
  heading: "Five rules I do not bend on production code.",
  items: [
    {
      title: "Schema first.",
      body:
        "Boundaries get explicit types. Pydantic with extra=forbid on inbound, strict SQLAlchemy or Postgres CHECK constraints on stored data. Silent drift is the most expensive bug class I have ever debugged.",
    },
    {
      title: "State machines over CRUD.",
      body:
        "Anything that has a lifecycle (refunds, orders, indexer events, training runs) gets a state machine with explicit allowed transitions. The validator is in the service layer, not implied by which endpoint was hit.",
    },
    {
      title: "Idempotent writes.",
      body:
        "Anything that hits a downstream sink (warehouse, blockchain indexer, payment provider) uses a deterministic key and an upsert. Re-running a job is safe by construction, not by luck.",
    },
    {
      title: "Observability is not optional.",
      body:
        "Every service ships with structured logs, healthz, readyz, and metrics that say something useful (rows in, rows rejected, latency p95). If the dashboard cannot tell me whether the service is healthy at 2am, the service is not done.",
    },
    {
      title: "The architecture goes in a doc.",
      body:
        "Every repo of mine has an ARCHITECTURE.md explaining the load-bearing decisions and the tradeoffs that came with them. Code is the implementation, the doc is the contract with the next engineer.",
    },
  ],
};

export const now = {
  number: "07",
  label: "Currently",
  heading: "What I am working on this season.",
  items: [
    "Leading backend architecture on Kenya's national healthcare initiative (HealthPro ERP / Tiberbu) at Devsinc.",
    "Strengthening ML lifecycle tooling: experiment tracking, versioning, evaluation pipelines.",
    "Indexing patterns for high-throughput Solana data into Postgres.",
    "Backend performance work: query plans, caching layers, async I/O patterns.",
  ],
};

export const contact = {
  number: "08",
  label: "Contact",
  heading: "Working on something where backends, data, or ML have to actually run in production?",
  body:
    "The fastest path is email or LinkedIn DM with a couple of sentences on the system and the problem. I respond within a day on weekdays.",
  channels: [
    { label: "shaheer.ijaz03@gmail.com", href: "mailto:shaheer.ijaz03@gmail.com" },
    { label: "LinkedIn DM",              href: "https://www.linkedin.com/in/shaheer-bin-ijaz/" },
    { label: "GitHub",                   href: "https://github.com/ShaheerIjaz97" },
  ],
};

export const footer = {
  rights: "Shaheer Bin Ijaz",
  builtWith: "Astro + Tailwind. Source on GitHub.",
  sourceHref: "https://github.com/ShaheerIjaz97/shaheerbinijaz.com-site",
};

export const nav = [
  { num: "01", label: "About",      href: "#about" },
  { num: "02", label: "Work",       href: "#work" },
  { num: "03", label: "Stack",      href: "#stack" },
  { num: "04", label: "Experience", href: "#experience" },
  { num: "05", label: "Education",  href: "#education" },
  { num: "06", label: "Principles", href: "#principles" },
  { num: "07", label: "Currently",  href: "#now" },
  { num: "08", label: "Contact",    href: "#contact" },
];

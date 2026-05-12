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
  cvPath: "/cv",
  yearsExperience: "6+",
  availability: "Open to senior backend, data, or ML engineering roles",
};

export const hero = {
  status: {
    pill: "Open to senior engineering roles",
    dot: true,
  },
  greeting: "Hi, I'm",
  nameLines: ["SHAHEER BIN", "IJAZ."],
  roleLine: "Senior Software Engineer · Devsinc",
  italicTag: "Python backends. Data pipelines. ML & CV systems",
  subhead:
    "Six years building Python services that take real production load. Django and FastAPI on the request path. AWS Lambda and Postgres on the data side. PyTorch and YOLO when the problem is visual. Currently Senior SWE at Devsinc, leading backend on Kenya's national healthcare initiative.",
  ctas: {
    primary:   { label: "See selected work", href: "#work" },
    secondary: { label: "View CV",           href: "/cv" },
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
  { key: "NOW",        value: "Senior SWE at Devsinc" },
  { key: "REQUEST",    value: "Django · DRF · FastAPI" },
  { key: "DATA",       value: "Postgres · BigQuery · Pandas" },
  { key: "ML / CV",    value: "PyTorch · YOLO · OpenCV" },
  { key: "INFRA",      value: "Docker · GCP · AWS · Redis" },
  { key: "BASED",      value: "Lahore, PK · Remote-ready" },
];

export const about = {
  number: "01",
  label: "About",
  heading: "I work where backends, data, and ML meet.",
  paragraphs: [
    "Six years building Python services that take real production load. The work sits between three jobs companies usually hire for separately. A Django service talking to a payment provider one day. A Lambda pipeline ingesting product data into BigQuery the next. A YOLO model checking parts on a manufacturing line the day after. The skill is treating all three as the same job: a system that runs in prod, gets observed, gets fixed when it breaks.",
    "Started in computer vision at WiMetrix, training CNN-based fabric-fault detectors on textile manufacturing lines and LSTMs to forecast worker efficiency. Moved to ETL at Techesthete, pulling Walmart and Instacart product data through AWS Lambda into BigQuery. Spent two years at Code District building Django and FastAPI backends, including a Solana NFT marketplace with an off-chain indexer and a state-machine-driven refund approvals system. Now Senior SWE at Devsinc, leading backend architecture on Kenya's national healthcare initiative (HealthPro ERP / Tiberbu) and Electus Education Global.",
    "I default to clean schemas, real tests, and a Dockerfile that another engineer can run on day one. I do not write code that needs me in the room to understand. Architecture decisions go in a doc, not a Slack message.",
  ],
  bullets: [
    "Python backends in Django REST Framework and FastAPI, deployed on Docker",
    "ETL and data pipelines on AWS Lambda, S3, Postgres, BigQuery",
    "Computer vision and ML with PyTorch, YOLOv8, OpenCV, Keras, CNNs, LSTMs",
    "Solana off-chain backends and event indexers for marketplace apps",
    "Event-driven systems with Google Pub/Sub, RabbitMQ, outbox pattern",
    "GCP (Cloud Run, VPCs, Scheduler) plus AWS infra, Postgres tuning, Celery",
  ],
};

export const work = {
  number: "02",
  label: "Selected work",
  heading: "Four systems. Each shipped with tests, a Dockerfile, and a real reason for the design choices.",
  intro:
    "Public reconstructions of professional projects I have built and run. Each repo ships with an ARCHITECTURE.md explaining the load-bearing decisions and the tradeoffs that came with them.",
  items: [
    {
      id: "01",
      kicker: "Backend · Workflow",
      title: "Django Refund Management System",
      summary:
        "Refunds are not a single API call. They have policy gates, approval chains, audit requirements. This service models the workflow as a state machine and writes an immutable event on every transition.",
      detail:
        "Side effects (email, PSP calls) push onto Celery so they never block the request path. Approvers cannot skip transitions because the validator lives in the service layer, not implied by which endpoint was hit. Originally built at Code District.",
      stack: ["Django 5", "DRF", "Postgres", "Celery", "Redis", "Docker"],
      links: { repo: "https://github.com/ShaheerIjaz97/django-refund-management-system" },
    },
    {
      id: "02",
      kicker: "FastAPI · Solana",
      title: "FastAPI Solana Marketplace API",
      summary:
        "A marketplace that hits chain on every page load collapses under volume. The fix is an off-chain backend with Postgres as the read model, kept current by an indexer worker that follows on-chain events.",
      detail:
        "Two processes, never sharing an event loop. Every ingest is keyed by (signature, instruction_index) so replays are safe by construction. Wallet-signature auth on the API side. Originally built at Code District.",
      stack: ["FastAPI", "SQLAlchemy 2", "Postgres", "Redis", "solders", "Docker"],
      links: { repo: "https://github.com/ShaheerIjaz97/fastapi-solana-marketplace-api" },
    },
    {
      id: "03",
      kicker: "ETL · AWS Lambda",
      title: "AWS Lambda ETL Pipeline",
      summary:
        "Silent upstream schema drift is the bug class that poisons warehouses. Pydantic v2 with extra=forbid at every boundary turns it into a hard fail before it reaches BigQuery.",
      detail:
        "Three Lambdas chained through S3. Loader uses INSERT OR REPLACE on (vendor, sku, fetched_at) so re-running a batch is safe. Dead-letter queue on every quality failure. Originally built at Techesthete on Walmart and Instacart product feeds.",
      stack: ["Python 3.11", "AWS Lambda", "S3", "Pydantic v2", "BigQuery / DuckDB"],
      links: { repo: "https://github.com/ShaheerIjaz97/aws-lambda-etl-pipeline" },
    },
    {
      id: "04",
      kicker: "Computer vision · QC",
      title: "Computer Vision Defect Detector",
      summary:
        "Most CV bugs are not model bugs. They are preprocessing drift between training and inference. The same YAML config drives both, so the model sees identical pixels in dev and prod.",
      detail:
        "Per-class confidence thresholds let safety-critical defects favor recall while cosmetic ones favor precision. FastAPI inference server fronts the model. Originally built at WiMetrix for industrial fabric-fault detection on textile lines.",
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
    { title: "Backend",       items: ["Django", "DRF", "FastAPI", "Celery", "SQLAlchemy 2", "Pydantic v2"] },
    { title: "Data",          items: ["Postgres", "BigQuery", "Pandas", "NumPy", "DuckDB"] },
    { title: "ML / CV",       items: ["PyTorch", "YOLOv8", "OpenCV", "Keras", "scikit-learn"] },
    { title: "Cloud & infra", items: ["GCP Cloud Run", "AWS Lambda / S3", "Docker", "Nginx", "Redis"] },
    { title: "Event-driven",  items: ["Google Pub/Sub", "RabbitMQ", "outbox pattern", "Celery"] },
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
        "Lead backend on Kenya's national healthcare initiative (HealthPro ERP / Tiberbu) and Electus Education Global, transitioning monolithic Django systems into FastAPI microservices for faster deployment cycles.",
        "Built event-driven systems with Google Pub/Sub, RabbitMQ, and the outbox pattern to guarantee reliable async communication across education and healthcare services.",
        "Run GCP infra (Cloud Run, VPCs, Scheduler) plus AWS on Tiberbu, with CI/CD pipelines built for compliance on mission-critical national healthcare workloads.",
        "Tune PostgreSQL via connection pooling, query plans, partitioning, horizontal scaling to hold latency under increased education and healthcare load.",
        "Integrated Dash, Visa, QBO for billing in Electus. Connected medical supply chain and EMR systems for HealthPro ERP. Wired national healthcare APIs into Tiberbu.",
        "Own production incidents end to end: profile, refactor, cache, ship a postmortem.",
      ],
    },
    {
      role: "Python Software Engineer",
      org: "Code District",
      period: "Jun 2022 — Aug 2024",
      location: "Lahore, Pakistan",
      bullets: [
        "Built the Refund Management System from scratch in Django REST Framework. State-machine workflow, immutable audit trail, role-based approvals. Public reconstruction is on my GitHub.",
        "Designed and shipped a Solana NFT marketplace backend in FastAPI, with off-chain Postgres read model and an indexer that follows on-chain events.",
        "Integrated Solana on-chain reads, payment flows, third-party auth across the marketplace stack.",
        "Built repeatable internal patterns: schedulers, seeders, custom user models, custom commands, middleware.",
        "Owned production maintenance and code review across several internal projects.",
      ],
    },
    {
      role: "Python ETL Developer",
      org: "Techesthete",
      period: "May 2021 — Jun 2022",
      location: "Lahore, Pakistan · On-site",
      bullets: [
        "Built ETL pipelines pulling product data from Walmart and Instacart APIs, transforming through AWS Lambda, loading into Google BigQuery. Public reconstruction on my GitHub.",
        "Developed Django REST Framework backend APIs sitting on top of the warehouse.",
        "Owned data-quality checks and pipeline observability for high-volume retail feeds.",
      ],
    },
    {
      role: "Machine Learning Engineer",
      org: "WiMetrix · Industrial Data Intelligence",
      period: "Nov 2019 — Apr 2021",
      location: "Lahore, Pakistan",
      bullets: [
        "Wrote and tuned ETL queries against SQL Server, extracting and merging operational tables for downstream ML.",
        "Trained CNN-based YOLO models to catch fabric faults on a live textile manufacturing line. Public reconstruction on my GitHub.",
        "Built regression models predicting worker efficiency from operational signals.",
        "Solved time-series forecasting with LSTMs to predict shift-level output efficiency.",
        "Stack: Python 3 (NumPy, Pandas, Matplotlib, Keras).",
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
        "Boundaries get explicit types. Pydantic with extra=forbid on inbound payloads. Strict SQLAlchemy or Postgres CHECK constraints on stored data. Silent drift is the most expensive bug class I have ever debugged.",
    },
    {
      title: "State machines over CRUD.",
      body:
        "Anything with a lifecycle (refunds, orders, indexer events, training runs) gets a state machine with explicit allowed transitions. The validator lives in the service layer, never implied by which endpoint was hit.",
    },
    {
      title: "Idempotent writes.",
      body:
        "Anything that hits a downstream sink (warehouse, blockchain indexer, payment provider) uses a deterministic key plus an upsert. Re-running a job is safe by construction, not by luck.",
    },
    {
      title: "Observability is not optional.",
      body:
        "Every service ships with structured logs, healthz, readyz, plus metrics that say something useful (rows in, rows rejected, latency p95). If the dashboard cannot tell me whether the service is healthy at 2am, the service is not done.",
    },
    {
      title: "The architecture goes in a doc.",
      body:
        "Every repo of mine has an ARCHITECTURE.md explaining the load-bearing decisions plus the tradeoffs that came with them. Code is the implementation. The doc is the contract with the next engineer.",
    },
  ],
};

export const now = {
  number: "07",
  label: "Currently",
  heading: "What I am working on this season.",
  items: [
    "Leading backend on Kenya's national healthcare initiative (HealthPro ERP / Tiberbu) at Devsinc. Migrating monolithic Django into FastAPI microservices.",
    "Wiring event-driven systems with Google Pub/Sub plus the outbox pattern across education and healthcare projects.",
    "PostgreSQL performance work: query plans, partitioning, connection pooling under increased national-scale load.",
    "On the side: indexing patterns for high-throughput Solana data into Postgres.",
  ],
};

export const contact = {
  number: "08",
  label: "Contact",
  heading: "Building something where Python, data, or ML has to actually run in production?",
  body:
    "Fastest path is email or LinkedIn DM with a couple of sentences on the system and the problem. I reply within a day on weekdays. Open to senior backend, data, or ML engineering roles, remote or Lahore-based.",
  channels: [
    { label: "shaheer.ijaz03@gmail.com", href: "mailto:shaheer.ijaz03@gmail.com" },
    { label: "LinkedIn DM",              href: "https://www.linkedin.com/in/shaheer-bin-ijaz/" },
    { label: "GitHub",                   href: "https://github.com/ShaheerIjaz97" },
  ],
};

export const footer = {
  rights: "Shaheer Bin Ijaz",
  builtWith: "Astro · Tailwind · Source on GitHub",
  sourceHref: "https://github.com/ShaheerIjaz97/shaheerbinijaz.com-site",
};

export const nav = [
  { num: "01", label: "About",      href: "#about" },
  { num: "02", label: "Work",       href: "#work" },
  { num: "03", label: "Stack",      href: "#stack" },
  { num: "04", label: "Experience", href: "#experience" },
  { num: "05", label: "Education",  href: "#education" },
  { num: "06", label: "Principles", href: "#principles" },
  { num: "07", label: "Now",        href: "#now" },
  { num: "08", label: "Contact",    href: "#contact" },
];

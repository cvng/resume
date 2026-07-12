# Cedric VANGOUT

**Senior Backend Engineer**

Paris, France | <vangout.cedric@gmail.com> | +33633843340 | in/cedricvangout

---

## Skills

### Top skills

- Rust, Node.js, TypeScript, PostgreSQL, GraphQL, Performance Engineering

### Performance & optimization

- CPU / RAM / IO profiling, SQL slow-query optimization (PostgreSQL), load testing (k6), hot path isolation, async jobs

### Backend development

- Node.js, Bun, TypeScript, Hono, Rust, Axum, Python, FastAPI

### APIs & event-driven architectures

- GraphQL (federation, BFF, graphql-yoga), REST, gRPC, OpenAPI / Swagger, event-driven (CDC, CQRS, webhooks), Hasura, Kafka, AWS SNS

### Frontend development

- Vue.js, React, TypeScript, HTMX

### Databases

- PostgreSQL (CDC, RDS Proxy, indexing), MongoDB

### Cloud

- AWS (Lambda, RDS, KMS, VPC, IAM, SNS, S3, Amplify), GCP (Cloud Run), Heroku, Vercel

### Infrastructure & CI/CD

- Terraform, Docker, GitLab CI, GitHub Actions, Bash, ARGC, OXC, Squawk, graphql-inspector

### Compliance & security

- PCI-DSS, GDPR, HL7

### Tools & methodologies

- Git, GitLab, GitHub, Bitbucket, Jira, Slack, Segment, Scrum, ADR, Claude Code

---

## Experience

### February 2024 – November 2025 — SysPay – Settleflow

#### Senior Backend Engineer · Cloud Architect (DevOps)

Settleflow is a Stripe-like payment processor handling millions of payment requests per day across Europe, with a reconciliation layer running in the background.

#### Key projects

Designed the event-driven architecture and cloud infrastructure for the payment processor, within a team of 5 engineers:

- Event-driven architecture built on PostgreSQL CDC replication (aws_lambda extension) synced to AWS SNS and consumed by AWS Lambda functions
- Webhook delivery to partners and billing/analytics metrics fed from the payment event stream
- Infrastructure built entirely with Terraform modules and PCI-DSS-compliant AWS services (KMS, encrypted RDS, RDS Proxy, segmented VPC, Lambda, security groups, IAM)
- Stripe-like public API with background reconciliation processing

#### Achievements

Performance-driven architecture and infrastructure decisions:

- Served up to 100,000 payment requests per minute under 15 ms, with 900 concurrent Lambdas and an RDS Proxy pool fronting a scaled RDS instance
- ~50x throughput improvement by choosing auto-scaling Lambdas over EC2 instances
- Reduced SQL queries per application request from 150+ to under 15 through dedicated PostgreSQL indexes
- Met performance targets by moving non-critical SQL queries off the hot path into background jobs
- Continuous PostgreSQL optimization: enabling and resolving slow query logs, monitoring CPU load (cache) and max connections (Lambda concurrency)
- Built a CI/CD automation CLI (ARGC, Rust) deeply integrated with GitLab CI, deploying each MR to an ephemeral environment with a seeded database in under one minute
- Git tag-triggered production deployments with automatic CHANGELOG updates (release notes extracted from commits)
- Pipeline linter integration: OXC (TypeScript) and Squawk (detecting dangerous or slow PostgreSQL migrations in production)
- Load regression tests (k6) run on every MR and release
- Seeded ephemeral environments adopted by all contributors, accelerating iteration and regression review

**Tech stack:** TypeScript, Bun, Hono, OpenAPI, Swagger Codegen, Rust, ARGC, OXC, Squawk, PostgreSQL (CDC, aws_lambda extension, RDS Proxy), AWS (Lambda, encrypted RDS, KMS, VPC, security groups, IAM, SNS), Terraform, Bash, k6, GitLab CI/CD, PCI-DSS

---

### June 2022 – June 2023 — PrestaShop

#### Senior Backend Engineer · Tech Lead

PrestaShop is the open-source e-commerce platform for creating and managing online stores; the project aimed to build its SaaS version (onboarding.prestashop.com).

#### Key projects

Led the "onboarding" squad (5 engineers) and built the SaaS version of PrestaShop, collaborating with the "core", "accounts", "billing", and "hosting" squads:

- Designed and implemented a GraphQL gateway (graphql-yoga, graphql-codegen) federating 4 internal micro-services (onboarding, accounts, billing, hosting) under a unified BFF for the Vue frontend
- Generated a type-safe GraphQL client from the schema, producing typed Vue hooks
- GitHub Actions pipeline running GraphQL Inspector (graphql-inspector) to detect schema bugs, breaking changes, and regressions, plus tests, then publishing a Docker image to GCP Cloud Run

#### Achievements

Took over and delivered a project that had failed three times before, with a small but high-impact team:

- Proposed the initial architecture for onboarding.prestashop.com, jointly with the engineering manager
- Wrote architecture decision records (ADR) and mentored junior developers in the squad
- Led architecture meetings with tech leads from other squads to present the target architecture and arbitrate integration points and workflow dependencies
- Contributed to PrestaShop's open-source codebase to add generic extension points tailored to our needs
- Reverse-engineered and contributed (MRs) to other squads' codebases to meet deadlines and shared objectives
- Helped other squads learn and adopt GraphQL in their codebases

**Tech stack:** TypeScript, Node.js, GraphQL (graphql-yoga, graphql-codegen, graphql-inspector, federation, BFF), Vue.js, GCP (Cloud Run), Docker, GitHub Actions

---

### March 2022 – June 2022 — elba

#### Senior Backend Engineer

elba is an all-in-one cybersecurity hub designed to secure teams in their daily work.

#### Key projects

Embedded in a team of 5 engineers working directly with the CTO, responsible for developing a standalone feature, the "Training" module:

- "Training" module: complex multi-step form assessing users' security knowledge, consuming the Hasura GraphQL API and persisting progress incrementally
- Migrated the application to an event-driven approach leveraging Hasura's advanced features (event triggers)
- Segment integration made seamless by this approach, with every action natively becoming an event

#### Achievements

- Evolved the Hasura configuration to make it event-driven
- Delivered the "Training" module end-to-end: Hasura API changes and React front-end pages built on the internal design system
- Built a Segment connector (Hasura event listener) forwarding relevant events to Segment

**Tech stack:** TypeScript, Node.js, React, PostgreSQL, Hasura, Segment, Vercel, GitHub Actions

---

### December 2021 – February 2022 — Theodo FinTech

#### Senior Backend Engineer

Theodo FinTech builds innovative digital applications for the finance sector.

#### Key projects

Embedded in a team of 3 engineers, contributing to internal administration tools (employee management portal):

- Developed an employee profile management page within the internal portal

#### Achievements

- Extended the GraphQL API to cover new requirements
- Set up an auto-generated GraphQL client via graphql-codegen
- Added pages and components to the React codebase
- Verified the Kafka integration to ensure proper event propagation for new features within the CQRS architecture

**Tech stack:** Node.js, TypeScript, GraphQL, Apollo Server, React, MongoDB, Kafka, CQRS

---

### November 2020 – April 2021 — PromTime

#### Senior Backend Engineer

PromTime is a data science company that compares patient health outcomes in real time.

#### Key projects

Embedded in a team of 3 engineers working directly with the CTO, selected for my GraphQL expertise to build a high-volume data ingestion API (PROMs):

- Studied the PROM specification to propose a pragmatic GraphQL schema bridging fixed and dynamic data
- Built the GraphQL ingestion API (Apollo Server) with an interactive playground to collect data from partners
- Designed the GraphQL server in compliance with GDPR requirements and the HL7 standard

#### Achievements

- Delivered a comprehensive GraphQL API faithful to the PROM specification, with interactive playground and GDPR + HL7 best practices
- Wrote detailed documentation for partners: the PROM specification being complex, accurate field mapping is critical for business operations
- No blocking issues raised during the security audit conducted at the end of the engagement

**Tech stack:** TypeScript, Node.js, GraphQL, Apollo Server, PostgreSQL, GCP, Bitbucket, GDPR, HL7

---

### January 2017 – October 2020 — Freelance – Various engagements

#### Backend Engineer · Tech Lead

Freelance engagements embedded in client teams, working with startups, scale-ups, and large enterprises in fintech, real estate, mobility, and e-commerce (full-stack and mobile development).

#### Key projects

Worked as a developer and tech lead across multiple engagements:

- **SNCF Connect & Tech**: hired for my GraphQL expertise, contributed to a complex multi-step form (AWS Amplify)
- **Piteo (Tech Lead)**: led the architecture of a GraphQL API enabling landlords to manage their real estate portfolio
- **LSF Énergie**: built a Python scraper integrating Google Vision OCR to automate employee workflows

#### Achievements

Application architecture and infrastructure responsibilities:

- Designed application architecture: GraphQL schema design and technical decisions
- Set up cloud infrastructure from scratch on greenfield projects (Heroku, GCP, AWS)
- Built CI/CD deployment pipelines (GitHub Actions, GitLab CI)
- Monitored production deployments
- Provided technical mentorship within client teams

**Tech stack:** TypeScript, Node.js, GraphQL, React, Python (Google Vision OCR), PostgreSQL, AWS (Amplify), GCP, Heroku, GitHub Actions, GitLab CI

---

### October 2014 – December 2016 — jestocke.com

#### Backend Engineer · Tech Lead

jestocke.com is a peer-to-peer online marketplace for renting unused storage spaces.

#### Key projects

Built critical marketplace components within a team of 5 engineers:

- Listing search engine for users (Algolia)
- Peer-to-peer booking and payment system (MangoPay)

#### Achievements

- Managed and monitored the production infrastructure (Heroku)
- Helped structure the engineering team from 2 to 5 developers, and recruited new members
- Supported the startup's growth from 3 to 10+ employees through its second funding round

**Tech stack:** Python, Django, PostgreSQL, Heroku, MangoPay, Algolia

---

## Languages

| | |
| --- | --- |
| **English** | Full professional proficiency |
| **French** | Native |

---

## Education

| | |
| --- | --- |
| **2014** | EPSI – BTS Services informatiques aux organisations (Programmation) |
| **2015** | WIS – Bachelor Chef de Projet Digital (Management de projet) |

---

## References

- Mouad Chaouki - Tech Lead (SysPay)
- Gautier Boudeweel - Engineering Manager (PrestaShop)
- Antoine Berton - CTO (elba)
- Alexandre Blondin - Tech Lead (Theodo FinTech)
- Loic Calvy - CTO (PromTime)

# Cedric VANGOUT

**Senior Backend Engineer**
Specialized in high-throughput payment systems, event-driven architectures, and GraphQL APIs. 12+ years of experience across fintech, e-commerce, and SaaS.

Paris, France | <vangout.cedric@gmail.com> | [Calendly](https://calendly.com/cvng/30min) | [LinkedIn](https://www.linkedin.com/in/cedricvangout)

---

## Highlights

- 50x throughput on a EU payment processor — 100K req/min under 15 ms (SysPay)
- Shipped PrestaShop's SaaS platform after 3 failed attempts, onboarding 100+ merchants
- GDPR + HL7 health-data API — security audit: zero blocking findings (PromTime)
- Top #2 contributor to supabase-community/postgres-language-server

---

## Skills

### Core

- Rust, Node.js, TypeScript, PostgreSQL, GraphQL, Performance Engineering

### Backend & APIs

- Node.js, Bun, Hono, Rust, Axum, Python, FastAPI
- GraphQL (federation, BFF, graphql-yoga), REST, gRPC, OpenAPI, event-driven (CDC, CQRS, webhooks), Hasura, Kafka
- PostgreSQL (CDC, RDS Proxy, indexing, slow-query optimization), MongoDB
- CPU / RAM / IO profiling, load testing (k6), hot path isolation

### Cloud & Infrastructure

- AWS (Lambda, RDS, KMS, VPC, IAM, SNS, S3, Amplify), GCP (Cloud Run), Heroku, Vercel
- Terraform, Docker, GitLab CI, GitHub Actions
- PCI-DSS, GDPR, HL7

---

## Experience

### February 2026 – Present — Freelance – Short-term engagements

#### Senior Backend Engineer · AI Enablement

Short backend engagements and AI-adoption consulting for startups.

#### Approach

- Claude Code / Cowork setup in IDE and GitHub CI for automated code reviews
- Short-term backend development (Node.js, TypeScript, PostgreSQL)

**Tech stack:** Node.js, TypeScript, PostgreSQL, Claude Code, GitHub Actions

---

### February 2024 – November 2025 — SysPay – Settleflow

#### Senior Backend Engineer · Cloud Architect (DevOps)

Settleflow is a Stripe-like payment processor handling millions of payment requests per day across Europe, with a reconciliation layer running in the background ([settleflow.io](https://settleflow.io)).

**Challenge:** Serve very high payment traffic under 15 ms latency, on a serverless stack, under PCI-DSS constraints.

#### Approach

Designed the event-driven architecture and cloud infrastructure for the payment processor, within a team of 5 engineers:

- Event-driven architecture built on PostgreSQL CDC replication (aws_lambda extension) synced to AWS SNS and consumed by AWS Lambda functions
- Webhook delivery to partners and billing/analytics metrics fed from the payment event stream
- Infrastructure built entirely with Terraform modules and PCI-DSS-compliant AWS services (KMS, encrypted RDS, RDS Proxy, segmented VPC, Lambda, security groups, IAM)
- Stripe-like public API with background reconciliation processing
- Moved non-critical SQL queries off the hot path into background jobs
- Continuous PostgreSQL optimization: enabling and resolving slow query logs, monitoring CPU load (cache) and max connections (Lambda concurrency)
- Built a CI/CD automation CLI (ARGC, Rust) deeply integrated with GitLab CI, deploying each MR to an ephemeral environment with a seeded database in under one minute
- Git tag-triggered production deployments with automatic CHANGELOG updates (release notes extracted from commits)
- Pipeline linter integration: OXC (TypeScript) and Squawk (detecting dangerous or slow PostgreSQL migrations in production)
- Load regression tests (k6) run on every MR and release

#### Results

- Served up to 100,000 payment requests per minute under 15 ms, with 900 concurrent Lambdas and an RDS Proxy pool fronting a scaled RDS instance
- ~50x throughput improvement by choosing auto-scaling Lambdas over EC2 instances
- Reduced SQL queries per application request from 150+ to under 15 through dedicated PostgreSQL indexes
- Seeded ephemeral environments adopted by all contributors, accelerating iteration and regression review

**Tech stack:** TypeScript, Bun, Hono, OpenAPI, Swagger Codegen, Rust, ARGC, OXC, Squawk, PostgreSQL (CDC, aws_lambda extension, RDS Proxy), AWS (Lambda, encrypted RDS, KMS, VPC, security groups, IAM, SNS), Terraform, Bash, k6, GitLab CI/CD, PCI-DSS

---

### June 2022 – June 2023 — PrestaShop

#### Senior Backend Engineer · Tech Lead

PrestaShop is the open-source e-commerce platform for creating and managing online stores; the project aimed to build its SaaS version ([onboarding.prestashop.com](https://onboarding.prestashop.com)).

**Challenge:** Ship the SaaS version of PrestaShop after three failed attempts, coordinating four squads with conflicting priorities.

#### Approach

Led the "onboarding" squad (5 engineers) and built the SaaS version of PrestaShop, collaborating with the "core", "accounts", "billing", and "hosting" squads:

- Designed and implemented a GraphQL gateway (graphql-yoga, graphql-codegen) federating 4 internal micro-services (onboarding, accounts, billing, hosting) under a unified BFF for the Vue frontend
- Generated a type-safe GraphQL client from the schema, producing typed Vue hooks
- GitHub Actions pipeline running GraphQL Inspector (graphql-inspector) to detect schema bugs, breaking changes, and regressions, plus tests, then publishing a Docker image to GCP Cloud Run
- Proposed the initial architecture for onboarding.prestashop.com, jointly with the engineering manager
- Wrote architecture decision records (ADR) and mentored junior developers in the squad
- Led architecture meetings with tech leads from other squads to present the target architecture and arbitrate integration points and workflow dependencies
- Contributed to PrestaShop's open-source codebase to add generic extension points tailored to our needs
- Reverse-engineered and contributed (MRs) to other squads' codebases to meet deadlines and shared objectives

#### Results

- Shipped ahead of schedule, onboarding 100+ merchants
- GraphQL approach adopted by other squads in their codebases

**Tech stack:** TypeScript, Node.js, GraphQL (graphql-yoga, graphql-codegen, graphql-inspector, federation, BFF), Vue.js, GCP (Cloud Run), Docker, GitHub Actions

---

### March 2022 – June 2022 — elba

#### Senior Backend Engineer

elba is an all-in-one cybersecurity hub designed to secure teams in their daily work ([elba.security](https://elba.security)).

#### Approach

Embedded in a team of 5 engineers working directly with the CTO, responsible for developing a standalone feature, the "Training" module:

- Delivered the "Training" module end-to-end: a 50+ step form assessing users' security knowledge (1,000+ users), consuming the Hasura GraphQL API and persisting progress incrementally, with React pages built on the internal design system
- Migrated the application to an event-driven approach using Hasura event triggers
- Built a Segment connector (Hasura event listener) forwarding relevant events — made seamless since every action was natively an event

**Tech stack:** TypeScript, Node.js, React, PostgreSQL, Hasura, Segment, Vercel, GitHub Actions

---

### December 2021 – February 2022 — Theodo FinTech

#### Senior Backend Engineer

Theodo FinTech builds innovative digital applications for the finance sector.

#### Approach

Embedded in a team of 3 engineers, contributing to internal administration tools (employee management portal):

- Developed an employee profile management page within the internal portal
- Extended the GraphQL API to cover new requirements
- Set up an auto-generated GraphQL client via graphql-codegen
- Added pages and components to the React codebase
- Verified the Kafka integration to ensure proper event propagation for new features within the CQRS architecture

**Tech stack:** Node.js, TypeScript, GraphQL, Apollo Server, React, MongoDB, Kafka, CQRS

---

### November 2020 – April 2021 — PromTime

#### Senior Backend Engineer

PromTime is a data science company that compares patient health outcomes in real time ([promtime.org](https://promtime.org)).

**Challenge:** Ingest high-volume patient health data following the complex PROM specification, under GDPR and HL7 constraints.

#### Approach

Embedded in a team of 3 engineers working directly with the CTO, selected for my GraphQL expertise to build a high-volume data ingestion API (PROMs):

- Studied the PROM specification to propose a pragmatic GraphQL schema (300+ fields) bridging fixed and dynamic data
- Built the GraphQL ingestion API (Apollo Server) with an interactive playground
- Designed the GraphQL server in compliance with GDPR requirements and the HL7 standard
- Wrote detailed documentation for partners: the PROM specification being complex, accurate field mapping is critical for business operations

#### Results

- 20 partners connected, collecting ~2,000 patient records/day
- Security audit passed with no blocking findings

**Tech stack:** TypeScript, Node.js, GraphQL, Apollo Server, PostgreSQL, GCP, Bitbucket, GDPR, HL7

---

### January 2017 – October 2020 — Freelance – Various engagements

#### Backend Engineer · Tech Lead

Freelance engagements embedded in client teams, working with startups, scale-ups, and large enterprises in fintech, real estate, mobility, and e-commerce (full-stack and mobile development).

#### Approach

Worked as a developer and tech lead across multiple engagements:

- **SNCF Connect & Tech**: hired for my GraphQL expertise, built a complex multi-step form on AWS Amplify; designed the GraphQL schema and technical architecture
- **Piteo (Tech Lead)**: led the architecture of a GraphQL API enabling landlords to manage their real estate portfolio; set up cloud infrastructure from scratch (Heroku) and CI/CD pipelines
- **LSF Énergie**: built a Python scraper integrating Google Vision OCR to automate employee workflows; set up GCP infrastructure and production monitoring

**Tech stack:** TypeScript, Node.js, GraphQL, React, Python (Google Vision OCR), PostgreSQL, AWS (Amplify), GCP, Heroku, GitHub Actions, GitLab CI

---

### October 2014 – December 2016 — jestocke.com

#### Backend Engineer · Tech Lead

jestocke.com is a peer-to-peer online marketplace for renting unused storage spaces ([jestocke.com](https://jestocke.com)).

**Challenge:** Build the critical components of a growing marketplace with a two-person engineering team.

#### Approach

- Built the listing search engine (Algolia) and peer-to-peer booking and payment system (MangoPay)
- Managed and monitored the production infrastructure (Heroku)
- Helped structure the engineering team and recruited new members

#### Results

- 20K+ listings indexed, 100K+ transactions processed
- Engineering team grown from 2 to 5 developers
- Startup grown from 3 to 10+ employees through its second funding round (€2M)

**Tech stack:** Python, Django, PostgreSQL, Heroku, MangoPay, Algolia

---

## Open Source

- [supabase-community/postgres-language-server](https://github.com/supabase-community/postgres-language-server) — A Language Server for PostgreSQL. Top #2 contributor.

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
| **2012 - 2014** | EPSI – BTS Services informatiques aux organisations (Programmation) |
| **2014 - 2015** | WIS – Bachelor Chef de Projet Digital (Management de projet) |

---

## References

- [Mouad Chaouki](https://www.linkedin.com/in/mouad-chaouki) - Tech Lead (SysPay)
- [Gautier Boudeweel](https://www.linkedin.com/in/gautier-boudeweel) - Engineering Manager (PrestaShop)
- [Antoine Berton](https://www.linkedin.com/in/antoine-berton-532519225) - CTO (elba)
- [Alexandre Blondin](https://www.linkedin.com/in/alexandre-blondin-295b44a8) - Tech Lead (Theodo FinTech)
- [Loic Calvy](https://www.linkedin.com/in/lo%C3%AFc-calvy) - CTO (PromTime)
- [Laure Courty](https://www.linkedin.com/in/laure-courty-09406678) - CEO (jestocke.com)

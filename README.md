# Cedric VANGOUT

**Senior Backend Engineer**

Paris, France | <vangout.cedric@gmail.com> | +33633843340 | <https://linkedin.com/in/cedricvangout>

---

## Education

| | |
| --- | --- |
| **2014** | EPSI – BTS Services informatiques aux organisations (Programmation) |
| **2015** | WIS – Bachelor Chef de Projet Digital (Management de projet) |

---

## Skills

### Top skills

- Rust, Node.js, TypeScript, PostgreSQL, GraphQL, Performance Engineering

### Performance & optimization

- Profiling CPU / RAM / IO, optimisation des slow-queries SQL (PostgreSQL), tests de charge (k6), isolation du Hot Path, jobs asynchrones

### Backend development

- Node.js, Bun, TypeScript, Hono, Rust, Axum, Python, FastAPI

### APIs & event-driven architectures

- GraphQL (fédération, BFF, graphql-yoga), REST, gRPC, OpenAPI / Swagger, event-driven (CDC, CQRS, webhooks), Hasura, Kafka, AWS SNS

### Frontend development

- Vue.js, React, TypeScript, HTMX

### Databases

- PostgreSQL (CDC, RDS Proxy, indexation), MongoDB

### Cloud

- AWS (Lambda, RDS, KMS, VPC, IAM, SNS, S3, Amplify), GCP (Cloud Run), Heroku, Vercel

### Infrastructure & CI/CD

- Terraform, Docker, GitLab CI, GitHub Actions, Bash, ARGC, OXC, Squawk

### Compliance & security

- PCI-DSS, RGPD, HL7

### Tools & methodologies

- Git, GitLab, GitHub, Bitbucket, Jira, Slack, Segment, Scrum, ADR, Claude Code

---

## Languages

| | |
| --- | --- |
| **Anglais** | Professionnel complet |
| **Français** | Langue maternelle |

---

## Experience

### Février 2024 – Novembre 2025 — SysPay – Settleflow

#### Senior Backend Engineer · Architecte Cloud (DevOps)

Settleflow est un processeur de paiement de type Stripe traitant plusieurs millions de requêtes de paiement par jour dans la zone européenne, avec une couche de réconciliation exécutée en arrière-plan.

#### Key projects

Conception de l'architecture event-driven et de l'infrastructure cloud du processeur de paiement, au sein d'une équipe de 5 développeurs :

- Architecture event-driven reposant sur la réplication CDC de PostgreSQL (extension aws_lambda) synchronisée vers AWS SNS et consommée par des fonctions AWS Lambda
- Émission de webhooks vers les partenaires et alimentation des métriques de facturation et d'analytics à partir du flux d'événements de paiement
- Infrastructure construite intégralement avec des modules Terraform et des services AWS conformes PCI-DSS (KMS, RDS chiffré, RDS Proxy, VPC segmenté, Lambda, security groups, IAM)
- API publique de type Stripe, avec traitement de réconciliation exécuté en arrière-plan

#### Achievements

Pilotage de la performance par les choix d'architecture et d'infrastructure :

- Débit servi jusqu'à 100 000 requêtes de paiement par minute sous 15 ms, avec 900 Lambda concurrentes et un pool RDS Proxy en frontal d'une instance RDS dimensionnée
- Amélioration du débit d'environ 50× en privilégiant des Lambda auto-scalées plutôt que des instances EC2
- Réduction de plus de 150 requêtes SQL par requête applicative à moins de 15, grâce à des index PostgreSQL dédiés
- Atteinte des objectifs de performance en sortant les requêtes SQL non essentielles du hot path pour les exécuter en tâches de fond (background jobs)
- Optimisation continue de PostgreSQL : activation et résolution des slow query logs, surveillance de la charge CPU (cache) et du nombre maximal de connexions (concurrence des Lambda)
- Construction d'un CLI d'automatisation CI/CD (ARGC, Rust) profondément intégré à GitLab CI, déployant chaque MR sur un environnement éphémère avec base de données peuplée en moins d'une minute
- Déploiement en production déclenché par tag Git, avec mise à jour automatique du CHANGELOG (notes de version extraites des commits)
- Intégration de linters au pipeline : OXC (TypeScript) et Squawk (détection des migrations PostgreSQL dangereuses ou lentes en production)
- Tests de régression de charge (k6) exécutés sur chaque MR et chaque release
- Environnement éphémère à base peuplée adopté par l'ensemble des contributeurs, accélérant l'itération et la revue des régressions

**Tech stack:** TypeScript, Bun, Hono, OpenAPI, Swagger Codegen, Rust, ARGC, OXC, Squawk, PostgreSQL (CDC, extension aws_lambda, RDS Proxy), AWS (Lambda, RDS chiffré, KMS, VPC, security groups, IAM, SNS), Terraform, Bash, k6, GitLab CI/CD, PCI-DSS

---

### Juin 2022 – Juin 2023 — PrestaShop

#### Senior Backend Engineer · Tech Lead

PrestaShop est la plateforme e-commerce open-source permettant de créer et gérer des boutiques en ligne ; le projet visait à en construire la version SaaS (onboarding.prestashop.com).

#### Key projects

Pilotage de la squad « onboarding » (5 développeurs) et construction de la version SaaS de PrestaShop, en collaboration avec les squads « core », « accounts », « billing » et « hosting » :

- Conception et mise en place d'une gateway GraphQL (graphql-yoga, graphql-codegen) composant en fédération les 4 micro-services internes (onboarding, accounts, billing, hosting) sous un BFF unifié pour le frontend Vue
- Génération d'un client GraphQL type-safe à partir du schéma, produisant des hooks Vue typés
- Pipeline GitHub Actions exécutant GraphQL Inspector (graphql-inspector) pour détecter les bugs de schéma, breaking changes et régressions, ainsi que les tests, puis publiant une image Docker sur GCP Cloud Run

#### Achievements

Reprise et aboutissement d'un projet ayant échoué à trois reprises avant la squad, avec une équipe réduite mais à fort impact dans l'entreprise :

- Proposition de l'architecture initiale d'onboarding.prestashop.com, conjointement avec l'engineering manager
- Rédaction des décisions d'architecture (ADR) et encadrement des développeurs juniors de la squad
- Animation de réunions d'architecture avec les tech leads des autres squads pour présenter l'architecture cible et arbitrer les points d'intégration et les dépendances de workflows
- Contributions au code open-source de PrestaShop pour ajouter, de manière générique, des points d'extension adaptés à nos besoins
- Rétro-ingénierie et contributions (MR) aux bases de code des autres squads afin de tenir les délais et atteindre les objectifs communs
- Accompagnement des autres squads dans l'apprentissage et l'adoption de GraphQL dans leurs codebases

**Tech stack:** TypeScript, Node.js, GraphQL (graphql-yoga, graphql-codegen, graphql-inspector, fédération, BFF), Vue.js, GCP (Cloud Run), Docker, GitHub Actions

---

### Mars 2022 – Juin 2022 — elba

#### Senior Backend Engineer

elba est un hub de cybersécurité tout-en-un destiné à sécuriser les équipes dans leur travail quotidien.

#### Key projects

Intégré à une équipe de 5 développeurs travaillant directement avec le CTO, en charge du développement d'une fonctionnalité autonome, le module « Training » :

- Module « Training » : formulaire complexe multi-étapes évaluant les connaissances des utilisateurs en sécurité, consommant l'API GraphQL Hasura et sauvegardant la progression au fil de l'eau
- Bascule de l'application vers une approche event-driven en exploitant les fonctionnalités avancées de Hasura (event triggers)
- Intégration Segment facilitée par cette approche, chaque action devenant nativement un événement

#### Achievements

- Mise en place des évolutions de la configuration Hasura pour la rendre event-driven
- Livraison du module « Training » de bout en bout : évolutions de l'API Hasura et création des pages front-end en React, en s'appuyant sur le design-system interne
- Développement d'un connecteur Segment (écouteur d'événements Hasura) transmettant les événements pertinents à Segment

**Tech stack:** TypeScript, Node.js, React, PostgreSQL, Hasura, Segment, Vercel, GitHub Actions

---

### Décembre 2021 – Février 2022 — Theodo FinTech

#### Senior Backend Engineer

Theodo FinTech développe des applications digitales innovantes pour le secteur de la finance.

#### Key projects

Intégré à une équipe de 3 développeurs, contribution à des outils d'administration internes (portail de gestion des employés) :

- Développement d'une page de gestion du profil employé au sein du portail interne

#### Achievements

- Extension de l'API GraphQL pour couvrir les nouveaux besoins
- Mise en place d'un client GraphQL auto-généré via graphql-codegen
- Ajout de pages et de composants à la codebase React
- Vérification de l'intégration Kafka afin de garantir la bonne diffusion des événements des nouvelles fonctionnalités au sein de l'architecture CQRS

**Tech stack:** Node.js, TypeScript, GraphQL, Apollo Server, React, MongoDB, Kafka, CQRS

---

### Novembre 2020 – Avril 2021 — PromTime

#### Senior Backend Engineer

PromTime est une société de data science qui compare en temps réel les gains de santé des patients.

#### Key projects

Intégré à une équipe de 3 développeurs travaillant directement avec le CTO, sélectionné pour mon expertise GraphQL afin de bâtir une API d'ingestion de données à fort volume (PROMs) :

- Étude de la spécification PROM pour proposer un schéma GraphQL pragmatique, articulant données fixes et données dynamiques
- Construction de l'API GraphQL d'ingestion (Apollo Server) avec playground interactif pour collecter les données auprès des partenaires
- Conception du serveur GraphQL dans le respect des exigences RGPD et de la norme HL7

#### Achievements

- Livraison d'une API GraphQL conséquente, fidèle à la spécification PROM, avec playground interactif et bonnes pratiques RGPD + HL7
- Rédaction d'une documentation détaillée pour les partenaires : la spécification PROM étant complexe, l'exactitude du mapping des champs est capitale pour les opérations de l'entreprise
- Aucune remarque bloquante remontée lors de l'audit de sécurité réalisé en fin de mission

**Tech stack:** TypeScript, Node.js, GraphQL, Apollo Server, PostgreSQL, GCP, Bitbucket, RGPD, HL7

---

### Janvier 2017 – Octobre 2020 — Freelance – missions diverses

#### Backend Engineer · Tech Lead

Missions freelance en régie, embarqué dans les équipes clients, auprès de startups, scale-ups et grands comptes des secteurs fintech, immobilier, mobilité et e-commerce (développement full-stack et mobile).

#### Key projects

Interventions en tant que développeur et tech lead sur des missions variées :

- **SNCF Connect & Tech** : recruté pour mon expertise GraphQL, contribution à un formulaire complexe multi-étapes (AWS Amplify)
- **Piteo (Tech Lead)** : pilotage de l'architecture d'une API GraphQL permettant aux bailleurs de gérer leur portefeuille immobilier
- **LSF Énergie** : développement d'un scraper Python intégrant l'OCR Google Vision pour automatiser le travail des employés

#### Achievements

Responsabilités d'architecture applicative et d'infrastructure :

- Conception de l'architecture applicative : design des schémas GraphQL et choix techniques
- Mise en place from scratch des infrastructures cloud sur les projets green-field (Heroku, GCP, AWS)
- Construction des pipelines CI/CD de déploiement (GitHub Actions, GitLab CI)
- Monitoring des déploiements en production
- Encadrement technique au sein des équipes clients

**Tech stack:** TypeScript, Node.js, GraphQL, React, Python (Google Vision OCR), PostgreSQL, AWS (Amplify), GCP, Heroku, GitHub Actions, GitLab CI

---

### Octobre 2014 – Décembre 2016 — jestocke.com

#### Backend Engineer · Tech Lead

jestocke.com est une marketplace en ligne de location d'espaces de stockage inutilisés entre particuliers.

#### Key projects

Construction des composants critiques de la marketplace, au sein d'une équipe de 5 développeurs :

- Moteur de recherche des annonces pour les utilisateurs (Algolia)
- Système de réservation et de paiement entre particuliers (MangoPay)

#### Achievements

- Responsable de la gestion et du monitoring de l'infrastructure de production (Heroku)
- Participation à la structuration de l'équipe technique, passée de 2 à 5 développeurs, et recrutement de nouveaux membres
- Accompagnement de la startup dans sa croissance, de 3 à plus de 10 employés, jusqu'à sa deuxième levée de fonds

**Tech stack:** Python, Django, PostgreSQL, Heroku, MangoPay, Algolia

---

## References

- Mouad Chaouki - Tech Lead (SysPay)
- Gautier Boudeweel - Engineering Manager (PrestaShop)
- Antoine Berton - CTO (elba)
- Alexandre Blondin - Tech Lead (Theodo FinTech)
- Loic Calvy - CTO (PromTime)

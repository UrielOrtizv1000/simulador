# Simulador

A browser-based simulator for university exams used as a personal study tool. The repository is intentionally subject-agnostic: its question bank can be replaced whenever a different course or exam needs to be practiced.

The project is a static web application built with HTML, CSS, and JavaScript. It runs without frameworks, package installation, or a build step.

## Current exam

The current edition is a practical and conceptual exam for **Network Security**, focused on the second partial exam.

It contains **60 questions across twelve topics**:

1. Network security, CIA, and defense in depth
2. Secure channels, protocols, and OSI layers
3. IPv4, IPv6, TCP, and UDP
4. Tunnels, encapsulation, and VPNs
5. IPsec, ESP, AH, and operating modes
6. TLS, HTTPS, and SSH
7. Kerberos, certificates, and certificate authorities
8. Steganography and steganalysis
9. Cryptography, cryptanalysis, and communication attacks
10. Symmetric, asymmetric, and hybrid encryption
11. Block encryption, stream encryption, and XOR
12. Hashes, validation, and electronic signatures

The bank is based exclusively on `seguridadredes.md`. It does not include topics from previous editions or information added from external sources.

The questions combine concepts, real-world scenarios, matching activities, diagram completion, model-answer prompts, and grouped exercises.

> The active subject changes over time. This README describes the simulator as a reusable project and documents the exam currently loaded in `js/preguntas.js`.

## Question types

- Multiple choice
- True or false
- Grouped true or false with eight statements
- Fill in the blank
- Grouped fill in the blank with eight phrases and a word bank
- Matching with dropdown lists
- Connecting related concepts
- Diagram completion
- Open questions with a model answer and self-assessment

## Features

- 90-minute timer
- Immediate feedback after each answer
- Question map with free navigation
- Final score and breakdown by topic
- Retry mode containing only missed questions
- Randomized question and option order
- Responsive light and dark interface

## Running locally

No installation is required. Open `index.html` directly in a browser.

A local static server can also be used:

```bash
python -m http.server 8080
```

Then open `http://localhost:8080`.

The Google Fonts stylesheet requires an internet connection. Without it, the simulator still works and uses system fallback fonts.

## Project structure

```text
simulador/
├── index.html          # Start, exam, and results screens
├── css/
│   └── estilos.css     # Existing visual design and responsive layout
├── js/
│   ├── preguntas.js    # Active topics and question bank
│   └── app.js          # Rendering, grading, timer, and retry logic
├── .github/
│   └── workflows/
│       └── deploy.yml  # GitHub Pages deployment
└── README.md
```

The question content is isolated in `js/preguntas.js`. Replacing an exam does not require changing the interface or grading engine as long as the existing question schemas are used.

## Updating the current exam

Each question must have:

- a unique `id`;
- a valid `topic` from `TOPICS`;
- a supported `type`;
- a prompt and its answer or model answer;
- feedback explaining the answer;
- a `source` object identifying the source file and section.

Supported types are `mc`, `vf`, `vf_group`, `fill`, `fill_group`, `match`, `connect`, `diagram`, and `open`.

When changing subjects:

1. Replace `TOPICS` and `QUESTION_BANK` in `js/preguntas.js`.
2. Keep every question grounded in the selected study material.
3. Update the **Current exam** section of this README.
4. Update the textual exam description and static totals in `index.html`.
5. Do not alter `css/estilos.css` unless a separate visual change is explicitly requested.

## Privacy and storage

The application has no backend, accounts, analytics, or remote data storage. Exam progress exists only in browser memory and is lost when the page is reloaded.

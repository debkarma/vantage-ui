export type Category = 'Feature' | 'Improvement' | 'Fix';

export interface ChangelogItem {
  id: string;
  version: string;
  date: string;
  title: string;
  description: string;
  category: Category;
  features?: string[];
  improvements?: string[];
  fixes?: string[];
}

export const changelogData: ChangelogItem[] = [
  {
    id: "v1.0.2",
    version: "1.0.2",
    date: "August 30, 2026",
    title: "Native Python & Pytest Export",
    description: "Vantage now fully supports Python backends. Using the reverse proxy, you can record any FastAPI, Flask, or Django application and natively export the generated tests to Pytest using `httpx`.",
    category: "Feature",
    features: [
      "Added `--format pytest` support to the `export` command.",
      "Added reverse proxy mode via the `--proxy` flag to support non-Node.js backends."
    ],
    improvements: [
      "Optimized the IPC communication layer for 30% faster test replay.",
      "Watch mode now debounces file system events more reliably."
    ],
    fixes: [
      "Fixed an issue where `Content-Length` headers were not properly stripped during proxying.",
      "Resolved a crash that occurred when recording large `multipart/form-data` payloads."
    ]
  },
  {
    id: "v1.0.1",
    version: "1.0.1",
    date: "August 24, 2026",
    title: "Smart Auto-Masking & Testcontainers",
    description: "You can now fine-tune or disable Smart Auto-Masking directly in your `vantage.config.yaml`. Additionally, Vantage now orchestrates your database for you using Testcontainers.",
    category: "Improvement",
    features: [
      "Introduced Testcontainers support for isolated database state.",
      "Added `pre_test` and `post_test` lifecycle scripts for database seeding."
    ],
    improvements: [
      "Added `smart_masking` boolean flag to the global configuration schema.",
      "Added `noise.headers` and `noise.body_fields` arrays for granular ignore rules."
    ],
    fixes: [
      "Fixed a bug where auto-masking would unintentionally replace valid ISO-8601 strings inside array elements.",
      "Fixed zombie processes sometimes remaining after a failed test suite run."
    ]
  },
  {
    id: "v1.0.0",
    version: "1.0.0",
    date: "August 24, 2026",
    title: "Initial Public Release",
    description: "The first stable release of Vantage. Turn real API traffic into production-ready tests automatically.",
    category: "Feature",
    features: [
      "Record Express and generic HTTP traffic via the `vantage` SDK or proxy.",
      "Generate deterministic tests for Jest.",
      "Full CLI support (`vantage record`, `vantage test`, `vantage export`).",
      "Added `--reporter=junit` flag to `vantage test` for CI/CD pipelines."
    ]
  }
];

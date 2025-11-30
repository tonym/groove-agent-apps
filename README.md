# Groove Agent Apps

This repository is a PNPM-based TypeScript monorepo for Groove agent tooling and sample applications.

## Structure
- **packages/**: Workspace packages.
- **GrooveReaderConsole/**: A browser-based console scaffold that will call a ChatKit agent workflow to list Groove rules. It currently ships with a placeholder workflow ID and UI stub.

## Getting started
1. Install dependencies:
   ```bash
   pnpm install
   ```
2. Build the console package:
   ```bash
   pnpm --filter GrooveReaderConsole run build
   ```
3. Start a local static server for the console (builds first):
   ```bash
   pnpm --filter GrooveReaderConsole run start
   ```
4. Open the server URL printed in the terminal and click **List all rules** to view the placeholder response rendered in the output panel.

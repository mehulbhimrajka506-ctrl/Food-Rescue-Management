# FoodRescue AI

A monorepo starter for the FoodRescue AI application described in the product prompt.

## Structure

- `client/` — React + Vite frontend
- `server/` — Express + Mongoose backend
- `PROGRESS.md` — completion tracker for each phase

## Local setup

1. Install Node.js LTS and npm.
2. Run: `npm install --prefix client` and `npm install --prefix server`
3. Copy `.env.example` files to `.env` and fill in the required values.
4. Start the API: `npm --prefix server run dev`
5. Start the UI: `npm --prefix client run dev`

## Notes

This repository is intentionally laid out in separate files and folders to match the requested monorepo architecture.

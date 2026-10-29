# IsukuConnect web client

Responsive React/Vite interface for residents, collection providers, recyclers, managers, and administrators.

## Local development

Requirements: Node.js 20 or newer and the IsukuConnect API.

```powershell
npm install
Copy-Item .env.example .env
npm run dev
```

Vite serves the client at `http://localhost:5173` and proxies `/api` to `http://localhost:5000` during development. Leave `VITE_API_URL` empty for this local proxy. For production, set it to the deployed API base, such as `https://api.example.org/api/v1`, or configure the frontend host to proxy `/api`.

## Build and checks

```sh
npm run build
npm test
npm run lint
```

The client includes role-aware dashboards, report and collection forms, a Leaflet location picker, verified recycler directory, English/Kinyarwanda strings, and API-backed views. The backend repository and its environment setup are separate.

# Netlify Backend + privater Server (Starter)

Dieses Starterprojekt enthält:
- eine statische Dashboard-Seite,
- eine echte Netlify Function unter `/.netlify/functions/health`,
- einen separaten Node.js-Server mit einem einfachen `/health`-Endpunkt.

**Es ist absichtlich kein allgemeiner Forward-Proxy.** Verwende Netzwerkdienste nur auf Systemen, die dir gehören oder für die du ausdrücklich berechtigt bist.

## Auf Netlify veröffentlichen

1. ZIP entpacken.
2. Den entpackten Projektordner auf GitHub hochladen.
3. In Netlify **Add new site → Import an existing project** wählen.
4. Das GitHub-Repository verbinden.
5. Build command leer lassen; Publish directory ist `public`. Die Datei `netlify.toml` konfiguriert die Functions.
6. Deploy ausführen.
7. Die Website öffnen und auf **Backend testen** drücken. Es sollte eine JSON-Antwort mit `"ok": true` erscheinen.

Alternativ kannst du lokal mit der Netlify CLI testen:
- `npm install`
- `npx netlify dev`

## Privaten Server lokal testen

Benötigt Node.js 18 oder neuer.

```bash
node server.js
```

Danach im Browser `http://127.0.0.1:8787/health` öffnen. Der Server bindet standardmässig nur an `127.0.0.1`, damit er nicht öffentlich erreichbar ist.

## Wie geht es weiter?

Für eine produktive Verbindung zwischen Netlify und einem privaten Server braucht es:
- Hosting, auf dem ein Node.js-Prozess dauerhaft laufen darf,
- HTTPS,
- Authentifizierung und Zugriffskontrollen,
- Firewall-Regeln und Protokollierung,
- eine klar begrenzte Liste erlaubter interner Dienste.

Netlify Functions sind kurzlebige Serverless-Aufrufe und ersetzen keinen dauerhaft laufenden Proxyserver.

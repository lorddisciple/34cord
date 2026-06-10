// api/releases/latest.js
// Vercel Serverless Function — endpoint pour l'auto-updater 34cord
// Accessible à : https://34cord.vercel.app/api/releases/latest

export default function handler(req, res) {
    // Autorise les requêtes cross-origin (CORS) pour que Discord puisse fetch ce endpoint
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader("Access-Control-Allow-Methods", "GET, OPTIONS");
    res.setHeader("Content-Type", "application/json");

    if (req.method === "OPTIONS") {
        return res.status(200).end();
    }

    // ──────────────────────────────────────────────────────────────────────
    // ⚠️  METS À JOUR CES VALEURS À CHAQUE NOUVELLE RELEASE :
    //
    //   tag_name            → numéro de version (ex: "v1.0.1")
    //   browser_download_url → lien direct vers le fichier 34cord-dist.zip
    //                          (GitHub Releases, CDN, etc.)
    // ──────────────────────────────────────────────────────────────────────
    const latestRelease = {
        tag_name: "v1.0.0",
        name: "34cord v1.0.0",
        body: "Première release publique de 34cord.",
        assets: [
            {
                name: "34cord-Installer.exe",
                browser_download_url: "https://34cord.vercel.app/downloads/34cord-Installer.exe"
            }
        ]
    };

    return res.status(200).json(latestRelease);
}

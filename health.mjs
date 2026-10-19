export default async () => {
  return new Response(
    JSON.stringify({
      ok: true,
      service: "netlify-backend",
      message: "Das Netlify-Backend läuft."
    }),
    {
      status: 200,
      headers: {
        "content-type": "application/json; charset=utf-8",
        "cache-control": "no-store"
      }
    }
  );
};

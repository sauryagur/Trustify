export default {
  async fetch(request, env, ctx) {
    if (request.method !== "POST") {
      return new Response("Only POST requests are allowed", { status: 405 });
    }

    try {
      const body = await request.json();

      if (!body.text) {
        return new Response("Missing 'text' in body", { status: 400 });
      }

      const response = await fetch(
        "https://api-inference.huggingface.co/models/cardiffnlp/twitter-roberta-base-sentiment-latest",
        {
          method: "POST",
          headers: {
            Authorization: `Bearer ${env.HUGGINGFACE_API_KEY}`,
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ inputs: body.text }),
        }
      );

      if (!response.ok) {
        const errText = await response.text();
        return new Response(`Error from Hugging Face: ${errText}`, {
          status: response.status,
        });
      }

      const result = await response.json();

      return new Response(JSON.stringify(result), {
        headers: { "Content-Type": "application/json" },
        status: 200,
      });
    } catch (err) {
      return new Response(`Error: ${err.message}`, { status: 500 });
    }
  },
};

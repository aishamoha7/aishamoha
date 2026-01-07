export async function POST(req) {
    try {
        const body = await req.json();

        const response = await fetch(
            `https://formspree.io/f/${process.env.FORMSPREE_FORM_ID}`,
            {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    Accept: "application/json",
                },
                body: JSON.stringify(body),
            }
        );

        if (!response.ok) {
            throw new Error("Formspree submission failed");
        }

        return Response.json({ success: true });
    } catch (error) {
        return Response.json(
            { success: false, error: error.message },
            { status: 500 }
        );
    }
}

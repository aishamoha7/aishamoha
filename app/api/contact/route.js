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
            const err = await response.text();
            throw new Error(err);
        }

        return Response.json({ success: true });
    } catch (error) {
        console.error("Formspree error:", error.message);
        return Response.json(
            {
                success: false,
                error: `Server Error: ${error.message} (Form ID: ${process.env.FORMSPREE_FORM_ID})`
            },
            { status: 500 }
        );
    }
}


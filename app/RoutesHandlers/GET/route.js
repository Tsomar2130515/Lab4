
export async function GET(Request) {
    const id = Request.nextUrl.searchParams.get('id');
    if (id != null) {
        const res = await fetch(`http://localhost:3000/publications/${id}`);
        if (!res.ok) {
            throw new Error('Failed to fetch data');
        }
        const data = await res.json();
        return new Response(JSON.stringify(data), {
            status: 200,
            headers: {
                'Content-Type': 'application/json',
            },

            statusTest: ' Récupération réussie de la publication '
        })
    }
    else {
        const res = await fetch(`http://localhost:3000/publications`);
        if (!res.ok) {
            throw new Error('Failed to fetch data');
        }
        const data = await res.json();
        return new Response(JSON.stringify(data), {
            status: 200,
            headers: {
                'Content-Type': 'application/json',
            },

            statusTest: ' Récupération réussie des publications '
        })

    }
}









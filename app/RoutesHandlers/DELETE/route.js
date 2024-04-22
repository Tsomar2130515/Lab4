export async function DELETE(Request) {
  const id = Request.nextUrl.searchParams.get('id');
  if (id != null) {
      const res = await fetch(`http://localhost:3000/publications/${id}`, 
      {
          method: 'DELETE'
      });
      if (!res.ok) {
          throw new Error('Failed to delete publication');
      }
      const data = await res.json();
      return new Response(JSON.stringify(data), {
          status: 200,
          headers: {
              'Content-Type': 'application/json',
          },

          statusTest: ' Suppression réussie de la publication  '
      });
  }
  else {
    return new Response(JSON.stringify({}), { 
        status: 400, 
        statusText: ' Un identifiant est nécessaire pour la suppression de la publication  '
    });
  }
}

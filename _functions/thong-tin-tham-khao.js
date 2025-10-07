export async function onRequest(context) {
  const { request } = context;
  
  try {
    // Fetch the thong-tin-tham-khao.html file
    const htmlUrl = new URL('/thong-tin-tham-khao.html', request.url);
    const response = await fetch(htmlUrl);
    
    if (response.ok) {
      return response;
    }
  } catch (error) {
    console.error('Error fetching thong-tin-tham-khao HTML:', error);
  }
  
  // Return 404 if page not found
  return new Response('Page not found', { status: 404 });
}
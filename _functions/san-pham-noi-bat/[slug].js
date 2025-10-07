export async function onRequest(context) {
  const { params, request } = context;
  const slug = params.slug;
  
  // List of valid san-pham-noi-bat page slugs
  const validPages = [
    'moi-nhat',
    'ban-chay', 
    'khuyen-mai'
  ];
  
  // If slug is valid, fetch the HTML file
  if (validPages.includes(slug)) {
    try {
      const htmlUrl = new URL(`/san-pham-noi-bat/${slug}.html`, request.url);
      const response = await fetch(htmlUrl);
      
      if (response.ok) {
        return response;
      }
    } catch (error) {
      console.error('Error fetching san-pham-noi-bat HTML:', error);
    }
  }
  
  // Return 404 if page not found
  return new Response('Page not found', { status: 404 });
}
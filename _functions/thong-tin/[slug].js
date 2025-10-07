export async function onRequest(context) {
  const { params, request } = context;
  const slug = params.slug;
  
  // List of valid info page slugs
  const validPages = [
    'chinh-sach',
    'lien-he', 
    'mang-xa-hoi',
    've-chung-toi'
  ];
  
  // If slug is valid, fetch the HTML file
  if (validPages.includes(slug)) {
    try {
      const htmlUrl = new URL(`/thong-tin/${slug}.html`, request.url);
      const response = await fetch(htmlUrl);
      
      if (response.ok) {
        return response;
      }
    } catch (error) {
      console.error('Error fetching HTML:', error);
    }
  }
  
  // Return 404 if page not found
  return new Response('Page not found', { status: 404 });
}
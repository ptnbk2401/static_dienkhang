export async function onRequest(context) {
  const { params, request } = context;
  const slug = params.slug;
  
  // List of valid product slugs
  const validProducts = [
    'ray-ridup-35wg-15',
    'citeen-gold-415sc-13', 
    'com-24d-34',
    'lunar-super-500wp-12',
    'ray-cu-dam-thep-350wp-16',
    'super-oshin-350wp-18',
    'oshin-plus-350wp-17',
    'new-feno-500ec-22',
    'vua-ray-500wg-21',
    'sach-nhen---bo-tri-35',
    'chuot-hicate-025wp-30',
    'mancozeb-xanh-80wp-14',
    'sieu-tro-luc-33',
    'diet-nhen-than-toc-15sc-24',
    'gibow-200tb-28',
    'gibow-200-tb-29',
    'cap-doi-diet-nhen-sc-25',
    'ray-vua-check-700wp-20',
    'thuoc-muoi-icon-syngenta-32',
    'new-fago-5dp-31',
    'pyravil-5sc-23'
  ];
  
  // If slug is valid, fetch the HTML file
  if (validProducts.includes(slug)) {
    try {
      const htmlUrl = new URL(`/san-pham/${slug}.html`, request.url);
      const response = await fetch(htmlUrl);
      
      if (response.ok) {
        return response;
      }
    } catch (error) {
      console.error('Error fetching HTML:', error);
    }
  }
  
  // Return 404 if product not found
  return new Response('Product not found', { status: 404 });
}
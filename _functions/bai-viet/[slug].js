export async function onRequest(context) {
  const { params, request } = context;
  const slug = params.slug;
  
  // List of valid article slugs
  const validArticles = [
    '7-buoc-phuc-hoi-cay-sau-rieng-sau-thu-hoach-giup-cay-khoe-manh-ra-dot-nhanh-20',
    'chat-phu-tro-nong-nghiep-tang-hieu-qua-thuoc-bao-ve-cay-trong-toan-dien-19',
    'chien-luoc-quan-ly-co-dai-hieu-qua-bao-ve-nang-suat-cay-trong-ben-vung-13',
    'chien-luoc-tien-tien-va-hieu-qua-trong-quan-ly-sau-benh-bao-ve-cay-trong-ben-vung-15',
    'kich-thich-sinh-truong-giai-phap-tang-truong-nhanh-cho-cay-trong-18',
    'phan-bon-la-hieu-qua-tang-truong-cay-trong-khoe-manh-21',
    'phuong-phap-kiem-soat-sau-benh-sang-tao-giai-phap-quan-ly-benh-hai-cay-trong-hieu-qua-14',
    'syngenta-gioi-thieu-giong-ngo-chuyen-gen-nk6101bgt-moi-voi-nhieu-uu-the-vuot-troi-tai-thi-truong-viet-nam-2',
    'syngenta-viet-nam-duoc-vinh-danh-la-noi-lam-viec-xuat-sac-hang-dau-viet-nam-1',
    'syngenta-viet-nam-ra-mat-san-pham-tobacol-70wp---su-bao-ve-manh-me-3',
    'thuoc-bao-ve-thuc-vat-la-gi-cong-dung-phan-loai-va-cach-su-dung-an-toan-16',
    'thuoc-co-com-24d-diet-co-la-rong-hieu-qua-an-toan-cho-cay-trong-5',
    'thuoc-tru-sau-phan-loai-cong-dung-huong-dan-su-dung-an-toan-17',
    'thuoc-tru-sau-the-he-moi-an-toan-sinh-hoc-va-ben-vung-22',
    'top-2-thuoc-tru-sau-hieu-qua-tri-ray-bo-tri-cuc-manh-4'
  ];
  
  // If slug is valid, fetch the HTML file
  if (validArticles.includes(slug)) {
    try {
      const htmlUrl = new URL(`/bai-viet/${slug}.html`, request.url);
      const response = await fetch(htmlUrl);
      
      if (response.ok) {
        return response;
      }
    } catch (error) {
      console.error('Error fetching HTML:', error);
    }
  }
  
  // Return 404 if article not found
  return new Response('Article not found', { status: 404 });
}
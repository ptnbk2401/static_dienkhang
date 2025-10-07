# Nông Nghiệp Điền Khang - Static Site

Static version của website Nông Nghiệp Điền Khang được tạo từ Laravel site gốc để deploy lên Cloudflare Pages.

## 📊 Thống kê

- **Tổng số file HTML**: 125 files
- **Dung lượng**: ~54MB
- **Cấu trúc**: 9 thư mục chính
- **Domain**: https://nongnghiepdienkhang-vn.pages.dev

## 🗂️ Cấu trúc thư mục

```
cloudflare-deploy/
├── assets/                 # CSS, JS, images, fonts
├── bai-viet/              # Bài viết (15 files)
├── danh-muc/              # Danh mục sản phẩm (48 files)
├── danh-muc-bai-viet/     # Danh mục bài viết (5 files)
├── favicons/              # Favicon
├── san-pham/              # Sản phẩm (22 files)
├── san-pham-noi-bat/      # Sản phẩm nổi bật (9 files)
├── tag-bai-viet/          # Tags bài viết (12 files)
├── thong-tin/             # Trang thông tin (4 files)
├── _redirects             # Cloudflare Pages redirects
├── _headers               # Cloudflare Pages headers
├── .htaccess              # Apache redirects (không dùng)
├── index.html             # Trang chủ
├── lien-he.html           # Trang liên hệ
├── gio-hang.html          # Trang giỏ hàng
├── robots.txt             # SEO robots
└── sitemap.xml            # SEO sitemap
```

## 🔄 Redirects Configuration

File `_redirects` sử dụng wildcard patterns:

```
# Articles
/bai-viet/* /bai-viet/:splat.html 200

# Products
/san-pham/* /san-pham/:splat.html 200

# Categories
/danh-muc/[category] /danh-muc/[category]-[id].html 200
```

## 🚀 Deployment

1. **Cloudflare Pages**: Upload toàn bộ thư mục này
2. **Domain**: Cấu hình custom domain nếu cần
3. **Cache**: Clear cache sau mỗi lần deploy

## 📝 Lịch sử

- **2025-10-06**: Tạo static site từ Laravel
- **2025-10-06**: Cấu hình redirects với wildcard patterns
- **2025-10-06**: Tạo Git repository để quản lý

## 🔗 Links

- **Laravel Site**: https://nongnghiepdienkhang.vn
- **Static Site**: https://nongnghiepdienkhang-vn.pages.dev
- **Repository**: Local Git repository

## ⚠️ Lưu ý

- File `.htaccess` không được sử dụng trên Cloudflare Pages
- Sử dụng `_redirects` và `_headers` cho cấu hình
- Tất cả URLs giữ nguyên format Laravel gốc

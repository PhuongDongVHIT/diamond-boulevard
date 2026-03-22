<script lang="ts">
  // Định nghĩa kiểu dữ liệu cho các props (TypeScript)
  export let title: string;
  export let desc: string;
  export let path: string = ''; // Đường dẫn tĩnh của trang hiện tại (VD: /gioi-thieu)
  export let image: string = 'https://diamondboulevard.xyz/logo.png';
  export let isArticle: boolean = false;
  export let author: string = 'Diamond Boulevard';
  export let jsonLd: object | null = null; // Có thể truyền schema tùy chỉnh từ ngoài vào

  const siteUrl = 'https://diamondboulevard.xyz';
  const fullUrl = `${siteUrl}${path}`;
  const siteName = 'Diamond Boulevard';
  
  // Nối tên thương hiệu vào title để tăng độ nhận diện (Branding)
  const fullTitle = `${title} | ${siteName}`;

  // Tự động tạo JSON-LD tối ưu cho AIO nếu không được truyền vào
  const defaultJsonLd = {
    "@context": "https://schema.org",
    "@type": isArticle ? "Article" : "WebSite",
    "name": siteName,
    "url": fullUrl,
    "headline": title,
    "description": desc,
    "image": image,
    "author": {
      "@type": "Organization",
      "name": author
    },
    "publisher": {
      "@type": "Organization",
      "name": siteName,
      "logo": {
        "@type": "ImageObject",
        "url": `${siteUrl}/logo.png`
      }
    }
  };

  const finalJsonLd = jsonLd || defaultJsonLd;
</script>

<svelte:head>
  <title>{fullTitle}</title>
  <meta name="description" content={desc} />
  <meta name="robots" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1" />
  <link rel="canonical" href={fullUrl} />

  <meta property="og:type" content={isArticle ? 'article' : 'website'} />
  <meta property="og:url" content={fullUrl} />
  <meta property="og:title" content={fullTitle} />
  <meta property="og:description" content={desc} />
  <meta property="og:image" content={image} />
  <meta property="og:site_name" content={siteName} />

  <meta name="twitter:card" content="summary_large_image" />
  <meta name="twitter:url" content={fullUrl} />
  <meta name="twitter:title" content={fullTitle} />
  <meta name="twitter:description" content={desc} />
  <meta name="twitter:image" content={image} />

  {@html `<script type="application/ld+json">${JSON.stringify(finalJsonLd)}</script>`}
</svelte:head>
<script lang="ts">
  // 1. Định nghĩa kiểu dữ liệu (Interface) cho Props
  interface Props {
    title: string;
    desc: string;
    path?: string;
    image?: string;
    isArticle?: boolean;
    author?: string;
    jsonLd?: object | null;
  }

  // 2. Nhận props bằng $props() và gán giá trị mặc định (Fallback)
  let {
    title,
    desc,
    path = '',
    image = 'https://diamondboulevard.example.com/default-og-image.jpg',
    isArticle = false,
    author = 'Diamond Boulevard',
    jsonLd = null
  }: Props = $props();

  const siteUrl = 'https://diamondboulevard.example.com';
  const siteName = 'Diamond Boulevard';
  
  // 3. Sử dụng $derived() cho các biến phụ thuộc vào props để chúng tự cập nhật khi props đổi
  let fullUrl = $derived(`${siteUrl}${path}`);
  let fullTitle = $derived(`${title} | ${siteName}`);

  // Tự động tạo JSON-LD tối ưu
  let defaultJsonLd = $derived({
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
  });

  let finalJsonLd = $derived(jsonLd || defaultJsonLd);
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
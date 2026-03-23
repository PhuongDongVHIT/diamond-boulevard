<script lang="ts">
  interface Props {
    title: string;
    desc: string;
    path?: string;
    image?: string;
    isArticle?: boolean;
    author?: string;
    jsonLd?: object | null;
  }

  let {
    title,
    desc,
    path = '',
    image = 'https://diamondboulevard.xyz/images/can-ho-diamond-boulevard-goc-nhin-3.webp ',
    isArticle = false,
    author = 'Diamond Boulevard',
    jsonLd = null
  }: Props = $props();

  const siteUrl = 'https://diamondboulevard.xyz';
  const siteName = 'Diamond Boulevard';
  const logo = `${siteUrl}/logo.png`;
  const favicon = `${siteUrl}/logo.png  `;

  let fullUrl = $derived(`${siteUrl}${path}`);
  let fullTitle = $derived(`${title} | ${siteName}`);

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
        "url": logo
      }
    }
  });

  let finalJsonLd = $derived(jsonLd || defaultJsonLd);
</script>

<svelte:head>
  <!-- Basic -->
  <title>{fullTitle}</title>
  <meta name="description" content={desc} />
  <meta name="robots" content="index, follow, max-image-preview:large" />
  <link rel="canonical" href={fullUrl} />

  <!-- Favicon -->
  <link rel="icon" href={favicon} />
  <link rel="apple-touch-icon" href={logo} />
  <link rel="shortcut icon" href={favicon} />

  <!-- Theme -->
  <meta name="theme-color" content="#ffffff" />

  <!-- Open Graph -->
  <meta property="og:type" content={isArticle ? 'article' : 'website'} />
  <meta property="og:url" content={fullUrl} />
  <meta property="og:title" content={fullTitle} />
  <meta property="og:description" content={desc} />
  <meta property="og:image" content={image} />
  <meta property="og:site_name" content={siteName} />

  <!-- Logo đại diện brand -->
  <meta property="og:image:alt" content={siteName} />

  <!-- Twitter -->
  <meta name="twitter:card" content="summary_large_image" />
  <meta name="twitter:url" content={fullUrl} />
  <meta name="twitter:title" content={fullTitle} />
  <meta name="twitter:description" content={desc} />
  <meta name="twitter:image" content={image} />

  <!-- Structured Data -->
  {@html `<script type="application/ld+json">${JSON.stringify(finalJsonLd)}</script>`}
</svelte:head>
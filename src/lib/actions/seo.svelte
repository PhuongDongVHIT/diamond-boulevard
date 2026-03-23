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
    image = 'https://diamondboulevard.xyz/images/can-ho-diamond-boulevard-goc-nhin-3.webp',
    isArticle = false,
    author = 'Diamond Boulevard',
    jsonLd = null
  }: Props = $props();

  const siteUrl = 'https://diamondboulevard.xyz';
  const siteName = 'Diamond Boulevard';
  const logo = `${siteUrl}/logo.png`;
  const favicon = `${siteUrl}/logo.png`;

  let fullUrl = $derived(`${siteUrl}${path}`);
  let fullTitle = $derived(`${title} | ${siteName}`);

  const socialLinks = [
    'https://www.facebook.com/atskygardenlaithieu.com.vn',
    'https://zalo.me/0986639944'
  ];

  let defaultJsonLd = $derived({
    "@context": "https://schema.org",
    "@type": isArticle ? "Article" : "Organization",

    "name": siteName,
    "url": fullUrl,
    "logo": logo,
    "image": image,
    "description": desc,

    "sameAs": socialLinks,

    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+84986639944",
      "contactType": "sales",
      "areaServed": "VN",
      "availableLanguage": ["Vietnamese"]
    },

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
  <title>{fullTitle}</title>
  <meta name="description" content={desc} />
  <meta name="robots" content="index, follow, max-image-preview:large" />
  <link rel="canonical" href={fullUrl} />

  <link rel="icon" href={favicon} />
  <link rel="apple-touch-icon" href={logo} />
  <link rel="shortcut icon" href={favicon} />

  <meta name="theme-color" content="#ffffff" />

  <meta property="og:type" content={isArticle ? 'article' : 'website'} />
  <meta property="og:url" content={fullUrl} />
  <meta property="og:title" content={fullTitle} />
  <meta property="og:description" content={desc} />
  <meta property="og:image" content={image} />
  <meta property="og:site_name" content={siteName} />
  <meta property="og:image:alt" content={siteName} />

  <meta name="twitter:card" content="summary_large_image" />
  <meta name="twitter:url" content={fullUrl} />
  <meta name="twitter:title" content={fullTitle} />
  <meta name="twitter:description" content={desc} />
  <meta name="twitter:image" content={image} />

  {@html `<script type="application/ld+json">${JSON.stringify(finalJsonLd)}</script>`}
</svelte:head>
import { useEffect } from 'react';

/**
 * SEOHead — Unified SEO / AEO / GEO / SXO / AIO component
 *
 * Handles:
 *  • Page title, meta description, canonical, Open Graph, Twitter Card
 *  • JSON-LD structured data (any schema type)
 *  • AI answer-engine friendly meta (speakable, citation hints)
 *  • Hreflang / locale signals
 */

interface SEOHeadProps {
  title: string;
  description: string;
  canonical: string;
  ogImage?: string;
  ogType?: string;
  keywords?: string;
  schema?: Record<string, unknown> | Record<string, unknown>[];
  noIndex?: boolean;
  locale?: string;
  article?: {
    publishedTime?: string;
    modifiedTime?: string;
    author?: string;
  };
}

export default function SEOHead({
  title,
  description,
  canonical,
  ogImage = 'https://lorvixsolutions.in/logo.png',
  ogType = 'website',
  keywords,
  schema,
  noIndex = false,
  locale = 'en_IN',
  article,
}: SEOHeadProps) {
  useEffect(() => {
    // ── Title ──
    document.title = title;

    // ── Helper: upsert <meta> ──
    const setMeta = (attr: 'name' | 'property', key: string, content: string) => {
      const selector = `meta[${attr}="${key}"]`;
      let tag = document.querySelector(selector) as HTMLMetaElement | null;
      if (!tag) {
        tag = document.createElement('meta');
        tag.setAttribute(attr, key);
        document.head.appendChild(tag);
      }
      tag.setAttribute('content', content);
    };

    // ── Helper: upsert <link> ──
    const setLink = (rel: string, href: string, attrs?: Record<string, string>) => {
      const extra = attrs ? Object.entries(attrs).map(([k, v]) => `[${k}="${v}"]`).join('') : '';
      const selector = `link[rel="${rel}"]${extra}`;
      let tag = document.querySelector(selector) as HTMLLinkElement | null;
      if (!tag) {
        tag = document.createElement('link');
        tag.setAttribute('rel', rel);
        if (attrs) Object.entries(attrs).forEach(([k, v]) => tag!.setAttribute(k, v));
        document.head.appendChild(tag);
      }
      tag.setAttribute('href', href);
    };

    // ── Standard SEO ──
    setMeta('name', 'description', description);
    setMeta('name', 'robots', noIndex ? 'noindex, nofollow' : 'index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1');
    document.querySelector('meta[name="keywords"]')?.remove();

    // ── Canonical ──
    setLink('canonical', canonical);

    // ── Open Graph ──
    setMeta('property', 'og:title', title);
    setMeta('property', 'og:description', description);
    setMeta('property', 'og:url', canonical);
    setMeta('property', 'og:image', ogImage);
    setMeta('property', 'og:type', ogType);
    setMeta('property', 'og:locale', locale);
    setMeta('property', 'og:site_name', 'Lorvix Solutions');

    // ── Twitter Card ──
    setMeta('name', 'twitter:card', 'summary_large_image');
    setMeta('name', 'twitter:title', title);
    setMeta('name', 'twitter:description', description);
    setMeta('name', 'twitter:image', ogImage);

    // ── Article-specific OG tags ──
    if (article) {
      if (article.publishedTime) setMeta('property', 'article:published_time', article.publishedTime);
      if (article.modifiedTime) setMeta('property', 'article:modified_time', article.modifiedTime);
      if (article.author) setMeta('property', 'article:author', article.author);
    }

    // ── AEO / GEO / AIO: AI-friendly meta signals ──
    setMeta('name', 'author', 'Lorvix Solutions');
    setMeta('name', 'publisher', 'Lorvix Solutions');
    setMeta('name', 'geo.region', 'IN-TN');
    setMeta('name', 'geo.placename', 'Chennai, Tamil Nadu, India');
    setMeta('name', 'geo.position', '13.0827;80.2707');
    setMeta('name', 'ICBM', '13.0827, 80.2707');

    // ── Hreflang ──
    setLink('alternate', canonical, { hreflang: 'en-in' });
    setLink('alternate', canonical, { hreflang: 'x-default' });

    // ── JSON-LD structured data ──
    const siteNavigationSchema = {
      '@context': 'https://schema.org',
      '@type': 'ItemList',
      name: 'Lorvix Solutions Primary Site Navigation',
      itemListElement: [
        {
          '@type': 'SiteNavigationElement',
          position: 1,
          name: 'Home',
          url: 'https://lorvixsolutions.in/',
        },
        {
          '@type': 'SiteNavigationElement',
          position: 2,
          name: 'Web Development',
          url: 'https://lorvixsolutions.in/web-development',
        },
        {
          '@type': 'SiteNavigationElement',
          position: 3,
          name: 'Lorvix Billing',
          url: 'https://lorvixsolutions.in/lorvix-billing',
        },
        {
          '@type': 'SiteNavigationElement',
          position: 4,
          name: 'Contact',
          url: 'https://lorvixsolutions.in/contact',
        },
      ],
    };

    const siteNavigationSchemaId = 'site-navigation-schema';
    let siteNavigationScript = document.getElementById(siteNavigationSchemaId) as HTMLScriptElement | null;
    if (!siteNavigationScript) {
      siteNavigationScript = document.createElement('script');
      siteNavigationScript.type = 'application/ld+json';
      siteNavigationScript.id = siteNavigationSchemaId;
      document.head.appendChild(siteNavigationScript);
    }
    siteNavigationScript.text = JSON.stringify(siteNavigationSchema);

    const schemaId = 'seo-head-schema';
    document.getElementById(schemaId)?.remove();
    if (schema) {
      const scriptEl = document.createElement('script');
      scriptEl.type = 'application/ld+json';
      scriptEl.id = schemaId;
      scriptEl.text = JSON.stringify(Array.isArray(schema) ? schema : schema);
      document.head.appendChild(scriptEl);
    }

    return () => {
      document.getElementById(schemaId)?.remove();
    };
  }, [title, description, canonical, ogImage, ogType, keywords, schema, noIndex, locale, article]);

  return null;
}

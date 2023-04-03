import rss from '@astrojs/rss';

export const get = () => rss({
  title: 'REEX Labs',
  description: 'REEX Labs is a Research and Development company focused on building software that empower developers to build apps faster and with a better experience',
  site: "https://blog.reexlabs.com",
  items: import.meta.glob('./posts/**.mdx'),
});

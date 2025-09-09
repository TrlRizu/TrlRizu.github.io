---
title: 'Tag Archive'
layout: 'layouts/feed.html'
pagination:
  data: collections
  size: 1
  alias: tag
  filter: ['all', 'rss']
permalink: '/tag/{{ tag | slugify }}/'
---

will filter out collections that don't feature by passing an array of collections. 
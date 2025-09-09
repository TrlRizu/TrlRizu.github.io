---
title: 'Trl Rizu'
layout: 'layouts/feed.html'
pagination:
  data: collections.articulos
  size: 5
permalink: 'articulos{% if pagination.pageNumber > 0 %}/page/{{ pagination.pageNumber }}{% endif %}/index.html'
---
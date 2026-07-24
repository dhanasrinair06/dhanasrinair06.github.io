---
layout: page
title: My RegLens
permalink: /regulatory-notes/
nav: true
nav_order: 6
---

The regulatory world in my lens 🔍

<div class="regulatory-notes-list">
{% assign reg_posts = site.categories['regulatory-notes'] %}
{% for post in reg_posts %}
  <article style="margin-top: 1.75rem;">
    <h3 style="margin-bottom: 0.2rem;"><a href="{{ post.url | relative_url }}">{{ post.title }}</a></h3>
    <div style="font-size: 0.85rem; color: var(--global-text-color-light);">{{ post.date | date: '%B %-d, %Y' }}</div>
    {% if post.description %}<p style="margin-top: 0.3rem;">{{ post.description }}</p>{% endif %}
  </article>
{% endfor %}
</div>

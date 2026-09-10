---
layout: page
title: chill
permalink: /chill/
description: Things I do to unwind and recharge.
nav: true
nav_order: 4
---

{% assign sorted_chill = site.chill | sort: "importance" %}
{% for item in sorted_chill %}
<h2 class="mt-3">{{ item.title }}</h2>
{% if item.description %}<p class="text-muted">{{ item.description }}</p>{% endif %}
{{ item.content }}
{% endfor %}

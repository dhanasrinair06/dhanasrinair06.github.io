---
layout: page
title: chill
permalink: /chill/
description: Things I do to unwind and recharge.
nav: true
nav_order: 4
display_categories: [hobbies, interests]
horizontal: false
---

<!-- pages/chill.md -->
<div class="projects">
{% if site.enable_project_categories and page.display_categories %}
  <!-- Display categorized chill items -->
  {% for category in page.display_categories %}
  <a id="{{ category }}" href=".#{{ category }}">
    <h2 class="category">{{ category }}</h2>
  </a>
  {% assign categorized_chill = site.chill | where: "category", category %}
  {% assign sorted_chill = categorized_chill | sort: "importance" %}
  <!-- Generate cards for each chill item -->
  {% if page.horizontal %}
  <div class="container">
    <div class="row row-cols-1 row-cols-md-2">
    {% for item in sorted_chill %}
      {% include projects_horizontal.liquid project=item %}
    {% endfor %}
    </div>
  </div>
  {% else %}
  <div class="row row-cols-1 row-cols-md-3">
    {% for item in sorted_chill %}
      {% include projects.liquid project=item %}
    {% endfor %}
  </div>
  {% endif %}
  {% endfor %}

{% else %}

<!-- Display chill items without categories -->

{% assign sorted_chill = site.chill | sort: "importance" %}

  <!-- Generate cards for each chill item -->

{% if page.horizontal %}

  <div class="container">
    <div class="row row-cols-1 row-cols-md-2">
    {% for item in sorted_chill %}
      {% include projects_horizontal.liquid project=item %}
    {% endfor %}
    </div>
  </div>
  {% else %}
  <div class="row row-cols-1 row-cols-md-3">
    {% for item in sorted_chill %}
      {% include projects.liquid project=item %}
    {% endfor %}
  </div>
  {% endif %}
{% endif %}
</div>

---
layout: page
title: my work
permalink: /projects/
nav: true
nav_order: 3
description: "A look at my regulatory work across three areas — click into each to explore."
---

<div class="projects">
  <div class="row row-cols-1 row-cols-md-3 g-4">

    <div class="col">
      <a href="{{ '/projects/medical-devices/' | relative_url }}">
        <div class="card h-100 hoverable">
          {% include figure.liquid loading="eager" path="assets/img/products/acculink.png" sizes="250px" alt="Medical Devices" class="card-img-top" %}
          <div class="card-body">
            <h2 class="card-title">Medical Devices</h2>
            <p class="card-text">Class II/III device submissions across EMEA, APJ, and CALA — EU MDR execution and worldwide launches.</p>
          </div>
        </div>
      </a>
    </div>

    <div class="col">
      <a href="{{ '/projects/cannabis/' | relative_url }}">
        <div class="card h-100 hoverable">
          {% include figure.liquid loading="eager" path="assets/img/products/cannabis-regulation.jpg" sizes="250px" alt="Cannabis Regulation" class="card-img-top" %}
          <div class="card-body">
            <h2 class="card-title">Cannabis Regulation</h2>
            <p class="card-text">Cannabis microbial-testing regulations across all 50 US states at Medicinal Genomics.</p>
          </div>
        </div>
      </a>
    </div>

    <div class="col">
      <a href="{{ '/projects/food-feed/' | relative_url }}">
        <div class="card h-100 hoverable">
          {% include figure.liquid loading="eager" path="assets/img/products/food-feed.jpg" sizes="250px" alt="Food/Feed Products" class="card-img-top" %}
          <div class="card-body">
            <h2 class="card-title">Food/Feed Products</h2>
            <p class="card-text">Enzyme-based API, food, and feed registrations across APJ and EMEA at Advanced Enzyme Technologies.</p>
          </div>
        </div>
      </a>
    </div>

  </div>
</div>

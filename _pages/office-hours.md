---
layout: page
title: office hours
permalink: /office-hours/
description: "Book a slot to talk, or read the questions people ask me most about working in regulatory affairs."
nav: true
nav_order: 7
---

<div class="office-hours">

  <p class="office-hours__intro">
    People reach out fairly often — how to get started in regulatory affairs, whether
    a degree is worth it, what the work is actually like day to day. So I set aside
    time for it. Book a slot below if you'd like to talk properly, or read on: the
    questions I get asked most are answered here already.
  </p>

  <section class="oh-book">
    <h2 class="oh-book__title">Book a time</h2>
    <p class="oh-book__blurb">
      Pick any slot that suits you — my live availability opens in a new tab,
      so there's no back-and-forth over email.
    </p>

    {% if site.calendly.url and site.calendly.url != '' %}
      <a class="oh-book__cta"
         href="{{ site.calendly.url }}"
         target="_blank"
         rel="noopener">
        See my availability
        <span class="oh-book__cta-note">30 minutes · opens in a new tab</span>
      </a>
    {% else %}
      <div class="oh-book__placeholder">
        <p><strong>Calendar not connected yet.</strong></p>
        <p>
          Add your Calendly link to <code>_config.yml</code> under <code>calendly.url</code>
          and the booking button appears here automatically.
        </p>
      </div>
    {% endif %}
  </section>

  <h2 class="oh-section-title">Questions I get asked</h2>

  {% assign entries = site.data.office_hours %}
  {% assign topics = entries | map: "topic" | uniq | sort %}
  <div class="office-hours__filters" role="group" aria-label="Filter questions by topic">
    <button type="button" class="oh-chip is-active" data-topic="all">All</button>
    {% for topic in topics %}
      <button type="button" class="oh-chip" data-topic="{{ topic }}">{{ topic }}</button>
    {% endfor %}
  </div>

  <div class="office-hours__list">
    {% for item in entries %}
      <details class="oh-item" data-topic="{{ item.topic }}">
        <summary class="oh-item__q">
          <span class="oh-item__qtext">{{ item.question }}</span>
          <span class="oh-item__topic">{{ item.topic }}</span>
        </summary>
        <div class="oh-item__a">
          {{ item.answer | markdownify }}
          {% if item.date %}
            <p class="oh-item__date">Answered {{ item.date | date: "%B %Y" }}</p>
          {% endif %}
        </div>
      </details>
    {% endfor %}
  </div>

  <p class="office-hours__empty" hidden>No questions under that topic yet.</p>

</div>

<script>
  (function () {
    var chips = document.querySelectorAll(".oh-chip");
    var items = document.querySelectorAll(".oh-item");
    var empty = document.querySelector(".office-hours__empty");
    if (!chips.length) return;

    Array.prototype.forEach.call(chips, function (chip) {
      chip.addEventListener("click", function () {
        var topic = chip.getAttribute("data-topic");
        var shown = 0;

        Array.prototype.forEach.call(chips, function (c) {
          c.classList.toggle("is-active", c === chip);
        });

        Array.prototype.forEach.call(items, function (item) {
          var match = topic === "all" || item.getAttribute("data-topic") === topic;
          item.hidden = !match;
          if (!match) item.open = false;
          if (match) shown++;
        });

        if (empty) empty.hidden = shown > 0;
      });
    });
  })();
</script>

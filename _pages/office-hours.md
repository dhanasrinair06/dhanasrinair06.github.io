---
layout: page
title: Office Hours
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
      Pick any slot that suits you — the calendar below shows exactly when I'm free,
      so there's no back-and-forth over email.
    </p>

    {% if site.calendly.url and site.calendly.url != '' %}
      <div class="calendly-inline-widget"
           data-url="{{ site.calendly.url }}"
           style="min-width:320px;height:660px;"></div>
      <script type="text/javascript"
              src="https://assets.calendly.com/assets/external/widget.js"
              async></script>
    {% else %}
      <div class="oh-book__placeholder">
        <p><strong>Calendar not connected yet.</strong></p>
        <p>
          Add your Calendly link to <code>_config.yml</code> under <code>calendly.url</code>
          and your live availability appears here automatically.
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

  <section class="oh-ask">
    <h2 class="oh-ask__title">Or just ask in writing</h2>
    <p class="oh-ask__blurb">
      No account, no sign-up. Leave your name out if you'd rather stay anonymous —
      I'll never publish contact details, and I only publish a question once I've
      written an answer worth reading.
    </p>

    <form class="oh-form" onsubmit="return false;">
      <label class="oh-form__label" for="oh-question">Your question</label>
      <textarea id="oh-question" class="oh-form__input" rows="4"
        placeholder="What would you like to ask?"></textarea>

      <label class="oh-form__label" for="oh-name">Name <span>(optional)</span></label>
      <input id="oh-name" class="oh-form__input" type="text" placeholder="Anonymous is fine">

      <label class="oh-form__label" for="oh-email">Email <span>(optional — only so I can reply directly)</span></label>
      <input id="oh-email" class="oh-form__input" type="email" placeholder="you@example.com">

      <button type="submit" class="oh-form__submit" disabled>Send question</button>
      <p class="oh-form__note">
        Preview only — this form isn't connected to anything yet, so nothing is sent
        or stored.
      </p>
    </form>
  </section>

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

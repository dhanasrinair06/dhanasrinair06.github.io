---
layout: page
title: MentorHub
permalink: /mentorhub/
description: "Questions people have sent me about getting into regulatory affairs — and my honest answers. Ask me one and I'll answer it here."
nav: true
nav_order: 5
---

<div class="mentorhub">

  <p class="mentorhub__intro">
    A lot of the questions I get asked come up again and again — how to get started,
    whether a degree is worth it, what the work is actually like day to day. Rather
    than answer them one inbox at a time, I answer them here so the next person can
    read them too.
  </p>

  {% assign topics = site.data.mentorhub | map: "topic" | uniq | sort %}
  <div class="mentorhub__filters" role="group" aria-label="Filter questions by topic">
    <button type="button" class="mh-chip is-active" data-topic="all">All</button>
    {% for topic in topics %}
      <button type="button" class="mh-chip" data-topic="{{ topic }}">{{ topic }}</button>
    {% endfor %}
  </div>

  <div class="mentorhub__list">
    {% for item in site.data.mentorhub %}
      <details class="mh-item" data-topic="{{ item.topic }}">
        <summary class="mh-item__q">
          <span class="mh-item__qtext">{{ item.question }}</span>
          <span class="mh-item__topic">{{ item.topic }}</span>
        </summary>
        <div class="mh-item__a">
          {{ item.answer | markdownify }}
          {% if item.date %}
            <p class="mh-item__date">Answered {{ item.date | date: "%B %Y" }}</p>
          {% endif %}
        </div>
      </details>
    {% endfor %}
  </div>

  <p class="mentorhub__empty" hidden>No questions under that topic yet.</p>

  <section class="mh-ask">
    <h2 class="mh-ask__title">Ask me something</h2>
    <p class="mh-ask__blurb">
      No account, no sign-up. Leave your name out if you'd rather stay anonymous —
      I'll never publish contact details, and I only publish a question once I've
      written an answer worth reading.
    </p>

    <form class="mh-form" onsubmit="return false;">
      <label class="mh-form__label" for="mh-question">Your question</label>
      <textarea id="mh-question" class="mh-form__input" rows="4"
        placeholder="What would you like to ask?"></textarea>

      <label class="mh-form__label" for="mh-name">Name <span>(optional)</span></label>
      <input id="mh-name" class="mh-form__input" type="text" placeholder="Anonymous is fine">

      <label class="mh-form__label" for="mh-email">Email <span>(optional — only so I can reply directly)</span></label>
      <input id="mh-email" class="mh-form__input" type="email" placeholder="you@example.com">

      <button type="submit" class="mh-form__submit" disabled>Send question</button>
      <p class="mh-form__note">
        Preview only — this form isn't connected to anything yet, so nothing is sent
        or stored.
      </p>
    </form>
  </section>

</div>

<script>
  (function () {
    var chips = document.querySelectorAll(".mh-chip");
    var items = document.querySelectorAll(".mh-item");
    var empty = document.querySelector(".mentorhub__empty");
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

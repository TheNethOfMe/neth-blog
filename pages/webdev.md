---
layout: default
title: Welcome to Nethhorn.com
slug: web
details: I'm a mostly self-taught web developer who specializes in full-stack Javascript development (mostly MERN stack) and Wordpress theme development with PHP. I've also dabbled in Ruby on Rails, C#/.NET, and a few other things. I'm not afraid to get my hands on new stuff and figure it out!
---

<div class="webdev-display">
  {% assign sorted_projects = (site.projects | sort: 'order') %}
  {% for project in sorted_projects %}
    {% include project_card.html project=project %}
  {% endfor %}
</div>

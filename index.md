---
layout: page
title: Suzie Wong
tagline: Life is an attitude.
---
{% include JB/setup %}

Hi,我是Suzie,目前在杭州某互联网公司打杂。

[主页](http://www.imsuzie.com)

[博客](http://blog.imsuzie.com)

[作品](http://work.imsuzie.com)



<ul class="posts">
  {% for post in site.posts %}
    <li><span>{{ post.date | date_to_string }}</span> &raquo; <a href="{{ BASE_PATH }}{{ post.url }}">{{ post.title }}</a></li>
  {% endfor %}
</ul>



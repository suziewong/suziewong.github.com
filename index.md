---
layout: page
title: Suzie Wong
tagline: Life is an attitude.
---
{% include JB/setup %}

Hi,我是Suzie,一个准Web开发工程师。

[主页](http://www.imsuzie.com)

[博客](http://blog.imsuzie.com)

[作品](http://work.imsuzie.com)




### Doing

0. [开源教学频道](http://osteach.github.com/)

	一个介绍开源文化的网站，目前有写成纸质书的倾向...欢迎贡献

1. [Diaoscovery探索频道](http://suziewong.github.io/diaoscovery)
    
    从知乎上学到东西开始整合啦

2. [News](http://geek.zjut.com)
	
	本来是仿Hacker News写的一个站点



<ul class="posts">
  {% for post in site.posts %}
    <li><span>{{ post.date | date_to_string }}</span> &raquo; <a href="{{ BASE_PATH }}{{ post.url }}">{{ post.title }}</a></li>
  {% endfor %}
</ul>



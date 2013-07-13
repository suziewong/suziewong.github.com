---
layout: page
title: Suzie Wong
tagline: Life is an attitude.
---
{% include JB/setup %}

Hi,我是郑洋飞(Suzie),一个准Web开发工程师,目前在阿里巴巴实习。

想要了解某个人不仅仅看简历，更要看他的一言一行。
<ol>
<li>
	<a href='http://www.imsuzie.com' target='_blank'>主页</a>
	<p>从最开始已经改版了3次了,Metro风格不仅仅是一套CSS样式,而是一种信息组织方式。</p>
</li>
<li>
	<a href='http://blog.imsuzie.com' target='_blank'>博客</a>
	<p>
		编程知识，个人感悟。
	</p>
</li>
<li>
	<a href='http://work.imsuzie.com' target='_blank'>作品</a>
	<p>
		很多很多的项目，有的完成，有的正在完成，我相信付出努力一定会有回报。
	</p>
</li>
<li>
	<a href='word.html' target='_blank'>言语</a>
	<p>
		这里都是我喜欢的言语，所以我要收集起来，送给和我有同样想法的人。
	</p>
</li>
</ol>

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



---
title: 写好第一篇技术文章
layout: doc
---

<script setup>
import { onMounted } from "vue";
import { withBase } from "vitepress";

// 项目站 base 为 /interview-blog/，必须带上前缀，否则会 404
onMounted(() => {
  const to = withBase("/blog/01-首页/01-写好第一篇技术文章");
  if (decodeURIComponent(location.pathname) !== decodeURIComponent(to)) {
    location.replace(to);
  }
});
</script>

正在跳转到首页…

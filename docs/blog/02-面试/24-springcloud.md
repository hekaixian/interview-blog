---
title: "springcloud"
date: 2026-09-02
categories:
  - 面试
description: "springcloud"
---

# springcloud
## 1、常用组件

注册和发现：Eureka

配置中心：Config、Apollo

网关：Zuul

负载均衡：Feign

熔断：Sentinel

## 2、Eurake实现原理

Eurake是一个服务发现和注册组件，包含了EurakeServer服务端和EurakeClient客户端，

EurakeServer是独立的微服务，EurakeClient是需要继承到各个微服务的。

微服务（Eurake）在启动时会向服务端提交自己的通信地址信息ip等，在EurakeServer会形成一个微服务的通信地址列表，这叫服务注册。

EurakeClient微服务会定期从服务端拉取一份通信地址列表缓存到本地，

调用另一个微服务的时候，会从本地列表中根据服务名查找对应的通信信息。整个叫服务发现。

EurakeClient会定时通过心跳机制向服务端请求服务续约，告诉服务端不要把它删除了。

---
title: "springdboot"
date: 2026-09-02
categories:
  - 面试
description: "springdboot"
---

# springdboot
## 1、聊下springBoot的原理？

springboot是一个用于创建spring应用程序的框架，简化了配置，主要有以下几个特点：

（1）自动配置，根据项目引用的依赖和配置属性，自动配置应用程序所需的Bean。

（2）起步依赖，一组相关的依赖项的集合

（3）配置文件处理，将配置文件中的属性绑定到java对象中。

（4）嵌入式服务器，内置了tomcat服务器，springboot可以直接执行jar包。

（5）注解驱动

（5）约定优于配置，项目的结构、配置文件命名和位置都有默认的约定。

（6）Actuator监控

## 2、启动注解@SpringBootApplication的加载过程

@SpringBootApplication是一个组合注解，主要有三个注解：@SpringBootConfiguration标识配置类，@EnableAutoConfiguration注解启用自动配置机制。@ComponentScan注解自动扫描并注册。

（1）启动springboot应用，调用main方法中的run方法。

（2）run方法中会创建一个SpringApplication实例，调用其run方法，进行一些初始化工作。

（3）启动过程中会解析@SpringBootApplication注解，加载配置类，扫描相关的包注册。

（4）最后SpringApplication会创建一个ConfigurableApplicationContext实例，调用refresh方法，

完成spring应用上下文初始化和刷新，创建和初始化所有的Bean、启动嵌入式服务器等。

总结：@SpringBootApplication注解加载过程主要包括启动spring boot应用，初始化SpringApplication、解析@SpringBootApplication注解及其子注解、查找和加载自动配置类，最后创建和刷新应用上下文。

## 3、springboot的启动流程



## 4、springboot的bean加载，a加载了才加载b，或者yml文件中配置了某个参数，才会去配置b，怎么实现？

使用@DependsOn注解，可以指定某个Bean在加载之前需要先加载其他的Bean。

使用@ConditionalOnProperty注解，可以根据配置文件中的属性值来决定是否创建某个Bean。

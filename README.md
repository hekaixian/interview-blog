# interview-blog（kk小站）

基于 VitePress 的个人技术博客 / 面试笔记站点，主题使用 Teek，通过 GitHub Actions 自动部署到 GitHub Pages。

- 仓库：[https://github.com/hekaixian/interview-blog](https://github.com/hekaixian/interview-blog)
- 在线访问：[https://hekaixian.github.io/interview-blog/](https://hekaixian.github.io/interview-blog/)

## 技术栈


| 技术                                           | 说明                   |
| -------------------------------------------- | -------------------- |
| [VitePress](https://vitepress.dev/)          | 静态站点生成（Vue 3 + Vite） |
| [vitepress-theme-teek](https://vp.teek.top/) | 博客 / 文档主题            |
| Vue 3                                        | VitePress 运行时依赖      |
| npm                                          | 包管理与脚本               |
| GitHub Pages + Actions                       | 构建与托管                |


### 目录结构（简要）

```text
interview-blog/
├── docs/
│   ├── .vitepress/          # 站点配置与主题
│   ├── blog/                # 文章（侧边栏按此目录自动生成）
│   │   ├── 01-首页/
│   │   ├── 02-面试/
│   │   └── 03-其他/
│   ├── public/              # 静态资源（logo 等）
│   └── index.md             # 根路径跳转入口
├── .github/workflows/       # GitHub Pages 部署工作流
└── package.json
```

约定：

- `docs/blog/` 下**一个子文件夹 = 侧边栏一个分组**
- 文件夹 / 文件建议用 `数字-名称`（如 `01-面试`、`02-Java基础.md`），数字越小越靠前
- 新增分组：在 `blog` 下新建文件夹并放入至少一篇 md
- 新增文章：在对应分组目录下新建 md，一般无需改 `config.mts`



## 环境要求

- Node.js 18+（建议 20）
- npm
- Git



## 本地启动

```bash
cd interview-blog
npm install
npm run docs:dev
```

浏览器访问（注意带仓库名 base）：

```text
http://localhost:5173/interview-blog/
```

其他命令：

```bash
npm run docs:build    # 生产构建，产物在 docs/.vitepress/dist
npm run docs:preview  # 预览构建结果
```



## 发布到 GitHub



### 1. 首次推送代码

GitHub 已禁止用登录密码推代码，需使用 **Personal Access Token（classic）**，并勾选：

- `repo`
- `workflow`（本仓库含 `.github/workflows`，必须勾选）

```bash
cd interview-blog

git add .
git commit -m "chore: update site"
git branch -M main

# 仅第一次需要配置 remote
git remote add origin https://github.com/hekaixian/interview-blog.git

git push -u origin main
```

提示输入时：


| 项        | 填写                            |
| -------- | ----------------------------- |
| Username | GitHub 用户名                    |
| Password | Personal Access Token（不是登录密码） |


若弹窗登录失败，可关闭 GUI 凭据提示，改用命令行输入：

```bash
git config --global credential.guiPrompt false
git config --global credential.interactive terminal
```



### 2. 开启 GitHub Pages

1. 打开仓库 **Settings → Pages**
2. **Build and deployment → Source** 选择 **GitHub Actions**



### 3. 确认 Actions 权限

1. **Settings → Actions → General**
2. **Workflow permissions** 选择 **Read and write permissions**
3. 保存



### 4. 查看部署

1. 打开仓库 **Actions**
2. 等待工作流 **Deploy VitePress site to Pages** 成功（绿色）
3. 访问：[https://hekaixian.github.io/interview-blog/](https://hekaixian.github.io/interview-blog/)

说明：`base` 已配置为 `/interview-blog/`，与 GitHub 项目站路径一致。

### 5. 日常更新

```bash
git add .
git commit -m "docs: update articles"
git push
```

推送到 `main` 后，Actions 会自动重新构建并发布。

## 常见问题


| 问题                        | 处理                                         |
| ------------------------- | ------------------------------------------ |
| 本地打开无样式 / 404             | 必须访问带 `/interview-blog/` 的地址               |
| `git push` 提示密码不可用        | Password 处填 Token，不要填登录密码                  |
| 推送拒绝更新 `deploy.yml`       | Token 需勾选 `workflow` 权限                    |
| Actions 报 Pages Not Found | Settings → Pages → Source 选 GitHub Actions |
| 侧边栏不更新                    | 新增/删除 md 后重启 `npm run docs:dev`            |




## License

私有学习笔记项目，仅供个人使用。
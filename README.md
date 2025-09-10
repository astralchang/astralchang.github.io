# 个人博客静态网站 - 项目 README.md

## 一、项目信息
### 1. 项目名称

| 项目名称     | 新手友好型个人博客（Simple Personal Blog for Beginners） |
| ------------ | -------------------------------------------------------- |
| 开发周期     | 2025年9月7日 - 2025年9月11日                             |
| 线上部署地址 | https://astralchang.github.io/                           |
| 核心技术栈   | HTML5+CSS3+JavaScript+Bootstrap 5+Git+GitHub Pages       |

### 2. 项目主题
一个面向刚入门Web开发的静态个人博客网站，支持展示文章列表、文章详情、个人介绍、登录表单等基础功能，重点覆盖Web前端核心技术与工具链，帮助新手快速掌握“开发→部署”全流程。

### 3. 开发周期
1.   2025.9.7 - 2025.9.11

### 4. 核心功能
| 功能模块     | 描述                                                                                 | 截图标注（文字说明）                                                              |
| ------------ | ------------------------------------------------------------------------------------ | --------------------------------------------------------------------------------- |
| 响应式导航栏 | 支持PC端横向展示、移动端折叠为汉堡菜单，包含“首页、文章列表、关于我、登录”4个导航项  | 顶部导航栏：PC端显示完整菜单，移动端点击汉堡图标弹出菜单（适配≤768px屏幕）        |
| 首页轮播图   | 自动播放+手动切换，展示3张博客主题图片（如“技术分享”“生活记录”“学习笔记”）           | 首页中部轮播区：带指示器（小圆点）和左右切换按钮，鼠标悬停暂停播放                |
| 文章列表     | 动态渲染5篇博客文章卡片，包含标题、摘要、发布时间、阅读量，支持点击进入详情页        | 轮播图下方：2列网格布局（平板）/1列布局（移动端）/3列布局（PC端），卡片带阴影效果 |
| 登录表单     | 包含用户名、密码输入框，实现格式验证（用户名非空、密码≥6位），支持本地存储记住用户名 | 登录页：输入错误时边框变红+文字提示，勾选“记住我”后刷新页面保留用户名             |
| 关于我页面   | 展示个人简介、技术栈图标（HTML/CSS/JS/Bootstrap）、联系方式（模拟）                  | 页面主体：左侧个人头像，右侧文字介绍，底部图标横向排列，适配所有屏幕尺寸          |


## 二、技术栈清单
| 技术/工具           | 应用场景（对应任务书技术模块）                                                                                                                                                                                     | 新手友好点                                                              |
| ------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ----------------------------------------------------------------------- |
| HTML5               | 1. 语义化标签：`header`（导航栏）、`main`（主体）、`section`（文章区）、`footer`（底部）、`form`（登录表单）<br>2. 新特性：`input type="password"`（密码框）、`figure+figcaption`（关于页头像+说明）               | 标签含义直观，避免全用`div`，结构清晰易维护                             |
| CSS3                | 1. 基础样式：`font`（统一字体为“微软雅黑”）、`background`（首页渐变背景`linear-gradient`）<br>2. 美化：`border-radius`（卡片圆角）、`box-shadow`（卡片阴影）<br>3. 响应式：依赖Bootstrap网格，无需手写复杂`@media` | 大部分样式通过Bootstrap类实现，仅自定义少量样式（如卡片阴影、渐变背景） |
| JavaScript          | 1. 交互：轮播图控制、表单验证、文章列表动态渲染<br>2. DOM操作：`querySelector`选元素、`classList`切换样式<br>3. 本地存储：`localStorage`保存记住的用户名                                                           | 代码分模块编写（如`login.js`处理登录逻辑），关键步骤带注释              |
| Bootstrap 5         | 1. 布局：`container`（固定宽度容器）、`row/col-*`（网格布局）<br>2. 组件：`Navbar`（导航栏）、`Carousel`（轮播图）、`Card`（文章卡片）、`Form`（登录表单）<br>3. 引入方式：CDN（无需本地下载文件）                 | 直接使用预定义类（如`btn`按钮、`card`卡片），大幅减少CSS代码量          |
| Git                 | 1. 版本控制：5次关键提交（初始化项目→完成首页→完成文章列表→完成登录页→修复表单bug）<br>2. 命令：`git init`（初始化）、`git add .`（添加文件）、`git commit -m "备注"`（提交）                                      | 提交备注清晰，新手可按步骤执行命令，避免一次性提交所有代码              |
| GitHub/GitHub Pages | 1. 远程仓库：存储代码<br>2. 部署：通过GitHub Pages免费上线，生成可公开访问的网址                                                                                                                                   | 部署步骤简单，无需购买服务器，上线后可分享给他人查看                    |


## 三、文件目录结构（严格遵循任务书开发规范）
```
dazuoye_blog/  # 项目根目录
├─ index.html          # 首页（入口页面）
├─ article-list.html   # 文章列表页
├─ article-detail.html # 文章详情页（1篇示例文章）
├─ about.html          # 关于我页面
├─ login.html          # 登录页
├─ README.md           # 项目说明文档（当前文件）
├─ css/                # 样式文件目录
│  ├─ base.css         # 基础样式（重置浏览器默认样式、定义全局CSS变量）
│  ├─ common.css       # 公共样式（导航栏、页脚、按钮通用样式）
│  └─ page/            # 页面专属样式
│     ├─ index.css     # 首页样式（轮播图间距、渐变背景）
│     └─ login.css     # 登录页样式（表单居中、错误提示颜色）
├─ js/                 # 脚本文件目录
│  ├─ common.js        # 公共函数（表单验证函数、本地存储工具函数）
│  └─ page/            # 页面专属脚本
│     ├─ index.js      # 首页脚本（轮播图控制、导航栏折叠）
│     └─ login.js      # 登录页脚本（表单验证、记住用户名逻辑）
├─ assets/             # 资源文件目录
│  ├─ images/          # 图片资源
│  │  ├─ banner/       # 轮播图图片（banner1.jpg、banner2.jpg、banner3.jpg）
│  │  ├─ avatar/       # 个人头像（avatar.jpg）
│  │  └─ articles/     # 文章封面图（article1.jpg~article5.jpg）
│  └─ icons/           # 图标资源（Font Awesome CDN引入，本地无需存放）
└─ lib/                # 第三方库目录（Bootstrap通过CDN引入，本地无需存放）
```


## 四、核心功能实现（新手可直接复用的代码）
### 1. 响应式导航栏（基于Bootstrap 5）
#### 需求
- PC端（≥1200px）显示完整导航项，移动端（≤768px）折叠为汉堡菜单
- 点击汉堡图标弹出菜单，点击导航项跳转对应页面

#### 实现思路
1. 使用Bootstrap的`Navbar`组件，通过`navbar-expand-lg`控制折叠 breakpoint（≥992px时展开，新手可简化为`navbar-expand-md`适配768px）
2. 导航项用`nav-item`+`nav-link`类，汉堡按钮用`navbar-toggler`

#### 代码片段（index.html 导航栏部分）
```html
<header class="navbar navbar-light bg-white shadow-sm">
  <div class="container">
    <!-- 博客标题 -->
    <a class="navbar-brand" href="index.html">我的小博客</a>
    <!-- 移动端汉堡按钮 -->
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
      <span class="navbar-toggler-icon"></span>
    </button>
    <!-- 导航菜单（折叠部分） -->
    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav ms-auto"> <!-- ms-auto：右对齐 -->
        <li class="nav-item"><a class="nav-link active" href="index.html">首页</a></li>
        <li class="nav-item"><a class="nav-link" href="article-list.html">文章列表</a></li>
        <li class="nav-item"><a class="nav-link" href="about.html">关于我</a></li>
        <li class="nav-item"><a class="nav-link" href="login.html">登录</a></li>
      </ul>
    </div>
  </div>
</header>
<!-- 引入Bootstrap JS（必须，否则折叠功能无效） -->
<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.bundle.min.js"></script>
```


### 2. 登录表单验证（JavaScript+本地存储）
#### 需求
- 用户名不能为空，密码长度≥6位
- 输入错误时显示红色提示文字，输入正确后提示消失
- 勾选“记住我”时，用`localStorage`保存用户名，刷新页面后自动填充

#### 实现思路
1. 在`common.js`中定义通用表单验证函数`validateForm`
2. 在`login.js`中绑定表单提交事件，调用验证函数
3. 验证通过后，判断是否勾选“记住我”，决定是否存储用户名

#### 代码片段（js/common.js）
```javascript
/**
 * 表单验证函数
 * @param {string} username - 用户名
 * @param {string} password - 密码
 * @returns {object} {isValid: 布尔值, message: 提示信息}
 */
function validateForm(username, password) {
  if (!username.trim()) {
    return { isValid: false, message: "用户名不能为空！" };
  }
  if (password.length < 6) {
    return { isValid: false, message: "密码长度不能少于6位！" };
  }
  return { isValid: true, message: "验证通过！" };
}

/**
 * 本地存储工具函数 - 保存数据
 * @param {string} key - 存储键名
 * @param {string} value - 存储值
 */
function setLocalStorage(key, value) {
  localStorage.setItem(key, value);
}

/**
 * 本地存储工具函数 - 获取数据
 * @param {string} key - 存储键名
 * @returns {string|null} 存储值（无则返回null）
 */
function getLocalStorage(key) {
  return localStorage.getItem(key);
}
```

#### 代码片段（js/page/login.js）
```javascript
// 页面加载完成后执行
document.addEventListener("DOMContentLoaded", function () {
  // 获取表单元素
  const loginForm = document.getElementById("loginForm");
  const usernameInput = document.getElementById("username");
  const passwordInput = document.getElementById("password");
  const rememberMe = document.getElementById("rememberMe");
  const errorMsg = document.getElementById("errorMsg");

  // 页面加载时，自动填充记住的用户名
  const savedUsername = getLocalStorage("blogUsername");
  if (savedUsername) {
    usernameInput.value = savedUsername;
    rememberMe.checked = true; // 勾选“记住我”
  }

  // 绑定表单提交事件
  loginForm.addEventListener("submit", function (e) {
    e.preventDefault(); // 阻止表单默认提交行为
    const username = usernameInput.value;
    const password = passwordInput.value;

    // 调用验证函数
    const validationResult = validateForm(username, password);
    if (!validationResult.isValid) {
      // 验证失败：显示错误提示，输入框变红
      errorMsg.textContent = validationResult.message;
      errorMsg.style.color = "red";
      usernameInput.style.borderColor = "red";
      passwordInput.style.borderColor = "red";
    } else {
      // 验证成功：提示成功，输入框恢复正常
      errorMsg.textContent = validationResult.message;
      errorMsg.style.color = "green";
      usernameInput.style.borderColor = "#ced4da"; // Bootstrap默认边框色
      passwordInput.style.borderColor = "#ced4da";

      // 记住用户名（勾选时存储）
      if (rememberMe.checked) {
        setLocalStorage("blogUsername", username);
      } else {
        localStorage.removeItem("blogUsername"); // 取消勾选则删除
      }

      // 模拟登录成功，2秒后跳转到首页
      setTimeout(() => {
        window.location.href = "index.html";
      }, 2000);
    }
  });
});
```


### 3. 文章列表动态渲染（JavaScript+Bootstrap网格）
#### 需求
- 从模拟数据（数组）中读取5篇文章信息
- 动态生成文章卡片，用Bootstrap网格布局适配不同屏幕
- 卡片包含“标题、封面图、摘要、发布时间、阅读量”

#### 实现思路
1. 定义文章模拟数据（标题、封面图路径、摘要等）
2. 遍历数组，用`document.createElement`创建卡片元素
3. 将卡片添加到页面的网格容器中

#### 代码片段（js/page/article-list.js）
```javascript
document.addEventListener("DOMContentLoaded", function () {
  // 1. 模拟文章数据（实际项目可从后端获取，新手先用静态数组）
  const articles = [
    {
      id: 1,
      title: "第一次用Bootstrap做响应式页面，太香了！",
      cover: "../assets/images/articles/article1.jpg",
      summary: "以前手写@media查询适配不同屏幕，现在用Bootstrap的col类，1行代码搞定布局...",
      date: "2025-08-30",
      viewCount: 128
    },
    {
      id: 2,
      title: "JavaScript表单验证入门：3步实现用户名密码校验",
      cover: "../assets/images/articles/article2.jpg",
      summary: "新手学表单验证，重点掌握3个点：获取输入值、判断规则、显示提示信息...",
      date: "2025-08-31",
      viewCount: 95
    },
    // 此处省略3篇文章数据（id3~id5，结构同上）
  ];

  // 2. 获取文章列表容器（HTML中需有<div class="row" id="articleContainer"></div>）
  const articleContainer = document.getElementById("articleContainer");

  // 3. 遍历数组，动态生成卡片
  articles.forEach(article => {
    // 创建卡片元素（Bootstrap Card组件结构）
    const card = document.createElement("div");
    card.className = "col-md-6 col-lg-4 mb-4"; // 网格布局：PC端3列、平板2列、移动端1列

    // 卡片内容（使用模板字符串，新手易理解）
    card.innerHTML = `
      <div class="card h-100 shadow"> <!-- h-100：卡片高度一致；shadow：阴影 -->
        <img src="${article.cover}" class="card-img-top" alt="${article.title}">
        <div class="card-body">
          <h5 class="card-title">${article.title}</h5>
          <p class="card-text text-muted">${article.summary}</p>
        </div>
        <div class="card-footer bg-transparent d-flex justify-content-between align-items-center">
          <small class="text-muted">${article.date}</small>
          <small class="text-muted"><i class="bi bi-eye"></i> ${article.viewCount}</small>
        </div>
        <!-- 点击卡片跳转详情页（传递文章id，新手可简化为固定详情页） -->
        <a href="article-detail.html?id=${article.id}" class="stretched-link"></a>
      </div>
    `;

    // 将卡片添加到容器中
    articleContainer.appendChild(card);
  });
});
```


## 五、开发流程（新手 step-by-step 指南）
### 1. 环境准备（1天）
1. **安装工具**
   - 编辑器：下载 [VS Code](https://code.visualstudio.com/)（免费，新手友好）
   - 插件：在VS Code中安装“Live Server”（右键点击HTML文件可实时预览页面）、“Prettier”（自动格式化代码）
   - 版本控制：下载 [Git](https://git-scm.com/)（安装时全部选默认选项即可）

2. **创建项目文件夹**
   - 在电脑桌面新建文件夹，命名为“simple-personal-blog”
   - 用VS Code打开该文件夹（文件→打开文件夹）


### 2. 需求分析与设计（1天）
1. **需求确定**：明确做“个人博客”，包含5个页面（首页、文章列表、文章详情、关于我、登录）
2. **色彩方案**：主色调（#165DFF，蓝色，用于导航栏、按钮）、辅助色（#6C757D，灰色，用于文本）、背景色（#F8F9FA，浅灰，用于页面背景）
3. **技术选型**：优先用Bootstrap组件减少CSS代码，JavaScript只写核心交互（表单验证、动态渲染）


### 3. 编码实现（4天）
| 天数  | 任务内容                                                                       | 关键提示                                                                                  |
| ----- | ------------------------------------------------------------------------------ | ----------------------------------------------------------------------------------------- |
| 第1天 | 搭建文件目录+完成首页（导航栏、轮播图）                                        | 先写HTML结构，再引入Bootstrap CDN，最后用CSS微调样式（如轮播图高度）                      |
| 第2天 | 完成文章列表页+文章详情页（静态内容）                                          | 动态渲染用JavaScript数组，详情页可先写1篇固定文章（无需动态获取id）                       |
| 第3天 | 完成登录页（表单+验证）+关于我页面（静态内容）                                 | 本地存储测试：输入用户名后刷新页面，看是否能保留（F12→Application→Local Storage）         |
| 第4天 | 统一样式（修改base.css、common.css）+修复bug（如导航栏跳转错误、表单验证失效） | 用“Live Server”预览不同屏幕尺寸（右键→Open with Live Server→按F12→Toggle Device Toolbar） |


### 4. Git版本控制（穿插在编码过程中）
1. **初始化仓库**：打开VS Code终端（菜单栏→终端→新建终端），输入以下命令：
   ```bash
   git init  # 初始化本地Git仓库
   git config --global user.name "你的GitHub用户名"  # 配置Git用户名（仅首次使用需配置）
   git config --global user.email "你的GitHub邮箱"    # 配置Git邮箱（仅首次使用需配置）
   ```

2. **5次关键提交（示例）**：
   ```bash
   # 提交1：初始化项目（创建目录、base.css、index.html）
   git add .  # 添加所有文件
   git commit -m "init: 搭建项目目录，创建base.css和index.html"

   # 提交2：完成首页（导航栏、轮播图）
   git add .
   git commit -m "feat: 完成首页导航栏和轮播图（Bootstrap组件）"

   # 提交3：完成文章列表页（动态渲染）
   git add .
   git commit -m "feat: 文章列表页动态渲染5篇文章卡片"

   # 提交4：完成登录页（表单验证+本地存储）
   git add .
   git commit -m "feat: 登录页实现表单验证，支持本地存储用户名"

   # 提交5：修复bug（导航栏移动端不折叠、表单提示文字错位）
   git add .
   git commit -m "fix: 修复导航栏折叠失效和表单提示文字样式问题"
   ```


### 5. 部署上线（1天，GitHub Pages）
1. **创建GitHub仓库**
   - 注册 [GitHub](https://github.com/) 账号（免费）
   - 点击右上角“+”→“New repository”，填写仓库信息：
     - Repository name：必须为“你的GitHub用户名.github.io”（如“zhangsan.github.io”，否则无法直接访问）
     - Description：填写“新手个人博客静态网站”
     - 勾选“Public”（公开仓库，免费）
     - 点击“Create repository”

2. **关联本地仓库与远程仓库**
   - 在GitHub仓库页面复制“HTTPS”地址（如“https://github.com/zhangsan/zhangsan.github.io.git”）
   - 在VS Code终端输入以下命令（替换为你的仓库地址）：
     ```bash
     git remote add origin https://github.com/你的用户名/你的用户名.github.io.git
     ```

3. **推送代码到GitHub**
   ```bash
   git push -u origin main  # 首次推送需输入GitHub账号密码（或使用令牌，新手按提示操作即可）
   ```

4. **开启GitHub Pages**
   - 进入GitHub仓库→点击“Settings”→下滑找到“Pages”→“Source”选择“main”分支→点击“Save”
   - 等待1-5分钟，刷新页面，会显示“Your site is live at https://你的用户名.github.io/”（复制该地址，即可在浏览器访问你的博客）


## 六、AI编程辅助记录（3次典型场景）
| 场景序号 | 问题描述（新手提问）                                                         | AI回答核心（简化版）                                                                  | 人工调整（新手需做的修改）                                                                                      |
| -------- | ---------------------------------------------------------------------------- | ------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------- |
| 1        | “如何用Bootstrap 5做一个响应式导航栏，移动端能折叠？”                        | 提供Navbar组件完整代码，包含`navbar-toggler`、`collapse`类，引入Bootstrap CSS和JS CDN | 1. 将导航项改为“首页、文章列表、关于我、登录”<br>2. 新增博客标题（`navbar-brand`）<br>3. 调整导航栏背景色为白色 |
| 2        | “写一个JavaScript函数，验证用户名不能为空、密码≥6位，返回验证结果和提示信息” | 提供`validateForm`函数，参数为username和password，返回`{isValid, message}`对象        | 1. 将函数放到`common.js`中，便于复用<br>2. 新增`setLocalStorage`和`getLocalStorage`工具函数                     |
| 3        | “如何把本地的静态博客部署到GitHub Pages，让别人能访问？”                     | 步骤：创建GitHub仓库（命名为“用户名.github.io”）→关联本地仓库→推送代码→开启Pages      | 1. 修正仓库命名错误（新手易漏写“github.io”）<br>2. 补充“等待1-5分钟生效”的提示<br>3. 说明如何查看上线地址       |


## 七、问题与解决（新手常见坑）
### 1. Bootstrap导航栏在移动端不折叠
- **问题现象**：点击汉堡图标，菜单不弹出
- **原因**：未引入Bootstrap的JS文件（折叠功能依赖JS）
- **解决方法**：在HTML文件底部添加Bootstrap JS CDN链接（必须在导航栏代码之后）：
  ```html
  <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.bundle.min.js"></script>
  ```


### 2. Git提交时提示“git: command not found”
- **问题现象**：在VS Code终端输入`git`命令，提示“不是内部或外部命令”
- **原因**：Git安装时未勾选“Add Git to PATH”（环境变量）
- **解决方法**：
  1. 卸载Git
  2. 重新安装，在“Select Components”步骤中，勾选“Add Git Bash Here”和“Add Git to system PATH”
  3. 重启VS Code，重新打开终端


### 3. 本地存储的用户名在刷新后不显示
- **问题现象**：勾选“记住我”登录后，刷新页面，用户名输入框为空
- **原因**：页面加载时未调用`getLocalStorage`读取数据
- **解决方法**：在`login.js`的`DOMContentLoaded`事件中，添加读取本地存储的代码（参考本文“登录表单验证”部分的代码）


## 八、优化方向（后续可扩展）
1. **功能扩展**：
   - 新增“文章分类”（如“技术”“生活”），点击分类筛选文章
   - 实现“文章评论”功能，用`localStorage`保存评论内容
   - 添加“回到顶部”按钮（用JavaScript的`window.scrollTo`）

2. **性能优化**：
   - 图片格式转为WebP（体积比JPG小50%，用[在线工具](https://squoosh.app/)转换）
   - 实现图片懒加载（用Bootstrap的`img-fluid lazyload`类）

3. **样式优化**：
   - 用CSS变量统一主题色（在`base.css`中定义`--primary-color: #165DFF`，后续样式用`var(--primary-color)`）
   - 新增页面切换动画（用CSS的`transition`或Bootstrap的`fade`类）


## 九、参考文献
1. Bootstrap 5 官方文档（新手友好，有示例代码）：[https://getbootstrap.com/docs/5.3/getting-started/introduction/](https://getbootstrap.com/docs/5.3/getting-started/introduction/)
2. Git 新手教程（图文步骤）：[https://www.liaoxuefeng.com/wiki/896043488029600](https://www.liaoxuefeng.com/wiki/896043488029600)
3. GitHub Pages 部署指南：[https://docs.github.com/cn/pages/getting-started-with-github-pages/creating-a-github-pages-site](https://docs.github.com/cn/pages/getting-started-with-github-pages/creating-a-github-pages-site)
4. JavaScript 基础语法（MDN 官方教程）：[https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Guide](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Guide)
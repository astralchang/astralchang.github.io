document.addEventListener("DOMContentLoaded", function () {
    // 模拟文章数据（实际项目可从后端获取，新手先用静态数组）
    const articles = [
        {
            id: 1,
            title: "第一次用Bootstrap做响应式页面，太香了！",
            cover: "assets/images/articles/article1.png",
            summary: "以前手写@media查询适配不同屏幕，现在用Bootstrap的col类，1行代码搞定布局...",
            date: "2025-08-30",
            viewCount: 128
        },
        {
            id: 2,
            title: "JavaScript表单验证入门：3步实现用户名密码校验",
            cover: "assets/images/articles/article2.png",
            summary: "新手学表单验证，重点掌握3个点：获取输入值、判断规则、显示提示信息...",
            date: "2025-08-31",
            viewCount: 95
        },
        {
            id: 3,
            title: "CSS Grid布局详解：从入门到精通",
            cover: "assets/images/articles/article3.png",
            summary: "Grid布局是CSS中最强大的布局系统之一，本文将详细介绍其使用方法和实际应用...",
            date: "2025-09-01",
            viewCount: 87
        },
        {
            id: 4,
            title: "Vue 3 Composition API实战教程",
            cover: "assets/images/articles/article4.png",
            summary: "Vue 3带来了Composition API，提供了更灵活的组件组织方式，让代码更易维护...",
            date: "2025-09-02",
            viewCount: 142
        },
        {
            id: 5,
            title: "Node.js后端开发入门指南",
            cover: "assets/images/articles/article5.png",
            summary: "Node.js让JavaScript可以运行在服务器端，本文将带你从零开始搭建后端服务...",
            date: "2025-09-03",
            viewCount: 105
        }
    ];

    // 获取文章列表容器
    const articleContainer = document.getElementById("articleContainer");

    // 只显示前3篇文章在首页
    const homeArticles = articles.slice(0, 3);

    // 遍历数组，动态生成卡片
    homeArticles.forEach(article => {
        // 创建卡片元素（Bootstrap Card组件结构）
        const card = document.createElement("div");
        card.className = "col-md-4 mb-4";

        // 卡片内容（使用模板字符串，新手易理解）
        card.innerHTML = `
            <div class="card article-card h-100 shadow">
                <img src="${article.cover}" class="card-img-top" alt="${article.title}">
                <div class="card-body">
                    <h5 class="card-title">${article.title}</h5>
                    <p class="card-text text-muted">${article.summary}</p>
                </div>
                <div class="card-footer bg-transparent d-flex justify-content-between align-items-center">
                    <small class="text-muted">${article.date}</small>
                    <small class="text-muted"><i class="bi bi-eye"></i> ${article.viewCount}</small>
                </div>
                <!-- 点击卡片跳转详情页 -->
                <a href="article-detail.html?id=${article.id}" class="stretched-link"></a>
            </div>
        `;

        // 将卡片添加到容器中
        articleContainer.appendChild(card);
    });
});
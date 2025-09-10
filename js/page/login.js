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
        rememberMe.checked = true; // 勾选"记住我"
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
                removeLocalStorage("blogUsername"); // 取消勾选则删除
            }

            // 模拟登录成功，2秒后跳转到首页
            setTimeout(() => {
                window.location.href = "index.html";
            }, 2000);
        }
    });
});
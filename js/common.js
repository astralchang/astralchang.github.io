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

/**
 * 本地存储工具函数 - 删除数据
 * @param {string} key - 存储键名
 */
function removeLocalStorage(key) {
    localStorage.removeItem(key);
}
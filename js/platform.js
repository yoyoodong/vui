/**
 * 平台详情页脚本
 * @description 处理平台详情页的内容展示和标签切换
 */

// 等待DOM加载完成
document.addEventListener('DOMContentLoaded', () => {
    // 从URL获取平台ID
    const urlParams = new URLSearchParams(window.location.search);
    const platformId = urlParams.get('id');
    
    if (!platformId) {
        // 如果没有找到平台ID，跳转回首页
        window.location.href = '../index.html';
        return;
    }
    
    // 获取平台数据
    const platform = getPlatformById(platformId);
    
    if (!platform) {
        // 如果平台不存在，显示错误信息并提供返回首页链接
        document.querySelector('main .container').innerHTML = `
            <div class="error-message">
                <h2>未找到平台信息</h2>
                <p>抱歉，未能找到您请求的平台信息。</p>
                <a href="../index.html" class="back-link">返回首页</a>
            </div>
        `;
        return;
    }
    
    // 初始化平台信息
    initPlatformInfo(platform);
    
    // 初始化内容标签
    initContentTabs(platform);
    
    // 初始化搜索功能
    initSearch();
});

/**
 * 初始化平台基本信息
 * @param {Object} platform - 平台对象
 */
function initPlatformInfo(platform) {
    // 设置页面标题
    document.title = `${platform.name} - 语音交互设计规范助手`;
    
    // 设置面包屑信息
    const categoryLink = document.getElementById('categoryLink');
    const platformName = document.getElementById('platformName');
    
    if (categoryLink && platformName) {
        const categoryText = platform.category === 'international' ? '国际平台' : '国内平台';
        const categoryUrl = `../index.html#${platform.category}`;
        
        categoryLink.textContent = categoryText;
        categoryLink.href = categoryUrl;
        platformName.textContent = platform.name;
    }
    
    // 设置平台头部信息
    const platformLogo = document.getElementById('platformLogo');
    const platformTitle = document.getElementById('platformTitle');
    const platformDescription = document.getElementById('platformDescription');
    const officialLink = document.getElementById('officialLink');
    const updateDate = document.getElementById('updateDate');
    
    if (platformLogo) platformLogo.src = '../' + platform.logo;
    if (platformTitle) platformTitle.textContent = platform.name;
    if (platformDescription) platformDescription.textContent = platform.description;
    if (officialLink) {
        officialLink.href = platform.officialLink;
        officialLink.setAttribute('target', '_blank');
    }
    if (updateDate) updateDate.textContent = platform.updateDate;
}

/**
 * 初始化内容标签
 * @param {Object} platform - 平台对象
 */
function initContentTabs(platform) {
    // 获取内容容器
    const guidelinesContent = document.getElementById('guidelinesContent');
    const suggestionsContent = document.getElementById('suggestionsContent');
    const keypointsContent = document.getElementById('keypointsContent');
    
    // 填充内容
    if (guidelinesContent) {
        renderSectionContent(platform.guidelines, guidelinesContent);
    }
    
    if (suggestionsContent) {
        renderSectionContent(platform.suggestions, suggestionsContent);
    }
    
    if (keypointsContent) {
        renderSectionContent(platform.keypoints, keypointsContent);
    }
    
    // 设置标签切换事件
    const tabButtons = document.querySelectorAll('.tab-btn');
    tabButtons.forEach(button => {
        button.addEventListener('click', () => {
            // 移除所有标签和内容的active类
            tabButtons.forEach(btn => btn.classList.remove('active'));
            document.querySelectorAll('.tab-content').forEach(content => {
                content.classList.remove('active');
            });
            
            // 添加当前标签和内容的active类
            button.classList.add('active');
            const tabId = button.getAttribute('data-tab');
            document.getElementById(tabId).classList.add('active');
        });
    });
}

/**
 * 渲染部分内容
 * @param {Array} sectionItems - 部分内容项
 * @param {HTMLElement} container - 容器元素
 */
function renderSectionContent(sectionItems, container) {
    // 如果没有内容，显示空提示
    if (!sectionItems || sectionItems.length === 0) {
        container.innerHTML = '<p class="empty-message">暂无内容，敬请期待更新。</p>';
        return;
    }
    
    // 构建HTML内容
    let html = '';
    
    sectionItems.forEach(item => {
        html += `<div class="content-item">
            <h4>${item.title}</h4>
            <ul>
                ${item.content.map(text => `<li>${text}</li>`).join('')}
            </ul>
        </div>`;
    });
    
    container.innerHTML = html;
}

/**
 * 初始化搜索功能
 * @description 设置搜索按钮和输入框的事件监听
 */
function initSearch() {
    const searchInput = document.getElementById('searchInput');
    const searchBtn = document.getElementById('searchBtn');
    
    // 搜索按钮点击事件
    if (searchBtn && searchInput) {
        searchBtn.addEventListener('click', () => {
            handleSearch(searchInput.value);
        });
        
        // 输入框回车事件
        searchInput.addEventListener('keypress', (e) => {
            if (e.key === 'Enter') {
                handleSearch(searchInput.value);
            }
        });
    }
}

/**
 * 处理搜索请求
 * @param {string} keyword - 搜索关键词
 */
function handleSearch(keyword) {
    if (keyword.trim() === '') return;
    
    // 获取当前平台ID
    const urlParams = new URLSearchParams(window.location.search);
    const platformId = urlParams.get('id');
    
    // 跳转到搜索结果页
    window.location.href = `search.html?keyword=${encodeURIComponent(keyword)}&platform=${platformId || ''}`;
} 
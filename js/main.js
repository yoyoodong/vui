/**
 * 主页脚本
 * @description 处理主页的平台卡片生成和搜索功能
 */

// 等待DOM加载完成
document.addEventListener('DOMContentLoaded', () => {
    // 初始化平台卡片
    initPlatformCards();

    // 初始化全局筛选功能
    initGlobalPlatformFilter();

    // 初始化搜索功能
    initSearch();
});

/**
 * 初始化平台卡片
 * @description 在主页生成国际平台和国内平台的卡片
 */
function initPlatformCards() {
    // 生成国际平台卡片
    const internationalPlatforms = getPlatformsByCategory('international');
    const internationalContainer = document.getElementById('internationalPlatforms');
    
    if (internationalContainer) {
        if (internationalPlatforms && internationalPlatforms.length > 0) {
            renderPlatformCards(internationalPlatforms, internationalContainer);
        } else {
            internationalContainer.innerHTML = '<p style="padding: 20px; text-align: center; color: var(--medium-gray);">未能加载国际平台数据，或数据为空。</p>';
        }
    }

    // 生成国内平台卡片
    const domesticPlatforms = getPlatformsByCategory('domestic');
    const domesticContainer = document.getElementById('domesticPlatforms');
    
    if (domesticContainer) {
        if (domesticPlatforms && domesticPlatforms.length > 0) {
            renderPlatformCards(domesticPlatforms, domesticContainer);
        } else {
            domesticContainer.innerHTML = '<p style="padding: 20px; text-align: center; color: var(--medium-gray);">未能加载国内平台数据，或数据为空。</p>';
        }
    }
}

/**
 * 渲染平台卡片
 * @param {Array} platformsList - 平台列表
 * @param {HTMLElement} container - 容器元素
 */
function renderPlatformCards(platformsList, container) {
    platformsList.forEach(platform => {
        const card = createPlatformCard(platform);
        container.appendChild(card);
    });
}

/**
 * 创建平台卡片元素
 * @param {Object} platform - 平台对象
 * @returns {HTMLElement} 卡片元素
 */
function createPlatformCard(platform) {
    const card = document.createElement('div');
    card.className = 'platform-card';
    card.setAttribute('data-platform-id', platform.id);
    
    // 卡片HTML结构
    card.innerHTML = `
        <div class="platform-logo">
            <img src="${platform.logo}" alt="${platform.name} Logo">
        </div>
        <div class="platform-info">
            <h3>${platform.name}</h3>
            <p>${platform.description}</p>
        </div>
    `;
    
    // 添加点击事件 - 跳转到平台详情页
    card.addEventListener('click', () => {
        window.location.href = `pages/platform.html?id=${platform.id}`;
    });
    
    return card;
}

/**
 * 初始化全局平台筛选功能
 * @description 监听全局筛选按钮点击，同时过滤国内和国际平台卡片
 */
function initGlobalPlatformFilter() {
    const globalFilter = document.getElementById('globalFilter');
    if (globalFilter) {
        globalFilter.addEventListener('click', (e) => {
            if (e.target.classList.contains('filter-btn')) {
                setActiveFilterBtn(globalFilter, e.target);
                const tag = e.target.dataset.tag;
                filterPlatformsByTag(tag, 'domestic');
                filterPlatformsByTag(tag, 'international');
            }
        });
    }
}

/**
 * 设置当前激活的筛选按钮
 * @param {HTMLElement} filterContainer - 筛选按钮容器
 * @param {HTMLElement} activeBtn - 当前激活按钮
 */
function setActiveFilterBtn(filterContainer, activeBtn) {
    filterContainer.querySelectorAll('.filter-btn').forEach(btn => btn.classList.remove('active'));
    activeBtn.classList.add('active');
}

/**
 * 按标签筛选并渲染平台卡片
 * @param {string} tag - 筛选标签
 * @param {string} category - 平台类别
 */
function filterPlatformsByTag(tag, category) {
    let platforms = getPlatformsByCategory(category);
    if (tag !== 'all') {
        platforms = platforms.filter(p => Array.isArray(p.tags) && p.tags.includes(tag));
    }
    const container = document.getElementById(category === 'domestic' ? 'domesticPlatforms' : 'internationalPlatforms');
    if (container) {
        container.innerHTML = '';
        renderPlatformCards(platforms, container);
    }
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
    
    // 跳转到搜索结果页
    window.location.href = `pages/search.html?keyword=${encodeURIComponent(keyword)}`;
} 
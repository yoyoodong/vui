/**
 * 搜索页脚本
 * @description 处理搜索结果的展示和筛选
 */

// 存储搜索结果
let searchResults = [];
let currentKeyword = '';

// 等待DOM加载完成
document.addEventListener('DOMContentLoaded', () => {
    // 从URL获取搜索参数
    const urlParams = new URLSearchParams(window.location.search);
    const keyword = urlParams.get('keyword');
    const platformId = urlParams.get('platform') || null;
    
    if (!keyword) {
        // 如果没有关键词，跳转回首页
        window.location.href = '../index.html';
        return;
    }
    
    currentKeyword = keyword;
    
    // 设置搜索关键词显示
    const searchKeywordElement = document.getElementById('searchKeyword');
    if (searchKeywordElement) {
        searchKeywordElement.textContent = keyword;
    }
    
    // 在搜索框中预填充关键词
    const searchInput = document.getElementById('searchInput');
    if (searchInput) {
        searchInput.value = keyword;
    }
    
    // 执行搜索
    searchResults = searchSpecs(keyword, platformId);
    
    // 显示结果数量
    const resultCountElement = document.getElementById('resultCount');
    if (resultCountElement) {
        resultCountElement.textContent = searchResults.length;
    }
    
    // 初始化平台筛选选项
    initPlatformFilter(searchResults);
    
    // 渲染搜索结果
    renderSearchResults(searchResults);
    
    // 初始化搜索功能
    initSearch();
});

/**
 * 初始化平台筛选选项
 * @param {Array} results - 搜索结果
 */
function initPlatformFilter(results) {
    const platformFilter = document.getElementById('platformFilter');
    if (!platformFilter) return;
    
    // 获取所有出现在结果中的平台
    const platformIds = [...new Set(results.map(result => result.platformId))];
    
    // 添加平台选项
    platformIds.forEach(id => {
        const platform = getPlatformById(id);
        if (platform) {
            const option = document.createElement('option');
            option.value = id;
            option.textContent = platform.name;
            platformFilter.appendChild(option);
        }
    });
    
    // 添加筛选事件
    platformFilter.addEventListener('change', () => {
        const selectedPlatform = platformFilter.value;
        filterSearchResults(selectedPlatform);
    });
}

/**
 * 筛选搜索结果
 * @param {string} platformId - 平台ID ('all'表示所有平台)
 */
function filterSearchResults(platformId) {
    if (platformId === 'all') {
        // 显示所有结果
        renderSearchResults(searchResults);
    } else {
        // 筛选指定平台的结果
        const filteredResults = searchResults.filter(result => result.platformId === platformId);
        renderSearchResults(filteredResults);
        
        // 更新结果数量
        const resultCountElement = document.getElementById('resultCount');
        if (resultCountElement) {
            resultCountElement.textContent = filteredResults.length;
        }
    }
}

/**
 * 渲染搜索结果
 * @param {Array} results - 搜索结果
 */
function renderSearchResults(results) {
    const searchResultsContainer = document.getElementById('searchResults');
    if (!searchResultsContainer) return;
    
    // 如果没有结果
    if (results.length === 0) {
        searchResultsContainer.innerHTML = `
            <div class="no-results">
                <p>没有找到与"${currentKeyword}"相关的内容。</p>
                <p>建议：</p>
                <ul>
                    <li>检查您的拼写</li>
                    <li>尝试使用更通用的关键词</li>
                    <li>尝试使用与语音交互相关的术语</li>
                </ul>
            </div>
        `;
        return;
    }
    
    // 生成结果HTML
    let html = '';
    
    results.forEach(result => {
        html += `
            <div class="search-result-item">
                <div class="search-result-header">
                    <div class="search-result-platform">${result.platformName}</div>
                    <div class="search-result-module">${result.section}</div>
                </div>
                <div class="search-result-title">
                    <h3>${result.title}</h3>
                </div>
                <div class="search-result-excerpt">
                    ${result.matches.map(match => `<p>${match}</p>`).join('')}
                </div>
                <div class="search-result-link">
                    <a href="platform.html?id=${result.platformId}">查看详情</a>
                </div>
            </div>
        `;
    });
    
    searchResultsContainer.innerHTML = html;
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
    
    // 刷新页面进行新搜索
    window.location.href = `search.html?keyword=${encodeURIComponent(keyword)}`;
} 
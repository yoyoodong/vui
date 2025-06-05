/**
 * 语音交互设计规范数据
 * @description 包含各平台的基本信息和规范内容
 */
const platforms = {
    // 国际平台
    "amazon-alexa": {
        id: "amazon-alexa",
        name: "Amazon Alexa",
        category: "international",
        description: "Amazon Alexa是亚马逊开发的智能语音助手，广泛应用于Echo系列智能音箱和其他支持Alexa的第三方设备。",
        logo: "images/alexa-logo.svg", // 将在SVG部分设计
        officialLink: "https://developer.amazon.com/en-US/alexa/alexa-skills-kit",
        updateDate: "2025年5月10日",
        guidelines: [
            {
                title: "对话设计原则",
                content: [
                    "设计对话时应遵循自然、简洁、有帮助的原则。",
                    "用户说话停顿后，Alexa会认为用户已结束发言。应引导用户连续表达或使用明确的结束语。",
                    "为用户提供清晰的反馈，让他们知道系统当前状态和可执行的操作。",
                    "技能响应不应超过90秒，否则连接将自动断开。"
                ]
            },
            {
                title: "语音提示设计",
                content: [
                    "使用自然、对话式的语言，避免冗长或过于正式的表达。",
                    "避免使用技术术语或行业专用词汇，除非你确定目标用户熟悉这些术语。",
                    "针对不同场景设计变化的回复，避免重复相同的话语。",
                    "在提示语中加入针对性的引导，帮助用户了解可以说什么。"
                ]
            }
        ],
        suggestions: [
            {
                title: "错误处理策略",
                content: [
                    "设计对话时，考虑用户可能的停顿点，避免因过早结束识别导致体验不佳。",
                    "对于需要较长输入的场景，可提示用户'说完请告诉我'。",
                    "当用户请求不明确时，提供有引导性的回复，而不是简单地说'我没听懂'。",
                    "为常见的错误场景准备3-5种不同的回复，避免重复相同的错误提示。"
                ]
            },
            {
                title: "多轮对话设计",
                content: [
                    "在复杂任务中，将流程分解为简单步骤，每次只询问一个信息。",
                    "在多轮对话中，适当重复或总结已获取的信息，帮助用户确认。",
                    "提供清晰的退出机制，让用户随时可以结束当前任务。",
                    "考虑用户可能的意图切换，设计灵活的对话流程。"
                ]
            }
        ],
        keypoints: [
            {
                title: "Alexa技能设计核心理念",
                content: [
                    "以用户为中心：技能应解决真实用户问题，提供实际价值。",
                    "尊重用户时间：提供简洁、高效的交互，不浪费用户时间。",
                    "渐进式披露：分阶段提供信息和功能，避免一次性呈现过多内容。",
                    "多模态协同：在有屏幕设备上，语音与视觉内容应协同工作，相互补充。"
                ]
            },
            {
                title: "个性化与情境",
                content: [
                    "通过保存用户偏好和历史行为，提供个性化体验。",
                    "考虑用户可能的使用场景（如开车、做饭），优化相应的交互流程。",
                    "根据用户习惯调整交互方式，如熟练用户可能需要更简洁的交互。",
                    "利用Alexa的特性，如地理位置、时间等，提供情境相关的体验。"
                ]
            }
        ],
        tags: ["对话管理", "多模态", "语音合成"]
    },
    "google-assistant": {
        id: "google-assistant",
        name: "Google Assistant",
        category: "international",
        description: "Google Assistant是谷歌开发的智能语音助手，可用于手机、智能音箱、智能家居设备等多种平台。",
        logo: "images/google-assistant-logo.svg", // 将在SVG部分设计
        officialLink: "https://developers.google.cn/assistant/conversation-design/welcome",
        updateDate: "2025年5月10日",
        guidelines: [
            {
                title: "对话设计基础原则",
                content: [
                    "遵循人类对话模式，设计自然、有礼貌的对话。",
                    "避免过长的回复，保持消息简洁明了。",
                    "告知用户当前状态和下一步可执行的操作。",
                    "在设计中考虑多种用户输入方式，确保语音和触摸输入都能顺畅工作。"
                ]
            },
            {
                title: "用户引导与确认",
                content: [
                    "清晰地表达Assistant可以做什么，引导用户了解可用功能。",
                    "对于重要操作或不可逆操作，设计明确的确认步骤。",
                    "在引导用户时，提供具体示例，如'你可以说：播放周杰伦的歌'。",
                    "设计明确的方式让用户知道对话何时结束。"
                ]
            }
        ],
        suggestions: [
            {
                title: "语言表达建议",
                content: [
                    "使用自然、日常的表达方式，避免过于正式或机械的语言。",
                    "适当使用语气词和过渡词，增加对话的自然感。",
                    "避免使用技术术语或行业专用词汇，除非目标用户熟悉这些术语。",
                    "为语音回复设计不同变体，避免机器人般的重复回答。"
                ]
            },
            {
                title: "多设备适配建议",
                content: [
                    "设计时考虑不同设备的特性（如有屏幕与无屏幕设备）。",
                    "对于有屏幕的设备，设计语音和视觉内容的协同工作方式。",
                    "在不同设备间保持一致的体验和个性化设置。",
                    "为语音回复创建配套的视觉卡片，以增强用户理解。"
                ]
            }
        ],
        keypoints: [
            {
                title: "Google Assistant设计核心理念",
                content: [
                    "尊重用户：设计礼貌、尊重隐私的交互。",
                    "适应环境：考虑用户可能的使用场景，优化相应交互。",
                    "清晰透明：明确告知系统能力和限制，避免过度承诺。",
                    "渐进式披露：根据用户熟悉度和需求，逐步展示功能。"
                ]
            },
            {
                title: "错误恢复与补救",
                content: [
                    "设计明确的错误恢复路径，帮助用户解决问题。",
                    "当无法完成请求时，提供合理的替代方案。",
                    "使用多种识别和理解策略，提高操作成功率。",
                    "记录用户历史偏好，用于提高未来交互的准确性。"
                ]
            }
        ],
        tags: ["对话管理", "多模态", "语音合成"]
    },
    "apple-siri": {
        id: "apple-siri",
        name: "Apple Siri",
        category: "international",
        description: "Siri是苹果公司开发的智能语音助手，内置于iPhone、iPad、Mac、Apple Watch等苹果设备中。",
        logo: "images/siri-logo.svg", // 将在SVG部分设计
        officialLink: "https://developer.apple.com/cn/design/human-interface-guidelines/",
        updateDate: "2025年5月10日",
        guidelines: [
            {
                title: "应用集成设计原则",
                content: [
                    "创建与Siri集成的应用时，遵循简洁、直观、尊重用户的原则。",
                    "确保Siri快捷方式的命名简短且易于发音，避免使用特殊字符或过长名称。",
                    "为功能提供多种不同的唤起短语，适应不同用户的表达习惯。",
                    "设计语音反馈时，保持与应用整体风格的一致性。"
                ]
            },
            {
                title: "隐私与透明",
                content: [
                    "明确告知用户Siri请求将如何处理和使用相关数据。",
                    "避免在语音回复中包含敏感个人信息，除非必要且已获得用户许可。",
                    "提供清晰的方式让用户了解和控制Siri可访问的数据范围。",
                    "尊重用户设备设置的隐私偏好，如通知和定位服务等。"
                ]
            }
        ],
        suggestions: [
            {
                title: "SiriKit整合建议",
                content: [
                    "优先支持用户最常使用的核心功能，避免为所有功能创建语音快捷方式。",
                    "根据功能的复杂性选择合适的意图类型，简化用户交互流程。",
                    "测试不同的表达方式和语音指令，确保自然语言理解的准确性。",
                    "考虑在特定场景下（如驾驶、锻炼时）的使用需求，优化相应的语音交互。"
                ]
            },
            {
                title: "多设备体验设计",
                content: [
                    "设计时考虑用户可能在iPhone、iPad、Mac或Apple Watch等不同设备使用Siri。",
                    "针对不同设备屏幕大小和交互方式，优化视觉反馈的呈现。",
                    "利用设备独特功能（如Apple Watch的触感反馈）增强交互体验。",
                    "考虑使用Handoff功能，实现跨设备的无缝交互体验。"
                ]
            }
        ],
        keypoints: [
            {
                title: "Apple Siri设计核心理念",
                content: [
                    "简洁性：专注于高效完成任务，减少不必要的步骤和信息。",
                    "直观性：设计符合用户预期的交互流程，易于理解和使用。",
                    "一致性：保持与iOS、macOS等Apple平台设计语言的一致。",
                    "个性化：根据用户习惯和偏好，提供定制化体验。"
                ]
            },
            {
                title: "多模态交互",
                content: [
                    "结合语音和视觉界面，创建协同工作的多模态体验。",
                    "在有屏幕的设备上，设计简洁明了的视觉反馈，补充语音交互。",
                    "考虑用户可能同时使用语音和触摸进行交互的场景。",
                    "利用Siri建议功能，预测用户可能的需求，提供主动服务。"
                ]
            }
        ],
        tags: ["对话管理", "多模态", "唤醒技术"]
    },
    "microsoft-cortana": {
        id: "microsoft-cortana",
        name: "Microsoft Cortana / Azure AI",
        category: "international",
        description: "Microsoft Cortana是微软的智能助手，而Azure AI Speech services提供了先进的语音识别和合成服务。",
        logo: "images/microsoft-logo.svg", // 将在SVG部分设计
        officialLink: "https://learn.microsoft.com/zh-cn/azure/ai-services/speech-service/overview",
        updateDate: "2025年5月10日",
        guidelines: [],
        suggestions: [],
        keypoints: [],
        tags: ["对话管理", "语音合成"]
    },
    "samsung-bixby": {
        id: "samsung-bixby",
        name: "Samsung Bixby",
        category: "international",
        description: "Samsung Bixby是三星开发的智能语音助手，内置于三星的智能手机、电视和家电产品中。",
        logo: "images/bixby-logo.svg", // 将在SVG部分设计
        officialLink: "https://bixbydevelopers.com/dev/docs/dev-guide/design-guides",
        updateDate: "2025年5月10日",
        guidelines: [],
        suggestions: [],
        keypoints: [],
        tags: ["对话管理", "唤醒技术"]
    },

    // 国内平台
    "dueros": {
        id: "dueros",
        name: "百度 DuerOS",
        category: "domestic",
        description: "百度DuerOS是百度推出的对话式人工智能操作系统，为智能设备提供语音交互解决方案。",
        logo: "images/dueros-logo.svg",
        officialLink: "https://dueros.baidu.com/didp/doc/dueros-bot-platform/dbp-design/interaction-design_markdown",
        updateDate: "2025年5月10日",
        guidelines: [
            {
                title: "对话基本原则",
                content: [
                    "遵循自然、简洁、有帮助的原则，使对话流畅自然。",
                    "系统响应不宜过长，控制在2-3句话以内，避免信息过载。",
                    "为用户提供明确的引导，让用户知道可以说什么。",
                    "设计符合口语习惯的对话，避免使用书面语或过于正式的表达。"
                ]
            },
            {
                title: "多轮对话设计",
                content: [
                    "合理规划对话流程，每次只询问一个信息，避免让用户一次记忆过多内容。",
                    "在复杂任务中，提供明确的进度反馈，让用户知道当前所处阶段。",
                    "设计灵活的槽位填充策略，允许用户以不同顺序提供信息。",
                    "提供清晰的退出机制，让用户随时可以中断当前任务。"
                ]
            }
        ],
        suggestions: [
            {
                title: "语音交互优化建议",
                content: [
                    "针对不同场景设计变化的回复，避免机械重复相同话语。",
                    "考虑用户可能的说话方式，设计灵活的意图识别规则。",
                    "为关键流程设计兜底策略，确保即使识别失败也能继续对话。",
                    "利用DuerOS平台能力，如地理位置、时间等，提供情境相关的体验。"
                ]
            },
            {
                title: "多模态设计建议",
                content: [
                    "在有屏设备上，合理规划语音与视觉内容的分工，相互补充而非重复。",
                    "视觉界面应突出关键信息，辅助用户理解和决策。",
                    "考虑用户可能同时使用语音和触摸进行交互的场景。",
                    "针对不同设备类型（智能音箱、智能电视、手机等）优化交互设计。"
                ]
            }
        ],
        keypoints: [
            {
                title: "DuerOS设计核心理念",
                content: [
                    "以用户为中心：从用户真实需求出发，设计有价值的交互。",
                    "对话驱动：通过自然对话完成任务，降低用户学习成本。",
                    "持续优化：基于用户反馈不断迭代交互设计。",
                    "能力透明：清晰展示系统能力边界，管理用户预期。"
                ]
            },
            {
                title: "错误处理与恢复",
                content: [
                    "设计友好的错误提示，避免简单地说\"我没听懂\"。",
                    "当识别失败时，提供有引导性的回复，如\"您是想问xx吗？\"",
                    "为常见错误场景准备多种回复变体，避免重复同一错误提示。",
                    "记录用户历史行为和偏好，用于提高未来交互的准确性。"
                ]
            }
        ],
        tags: ["对话管理", "多模态"],
    },
    "aligenie": {
        id: "aligenie",
        name: "阿里巴巴 AliGenie",
        category: "domestic",
        description: "AliGenie是阿里巴巴开发的智能语音交互系统，为天猫精灵等智能硬件提供语音交互能力。",
        logo: "images/aligenie-logo.svg",
        officialLink: "https://www.aligenie.com/doc/357834/gnuvuy",
        updateDate: "2025年5月10日",
        guidelines: [],
        suggestions: [],
        keypoints: [],
        tags: ["对话管理"]
    },
    "tencent": {
        id: "tencent",
        name: "腾讯云小微",
        category: "domestic",
        description: "腾讯云小微是腾讯推出的智能语音助手，为腾讯系产品和第三方设备提供语音交互能力。",
        logo: "images/tencent-logo.svg",
        officialLink: "https://www.aligenie.com/doc/357834/gnuvuy",
        updateDate: "2025年5月10日",
        guidelines: [],
        suggestions: [],
        keypoints: [],
        tags: ["对话管理"]
    },
    "xiaoai": {
        id: "xiaoai",
        name: "小米小爱同学",
        category: "domestic",
        description: "小爱同学是小米公司开发的智能语音助手，广泛应用于小米智能手机、智能音箱等产品中。",
        logo: "images/xiaoai-logo.svg",
        officialLink: "https://developers.xiaoai.mi.com/documents/Home?type=/api/doc/render_markdown/VoiceserviceAccess/Device/platformguide",
        updateDate: "2025年5月10日",
        guidelines: [],
        suggestions: [],
        keypoints: [],
        tags: ["对话管理"]
    },
    "dui": {
        id: "dui",
        name: "思必驰DUI",
        category: "domestic",
        description: "DUI是思必驰推出的智能语音交互平台，广泛应用于智能硬件、车载等场景。",
        logo: "images/dui-logo.svg",
        guidelines: [{title: "对话设计原则", content: ["遵循自然、简洁的对话风格，适应多场景应用。"]}],
        suggestions: [{title: "平台适配建议", content: ["根据硬件特性优化语音交互体验。"]}],
        keypoints: [{title: "DUI平台要点", content: ["支持多种终端，开放API接口。"]}]
    },
    "xfyun-awaken": {
        id: "xfyun-awaken",
        name: "科大讯飞语音唤醒",
        category: "domestic",
        description: "科大讯飞语音唤醒为智能设备提供高效的语音唤醒能力，适用于多种终端。",
        logo: "images/xfyun-awaken-logo.svg",
        guidelines: [{title: "唤醒词设计", content: ["唤醒词应简短易记，避免歧义。"]}],
        suggestions: [{title: "误唤醒处理", content: ["优化算法，降低误唤醒率。"]}],
        keypoints: [{title: "平台优势", content: ["高准确率，低功耗。"]}]
    }
};

/**
 * 工具函数：根据类别获取平台列表
 * @param {string} category - 平台类别 ("international" 或 "domestic")
 * @returns {Array} 符合类别的平台对象数组
 */
function getPlatformsByCategory(category) {
    return Object.values(platforms).filter(platform => platform.category === category);
}

/**
 * 工具函数：根据ID获取平台
 * @param {string} id - 平台ID
 * @returns {Object|null} 平台对象或null
 */
function getPlatformById(id) {
    return platforms[id] || null;
}

/**
 * 工具函数：搜索规范内容
 * @param {string} keyword - 搜索关键词
 * @param {string|null} platformId - 平台ID（可选，null表示搜索所有平台）
 * @returns {Array} 搜索结果数组
 */
function searchSpecs(keyword, platformId = null) {
    const results = [];
    const keywordLower = keyword.toLowerCase();
    
    // 确定要搜索的平台
    const platformsToSearch = platformId ? 
        [platforms[platformId]].filter(Boolean) : 
        Object.values(platforms);
    
    platformsToSearch.forEach(platform => {
        // 搜索设计规范
        searchInSection(platform, 'guidelines', keywordLower, results);
        
        // 搜索设计建议
        searchInSection(platform, 'suggestions', keywordLower, results);
        
        // 搜索设计要点
        searchInSection(platform, 'keypoints', keywordLower, results);
    });
    
    return results;
}

/**
 * 辅助函数：在指定部分搜索关键词
 * @param {Object} platform - 平台对象
 * @param {string} section - 部分名称 ('guidelines', 'suggestions', 或 'keypoints')
 * @param {string} keyword - 小写的搜索关键词
 * @param {Array} results - 结果数组
 */
function searchInSection(platform, section, keyword, results) {
    const sectionName = getSectionName(section);
    
    platform[section]?.forEach(item => {
        // 搜索标题
        const titleMatch = item.title.toLowerCase().includes(keyword);
        
        // 搜索内容
        const contentMatches = item.content.filter(text => 
            text.toLowerCase().includes(keyword)
        );
        
        if (titleMatch || contentMatches.length > 0) {
            // 如果标题或内容匹配，添加到结果
            results.push({
                platformId: platform.id,
                platformName: platform.name,
                section: sectionName,
                title: item.title,
                matches: contentMatches.map(text => {
                    // 高亮关键词
                    return highlightKeyword(text, keyword);
                })
            });
        }
    });
}

/**
 * 辅助函数：将关键词在文本中高亮显示
 * @param {string} text - 原始文本
 * @param {string} keyword - 小写的搜索关键词
 * @returns {string} 带有高亮标记的文本
 */
function highlightKeyword(text, keyword) {
    const index = text.toLowerCase().indexOf(keyword);
    if (index === -1) return text;
    
    const before = text.substring(0, index);
    const match = text.substring(index, index + keyword.length);
    const after = text.substring(index + keyword.length);
    
    return before + '<em>' + match + '</em>' + after;
}

/**
 * 辅助函数：获取部分对应的中文名称
 * @param {string} section - 部分名称 ('guidelines', 'suggestions', 或 'keypoints')
 * @returns {string} 中文名称
 */
function getSectionName(section) {
    const names = {
        'guidelines': '设计规范',
        'suggestions': '设计建议',
        'keypoints': '设计要点'
    };
    return names[section] || section;
} 
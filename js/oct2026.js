(function () {
  const data = window.TIDE_DATA;
  if (!data || !Array.isArray(data.domains)) return;

  data.domains.push({
    id: "upcoming-opportunities",
    name: "即将开放项目",
    description: "即将开放的企业岗位与跨学科学习实践项目。",
    projects: [
      {
        id: "hymson-ai-campus-recruitment",
        name: "海目星AI开发与产品岗位校园招聘",
        description: "面向香港中文大学（深圳）2027届应届毕业生开放的工业AI岗位机会，涵盖AI应用开发工程师与AI产品经理。岗位聚焦大模型应用、智能体、RAG及工业场景中的AI产品落地，参与从需求与方案设计到开发、测试、上线和交付的完整流程。",
        period: "2027届校园招聘",
        members: "招聘人数以企业岗位安排为准",
        partner: "海目星激光科技集团股份有限公司",
        progress: "即将开放招募",
        applicationDisabled: true,
        achievements: "正式开放后按企业招聘流程申请",
        techIndicators: "岗位方向包括大模型应用、智能助手、Agent、RAG、企业级AI看板及工业Coding Agent等，工作地点为深圳。",
        expectedOutcome: "进入真实工业AI业务场景，积累企业级AI应用研发或AI产品全流程实践经验，并参与智能制造领域AI能力的产品化与交付。",
        coreObjectives: [
          {
            title: "工业AI应用研发",
            content: "围绕企业AI助手、智能看板、知识增强与工业智能体等场景，参与AI应用设计、开发、性能优化、稳定性建设和交付迭代。"
          },
          {
            title: "AI产品规划与落地",
            content: "理解制造业真实业务需求，参与AI产品需求分析、方案设计、功能规划、协同开发与用户反馈迭代。"
          },
          {
            title: "完整项目生命周期",
            content: "在真实业务环境中经历从方案与架构设计、编码和测试，到上线、交付及持续优化的完整流程。"
          }
        ],
        recruitment: {
          count: "以企业正式发布为准",
          position: "AI应用开发工程师 / AI产品经理",
          positionDescription: "面向香港中文大学（深圳）2027届应届毕业生的全职校园招聘岗位，工作地点为深圳，薪酬根据能力与岗位匹配情况面议。",
          skillRequirements: [
            "AI应用开发方向需掌握Java、Python或Go中的至少一种语言，并具备数据结构与算法基础",
            "具有大模型应用、智能体、RAG或相关AI项目经验者优先",
            "AI产品方向需具备对技术、产品与真实业务场景的理解和分析能力"
          ],
          qualityRequirements: [
            "对AI与智能制造的结合有兴趣，愿意深入企业业务场景",
            "具备良好的学习能力、问题分析能力和跨团队沟通能力",
            "能够推动方案从概念验证走向稳定产品与实际交付"
          ],
          expectedGains: [
            "参与消费电子、新能源与智能制造等领域的企业级AI项目",
            "积累AI应用研发、产品设计及工业场景落地经验",
            "接触企业AI助手、AI看板、工业Coding Agent等已有或规划中的产品方向"
          ]
        },
        jobResponsibilities: [
          {
            category: "AI应用开发工程师",
            items: [
              "参与AI应用的设计、开发与持续迭代",
              "协助完成系统架构、性能与稳定性优化",
              "支持产品上线、项目交付与后续维护"
            ]
          },
          {
            category: "AI产品经理",
            items: [
              "分析工业场景中的用户需求与业务痛点",
              "规划AI产品功能、应用流程与落地方案",
              "协同研发、业务与交付团队推动产品迭代"
            ]
          }
        ]
      },
      {
        id: "ai-in-finance-learning-practice",
        name: "AI in Finance：金融人工智能学习与实践项目",
        description: "面向对AI与金融交叉方向感兴趣的在校学生，通过共同学习、案例讨论、专题研究与项目实践，系统理解金融人工智能的典型应用，并逐步形成可展示的研究报告、分析记录、小工具或Demo原型。",
        period: "首轮学习与探索暂定8周",
        members: "6-12人",
        partner: "TIDE Club",
        progress: "即将开放招募",
        applicationDisabled: true,
        achievements: "正式开放后由项目发起团队统一组织",
        techIndicators: "项目采用每周小组交流、自主学习、专题协作与阶段展示的形式，学习阶段预计每周投入3-5小时。",
        expectedOutcome: "应用研究报告、数据分析或实验记录、小型工具、Demo原型及阶段展示材料；表现良好的方向可继续发展为深入研究或真实企业项目。",
        coreObjectives: [
          {
            title: "建立领域认知",
            content: "形成对金融人工智能主要应用方向、常见问题、数据特点与实践方法的整体理解。"
          },
          {
            title: "开展跨学科协作",
            content: "连接金融、经济、计算机、人工智能、数学、统计、会计等背景，围绕共同问题进行研究与实践。"
          },
          {
            title: "形成可展示成果",
            content: "通过专题研究、数据实验或工具开发，沉淀具有展示价值的报告、记录与Demo原型。"
          },
          {
            title: "衔接真实项目",
            content: "为后续深入研究、专题小组与真实企业合作项目做好知识、团队和实践准备。"
          }
        ],
        recruitment: {
          count: "首期6-12人",
          position: "学习与实践项目成员",
          positionDescription: "面向所有对AI与金融感兴趣的在校学生开放，不限专业，也不要求同时具备金融与技术背景。",
          skillRequirements: [
            "技术与数据方向可参与数据处理、实验验证、模型或工具原型开发",
            "金融与商业方向可参与行业问题分析、案例研究与应用场景设计",
            "研究与组织方向可参与资料梳理、报告撰写、协作推进与成果展示"
          ],
          timeRequirements: [
            "首轮学习与探索暂定8周",
            "学习阶段预计每周投入3-5小时",
            "参与每周小组交流、自主学习、专题协作与阶段展示"
          ],
          qualityRequirements: [
            "对AI与金融交叉领域保持持续兴趣",
            "愿意主动学习、分享进展并参与跨专业协作",
            "能够按计划完成个人任务并共同沉淀项目成果"
          ],
          expectedGains: [
            "建立对金融AI典型场景与实践路径的系统认识",
            "提升数据分析、研究表达、工具开发或商业分析能力",
            "积累可用于展示的研究报告、实验记录与Demo成果",
            "获得参与后续真实企业项目与深入专题研究的机会"
          ]
        },
        researchGroups: [
          {
            name: "方向一",
            direction: "金融信息分析与企业研究",
            tasks: "探索信息提取、企业研究、文本分析与决策支持等问题。"
          },
          {
            name: "方向二",
            direction: "风险管理与反欺诈",
            tasks: "研究风险识别、异常检测、信用分析与反欺诈应用。"
          },
          {
            name: "方向三",
            direction: "投资研究与量化分析",
            tasks: "开展数据驱动的投资研究、市场分析与量化实验。"
          },
          {
            name: "方向四",
            direction: "金融服务与运营",
            tasks: "研究智能客服、业务流程支持、服务优化与运营效率提升。"
          },
          {
            name: "方向五",
            direction: "保险与理赔支持",
            tasks: "探索保险业务分析、理赔辅助、风险判断与流程智能化。"
          },
          {
            name: "方向六",
            direction: "金融AI评估与可靠性",
            tasks: "关注金融AI系统的效果评估、风险校验、安全性与可靠性。"
          }
        ]
      }
    ]
  });
})();

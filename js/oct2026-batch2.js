(function () {
  const data = window.TIDE_DATA;
  if (!data || !Array.isArray(data.domains)) return;

  const domain = data.domains.find(item => item.id === "upcoming-opportunities");
  if (!domain || !Array.isArray(domain.projects)) return;

  domain.projects.push(
    {
      id: "bmic-smart-transportation-bayesian-network",
      name: "北规院智慧交通课题组：贝叶斯动态交通网络研究项目",
      description: "面向大规模交通路网中的非负整数网络时间序列，研究带有空间自适应邻域的贝叶斯动态网络模型，缓解现有模型过度参数化、计算成本高和物理解释不足的问题，并通过仿真与真实交通流数据验证预测性能。",
      period: "2026 秋季",
      members: "招募人数待定",
      partner: "北规院智慧交通课题组",
      progress: "即将开放招募",
      applicationDisabled: true,
      achievements: "正式开放后公布申请与遴选方式",
      techIndicators: "构建空间自适应邻域的贝叶斯动态网络模型，完成Pólya-Gamma数据增强与PG-FFBS后验推断代码闭环，并以RMSE等指标对比基线预测模型。",
      expectedOutcome: "一篇结构完整、图表规范并具备核心创新点的全英文学术论文原稿，以及与论文方法对应、包含注释和复现指南的Python或R算法代码库。",
      coreObjectives: [
        {
          title: "动态网络建模",
          content: "定义交通路网图结构与动态泊松广义线性模型，设计能够适应空间邻域差异的贝叶斯网络时间序列模型。"
        },
        {
          title: "后验推断算法",
          content: "完成Pólya-Gamma数据增强的数学推导，开发PG-FFBS与Gibbs采样器，实现模型推断的完整代码流程。"
        },
        {
          title: "仿真与真实数据验证",
          content: "清洗交通流网络时间序列数据，开展仿真和真实数据实验，并与基线模型进行预测误差和计算表现对比。"
        },
        {
          title: "论文与复现成果",
          content: "完成实验图表、结果分析、全英文论文写作，以及可复现的算法代码、说明与运行指南。"
        }
      ],
      detailSections: [
        {
          title: "项目推进路线",
          description: "项目按模型设计、算法实现、实验验证和论文成稿四个阶段推进。",
          groups: [
            {
              label: "阶段一",
              title: "文献深化与架构设计",
              description: "梳理相关文献，定义路网图结构与动态泊松广义线性模型的基础方程。"
            },
            {
              label: "阶段二",
              title: "算法核心攻坚",
              description: "引入隐变量并推导PG-FFBS算法，完成核心代码编写与内部调试。"
            },
            {
              label: "阶段三",
              title: "扩展与仿真验证",
              description: "扩展季节性特征模块，并将模型应用于真实交通数据验证效果。"
            },
            {
              label: "阶段四",
              title: "论文成稿与打磨",
              description: "完成实验图表、对比分析和全英文学术论文的撰写、精修与定稿。"
            }
          ]
        },
        {
          title: "计算挑战与研究资源",
          groups: [
            {
              label: "挑战",
              title: "高维动态网络计算",
              description: "PG-FFBS涉及高维动态网络状态平滑，大规模路网上的MCMC采样可能带来较高计算成本。"
            },
            {
              label: "策略",
              title: "稀疏优化与降阶",
              description: "优先优化稀疏矩阵运算，必要时采用降阶策略或高性能计算环境。"
            },
            {
              label: "资源",
              title: "计算与真实数据",
              description: "项目可使用课题组高性能计算资源及公开的真实交通流计数数据开展验证。"
            }
          ]
        }
      ],
      recruitment: {
        heading: "研究成员招募信息",
        count: "待定",
        position: "算法研究与实验成员",
        positionDescription: "适合希望参与贝叶斯统计、网络时间序列、交通预测和科研论文写作的同学。具体分工将围绕模型推导、算法开发、数据实验与论文复现展开。",
        skillRequirements: [
          "能够使用Python或R开展算法实现、数据处理与实验分析",
          "对贝叶斯方法、时间序列、MCMC或交通预测感兴趣",
          "愿意阅读学术文献并参与数学推导、模型验证或复现工作"
        ],
        qualityRequirements: [
          "逻辑严谨，能够持续推进算法调试和实验排查",
          "重视代码规范、实验记录与结果可复现性",
          "具备团队协作意识并愿意参与英文论文写作"
        ],
        expectedGains: [
          "完整参与从模型设计、算法实现到论文成稿的研究流程",
          "积累交通网络数据处理与贝叶斯计算实践经验",
          "形成可复现代码库与学术论文原稿等研究成果"
        ]
      }
    },
    {
      id: "data-spaces-research-project-2026",
      name: "Data Spaces Research Project：从开源工具到真实应用",
      description: "围绕数据空间的开源工具、可信数据交换基础设施与真实应用场景开展研究。团队将从技术调研出发，部署和测试核心组件，构建最小可行数据空间，并探索校园及校企科研协作中的数据主权、授权控制与跨组织共享问题。",
      period: "2026 秋季",
      members: "招募人数待定",
      partner: "TIDE Club",
      progress: "即将开放招募",
      applicationDisabled: true,
      achievements: "正式开放后公布报名方式",
      techIndicators: "研究DSSC、Eclipse Dataspace Components、FIWARE、Tractus-X与Simpl-Open等工具生态，实践数据连接器、数据目录、身份信任、访问策略、互操作和治理机制。",
      expectedOutcome: "Data Space Toolbox Survey、可运行的Mini Data Space Demo，以及面向校园或跨组织科研协作场景的需求分析、系统设计方案与应用原型。",
      coreObjectives: [
        {
          title: "Explore",
          content: "研究数据空间领域的开源工具、Toolbox、Software Stack、参考架构与技术标准。"
        },
        {
          title: "Build",
          content: "动手部署和测试核心组件，跑通数据资源发现、授权协商与跨组织交换流程。"
        },
        {
          title: "Apply",
          content: "发掘校园、科研协作和校企合作中的真实Use Cases，设计并验证应用原型。"
        }
      ],
      detailSections: [
        {
          title: "研究方向",
          description: "项目兼顾开源技术研究、系统工程实践与真实问题发现。",
          columns: 3,
          groups: [
            {
              label: "01",
              title: "Toolbox 与软件栈探索",
              description: "调研代表性开源项目的架构、核心功能、依赖与适用场景，形成部署教程、工具评测和知识库。",
              items: [
                "研究DSSC参考架构与工具分类",
                "部署和比较EDC、FIWARE等开源组件",
                "评估工具的易用性、扩展性与成熟度"
              ]
            },
            {
              label: "02",
              title: "构建Mini Data Space",
              description: "基于合适的开源组件搭建可运行的最小可行数据空间，理解各技术模块如何协同。",
              items: [
                "数据连接器与数据目录",
                "身份信任、访问与使用策略",
                "互操作、治理与跨组织数据交换"
              ]
            },
            {
              label: "03",
              title: "真实场景发现与设计",
              description: "从校园生活、科研协作、学生组织和校企合作中寻找适合使用数据空间技术的问题。",
              items: [
                "问题与参与方分析",
                "数据资源、访问规则和应用价值设计",
                "架构设计、原型开发与用户验证"
              ]
            }
          ]
        },
        {
          title: "项目路线",
          groups: [
            {
              label: "Phase 1",
              title: "Research & Exploration",
              description: "学习基础概念、技术标准和参考架构，形成初步Toolbox Survey。"
            },
            {
              label: "Phase 2",
              title: "Tools & Hands-on Practice",
              description: "部署数据空间软件栈，完成数据连接、资源发布、策略协商和交换流程Demo。"
            },
            {
              label: "Phase 3",
              title: "Use Case Discovery & System Design",
              description: "研究校园与跨组织科研协作需求，开展需求分析、场景设计和技术选型。"
            },
            {
              label: "Phase 4",
              title: "Prototype & Demonstration",
              description: "选择具备可行性与实际价值的场景，开发并演示应用原型。"
            }
          ]
        },
        {
          title: "预期项目成果",
          columns: 3,
          groups: [
            {
              label: "成果一",
              title: "Toolbox Survey",
              description: "系统梳理开源工具的技术架构、核心功能、部署实践与对比分析。"
            },
            {
              label: "成果二",
              title: "Mini Data Space Demo",
              description: "实现能够展示资源发现、访问授权和跨组织交换流程的技术Demo。"
            },
            {
              label: "成果三",
              title: "Use Case Proposal & Prototype",
              description: "形成真实场景的需求分析、系统设计方案，并尝试实现可运行原型。"
            }
          ]
        }
      ],
      recruitment: {
        heading: "研究成员招募信息",
        count: "待定",
        position: "Research Member / 研究成员",
        positionDescription: "不限专业，也不要求已有数据空间经验。项目将从基础概念与开源工具开始，更看重好奇心、学习意愿、主动性和团队协作能力。",
        roles: [
          {
            count: "方向不限",
            name: "Tech Explorers",
            description: "关注数据科学、软件工程、分布式系统或新兴开源技术。"
          },
          {
            count: "方向不限",
            name: "Developers",
            description: "具备Python、Java、Web开发或其他编程经验，希望参与系统开发。"
          },
          {
            count: "方向不限",
            name: "Researchers",
            description: "喜欢阅读技术文献，愿意研究技术架构与实现原理。"
          },
          {
            count: "方向不限",
            name: "Product Thinkers",
            description: "对发现真实问题、设计Use Cases和探索产品应用感兴趣。"
          }
        ],
        skillRequirements: [
          "对数据空间、可信数据共享或跨组织协作问题感兴趣",
          "愿意学习和部署开源技术，或参与需求研究、产品设计和原型验证",
          "能够根据自身背景参与技术、研究、产品或治理方向中的至少一项"
        ],
        qualityRequirements: [
          "保持好奇心和主动学习意识",
          "能够清晰记录调研、部署、实验和设计过程",
          "愿意与不同专业背景的成员协作"
        ],
        expectedGains: [
          "了解数据空间的技术架构、开源工具与应用生态",
          "获得软件部署、系统集成、API开发与原型构建经验",
          "提升技术调研、问题定义、方案设计和实验验证能力",
          "参与真实校园与校企科研协作问题的解决"
        ]
      }
    },
    {
      id: "cross-cloud-ai-cross-border-ecommerce",
      name: "跨服云盾 × TIDE：AI+跨境电商产业数字化科研实习项目",
      description: "面向人工智能、数据科学、软件工程与商业分析等背景的同学，围绕AI与跨境电商产业数字化开展科研与工程实践。项目关注数据治理、智能决策、风险分析、大模型应用和业务原型开发，帮助成员在真实产业问题中形成跨技术与业务的解决能力。",
      period: "长期实习，滚动面试，招满即止",
      members: "招募人数待定",
      partner: "跨服云盾",
      progress: "即将开放招募",
      applicationDisabled: true,
      achievements: "正式开放后按TIDE要求提交申请",
      techIndicators: "围绕跨境电商多源数据治理、AI辅助经营分析、风险评估、流程自动化与业务原型系统开展研究和开发；公开页面不披露企业内部系统架构、数据规模及实施参数。",
      expectedOutcome: "形成可演示的AI或数据应用原型、数据治理与分析成果、业务研究材料，以及能够支持后续产业验证和持续迭代的项目文档。",
      coreObjectives: [
        {
          title: "AI辅助决策",
          content: "探索预测、优化、风险评分及大模型应用在跨境电商经营分析中的落地方式。"
        },
        {
          title: "数据治理与流程优化",
          content: "围绕多来源业务数据开展标准化、质量治理、自动化处理和数据资产化研究。"
        },
        {
          title: "原型系统研发",
          content: "将研究成果转化为可验证的前后端应用、协同工具或数据展示原型。"
        },
        {
          title: "产业问题研究",
          content: "理解采购、物流、财务与运营等业务链路，将真实痛点转化为数据、算法与产品需求。"
        }
      ],
      jobResponsibilities: [
        {
          category: "AI算法与大模型应用",
          items: [
            "参与销量预测、库存补货、风险分析等模型研究",
            "探索LLM、Agent与RAG在经营分析、智能报告和业务辅助中的应用",
            "开展模型验证、效果评估与应用原型开发"
          ]
        },
        {
          category: "数据治理与自动化工程",
          items: [
            "参与跨平台数据标准、主数据、质量评价与数据资产化工作",
            "研究多来源业务数据的可靠采集、清洗、校验和流程协同",
            "完善异常处理、运行监测与项目文档"
          ]
        },
        {
          category: "全栈与原型系统研发",
          items: [
            "参与科研成果原型系统的前后端开发",
            "设计清晰的业务交互、任务看板与数据展示界面",
            "协同算法、数据和业务成员完成系统集成与测试"
          ]
        },
        {
          category: "业务分析与产业研究",
          items: [
            "梳理跨境电商采购、物流、财务与运营流程中的真实问题",
            "将业务痛点转化为数据、算法与产品需求",
            "参与指标体系、数据目录、行业研究及标准建议材料整理"
          ]
        }
      ],
      recruitment: {
        heading: "科研实习生招募信息",
        count: "待定",
        position: "Research & Engineering Intern",
        positionDescription: "本期不设置严格的细分岗位壁垒。申请者具备AI算法、数据工程、系统研发或业务分析中的一项专长即可，不要求全栈。",
        skillRequirements: [
          "计算机、数据科学、人工智能、统计、金融工程、供应链或电子商务等相关背景",
          "熟悉Python及机器学习工具，或具备后端、数据处理、前端开发、SQL或业务分析能力",
          "对跨境电商、供应链、企业数据与AI产业应用感兴趣"
        ],
        timeRequirements: [
          "每周可投入3天及以上、连续实习6个月及以上者优先",
          "能够配合项目节奏持续完成研究、开发、测试与成果整理"
        ],
        qualityRequirements: [
          "对使用技术解决真实复杂问题保持热情",
          "具备独立排查问题、文献复现和跨团队沟通能力",
          "尊重企业数据与项目保密要求，遵守研究和开发规范"
        ],
        expectedGains: [
          "参与AI与跨境电商产业数字化的真实科研和工程实践",
          "积累从业务问题定义到算法、数据、系统与产品验证的完整经验",
          "形成可展示的项目成果、研究材料与产业实践经历"
        ]
      },
      priorityConditions: [
        "拥有GitHub开源项目或技术博客",
        "具备Kaggle、数学建模、ACM等竞赛经历",
        "具有企业级数据处理、论文、软件著作权或专利相关经验"
      ]
    }
  );
})();

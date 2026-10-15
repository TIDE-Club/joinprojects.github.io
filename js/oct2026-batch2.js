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
      progress: "招募中",
      applyUrl: "https://tideclub26.feishu.cn/share/base/form/shrcnscrR3eMEXoYo7g370ZXNZe",
      achievements: "按项目需求与能力匹配择优录取",
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
      progress: "招募中",
      applyUrl: "https://tideclub26.feishu.cn/share/base/form/shrcnscrR3eMEXoYo7g370ZXNZe",
      achievements: "按申请材料与项目匹配度择优录取",
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
      progress: "招募中",
      applyUrl: "https://tideclub26.feishu.cn/share/base/form/shrcnscrR3eMEXoYo7g370ZXNZe",
      achievements: "按TIDE要求提交申请，滚动面试",
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
    },
    {
      id: "tide-industrial-ai-agent-study-group",
      name: "TIDE 工业智能体研习组",
      description: "面向本科生与研究生的工业AI研习与实践项目，聚焦流程工业中的真实数据、模型与控制问题。团队将围绕工业数据处理智能体与APC性能维护AI Agent两个方向，推动从数据治理、过程模型辨识到诊断和调参建议的完整工程闭环。",
      period: "长期研习，分阶段推进",
      members: "两个小组各3-5人",
      partner: "TIDE Club；APC项目组",
      progress: "招募中",
      applyUrl: "https://tideclub26.feishu.cn/share/base/form/shrcnscrR3eMEXoYo7g370ZXNZe",
      achievements: "意向匹配、定向沟通与试运行",
      techIndicators: "以真实回路、系统稳定性和现场实际效果为验收依据；调参方案仅进行离线验证，并须经工程师审查授权后落地，不自动改写在线参数。",
      expectedOutcome: "性能评价与模型失配诊断报告、可运行的调参建议原型、证据链记录、数据质量与样本筛选工具、带语义和工况标签的数据集，以及下游对照实验结果。",
      coreObjectives: [
        {
          title: "问题牵引",
          content: "从APC性能退化与工业建模数据难用等真实痛点出发，聚焦可验证、可落地的问题，避免脱离现场的技术堆砌。"
        },
        {
          title: "能力沉淀",
          content: "围绕数据、模型与控制环节沉淀可复用的工具、数据集、验证案例和证据链，形成能够持续迭代的方法与资产。"
        },
        {
          title: "人才培育",
          content: "让成员在真实工业场景和脱敏数据上动手，积累从问题定义、方法选型、工程实现到结果验证的完整经验。"
        }
      ],
      detailSections: [
        {
          title: "两个核心研习方向",
          description: "两个方向位于同一条工业AI价值链上，并通过过程模型辨识相互连接。",
          groups: [
            {
              label: "决策层",
              title: "APC性能维护AI Agent",
              description: "围绕真实APC/MPC回路，自动汇总性能证据、诊断模型失配、扰动变化、约束饱和及仪表或执行器异常等根因，并生成可供工程师审查的离线调参方案。",
              items: [
                "建立回路性能评价与退化定位流程",
                "跨多源数据推理根因并组织证据链",
                "调用辨识和仿真工具生成候选方案",
                "坚持人在环审查与授权后落地"
              ]
            },
            {
              label: "数据层",
              title: "工业数据处理智能体",
              description: "将原始运行数据转化为带语义、带工况标签、经过质量核查且可追溯的建模样本，并通过固定下游任务的对照实验衡量处理价值。",
              items: [
                "完成数据接入、时间对齐和质量核查",
                "开展语义标注、工况识别与样本筛选",
                "比较原始、规则、人工与智能体处理效果",
                "沉淀可复用的高质量工业数据集"
              ]
            }
          ]
        },
        {
          title: "数据到控制的价值链",
          columns: 3,
          groups: [
            {
              label: "01",
              title: "数据质量",
              description: "通过清洗、对齐、分段、标注与质量核查，形成可靠且可追溯的建模样本。"
            },
            {
              label: "02",
              title: "模型辨识",
              description: "以过程模型辨识连接数据层与决策层，同时作为评价数据处理价值的重要标尺。"
            },
            {
              label: "03",
              title: "控制性能恢复",
              description: "在证据充分和离线验证完成后，由工程师审查候选调参方案并授权实施。"
            }
          ]
        },
        {
          title: "项目验收尺度",
          description: "项目以工程效果和安全边界衡量是否做成，论文仅作为可能的副产品。",
          columns: 3,
          groups: [
            {
              label: "诊断",
              title: "根因判断准确",
              description: "比较智能体诊断结论与工程师或现场复核结论的一致程度。"
            },
            {
              label: "效率",
              title: "缩短人工耗时",
              description: "衡量从发现问题到形成可执行方案所需人工时间的下降幅度。"
            },
            {
              label: "效果",
              title: "恢复控制表现",
              description: "关注方案采纳后关键变量波动、能耗、越限和质量指标的改善。"
            },
            {
              label: "追溯",
              title: "结论可复核",
              description: "每项结论均可回到源数据、时间区间、变量、工具参数和复核记录。"
            },
            {
              label: "安全",
              title: "人在环授权",
              description: "所有方案只进行离线验证，越权或误写在线参数必须保持为零。"
            }
          ]
        },
        {
          title: "阶段安排",
          columns: 3,
          groups: [
            {
              label: "准备",
              title: "人员、环境与数据就位",
              description: "组建核心成员，建立统一开发与归档规范，选定真实回路并确认脱敏数据使用条件。"
            },
            {
              label: "最小闭环",
              title: "跑通端到端演示",
              description: "完成从历史数据和问题线索到退化定位、根因分析、调参建议和证据链的可复查演示。"
            },
            {
              label: "深化",
              title: "迭代并沉淀资产",
              description: "围绕准确率、耗时和实际效果持续迭代，沉淀数据集、工具和验证案例，并评估转化为正式课题。"
            }
          ]
        }
      ],
      recruitment: {
        heading: "研习成员招募信息",
        intro: "招募将按意向确认、定向补充、试运行和按需扩大的节奏推进，具体任务由小组成员共同商定。",
        count: "两个方向各3-5人",
        position: "工业AI研习与实践成员",
        positionDescription: "面向本科生与研究生，不以论文发表作为承诺，也不设置统一投入时长门槛。团队更看重可靠交付、过程可复核、对工业场景的好奇心以及持续协作意愿。",
        roles: [
          {
            count: "3-5人",
            name: "APC性能维护AI Agent小组",
            description: "开展性能评价、根因诊断、模型辨识、仿真与调参建议原型开发。"
          },
          {
            count: "3-5人",
            name: "工业数据处理智能体小组",
            description: "开展数据质量核查、语义与工况标注、样本筛选和下游对照实验。"
          },
          {
            count: "可提议新方向",
            name: "其他工业研习方向",
            description: "可围绕质量检测、设备健康、能耗优化、生产调度或供应链等真实问题组建新小组。"
          }
        ],
        skillRequirements: [
          "熟悉Python及numpy、pandas、scikit-learn等常用数据分析工具",
          "具备基本的时序数据处理能力，能够阅读工程文档与数据说明",
          "APC方向有过程控制、模型辨识或优化基础者优先",
          "数据方向有数据清洗、特征工程或数据库读写经验者优先"
        ],
        timeRequirements: [
          "每周进行简短同步，每两周开展一次集中讨论",
          "每项任务须明确负责人、交付内容、完成时间和复核人",
          "以成果质量和实际贡献为评价依据，不设统一时长门槛"
        ],
        qualityRequirements: [
          "能够按约定交付、接受复核并清晰记录过程",
          "对工业场景保持好奇，愿意与工程师反复对齐结论",
          "遇到模糊问题时能够主动澄清并持续推进"
        ],
        expectedGains: [
          "在脱敏后的真实工业数据上开展分析与建模",
          "走通问题定义、数据准备、方法选型、结果验证和证据组织的完整闭环",
          "形成可用于求职或深造展示的报告、原型、工具和数据集成果",
          "提升小团队协作、专题组织与工程复盘能力"
        ]
      },
      priorityConditions: [
        "对流程工业、过程控制或机器学习有初步了解",
        "愿意长期学习并对工业AI实践保持热情与韧性",
        "重视数据权限、脱敏要求、安全边界和工程可追溯性"
      ]
    }
  );
})();

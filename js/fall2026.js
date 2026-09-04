(function () {
  const data = window.TIDE_DATA;
  if (!data || !Array.isArray(data.domains)) return;

  data.domains.push({
    id: "fall-2026-projects",
    name: "2026 秋季项目",
    description: "TIDE Club 2026 秋季项目与实习岗位招募，覆盖智慧船舶、航运预测、库存优化、AI教育产品与海外市场商业模型等方向。",
    projects: [
      {
        id: "gsi-cable-estimation",
        name: "AI驱动的船舶电缆物量智能预估项目",
        description: "本项目由TIDE学生社团发起，联合广船国际共同开展，旨在利用AI技术学习历史三维模型数据，构建覆盖照明、动力、推进、导航等核心系统的智能预测模型，实现船舶设计初期电缆长度的精准化、自动化预估。项目支持校园远程参与，也可申请本学期线下进入广船国际实习。",
        period: "长期开展（具体起止时间待定）",
        leader: "董雨涵",
        members: "2-3人",
        partner: "广船国际有限公司；港中深-凯奥思数据技术与人工智能联合实验室",
        techIndicators: "分析船舶各系统设计参数与电缆长度的关联关系，完成多源数据处理与核心特征识别；针对不同子系统构建定制化电缆总量及总长度预测模型，并开展性能评估与可视化界面开发。",
        expectedOutcome: "AM三维模型结构化数据处理台账、设计参数与电缆长度相关性分析报告、核心影响因子识别文档、特征工程文件、电缆长度预测模型代码、模型性能评估与精度优化报告、技术调研文档及阶段性项目复盘资料。",
        progress: "招募中",
        achievements: "滚动录取，名额有限，先到先得",
        coreObjectives: [
          { title: "特征工程与关联分析", content: "分析照明、动力、导航等系统设计参数与电缆长度之间的内在逻辑，完成多源设计参数的提取、清洗与关联建模，识别影响电缆物量的核心特征因子。" },
          { title: "预测模型构建与验证", content: "基于已建船舶CAD图纸、规格书、电缆总表及设备布置方式，与企业共同开发不同子系统的定制化预测模型，完成技术路径确定、性能评估与可视化界面开发。" },
          { title: "阶段化研发推进", content: "依次完成业务知识学习与环境配置、三维模型数据处理、特征筛选、模型搭建、算法迭代优化，以及测试报告和技术文档汇总。" },
          { title: "人才培养", content: "为学生提供真实企业AI项目实战平台，提升Python数据分析、机器学习建模、三维模型数据处理和特征工程能力，积累船舶工程与AI交叉领域经验。" }
        ],
        recruitment: {
          count: "2-3人",
          position: "算法研发成员 / 线下实习生",
          positionDescription: "面向大四及研究生同学开放，要求具备扎实的统计学、数据科学或计算机相关背景，优先录取可前往广州南沙线下实习的同学。",
          skillRequirements: [
            "熟练使用Python，具备数据挖掘、关联分析和统计学基础，能够独立完成数据清洗、筛选与统计分析",
            "熟悉回归分析、神经网络等机器学习方法，掌握PyTorch或TensorFlow，能够完成模型搭建、训练与基础调试",
            "了解船舶工程、三维模型数据处理或AM模型结构化数据提取者优先"
          ],
          timeRequirements: [
            "能够稳定投入项目，配合完成特征工程、关联分析、模型研发、测试验证与文档复盘",
            "选择线下实习者须保证本学期可全职前往广船国际广州南沙基地实习；公司提供补贴和住宿"
          ],
          qualityRequirements: [
            "逻辑清晰、细心严谨，具备规范代码习惯和良好的文档总结、成果整理能力",
            "对船舶工程、AI工业应用和智能制造感兴趣，主动性强并具备自主学习与问题排查能力",
            "沟通协作顺畅，能够配合社团与企业团队推进项目"
          ],
          expectedGains: [
            "参与真实校企合作AI项目，深度经历船舶电缆智能预估的完整研发流程",
            "系统强化Python数据处理、机器学习建模、三维模型数据处理与特征工程能力",
            "项目优先考虑有志于通过MPhil in AI项目进入SAI产学研创新网络（IU IN）课题组深造的同学"
          ]
        },
        priorityConditions: [
          "大四或研究生，具备统计学、数据科学或计算机相关背景",
          "可前往广州南沙线下实习"
        ]
      },
      {
        id: "cosco-destination-eta",
        name: "中远海科全球班轮目的港与ETA动态预测研发项目",
        description: "本项目由TIDE学生社团发起，联合中远海运科技股份有限公司共同开展，聚焦全球班轮船舶的目的港识别与ETA动态预测。项目将利用大规模历史AIS轨迹、船舶抵离港记录、历史航线及港口空间信息，构建可持续更新并识别异常航行状态的智能预测体系。",
        period: "长期开展（具体起止时间待定）",
        leader: "董雨涵",
        members: "3-5人（含实习生1人）",
        partner: "中远海运科技股份有限公司",
        techIndicators: "形成面向全球班轮的“目的港预测 + ETA动态预测 + 可信度评估”一体化算法能力，能够识别异常降速、绕航、漂航和锚地等待等状态，并触发ETA自适应修正。",
        expectedOutcome: "全球班轮AIS轨迹标准化处理台账、历史航线库与港口空间信息库、目的港识别模型、ETA动态预测模型、异常状态检测与自适应修正模块、准确率与偏差评估报告、行业调研报告、技术方案和算法模块使用手册。",
        progress: "招募中",
        achievements: "滚动录取，名额有限，先到先得",
        coreObjectives: [
          { title: "目的港预测", content: "构建基于AIS时空轨迹的目的港识别模型，解决目的港字段缺失、填写错误或不规范问题，输出候选港口排序与置信度评估。" },
          { title: "ETA动态预测", content: "融合剩余航程、历史航速、实时航行状态与港口运行特征，持续更新并自动修正船舶到港时间，降低常规及异常工况下的预测偏差。" },
          { title: "异常状态识别与修正", content: "基于实时AIS数据识别异常降速、绕航、漂航和锚地等待等状态，触发模型自适应修正，提升复杂场景中的稳定性与可靠性。" },
          { title: "一体化算法输出", content: "封装标准化算法模块并形成技术文档与测试报告，为船期跟踪、港口到港预测和供应链时效管理提供基础算法支撑。" },
          { title: "人才培养", content: "帮助成员提升Python时空数据处理、深度学习时序预测、轨迹建模、异常检测和算法工程化能力，积累全球班轮航次预测实战经验。" }
        ],
        recruitment: {
          count: "3-5人，其中实习生1人",
          position: "校内研发成员 / 实习生",
          positionDescription: "设立校内研发小组，围绕全球班轮目的港识别与ETA动态预测方向开展联合研发；实习生可远程参与。",
          skillRequirements: [
            "熟练使用Python，精通Pandas、NumPy等数据处理工具，能够处理大规模时空数据",
            "熟悉PyTorch等深度学习框架，了解时序预测、轨迹建模、聚类分析和异常检测",
            "掌握机器学习基础，有分类、回归或序列建模项目经验者优先",
            "了解时空数据、船舶AIS轨迹、海事通航业务或全球班轮航线者优先",
            "具备良好的代码规范和文档撰写习惯"
          ],
          timeRequirements: [
            "实习生可远程参与，但须保证足够投入时间并配合校内研发小组进度",
            "非实习生可根据学业安排灵活调整节奏，保质保量完成研发任务",
            "核心研发阶段须保证每周固定投入，并能够长期持续跟进项目迭代"
          ],
          qualityRequirements: [
            "逻辑清晰、细心严谨，对数据与模型结果敏感，能够主动发现和排查问题",
            "对智慧海事、航运AI、时空数据分析与航次预测感兴趣，具备自主学习能力",
            "沟通协作顺畅，能够配合社团及企业团队推进项目"
          ],
          expectedGains: [
            "参与真实企业AI项目，经历目的港识别、ETA预测与异常检测从数据处理到模型落地的全流程",
            "强化大规模时空数据处理、深度学习时序预测、轨迹建模、异常检测与算法工程化能力",
            "沉淀可展示的一体化算法模块、技术文档和测试报告",
            "深入了解全球班轮运营、海事监管、港口调度和供应链时效管理场景",
            "表现优异的校内研发成员可获得合作单位出具的实习证明"
          ]
        },
        priorityConditions: [
          "具备时空数据处理、船舶AIS轨迹或相关算法项目经验",
          "能够长期稳定投入项目研发"
        ]
      },
      {
        id: "enterprise-inventory-optimization",
        name: "库存优化算法实习生项目",
        description: "本项目由香港中文大学独立研发，面向大型国企库存大数据场景，依托成熟的库存优化核心算法开展需求预测、采购量测算与库存策略优化。现阶段重点进行系统适配、全流程测试和存量业务代码迭代，覆盖算法验证、系统调试与代码优化全链路。",
        period: "连续实习2个月及以上，每周到岗4天以上",
        members: "2-3人",
        partner: "香港中文大学；大型国企业务场景",
        expectedOutcome: "库存预测与优化算法测试台账、批量计算结果校验、系统联调问题闭环、Bug修复与脚本调整、算法逻辑优化、运行说明及阶段性交付文档。",
        progress: "招募中",
        achievements: "招募2-3人",
        coreObjectives: [
          { title: "系统测试与结果校验", content: "使用Python开展库存预测、库存优化算法全量系统测试，校验批量计算结果并整理测试台账。" },
          { title: "全流程联调", content: "参与系统全流程联调，复现并定位运行问题，配合团队完成问题闭环。" },
          { title: "代码迭代优化", content: "研读存量业务代码，完成Bug修复、脚本调整及算法逻辑微调优化。" },
          { title: "项目文档与交付", content: "整理测试记录、运行说明等配套文档，支撑项目阶段性交付。" }
        ],
        recruitment: {
          count: "2-3人",
          position: "库存优化算法实习生",
          skillRequirements: [
            "熟练掌握Python及NumPy、Pandas，能够读懂和调试业务算法代码",
            "具备基础数据分析与数值计算思维，了解时序预测、库存优化相关知识者优先",
            "掌握Linux基础操作，有算法测试或数据建模项目经验者加分"
          ],
          timeRequirements: ["可连续实习2个月及以上", "每周稳定到岗4天以上"],
          qualityRequirements: ["细心严谨，有耐心梳理大量存量代码", "逻辑清晰，具备独立问题排查能力"],
          expectedGains: [
            "全程参与面向大型国企的真实工业级库存算法项目",
            "参与商用库存算法研发和优化，学习成熟的预测优化算法",
            "获得实习补贴与官方实习证明，表现优异者可获得项目推荐信"
          ]
        }
      },
      {
        id: "ai-business-education-product",
        name: "AI Research & Product Intern：AI × 商学院教育系统",
        description: "共同开发面向留学教育场景的新一代AI产品。岗位强调理解真实教学场景中的问题，并利用AI完成需求发现、产品设计、Vibe Coding、PoC、用户测试与产品迭代，而非单纯按照需求编写代码。",
        period: "长期合作，设有2个月试用期",
        members: "1名",
        partner: "大学教师、商业公司及产品开发成员",
        techIndicators: "Product Sense × AI Native × Learning Ability × Execution",
        expectedOutcome: "面向商学院教育场景的AI教学与学习支持功能、教师端与学生端AI Agent、商业案例分析与决策训练工具、个性化学习和知识管理方案，以及可供用户测试的产品原型与PoC。",
        progress: "招募中",
        achievements: "招募1名，设有2个月试用期",
        coreObjectives: [
          { title: "发现真实教学问题", content: "理解教师端与学生端的真实使用场景，完成需求发现、问题定义和产品判断。" },
          { title: "AI产品与PoC开发", content: "参与AI教学支持、AI Agent、案例分析与决策训练、个性化学习和知识管理等产品的原型及PoC开发。" },
          { title: "工作流与产品迭代", content: "设计Prompt与Agent Workflow，通过用户测试、反馈分析和快速迭代持续验证产品价值。" },
          { title: "研究问题提炼", content: "表现优秀并完成PoC的成员，约半年后可将实际产品中的问题进一步转化为Research Question、实验、模型或AI Agent研究。" }
        ],
        jobResponsibilities: [
          {
            category: "产品与开发",
            items: [
              "AI教学与学习支持、管理系统",
              "教师端 / 学生端AI Agent",
              "商业案例分析与决策训练工具",
              "个性化学习、反馈和知识管理",
              "Prompt / Agent Workflow设计",
              "产品原型、PoC开发、用户需求分析与产品迭代"
            ]
          }
        ],
        recruitment: {
          count: "1名",
          position: "AI Research & Product Intern",
          positionDescription: "前期以产品开发和商业PoC为主。项目由大学老师、商业公司及具有实际产品开发经验的成员直接参与和指导，涵盖商业问题拆解、产品设计、AI架构、Prompt Engineering、Vibe Coding、UI/UX、PoC验证和用户反馈分析。",
          skillRequirements: [
            "能够使用Vibe Coding快速开发产品原型",
            "熟悉Cursor、Codex、Claude Code等AI Coding工具之一者优先",
            "能够设计Prompt，并有效调用AI完成复杂任务",
            "具备较强的产品思维，而不仅是编程能力"
          ],
          timeRequirements: [
            "设有2个月试用期，试用期后根据双方匹配度和项目表现决定是否继续长期合作",
            "能够持续跟进自己负责的项目并主动推进工作"
          ],
          qualityRequirements: [
            "学习速度快、逻辑清晰、沟通表达准确",
            "Self-motivated，执行力强，有责任心",
            "能够发现问题、定义产品、使用AI快速实现并验证价值"
          ],
          expectedGains: [
            "接受商业问题拆解、产品设计、AI / Agent架构、Prompt Engineering、Vibe Coding和UI/UX等指导",
            "参与PoC验证、用户反馈分析与Research Question提炼",
            "表现优秀且展现研究潜力者，约半年后可进一步参与学术研究并在合适情况下共同推进论文",
            "论文机会取决于项目进展与个人表现，并非固定承诺"
          ]
        },
        priorityConditions: ["Product Sense × AI Native × Learning Ability × Execution", "具备产品意识、学习能力和强执行力"]
      },
      {
        id: "ai-overseas-market-product",
        name: "AI Research & Product Intern：AI × 海外市场商业模型",
        description: "共同探索日本、中国及其他海外市场中的新型AI商业模式与产品机会。岗位强调从模糊商业问题中识别真实需求和付费价值，并利用AI完成市场发现、需求判断、产品设计、Vibe Coding、PoC、用户验证与商业模式迭代。",
        period: "长期合作，设有2个月试用期",
        members: "1名",
        partner: "大学教师、商业公司及产品开发成员",
        techIndicators: "Product Sense × Commercial Thinking × AI Native × Execution",
        expectedOutcome: "面向日本、中国及其他海外市场的商业机会分析、AI SaaS或AI Agent产品、跨行业商业PoC、用户需求与付费意愿验证结果、产品原型以及可持续迭代的商业模式方案。",
        progress: "招募中",
        achievements: "招募1名，设有2个月试用期",
        coreObjectives: [
          { title: "海外市场与机会发现", content: "分析日本、中国及其他海外市场，识别酒店、旅游、房地产、跨境电商、媒体、教育与企业服务等领域的商业机会。" },
          { title: "AI产品与商业PoC", content: "开发AI SaaS、AI Agent和跨行业产品原型，通过Vibe Coding与PoC快速验证真实需求。" },
          { title: "用户与商业模式验证", content: "分析用户需求和付费意愿，持续迭代产品方向与商业模式，并探索新市场、新行业和新产品机会。" },
          { title: "研究问题提炼", content: "表现优秀并完成PoC的成员，约半年后可将实际产品和商业场景中的问题转化为Research Question、实验、模型、AI Agent、平台或决策研究。" }
        ],
        jobResponsibilities: [
          {
            category: "市场、产品与开发",
            items: [
              "日本、中国及其他海外市场的商业机会分析",
              "AI SaaS / AI Agent产品开发",
              "酒店、旅游、房地产、跨境电商、媒体、教育、企业服务等领域的商业PoC",
              "用户需求与付费意愿验证",
              "Prompt / Agent Workflow设计",
              "产品原型、PoC开发、商业模式分析与产品迭代",
              "新市场、新行业及新产品方向探索"
            ]
          }
        ],
        recruitment: {
          count: "1名",
          position: "AI Research & Product Intern",
          positionDescription: "前期以产品开发、海外市场验证和商业PoC为主。项目由大学老师、商业公司及具有实际产品开发经验的成员直接参与和指导，涵盖海外市场分析、商业模式设计、产品设计、AI架构、Prompt Engineering、Vibe Coding、UI/UX和PoC验证。",
          skillRequirements: [
            "能够使用Vibe Coding快速开发产品原型",
            "熟悉Cursor、Codex、Claude Code等AI Coding工具之一者优先",
            "能够设计Prompt，并有效调用AI完成复杂任务",
            "具备较强的产品思维和商业判断能力",
            "能够快速理解陌生行业和新的商业模式，对用户、市场和商业机会敏感"
          ],
          timeRequirements: [
            "设有2个月试用期，试用期后根据双方匹配度和项目表现决定是否继续长期合作",
            "能够持续跟进自己负责的项目，主动寻找问题并推进工作"
          ],
          qualityRequirements: [
            "学习速度快、逻辑清晰、沟通表达准确",
            "Self-motivated，执行力强，有责任心",
            "面对模糊商业问题时，能够思考真实问题、目标用户、付费意愿和最快验证路径"
          ],
          expectedGains: [
            "接受海外市场分析、商业问题拆解、用户需求识别、商业模式和产品设计等指导",
            "参与AI / Agent架构、Prompt Engineering、Vibe Coding、UI/UX、PoC验证和用户反馈分析",
            "表现优秀且展现研究潜力者，约半年后可进一步参与学术研究并在合适情况下共同推进论文",
            "论文机会取决于项目进展与个人表现，并非固定承诺"
          ]
        },
        priorityConditions: ["Product Sense × Commercial Thinking × AI Native × Execution", "具备产品意识、商业判断力和强执行力"]
      }
    ]
  });
})();

import {
  FileOutlined,
  TeamOutlined,
  UserOutlined,
} from '@ant-design/icons';

const nav = [
  {"subkey" : "sub1", "icon": <UserOutlined />,"title":"人事管理",
    "nav" : [
      {"key":"3","to":"/home/organization","ele":"组织架构"},
      {"key":"4","to":"home/employee","ele":"在职员工"},
      {"key":"5","to":"home/manager","ele":"项目经理"}
    ],
  },
  {"subkey" : "sub2", "icon": <TeamOutlined />,"title":"项目管理",
    "nav" : [
      {"key":"6","to":"/home/decoration","ele":"家装项目"},
      {"key":"7","to":"home/labour","ele":"劳务项目"},
    ],
  },
  {"subkey" : "sub3", "icon": <UserOutlined />,"title":"财务管理",
    "nav" : [
      {"key":"8","to":"/home/receipt","ele":"项目收款"},
      {"key":"9","to":"home/payment","ele":"项目付款"},
      {"key":"10","to":"home/otherreceipt","ele":"其他收入"},
      {"key":"11","to":"home/otherpayment","ele":"其他支付"},
      {"key":"12","to":"home/salary","ele":"员工工资"}
    ],
  },
  {"subkey" : "sub4", "icon": <FileOutlined />,"title":"内部活动",
    "nav" : [
      {"key":"13","to":"/home/culture","ele":"公司理念"},
      {"key":"14","to":"home/events","ele":"近期活动"},
    ],
  }
]

export default nav
import { defineStore } from "pinia";

export const mainStore = defineStore("main", {
  state: () => {
    return {
      // 系统主题
      siteTheme: "light",
      // 新闻类别
      newsArr: [
        {
          label: "哔哩哔哩",
          subtitle: '热门榜',
          value: "bilibili",
          order: 0,
          show: true,
        },
        {
          label: "微博",
          subtitle: '热搜榜',
          value: "weibo",
          order: 1,
          show: true,
        },
        {
          label: "知乎",
          subtitle: '热榜',
          value: "zhihu",
          order: 2,
          show: true,
        },
        {
          label: "36氪",
          subtitle: '热榜',
          value: "kr36",
          order: 3,
          show: true,
        },
        {
          label: "百度",
          subtitle: '热搜榜',
          value: "baidu",
          order: 4,
          show: true,
        },
        {
          label: "少数派",
          subtitle: '最热',
          value: "sspai",
          order: 5,
          show: true,
        },
        {
          label: "IT之家",
          subtitle: '热榜',
          value: "ithome",
          order: 6,
          show: true,
        },
        {
          label: "澎湃新闻",
          subtitle: '热榜',
          value: "thepaper",
          order: 7,
          show: true,
        },
        {
          label: "今日头条",
          subtitle: '热榜',
          value: "toutiao",
          order: 8,
          show: true,
        },
        {
          label: "百度贴吧",
          subtitle: '热议榜',
          value: "tieba",
          order: 9,
          show: true,
        },
        {
          label: "稀土掘金",
          subtitle: '热榜',
          value: "juejin",
          order: 10,
          show: true,
        },
        {
          label: "腾讯新闻",
          subtitle: '热点榜',
          value: "newsqq",
          order: 11,
          show: true,
        },
      ],
      // 链接跳转方式
      linkOpenType: "open",
      // 页头固定
      headerFixed: true,
      // 时间数据
      timeData: null,
    };
  },
  getters: {
    getNewsArr: state => {
      return state.newsArr
    }
  },
  actions: {
    // 更改系统主题
    setSiteTheme(val) {
      $message.info(`已切换至${val === "dark" ? "深色模式" : "浅色模式"}`, {
        showIcon: false,
      });
      this.siteTheme = val;
    },
  },
  persist: [
    {
      storage: localStorage,
      paths: ["siteTheme", "newsArr", "linkOpenType", "headerFixed"],
    },
  ],
});

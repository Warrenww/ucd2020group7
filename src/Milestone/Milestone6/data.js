const table = [
  {
    id: 'U01',
    age: '30',
    gender: '女',
    ocp: '大學及大專',
  },
  {
    id: 'U02',
    age: '26',
    gender: '女',
    ocp: '研究所',
  },
  {
    id: 'U02',
    age: '25',
    gender: '女',
    ocp: '研究所',
  },
  {
    id: 'U03',
    age: '24',
    gender: '男',
    ocp: '大學及大專',
  },
];

const questionaire = [
  {
    title: '測試過程',
    count: 3,
    config: {
      max: 5,
    },
    question: [
      {content: '您會如何形容剛剛在使用上的困難程度？', reply: [0, 2, 2, 0, 0]},
      {content: '試評估任務完成後您的滿足感', reply: [0, 1, 1, 1, 1]},
      {content: '您覺得自己剛剛用了多少時間進行任務？', reply: [1, 1, 1, 1, 0]},
    ],
  },
  {
    title: '可用性',
    count: 7,
    config: {
      max: 7,
    },
    question: [
      {content: '它可以幫助我提高找效率。', reply: [0, 0, 1, 1, 2, 0, 0]},
      {content: '它可以幫助我提高生產力。', reply: [0, 1, 1, 1, 0, 1, 0]},
      {content: '您會很需要iRemember', reply: [0, 0, 1, 2, 1, 0, 0]},
      {content: '它使我想要完成的事情更容易完成。', reply: [0, 0, 1, 0, 3, 0, 0]},
      {content: '使用它可以節省我的時間。', reply: [0, 1, 0, 1, 2, 0, 0]},
      {content: '符合我的需求。', reply: [0, 0, 1, 1, 2, 0, 0]},
      {content: '它完成了我期望做的所有事情。', reply: [0, 0, 2, 2, 0, 0, 0]},
    ],
  },
  {
    title: '易用性',
    count: 11,
    config: {
      max: 7,
    },
    question: [
      {content: '易於使用', reply: [0, 1, 1, 1, 1, 0, 0]},
      {content: '使用簡單', reply: [0, 0, 1, 2, 1, 0, 0]},
      {content: '它是使用者友善的。', reply: [0, 0, 4, 0, 0, 0, 0]},
      {content: '它需要最少的步驟來完成我想做的事情。', reply: [1, 0, 3, 0, 0, 0, 0]},
      {content: '靈活。', reply: [0, 1, 2, 0, 1, 0, 0]},
      {content: '毫不費力地使用它。', reply: [1, 0, 2, 1, 0, 0, 0]},
      {content: '我可以在沒有書面說明的情況下使用它。', reply: [1, 0, 1, 1, 0, 1, 0]},
      {content: '使用過程中我沒有發現任何不一致之處。', reply: [1, 0, 3, 0, 0, 0, 0]},
      {content: '首次使用的用戶和多次使用用戶都喜歡。', reply: [0, 1, 1, 1, 1, 0, 0]},
      {content: '我可以快速，輕鬆地從錯誤中恢復過來', reply: [0, 1, 1, 1, 0, 1, 0]},
      {content: '我每次都能成功使用它。', reply: [0, 2, 1, 0, 1, 0, 0]},
    ],
  },
  {
    title: '上手情況',
    count: 4,
    config: {
      max: 7,
    },
    question: [
      {content: '我學會了快速使用它', reply: [0, 0, 1, 2, 0, 1, 0]},
      {content: '我很容易記住如何使用它。', reply: [0, 0, 2, 0, 1, 0, 1]},
      {content: '易於學習使用。', reply: [0, 0, 2, 0, 1, 1, 0]},
      {content: '我很快就熟練了。', reply: [0, 0, 1, 2, 0, 1, 0]},
    ],
  },
  {
    title: '滿意度',
    count: 7,
    config: {
      max: 7,
    },
    question: [
      {content: '我對此感到滿意。', reply: [0, 1, 1, 0, 2, 0, 0]},
      {content: '我會推薦給朋友。', reply: [1, 0, 2, 0, 0, 1, 0]},
      {content: '使用起來很有趣。', reply: [0, 0, 0, 3, 0, 1, 0]},
      {content: '它以我想要的方式工作。', reply: [0, 1, 0, 1, 1, 1, 0]},
      {content: '覺得它很讚', reply: [0, 1, 1, 0, 1, 1, 0]},
      {content: '我覺得我需要它。', reply: [0, 1, 0, 1, 1, 1, 0]},
      {content: '使用起來很愉快。', reply: [0, 1, 0, 2, 1, 0, 0]},
    ],
    },
  {
    title: '個人資料',
    count: 4,
    config: {
      type: 'other',
    },
    question: [
      {content: "生理性別", reply: [0]},
      {content: "出生年分", reply: [0]},
      {content: "最高學歷", reply: [0]},
      {content: "有什麼其他想對我們說的建議或是使用後的感想嗎?", reply: [0]},
    ],
  },
];

export {
  table,
  questionaire,
};

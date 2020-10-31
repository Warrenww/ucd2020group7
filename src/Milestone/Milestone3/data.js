import React from 'react';
import {Link} from 'react-router-dom';

const behaviorVariables = [
  {
    left: '不常找不到東西',
    right: '常找不到東西',
    data: [
       {
          "position":"83",
          "user":"U05"
       },
       {
          "position":"10",
          "user":"U03"
       },
       {
          "position":"90",
          "user":"U04"
       },
       {
          "position":"70",
          "user":"U07"
       },
       {
          "position":"40",
          "user":"U08"
       },
       {
          "position":"60",
          "user":"U06"
       },
       {
          "position":"80",
          "user":"U09"
       },
       {
          "position":"30",
          "user":"U01"
       },
       {
          "position":"75",
          "user":"U02"
       }
    ]
  },
  {
    left: '不常整理東西',
    right: '常整理東西',
    data: [
       {
          "position":"43",
          "user":"U05"
       },
       {
          "position":"70",
          "user":"U03"
       },
       {
          "position":"20",
          "user":"U04"
       },
       {
          "position":"85",
          "user":"U07"
       },
       {
          "position":"30",
          "user":"U08"
       },
       {
          "position":"60",
          "user":"U06"
       },
       {
          "position":"40",
          "user":"U09"
       },
       {
          "position":"80",
          "user":"U01"
       },
       {
          "position":"35",
          "user":"U02"
       }
    ],
  },
  {
    left: '找不到的東西大多是不常用的',
    right: '找不到的東西大多是常用的',
    data: [
       {
          "position":"60",
          "user":"U05"
       },
       {
          "position":"5",
          "user":"U03"
       },
       {
          "position":"90",
          "user":"U04"
       },
       {
          "position":"35",
          "user":"U07"
       },
       {
          "position":"55",
          "user":"U08"
       },
       {
          "position":"70",
          "user":"U06"
       },
       {
          "position":"45",
          "user":"U09"
       },
       {
          "position":"10",
          "user":"U01"
       },
       {
          "position":"65",
          "user":"U02"
       }
    ],
  },
  {
    left: '不常把使用的東西歸位',
    right: '常把使用的東西歸位',
    data: [
       {
          "position":"35",
          "user":"U05"
       },
       {
          "position":"90",
          "user":"U03"
       },
       {
          "position":"5",
          "user":"U04"
       },
       {
          "position":"45",
          "user":"U08"
       },
       {
          "position":"80",
          "user":"U07"
       },
       {
          "position":"30",
          "user":"U06"
       },
       {
          "position":"20",
          "user":"U09"
       },
       {
          "position":"75",
          "user":"U01"
       },
       {
          "position":"25",
          "user":"U02"
       }
    ],
  },
  {
    left: '收納物品沒有邏輯',
    right: '收納物品有邏輯',
    data: [
       {
          "position":"90",
          "user":"U03"
       },
       {
          "position":"35",
          "user":"U04"
       },
       {
          "position":"55",
          "user":"U08"
       },
       {
          "position":"85",
          "user":"U07"
       },
       {
          "position":"80",
          "user":"U06"
       },
       {
          "position":"45",
          "user":"U09"
       },
       {
          "position":"75",
          "user":"U01"
       },
       {
          "position":"30",
          "user":"U02"
       },
       {
          "position":"40",
          "user":"U05"
       }
    ],
  },
  {
    left: '不會尋求他人協助',
    right: '會尋求他人協助',
    data: [
       {
          "position":"80",
          "user":"U03"
       },
       {
          "position":"70",
          "user":"U04"
       },
       {
          "position":"85",
          "user":"U07"
       },
       {
          "position":"60",
          "user":"U08"
       },
       {
          "position":"40",
          "user":"U05"
       },
       {
          "position":"20",
          "user":"U06"
       },
       {
          "position":"75",
          "user":"U09"
       },
       {
          "position":"25",
          "user":"U01"
       },
       {
          "position":"65",
          "user":"U02"
       }
    ],
  },
  {
    left: '容易想起東西放置的位置',
    right: '較不容易想起東西放置的位置',
    sub: true,
    data: [
       {
          "position":"50",
          "user":"U05"
       },
       {
          "position":"25",
          "user":"U03"
       },
       {
          "position":"45",
          "user":"U04"
       },
       {
          "position":"80",
          "user":"U07"
       },
       {
          "position":"55",
          "user":"U08"
       },
       {
          "position":"15",
          "user":"U06"
       },
       {
          "position":"90",
          "user":"U09"
       },
       {
          "position":"40",
          "user":"U01"
       },
       {
          "position":"70",
          "user":"U02"
       }
    ],
  },
  {
    left: '不想要改善找不到的情況',
    right: '想要改善找不到的情況',
    sub: true,
    data: [
       {
          "position":"75",
          "user":"U05"
       },
       {
          "position":"50",
          "user":"U03"
       },
       {
          "position":"30",
          "user":"U04"
       },
       {
          "position":"40",
          "user":"U08"
       },
       {
          "position":"20",
          "user":"U06"
       },
       {
          "position":"70",
          "user":"U07"
       },
       {
          "position":"60",
          "user":"U09"
       },
       {
          "position":"25",
          "user":"U01"
       },
       {
          "position":"85",
          "user":"U02"
       }
    ],
  },
];

const steps = ['定義行為變數', '製作Persona', '製作Scenario'];

const contents = [
  <div>
    透過<Link to="/milestone/2">Milestone 2</Link>找出的key finding，我們定義了6個主要行為變數:
    <ol>
      <li>找不到東西的頻率</li>
      <li>整理東西的頻率</li>
      <li>找不到的東西是屬於常用還是不常用的</li>
      <li>用完東西會把它放回原位的頻率</li>
      <li>收納物品的邏輯性</li>
      <li>尋求他人協助的習慣</li>
    </ol>
    與兩項次要行為變數，這兩項變數是我們無法藉由APP提供功能來影響使用者行為進而改善他們的困擾:
    <ol>
      <li>對於放置東西位置的記憶力</li>
      <li>想要改善的動機強度</li>
    </ol>
    並將9位受訪者分別對應到光譜上，找出行為相近的受訪者作為下一個步驟的參考原型
  </div>,
  <div>
    根據前一個步驟得到的分群，我們從本次訪談的受訪者得到兩種Persona:
    <h3>Persona 1</h3>

  </div>,
  <div>

  </div>,
];
export {
  behaviorVariables,
  steps,
  contents,
}

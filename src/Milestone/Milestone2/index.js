import React, {useState, useRef, useEffect} from 'react';
import {
  Grid,
  Paper,
  Tabs,
  Tab,
  Slide,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Grow,
  RootRef,
  List,
  ListItem,
  ListItemIcon,
  Checkbox,
  ListItemText,
} from '@material-ui/core';
import { Alert, AlertTitle } from '@material-ui/lab';
import { Pagination, Statistic, Row, Col } from 'antd';

import Icons from '../../constants/icons';

import AffinityDiagram from './AffinityDiagram';
import { steps, contents, table, affinityDiagram, thinkingPoint } from './data';
import useStyles from '../../constants/styles';

const Milestone2 = props => {
  const classes = useStyles();
  const domRef = useRef();
  const [value, setValue] = useState(0);
  const [page, setPage] = useState(parseInt(Math.random() * 5) + 1);

  useEffect(() => {
    const params = (new URL(document.location)).searchParams;
    const tab = params.get('tab');
    if (tab === 'affinityDiagram') setValue(1);
  }, []);

  useEffect(() => {
    const dom = domRef.current;
    if (dom) {
      const domWidth = dom.getBoundingClientRect().width;
      const parentNode = dom.parentNode;
      const parentNodeWidth = parentNode.getBoundingClientRect().width;
      dom.style.zoom = parentNodeWidth / domWidth * 0.9;
    }
  });

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Grid container spacing={3} justify="center" alignItems="stretch">
      <Grid item xs={12}>
        <Paper className={classes.paper}>
        <Tabs
            value={value}
            onChange={handleChange}
            indicatorColor="primary"
            textColor="primary"
            centered
          >
           {
             steps.map(step =>
               <Tab label={step} key={step}/>
             )
           }
          </Tabs>
          <div className={classes.tabContent}>
            {contents[value]}
          </div>
        </Paper>
      </Grid>

      <Slide direction="left" in={value === 0} mountOnEnter unmountOnExit>
        <Grid item xs={12} sm={6}>
            <Paper className={classes.paper}>
              <h2>設計問題</h2>
              解決找不到東西的困擾
            </Paper>
        </Grid>
      </Slide>

      <Slide direction="left" in={value === 0} mountOnEnter unmountOnExit>
        <Grid item xs={12} sm={6}>
            <Paper className={classes.paper}>
              <h2>目標群眾</h2>
              找不到東西的人
            </Paper>
        </Grid>
      </Slide>

      <Slide direction="left" in={value === 0} mountOnEnter unmountOnExit>
        <Grid item xs={12}>
            <Paper className={classes.paper}>
              <h2>研究參與者</h2>
              在9位深度訪談的受訪者中，年齡介於21~55歲、性別都為女性
              <TableContainer>
                <Table className={classes.table} size="small" aria-label="simple table">
                  <TableHead>
                    <TableRow>
                      <TableCell>參與者</TableCell>
                      <TableCell align="right">年齡</TableCell>
                      <TableCell align="right">性別</TableCell>
                      <TableCell align="right">居住地點(環境)</TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {table.map((row) => (
                      <TableRow key={row.id}>
                        <TableCell component="th" scope="row">
                          {row.id}
                        </TableCell>
                        <TableCell align="right">{row.age}</TableCell>
                        <TableCell align="right">{row.gender}</TableCell>
                        <TableCell align="right">{row.env}</TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </TableContainer>
            </Paper>
        </Grid>
      </Slide>

      <Slide direction="left" in={value === 0} mountOnEnter unmountOnExit>
        <Grid item xs={12}>
            <Paper className={classes.paper}>
              <h2>訪談主軸</h2>
              <Alert variant="outlined" severity="info" className={classes.highlight} icon={<Icons.Search />}>
                <AlertTitle>找東西的情況</AlertTitle>
                描述找到/找不到東西的情況，物品的性質(使用頻率、重要性等等)。為什麼會找不到?用什麼方式找東西?
              </Alert>
              <Alert variant="outlined" severity="info" className={classes.highlight} icon={<Icons.EmojiPeople />}>
                <AlertTitle>個人習慣</AlertTitle>
                收納、整理、歸位物品的習慣，對於尋找物品的影響。
              </Alert>
              <Alert variant="outlined" severity="info" className={classes.highlight}>
                <AlertTitle>使用其他協助方式的情況</AlertTitle>
                <ul>
                  <li>使用其他管理物品方式的情況?</li>
                  <li>使用其他尋找物品方式的情況?</li>
                </ul>
              </Alert>
              <Alert variant="outlined" severity="info" className={classes.highlight} icon={<Icons.Explore />}>
                <AlertTitle>對於協助管理及找尋物品之系統的需求與期望</AlertTitle>
                介面、功能、使用意願
              </Alert>
            </Paper>
        </Grid>
      </Slide>

      <Slide direction="left" in={value === 1} mountOnEnter unmountOnExit>
        <Grid item xs={12}>
          <Paper className={classes.paper}>
            <h2>Affinity Diagram</h2>
            我們將所有訪談逐字稿嘬出來的note拿掉其中沒有涵蓋足夠概念的note與沒有深層概念的note，並合併意思完全一樣的note，最後總共整理出120張note。
            <br/>
            將這些note中概念相近的分在一群，得到29個label，接者將這些label在一次合併到更大的概念下，做出12個第二層標籤。
            <br/>
            最後從這12個第二層標籤中，合併對於之後設計產品方向相近的label，得到第一層的標籤。
            <br/>
            同時這4個第一層標籤也是我們這次affinity diagram的key finding。
            <Row className={classes.statistic}>
              <Col span={6}>
                <Statistic title="Note數" suffix="張" value={120} />
              </Col>
              <Col span={6}>
                <Statistic title="第三層標籤" suffix="張" value={29} />
              </Col>
              <Col span={6}>
                <Statistic title="第二層標籤" suffix="張" value={12} />
              </Col>
              <Col span={6}>
                <Statistic title="第一層標籤" suffix="張" value={4} />
              </Col>
            </Row>
            <RootRef rootRef={domRef}>
              <div className={classes.affinityDiagramContainer}>
                {
                  affinityDiagram.map((x,i) => (
                    <div key={`affinity-diagram-indicator-${i}`} className={"holder " + (page === i + 1 ? "active" : "")} onClick={() => setPage(i + 1)}>
                      <AffinityDiagram data={x} />
                    </div>
                  ))
                }
              </div>
            </RootRef>
            <div style={{margin: 20}} />
            {
              affinityDiagram.map((x,i) => (
                <Grow in={page === i + 1} mountOnEnter unmountOnExit key={`affinity-diagram-${i}`}>
                  <AffinityDiagram data={x} />
                </Grow>
              ))
            }
            <Pagination
              className={classes.pagination}
              current={page}
              total={affinityDiagram.length}
              pageSize={1}
              onChange={page => setPage(page)}
            />
          </Paper>
        </Grid>
      </Slide>

      <Slide direction="left" in={value ===1} mountOnEnter unmountOnExit>
        <Grid item xs={12}>
          <Paper className={classes.paper}>
            <h2>Key Finding</h2>
            <Alert variant="outlined" severity="info" className={classes.highlight} icon={<Icons.Search />}>
              <AlertTitle>Finding 1</AlertTitle>
              常因隨手放、沒歸位及或使用頻率低會造成不知道東西放哪，從而找不到東西。
            </Alert>
            <Alert variant="outlined" severity="info" className={classes.highlight} icon={<Icons.Storage />}>
              <AlertTitle>Finding 2</AlertTitle>
              妥善分類可以方便未來尋找，但若是收到收太隱密的地方，時間一久，也有可能忘記自己當初把東西收在哪裡。
            </Alert>
            <Alert variant="outlined" severity="info" className={classes.highlight} icon={<Icons.Group />}>
              <AlertTitle>Finding 3</AlertTitle>
              找不到東西時，會先請親友幫忙找，若非重要物品且有其他替代品，就會先以其他物品替代，因為某天可能該物品就會不經意出現。
            </Alert>
            <Alert variant="outlined" severity="info" className={classes.highlight} icon={<Icons.PhoneAndroid />}>
              <AlertTitle>Finding 4</AlertTitle>
              希望有一款APP，可以用拍照和語音的方式輸入或存檔，用視覺化的方式呈現，並可以製作個人的虛擬空間，有分類規劃、共同編輯、提醒功能，還可以用標籤分類及搜尋。希望APP簡易操作不耗時。
            </Alert>
          </Paper>
        </Grid>
      </Slide>

      <Slide direction="left" in={value ===1} mountOnEnter unmountOnExit>
        <Grid item xs={12}>
          <Paper className={classes.paper}>
            <h2>Take away message</h2>
            <Grid container spacing={6}>
              <Grid item xs={12} md={6}>
                <h2>之後的設計重點</h2>
                設計一款APP
                <div style={{margin: 10}} />
                <Alert
                  variant="outlined"
                  severity="success"
                  className={classes.highlight}
                  icon={<><Icons.PhotoCamera /><Icons.Add /><Icons.Mic /></>}
                >
                  可以透過<b>拍照</b>和<b>語音</b>的方式輸入或存檔物品擺放位置
                </Alert>
                <Alert
                  variant="outlined"
                  severity="success"
                  className={classes.highlight}
                  icon={<><Icons.Visibility /><Icons.Add /><Icons.Streetview /></>}
                >
                  用<b>視覺化</b>的方式呈現，並可以製作個人<b>虛擬空間</b>
                </Alert>
                <Alert
                  variant="outlined"
                  severity="success"
                  className={classes.highlight}
                  icon={<><Icons.Group /><Icons.Add /><Icons.Notifications /></>}
                >
                  並擁有<b>分類規劃</b>、<b>共同編輯</b>、<b>提醒功能</b>
                </Alert>
                <Alert
                  variant="outlined"
                  severity="success"
                  className={classes.highlight}
                  icon={<><Icons.LocalOffer /><Icons.Add /><Icons.Search /></>}
                >
                  還可以用<b>標籤</b>分類及<b>搜尋</b>
                </Alert>
              </Grid>

              <Grid item xs={12} md={6}>
                <h2>要考慮的重點</h2>
                <List className={classes.list}>
                  {
                    thinkingPoint.map(x => (
                      <ListItem key={value} role={undefined} dense>
                        <ListItemIcon>
                          <Checkbox
                            edge="start"
                            tabIndex={-1}
                            disableRipple
                            checked
                          />
                        </ListItemIcon>
                        <ListItemText>
                          {x}
                        </ListItemText>
                      </ListItem>
                    ))
                  }
                </List>
              </Grid>
            </Grid>
          </Paper>
        </Grid>
      </Slide>

    </Grid>
  );
};

export default Milestone2;

import { createElement, useEffect, useState } from 'rax';
import View from 'rax-view';
import styles from './index.module.less';
import moment from 'moment';
import QRimg from '@/asset/images/QRcode.png';
import ScanPic from '@/asset/images/已经扫码.png';
import Arrow from '@/asset/images/arrow.png';

const MainPage = () => {
  const [cur, setCur] = useState(moment());

  useEffect(() => {
    // 每秒更新一次时间
    const timer = setInterval(() => {
      setCur(moment());
    }, 1000);

    // 删除时间
    return () => {
      clearInterval(timer);
    };
  }, []);

  return (
    <div className={styles.mainBox}>
      <div className={styles.bgGreen} />

      {/* 第一个Card */}
      <section className={styles.mainCard}>
        <span className={styles.datePart}>{cur.format('MM月DD日')}</span>
        <span className={styles.timePart}>{cur.format('HH:mm:ss')}</span>
        <View className={styles.codePart} style={{ backgroundImage: `url(${ScanPic})` }}>
          <p style={{ width: '100%' }}>
            李*锋
            <span className={styles.jumpTitle}>显示</span>
          </p>
          <span>华泰创业园11号楼</span>
          <img width={200} height={200} src={QRimg} alt="" />
          <span>杭州健康码</span>
          <span style={{ color: '#cb7e2e' }}>已完成新冠疫苗加强接种</span>
        </View>
      </section>
      {/* 48小时核算+个人行程卡 */}
      <section className={styles.timeCard}>
        <div className={styles.testPart}>
          <span>采样 48h内</span>
          <span>结果阴性</span>
          <span className={styles.testBtn}>
            核酸检测
            <span className={styles.icon}>{'>'}</span>
          </span>
        </div>
        <section className={styles.line} />
        <div className={styles.gogoCard}>
          <img style={{ width: 100, height: 100, float: 'left' }} src={Arrow} alt="" />
          <p>
            疫情重点
            <br />
            地区核验
          </p>
          <p>
            您于14天内未到访
            <br />
            疫情重点地区
          </p>
        </div>
      </section>
      <section className={styles.routeCard}>
        <div>
          <p>行程卡</p>
          <p>查看14天是否到过中高风险地区</p>
        </div>
        <div>
          <span>详情</span>
        </div>
      </section>
    </div>
  );
};
export default MainPage;

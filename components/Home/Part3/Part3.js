import styles from './part3.module.css'

export default function Part3 (props) {
  return (
    <div className={styles.part3}>
      <div>
        <div className={styles.text1}>支持多类型扫码，适应多场景需求</div>
        <div className={styles.text2}>
          根据不同场景下顾客需求，将商家的服务以最贴切方式呈现
        </div>
        <div className={styles.list}>
          <div className={styles.listItem}>- 菜品浏览</div>
          <div className={styles.listItem}>- 精选菜品</div>
          <div className={styles.listItem}>- 点餐下单</div>
          <div className={styles.listItem}>- 消费支付</div>
        </div>
      </div>
      <div className={styles.right}>
        <div className={styles.rightItem}>桌码</div>
        <div className={styles.rightItem}>店码</div>
        <div className={styles.rightItem}>自主点餐码</div>
        <div className={styles.rightItem}>消费码</div>
        <div className={styles.rightItem}>菜品码</div>
        <div className={styles.rightItem}>聚合支付码</div>
      </div>
    </div>
  );
}

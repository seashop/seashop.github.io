import styles from "./header.module.css";

export default function Header(props) {
  return (
    <div className={styles.header}>
      <h1 className={styles.logo}>LOGO</h1>
      <div className={styles.menus}>
        <div className={`${styles.menuItem} ${styles.menuItemActive}`}>
          官网首页
        </div>
        <div className={styles.menuItem}>产品中心</div>
        <div className={styles.menuItem}>解决方案</div>
        <div className={styles.menuItem}>下载</div>
        <div className={styles.menuItem}>关于我们</div>
      </div>
      <div className={styles.btnGroup}>
        <div className={`${styles.btn} ${styles.btnPrimary}`}>免费试用</div>
        <div className={`${styles.btn}`}>立即登录</div>
      </div>
    </div>
  );
}

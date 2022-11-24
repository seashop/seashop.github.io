import Image from "next/image";
import CommonPart from "./CommonPart";
import styles from "./home.module.css";
import Part3 from "./Part3/Part3";

export default function Home(props) {
  return (
    <div className={styles.home}>
      <div className={styles.part} style={{ background: "blue" }}>
        <div className={styles.text1}>餐饮店铺好帮手</div>
        <div className={styles.text2}>
          为迅速表达想法、与团队同步节奏、高效团队协作而生的云端平台
        </div>
        <div className={styles.btnGroup}>
          <div className={`${styles.btn} ${styles.btnPrimary}`}>免费试用</div>
          <div className={`${styles.btn}`}>立即登录</div>
        </div>
        <Image
          src="/images/img1.png"
          alt=""
          width={718}
          height={424}
          className={styles.img1}
        />
      </div>
      <div className={styles.part}>
        <div
          className={styles.text1}
          style={{ color: "#101010", fontWeight: 600 }}
        >
          产品价格
        </div>
        <div className={styles.priceList}>
          <div className={styles.priceListItem}>
            <div className={styles.priceListItemTitle}>
              <div>小商户</div>
              <div>$149/mo</div>
            </div>
            <div className={styles.priceListItemDesc}>
              <div className={styles.priceListItemSubTitle}>
                小商户版适用场景:
              </div>
              适用小吃、快餐等面积较小，没有固定座位的店铺。
              在店铺较明显的地方，如海报、收银台等贴上店铺下单二维码，顾客扫码查看菜单并直接下单支付，支持多人同时扫码下单。
            </div>
          </div>
          <div className={styles.priceListItem}>
            <div className={styles.priceListItemTitle}>
              <div>大商户</div>
              <div>$1499/mo</div>
            </div>
            <div className={styles.priceListItemDesc}>
              <div className={styles.priceListItemSubTitle}>
                大商户版适用场景:
              </div>
              适用于有一定规模餐厅、酒吧等餐饮店铺。
              顾客用手机扫餐桌上二维码进行点餐、下单、付款、呼叫服务等。
              顾客也可通过店员使用平板电脑代为点餐、下单。
            </div>
          </div>
          <div className={styles.priceListItem}>
            <div className={styles.priceListItemTitle}>
              <div>连锁商户</div>
              <div>定制</div>
            </div>
            <div className={styles.priceListItemDesc}>
              <div className={styles.priceListItemSubTitle}>
                连锁商户版适用场景:
              </div>
              根据客户需要定制组合软件服务。
            </div>
          </div>
        </div>
      </div>
      <Part3 />
      <CommonPart
        imgPosition="left"
        text1="节省点菜时间"
        text2="顾客自助点菜，无需求助服务员、选择自己喜欢的食物即可。支付方便，减少收银台高峰买单压力。"
        textList={["- 自助点餐", "-自助支付"]}
      />
      <CommonPart
        bgColor="#F0F0F0"
        imgPosition="right"
        text1="提升翻台率"
        text2="提升顾客消费体验，更为商家节省人力、菜品成本，减少出错率、增加翻台率"
        textList={[
          "- 提升顾客体验",
          "- 节省商家成本",
          "- 减少出错率",
          "- 增加翻台率",
        ]}
      />
      <CommonPart
        imgPosition="left"
        text1="营销活动数据分析"
        text2="顾客自助点菜，无需求助服务员、选择自己喜欢的食物即可。支付方便，减少收银台高峰买单压力。"
        textList={["- 提高品牌知名度", "- 增加店铺曝光", "- 提升潜在消费"]}
      />
      <CommonPart
        bgColor="#F0F0F0"
        imgPosition="right"
        text1="数据支撑，高效决策"
        text2="通过智能数据报表针对门店、会员、营销活动、商品销售、财务数据分析，给管理者提供决策的数据支撑"
        textList={[
          "- 店铺定期营收报表",
          "- 会员增量数据分析",
          "- 营销活动数据分析",
        ]}
      />
    </div>
  );
}

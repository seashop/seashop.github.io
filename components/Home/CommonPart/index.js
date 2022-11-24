import styles from './commonPart.module.css'
import Image from "next/image";

export default function CommonPart (props) {
  const { imgPosition = 'left', text1, text2, textList, bgColor = 'white' } = props;
  return (
    <div className={styles.commonPart} style={{ backgroundColor: bgColor }}>
      {imgPosition === "left" ? (
        <>
          <Image
            src="/images/img1.png"
            alt=""
            width={718}
            height={424}
            className={styles.img}
          />
          <div className={styles.content} style={{ marginLeft: 100 }}>
            <div className={styles.text1}>{text1}</div>
            <div className={styles.text2}>{text2}</div>
            <div className={styles.list}>
              {textList.map((item) => (
                <div className={styles.listItem} key={item}>
                  {item}
                </div>
              ))}
            </div>
          </div>
        </>
      ) : (
        <>
          <div className={styles.content} style={{ marginRight: 100 }}>
            <div className={styles.text1}>{text1}</div>
            <div className={styles.text2}>{text2}</div>
            <div className={styles.list}>
              {textList.map((item) => (
                <div className={styles.listItem} key={item}>
                  {item}
                </div>
              ))}
            </div>
          </div>
          <Image
            src="/images/img1.png"
            alt=""
            width={718}
            height={424}
            className={styles.img}
          />
        </>
      )}
    </div>
  );
}
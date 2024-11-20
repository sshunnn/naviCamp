import Image from "next/image";
import styles from "./page.module.scss";

export default function Home() {
  return (
    <>
      <body>
        <header className={styles.Header}>
          <nav className={styles.Navigation_wrapper}>
            <span className={styles.Navigation_logo}>NextCamp</span>
            <form>
              <input
                type="text"
                id="searchInput"
                name="searchInput"
                placeholder="キーワード・エリア・施設"
                className={styles.Navigation_search}
              />
            </form>
            <a href="/register" className={styles.Navigation_login}>
              会員登録
            </a>
            <a href="/register" className={styles.Navigation_login}>
              ログイン
            </a>
          </nav>
          <h1 className={styles.Header_title}>
            自然と触れ合い、新しい思い出を作ろう
          </h1>
        </header>
        <div className={styles.Top}>
          <Image
            src="/topBackGround.jpg"
            alt="Top Background"
            width={1920} // 画像の幅を指定
            height={450} // 画像の高さを指定
            className={styles.Top_headImage}
          />
        </div>
        <h1 className={styles.Top_heading}>キャンプ場一覧</h1>
        <div className={styles.campCard_wrapper}>
          <Image
            src="/camp.jpg"
            alt="camp1"
            width={210} // 画像の幅を指定
            height={210} // 画像の高さを指定
            // className={styles.Top_headImage}
          />
          <dl className={styles.campCard_additionalInfo}>
            <dt className={styles.campCard_campName}>ネーブルキャンプ</dt>
            <dd className={styles.campCard_detailInfo}>
              <p className={styles.campCard_explanation}>
                風の渡る音、鳥やカエルの声…それが最高のBGM♪農家の裏庭キャンプ場。
              </p>
              <p className={styles.campCard_explanation}>
                田んぼの真ん中で静けさを楽しみませんか？ 
              </p>
              <p className={styles.campCard_address}>
                埼玉県加須市油井ケ島1393-1
              </p>
              <a className={styles.campCard_link} href="">
                ネーブルパークの詳細
              </a>
            </dd>
          </dl>
        </div>
      </body>
    </>
  );
}

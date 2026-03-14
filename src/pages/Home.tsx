import { useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { infoItems } from '../data/info'
import { works } from '../data/works'
import WorkCard from '../components/WorkCard'
import profileImage from '../assets/monmon.png'
import heroBanner from '../assets/hero-banner.png'
import youtubeIcon from '../assets/icon-youtube.png'
import xIcon from '../assets/icon-x.png'
import githubIcon from '../assets/icon-github.svg'

export default function Home() {
  const location = useLocation()

  useEffect(() => {
    if (location.hash) {
      const target = document.querySelector(location.hash)
      if (target) {
        target.scrollIntoView({ behavior: 'smooth' })
      }
    }
  }, [location.hash])

  return (
    <main className="home">
      <section className="hero-banner" aria-label="Hero">
        <img src={heroBanner} alt="Portfolio Hero" />
        {/* TODO: ここに画像を配置 */}
      </section>
      <section id="profile" className="section hero">
        <div className="hero__layout">
          <div className="hero__image-box">
            <div className="hero__image">
              <img src={profileImage} alt="Profile" />
              {/* TODO: ここに画像を配置 */}
            </div>
          </div>
          <div className="hero__content">
            <div className="hero__text">
              <p className="hero__eyebrow">Creator & Developer</p>
              <h1 className="hero__name">mon/shirumono</h1>
              <p className="hero__bio">
                主に作曲を行なっており、ゲーム制作やWeb、オーディオプラグインなどの開発も行っています
                {/* EDIT: ここを書き換える */}
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id="info" className="section info">
        <div className="section__header">
          <h2>Information</h2>
          <p>最新のお知らせ</p>
        </div>
        <ul className="info__list">
          {infoItems.map((item) => (
            <li key={`${item.date}-${item.text}`} className="info__item">
              <span className="info__date">{item.date}</span>
              <span className="info__text">{item.text}</span>
            </li>
          ))}
        </ul>
      </section>

      <section id="works" className="section works">
        <div className="section__header">
          <h2>Works</h2>
          <p>クリックすると詳細ページへ移動します</p>
        </div>
        <div className="works__grid">
          {works.map((work) => (
            <WorkCard key={work.id} work={work} />
          ))}
        </div>
      </section>

      <section id="links" className="section links">
        <div className="section__header">
          <h2>Links</h2>
          <p>SNSや外部サービス</p>
        </div>
        <div className="links__grid">
          <a
            className="links__item"
            href="https://www.youtube.com/@siruMONo_42"
            target="_blank"
            rel="noreferrer"
          >
            <img src={youtubeIcon} alt="YouTube" />
            {/* TODO: ここに画像を配置 */}
            <span>YouTube</span>
          </a>
          <a
            className="links__item"
            href="https://x.com/shiruMONo_42"
            target="_blank"
            rel="noreferrer"
          >
            <img src={xIcon} alt="X (Twitter)" />
            {/* TODO: ここに画像を配置 */}
            <span>X (Twitter)</span>
          </a>
          <a
            className="links__item"
            href="https://github.com/shirumono42"
            target="_blank"
            rel="noreferrer"
          >
            <img src={githubIcon} alt="GitHub" />
            {/* TODO: ここに画像を配置 */}
            <span>GitHub</span>
          </a>
        </div>
        <p className="links__note">
          連絡先や追加リンクがあればここに追記できます。
          {/* EDIT: ここを書き換える */}
        </p>
        <Link className="links__cta" to="/works/portfolio">
          代表作を見る
        </Link>
      </section>
    </main>
  )
}

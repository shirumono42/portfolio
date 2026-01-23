import { Link, useParams } from 'react-router-dom'
import { works } from '../data/works'

export default function WorkDetail() {
  const { id } = useParams()
  const work = works.find((item) => item.id === id)
  const commentLines = work?.comment.split('<br>') ?? []

  if (!work) {
    return (
      <main className="detail">
        <div className="detail__container">
          <h1>作品が見つかりませんでした</h1>
          <Link className="detail__back" to="/">
            Homeへ戻る
          </Link>
        </div>
      </main>
    )
  }

  return (
    <main className="detail">
      <div className="detail__container">
        <div className="detail__hero">
          <img src={work.image} alt={work.title} />
          {/* TODO: ここに画像を配置 */}
        </div>

        <div className="detail__content">
          <p className="detail__eyebrow">Work Detail</p>
          <h1 className="detail__title">{work.title}</h1>

          <section className="detail__section">
            <h2>作品の概要</h2>
            <p>{work.overview}</p>
          </section>

          <section className="detail__section">
            <h2>使用した技術 / ソフトウェア</h2>
            <ul className="detail__tags">
              {work.techs.map((tech) => (
                <li key={tech} className="detail__tag">
                  {tech}
                </li>
              ))}
            </ul>
          </section>

          <section className="detail__section">
            <h2>制作の感想 / こだわり</h2>
            <p>
              {commentLines.map((line, index) => (
                <span key={`${line}-${index}`}>
                  {line}
                  {index < commentLines.length - 1 && <br />}
                </span>
              ))}
            </p>
          </section>

          <div className="detail__actions">
            <Link className="detail__back" to="/">
              Homeへ戻る
            </Link>
            <Link className="detail__back" to={{ pathname: '/', hash: '#works' }}>
              作品一覧へ
            </Link>
          </div>
        </div>
      </div>
    </main>
  )
}

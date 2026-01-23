import { Link } from 'react-router-dom'
import type { WorkItem } from '../data/works'

type WorkCardProps = {
  work: WorkItem
}

export default function WorkCard({ work }: WorkCardProps) {
  return (
    <article className="work-card">
      <Link className="work-card__link" to={`/works/${work.id}`}>
        <div className="work-card__thumb">
          <img src={work.thumbnail} alt={work.title} />
          {/* TODO: ここに画像を配置 */}
        </div>
        <h3 className="work-card__title">{work.title}</h3>
      </Link>
    </article>
  )
}

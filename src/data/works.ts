import portfolioThumb from '../assets/works/portfolio-thumb.svg'
import portfolioMain from '../assets/works/portfolio-main.svg'
import taskThumb from '../assets/works/task-thumb.svg'
import taskMain from '../assets/works/task-main.svg'
import landingThumb from '../assets/works/landing-thumb.svg'
import landingMain from '../assets/works/landing-main.svg'

export type WorkItem = {
  id: string
  title: string
  thumbnail: string
  image: string
  overview: string
  techs: string[]
  comment: string
}

export const works: WorkItem[] = [
  {
    id: 'tenage-dj',
    title: '空気読みDJテンアゲの助',
    thumbnail: portfolioThumb, // TODO: ここに画像を配置
    image: portfolioMain, // TODO: ここに画像を配置
    overview: 'AIがチャットの雰囲気を読み取り、それに合わせたBGMを流す次世代のチャットアプリ', // EDIT: ここを書き換える
    techs: ['Python', 'local AI', 'React', 'TypeScript'],
    comment:
      '初めてのReact作品として、構成をコンポーネントで整理することに注力しました。', // EDIT: ここを書き換える
  },
  {
    id: 'vrc-homeworld',
    title: 'Gaussian Homeworld for VRChat',
    thumbnail: taskThumb, // TODO: ここに画像を配置
    image: taskMain, // TODO: ここに画像を配置
    overview: 'VRChat内にGaussian Splattingを使用して自室を再現したワールド', // EDIT: ここを書き換える
    techs: ['RealityScan', 'brush_app', 'Unity', 'Udon', 'Super Splat'],
    comment: 'UIの使いやすさと、状態管理の整理にこだわりました。', // EDIT: ここを書き換える
  },
  {
    id: 'm-fes2026-web',
    title: 'M-Fes 2026 Official Page',
    thumbnail: landingThumb, // TODO: ここに画像を配置
    image: landingMain, // TODO: ここに画像を配置
    overview: '2026年のM-Fesのホームページ', // EDIT: ここを書き換える
    techs: ['Studio', 'Cavalry', 'Figma'],
    comment:
      '情報の優先順位が伝わるよう、レイアウトと余白設計を意識しました。', // EDIT: ここを書き換える
  },
]

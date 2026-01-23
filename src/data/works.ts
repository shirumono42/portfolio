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
    id: 'portfolio',
    title: 'Personal Portfolio Site',
    thumbnail: portfolioThumb, // TODO: ここに画像を配置
    image: portfolioMain, // TODO: ここに画像を配置
    overview: '自己紹介と制作物をまとめたポートフォリオサイト。', // EDIT: ここを書き換える
    techs: ['React', 'TypeScript', 'Vite', 'CSS'],
    comment:
      '初めてのReact作品として、構成をコンポーネントで整理することに注力しました。', // EDIT: ここを書き換える
  },
  {
    id: 'task-app',
    title: 'Task Manager',
    thumbnail: taskThumb, // TODO: ここに画像を配置
    image: taskMain, // TODO: ここに画像を配置
    overview: 'タスクの追加・完了ができるシンプルな管理アプリ。', // EDIT: ここを書き換える
    techs: ['React', 'TypeScript', 'LocalStorage'],
    comment: 'UIの使いやすさと、状態管理の整理にこだわりました。', // EDIT: ここを書き換える
  },
  {
    id: 'landing',
    title: 'Product Landing Page',
    thumbnail: landingThumb, // TODO: ここに画像を配置
    image: landingMain, // TODO: ここに画像を配置
    overview: '架空プロダクトのLPデザインと実装。', // EDIT: ここを書き換える
    techs: ['React', 'CSS', 'Responsive'],
    comment:
      '情報の優先順位が伝わるよう、レイアウトと余白設計を意識しました。', // EDIT: ここを書き換える
  },
]

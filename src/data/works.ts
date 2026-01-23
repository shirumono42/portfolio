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
    techs: ['Python', 'ComfyUI', 'React', 'TypeScript'],
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
    comment: 'VRCの世界と現実の世界を混ぜユニークな表現を実現したかった', // EDIT: ここを書き換える
  },
  {
    id: 'm-fes2026-web',
    title: 'M→Fes 2026 Official Page',
    thumbnail: landingThumb, // TODO: ここに画像を配置
    image: landingMain, // TODO: ここに画像を配置
    overview: '2026年のM→Fesのホームページ', // EDIT: ここを書き換える
    techs: ['Studio', 'Cavalry', 'Figma'],
    comment:
      'M→Fes2026のテーマ「寒色・透明感」に合わせてチームで制作した', // EDIT: ここを書き換える
  },
  {
    id: 'anonatu-remix',
    title: 'あの夏のいつかは（Short Remix）',
    thumbnail: landingThumb, // TODO: ここに画像を配置
    image: landingMain, // TODO: ここに画像を配置
    overview: `
*Luna様による「あの夏のいつかはfeat.Otomachi Una & Rana | 2019 Ver.」をShort Remixさせていただきました!`, // EDIT: ここを書き換える
    techs: ['Cubase', 'Cavalry', 'ComfyUI', 'DaVinci Resolve'],
    comment:
      '少し懐かしさを感じられる作品に仕上げた', // EDIT: ここを書き換える
  },
  {
    id: 'id',
    title: 'title',
    thumbnail: landingThumb, // TODO: ここに画像を配置
    image: landingMain, // TODO: ここに画像を配置
    overview: `overview`, // EDIT: ここを書き換える
    techs: ['Studio', 'Cavalry', 'Figma'],
    comment:
      'comment', // EDIT: ここを書き換える
  },
]

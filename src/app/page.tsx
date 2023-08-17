import Image from 'next/image'
import { Header } from '@/components/header/header'
import { HeadPart } from '@/components/Head Part/headPart'
import { Infos } from '@/components/Infos/Infos'
import { Couts } from '@/components/Couts/Couts'
import { Tags } from '@/components/Tags/tags'
import { Brainstorm } from '@/components/Brainstorm/brainstorm'

export default function Home() {
  return (
    <div className=''>
        <Header/>
        <HeadPart />
        <Infos />
        <Couts/>
        <Tags/>
        <Brainstorm/>
    </div>
  )
}

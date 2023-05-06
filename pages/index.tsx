import TabsView from '../components/tabs/TabsView'
import {TabItem} from '../components/tabs/types/types'
import styles from '../styles/Home.module.css'

function Content1() {
  return <div>Content 1</div>;
}
function Content2() {
  return <div>Content 2</div>;
}
function Content3() {
  return <div>Content 3</div>;
}

const items: TabItem[] = [
  {
    id: '1',
    title: "Tab 1",
    content: Content1,
  },
  {
    id: '2',
    title: "Tab 2",
    content: Content2,
  },
  {
    id: '3',
    title: "Tab 3",
    content: Content3,
  },
];


const handleChange= (item: TabItem) =>{
  
}

export default function Home() {
  return (
    <div>
      <TabsView items={items} onChange={handleChange}/>
    </div>
  )
}

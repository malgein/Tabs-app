import React,{useState} from 'react'
import { TabItem } from './types/types';

interface TabsViewProps {
	items: TabItem[] ;
	onChange: (item: TabItem) => void;
}

const TabsView = ({items, onChange}: TabsViewProps) =>{

	const [selected, setSelected] = useState<number | null>(items.length >=0 ? 0 : null)

	const handleClick =(index: number) =>{
		setSelected(index)
	}

	if(selected ===null){
		return null
	}
	return(
		<div>
			<div>
				{items.map((item, index) => (
					<TabView 
					 key={index}
					 index={index}
					 active={index === selected}
					 item={item}
					 onClick={handleClick}
					 />
				))}
			</div>
			<div>
				<div>
					{items.map((item, index) => (
						<>{selected=== index && <item.content />}</>
					))}
				</div>
			</div>
		</div>
	)
}

interface TabViewProps{
	index: number;
	active: boolean;
	item: TabItem;
	onClick: (index: number) => void;
}

const TabView = ({index, active, item, onClick}: TabViewProps) =>{
	return active? <div>{item.title}</div> : <button onClick={() => onClick(index)}>{item.title}</button>
}

export default TabsView
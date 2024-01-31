import { useState, useReducer } from "react";
import HeaderComponent from "./components/header";
import MainComponent from "./components/main";
import PricesSlider from "./components/price";
import ComplectComponent from "./components/complect";
import PerfectComponent from "./components/perfect";
import ExampleComponent from "./components/example";
import ColculateComponent from "./components/coloculate";
import CommentComponent from "./components/comment";
import QuestionComponent from "./components/question";
import FooterComponent from "./components/footer";
import ModalComponent from "./components/modal";
import { AnimatePresence } from "framer-motion";
import { FaWhatsapp } from "react-icons/fa6";
import './styles/global.css';

const reducer = (state, action) => {
	switch(action.type){
		case 'order':
			return {visible:true, type:'order'};
		case 'price':
			return {visible:true, type:'price'};
		case 'close':
			return {visible:false, type:null}
		default:
			return state;
	}
} 

const initialState = {
	visible: false,
	type:null,
}

function App() {
	const [isVisible, setIsVisible] = useState(false);
	const [store, dispatch] = useReducer(reducer, initialState)

  return (
    <>
			<HeaderComponent />
			<MainComponent dispatch={dispatch}/>
			<PricesSlider />
			<ComplectComponent />
			<PerfectComponent />
			<ExampleComponent />
			<ColculateComponent dispatch={dispatch}/>
			<CommentComponent />
			<QuestionComponent />
			<FooterComponent />
			<AnimatePresence>
				{store.visible && 
					<ModalComponent 
						type={store.type} 
						close={() => dispatch({type:'close'})}
					/> 
				}
			</AnimatePresence>
			<div className="whatsapp">
				<FaWhatsapp size={48} color="white"/>
			</div>
		</>
  )
}

export default App;

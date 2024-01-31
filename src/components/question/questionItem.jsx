import {useState} from "react";
import { AiFillPlusCircle } from "react-icons/ai";
import {motion} from "framer-motion"
import "./style.css";

const variantsIcon = {
	closed: {
		rotate:0,
	},
	open:{
		rotate:45,
	}
} 

const variantsBox = {
	closed:{
		opacity:0,
		height:0,
		marginTop:0
	},
	open:{
		opacity:1,
		height:"auto",
		marginTop:10
	}
}

function QuestionItem({title, content}) {
	const [isVisible, setIsVisible] = useState(false);

	return ( 
		<motion.div className="question-item" layout>
			<div
				onClick={() => setIsVisible(!isVisible)} 
				className="question-control">
				<span>{title}</span>
				<motion.div
					initial="closed"
					animate={isVisible ? "open" : "closed"}
					variants={variantsIcon}
					transition={{duration:0.1, ease:"linear"}}
					className="question-control__icon">
					<AiFillPlusCircle />
				</motion.div>
			</div>
			<motion.div
				initial="closed"
				animate={isVisible ? "open" : "closed"}
				variants={variantsBox}
				transition={{duration:0.2, ease:"linear"}} 
				className="question-text">
				<p>{content}</p>
			</motion.div>
		</motion.div>
	);
}

export default QuestionItem;
import { useState } from "react";
import { FaPhone } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import { LuMenuSquare } from "react-icons/lu";
import { IoCloseCircleOutline } from "react-icons/io5";
import {motion, AnimatePresence} from 'framer-motion';
import './style.css';

const variants = {
	hidden: { x: "-100%" },
	visible: { x: 0 },
}

function Index() {
	const [isVisible, setIsVisible] = useState(false);

	return ( 
		<>
		<header className='header'>
			<div className="layout header-content">
				<div>
					<img className="logo" src="/logo.png" alt="Vite Logo" />
				</div>
				<nav className='menu'>
					<li><a href="#">Главная</a></li>
					<li><a href="#complect">Услуги</a></li>
					<li><a href="#example">Примеры</a></li>
					<li><a href="#comment">Отзывы</a></li>
					<li><a href="#question">Вопросы</a></li>
					<li><a href="#footer">Контакты</a></li>
				</nav>
				<div className='header-contact'>
					<h4>
						<FaPhone style={{opacity:0.8, marginRight:'5px', position:"relative", top:"3px"}} /> 
						<span>+7 (495) 555-55-55</span>
					</h4>
					<h4>
						<MdEmail style={{opacity:0.8, marginRight:'5px', position:"relative", top:"3px"}} />
						<span>lime-cleaning@yandex.ru</span>
					</h4>
				</div>
				<div
					onClick={() => setIsVisible(true)} 
					className="mobile-button">
					<LuMenuSquare color="#414a54" size={44}/>
				</div>
			</div>
		</header>
		<AnimatePresence>
			{isVisible && 
				<motion.div
					initial="hidden"
					animate="visible"
					exit="hidden"
					variants={variants}
					transition={{ duration: 0.5 }}
					className="mobile-menu">
					<div>
						<img className="logo" src="/logo.png" alt="Vite Logo" />
					</div>
					<div className='mobile-header__contact'>
						<h4>
							<FaPhone style={{opacity:0.8, marginRight:'5px', position:"relative", top:"3px"}} /> 
							<span>+7 (495) 555-55-55</span>
						</h4>
						<h4>
							<MdEmail style={{opacity:0.8, marginRight:'5px', position:"relative", top:"3px"}} />
							<span>lime-cleaning@yandex.ru</span>
						</h4>
					</div>
					<nav className='mobile-menu__list'>
						<li onClick={() => setIsVisible(false)}><a href="#">Главная</a></li>
						<li onClick={() => setIsVisible(false)}><a href="#complect">Услуги</a></li>
						<li onClick={() => setIsVisible(false)}><a href="#example">Примеры</a></li>
						<li onClick={() => setIsVisible(false)}><a href="#comment">Отзывы</a></li>
						<li onClick={() => setIsVisible(false)}><a href="#question">Вопросы</a></li>
						<li onClick={() => setIsVisible(false)}><a href="#footer">Контакты</a></li>
					</nav>
					<div
						onClick={() => setIsVisible(false)}
						className="mobile-menu__close">
						<IoCloseCircleOutline size={44} color="#414a54"/>
					</div>
				</motion.div>
			}
		</AnimatePresence>
		</>
	);
}

export default Index;
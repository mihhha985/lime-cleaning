import { useState } from "react";
import { TbPointFilled } from "react-icons/tb";
import {motion, AnimatePresence} from "framer-motion"
import "./style.css";

const variants = {
	show:{
		opacity:1,
		x:0
	},
	hidden:{
		opacity:0,
		x:-100
	}
}

function Index() {
	const [active, setActive] = useState(1);
	return ( 
		<section className="section" id="complect" style={{background:"#d1e1dc"}}>
			<div className="layout">
				<h3 className="title">Что входит в уборку?</h3>
				<div className="cleaning-complect__controls">
					<div
						onClick={() => setActive(1)} 
						className={`btn ${active === 1 ? 'active' : ''}`}>
						Поддерживающая
					</div>
					<div
						onClick={() => setActive(2)}  
						className={`btn ${active === 2 ? 'active' : ''}`}>
						Комплексная
					</div>
					<div 
						onClick={() => setActive(3)} 
						className={`btn ${active === 3 ? 'active' : ''}`}>
						Генеральная
					</div>
					<div 
						onClick={() => setActive(4)} 
						className={`btn ${active === 4 ? 'active' : ''}`}>
						После ремонта
					</div>
					<div
						onClick={() => setActive(5)}  
						className={`btn ${active === 5 ? 'active' : ''}`}>
						Запущенный объект
					</div>
				</div>
				<div className="cleaning-complect__content">
					{active === 1 && 
						<motion.div
							initial="hidden"
							animate="show"
							exit="hidden"
							variants={variants} 
							className="cleaning-complect__item">
							<div>
								<img src="complect1.jpg" alt="" className="cleaning-complect__image"/>
							</div>
							<div>
								<ul>
									<li>
										<div className="point-box">
											<TbPointFilled color="#a1cb00" size={24}/>
										</div>
										<div>
											Удаляем на всех поверхностях загрязнения: в кухне, в комнатах, 
											в сан. узлах, а так же не забываем про входную группу.
										</div>
									</li>
									<li>
										<div className="point-box">
											<TbPointFilled color="#a1cb00" size={24}/>
										</div>
										<div>
											Удаляем лёгкие бытовые загрязнения: следы жира, масла, пятна.
										</div>
									</li>
									<li>
										<div className="point-box">
											<TbPointFilled color="#a1cb00" size={24}/>
										</div>
										<div>
											Удаляем лёгкие бытовые загрязнения: следы жира, масла, пятна.
										</div>
									</li>
									<li>
										<div className="point-box">
											<TbPointFilled color="#a1cb00" size={24}/>
										</div>
										<div>
											Протираем мебель, зеркала и стеклянные поверхности.
										</div>
									</li>
									<li>
										<div className="point-box">
											<TbPointFilled color="#a1cb00" size={24}/>
										</div>
										<div>
											Промываем напольное покрытие и плинтусы.
										</div>
									</li>
									<li>
										<div className="point-box">
											<TbPointFilled color="#a1cb00" size={24}/>
										</div>
										<div>
											Замена пакета и вынос мусора из ведра.
										</div>
									</li>
								</ul>								
							</div>
						</motion.div>
					}
					{active === 2 && 
						<motion.div 
							initial="hidden"
							animate="show"
							exit="hidden"
							variants={variants} 
							className="cleaning-complect__item">
							<div>
								<img src="complect2.jpg" alt="cleaning-complect" width={600}/>
							</div>
							<div>
								<ul>
									<li>
										<div className="point-box">
											<TbPointFilled color="#a1cb00" size={24}/>
										</div>
										<div>
											Удаляем на всех поверхностях загрязнения: в кухне, в комнатах, в сан. узлах, а также не забываем про входную группу.
										</div>
									</li>
									<li>
										<div className="point-box">
											<TbPointFilled color="#a1cb00" size={24}/>
										</div>
										<div>
											Удаляем лёгкие загрязнения: следы жира, масла, бытовые и строительные загрязнения.
										</div>
									</li>
									<li>
										<div className="point-box">
											<TbPointFilled color="#a1cb00" size={24}/>
										</div>
										<div>
											Используем пароочиститель при необходимости.
										</div>
									</li>
									<li>
										<div className="point-box">
											<TbPointFilled color="#a1cb00" size={24}/>
										</div>
										<div>
											Протираем мебель, зеркала и стеклянные поверхности.
										</div>
									</li>
									<li>
										<div className="point-box">
											<TbPointFilled color="#a1cb00" size={24}/>
										</div>
										<div>
											Промываем напольное покрытие и плинтусы.
										</div>
									</li>
									<li>
										<div className="point-box">
											<TbPointFilled color="#a1cb00" size={24}/>
										</div>
										<div>
											Замена пакета и вынос мусора из ведра.
										</div>
									</li>
								</ul>								
							</div>
						</motion.div>
					}
					{active === 3 && 
						<motion.div
							initial="hidden"
							animate="show"
							exit="hidden"
							variants={variants}  
							className="cleaning-complect__item">
							<div>
								<img src="complect3.jpg" alt="cleaning-complect" width={600}/>
							</div>
							<div>
								<ul>
									<li>
										<div className="point-box">
											<TbPointFilled color="#a1cb00" size={24}/>
										</div>
										<div>
											Удаляем на всех поверхностях сложные загрязнения: ржавчину, следы жира, известковый налет, водный камень,
											в кухне, в комнатах, в сан. узлах, а также не забываем про входную группу.
										</div>
									</li>
									<li>
										<div className="point-box">
											<TbPointFilled color="#a1cb00" size={24}/>
										</div>
										<div>
											Используем пароочиститель для удаления загрязнений в труднодоступных местах.
										</div>
									</li>
									<li>
										<div className="point-box">
											<TbPointFilled color="#a1cb00" size={24}/>
										</div>
										<div>
											Двигаем легкую мебель: прикроватные тумбы, кресла, диваны, кровати и протираем.
										</div>
									</li>
									<li>
										<div className="point-box">
											<TbPointFilled color="#a1cb00" size={24}/>
										</div>
										<div>
											Протираем мебель, зеркала и стеклянные поверхности.
										</div>
									</li>
									<li>
										<div className="point-box">
											<TbPointFilled color="#a1cb00" size={24}/>
										</div>
										<div>
											Промываем напольное покрытие и плинтусы.
										</div>
									</li>
									<li>
										<div className="point-box">
											<TbPointFilled color="#a1cb00" size={24}/>
										</div>
										<div>
											Замена пакета и вынос мусора из ведра.
										</div>
									</li>
								</ul>								
							</div>
						</motion.div>
					}
					{active === 4 && 
						<motion.div
							initial="hidden"
							animate="show"
							exit="hidden"
							variants={variants}  
							className="cleaning-complect__item">
							<div>
								<img src="complect4.jpg" alt="cleaning-complect" width={600}/>
							</div>
							<div>
								<ul>
									<li>
										<div className="point-box">
											<TbPointFilled color="#a1cb00" size={24}/>
										</div>
										<div>
											Основной акцент делаем на уборку строительной пыли, удаление следов краски, скотча, цемента, затирки, грунтовки в кухне, 
											в комнатах, в сан. узлах, а также не забываем про входную группу.
										</div>
									</li>
									<li>
										<div className="point-box">
											<TbPointFilled color="#a1cb00" size={24}/>
										</div>
										<div>
											Используем пароочиститель для удаления загрязнений в труднодоступных местах.
										</div>
									</li>
									<li>
										<div className="point-box">
											<TbPointFilled color="#a1cb00" size={24}/>
										</div>
										<div>
											Двигаем легкую мебель: прикроватные тумбы, кресла, диваны, кровати и протираем.
										</div>
									</li>
									<li>
										<div className="point-box">
											<TbPointFilled color="#a1cb00" size={24}/>
										</div>
										<div>
											Протираем мебель, зеркала и стеклянные поверхности.
										</div>
									</li>
									<li>
										<div className="point-box">
											<TbPointFilled color="#a1cb00" size={24}/>
										</div>
										<div>
											Приводим помещение в полный порядок, наводим идеальную чистоту и подготавливаем помещение к комфортному постоянному проживанию.
										</div>
									</li>
									<li>
										<div className="point-box">
											<TbPointFilled color="#a1cb00" size={24}/>
										</div>
										<div>
											Промываем тщательно напольное покрытие и плинтусы.
										</div>
									</li>
								</ul>								
							</div>
						</motion.div>
					}
					{active === 5 && 
						<motion.div
							initial="hidden"
							animate="show"
							exit="hidden"
							variants={variants}  
							className="cleaning-complect__item">
							<div>
								<img src="complect5.jpg" alt="cleaning-complect" width={600}/>
							</div>
							<div>
								<ul>
									<li>
										<div className="point-box">
											<TbPointFilled color="#a1cb00" size={24}/>
										</div>
										<div>
											Удаляем на всех поверхностях очень сложные, трудновыводимые загрязнения: ржавчину, следы жира, известковый налет, водный камень, 
											в кухне, в комнатах, в сан. узлах, а также не забываем про входную группу.
										</div>
									</li>
									<li>
										<div className="point-box">
											<TbPointFilled color="#a1cb00" size={24}/>
										</div>
										<div>
											Наводим порядок и идеальную чистоту, подготавливаем помещение к комфортному проживанию.
										</div>
									</li>
									<li>
										<div className="point-box">
											<TbPointFilled color="#a1cb00" size={24}/>
										</div>
										<div>
											Используем пароочиститель для удаления загрязнений в труднодоступных местах.
										</div>
									</li>
									<li>
										<div className="point-box">
											<TbPointFilled color="#a1cb00" size={24}/>
										</div>
										<div>
											Двигаем легкую мебель: прикроватные тумбы, кресла, диваны, кровати и протираем.
										</div>
									</li>
									<li>
										<div className="point-box">
											<TbPointFilled color="#a1cb00" size={24}/>
										</div>
										<div>
											Протираем мебель, зеркала и стеклянные поверхности.
										</div>
									</li>
									<li>
										<div className="point-box">
											<TbPointFilled color="#a1cb00" size={24}/>
										</div>
										<div>
											Промываем тщательно напольное покрытие и плинтусы.
										</div>
									</li>
								</ul>								
							</div>
						</motion.div>
					}
				</div>
			</div>
		</section>
	);
}

export default Index;
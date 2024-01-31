import {useState} from "react";
import { IoCloseCircleOutline } from "react-icons/io5";
import { IoCheckmarkCircleOutline } from "react-icons/io5";
import {motion} from 'framer-motion';
import { useForm } from "react-hook-form"
import Loading from "../loading";
import './style.css';

const variantsBox = {
	open:{
		opacity:1,
	},
	closed:{
		opacity:0
	}
}

const variantsContent = {
	open:{
		scale:1,
	},
	closed:{
		scale:0.2
	}
}

const Modal = motion(({type, close}, ref) => {

	const [status, setStatus] = useState('start');
	const {register, handleSubmit, formState: { errors }} = useForm();
	const onSubmit = (data) => {
		setStatus('loading');
		setTimeout(() => {
			setStatus('success')
		}, 1500)
	}
	console.log(errors)
	return ( 
		<motion.div
			onClick={() => close(false)}
			initial="closed"
			animate="open"
			exit="closed"
			variants={variantsBox} 
			transition={{duration:0.3, ease:"easeInOut"}}
			className="modal" ref={ref}>
			<motion.div
				onClick={e => e.stopPropagation()}
				 initial="closed"
				 animate="open"
				 exit="closed"
				 variants={variantsContent} 
				 transition={{duration:0.3, ease:"easeInOut"}}
				className="modal-content">
				{type === 'order' && 
					<div className="modal-content__box">
						{status === 'start' &&
							<form 
								onSubmit={handleSubmit(onSubmit)}
								className="modal-content__order">
								<h4>Заполните форму</h4>
								<div className="input-box">
									<label>ИМЯ:</label>
									<input type="text" {...register('name', { required: true, maxLength: 20, minLength:3 })}/>
									{errors.name?.type === 'required' && <span>Поле обязательно для заполнния</span>}
									{errors.name?.type === 'maxLength' && <span>Максимум 20 символов</span>}
									{errors.name?.type === 'minLength' && <span>Минимум 3 символа</span>}
								</div>
								<div className="input-box">
									<label>ТЕЛЕФОН:</label>
									<input type="text" {...register('phone', { required: true, pattern: /^\+?[0-9]{11}$/i })}/>
									{errors.phone?.type === 'required' && <span>Поле обязательно для заполнния</span>}
									{errors.phone?.type === 'pattern' && <span>Не корректный номер телефона</span>}
								</div>
								<button type="submit" className="modal-btn">Отправить</button>
							</form>
						}
						{status === 'loading' &&
							<Loading />
						}
						{status === 'success' &&
							<div className="modal-content__info">
								<h4>Ваша заявка успешно отправленна!</h4>
								<IoCheckmarkCircleOutline size={88} color="#a1cb00"/>
								<p>В ближайшее время наш менеджер свяжется с Вами оставайтесь на связи.</p>
							</div>	
						}
						{status === 'error' &&
							<div className="modal-content__info">
								<h4>Неизвестная ошибка!</h4>
								<IoCloseCircleOutline size={88} color="red"/>
								<p>При отправки заявки произошла ошибка, попробуйте перезагрузить страницу или попробуйте позже.</p>
							</div>	
						}
					</div>
				}
				{type === 'price' && 'price'}
			</motion.div>
			<div className="modal-close" onClick={() => close(false)}>
				<IoCloseCircleOutline size={44} color="#d1e1dc"/>
			</div>
		</motion.div>
	);
});

export default Modal;
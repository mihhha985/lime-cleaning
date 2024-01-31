import { TbPointFilled } from "react-icons/tb";
import './style.css';

function Index({dispatch}) {
	return ( 
		<section className="main">
			<img src="/main.jpg" alt="main" />
			<div className="main-content">
				<h1>Клининг на КМВ</h1>
				<h2>
					Комплексная уборка квартир, домов, офисов<br />
					и комерческих площадей
				</h2>
				<div className="main-city">
					<div>
						<span>Минеральные воды</span>
						<TbPointFilled />
						<span>Пятигорск</span>
						<TbPointFilled />
						<span>Ессентуки</span>
						<TbPointFilled />
					</div>
					<div>
						<span>Кисловодск</span>
						<TbPointFilled />
						<span>Железноводск</span>
					</div>
				</div>
				<div className="btns">
					<button onClick={() => dispatch({type:'order'})}>Заказать уборку</button>
					<button onClick={() => dispatch({type:'price'})}>Прайс-лист</button>
				</div>
				<h4>Выезд в течение 1 часа после заявки</h4>
			</div>
		</section>
	);
}

export default Index;
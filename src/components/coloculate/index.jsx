import {useState} from "react";
import "./style.css";

function Index({dispatch}) {
	const [total, setTotal] = useState(0);
  const [square, setSquare] = useState(0);
	const [type, setType] = useState(0);

	const handleTotal = num => {
		console.log(num);
		console.log(square);
		setType(num);
		const sum = square * type;
		setTotal(sum);
	}

	const handleClikc = (e, num) => {
		const target = e.target;
		const colections = document.querySelectorAll('.calculate-square__item');

		colections.forEach(item => {
			item.classList.remove('active');
		})

		target.classList.add('active');
		setSquare(num);
		const sum = square * type;
		setTotal(sum);
	}

	return ( 
		<section className="section" id="colculate">
			<div className="calculate">
				<h3 className="title">Рассчитайте стоимость</h3>
				<div className="calculate-square">
					<div
						onClick={e => handleClikc(e, 40)} 
						className={`calculate-square__item`}>40</div>
					<div 
						onClick={e => handleClikc(e, 50)} 
						className="calculate-square__item">50</div>
					<div
						onClick={e => handleClikc(e, 60)} 
						className="calculate-square__item">60</div>
					<div
						onClick={e => handleClikc(e, 70)} 
						className="calculate-square__item">70</div>
					<div
						onClick={e => handleClikc(e, 80)} 
						className="calculate-square__item">80</div>

					<input
						onChange={e => setSquare(Number(e.target.value))}  
						type="number" 
						className="calculate-square__item" 
						placeholder="__м&sup2;"/>
				</div>
				<select
					onChange={e => handleTotal(Number(e.target.value))} 
					className="calculate-select__type">
					<option value={0}>Выберите услугу</option>
					<option value={58}>Поддерживающая уборка</option>
					<option value={86}>Комплексная уборка</option>
					<option value={125}>Гениральная уборка</option>
					<option value={125}>Уборка после ремонта</option>
					<option value={200}>Запущенный объект</option>
					<option value={220}>Уборка кухни</option>
					<option value={220}>Уборка санузла</option>
					<option value={80}>Уборка загородных домов и коттеджей</option>
					<option value={60}>Уборка офисов и помещений</option>
					<option value={600}>Химчистка</option>
					<option value={500}>Мытьё окон</option>
				</select>
				<div className="calculate-total__price">
					<h4>Итого от {total} &#8381;</h4>
				</div>
				<button 
					onClick={() => dispatch(({type:'order'}))}
					className="calculate-btn">
					Заказать уборку
				</button>
			</div>
		</section>
	);
}

export default Index;
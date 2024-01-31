import './style.css';

function Index() {
	return ( 
		<section className="section">
			<div className="layout">
				<h3 className="title">Наши преимущества</h3>
				<div className="peefect-container">
					<div className="perfect-container__item">
						<img src="perfect1.png" alt="perfect" width={200}/>
						<h4>Проверенные исполнители</h4>
						<p>К вам выезжают проверенные исполнители</p>
					</div>
					<div className="perfect-container__item">
						<img src="perfect2.png" alt="perfect" width={200}/>
						<h4>Контроль качества</h4>
						<p>Осматриваем квартиру как в программе «Ревизорро»</p>
					</div>
					<div className="perfect-container__item">
						<img src="perfect3.png" alt="perfect" width={200}/>
						<h4>Профессиональная химия и оборудование</h4>
						<p>Используем только, качественную продукцию</p>
					</div>
					<div className="perfect-container__item">
						<img src="perfect4.png" alt="perfect" width={200}/>
						<h4>Работаем по договору</h4>
						<p>Работа с заключением договора и в соответсвии с регламентом</p>
					</div>
				</div>
			</div>
		</section>
	);
}

export default Index;
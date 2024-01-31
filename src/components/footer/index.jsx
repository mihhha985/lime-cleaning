import "./style.css";

function Index() {
	return ( 
		<section className="section" id="footer" style={{background:"#d1e1dc"}}>
			<div className="layout">
				<div className="footer-content">
					<div className="footer-content__item">
						<div>
							<img src="/logo.png" className="logo" alt="logo" />
						</div>
						<div>
							<p>© 2016 - 2023 Сервис уборки</p>
							<p>«Lime Cleaning». Все права защищены.</p>
						</div>
						<div>
							<a href="#">Политика конфиденциальности</a>
							<br />
							<a href="#">Пользовательское соглашение</a>
						</div>
						<div>
							<p>
								Начиная использовать Сервис вы принимаете условия 
								<a href="#"> Пользовательского соглашения</a>
							</p>
							<p>Клининговые услуги оказываются исполнителями сервиса.</p>
						</div>
					</div>
					<div className="footer-content__item">
						<h4>УСЛУГИ</h4>
						<p>ПОДДЕРЖИВАЮЩАЯ УБОРКА</p>
						<p>КОМПЛЕКСНАЯ УБОРКА</p>
						<p>ГЕНЕРАЛЬНАЯ УБОРКА</p>
						<p>УБОРКА ПОСЛЕ РЕМОНТА</p>
						<p>УБОРКА ОФИСОВ</p>
						<p>УБОРКА КОТТЕДЖЕЙ</p>
						<p>УБОРКА КУХНИ</p>
						<p>УБОРКА САНУЗЛА</p>
						<p>МОЙКА ОКОН</p>
						<p>ХИМЧИСТКА МЯГКОЙ МЕБЕЛИ</p>
					</div>
					<div className="footer-content__item">
						<h4>КОНТАКТЫ</h4>
						<p>Адрес:<br />143405, Московская область, г. Красногорск, ул. Авангардная 8</p>
						<p>Тел:<br />8 (495) 744 64 92</p>
					</div>
				</div>
			</div>
		</section>
	);
}

export default Index;
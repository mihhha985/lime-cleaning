import { FreeMode, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';

import './style.css';

function Index() {
	return ( 
		<section className="section">
			<div className="layout"> 
				<Swiper
					breakpoints={{
						320: {
							slidesPerView: 1,
							spaceBetween: 10,
						},
						680: {
							slidesPerView: 2,
							spaceBetween: 10,
						},
						998: {
								slidesPerView: 3,
								spaceBetween: 20,
							},
						1320: {
							slidesPerView: 4,
							spaceBetween: 20,
						},
						}} 
					modules={[FreeMode, Pagination]} 
					freeMode={true} 
					pagination={{"clickable": true}}
					className="slider-container">
					<SwiperSlide key={1}>
						<div className='slider-container_item'>
							<img src="/slider/1.png" alt="slider" width={100}/>
							<h4>Мойка окон</h4>
							<p>Мытьё окон, с обоих сторон с использованием професиональной химии</p>
							<h5>от 1600 &#8381;</h5>
							< a href="#colculate">Расчитать стоимость</a>
						</div>
					</SwiperSlide>
					<SwiperSlide key={2}>
						<div className='slider-container_item'>
							<img src="/slider/2.png" alt="slider" width={100}/>
							<h4>Химчистка</h4>
							<p>Химчистка мягкой мебели и ковров</p>
							<h5>от 1500 &#8381;</h5>
							< a href="#colculate">Расчитать стоимость</a>
						</div>
					</SwiperSlide>
					<SwiperSlide key={3}>
						<div className='slider-container_item'>
							<img src="/slider/3.png" alt="slider" width={100}/>
							<h4>Поддерживающая уборка</h4>
							<p>Удаляем лёгкие загрязнения</p>
							<h5>от 2250 &#8381;</h5>
							< a href="#colculate">Расчитать стоимость</a>
						</div>
					</SwiperSlide>
					<SwiperSlide key={4}>
						<div className='slider-container_item'>
							<img src="/slider/4.png" alt="slider" width={100}/>
							<h4>Комплексная уборка</h4>
							<p>Удаляем загрязнения на всю высоту</p>
							<h5>от 3500 &#8381;</h5>
							< a href="#colculate">Расчитать стоимость</a>
						</div>
					</SwiperSlide>
					<SwiperSlide key={5}>
						<div className='slider-container_item'>
							<img src="/slider/5.png" alt="slider" width={100}/>
							<h4>Генеральная уборка</h4>
							<p>Удаляем на всех поверхностях сложные загрязнения</p>
							<h5>от 5000 &#8381;</h5>
							< a href="#colculate">Расчитать стоимость</a>
						</div>
					</SwiperSlide>
					<SwiperSlide key={6}>
						<div className='slider-container_item'>
							<img src="/slider/6.png" alt="slider" width={100}/>
							<h4>Уборка после ремонта</h4>
							<p>Удаляем строительную пыль и следы после ремонта</p>
							<h5>от 5000 &#8381;</h5>
							< a href="#colculate">Расчитать стоимость</a>
						</div>
					</SwiperSlide>
					<SwiperSlide key={7}>
						<div className='slider-container_item'>
							<img src="/slider/7.png" alt="slider" width={100}/>
							<h4>Уборка сильнозапущенных квартир</h4>
							<p>Удаляем любые трудновыводимые загрязнения</p>
							<h5>от 8000 &#8381;</h5>
							< a href="#colculate">Расчитать стоимость</a>
						</div>
					</SwiperSlide>
				</Swiper>
			</div>
		</section>
	);
}

export default Index;
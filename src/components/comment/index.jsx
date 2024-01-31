import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import './style.css';

function Index() {
	return ( 
		<section className="section" id="comment" style={{background:"#d1e1dc"}}>
			<div className="layout">
				<h3 className="title">Отзывы наших клиентов</h3>
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
						}} 
					autoplay={{delay:3000}}
					navigation={true}
					modules={[Pagination, Navigation, Autoplay]} 
					pagination={{"clickable": true}} 
					className="comment-slider">
						<SwiperSlide key={1}>
							<div className='comment-slider__item'>
								<img src="/comment/1.jpg" alt="Пример работы" />
							</div>
						</SwiperSlide>
						<SwiperSlide key={2}>
							<div className='comment-slider__item'>
								<img src="/comment/2.jpg" alt="Пример работы" />
							</div>
						</SwiperSlide>
						<SwiperSlide key={3}>
							<div className='comment-slider__item'>
								<img src="/comment/3.jpg" alt="Пример работы" />
							</div>
						</SwiperSlide>
						<SwiperSlide key={4}>
							<div className='comment-slider__item'>
								<img src="/comment/4.jpg" alt="Пример работы" />
							</div>
						</SwiperSlide>
						<SwiperSlide key={5}>
							<div className='comment-slider__item'>
								<img src="/comment/5.jpg" alt="Пример работы" />
							</div>
						</SwiperSlide>
						<SwiperSlide key={6}>
							<div className='comment-slider__item'>
								<img src="/comment/6.jpg" alt="Пример работы" />
							</div>
						</SwiperSlide>
						<SwiperSlide key={7}>
							<div className='comment-slider__item'>
								<img src="/comment/7.jpg" alt="Пример работы" />
							</div>
						</SwiperSlide>
						<SwiperSlide key={8}>
							<div className='comment-slider__item'>
								<img src="/comment/8.jpg" alt="Пример работы" />
							</div>
						</SwiperSlide>
				</Swiper>
			</div>
		</section>
	 );
}

export default Index
import { Navigation, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import './style.css';

function Index() {
	return ( 
		<section className="section" id="example" style={{background:"#d1e1dc"}}>
			<div className="layout">
				<h3 className="title">Примеры работ</h3>
				<Swiper
					navigation={true}
					modules={[Pagination, Navigation]} 
					pagination={{"clickable": true}} 
					className="example-slider">
						<SwiperSlide>
							<div className='example-slider__item'>
								<img src="/example/1.jpg" alt="Пример работы" />
								<img src="/example/1-1.jpg" alt="Пример работы" />
							</div>
						</SwiperSlide>
						<SwiperSlide>
							<div className='example-slider__item'>
								<img src="/example/2-1.jpg" alt="Пример работы" />
								<img src="/example/2-2.jpg" alt="Пример работы" />
							</div>
						</SwiperSlide>
						<SwiperSlide>
							<div className='example-slider__item'>
								<img src="/example/3-1.jpg" alt="Пример работы" />
								<img src="/example/3-2.jpg" alt="Пример работы" />
							</div>
						</SwiperSlide>
						<SwiperSlide>
							<div className='example-slider__item'>
								<img src="/example/4-1.jpg" alt="Пример работы" />
								<img src="/example/4-2.jpg" alt="Пример работы" />
							</div>
						</SwiperSlide>
						<SwiperSlide>
							<div className='example-slider__item'>
								<img src="/example/5-1.jpg" alt="Пример работы" />
								<img src="/example/5-2.jpg" alt="Пример работы" />
							</div>
						</SwiperSlide>
						<SwiperSlide>
							<div className='example-slider__item'>
								<img src="/example/6-1.jpg" alt="Пример работы" />
								<img src="/example/6-2.jpg" alt="Пример работы" />
							</div>
						</SwiperSlide>
						<SwiperSlide>
							<div className='example-slider__item'>
								<img src="/example/7-1.jpg" alt="Пример работы" />
								<img src="/example/7-2.jpg" alt="Пример работы" />
							</div>
						</SwiperSlide>
						<SwiperSlide>
							<div className='example-slider__item'>
								<img src="/example/8-1.jpg" alt="Пример работы" />
								<img src="/example/8-2.jpg" alt="Пример работы" />
							</div>
						</SwiperSlide>
				</Swiper>
			</div>
		</section>
	 );
}

export default Index
import React from "react";
import css from "./Testimonials.module.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper";
import rating from "../../assets/Group 1161.svg";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

const Testimonials = () => {
  const TestimonialsData = [
    {
      image:
        "https://ichef.bbci.co.uk/news/1024/cpsprodpb/76E3/production/_128053403_gettyimages-1237495550.jpg",
      comment:
        " “Wow... I am very happy to use this VPN, it turned out to be more than my expectations and so far there have been no problems. LaslesVPN always the best”.",
      name: "John",
      place: "New York",
      rating: 4.5,
      ratingimg: rating,
    },
    {
      image:
        "https://ichef.bbci.co.uk/news/1024/cpsprodpb/76E3/production/_128053403_gettyimages-1237495550.jpg",
      comment:
        " “Wow... I am very happy to use this VPN, it turned out to be more than my expectations and so far there have been no problems. LaslesVPN always the best”.",
      name: "Natasha",
      place: "New York",
      rating: 4.5,
      ratingimg:  rating ,
    },
    {
      image:
        "https://ichef.bbci.co.uk/news/1024/cpsprodpb/76E3/production/_128053403_gettyimages-1237495550.jpg",
      comment:
        " “Wow... I am very happy to use this VPN, it turned out to be more than my expectations and so far there have been no problems. LaslesVPN always the best”.",
      name: "Alex",
      place: "New York",
      rating: 4.5,
      ratingimg:  rating ,
    },
    {
      image:
        "https://ichef.bbci.co.uk/news/1024/cpsprodpb/76E3/production/_128053403_gettyimages-1237495550.jpg",
      comment:
        " “Wow... I am very happy to use this VPN, it turned out to be more than my expectations and so far there have been no problems. LaslesVPN always the best”.",
      name: "John",
      place: "New York",
      rating: 4.5,
      ratingimg:  rating ,
    },
    {
      image:
        "https://ichef.bbci.co.uk/news/1024/cpsprodpb/76E3/production/_128053403_gettyimages-1237495550.jpg",
      comment:
        " “Wow... I am very happy to use this VPN, it turned out to be more than my expectations and so far there have been no problems. LaslesVPN always the best”.",
      name: "Natasha",
      place: "New York",
      rating: 4.5,
      ratingimg: rating,
    },
    {
      image:
        "https://ichef.bbci.co.uk/news/1024/cpsprodpb/76E3/production/_128053403_gettyimages-1237495550.jpg",
      comment:
        " “Wow... I am very happy to use this VPN, it turned out to be more than my expectations and so far there have been no problems. LaslesVPN always the best”.",
      name: "Alex",
      place: "New York",
      rating: 4.5,
      ratingimg: rating ,
    },
  ];
  return (
    <div className={css.testimonials}>
      <div className={css.carousel}>
      <Swiper
        breakpoints={{
          640: {
            slidesPerView: 3,
          },
          0: {
            slidesPerView: 1
          }
        }}
        modules={[Pagination, Navigation]}
        className="mySwiper"
        navigation={true}

        loopFillGroupWithBlank={true}
        slidesPerView={3}
        spaceBetween={-10}
        slidesPerGroup={1}
        loop={true}
        >
          {TestimonialsData.map((testimonial, i) => (
            <SwiperSlide key={i}>
              <div className={css.testimonial}>
                <div className={css.top}>
                  <div className={css.imgT}>
                    <img className={css.image} src={testimonial.image} alt="" />
                    <div className={css.name}>
                      <span>{testimonial.name}</span>
                      <span className={css.place}>{testimonial.place}</span>
                    </div>
                  </div>
                  <span>{testimonial.rating} <img  className={css.star} src={testimonial.ratingimg} alt=""/></span>
                </div>
                <span className={css.comment}>{testimonial.comment}</span>
                <hr />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default Testimonials;

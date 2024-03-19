import React, { useEffect, useState } from "react";
import "./CSS/Placedetails.css";
import { useParams } from "react-router-dom";
import star from "../components/Assets/star.png";
import axios from "axios";
import ModalImage from "react-modal-image";
import ReactPlayer from "react-player";

const ReadMore = ({ children }) => {
  const text = children || "";
  const [isReadMore, setIsReadMore] = useState(true);
  const toggleReadMore = () => {
    setIsReadMore(!isReadMore);
  };
  return (
    <p className="text">
      {isReadMore ? text.slice(0, 600) : text}
      {text.length > 600 ? (
        <span
          onClick={toggleReadMore}
          className="read-or-hide"
          style={{ color: "rgba(153, 153, 153, 1)" }}
        >
          {isReadMore ? " Read more..." : " Show less"}
        </span>
      ) : undefined}
    </p>
  );
};

const Placedetails = () => {
  const { placeId } = useParams();
  const [loading, setLoading] = useState(true);
  const [monument, setMonument] = useState(null);
  const [galleryImages, setGalleryImages] = useState([]);
  // const [slideNumber, setSlideNumber] = useState(0)
  // const [openModal, setOpenModal] = useState(false)

  // const handleOpenModal = (index) => {
  //   setSlideNumber(index)
  //   setOpenModal(true)
  // }

  // // Close Modal
  // const handleCloseModal = () => {
  //   setOpenModal(false)
  // }

  // // Previous Image
  // const prevSlide = () => {
  //   slideNumber === 0
  //   ? setSlideNumber( galleryImages.length -1 )
  //   : setSlideNumber( slideNumber - 1 )
  // }

  // // Next Image
  // const nextSlide = () => {
  //   slideNumber + 1 === galleryImages.length
  //   ? setSlideNumber(0)
  //   : setSlideNumber(slideNumber + 1)
  // }

  useEffect(() => {
    axios
      .get(`public/${placeId}`)
      .then((response) => {
        setMonument(response.data);
      })
      .catch((error) => {
        console.error("Error fetching monument details:", error);
      });
  }, [placeId]);

  useEffect(() => {
    setLoading(true);
    axios
      .get(`gallery/monument/${placeId}`)
      .then((response) => {
        setGalleryImages(response.data);
      })
      .catch((error) => {
        console.error("Error fetching gallery images:", error);
      })
      .finally(() => setLoading(false));
  }, []);

  return (
    <div className="place-details">
      {monument && (
        <>
          <div className="place-img">
            <img src={axios.defaults.baseURL + monument.cover_image} alt="" />
            <div className="name-loc">
              <h2>{monument.title}</h2>
              <div className="locatn">
                <span className="material-symbols-outlined">explore</span>
                <div>
                  <p>
                    {monument.place}, {monument.state}
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="importance">
            <div className="top">
              <img src={star} alt="" />
              <h4>Importance</h4>
            </div>
            <p>{monument.ipms_place}</p>
          </div>

          <div className="about-monument">
            <h4>About Monument</h4>
            <div className="line"></div>
            <ReadMore>{monument.description}</ReadMore>
          </div>

          <div className="about-monument">
            <h4>PAST CONDITION</h4>
            <div className="line"></div>
            <ReadMore>{monument.past_condition}</ReadMore>
          </div>

          <div className="about-monument">
            <h4>PRESENT CONDITION</h4>
            <div className="line"></div>
            <ReadMore>{monument.present_condition}</ReadMore>
          </div>

          <div className="arch-imp">
            <h4>Architectural Importance</h4>
            <p>{monument.archi_imps}</p>
          </div>

          <div className="gallery">
            <h4>GALLERY</h4>
            <div className="line"></div>
            {/* {openModal && 
        <div className='sliderWrap'>
          <span class="material-symbols-outlined" className='btnClose' onClick={handleCloseModal}>close</span>
          <span class="material-symbols-outlined" className='btnPrev' onClick={prevSlide}>arrow_back_ios</span>
          <span class="material-symbols-outlined" className='btnNext' onClick={nextSlide}>arrow_forward_ios</span>  
          <div className='fullScreenImage'>
            <img src={galleryImages[slideNumber].img} alt='' />
          </div>
        </div>
      } */}
            {/* {loading ? (
              "Loading..."
            ) : (
              <div className="all-items">
                {galleryImages &&
                  galleryImages
                    .filter((item) => item.monumentId === placeId)
                    .map((item) => (
                      <div className="gallery-images" key={item._id}>
                        <ModalImage
                          className="gallery-image"
                          small={axios.defaults.baseURL + item.image}
                          medium={axios.defaults.baseURL + item.image}
                          hideZoom
                        />
                        <img src={axios.defaults.baseURL + item.image} alt="" />

                        <div className="gallery-title">
                          <p className="title">{item.imgTitle}</p>
                        </div>
                      </div>
                    ))}
              </div>
            )}{" "} */}
            {loading ? (
              "Loading..."
            ) : (
              <div className="all-items">
                {galleryImages &&
                  galleryImages
                    .filter((item) => item.monumentId === placeId)
                    .map((item) => (
                      <div className="gallery-images" key={item._id}>
                        {item.image.endsWith(".MP4") ? (
                          <ReactPlayer
                            url={axios.defaults.baseURL + item.image}
                            controls
                            width="100%"
                            height={371}
                            volume={null}
                            muted
                          />
                        ) : (
                          <ModalImage
                            small={axios.defaults.baseURL + item.image}
                            medium={axios.defaults.baseURL + item.image}
                            hideZoom
                          />
                        )}
                        <div className="gallery-title">
                          <p className="titles">{item.imgTitle}</p>
                        </div>
                      </div>
                    ))}
              </div>
            )}
          </div>
        </>
      )}
    </div>
  );
};

export default Placedetails;

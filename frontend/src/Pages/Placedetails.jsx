import React, { useEffect, useState } from "react";
import "./CSS/Placedetails.css";
import { useParams, useNavigate } from "react-router-dom";
import star from "../components/Assets/star.png";
import axios from "axios";
import ModalImage from "react-modal-image";
import ReactPlayer from "react-player";
import checkAdmin from "../util/Token";

//Read more component
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
  const navigate = useNavigate();
  const { placeId } = useParams();
  const [loading, setLoading] = useState(true);
  const [monument, setMonument] = useState(null);
  const [galleryImages, setGalleryImages] = useState([]);

  const [isAdmin, setIsAdmin] = useState(false);
  useEffect(() => {
    checkAdmin(setIsAdmin);
  });

  // useEffect(() => {
  //   const token = localStorage.getItem("token");
  //   if (token == null) {
  //     setIsAdmin(false)
  //     return
  //   }
  //   const usertk = token.split(".")[1];
  //   const decodedtk = JSON.parse(atob(usertk));
  //   const type = decodedtk.type;
  //   console.log(type)
  //   if (type == 'admin'){
  //     setIsAdmin(true)
  //   }
  //   else{
  //     setIsAdmin(false)
  //   }
  // });

  const handleClick = (Id) => {
    let cfm = confirm("Confirm verification");
    if (!cfm) return;
    else {
      axios
        .put(`admin/verify/${Id}`)
        .then((res) => {
          alert(res.data.message);
          navigate("/manage/ListMonuments");
        })
        .catch((err) => {
          alert("Error verifing : " + err.message);
        });
    }
  };

  const clickToUnverify = (Id) => {
    let cfm = confirm("Do you want to edit the verification");
    if (!cfm) return;
    else {
      axios
        .put(`admin/unverify/${Id}`)
        .then((res) => {
          alert(res.data.message);
          navigate("/manage/ListMonuments");
        })
        .catch((err) => {
          alert("Error verifing : " + err.message);
        });
    }
  };

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
      .get(`public/monument/${placeId}`)
      .then((response) => {
        setGalleryImages(response.data);
      })
      .catch((error) => {
        console.error("Error fetching gallery images:", error.message);
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

          {isAdmin ? (
            <div className="verify">
              {monument.status == 1 ? (
                <button
                  className="btn"
                  onClick={() => clickToUnverify(monument._id)}
                >
                  Unverify
                </button>
              ) : (
                <button
                  className="btn"
                  onClick={() => handleClick(monument._id)}
                >
                  Verify
                </button>
              )}
            </div>
          ) : (
            false
          )}
        </>
      )}
    </div>
  );
};

export default Placedetails;

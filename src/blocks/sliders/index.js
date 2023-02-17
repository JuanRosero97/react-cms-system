import "./index.css";
import { useState } from "react";
import back from "../../img/back_slider.png";

export default function Slider({ props }) {
  //   console.log("🚀 ~ file: index.js:5 ~ Slider ~ props", props);
  const [index, setIndex] = useState(0);

  function advance(event) {
    event.preventDefault();
    setIndex((index + 1) % props.slider.length);
  }

  function reduce(event) {
    event.preventDefault();
    if (index === 0) setIndex(props.slider.length - 1);
    else setIndex((index - 1) % props.slider.length);
  }

  const getImages = (images) => {
    // console.log("🚀 ~ file: index.js:19 ~ getImages ~ images", images);

    let obj = [];
    for (let i = 0; i < 6; i++) {
      let nameImage = `Image${i + 1}`;
      if (images[nameImage]) {
        obj.push(
          <div
            key={images[nameImage].id}
            className="hidden sm:inline-block boxItem "
            data-boxItem-index={i + 1}
          >
            <img
              src={`${images[nameImage].url.replace("undefined", "cmsamaris")}`}
              alt="img"
              className="h-auto w-full filter drop-shadow-lg"
            />
          </div>
        );
      }
    }
    return obj;
  };

  const getSliders = () => {
    return (
      <div
        key={props?.slider[index].id}
        className="sm:w-500p_x sm:h-500p_x boxParent"
      >
        <div className="container mx-auto">
          <div className="stack">
            {props.slider.map((item, cont) => {
              return (
                <div
                  key={cont}
                  className={`grid w-72 sm:w-96 h-60 place-content-center`}
                  style={{
                    background: "#FFFFFF",
                    boxShadow: "0px 18px 52.8537px rgba(215, 228, 249, 0.5)",
                    borderRadius: "20px",
                    backgroundImage: `${cont === 0 ? `url(${back}` : ""})`,
                    backgroundRepeat: "no-repeat",
                    backgroundSize: "auto",
                    backgroundPosition: "center",
                  }}
                >
                  {cont === 0 ? (
                    <span className="p-10 text-md text-subtitle-500 leading-5 sm:leading-7 ">
                      {props.slider[index].Text}
                    </span>
                  ) : (
                    ""
                  )}
                </div>
              );
            })}
          </div>
        </div>
        <div className="flex justify-end relative z-10 mt-10 mr-9">
          <button className="mr-4" onClick={(event) => reduce(event)} svg>
            <svg
              width="20"
              height="10"
              viewBox="0 0 20 10"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M5.09758 9.94711C5.18144 9.91231 5.25761 9.86131 5.32171 9.79703C5.38601 9.73291 5.43701 9.65674 5.4718 9.57288C5.5066 9.48902 5.52454 9.39912 5.52454 9.30832C5.52454 9.21753 5.5066 9.12763 5.4718 9.04377C5.43701 8.95991 5.38601 8.88374 5.32171 8.81962L2.35805 5.85705L19.3097 5.85705C19.4928 5.85705 19.6684 5.78433 19.7978 5.65488C19.9273 5.52544 20 5.34987 20 5.1668C20 4.98373 19.9273 4.80813 19.7978 4.67868C19.6684 4.54924 19.4928 4.47652 19.3097 4.47652L2.35801 4.47652L5.32171 1.51394C5.45135 1.38434 5.52415 1.20854 5.52415 1.02524C5.52415 0.841936 5.45135 0.666136 5.32171 0.536538C5.19211 0.406901 5.01631 0.334099 4.83301 0.334099C4.64971 0.334099 4.47395 0.406901 4.34431 0.536538L0.202785 4.67807C0.138489 4.74221 0.0874931 4.81837 0.0526965 4.90223C0.0178999 4.98609 -6.49066e-07 5.07598 -6.49066e-07 5.16676C-6.49066e-07 5.25758 0.0178999 5.34747 0.0526965 5.43133C0.0874931 5.51519 0.138489 5.59136 0.202785 5.65546L4.34431 9.79703C4.40846 9.86131 4.48462 9.91231 4.56848 9.94711C4.65234 9.98191 4.74223 9.99982 4.83301 9.99982C4.92383 9.99982 5.01372 9.98191 5.09758 9.94711Z"
                fill="black"
              />
            </svg>
          </button>

          <button onClick={(event) => advance(event)}>
            <svg
              width="20"
              height="10"
              viewBox="0 0 20 10"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M14.9024 0.386816C14.8185 0.421614 14.7424 0.472614 14.6783 0.536895C14.614 0.601014 14.563 0.677185 14.5282 0.761045C14.4934 0.844905 14.4754 0.934804 14.4754 1.0256C14.4754 1.11639 14.4934 1.20629 14.5282 1.29015C14.563 1.37401 14.614 1.45018 14.6783 1.5143L17.6419 4.47687L0.69023 4.47687C0.507161 4.47687 0.33159 4.5496 0.202142 4.67904C0.0726932 4.80848 -3.05176e-05 4.98405 -3.05176e-05 5.16712C-3.05176e-05 5.35019 0.0726932 5.52579 0.202142 5.65524C0.33159 5.78468 0.507161 5.85741 0.69023 5.85741L17.642 5.85741L14.6783 8.81999C14.5486 8.94958 14.4758 9.12539 14.4758 9.30869C14.4758 9.49199 14.5486 9.66779 14.6783 9.79738C14.8079 9.92702 14.9837 9.99982 15.167 9.99982C15.3503 9.99982 15.526 9.92702 15.6557 9.79738L19.7972 5.65586C19.8615 5.59171 19.9125 5.51555 19.9473 5.43169C19.9821 5.34783 20 5.25794 20 5.16716C20 5.07634 19.9821 4.98645 19.9473 4.90259C19.9125 4.81873 19.8615 4.74256 19.7972 4.67846L15.6557 0.536895C15.5915 0.472614 15.5153 0.421614 15.4315 0.386816C15.3476 0.352018 15.2577 0.334106 15.167 0.334106C15.0761 0.334106 14.9862 0.352018 14.9024 0.386816Z"
                fill="black"
              />
            </svg>
          </button>
        </div>

        <div className="hidden sm:block boxCenter"></div>
        {getImages(props?.slider[index].images[0])}
      </div>
    );
  };

  return getSliders();
}

import React from "react";
import "./Photos.css";

export default function Photos(props) {
  if (props.photos) {
    return (
      <section className="Photos">
        <div className="row">
          {props.photos.map(function (photo, index) {
            return (
              <div className="col-xs-6 col-md-4" key={index}>
                <a
                  href={photo.src.original}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    src={photo.src.tiny}
                    className="img-fluid"
                    alt={photo.src.photographer}
                  />
                </a>
              </div>
            );
          })}
        </div>
      </section>
    );
  }
}

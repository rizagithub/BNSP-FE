import React from 'react';

const Carousel = () => {
  return (
    <div className="container">
      <div id="myCarousel" className="carousel slide" data-ride="carousel">
        <ol className="carousel-indicators">
          <li data-target="#myCarousel" data-slide-to="0" className="active"></li>
          <li data-target="#myCarousel" data-slide-to="1"></li>
          <li data-target="#myCarousel" data-slide-to="2"></li>
        </ol>
        <div className="carousel-inner">
          <div className="item active">
            <img src="Group 86.jpg" alt="Image 1" />
          </div>
          <div className="item">
            <img src="Group 84.jpg" alt="Image 2" />
          </div>
          <div className="item">
            <img src="Group 86.jpg" alt="Image 3" />
          </div>
        </div>
        <a className="left carousel-control" href="#myCarousel" data-slide="prev">
          <span className="glyphicon glyphicon-chevron-left"></span>
        </a>
        <a className="right carousel-control" href="#myCarousel" data-slide="next">
          <span className="glyphicon glyphicon-chevron-right"></span>
        </a>
      </div>
    </div>
  );
};

export default Carousel;

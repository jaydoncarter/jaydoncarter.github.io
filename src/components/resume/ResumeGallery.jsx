
import "./ResumeGallery.css";

const galleryItems = [
  {
    image: "/images/ski-jump.jpg",
    alt: "Sending a ski jump at Brian Head.",
  },
  {
    image: "/images/utah.jpg",
    alt: "Camping at Blowhard Peak in Utah.",
  },
  {
    image: "/images/overlanding.jpg",
    alt: "Overlanding deep in the desert.",
  },
  {
    image: "/images/mtb-ctrail.jpg",
    alt: "Mountain biking on a the C Trail near Cedar City.",
  },
  {
    image: "/images/z400.jpg",
    alt: "My Kawasaki Z400 at Rodeo Beach in California.",
  },
  {
    image: "/images/refelctingpool.jpg",
    alt: "Reflecting pool at the Lincoln Memorial in Washington D.C.",
  },
  {
    image: "/images/coloradoriver.jpg",
    alt: "Rafting in Cataract Canyon on the Colorado River",
  },
  {
    image: "/images/powda.jpg",
    alt: "Fresh powda!!!",
  },
];

function ResumeGallery() {
  return (
    <section className="resume-gallery">
      <div className="container">
        <div className="resume-gallery__heading">
          <span>Photos</span>
          <h2>Gallery</h2>
        </div>

        <div className="resume-gallery__grid">
          {galleryItems.map((item) => (
            <div className="resume-gallery__tile" key={item.image}>
              <img src={item.image} alt={item.alt} />

              <div className="resume-gallery__overlay">
                <p>{item.alt}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default ResumeGallery;
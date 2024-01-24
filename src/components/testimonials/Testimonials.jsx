import "./testimonials.scss";

export default function Testimonials() {
  const data = [
    {
      id: 1,
      name: "Salweyar Patel",
      title: "Intermediate Developer",
      img:
        "assets/1610637753822.jpeg",
      icon: "assets/linkedin.png",
      desc:
        "I had the opportunity to work with Evans Odiaka at kidco construction LTD. He has been a tremendous member to the project and asset to the team." 
        +"He Excells in C# dotnet envionment, an eager learner and always willing to assist other team members. A true team player",
    },
    {
      id: 2,
      name: "Stephanie Kojak",
      title: "Co-worker at Mackesson",
      img:
        "https://images.pexels.com/photos/428321/pexels-photo-428321.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
      icon: "assets/linkedin.png",
      desc:
        "Evans Displayed true Hardworking skills while working at Mackesson. Paid attention to detail and was always willing to "+
        "go above the status quo and assist on days coworkers where unable to",
      featured: true,
    },
    {
      id: 3,
      name: "upcoming reference",
      title: "upcoming",
      img:
        "https://images.pexels.com/photos/3863793/pexels-photo-3863793.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
      icon: "assets/linkedin.png",
      desc:
        " ",
    },
  ];
  return (
    <div className="testimonials" id="testimonials">
      <h1>Testimonials</h1>
      <div className="container">
        {data.map((d) => (
          <div className={d.featured ? "card featured" : "card"}>
            <div className="top">
              <img src="assets/right-arrow.png" className="left" alt="" />
              <img
                className="user"
                src={d.img}
                alt=""
              />
              <img className="right" src={d.icon} alt="" />
            </div>
            <div className="center">
              {d.desc}
            </div>
            <div className="bottom">
              <h3>{d.name}</h3>
              <h4>{d.title}</h4>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

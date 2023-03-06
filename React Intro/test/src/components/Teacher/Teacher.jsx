import React from "react";
import "./teacher.css";

const Teachers = [
    {  id:1,
      images:"https://ak.picdn.net/shutterstock/videos/1068128240/thumb/1.jpg?ip=x480",
      name:"Parvin Gasimli",
      desc:"Frontend Dev",
      instaUrl:"https://upload.wikimedia.org/wikipedia/commons/thumb/5/58/Instagram-Icon.png/800px-Instagram-Icon.png",
      linkedinUrl:"https://cdn-icons-png.flaticon.com/512/174/174857.png",
      github:"https://cdn-icons-png.flaticon.com/512/25/25231.png?w=360"
  },
  {
      id:2,
      images:"https://ak3.picdn.net/shutterstock/videos/30181393/thumb/1.jpg?ip=x480",
      name:"Ulvi Nuriyev",
      desc:"Full Stack Dev",
      instaUrl:"https://upload.wikimedia.org/wikipedia/commons/thumb/5/58/Instagram-Icon.png/800px-Instagram-Icon.png",
      linkedinUrl:"https://cdn-icons-png.flaticon.com/512/174/174857.png",
      github:"https://cdn-icons-png.flaticon.com/512/25/25231.png?w=360"
  },
  {  // {

      id:3,
      images:"https://www.cambridgeenglish.org/Images/TE-AP-002-640460.jpg",
      name:"Nigar Sahriyarli",
      desc:"Frontend Dev",
      instaUrl:"https://upload.wikimedia.org/wikipedia/commons/thumb/5/58/Instagram-Icon.png/800px-Instagram-Icon.png",
      linkedinUrl:"https://cdn-icons-png.flaticon.com/512/174/174857.png",
      github:"https://cdn-icons-png.flaticon.com/512/25/25231.png?w=360"
  },
  {
      id:4,
      images:"https://devostock.com/static12/preview2/stock-photo-devostock-beautiful-girl-teacher-explaining-presenting-4k-174409.jpg",
      name:"Zeynep Sofer",
      desc:"Backend Dev",
      instaUrl:"https://upload.wikimedia.org/wikipedia/commons/thumb/5/58/Instagram-Icon.png/800px-Instagram-Icon.png",
      linkedinUrl:"https://cdn-icons-png.flaticon.com/512/174/174857.png",
      github:"https://cdn-icons-png.flaticon.com/512/25/25231.png?w=360"
  },
  {
      id:5,
      images:"https://st2.depositphotos.com/1026266/5832/i/450/depositphotos_58324855-stock-photo-handsome-school-boy-thinking-about.jpg",
      name:"Matin Guliyev",
      desc:"Backend Dev",
      instaUrl:"https://upload.wikimedia.org/wikipedia/commons/thumb/5/58/Instagram-Icon.png/800px-Instagram-Icon.png",
      linkedinUrl:"https://cdn-icons-png.flaticon.com/512/174/174857.png",
      github:"https://cdn-icons-png.flaticon.com/512/25/25231.png?w=360"
  },
  {
      id:6,
      images:"https://www.cambridgeenglish.org/Images/TE-AP-002-640460.jpg",
      name:"no name",
      desc:"Developer olmaga cehd edir ",
      instaUrl:"https://upload.wikimedia.org/wikipedia/commons/thumb/5/58/Instagram-Icon.png/800px-Instagram-Icon.png",
      linkedinUrl:"https://cdn-icons-png.flaticon.com/512/174/174857.png",
      github:"https://cdn-icons-png.flaticon.com/512/25/25231.png?w=360"
  },
  {
      id:7,
      images:"https://www.cambridgeenglish.org/Images/TE-AP-002-640460.jpg",
      name:"salam",
      desc:"Developer olmaga cehd edir ",
      instaUrl:"https://upload.wikimedia.org/wikipedia/commons/thumb/5/58/Instagram-Icon.png/800px-Instagram-Icon.png",
      linkedinUrl:"https://cdn-icons-png.flaticon.com/512/174/174857.png",
      github:"https://cdn-icons-png.flaticon.com/512/25/25231.png?w=360"
  },
];
const Teacher = () => {
  return (
    <section id="teacher">
      <div className="container">
        <div className="row">
          {Teachers.length>0 ? (
            Teachers.map((teach) => (
              <div key={`id${teach.id}`} className="col-lg-4 mt-5">
                <div className="teach">
                  <div className="teach_img">
                    <img src={teach.images} alt={teach.name} />
                  </div>
                  <div className="teach_name">
                    <h5>{teach.name}</h5>
                    <p>{teach.desc}</p>
                  </div>
                  <div className="teach_social">
                    <img src={teach.instaUrl} alt={teach.instaUrl} />
                    <img src={teach.linkedinUrl} alt={teach.linkedinUrl} />
                    <img src={teach.github} alt={teach.github} />
                  </div>
                </div>
              </div>
            ))
          ) : (
         <img style={{width:'200px',height:'200px',objectFit:'cover'}} src="https://i.pinimg.com/originals/2b/02/15/2b02159fee58d573c079ad5212d56b63.gif"/>
          )}
        </div>
      </div>
     
    </section>
  );
};

export default Teacher;

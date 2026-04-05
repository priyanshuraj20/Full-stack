import Card from "./component/Card";

const App = () => {
   const jobs = [
    {
      logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQNbpIfA-_GwTVZBVlpCvdIcLVOsCxn4BmqHA&s",
      company: "Meta",
      posted: "1 day ago",
      role: "React Developer",
      tag1: "Full Time",
      tag2: "Mid Level",
      pay: 110,
      location: "Menlo Park, USA",
    },
    {
      logo: "https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg",
      company: "Google",
      posted: "3 days ago",
      role: "Frontend Engineer",
      tag1: "Full Time",
      tag2: "Junior Level",
      pay: 95,
      location: "Bangalore, India",
    },
    {
      logo: "https://upload.wikimedia.org/wikipedia/commons/f/fa/Apple_logo_black.svg",
      company: "Apple",
      posted: "5 days ago",
      role: "Product Designer",
      tag1: "Full Time",
      tag2: "Senior Level",
      pay: 120,
      location: "Cupertino, USA",
    },
    {
      logo: "https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg",
      company: "Amazon",
      posted: "2 days ago",
      role: "UI/UX Designer",
      tag1: "Part Time",
      tag2: "Senior Level",
      pay: 85,
      location: "Mumbai, India",
    },
    {
      logo: "https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg",
      company: "Netflix",
      posted: "4 days ago",
      role: "Frontend Architect",
      tag1: "Full Time",
      tag2: "Senior Level",
      pay: 150,
      location: "Los Gatos, USA",
    },
    {
      logo: "https://upload.wikimedia.org/wikipedia/commons/4/44/Microsoft_logo.svg",
      company: "Microsoft",
      posted: "6 days ago",
      role: "Software Engineer",
      tag1: "Full Time",
      tag2: "Junior Level",
      pay: 90,
      location: "Hyderabad, India",
    },
    {
      logo: "https://upload.wikimedia.org/wikipedia/commons/2/21/Nvidia_logo.svg",
      company: "NVIDIA",
      posted: "7 days ago",
      role: "AI Software Engineer",
      tag1: "Full Time",
      tag2: "Senior Level",
      pay: 140,
      location: "Santa Clara, USA",
    },
    {
      logo: "https://upload.wikimedia.org/wikipedia/commons/b/bb/Tesla_T_symbol.svg",
      company: "Tesla",
      posted: "2 days ago",
      role: "Frontend Developer",
      tag1: "Contract",
      tag2: "Mid Level",
      pay: 105,
      location: "Austin, USA",
    },
  ];


  return (
    <div className="parent">
      {jobs.map(function (e,i) {
        return (
          <div key={i}>
          <Card
            logo={e.logo}
            company={e.company}
            posted={e.posted}
            role={e.role}
            tag1={e.tag1}
            tagg2={e.tag2}
            pay={e.pay}
            location={e.location}
          />
          </div>
        );
      })}
    </div>
  );
};

export default App;

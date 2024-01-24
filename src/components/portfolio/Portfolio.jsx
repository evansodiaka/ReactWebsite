import {useEffect, useState} from "react"
import "./portfolio.scss"
import PortfolioList from "../portfolioList/PortfolioList"
import {
    featuredPortfolio,
    webPortfolio,
    mobilePortfolio,
    contentPortfolio,
    designPortfolio
}from "../../data";

export default function Portfolio() {
    const [selected, setSelected]= useState("featured");
    const[data, setData]= useState([]);
    useEffect(()=> {
        switch(selected){
            case "featured":
                setData(featuredPortfolio);
                break;
            case "web":
                    setData(webPortfolio);
                break;
            case "mobile":
                setData(mobilePortfolio);
                break;
            case "design":
                setData(designPortfolio);
                break;
            case "content":
                setData(contentPortfolio);
                break;
            default:
                setData(featuredPortfolio);
        }
    }, [selected])
    const list = [
        {
          id: "featured",
          title: "Featured",
        },
        {
          id: "web",
          title: "Web App",
        },
        {
          id: "mobile",
          title: "Mobile App",
        },
        {
          id: "design",
          title: "Design",
        },
        {
          id: "content",
          title: "Content",
        },
      ];

    
    return (
        <div className="portfolio" id="portfolio"> 
        <h1> Portfolio </h1>
        <ul>
            {list.map((item)=>(
                <PortfolioList 
                title ={item.title} 
                active={selected === item.id}
                setSelected = {setSelected}
                id={item.id}
                />
            ))}
        </ul>
    
        <div className="container">
            {
                data.map((d)=>(
                <div className="item"> 
                <img src={d.img} alt=""/>
                <h3>{d.title}</h3>
            </div> 
            ))}

       </div>
       <span style={{color:"red"}}> Please note website is also used to display UI skills. Pls feel free to see my github for full project list </span>

    </div>
    )
}

import React from "react";
import ReactDOM from 'react-dom';
import './index.css';
import { IoMenuOutline } from "react-icons/io5";
import { MdHomeFilled } from "react-icons/md";
import { SiYoutubeshorts } from "react-icons/si";
import { MdOutlineSubscriptions } from "react-icons/md";
import { MdOutlineVideoLibrary } from "react-icons/md";
import { HiOutlineDotsVertical } from "react-icons/hi";
import { IoMdSearch } from "react-icons/io";
import { IoMic } from "react-icons/io5";
import { GrYoutube } from "react-icons/gr";
import image1 from './Assets/image1.png';
import image2 from './Assets/image2.png';
import image3 from './Assets/image3.png';
import image4 from './Assets/image4.png';
import image5 from './Assets/image5.png';
import image6 from './Assets/image6.png';
import image7 from './Assets/image7.png';
import image8 from './Assets/image8.png';
import image9 from './Assets/image9.png';
import image10 from './Assets/image10.png';
import image11 from './Assets/image11.png';
import image12 from './Assets/image12.png';

function Youtube(){
  return(
    <div className="youtube">


      <div className="left">

      <div className='icon1'><IoMenuOutline /></div>

      <div className='icon'><MdHomeFilled /></div>
      <p className="left-p">Home</p>
      <div className='icon'><SiYoutubeshorts /></div>
      <p className="left-p">Shorts</p>
      <div className='icon'><MdOutlineSubscriptions /></div>
      <p className="left-p">Subscription</p>
      <div className='icon'><MdOutlineVideoLibrary /></div>
      <p className="left-p">You</p>

      </div>

      <div className="right">

      <div className="nav">
        <div className="nav1">
          <div className="icon-nav"><GrYoutube/></div>
          <p className="p-nav">YouTube</p>
        </div>
        <div className="nav2">
          <div>
        <form className="form">
          <input type="text" className="input" placeholder="Search..."/>
          <div className="search"><IoMdSearch/></div>
        </form>
        </div>
        <div className="mic"><IoMic/></div>

        </div>

      </div>
      <div className="content">


      <div className="row">
        <div className="gap">
        <img src={image1} alt="" className='img'/>
            <div className="tabel-content">
              <div className="table-left">
              <p><span className="span1">All React Hooks in 2 Hours |  <br/> Complete React Hooks Tutorial</span> <br/>3 months ago</p>
              </div>
              <div className="table-right">
                <HiOutlineDotsVertical/>
              </div>
            </div>
        </div>

        <div className="gap">
        <img src={image2} alt="" className='img'/>
            <div className="tabel-content">
              <div className="table-left">
              <p><span className="span1">NPTEL Cloud Computing week | <br/>Assignment 7 Solution Quiz</span> <br/>12 hours ago</p>
              </div>
              <div className="table-right">
                <HiOutlineDotsVertical/>
              </div>
            </div>
        </div>

        <div className="gap">
        <img src={image12} alt="" className='img'/>
            <div className="tabel-content">
              <div className="table-left">
              <p><span className="span1">Yellorukum Thanks - Lap of <br/> Honour | IPL 2024</span> <br/>3 months ago</p>
              </div>
              <div className="table-right">
                <HiOutlineDotsVertical/>
              </div>
            </div>
        </div>

        <div className="gap">
        <img src={image4} alt="" className='img'/>
            <div className="tabel-content">
              <div className="table-left">
              <p><span className="span1">Learn CSS Flexbox in 20 Minutes</span> <br/>3 weeks ago</p>
              </div>
              <div className="table-right">
                <HiOutlineDotsVertical/>
              </div>
            </div>
        </div>

      </div>
  

      <div className="row">
        <div className="gap">
        <img src={image5} alt="" className='img'/>
            <div className="tabel-content">
              <div className="table-left">
              <p><span className="span1">Drafting a Winning SIH PPT 🔥 |<br/> Smart India Hackathon 2024</span> <br/>4 days ago</p>
              </div>
              <div className="table-right">
                <HiOutlineDotsVertical/>
              </div>
            </div>
        </div>

        <div className="gap">
        <img src={image6} alt="" className='img'/>
            <div className="tabel-content">
              <div className="table-left">
              <p><span className="span1">how to HACK a password linux<br/> and Windows Edition</span> <br/>1 year ago</p>
              </div>
              <div className="table-right">
                <HiOutlineDotsVertical/>
              </div>
            </div>
        </div>

        <div className="gap">
        <img src={image7} alt="" className='img'/>
            <div className="tabel-content">
              <div className="table-left">
              <p><span className="span1">Database Engineering Complete<br/> Tutorial | DBMS Complete Course</span> <br/>1 year ago</p>
              </div>
              <div className="table-right">
                <HiOutlineDotsVertical/>
              </div>
            </div>
        </div>

        <div className="gap">
        <img src={image8} alt="" className='img'/>
            <div className="tabel-content">
              <div className="table-left">
              <p><span className="span1">I solved 541 Leetcode <br/>problems | But you need only 150.</span> <br/>1 year ago</p>
              </div>
              <div className="table-right">
                <HiOutlineDotsVertical/>
              </div>
            </div>
        </div>

      </div>



      <div className="row">
        <div className="gap">
        <img src={image9} alt="" className='img'/>
            <div className="tabel-content">
              <div className="table-left">
              <p><span className="span1">Fastest way to learn Data Structures and Algorithms</span> <br/>4 weeks ago</p>
              </div>
              <div className="table-right">
                <HiOutlineDotsVertical/>
              </div>
            </div>
        </div>

        <div className="gap">
        <img src={image10} alt="" className='img'/>
            <div className="tabel-content">
              <div className="table-left">
              <p><span className="span1">Telegram Owner ARRESTED <br/>Telegram Banned? </span> <br/>2 days ago</p>
              </div>
              <div className="table-right">
                <HiOutlineDotsVertical/>
              </div>
            </div>
        </div>

        <div className="gap">
        <img src={image11} alt="" className='img'/>
            <div className="tabel-content">
              <div className="table-left">
              <p><span className="span1">World Today: Watch All the <br/>International News </span> <br/>2 days ago</p>
              </div>
              <div className="table-right">
                <HiOutlineDotsVertical/>
              </div>
            </div>
        </div>


        <div className="gap">
        <img src={image3} alt="" className='img'/>
            <div className="tabel-content">
              <div className="table-left">
              <p><span className="span1">Smart India Hackathon 2024 |  <br/>Complete Roadmap for SIH </span> <br/>6 days ago</p>
              </div>
              <div className="table-right">
                <HiOutlineDotsVertical/>
              </div>
            </div>
        </div>


      </div>

      </div>
      </div>

    </div>
  )
}

ReactDOM.render(<Youtube/>,document.getElementById('root'));


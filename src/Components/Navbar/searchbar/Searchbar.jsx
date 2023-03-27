import React from 'react'
import "./Searchbar.css";
//import { FaBeer } from "react-icons/fa";
import { BsMicFill} from "react-icons/bs";
import { FaSearch } from "react-icons/fa";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import SearchList from './SearchList';
import {useState} from 'react';

function Searchbar() {
  const [searchQuery,setSearchQuery] = useState("");
  const [seachListA,setSeaechList] = useState(false)
  const TitleArray=["video1","video2","Animation video","Movies"]
  return (
    <>
     <div className="searchbar_container">
        <div className="searchbar_container2">
            <div className="search_div">
                <input type="text" className='iBox_searchbar' placeholder='search' 
                  onChange={e=>setSearchQuery(e.target.value)}
                  onCliclk={e=>setSeaechList(true)}
                  />
                <FaSearch className="searchicon_searchbar"/>
                onCliclk={e=>setSeaechList(false)}
                <BsMicFill className='mic_searchbar'/>
                {searchQuery && seachListA &&
                  <SearchList
                  TitleArray={TitleArray}
                  />
                }
            </div>
        </div>
        </div> 
    </>
  )
}

export default Searchbar

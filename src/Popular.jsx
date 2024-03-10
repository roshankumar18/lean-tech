import React, { useEffect, useState } from 'react'

// Initial categories with default counts
const initialCategories = {
  'ENGINEERING DAYS': 0 ,
  'BANGALORE STORIES': 0 ,
  'GOA DIARIES': 0 ,
  'NITK STUFFS': 0 ,
  'IIM THINGS': 0 ,
  'IIMB FACTS': 0,
  'SHAYARI': 0 ,
  'VIKAS MEENA': 0 ,
}
export default function Popular({ onChildValue , storyCount ,isStarClicked}) {
  const [categories, setCategories] = useState(initialCategories)
  const [starredCategories, setStarredCategories] = useState({})

  // useEffect to update categories when storyCount changes
  useEffect(()=>{
    setCategories(prev=>({...prev,...storyCount}))
  },[storyCount])

 // useEffect to update starredCategories when isStarClicked changes
  useEffect(() => {
    const localStarredCategories = JSON.parse(localStorage.getItem('starredStories')) || {}
    setStarredCategories(localStarredCategories);
  },[isStarClicked])

  // Sort categories based on story counts
  const sortedCategories = Object.keys(categories).sort((a, b) => categories[b] - categories[a]).slice(0,10)

  // ListItem component for rendering individual list items
  const favouriteCategories = Object.keys(starredCategories)
    .filter((category) => starredCategories[category])
    .concat(
      Object.keys(categories)
        .filter((category) => !starredCategories[category])
    ).slice(0, 10)


  function ListItem({ value }) {

    const handleClick = () => {
      onChildValue(value)
    }
    
    return <li onClick={handleClick}>{value}</li>
  }

  return (
    <div className='popular'>
      {isStarClicked ? <h1>Favourite Topic</h1>:
        <h1>What’s popular right now?</h1>
      }
      <div className='list'>
        <ul className='list-items'>
          {isStarClicked? favouriteCategories.map(category=>(
            <ListItem key={category} value={category}/>
          )):
          sortedCategories.map(category=>(
            <ListItem key={category} value={category}/>
          ))}
        </ul>
      </div>
    </div>
  )
}

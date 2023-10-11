import thumbUp from './thumb-up.svg';
import thumbUpOutline from './thumb-up-outline.svg';
import thumbDown from './thumb-down.svg';
import thumbDownOutline from './thumb-down-outline.svg';
import './App.css';
import data from './data.json';
import voteData from './votes.json';

import React, { useState } from 'react';

function Button({type, count, onVote}) {
  const fill = type === 'up' ? thumbUp : thumbDown;
  const outline = type === 'up' ? thumbUpOutline : thumbDownOutline;
  const voted = `voted ${type}`;
  const vote =  `vote ${type}`;

  function handleClick() {
    onVote(type);
  }

  return (<button onClick={handleClick} className={type}>
    <img className={voted} src={fill}></img>
    <img className={vote} src={outline}></img>
    {count > 0 ? count : ''}
  </button>)
}

function Figure({url, upVotes, downVotes, vote, castVote}) {
  function handleVote(type) {
    castVote(url, type);
  }
  return (
    <figure className={vote}>
        <img src={url} />
        <Button type='up' count={upVotes} onVote={handleVote}></Button>
        <Button type='down' count={downVotes} onVote={handleVote}></Button>
      </figure>
  )
}

function App() {
  const [images, setImages] = useState(data);
  const [votes, setVotes] = useState(voteData);
  function registerVote(url, vote) {
    const voted = votes.findIndex(vote => vote.url === url);
    const currVote = voted > -1 ? votes[voted].vote : '';
    const newImages = images.map(image => {
      if(image.url === url) {
        if(vote === 'up') {
          if(currVote.length > 0) {
            if(currVote === 'up') {
              return { ...image, upVotes: image.upVotes - 1 }
            } if(currVote === 'down') {
              return { ...image, upVotes: image.upVotes + 1, downVotes: image.downVotes - 1 }
            }
          }
          return { ...image, upVotes: image.upVotes + 1 }
        } else if(vote === 'down') {
          if(currVote.length > 0) {
            if(currVote === 'down') {
              return { ...image, downVotes: image.downVotes - 1 }
            } if(currVote === 'up') {
              return { ...image, upVotes: image.upVotes - 1, downVotes: image.downVotes + 1 }
            }
          }
          return { ...image, downVotes: image.downVotes + 1 }
        } 
        return image;
      }
      return image;
    });
    setImages(newImages);

    let newVotes;
    if(voted > -1) {
      if(currVote === vote) {
        newVotes = votes.filter(vote => vote.url !== url);
      } else {
        newVotes = votes.map(image => {
          if(image.url === url) {
            return { ...image, vote };
          }
          return image;
        });
      }
    } else {
      newVotes = [...votes, { url, vote }]
    }
    setVotes(newVotes);
  }
  return (
    images.map(({url, upVotes, downVotes}, idx) => {
      const voted = votes.findIndex(vote => vote.url === url);
      const vote = voted > -1 ? votes[voted].vote : '';
      return <Figure 
        url={url} 
        upVotes={upVotes} 
        downVotes={downVotes} 
        vote={vote} 
        castVote={registerVote}
        key={idx}>
      </Figure>
    })
  );
}

export default App;

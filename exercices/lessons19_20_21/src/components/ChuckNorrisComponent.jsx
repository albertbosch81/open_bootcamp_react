import React, { useEffect, useState } from 'react';
import getRandomJoke from '../services/aixos.service';
import chuckImage from '../img/chuk-norris.png';
import { Button, ButtonGroup, Icon } from '@mui/material';
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import ThumbDownIcon from '@mui/icons-material/ThumbDown';

const ChuckNorrisComponent = () => {

    const [joke, setJoke] = useState(null);
    const [goodJokes, setGoodJokes] = useState(0);
    const [badJokes, setBadJokes] = useState(0);

    useEffect(() => {
        getJoke()
    }, []);

    const getJoke = () => {
        console.log('in get joke')
        getRandomJoke()
            .then((response)=> {
                if(response.status === 200) {
                    console.log(response.data)
                    setJoke(response.data)
                }
            })
    }

    function addGoodJoke() {
        setGoodJokes(goodJokes + 1)
    }

    function addBadJoke() {
        setBadJokes(badJokes + 1)
    }

    return (
        <div>
            <h1>Get your Chuck Norris jokes</h1>
            <div>
                {joke != null?
                    (
                        <div>
                            <img alt='chuck' src={chuckImage} style={{height: '400px'}} />
                            <h4 className='p-3'>{joke.value}</h4>
                            <div className='d-flex justify-content-center m-3'>
                                <ButtonGroup variant='contained' className='p-3'>
                                    <Button onClick={()=> addGoodJoke()} className='ml-3'> <ThumbUpIcon/> </Button>
                                    <Button onClick={()=> addBadJoke()} style={{background: 'tomato'}} className='mr-3'><ThumbDownIcon/></Button>
                                </ButtonGroup>
                                <p className='m-3' style={{fontSize: 'smaller'}}>Good jokes: {goodJokes}  Bad jokes: {badJokes} </p>
                            </div>
                            <Button variant='contained' onClick={()=> getJoke()} className='m-5'>Get a new Joke</Button>
                        </div>
                        
                    )
                    :
                    (
                        <div className='m-5'>
                            <h3>'Push the button to get a first joke'</h3>
                            <Button variant='contained' onClick={()=> getJoke()} className=''>Get a Joke</Button>    
                        </div>
                    )
                }
            </div>
        </div>
    );
}

export default ChuckNorrisComponent;

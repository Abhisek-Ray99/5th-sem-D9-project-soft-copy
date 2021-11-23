import React from 'react'
import { AiFillHeart } from 'react-icons/ai'
import { FaShare } from "react-icons/fa";
import { IconContext } from 'react-icons';
import { FiMoreHorizontal } from "react-icons/fi";

import { Div, Status, Sub, User, Time, Icon } from './Secondelement';

const Second = () => {
    return (
        <Div>
            <h1>Feed of Covid-Visualizer</h1>
            <div className="main">
                    <div>
                        <Status>
                            <span>approved &#10003;</span>
                            <IconContext.Provider value={{className: "more"}}>
                                <FiMoreHorizontal />
                            </IconContext.Provider>
                        </Status>
                        <Sub>I have been going through severe Covid-19 symptoms and i can not find any oxygen cynder.</Sub>
                        <User>@josh</User>
                        <Time>a few seconds ago</Time>
                        <Icon>
                            <IconContext.Provider value={{className: "icon1"}}>
                                <AiFillHeart />
                            </IconContext.Provider>
                            <IconContext.Provider value={{className: "icon2"}}>
                                <FaShare/>
                            </IconContext.Provider>
                        </Icon>
                    </div>
                    <div>
                        <Status>
                            <span>Spam &#10060;</span>
                            <IconContext.Provider value={{className: "more"}}>
                                <FiMoreHorizontal />
                            </IconContext.Provider>
                        </Status>
                        <Sub>I am suffering from a viral fever, but i have no money to buy medicines.</Sub>
                        <User>@josh</User>
                        <Time>2 days ago</Time>
                        <Icon>
                            <IconContext.Provider value={{className: "icon1"}}>
                                <AiFillHeart />
                            </IconContext.Provider>
                            <IconContext.Provider value={{className: "icon2"}}>
                                <FaShare/>
                            </IconContext.Provider>
                        </Icon>
                    </div>
                    <div>
                        <Status>
                            <span>Spam &#10060;</span>
                            <IconContext.Provider value={{className: "more"}}>
                                <FiMoreHorizontal />
                            </IconContext.Provider>
                        </Status>
                        <Sub>Hey i wanted some money, if you have please let me know in the message</Sub>
                        <User>@puru</User>
                        <Time>1 day ago</Time>
                        <Icon>
                            <IconContext.Provider value={{className: "icon1"}}>
                                <AiFillHeart />
                            </IconContext.Provider>
                            <IconContext.Provider value={{className: "icon2"}}>
                                <FaShare/>
                            </IconContext.Provider>
                        </Icon>
                    </div>
                    <div>
                        <Status>
                            <span>approved &#10003;</span>
                            <IconContext.Provider value={{className: "more"}}>
                                <FiMoreHorizontal />
                            </IconContext.Provider>
                        </Status>
                        <Sub>I am suffering from maleria. but hospital is not available. I wanted some kind of help.</Sub>
                        <User>@josh</User>
                        <Time>a few seconds ago</Time>
                        <Icon>
                            <IconContext.Provider value={{className: "icon1"}}>
                                <AiFillHeart />
                            </IconContext.Provider>
                            <IconContext.Provider value={{className: "icon2"}}>
                                <FaShare/>
                            </IconContext.Provider>
                        </Icon>
                    </div>
            </div>
        </Div>
    )
}

export default Second

import React from 'react';

import './ProjectDisplay.css'
import gif1 from './img/Plazza.gif'
import gif2 from './img/Nanotekspice.gif'

function ProjectDisplay() {
    return (
        <div className="projectDisplay">
            <div className="project1">
                <ProjectsGifs img={projectObj[0].img} title={projectObj[0].title} description={projectObj[0].description} />
            </div>
            <div className="project2">
                <ProjectsGifs img={projectObj[1].img} title={projectObj[1].title} description={projectObj[1].description} />
            </div>
            <div className="project3">
                <ProjectsGifs img={projectObj[2].img} title={projectObj[2].title} description={projectObj[2].description} />
            </div>
            <div className="project4">
                <ProjectsGifs img={projectObj[3].img} title={projectObj[3].title} description={projectObj[3].description} />
            </div>
            <div className="project5">
                <ProjectsUnity game={projectUnityObj[0].game} title={projectUnityObj[0].title} description={projectUnityObj[0].description} />
            </div>
        </div>
    );
}

const projectObj = [
    {
        img: <img src={gif1} alt="gif" height="70%" width="70%"></img>,
        title: 'Plazza',
        description: 'The purpose of this project was to realize a simulation of a pizzeria, which is composed of a reception that accepts new commands, of several kitchens, themselves with several cooks, themselves cooking several pizzas. With this project, I learnt to deal with various problems, including load balancing, process and thread synchronizationand communication.'
    },
    {
        img: <img src={gif2} alt="gif" height="70%" width="70%"></img>,
        title: 'Nanotekspice',
        description: 'The goal with this projevt was to build a logic simulator that builds a graph (the nodes of which will be simulated digital electroniccomponents, inputs or outputs) from a configuration file, and injects values into that graph to get results. I really like this one. It was my first real C++ project and it made me grasp concepts such as interfaces, abstraction, encapsulation and polymorphism.'
    },
    {
        img: <img src={gif2} alt="gif" height="70%" width="70%"></img>,
        title: '42sh',
        description: 'With this project, the goal was to write a Unix SHELL based on tcsh. What I learned with it was to develop group coherence but most importantly to be rigorous. We had to implement a lot of features and stability was mandatory.'
    },
    {
        img: <img src={gif2} alt="gif" height="70%" width="70%"></img>,
        title: 'MyRunner',
        description: 'This was the first game I made in my curriculum. We were asked to build a small video game based on the rules of a finite Endless Running Game. First time managing inputs, animating sprites or simply developping a game from scratch ! The parallax effect\'s making was simple, but so pleasant to see that I think it\'s maybe one of the factor that made me think video games is what i want to do.'
    }
];

const projectUnityObj = [
    {
        game: <iframe src="./src/unityGames/actiongame/index.html"></iframe>,
        title: 'Escape',
        description: 'I made Escape during my first game jam. I was pretty sober on the theme interpretation (It was "Escape"). I had already fooled around unity but this is my first "real" experience with it. I loved it.'
    },
    {
        game: <iframe src="./src/unityGames/actiongame/index.html"></iframe>,
        title: 'AnimationPrototype',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas luctus fermentum erat, non placerat libero faucibus et. Phasellus ut nisi urna. Pellentesque eget libero accumsan, commodo lectus in, faucibus nibh. Integer ac tempus metus. Fusce nec nunc arcu. Sed euismod lectus ultrices, interdum enim et, suscipit magna. Donec bibendum diam vel quam blandit ornare.Lorem ipsum dolor sit amet, consectetur adipiscing elit. In hac habitasse platea dictumst. Phasellus nec augue gravida, consectetur neque eu, imperdiet neque.'
    }
];

function ProjectsGifs(props)
{
    return (
        <div>
            <span>
                {props.img}
            </span>
            <h4>{props.title}</h4>
            <p>{props.description}</p>
        </div>
    );
}

function ProjectsUnity(props)
{
    return (
        <div>
            <span>
                {props.game}
            </span>
            <h4>{props.title}</h4>
            <p>{props.description}</p>
        </div>
    );
}

export default ProjectDisplay;
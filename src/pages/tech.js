// import { badge } from "gatsby"
import React from "react"

const allBadges = [
    {key: 'j', value: 'Javascript', img: 'js-brands.svg'},

    {key: 'n', value: 'NodeJS', img: 'node-js-brands.svg'},

    {key: 'g', value: 'Git', img: 'git-alt-brands.svg'},

    {key: 'h', value: 'HTML5', img: 'jhtml5-brands.svg'},
    
    {key: 'c', value: 'CSS3', img: 'css3-brands.svg'},

    {key: 's', value: 'Sass', img: 'Sass-brands.svg'},

    {key: 'p', value: 'Python', img: 'Python-brands.svg'},

    {key: 'm', value: 'MongoDB', img: 'mongodb-brands.svg'},
]

const Badges = ({children, img}) => {
    // const img_path = `../assets/logos/css3-brands.svg`;
    // const img_path = `logos/${img}`;

    return (
        <div className="logo">
            {/* <Image src={img_path} alt="technologie logo"/> */}
            <p>{children}</p>
        </div>
    )
}


const Technologies = () => {
    return (
        
        <section className="tech">

            <h1>What I like to Use</h1>
            
            <div className="content">

                {allBadges.map(badge => (
                    <Badges key={badge.key} img={badge.img}>
                        {badge.value}
                    </Badges>
                ))}

            </div>
        </section>

    )
}

export default Technologies
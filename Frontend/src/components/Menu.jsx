import React from 'react'
import {data} from "../restApi.json"

const Menu = () => {
  return (
    <section className="menu" id="menu">
        <div className="container">
            <div className="heading_section">
                <div className="heading">POPULAR DISHES</div>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quibusdam sint aliquam magni molestias dolores tempora quas doloribus. Architecto, tempora exercitationem?</p>

            </div>
            <div className="dishes_container">
                {
                    data[0].dishes.map(element => {
                        return (
                            <div className="card" key={Element.id}>
                                <img src={element.image} alt={element.title} />
                                <h3>{element.title}</h3>
                                <button>{element.category}</button>
                            </div>
                        )
                    })
                }
            </div>
        </div>
      
    </section>
  )
}

export default Menu

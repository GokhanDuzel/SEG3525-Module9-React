import React from "react";
import Example from "./Example.jsx";
import Todos from '../Todos';
import AddTodo from '../AddTodo';
import uuid from 'uuid';
import { Trans } from "react-i18next";
import AliceCarousel from 'react-alice-carousel'
import 'react-alice-carousel/lib/alice-carousel.css'


const Gallery = () => {

  const handleOnDragStart = (e) => e.preventDefault()
  return (
    <AliceCarousel mouseTrackingEnabled>
      <img src={require('./img/wow4.jpg')} onDragStart={handleOnDragStart} className="card-img-top" height="360px" alt="a"/>
      <img src={require('./img/wow2.jpg')} onDragStart={handleOnDragStart} className="card-img-top" height="360px" alt="a"/>
      <img src={require('./img/wow3.jpg')} onDragStart={handleOnDragStart} className="card-img-top" height="360px" alt="a"/>
      <img src={require('./img/wow5.jpg')} onDragStart={handleOnDragStart} className="card-img-top" height="360px" alt="a"/>
      <img src={require('./img/wow.jpg')} onDragStart={handleOnDragStart} className="card-img-top" height="360px" alt="a"/>
    </AliceCarousel>
  )
}


class Reviews extends React.Component {
  state = {
    todos: [
      {id: 1, title:"Gökhan", comment: "first comment"}
    ]
  }

  
  componentDidUpdate(prevProps, prevState) {
    if (prevState.comments !== this.state.comments) {
      console.log('State has changed.')
    }
  }

      // Delete Todo
      delTodo = id => {
        this.setState({
          todos: [...this.state.todos.filter(todo => todo.id !== id)]
        })
    };
  
    // Add Todo
    addTodo = (title,comment) => {
      const newTodo = {
        title: title,
            comment: comment,
            id: uuid.v4(),
      }
          this.setState({ todos: [...this.state.todos, newTodo] });
  
    };

  render(){
  return (

      <div className="container">
        <br/>
         <div className="d-flex justify-content-center">
           <h1 className="blueText float-none"><strong><Trans>Professional Reviews</Trans></strong></h1>
         </div><br/>



       <div className="container">
         <div className="card blueBG whiteText">
         <div className="card-body">
           <h4 className="card-title"><strong>World Of Warcraft</strong></h4>
           <Gallery />
           <p className="card-text">
           Azeroth has six major population centers, of which three are controlled by the Horde faction. Established by the united tribes of the once nomadic Tauren to serve as a hub for traders and artisans, the city of Thunder Bluff consists of tents, spirit lodges, longhouses and colorfully painted totems. Built atop a series of rises that soar from the lush grasslands below, it is also a secure, peaceful refuge for the bull-like race and its allies. To the east, Orgrimmar was founded to be the capital of the ferocious Orcs' new homeland. It stands within a sprawling canyon, behind the protection of massive, seemingly impenetrable walls. Across the sea in the Eastern Kingdoms, a maze of crypts, catacombs, tombs and passages bears the name The Undercity. Principally inhabited by the Undead, it lies below the ruined Human community of Lordaeron.
           <span id="dots">...</span><Example /></p>
         </div>
         </div><br/><br/>
         </div>

         <div className="container">
           <div className="card blueBG whiteText">
           <div className="card-body">
             <h4 className="card-title"><strong>Write a comment</strong></h4>
             <AddTodo addTodo={this.addTodo} />
           <p className="card-text"></p>
           </div>
           </div><br/><br/>
           </div>
            <div className="container">
              <div className="card blueBG whiteText">
                <div className="card-body">
                  <h4 className="card-title"><strong>Comments</strong></h4>
                  <p className="card-text" id="myp">
                  <Todos
                    todos={this.state.todos}
                    delTodo={this.delTodo}
                  />
                  </p>
                  </div>
                </div><br/><br/>
              </div>
            </div>
  )};
}

export default Reviews;

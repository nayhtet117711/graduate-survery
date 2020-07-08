import React, { Component } from "react"
import * as surveyQuestion from "../../config/dummy"
import constant from "../../config/constant"


class App extends Component {

    constructor() {
        super()
        this.state = {
     
        }
    }

    componentDidMount() {

    }

    render() {
       return (
           <section class="feature-area">
               <div class="container-fluid">
                   <div class="feature-inner row">
                       <div class="col-lg-2 col-md-6">
                           <div class="feature-item d-flex">
                               <i class="ti-book"></i>
                               <div class="ml-20">
                                   <h4>Vision</h4>
                                   <p>
                                       To be a Globally Remarkable Research based University and Cyber University
                                        </p>
                               </div>
                           </div>
                       </div>
                       <div class="col-lg-3 col-md-6">
                           <div class="feature-item d-flex">
                               <i class="ti-cup"></i>
                               <div class="ml-20">
                                   <h4>Mission</h4>
                                   <p>
                                       To provide skillful engineers and outstanding researchers
                                       To create broad access of engineering education opportunities with smart learning
                                       To be a national/regional/global level high ranking university
                                        </p>
                               </div>
                           </div>
                       </div>
                       <div class="col-lg-2 col-md-6">
                           <div class="feature-item d-flex border-right-0">
                               <i class="ti-desktop"></i>
                               <div class="ml-20">
                                   <h4>Motto</h4>
                                   <p>
                                       "Shape and Bright Your Future at UTYCC"
                                        </p>
                               </div>
                           </div>
                       </div>
                   </div>
               </div>
           </section>
       )            
    }

}

export default App;
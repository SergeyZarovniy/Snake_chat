import React from 'react';
import './App.css';






const App = () => {
  return (
    <div className="app-wrapper">
      <header className="header">
        <img src='https://media.istockphoto.com/vectors/viper-snake-sport-logo-design-vector-id1255768797?k=6&m=1255768797&s=170667a&w=0&h=Ai5arIpjB0eoF6Wrio42f2zG3OVnHQDHecAnhXpUUwY='></img>
       
      </header>
              <nav className="nav">

                  <div> 
                    <a> My Profile</a> 
                     </div>

                     <div> 
                    <a> Messages </a> 
                     </div>

                     <div> 
                    <a> News </a> 
                     </div>

                     <div> 
                    <a> Music </a> 
                     </div>

                     <div> 
                    <a> Settings </a> 
                     </div>

             </nav>

                   <div className="content">
                     <div>
                       <img src='https://www.rentcafe.com/blog/wp-content/uploads/sites/5/2020/06/minimalism-save-money-featured.png'></img>
                     </div>
                     <div>
                       ava + description
                     </div>
                     <div>
                       My posts
                       <div>
                         New post
                       </div>
                     </div>
                     <div>
                       post 1 
                     </div>
                     <div>
                       post 2
                     </div>

                   </div>

    </div>
  );
}

export default App;

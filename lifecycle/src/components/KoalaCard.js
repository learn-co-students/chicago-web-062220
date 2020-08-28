

import React from 'react'

class KoalaCard extends React.Component {

 render(){
   console.log(this.props, '------');
   return (
   <div>
     <img src={this.props.koala.image_url} />
   </div>
   )
 }
}

export default KoalaCard

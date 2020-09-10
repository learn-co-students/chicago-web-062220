import React from 'react'

class Dashboard extends React.Component {
 render(){
   console.log('this.props in daashboard', this.props)
   const username = this.props.match.params.username

   return (
   <div>
     <h4>hello {username}</h4>
   </div>
   )
 }
}

export default Dashboard

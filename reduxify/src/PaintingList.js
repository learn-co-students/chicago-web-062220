import React from 'react';
import DeleteablePainting from './DeleteablePainting';
import Painting from './Painting';
import { connect }  from 'react-redux'
import { fetchPaintingsSuccess } from './actions/index'

class PaintingList extends React.Component {
  constructor(props) {
    super(props);
this.state = {
      paintings: [] 
    }; 
  }

  componentDidMount(){
    fetch('http://localhost:3000/paintings')
    .then(resp => resp.json())
    .then(paintingsArr => {

      this.props.fetchPaintingsSuccess(paintingsArr)

      // this.setState({
        // paintings: paintingsArr
      // })
    })
  }

  handleVote = (id) => {
    this.setState(prevState => {
      return {
        paintings: prevState.paintings.map(p => {
          if (p.id !== id) {
            return p;
          } else {
            return { ...p, votes: p.votes + 1 };
          }
        })
      };
    });
  }

  renderPaintings = () => {
    return this.props.paintings.map(p => (
      <DeleteablePainting
        key={p.id}
        painting={p}
        handleVote={this.handleVote}
      />
    ));
  }

  render() {
    console.log(this.props, '------');
    return (
        <div>
            <div>
                <h1>All Paintings!</h1>
                <div className="ui items">{this.renderPaintings()}</div>
            </div>
        </div>
    );
  }
}

// connect allows the react component read or write or read/write capabilities
//
//
//
//connect method:
// wires up a component to give it read and write access to the redux store
// it does this by feeding the relevant data to the component through its props
//
// it takes two arguments:
//  1) mapStatesToProps



// mapStateToProps:
// 1) gets access to the redux store state as its argument
// 2) the output of this function is always an object
// 3) all of the key/value pairs in the output become props on the component im connecting


const mapStateToProps= (storeState) => {
  return {
    paintings: storeState.paintings,
  }
}

const mapDispatchToProps = {
  fetchPaintingsSuccess
}


export default connect(mapStateToProps, mapDispatchToProps)(PaintingList)













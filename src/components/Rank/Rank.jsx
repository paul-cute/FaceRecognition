import React from 'react'

class Rank extends React.Component{

  constructor(){
    super();
    this.state = {
      hello: ''
    }
  }

  render(){
    return (
      <div>
      <div className='white f3'>
        {`${this.props.name}, your current entry count is...`}
      </div>
      <div className='white f1'>
        {this.props.entries}
      </div>
    </div>
    )
  }
}

export default Rank
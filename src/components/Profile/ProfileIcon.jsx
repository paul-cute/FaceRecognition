import React, { Component } from 'react'
import {
    Dropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem,
  } from 'reactstrap';

export default class ProfileIcon extends Component {

    constructor(props){
        super(props);
        this.toggle = this.toggle.bind(this)
        this.state = {
            dropdownOpen: false
        }
    }

    toggle(){
        this.setState({
            dropdownOpen: !this.state.dropdownOpen
        })
    }

  render() {
    return (
        <div className='pa4 tc'>
            <Dropdown isOpen={this.state.dropdownOpen} toggle={this.toggle}>
                <DropdownToggle 
                    tag="span"
                    onClick={this.toggle}
                    data-toggle='dropdown'
                    aria-expanded={this.state.dropdownOpen}
                >
                    <img src="https://img.freepik.com/foto-gratis/gran-paisaje-verde-cubierto-cesped-rodeado-arboles_181624-14827.jpg" alt="avatar" className='br-100 ba h3 w3 dib' />
                </DropdownToggle>
                <DropdownMenu 
                    end
                    className='b--transparent shadow-5' 
                    style={{marginTop: "20px", backgroundColor: "rgba(255,255,255,0.5)"}}
                >
                    <DropdownItem onClick={this.props.toggleModal}>View Profile</DropdownItem>
                    <DropdownItem onClick={() => this.props.onRouteChange('signout')}>Signout</DropdownItem>
                </DropdownMenu>
            </Dropdown>
      </div>
    )
  }
}

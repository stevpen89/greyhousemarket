import React,{Component} from 'react'
import Order from './Order'
import {connect} from 'react-redux'
import {debounce} from 'lodash'
import {updateShipping} from '../ducks/reducer'

class Checkout extends Component {
    constructor(props){
        super()
        this.state = {
            email: props.email!=="Guest" ? props.email : '',
            firstName: props.firstName!=="Guest" ? props.firstName : '',
            lastName: props.lastName!=="Guest" ? props.lastName : '',
            address1: '',
            address2: '',
            zipCode: '',
            city: '',
            state: ''
        }
    }
    handleEmail(input){
        this.setState({
            email: input
        })
        this.sendToRedux()
    }
    handleFirst(input){
        this.setState({
            firstName: input
        })
        this.sendToRedux()   
    }
    handleLast(input){
        this.setState({
            lastName: input
        })
        this.sendToRedux()
    }
    handleAddress1(input){
        this.setState({
            address1: input
        })
        this.sendToRedux()
    }
    handleAddress2(input){
        this.setState({
            address2: input
        })
        this.sendToRedux()
    }
    handleZipCode(input){
        this.setState({
            zipCode: input
        })
        this.sendToRedux()
    }
    handleCity(input){
        this.setState({
            city: input
        })
        this.sendToRedux()
        
    }
    handleState(input){
        this.setState({
            state: input
        })
        this.sendToRedux()
    }
    sendToRedux = debounce(()=>{
            this.props.updateShipping(this.state.email,this.state.firstName,this.state.lastName,this.state.address1,this.state.address2,this.state.zipCode,this.state.city,this.state.state)
        }, 5000
    )

    render(){
        return(
            <div className="checkout">
            <div>
                <h1>Checkout</h1>
                <h2>Shipping Address</h2>
                <h3>Email Address</h3>
                <input onChange={(e)=>this.handleEmail(e.target.value)} value={this.state.email}/>
                <h3>First Name</h3>
                <input onChange={(e)=>this.handleFirst(e.target.value)} value={this.state.firstName}/>
                <h3>Last Name</h3>
                <input onChange={(e)=>this.handleLast(e.target.value)} value={this.state.lastName}/>
                <h3>Address</h3>
                <input onChange={(e)=>this.handleAddress1(e.target.value)} value={this.state.address1}/>
                <h3>Address 2</h3>
                <input onChange={(e)=>this.handleAddress2(e.target.value)} value={this.state.address2}/>
                <h3>Zip Code</h3>
                <input onChange={(e)=>this.handleZipCode(e.target.value)} value={this.state.zipCode}/>
                <h3>City</h3>
                <input onChange={(e)=>this.handleCity(e.target.value)} value={this.state.city}/>
                <h3>State</h3>
                </div>
                <Order />
            </div>
        )
    }
}
function mapStateToProps(state){
    const {email,firstName,lastName} = state
    return {email,firstName,lastName}
}
export default connect(mapStateToProps,{updateShipping})(Checkout)
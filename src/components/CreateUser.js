import React, { Component } from 'react'
import axios from 'axios'

export default class CreateUser extends Component {
    constructor(props) {
        super(props)

        this.onChangeName=this.onChangeName.bind(this);
        this.onSubmit=this.onSubmit.bind(this);

    
        this.state = {
             username:''
        }
    }

    onChangeName(e){
        this.setState({
            username:e.target.value
        })
    }


    onSubmit(e){
        e.preventDefault();
        const user={
            username:this.state.username
        }
        console.log(user);

        axios.post('http://localhost:3000/user/add',user)
        .then(res=>console.log(res.data))
        .catch(err=>console.log(err))
        
        this.setState({
            username:''
        })
    }
    render() {
        return (
            <div>
            <h3 className="text-center">Create New User</h3>
            <form onSubmit={this.onSubmit} className="w-50 m-auto">
              <div className="form-group"> 
                <label>Username: </label>
                <input  type="text"
                    required
                    className="form-control"
                    value={this.state.username}
                    onChange={this.onChangeName}
                    />
              </div>
              <div className="form-group mt-3">
                <input type="submit" value="Create User" className="btn btn-primary" />
              </div>
            </form>
          </div>
        )
    }
}

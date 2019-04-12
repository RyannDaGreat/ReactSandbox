import React, { Component } from 'react';
import '../App.css';


class CreateAccount extends Component{
    render(){
        return(
            <div class = "form2">
                <form >
                    <h3 style={{"text-align":"center", "color":"black", "font-family":"Comic Sans MS, cursive, sans-serif"}}>Create Your Account</h3>
                    <div className="form-group" class="createDiv">
                        <label class="createLabel">User Name</label>
                        <br/>
                        <input type="text" className="form-control" placeholder="e.g:user123" class="createInput"/>
                    </div>
                    <div className="form-group" class="createDiv">
                        <label class="createLabel">Email</label>
                        <br></br>
                        <input type="email" className="form-control" placeholder="e.g:user123@mail.com" class="createInput"/>
                    </div>
                    <div className="form-group" class="createDiv">
                        <label class="createLabel">Password</label>
                        <br/>
                        <input type="password" className="form-control" class="createInput"/>
                    </div>
                    <div className="form-group" class="createDiv">
                        <label class="createLabel">Enter password again</label>
                        <br/>
                        <input type="password" className="form-control" class="createInput"/>
                    </div>
                    <br/>
                    <button type="submit" className="btn btn-primary" class="createButton" style={{"text-align":"center"}}>create</button>
                </form>
            </div>
        );
    }
}

export default CreateAccount;
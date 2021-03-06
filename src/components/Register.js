import React from 'react';
import DataService from '../Service/DataService';

class Register extends React.Component {
constructor(props) {
    super(props);

    this.state = {
        name : "",
        email: "",
        phone: "",
        password: ""
    };
    this.changenamehandler = this.changenamehandler.bind(this);
    this.changemailhandler = this.changemailhandler.bind(this);
    this.changephonehandler = this.changephonehandler.bind(this);
    this.changepasshandler = this.changepasshandler.bind(this);
}

    saveUser = (e) => {
        if(e && e.preventDefault) {
            e.preventDefault();
            e.persist();
        }

        let user = {name: this.state.name, email: this.state.email, phone:this.state.phone, password:this.state.password};
        console.log('user => '+JSON.stringify(user));

        DataService.createUser(user).then(Response => {
            console.log(Response);
        })
    }

    changenamehandler = (event) => {
        this.setState({name: event.target.value})
    }

    changemailhandler = (event) => {
        this.setState({email: event.target.value})
    }

    changephonehandler = (event) => {
        this.setState({phone: event.target.value})
    }

    changepasshandler = (event) => {
        this.setState({password: event.target.value})
    }

    render() {
        return(
            // <div>
            //     <h1>Register Page</h1>
            //     <input type="text" value={this.state.name} name="name" onChange = {this.changenamehandler} placeholder="Name"/><br />
            //     <input type="email" value={this.state.email} name="email" onChange = {this.changemailhandler} placeholder="Email Id"/><br />
            //     <input type="number" value={this.state.phone} name="phone" onChange = {this.changephonehandler} placeholder="Mobile Number"/><br />
            //     <input type="password" value={this.state.password} name="password" onChange = {this.changepasshandler} placeholder="Password" /><br />
            //     <button onClick={this.saveUser}>Sing Up</button>
            // </div>

            <div>
                <section>
                <div className='container'>
                    <div className='row'>
                        <div className='card-body'>
                            <form>
                                <div className='form-group'>
                                    <label>Name : </label>
                                    <input
                                    placeholder='Name'
                                    name="name"
                                    className='form-control'
                                    value={this.state.name}
                                    onChange={this.changenamehandler} />
                                </div>
                                <p> </p>
                                <div className='form-group'>
                                    <label>Email : </label>
                                    <input
                                    placeholder='Email'
                                    name="email"
                                    className='form-control'
                                    value={this.state.email}
                                    onChange={this.changemailhandler} />
                                </div>
                                <p> </p>
                                <div className='form-group'>
                                    <label>Phone : </label>
                                    <input
                                    placeholder='phone'
                                    name="phone"
                                    className='form-control'
                                    value={this.state.phone}
                                    onChange={this.changephonehandler} />
                                </div>
                                <p> </p>
                                <div className='form-group'>
                                    <label>Password : </label>
                                    <input
                                    placeholder='password'
                                    name="password"
                                    className='form-control'
                                    value={this.state.password}
                                    onChange={this.changepasshandler} />
                                </div>
                                <p> </p>
                                <div className="text-center">
                                    <button className="btn btn-success" onClick={this.saveUser}>Create user</button>

                                </div>
                            </form>
                        </div>
                    </div>
                </div>
                </section>
            </div>
        )
    }
}


export default Register;
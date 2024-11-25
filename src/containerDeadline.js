import React from "react";
const arr = ['fruit', 'meaw', 'bark'];

class ContainerDeadline extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            arr: []
        }
        this.handleDead = this.handleDead.bind(this);
        this.handleFormDead = this.handleFormDead.bind(this);
        this.createDead = this.createDead.bind(this);
        this.deletePost = this.deletePost.bind(this);
        this.deleteAnim = this.deleteAnim.bind(this);
    }

    componentDidMount(){
        fetch('http://localhost:3001/comments').then(res => res.json()).then(json => json.forEach(this.handleDead));
    }

    handleDead(json){
        this.setState(prevState => ({
            arr: [...prevState.arr, json.date + ' ' + json.task]
        }));
    }

    handleFormDead(e){
        e.preventDefault();
        const inputDate = document.querySelector('.dead-input-date');
        const inputText = document.querySelector('.dead-input-text');
        const content = {
            date: inputDate.value,
            task: inputText.value,
        }
        this.createDead(content);
        inputDate.value = '';
        inputText.value = '';
    }

    createDead(content){
        fetch('http://localhost:3001/comments', {
            method: "POST",
            body: JSON.stringify(content),
    
    
            headers: {
                "Content-type": "application/json"
            }
    
    
        }).then(res => res.json()).then(json =>  this.handleDead(json));
    }

    deletePost(index){
        fetch(`http://localhost:3001/comments/${index}`, { 
            method: 'DELETE', 
            headers: { 
                'Content-type': 'application/json'
            } 
        })//.then(res => res.json()).then(json => this.handleDead(json)); 
    }

    deleteAnim(event){
        //
        console.log()
    }

    render(){
        return(
            <div className="container-item deadline-cont">
                DeadlineContainer
                <form onSubmit={this.handleFormDead} className="form-dead">
                    <input type="date" className="dead-input-date nut-input" ></input>
                    <input type="text" className="dead-input-text nut-input" placeholder="Впиши Дедлайн"></input>
                    <button className = 'btn'type="submit">Подтвердить</button>  
                </form>
                <div>
                    <ul >
                        {this.state.arr.map((el, index) => <li key={index} className="list" >{el} <span onClick={(event) => {this.deletePost(index); event.target.parentElement.classList.add('delete');}} className="li-span">❌</span></li>)}
                    </ul>
                </div>
                
            </div>
        )
    }
}   

export default ContainerDeadline;
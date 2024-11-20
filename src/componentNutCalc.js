import React from "react";


class ComponentNutCalc extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            totProt: 0,
            totFat: 0,
            totUgli: 0
        }
        this.handleNut = this.handleNut.bind(this);
        this.handleForm = this.handleForm.bind(this);
        this.createNut = this.createNut.bind(this);

    }


    componentDidMount(){
        fetch('http://localhost:3001/posts').then(res => res.json()).then(json => json.forEach(this.handleNut));
    }

    handleNut(json){
        this.setState({
            totProt: this.state.totProt += Number(json.Protein),
            totFat: this.state.totFat += Number(json.Fat),
            totUgli: this.state.totUgli += Number(json.Ugli)
        })
    }
    handleForm(e){
        e.preventDefault();
        const postName = document.querySelector('.nut-input-name');
        const postProt = document.querySelector('.nut-input-protein');
        const postFat = document.querySelector('.nut-input-fat');
        const postUgli = document.querySelector('.nut-input-ugli');
        const currPostName = postName.value;
        const currPostProt = postProt.value;
        const currPostFat = postFat.value;
        const currPostUgli = postUgli.value;
        const content = {
            title: currPostName,
            Protein: currPostProt,
            Fat: currPostFat,
            Ugli: currPostUgli
        };
        this.createNut(content);
        postName.value = '';
        postProt.value = '';
        postFat.value = '';
        postUgli.value = '';

    }

    createNut(content){
        fetch('http://localhost:3001/posts', {
            method: "POST",
            body: JSON.stringify(content),
    
    
            headers: {
                "Content-type": "application/json"
            }
    
    
        }).then(res => res.json()).then(json =>  this.handleNut(json));
    }

    render(){
        return(
            <div className="container-item">FuckNutCalc
                <form onSubmit = {this.handleForm} className="formNut" action="" method="post">
                    <label> Название </label>
                    <input type="text" placeholder="Название" id = "new-todo" className="nut-input-name nut-input" />
                    <label> Белки </label>
                    <input type="text" placeholder="Белки" id = "new-todo" className="nut-input-protein nut-input"/>
                    <label> Жиры </label>
                    <input type="text" placeholder="Жиры" id = "new-todo" className="nut-input-fat nut-input"/>
                    <label> Угли </label>
                    <input type="text" placeholder="Углеводы" id = "new-todo" className="nut-input-ugli nut-input"/>
                    <button type="submit">Подтвердить</button>
                </form>
                <div className="totalNut">
                    <div>Белки: {this.state.totProt}</div>
                    <div>Жиры: {this.state.totFat}</div>
                    <div>Углеводы: {this.state.totUgli}</div>
                </div>
            </div>
        )
    }
}

export default ComponentNutCalc;
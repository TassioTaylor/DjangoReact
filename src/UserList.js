import React from "react";
import ListComponent from "./ListComponent";
import LoginComponent from "./LoginComponent";


export default class  UserLists extends React.Component{
    state = { lists: [], loading: true}

    async componentDidMount(){
        const config = {
            headers: {
                'Content-Type': ' application/json',
            }
        }
        config.headers['Authorization'] = 'Token e1b8b5b5ecab8abab91a0792b47f96f181e816dc';
   
        var url = 'http://127.0.0.1:8000/list/';
        const response = await fetch(url, config);
        const data = await response.json();
        console.log(data);
        this.setState({lists: data, loading: false});
    }

    render()
    {
        const listApi = this.state.lists;
        var token = '';

        if(token === '')
           return <LoginComponent />
        else
        return (
            <div>
                {listApi.map(list => <ListComponent key ={list.id} listName={list.name} itens={list.item_set}/>  )}
            </div>
        )
    }
   
}
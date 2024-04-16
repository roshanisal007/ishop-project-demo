import  React, { Component } from 'react'; 

interface IProperties {
    Title:string;
}

interface IState {
    ProductId: number,
    Name?:string
}

export default class ProductsComponent extends React.Component<IProperties, IState> {
    state: IState = {
        ProductId : 2,
        Name:'Samsung TV'
    }
    render(){
        return(
            <div>
                <h2>{this.props.Title}</h2>
                Id : {this.state.ProductId} <br />
                Name: {this.state.Name} <br/>
                
            </div>
        )
    }
}

export function DemoComponent(){
    return(
        <div>
            <ProductsComponent Title='Product Details' />
        </div>
    )
}

import React, { Component } from 'react'

class Product extends Component {

    constructor(props) {
        super(props);
        console.log(this.props)
    }

    render() {
        return (
            <div>Product</div>
        )
    }
}

export default Product;
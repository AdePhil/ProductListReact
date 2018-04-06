import React from 'react';
import Product from '../components/Product';
import data from '../components/seed';

class ProductList extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      products: [],
    };

    this.handleProductUpVote = this.handleProductUpVote.bind(this);
    this.handleProductDownVote = this.handleProductDownVote.bind(this);
  }

  componentDidMount() {
    this.setState({ products: data });

  }
  handleProductUpVote(productId) {
    console.log(`${productId} was upvoted`);
    this.handleVotes(true, productId);
  }

  handleProductDownVote(productId) {
    console.log(`${productId} is down voted`);
    this.handleVotes(false, productId);
  }

  handleVotes(upVote, productId) {
    const nextProducts = this.state.products.map(product => {
      if (product.id === productId) {
        if (upVote) {
          return Object.assign({}, product, {
            upVotes: ++product.upVotes
          });
        }
        return Object.assign({}, product, {
          downVotes: ++product.downVotes
        });


      }
      return product;
    });
    this.setState({
      products: nextProducts
    });
  }

  render() {
    console.log(data)
    const sortedProducts = [...this.state.products].sort((a, b) => a.id - b.id);
    const products = sortedProducts.map(product => (
      <Product
        key={`product${product.id}`}
        product={product}
        onVote={
          this.handleProductUpVote
        }
        onDownVote={
          this.handleProductDownVote
        }
      />
    ));
    console.log(products);

    return (
      <ul>
        <div className="ui unstackable items" > {products}
        </div>
      </ul>
    );
  }
}

export default ProductList;
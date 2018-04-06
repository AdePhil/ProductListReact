import React from "react";
import 'semantic-ui-css/semantic.min.css'

class Product extends React.Component {
  constructor(props) {
    super(props);
    this.handleUpVote = this.handleUpVote.bind(this);
    this.handleDownVote = this.handleDownVote.bind(this);
  }

  handleUpVote(){
    this.props.onVote(this.props.product.id);
  }
  handleDownVote(){
    this.props.onDownVote(this.props.product.id);
  }

  render() {
    const product = this.props.product;
    return (
      <div className="item">
        <div className="image">
          <img src={product.productImageUrl} />
        </div>
        <div className="middle alligned content">
          <div className="header">
            <a onClick={this.handleUpVote}>
              <i className="large caret up icon" />
            </a>
            {product.upVotes}
          </div>
          <div className="header">
            <a onClick={this.handleDownVote}>
              <i className="large caret down icon" />
            </a>
            {product.downVotes}
          </div>
          <div className="description">
          <a href={product.url}>
            {product.title}
            <p>{product.description}</p>
          </a>
          </div>
            <div className="extra">
              <span>Submitted by: </span>
              <img className = "ui image avatar" src={product.submitterAvatarUrl}/>
            </div>                    
        </div>
      </div>
    );
  }
}

export default Product;

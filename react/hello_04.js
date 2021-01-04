
const rootdiv = document.getElementById('react-app');

class Square extends React.Component {
  render() {
    return (
      <button className="square" onClick={this.props.onClick} >
        {this.props.value}
      </button>
    );    
  }
}

class Main extends React.Component {

    constructor(){
      super();
      this.state = {
        n: 0
      }
    }
    onClick(){
      this.setState({n: this.state.n + 1});
    }
    render(){
      return <div>
<Square value={this.state.n} onClick={()=>this.onClick()}></Square>
      </div>;
    }
}

ReactDOM.render(<div><Main/></div>, rootdiv)

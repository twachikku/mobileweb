
const rootdiv = document.getElementById('react-app');

class TextInput extends React.Component {
  constructor(props){
    super(props);
    this.state = {};
    this.state.value = props.value;
  }
  handleChange(event) {    
    this.setState({value:event.target.value});
    if(this.props.onChangeText){
       this.props.onChangeText(event.target.value);
    }
  }
  render(){
    return <div>
      <label>{this.props.label}</label>
      <input 
    type="text" 
    value={this.state.value} 
    onChange={(e)=>this.handleChange(e)} />
      </div>
  }
}

class Main extends React.Component {
    
    constructor(){
      super();
      this.state = {
        first_name: "",
        last_name: "",
        age : 0,
      }
    }
    handleChange(event) {    
      const target = event.target;
      const name = target.name;
      const value = target.value;
      this.setState({[name]:value});
    }
    render(){
      return <div>       
<TextInput 
   label="Input First name:"
   value={this.state.first_name} 
   onChangeText={(text)=>this.setState({'first_name':text})}     
/>
<TextInput 
   label="Input Last name:"
   value={this.state.last_name} 
   onChangeText={(text)=>this.setState({'last_name':text})}     
/>

<br/>
Hello, {this.state.first_name} {this.state.last_name}
      </div>;
    }
}

ReactDOM.render(<div><Main/></div>, rootdiv)

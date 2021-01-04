
const rootdiv = document.getElementById('react-app');
// สร้างตัวแปร เพื่อเรียกใช้ ReactBootstrap
const {Card,Row,Col,Form,Alert} = ReactBootstrap;

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
  return (
<Card>
  <Card.Header>{this.props.children}</Card.Header>
  <Card.Body>
  <Row>
  <Col>
   <Form.Group>
    <Form.Label>First Name</Form.Label>
    <Form.Control 
       type="text" 
       placeholder="ชื่อของคุณ" 
       onChange={(v)=>this.setState({first_name:v.target.value}) }
       value={this.state.first_name}  
    />
   </Form.Group>
  </Col>
  <Col>
   <Form.Group>
    <Form.Label>Last Name</Form.Label>
    <Form.Control 
       type="text" 
       placeholder="นามสกุลของคุณ" 
       onChange={(v)=>this.setState({last_name:v.target.value}) }
       value={this.state.last_name}  
    />
   </Form.Group>
  </Col>
  </Row>
  <Alert variant="success" className="my-4">สวัสดี, {this.state.first_name} {this.state.last_name}</Alert>
  </Card.Body>
</Card>
);

    }
}

ReactDOM.render(<div><Main>ReactBootstrap Demo Form</Main></div>, rootdiv)

import React, {Component} from 'react';
import {View, Text, Button} from 'react-native';
import {Container, Content, Form, Item, Input, Label, Header} from 'native-base';
import {Col, Grid} from 'react-native-easy-grid';

const styles = {
  viewStyle: {
    justifyContent: 'center',
    alignItems: 'center',
    height: 60,
    elevation: 2,
    position: 'relative'
  },
  textStyle: {
    color: 'white',
    fontSize: 20
  },
  containerStyle: {
    backgroundColor: 'lightblue'
  },
}

class App extends Component {

  constructor() {
    super();
    this.state = {
      weight: 0,
      height: 0,
      value: 0,
      diagnosa: ''
    };
  }

  render() {
    const {textStyle, containerStyle, viewStyle} = styles;

    var hitung = () => {
      const { weight, height } = this.state;
      var count = weight / (height * height / 10000);
    
      this.setState({value: count});
    }

      if(this.state.value < 18.5)
        this.state.diagnosa = 'BB Anda kurang!'
      else if(this.state.value >= 18.5 && this.state.value <= 24.9)
        this.state.diagnosa = 'BB Anda ideal!'
      else if(this.state.value >= 25 && this.state.value <= 29.9 )
        this.state.diagnosa = 'BB Anda berlebih!'
      else if(this.state.value >= 30 && this.state.value <= 39.9 )
      this.state.diagnosa = 'BB Anda sangat berlebih!'
      else
        this.state.diagnosa = 'Anda Obesitas!!!';    

    return (
      <Container style={containerStyle}>
        <Header>
          <View style={viewStyle}>
            <Text style={textStyle}>Indeks Massa Tubuh</Text>
          </View>
        </Header>
        <Content>
          <Form>
            <Grid>
              <Col>
                <Item floatingLabel>
                  <Label><Text>Massa (kg)</Text> </Label>
                  <Input onChangeText={(weight) => this.setState({weight})} />
                </Item>
              </Col>
              <Col>
                <Item floatingLabel>
                  <Label><Text>Tinggi (cm)</Text> </Label>
                  <Input onChangeText={(height) => this.setState({height})} />
                </Item>
              </Col>                          
            </Grid>
            <Text/><Text/><Text/>
            <Button title={" HITUNG IMT "} full onPress={hitung} />
          </Form>  
          <Text>Massa Tubuh: {this.state.weight}</Text>
          <Text>Tinggi Badan: {this.state.height} </Text>
          <Text>Indeks Massa Tubuh: {this.state.value}</Text>
          <Text>Diagnosa: {this.state.diagnosa}</Text>
        </Content>
      </Container>
    );
  }
}
export default App;
import React from 'react';
import {
  HashRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Badge from 'react-bootstrap/Badge';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Modal from 'react-bootstrap/Modal';
import Row from 'react-bootstrap/Row';
import Table from 'react-bootstrap/Table'
import { LinkContainer } from 'react-router-bootstrap';


import './App.css';

class App extends React.Component {
  render() {
    return (
        <Router>
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/conv">
              <h1>VS Conventional Computer</h1>
            </Route>
            <Route path="/human">
              <VersusHuman />
            </Route>
          </Switch>
        </Router>
    );
  }
}

class Home extends React.Component {
  render() {
    return (
      <div className="home">
        <h1 className="main-title">Quantum Battleship</h1>
        <h3 className="subtitle">Created By Brandon Weiss, Noah Citron, and Will Hamilton</h3>
        <a href="https://docs.google.com/presentation/d/1kBY0hPm7cMD_FGp83zJihotVJa9mJyRgzLk1xTHRlHQ/edit?usp=sharing">About</a>
        <Container className="menu">
          <Player image="qiskit.png" name="Quantum Computer" />
          <h3 id="vs">VS</h3>
          <Row className="mode-select">
            <Col></Col>
            <Col>
              <div className="row2">
                <Player image="human.png" name="Human" />
                <LinkContainer to="/human">
                  <Button className="play-btn" variant="success">Play!</Button>
                </LinkContainer>
              </div>
            </Col>
            <Col>
              <div className="row2">
                <Player image="computer.png" name="Conventional Computer" />
                <LinkContainer to="/conv">
                  <Button className="play-btn" variant="success">Play!</Button>
                </LinkContainer>
              </div>
            </Col>  
            <Col></Col>    
          </Row>
        </Container>
      </div>
    )
  }
}

class Player extends React.Component {
  render() {
    return (
      <Container className="player">
        <img src={this.props.image} className="player-graphic" />
        <h5 className="player-name">{this.props.name}</h5>
      </Container>
    )
  }
}

//
// ----BOARD----
// 

/*
    Key:
      0 = Empty
      1 = Hit
      2 = Miss
      3 = Ship
*/

const alphabet = ["a","b","c","d","e","f","g","h","i","j"]

class Board extends React.Component {

  render() {
    return (
      <div>
        <Table bordered hover variant={this.props.quantum ? "" : "dark"} id={this.props.quantum ? "quantum-territory" : "player-territory"} className="board-territory" style={{textAlign: "center", width: "600px"}}>
          <thead>
            <tr>
              <th>X</th>
              <th>0</th>
              <th>1</th>
              <th>2</th>
              <th>3</th>
              <th>4</th>
              <th>5</th>
              <th>6</th>
              <th>7</th>
              <th>8</th>
              <th>9</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>A</td>
              <td id="a0" className="square"></td>
              <td id="a1" className="square"></td>
              <td id="a2" className="square"></td>
              <td id="a3" className="square"></td>
              <td id="a4" className="square"></td>
              <td id="a5" className="square"></td>
              <td id="a6" className="square"></td>
              <td id="a7" className="square"></td>
              <td id="a8" className="square"></td>
              <td id="a9" className="square"></td>
            </tr>
            <tr>
              <td>B</td>
              <td id="b0"></td>
              <td id="b1"></td>
              <td id="b2"></td>
              <td id="b3"></td>
              <td id="b4"></td>
              <td id="b5"></td>
              <td id="b6"></td>
              <td id="b7"></td>
              <td id="b8"></td>
              <td id="b9"></td>
            </tr>
            <tr>
              <td>C</td>
              <td id="c0"></td>
              <td id="c1"></td>
              <td id="c2"></td>
              <td id="c3"></td>
              <td id="c4"></td>
              <td id="c5"></td>
              <td id="c6"></td>
              <td id="c7"></td>
              <td id="c8"></td>
              <td id="c9"></td>
            </tr>
            <tr>
              <td>D</td>
              <td id="d0"></td>
              <td id="d1"></td>
              <td id="d2"></td>
              <td id="d3"></td>
              <td id="d4"></td>
              <td id="d5"></td>
              <td id="d6"></td>
              <td id="d7"></td>
              <td id="d8"></td>
              <td id="d9"></td>
            </tr>
            <tr>
              <td>E</td>
              <td id="e0"></td>
              <td id="e1"></td>
              <td id="e2"></td>
              <td id="e3"></td>
              <td id="e4"></td>
              <td id="e5"></td>
              <td id="e6"></td>
              <td id="e7"></td>
              <td id="e8"></td>
              <td id="e9"></td>
            </tr>
            <tr>
              <td>F</td>
              <td id="f0"></td>
              <td id="f1"></td>
              <td id="f2"></td>
              <td id="f3"></td>
              <td id="f4"></td>
              <td id="f5"></td>
              <td id="f6"></td>
              <td id="f7"></td>
              <td id="f8"></td>
              <td id="f9"></td>
            </tr>
            <tr>
              <td>G</td>
              <td id="g0"></td>
              <td id="g1"></td>
              <td id="g2"></td>
              <td id="g3"></td>
              <td id="g4"></td>
              <td id="g5"></td>
              <td id="g6"></td>
              <td id="g7"></td>
              <td id="g8"></td>
              <td id="g9"></td>
            </tr>
            <tr>
              <td>H</td>
              <td id="h0"></td>
              <td id="h1"></td>
              <td id="h2"></td>
              <td id="h3"></td>
              <td id="h4"></td>
              <td id="h5"></td>
              <td id="h6"></td>
              <td id="h7"></td>
              <td id="h8"></td>
              <td id="h9"></td>
            </tr>
            <tr>
              <td>I</td>
              <td id="i0"></td>
              <td id="i1"></td>
              <td id="i2"></td>
              <td id="i3"></td>
              <td id="i4"></td>
              <td id="i5"></td>
              <td id="i6"></td>
              <td id="i7"></td>
              <td id="i8"></td>
              <td id="i9"></td>
            </tr>
            <tr>
              <td>J</td>
              <td id="j0"></td>
              <td id="j1"></td>
              <td id="j2"></td>
              <td id="j3"></td>
              <td id="j4"></td>
              <td id="j5"></td>
              <td id="j6"></td>
              <td id="j7"></td>
              <td id="j8"></td>
              <td id="j9"></td>
            </tr>
          </tbody>
        </Table>
      </div>
    )
  }
}

class PlayerDashboard extends React.Component {
  render() {
    let ships = ["Carrier - 5 Spaces","Battleship - 4 Spaces","Cruiser 1 - 3 Spaces","Cruiser 2 - 3 Spaces","Destroyer - 2 Spaces"]
    let shipGraphics = ["carrier.jpg","battleship.jpg","cruiser.jpg","cruiser.jpg","destroyer.jpg"]
    if (this.props.phase < 5) {
      return (
          <Row>
            <Col xs={"8"}>
              <img className="ship-graphic" src={shipGraphics[this.props.phase]}/>
              <h3 className="ship-name">{ships[this.props.phase]}</h3>
            </Col>
            <Col style={{textAlign: "left"}}>
              <p className="deploy-counter">{this.props.phase}/5</p>
              <h5>Ships Deployed</h5>
            </Col>
          </Row>
      )
    } else {
      return (
        <Row style={{textAlign: "center", marginTop: "40px", marginRight: "70px"}}>
          <Col style={{marginRight: "45px"}}>
            <h1 className="deploy-counter">100%</h1>
            <h3>Fleet Health</h3>
          </Col>
          <Col>
            <h1 className="deploy-counter">100%</h1>
            <h3>Accuracy</h3>
          </Col>
          <Col>
            <h4 style={{marginTop:"40px", textAlign: "right", color: "green"}}>{this.props.phase % 2 == 0 ? "" : "Player Turn"}</h4>
          </Col>
        </Row>
      )
    }
  }
}

class QuantumDashboard extends React.Component {
  render() {
    if (this.props.phase < 5) {
      return(
        <h3 className="waiting">Waiting for Player To Finish Deployment...</h3>
      )
    } else {
      return (
        <Row style={{textAlign: "center", marginTop: "40px", marginRight: "70px"}}>
          <Col>
            <h4 style={{marginTop:"40px", textAlign: "left", color: "red"}}>{this.props.phase % 2 == 0 ? "Computer Turn" : ""}</h4>
          </Col>
          <Col style={{marginRight: "45px"}}>
            <h1 className="deploy-counter">100%</h1>
            <h3>Fleet Health</h3>
          </Col>
          <Col>
            <h1 className="deploy-counter">100%</h1>
            <h3>Accuracy</h3>
          </Col>
        </Row>
      )
    }
  }
}

class Game extends React.Component {
  state = {
    quantumGrid: [
      0,0,0,0,0,0,0,0,0,0,
      0,0,0,0,0,0,0,0,0,0,
      0,0,0,0,0,0,0,0,0,0,
      0,0,0,0,0,0,0,0,0,0,
      0,0,0,0,0,0,0,0,0,0,
      0,0,0,0,0,0,0,0,0,0,
      0,0,0,0,0,0,0,0,0,0,
      0,0,0,0,0,0,0,0,0,0,
      0,0,0,0,0,0,0,0,0,0,
      0,0,0,0,0,0,0,0,0,0
    ],
    quantumStats: {
      attempts: 0,
      hits: 0,
      health: 17,
    },
    linearGrid: [
    0,0,0,0,0,0,0,0,0,0,
    0,0,0,0,0,0,0,0,0,0,
    0,0,0,0,0,0,0,0,0,0,
    0,0,0,0,0,0,0,0,0,0,
    0,0,0,0,0,0,0,0,0,0,
    0,0,0,0,0,0,0,0,0,0,
    0,0,0,0,0,0,0,0,0,0,
    0,0,0,0,0,0,0,0,0,0,
    0,0,0,0,0,0,0,0,0,0,
    0,0,0,0,0,0,0,0,0,0
    ],
    playerStats: {
      attempts: 0,
      hits: 0,
      health: 17,
    },
    pregame: true,
    placeIndex: -1,
    shipLength: 5,
    phase: 0, // Odd = Player Turn
    alert: {
      show: false,
      title: "How To Deploy Ships",
      body: "To deploy a ship, select a square in your territory (dark grey), then hit an arrow key to indicate the desired orientation of the ship.",
      err: false
    }
  }

  handleSquareClick = e => {
    const id = e.target.id
    let index = alphabet.indexOf(id.substring(0,1)) * 10 + parseInt(id.substring(1))
    console.log(index);
    if (this.state.pregame) {
      if (this.state.linearGrid[index] == 0 && this.state.placeIndex < 0) {
        let data = this.state.linearGrid
        data[index] = 3
        this.setState({linearGrid: data, placeIndex: index})
        console.log(this.state.linearGrid[index])

        document.addEventListener("keydown", this.placeShip);
      }
    } 
    //Ask Server
    //Mark Response
    console.log("Guessed");
  }

  placeShip = e => {
    let origin = this.state.placeIndex

    //LEFT
    if (e.keyCode == 37) {
      let rowSpace = origin % 10;
      for (let i = 0; i < this.state.shipLength - 1; i++) {
        origin -= 1
        if (this.state.linearGrid[origin] != 0 || i >= rowSpace) {
          console.log("Placement Invalid")
          return false
        }
      }
      for (let q = 0; q < this.state.shipLength - 1; q++) {
        let data = this.state.linearGrid
        data[origin] = 3;
        this.setState({linearGrid: data})
        origin += 1;
      }
      this.setState({placeIndex: -1})
      document.removeEventListener("keydown", this.placeShip);
      this.nextPhase();
      return true
    }
    
    //UP
    if (e.keyCode == 38) {
      for (let i = 0; i < this.state.shipLength - 1; i++) {
        origin -= 10
        if (this.state.linearGrid[origin] != 0 || origin < 0) {
          console.log("Placement Invalid")
          return false
        }
      }
      for (let q = 0; q < this.state.shipLength - 1; q++) {
        let data = this.state.linearGrid
        data[origin] = 3;
        this.setState({linearGrid: data})
        origin += 10;
      }
      this.setState({placeIndex: -1})
      document.removeEventListener("keydown", this.placeShip);
      this.nextPhase();
      return true
    }

    //Right
    if (e.keyCode == 39) {
      let rowSpace = 9 - origin % 10;
      for (let i = 0; i < this.state.shipLength - 1; i++) {
        origin += 1
        if (this.state.linearGrid[origin] != 0 || i >= rowSpace) {
          console.log("Placement Invalid")
          return false
        }
      }
      for (let q = 0; q < this.state.shipLength - 1; q++) {
        let data = this.state.linearGrid
        data[origin] = 3;
        this.setState({linearGrid: data})
        origin -= 1;
      }
      this.setState({placeIndex: -1})
      document.removeEventListener("keydown", this.placeShip);
      this.nextPhase();
      return true
    }

    //DOWN
    if (e.keyCode == 40) {
      for (let i = 0; i < this.state.shipLength - 1; i++) {
        origin += 10
        if (this.state.linearGrid[origin] != 0 || origin > 99) {
          console.log("Placement Invalid")
          return false
        }
      }
      for (let q = 0; q < this.state.shipLength - 1; q++) {
        let data = this.state.linearGrid
        data[origin] = 3;
        this.setState({linearGrid: data})
        origin -= 10;
      }
      this.setState({placeIndex: -1});
      document.removeEventListener("keydown", this.placeShip);
      this.nextPhase();
      return true;
    }
  }

  cancelPlacement = () => {
    document.removeEventListener("keydown", this.placeShip);
    let cleanedBoard = this.state.linearGrid;
    cleanedBoard[this.state.placeIndex] = 0;
    this.setState({placeIndex: -1, linearGrid: cleanedBoard});
    console.log(this.state.linearGrid)
  }

  openTutorial = () => {
    this.setState({ alert: {
      show: true,
      title: "How To Deploy Ships",
      body: "To deploy a ship, select a square in your territory (dark grey), then hit an arrow key to indicate the desired orientation of the ship.",
      err: false
    }})
  }

  closeAlert = () => {
    this.setState({ alert: {
      show: false,
      title: "How To Deploy Ships",
      body: "To deploy a ship, select a square in your territory (dark grey), then hit an arrow key to indicate the desired orientation of the ship.",
      err: false
    }})
  }

  nextPhase() {
    let p = this.state.phase;
    p += 1
    if (p >= 5) {
      this.setState({pregame: false, phase: p,});
    } else {
      let shipSize = 4
      if (p === 2 || p === 3) {
        shipSize = 3;
      } else if (p === 4) {
        shipSize = 2;
      }
      this.setState({phase: p, shipLength: shipSize});
      //console.log(this.state.phase);
    }
    
  }

  componentDidMount() {
    for (let y = 0; y < 10; y++) {
      let letter = alphabet[y];
      for (let x = 0; x < 10; x++) {
        let id = letter + x;
        let sq = document.getElementById(id);
        if (sq != null) {
          sq.addEventListener('click', this.handleSquareClick);
          let sqValue = this.state.linearGrid[y * 10 + x];
          if (sqValue > 0) {
            if (sqValue == 1) {
              sq.className = "square hit";
            } else if (sqValue == 2) {
              sq.className = "square miss";
            } else if (sqValue == 3) {
              sq.className = "square ship";
            } else {
              sq.className = "square";
            }
          }
        }
      }
    }
  }

  componentDidUpdate() {
    for (let y = 0; y < 10; y++) {
      let letter = alphabet[y];
      for (let x = 0; x < 10; x++) {
        let id = letter + x
        let sq = document.getElementById(id)
        if (sq != null) {
          sq.addEventListener('click', this.handleClick)
          let sqValue = this.state.linearGrid[y * 10 + x];
          if (sqValue == 1) {
            sq.className = "square hit"
          } else if (sqValue == 2) {
            sq.className = "square miss"
          } else if (sqValue == 3) {
            sq.className = "square ship"
          } else {
            sq.className = "square"
          }
        }
      }
    }
  }

  render() {
    return (
      <React.Fragment>
        <Row style={{marginLeft: "40px"}}>
          <Col>
            <h1 className="faction-name">
              Human Fleet
              <span className="phase-label">     - {this.state.pregame ? "Deployment" : "Combat"} Phase</span>
            </h1>
            <Board data={this.state.linearGrid} quantum={false}/>
            <PlayerDashboard phase={this.state.phase} />
            <div style={this.state.pregame ? {marginLeft: "45px"} : {display: "none"}}>
              <Button variant="info" onClick={this.openTutorial}>How Do I Deploy Ships?</Button>
              <Button variant={"danger"} disabled={this.state.placeIndex < 0} onClick={this.cancelPlacement} style={{marginLeft: "10px"}}>Cancel Placement</Button>
            </div>
          </Col>
          <Col>
            <h1 className="faction-name">Quantum Armada</h1>
            <Board data={this.state.QuantumGrid} quantum={true}/>
            <QuantumDashboard phase={this.state.phase} />
          </Col>
        </Row>

        <Modal show={this.state.alert.show} onHide={this.closeAlert}>
          <Modal.Header closeButton>
            <Modal.Title>{this.state.alert.title}</Modal.Title>
          </Modal.Header>
          <Modal.Body>{this.state.alert.body}</Modal.Body>
          <Modal.Footer>
            <Button variant="primary" onClick={this.closeAlert}>
              Ok!
            </Button>
          </Modal.Footer>
        </Modal>

      </React.Fragment>
      
    )
  }
}

class VersusHuman extends React.Component {
  render() {
    return(
      <div>
        <Game  />
      </div>
    )
  }
}

export default App;

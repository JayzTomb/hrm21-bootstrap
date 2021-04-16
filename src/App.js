import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import MenuComponent from './component/MenuComponent';
import { BrowserRouter, Switch, Route } from "react-router-dom"
import LoginComponent from './component/LoginComponent';
import LeftPaneComponent from './component/LeftPaneComponent'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import MenuCardsComponent from './component/MenuCardsComponent'
import ListEmployeeFunction from './component/ListEmployeeFunction'
import CreateEmployee from './component/CreateEmployee'
import { isUserLoggedIn } from './service/AuthenticationService'

function App() {

  return (
    <>
      <BrowserRouter>
        <>
          <MenuComponent />
          <Container>
            <Row>
              <Col  sm={2.9}>
                <LeftPaneComponent />
              </Col>
              <Col sm={8}>
                <Switch>

                  <Route path="/" exact component={LoginComponent} />
                  < Route path="/login" exact component={LoginComponent} />

                  {isUserLoggedIn &&
                    <Route path="/logout" exact component={LoginComponent} />
                  }
                  {isUserLoggedIn &&
                    <Route path="/loggedUser" exact component={MenuCardsComponent} />
                  }
                  {isUserLoggedIn &&
                    <Route path="/employees" exact component={ListEmployeeFunction} />
                  }
                  {isUserLoggedIn &&
                    <Route path="/createEmployee" exact component={CreateEmployee} />
                  }

                </Switch>
              </Col>
            </Row>
          </Container>
        </>
      </BrowserRouter>
    </>
  )
}

export default App;
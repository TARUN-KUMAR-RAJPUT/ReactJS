import DefaultFatArrow from "./1.components/1.function/DeafultFatArrow";
import Scott from "./1.components/1.function/Greet";
import { GreetNamed as Named } from "./1.components/1.function/GreetNamed";
import { NamedFatArrow } from "./1.components/1.function/NamedFatArrow";
import {GreetOne, GreetTwo} from "./1.components/1.function/MultiGreet"
import Welcome from "./1.components/2.class/Welcome";
import { WelcomeNamed } from "./1.components/2.class/WelcomeNamed";
import Hello from "./2.jsx/Hello";
import Greeting from "./3.props/Greeting";
import GreetingOne from "./3.props/GreetingOne";
import Counter from "./4.state/Counter";
import Message from "./4.state/Message";
import Person from "./4.state/Person";
import FunctionClick from "./5.event-handling/FunctionClick";
import ClassClick from "./5.event-handling/ClassClick";
import EventBind from "./5.event-handling/EventBind";
import Parent from "./5.event-handling/parent-child/Parent";
import UserGreetingOne from "./6.conditional-rendering/UserGreetingOne";
import UserGreetingTwo from "./6.conditional-rendering/UserGreetingTwo";
import UserGreetingThree from "./6.conditional-rendering/UserGreetingThree";
import UserGreetingFour from "./6.conditional-rendering/UserGreetingFour";
import NameListOne from "./7.list-rendering/NameListOne";
import NameListTwo from "./7.list-rendering/NameListTwo";
import NameListThree from "./7.list-rendering/NameListThree";
import NameListFour from "./7.list-rendering/NameListFour";
import NameListFive from "./7.list-rendering/NameListFive";
import NameListSix from "./7.list-rendering/NameListSix";
import Stylesheet from "./8.styling/Stylesheet";
import Inline from "./8.styling/Inline";
import AppStyles from "./8.styling/AppStyles";
import UserForm from "./9.form-data/UserForm";
import UserFormOne from "./9.form-data/UserFormOne";
import LifecycleA from "./10.life-cycle-methods/LifecycleA";
import PostAPI from "./11.api-calls/PostAPI";
import CommentsAPI from "./11.api-calls/CommentsAPI";
import UserAPI from "./11.api-calls/UserAPI";
import StudentSQLAPI from "./11.api-calls/StudentSQLAPI";
import StudentMongoAPI from "./11.api-calls/StudentMongoAPI";
import Routing from "./12.routing/Routing";
import ClassCounter from "./13.hooks/ClassCounter";
import HookCounter from "./13.hooks/HookCounter";
import HookWithObject from "./13.hooks/HookWithObject";
import UseEffectHook from "./13.hooks/UseEffectHook";


function App() {
  
  return (
    <div>
      <UseEffectHook />
      {/* <HookWithObject /> */}
      {/* <HookCounter /> */}
      {/* <ClassCounter /> */}
      {/* <Routing /> */}
      {/* <StudentMongoAPI /> */}
      {/* <StudentSQLAPI /> */}
      {/* <UserAPI /> */}
      {/* <CommentsAPI /> */}
      {/* <PostAPI /> */}
      {/* <LifecycleA /> */}
      {/* <UserFormOne /> */}
      {/* <UserForm /> */}
      {/* <AppStyles /> */}
      {/* <Inline /> */}
      {/* <Stylesheet primary={false}/> */}
      {/* <NameListSix /> */}
      {/* <NameListFive /> */}
      {/* <NameListFour /> */}
      {/* <NameListThree /> */}
      {/* <NameListTwo /> */}
      {/* <NameListOne /> */}
      {/* <UserGreetingFour /> */}
      {/* <UserGreetingThree /> */}
      {/* <UserGreetingTwo /> */}
      {/* <UserGreetingOne /> */}
      {/* <Parent /> */}
      {/* <EventBind /> */}
      {/* <FunctionClick />
      <ClassClick /> */}
      {/* <Person /> */}
      {/* <Message /> */}
      {/* <Counter /> */}
      {/* <Greeting id={1} 
                name="Scott" 
                isAdmin={true} 
                department={null}
                details={undefined}
                address={{city: "Boston"}}
                displayOne={function(){ return "Welcome to ReactJS"}}
                displayTwo={() =>"Welcome to ReactJS World"}
                subjects={["Agile", "ReactJS", "NodeJS"]}
      >
        <p style={{display: "inline"}}>This is the child component</p>
      </Greeting>
                <br /><br />
      <GreetingOne id={1} 
                name="Scott" 
                isAdmin={true} 
                department={null}
                details={undefined}
                address={{city: "Boston"}}
                displayOne={function(){ return "Welcome to ReactJS"}}
                displayTwo={() =>"Welcome to ReactJS World"}
                subjects={["Agile", "ReactJS", "NodeJS"]}
                /> */}
      {/* <Greeting name="Adam"  />
      <Greeting name="Tuan"  /> */}
      {/* <Hello /> */}
      {/* <Scott />
      <Named />
      <DefaultFatArrow />
      <NamedFatArrow />
      <GreetOne />
      <GreetTwo />
      <Welcome />
      <WelcomeNamed /> */}
    </div>
  );
}

export default App;

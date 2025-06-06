import Home from './import_export_component/home'
import Timer from './Hooks/UseEffect_hooks'
import Favorite_color from './Hooks/UseState_hooks'
import First from './class_component/first'
import Array_loop from './Loop_in_React_with_array/array_loop'
import Nested_loop_array from './Loop_in_React_with_array/nested_loop_array'
import Simple_props from './Props/simple_props'
import Click_event from './Event_handling/Click_button'
import UserList from './Lise_Key/User_list'
import ChildComponent, { User } from './Hooks/UseContext'
import UseRef from './Hooks/UseRef'
import UseCallback from './Hooks/UseCallback'
import Simple_example from './Fragment/simple_example'
import Main_custom from './Custom_Hook/main_custom'
function Main1() {
    return (
        <>
        <div>
            <h1>Hooks</h1>
            <h3>Hooks in useState</h3>
            <Favorite_color />
            <h3>Hooks in useEffect</h3>
            <Timer />
            <h3>Hooks in useContext</h3>
            <User />
            <h3>Hooks in useRef</h3>
            <UseRef/>
            <h3>Hooks in useCallback</h3>
            <UseCallback/>
            <h1>Import export componet and Function Component</h1>
            <Home />
            <h1>Class Component</h1>
            <First />
            <h1>Loops in React using Array</h1>
            <Array_loop />
            <h3>Nested loop using array</h3>
            <Nested_loop_array />
            <h1>Props in React</h1>
            <Simple_props name="Appaso" />
            <Simple_props name="Ajay" />
            <Simple_props name="prithm" />
            <h1>Event Handling</h1>
            <Click_event />
            <h1>List and key</h1>
            <UserList />
            <h1>Fragment</h1>
            <Simple_example/>
            <h1>Custom Hook </h1>
            <Main_custom />
        </div>
        </>
    )
}

export default Main1;
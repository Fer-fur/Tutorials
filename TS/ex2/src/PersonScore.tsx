import { useCallback, useEffect, useMemo, useReducer, useRef } from "react";
import { getPerson } from "./getPerson";
import { Reset } from "./Reset";

type State = {
    name: String | undefined;
    score: number;
    loading: boolean;
}

type Action = 
    | {
        type: 'initialize';
        name: String;
    }
    | {
        type: 'increment';
    }
    | {
        type: 'decrement';
    }
    | {
        type: 'reset';
    }

function sillyExpensiveFoo() {
    console.log("Executing silly foo");
    let sum = 0;
    for ( let i = 0; i < 10000; i++) {
        sum += i;
    }
    return sum;
}

function reducer(state: State, action: Action):State {
    switch (action.type) {
        case 'initialize':
            return {
                name: action.name, score: 0, loading: false
            }
        case 'increment' : 
            return { ...state, score: state.score + 1};
        case 'decrement':
            return {...state, score: state.score - 1};
        case 'reset':
            return {...state, score: 0};
        default:
            return state;
    }
}

export function PersonScore() {

    // const [name, setName] = useState<String | undefined>();
    // const [score, setScore] = useState(0);
    // const [loading, setLoading] = useState(true);

    const [{name, score, loading}, dispatch] = useReducer(
        reducer,
        {
            name: undefined,
            score: 0,
            loading: true,
        }
    );

    const addButtonRef = useRef<HTMLButtonElement>(null);

    useEffect( () => {
        getPerson()
            .then(({ name }) => {
                dispatch( {type: 'initialize', name})
        });
    }, []);

    useEffect(() => {
        if(!loading) {
            addButtonRef.current?.focus();
        }
    },[loading]);

    const expensiveCalculation = useMemo(
        () => sillyExpensiveFoo(),
        []
    );

    const handleReset = useCallback(
        () => dispatch({ type: 'reset'}),
        []
    );


    if(loading) {
        return <div>Loading ...</div>
    }

    return (
        <div>
            <h3>
                {name}, {score}
            </h3>
            <p>{expensiveCalculation}</p>
            <button 
                onClick={() => dispatch({type: 'increment'})}
                ref = {addButtonRef}
            >
                Add
            </button>
            <button onClick={() => dispatch({type: 'decrement'})}>Subtract</button>
            {/* <button onClick={() => dispatch({type: 'reset'})}>Reset</button> */}
            <Reset onClick={handleReset} />
        </div>
    )
}
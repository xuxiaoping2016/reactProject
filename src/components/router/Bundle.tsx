/*
 * @Author: xiaoping.xu
 * @Date: 2021-05-10 15:12:18
 * @LastEditors: xiaoping.xu
 * @LastEditTime: 2021-05-10 17:00:36
 * @Desc: 
 */
import { Component , ReactElement} from 'react'
// react-dom.development.js:67 Warning: Do not call Hooks inside useEffect(...), useMemo(...), or other built-in Hooks. 
// You can only call Hooks at the top level of your React function. For more information, see https://reactjs.org/link/rules-of-hooks
// const Bundle = (props) => {
//     const [mod, setMod] = useState(null)

//     useEffect(() => {
//         load()
//     },[props.load])

//     const load = () => {
//         setMod(null)
        
//         props.load(mod => {
//             setMod(mod.default ? mod.default : mod)
//         })
//     }
//     return (
//         props.children(mod)
//     )
// }

interface IProps {
    load(fn):void;
    children(mod: ReactElement): ReactElement;
  } 
class Bundle extends Component<IProps> {
    state = {
        // short for "module" but that's a keyword in js, so "mod"
        mod: null
    };

    componentWillMount() {
        this.load(this.props)
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.load !== this.props.load) {
            this.load(nextProps)
        }
    }

    load(props) {
        this.setState({
            mod: null
        });
        console.log(props)
        props.load((mod) => {
            this.setState({
                // handle both es imports and cjs
                mod: mod.default ? mod.default : mod
            })
        })
    }

    render() {
        return this.props.children(this.state.mod)
    }
}

export default Bundle;
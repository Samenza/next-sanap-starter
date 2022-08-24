EslintConfigs: "src/.eslintrc.json=>rules"

//@https://typescript-eslint.io/rules/
;("@typescript-eslint/array-type")
;("incorrect")
var x: Array<string> = ["a", "b"]

;("correct")
var x: string[] = ["a", "b"]
var y: readonly string[] = ["a", "b"]
;("-----------------------------------------------------------------------")
;`@typescript-eslint/consistent-generic-constructors`
;("incorrect")

var map: Map<string, number> = new Map()
var set: Set<string> = new Set()

;("correct")
var map = new Map<string, number>()
var set = new Set<string>()
var set: Set<string> = new Set<string>()
;("--------------------------------------------------------------------------")
;("--------------------------------------------------------------------------")

//@https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/destructuring-assignment.md
;("react/destructuring-assignment")
;("incorrect")
var myComponent1 = (props) => {
  return <div id={props.id} />
}

;("correct")
var myComponent2 = ({ id }) => {
  return <div id={id} />
}
;("--------------------------------------------------------------------------")
;("react/hook-use-state")
;("incorrect")

function color() {
  // useState call is not destructured into value + setter pair
  const useStateResult = React.useState()
  return useStateResult
}

;("correct")

function color2() {
  // useState call is destructured into value + setter pair whose identifiers
  // follow the [thing, setThing] naming convention
  const [color, setColor] = React.useState()
  return [color, setColor]
}

;("--------------------------------------------------------------------------")
;("react/no-array-index-key")
;("incorrect")
let arr = [{ id: "" }]

arr.map((thing, index) => <div key={index} />)
;("correct")
arr.map((thing) => <div key={thing.id} />)
;("--------------------------------------------------------------------------")
;("react/jsx-boolean-value")
;("incorrect")
const Hello2 = ({ personal }) => {
  return <div></div>
}
var Hello = <Hello2 personal={true} />
;("correct")
const Hello1 = ({ personal }) => {
  return <div></div>
}
var Hello = <Hello1 personal />

;("--------------------------------------------------------------------------")
;("jsx-no-leaked-render")
;("incorrect")

let Component = ({ count, title }) => {
  return <div>{count && title}</div>
}

;("correct")

const Component1 = ({ elements, count }) => {
  return <div>{!count && "No results found"}</div>
}

;("--------------------------------------------------------------------------")
;("jsx-no-leaked-render")
;("incorrect")

var HelloJohn = <Hello1 personal='John'></Hello1>

;("correct")
var HelloJohn = <Hello1 personal='John' />

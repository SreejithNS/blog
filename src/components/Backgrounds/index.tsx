import variables from "./animation.module.sass";

export default function FireFlies() {
    return (<>
        {[...Array(parseInt(variables.count))].map((_e, k) => <div key={k} className={variables.firefly}></div>)}
    </>)
}
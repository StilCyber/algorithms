
const debounce = (fn, ms) => {
    let timeout
    return function() {
        const fnCall = () => {
            fn.apply(this, arguments)
        }
        clearTimeout(timeout)
        timeout = setTimeout(fnCall, ms)
    }
}

function onChange(e) {
    console.log(e.target.value);
}

onChange = debounce(onChange, 1000)

document.getElementById('input').addEventListener('keyup', onChange)

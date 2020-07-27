const zbior = {
    'google': 'http://google.pl',
    'facebook': 'http://facebook.pl',
    'youtube': 'http://youtube.pl',
    'aandit': 'http://aandit.pl',
    'instagram': 'http://instagram.com'
}

const updater = () => {

    let arrays = []
    
    Object.keys(zbior).forEach(e => { return arrays.push([e, zbior[e]]) })

    document.getElementById('results').innerHTML = arrays
                                                    .filter(e => e[0]
                                                    .includes(document.getElementById('vl').value))
                                                    .map(e => `<a href='${e[1]}' target='_blank'> ${e[0]} </a> <br>`)

    setTimeout(updater, 200)

}; updater()
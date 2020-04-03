<!--
    Write a JavaScript program to remove a character at the specified position of a given string and return the new string.
-->

<!DOCTYPE html>
<html lang="pl">
<head>

    <meta charset="UTF-8">
    <title> Usuń znak </title>

</head>    
<body>

    <!-- INPUT -->
    Podaj tekst: <input type="text" id="input1"> <br>
    Podaj który znak: <input type="number" id="input2"> <br>

    <button onclick="run()"> Wykonaj </button>

    <!-- OUTPUT -->
    <div id="wynik">
        ________________
    </div>


    <!-- SKRYPT -->
    <script type="text/javascript">

        function wynik(x){

            return document.getElementById('wynik').innerHTML = x

        }

        async function run(){

            const str = document.getElementById('input1').value
            const pos = document.getElementById('input2').value

            const char_pos = parseInt(pos)-1
            if(isNaN(char_pos)) return wynik('Podane miejsce znaku nie jest liczbą')

            if(char_pos < 0) char_pos += 1

            zdanie1 = str.substring(0, char_pos)
            zdanie2 = str.substring(char_pos + 1, str.length)

            const gotowe = (zdanie1 + zdanie2)

            return wynik(gotowe)

        }

    </script>

</body>
</html>

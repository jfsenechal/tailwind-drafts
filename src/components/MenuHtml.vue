<template>
    <header>
        <ul>
            <li><a href="">Home</a></li>
            <li><a href="">Home</a></li>
            <li><a href="">Home</a>
                <div class="cont">
                    <ul>
                        <li>
                            <a href="">Home</a>
                        </li>
                        <li>
                            <a href="">Home</a>
                        </li>
                        <li>
                            <a href="">Home</a>
                        </li>
                    </ul>
                </div>
            </li>
            <li><a href="">Home</a>
                <div class="cont1">
                    <ul>
                        <li>
                            <a href="">Home</a>
                        </li>
                        <li>
                            <a href="">Home</a>
                        </li>
                        <li>
                            <a href="">Home</a>
                        </li>
                    </ul>
                </div>
            </li>
            <li><a href="">Home</a></li>
            <li><a href="">Home</a></li>
        </ul>
    </header>
</template>
<style>
* {
    padding: 0;
    margin: 0;
}

header {
    background-color: burlywood;
}

header ul li {
    list-style: none;
    width: 10rem;
    padding: 0.5rem;
    margin: 0.5rem;
    text-align: center;
    font-size: 1.5rem;
}

header ul li:hover {
    background-color: brown;
    border-radius: 0.5rem;
}

header ul li a {
    text-decoration: none;
    color: white;
}

ul {
    display: flex;
    justify-content: center;
    flex-direction: row;
}

.cont {
    display: none;
    position: relative;
}

.cont1 {
    display: none;
    position: relative;
}

header ul li:hover .cont,
header ul li:hover .cont1 {
    display: block;
    position: absolute;
    margin-top: 1vh;
    margin-left: -0.8vw;
    background-color: darkgreen;
    color: white;
}

header ul li:hover .cont ul,
header ul li:hover .cont1 ul {
    display: block;
    margin-top: 1.3vh;

}
</style>
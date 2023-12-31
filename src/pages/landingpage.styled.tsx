import styled from "styled-components";

export const LandingPageStyled = styled.div`

    display: flex;
    align-items: top;
    justify-content: center;
    padding: 50px 0;

    // a {
    //     background: green ;
    //     border-radius: 18px;
    //     color: black ;
    //     font-size: 30px;
    //     font-weight: bold ;
    //     letter-spacing: 2px;
    //     margin-left: 10px;
    //     margin-right:10px;
    //     padding: 10px;
    //     text-align: center ; 
    // }
    

    div#board {
        border: 2px solid #ffd400;
        width: 80%;
        height: 101%;
        border-radius: 5px;
        box-shadow: 3px 3px 0px 0px #ff4e4e;
    }

    div#event {
        padding: 20px 30px;
    }

    div#event_label {
        border-bottom:2px solid black;
    }

    div#event_names {
        width:100%;
        margin-top:20px;
        display:flex;
        flex-wrap:wrap;
        // justify-content: space-around;
    }

    div#eventItem {
        position: relative;
        width:80%;
        display: inline-block;

        margin-top:20px;
        margin-right:10%;
        margin-left:10%;

        border-radius:10px;
        border:1px solid;
    }

    img#event_img {
        border-radius:10px;
        &:hover {
            transform: scale(1.1);
        }
    }

    h1 {
        text-align:center;
        margin-top:50px;
        font-size:30px;
    }

    h2 {
        font-size:25px;
    }

    @media (min-width: 800px) {
        h1 {
            text-align:center;
            margin-top:50px;
            font-size:60px;
        }
    
        h2 {
            font-size:50px;
        }   

        div#eventItem {
            position: relative;
            width:40%;
            display: inline-block;
    
            margin-top:20px;
            margin-right:5%;
            margin-left:5%;

            border:1px solid;
            border-radius:10px;
        }
    }
`
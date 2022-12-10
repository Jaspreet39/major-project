import axios from 'axios';
import { useNavigate, Link } from 'react-router-dom';


 
export default function Loginpage() {


        var uri = "http://localhost:1000/"
        var navi = useNavigate()

        function login1(e) {
        e.preventDefault()
        
        var d = new FormData(e.currentTarget)
        var uname = d.get("uname")
        var pass = d.get("pass")

        var data = {Username:uname, Password:pass}

        axios.post(uri+"register",data).then((succ)=> {
            if(succ.data.Username != uname){
                alert("Incorrect username or password")
            } else {
                alert("login successful")
                localStorage.setItem("Username",succ.data.Username)
                navi("/Homepage")
            }
        })
        }
    }
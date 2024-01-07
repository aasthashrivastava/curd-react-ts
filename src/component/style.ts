import style from 'styled-components';

export const Style= style.div`
h1{
  margin-left:460px ;
}
div{
  // display:flex;
// background-color:blue;
  // gap:50px 
}
form{
  margin:auto;
  gap:10px;
  border-radius:5px;
  flex-direction:column;
  text-align:center;
  width:55vw;
}
input{
  font-size:15px; 
  margin-left:15px;
  border-bottom:1px solid black;
  padding:5px 20px;
}
label{
  font-size:18px; 
  margin-left:15px;
}
.submitBtn{
  padding:10px ;
  margin-top:20px;
  background-color:rgb(255,73,45);
}
table{
  margin:20px auto;
  border-collapse: collapse;
  text-align: center;
  width:auto;
  background-color: rgb(202, 173, 173);
}
thead{
  background-color: black;
  color:white;
}
th, td{
  padding:10px 40px;
  text-align: center;
  // border-radius:15px;
  border: 1px solid #dddddd;
 }

button{
  padding: 5px 5px;
  border-radius:8px;
  margin-left:10px;
  color:white;
  border:none
}
.editBtn{
background-color:rgb(0,170,232);
} 
.deleteBtn{
  background-color:rgb(255,73,45);
  } 
`
import "../css/styles.css";
import myPic from "../img/MyPic.png";
import { openDefaultTab, openActiveTab } from "./tab";

var myPicImg = document.getElementById("myPic");
myPicImg.src = myPic;

openActiveTab();
openDefaultTab();

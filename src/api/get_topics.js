import axios from "axios";
import $ from "jquery";
import config from "../config.json";

var get_topics = axios.post(config.ApiUrl+'get_topics').then(function(data){

	return data.data.data;
})
export default get_topics;
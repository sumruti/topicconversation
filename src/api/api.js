import axios from "axios";
import $ from "jquery";
import config from "../config.json";



export function Create_Topic(Name,ImageLink,Group) {
	console.log(config.ApiUrl);
	  return axios.post(config.ApiUrl+'create_topic',{
	  		Name:Name,
		  	ImageLink:ImageLink,
		  	Group:Group
		  
	  });
};


export function register(email,pass) {
	
	  return axios.post(config.ApiUrl+'register',{email:email,pass:pass});
};

export function get_groups() {
	
	  return axios.post(config.ApiUrl+'get_groups');
};


export function users() {
	
	  return axios.post(config.ApiUrl+'get_users');
};
export function login(email,pass) {
	
	  return axios.post(config.ApiUrl+'login',{email:email,pass:pass});
};

export function get_Topics() {
	console.log(config.ApiUrl);
	  return axios.post(config.ApiUrl+'get_topics');
};

export function lession(Lesson,topic_id) {
	console.log(config.ApiUrl);
	  return axios.post(config.ApiUrl+'add_lession',{topic_id:topic_id,Lesson:Lesson});
};

export function get_lession(topic_id) {
	console.log(config.ApiUrl);
	  return axios.post(config.ApiUrl+'get_lession',{topic_id:topic_id});
};

export function delete_lession(lession_id) {
	  return axios.post(config.ApiUrl+'delete_lession',{lession_id:lession_id});
};

export function update_lession(lession_id,lession_name,topic_id) {
	  return axios.post(config.ApiUrl+'update_lession',{lession_id:lession_id,lession_name:lession_name,topic_id:topic_id});
};

export function add_lesson_sentence(name,language,sentence,lesson_id) {
	  return axios.post(config.ApiUrl+'add_lesson_sentence',{name:name,language:language,sentence:sentence,lesson_id:lesson_id});
};

export function get_Sentence(lesson_id) {
	  return axios.post(config.ApiUrl+'get_Sentence',{lesson_id:lesson_id});
};


export function delete_Sentence(Sentence_id) {
	  return axios.post(config.ApiUrl+'delete_Sentence',{Sentence_id:Sentence_id});
};

export function update_Sentence(Sentence_id,name,sentence,language,lesson_id) {
	
	  return axios.post(config.ApiUrl+'update_Sentence',{Sentence_id:Sentence_id,name:name,sentence:sentence,language:language,lesson_id:lesson_id});
};


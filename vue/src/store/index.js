import {createStore} from "vuex";
import axiosClient from '../axios'

const tmpSurveys = [
{
    id: 100,
    title: "theCodeholic Youtube channel content",
    slug: "the-codeholic-youtube-channel-content",
    status: "draft",
    image: "https://pbs.twimg.com/profile_images/1118059535003017221/9ZwEYqj2_400x400.png",
    description: "my name is Zura.<br>I am a Webdeveloper with 9+ years of experience, free educational content",
    created_at: "2021-12-20 18:00:00",
    updated_at: "2021-12-20 18:00:00",
    expire_date: "2021-12-20 18:00:00",
    questions: [
        {
            id: 1,
            type: "select",
            question: "From which Country are you?",
            description: null,
            data: {
                options: [
                    {uuid: "2ea94c6d-cd05-49af-9f0c-54ea8d90ae22", text: "USA"},
                    {uuid: "9ffeb813-a3d0-4abf-b6ef-b05f325d9f1a", text: "Georgia"},
                    {uuid: "0960685f-bb89-4808-afbc-534bce94d5b5", text: "Germany"},
                    {uuid: "b7ba28b1-c143-44b9-9249-5354468496fd", text: "India"},
                    {uuid: "7cfe4942-6045-4b18-9fa7-1f60e26cdba7", text: "United Kingdom"},

                    
                ],
            },
        },

        {
            id: 2,
            type: "checkbox",
            question: "Which Language videos do you want to see on my channel?",
            description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. assumenda cumque earum.",
            data: {
                options: [
                    {uuid: "2634e091-e7e3-46e0-836b-a4ccf9595632", text: "Javascript"},
                    {uuid: "69a5373a-9eab-40b5-9cd6-242b157ccd7e", text: "PHP"},
                    {uuid: "b2ca6d62-5df4-4866-9406-0e7624e6137e", text: "HTML + CSS"},
                    {uuid: "519a0472-f0a9-4137-bc28-f2e7dafdb40b", text: "All of the above"},

                    
                ],
            },

            
        },


        {
            id: 3,
            type: "checkbox",
            question: "Which PHP framework videos do you want to see on my channel?",
            description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. assumenda cumque earum.",
            data: {
                options: [
                    {uuid: "eb5d9d2f-a411-4294-8a46-1f51ca343a1f", text: "Laravel"},
                    {uuid: "e7d4aac5-ce17-4663-8dbd-32015423c365", text: "CodeIgniter"},
                    {uuid: "a37a62b5-2941-4673-af78-e0fc0e2881ff", text: "Symfony"},
                    {uuid: "16db33d0-1db6-422a-8153-2f55770837b1", text: "All of the above"},

                    
                ],
            },

            
        },


        {
            id: 4,
            type: "radio",
            question: "Which PHP framework videos do you love the most?",
            description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. assumenda cumque earum.",
            data: {
                options: [
                    {uuid: "e6830144-4010-4f73-b078-4594014d4f99", text: "Laravel 5"},
                    {uuid: "293792d7-88c2-47db-8afc-962cb29a47e9", text: "Laravel 6"},
                    {uuid: "d2c628e8-c520-414d-8872-652705e961a3", text: "Laravel 7"},
                    {uuid: "aac3a6a8-50ed-4a35-ba62-eeaeee3d650a", text: "Laravel 8"},

                    
                ],
            },

            
        },

        {
            id: 5,
            type: "checkbox",
            question: "What type of projects do you want to see on my channel built with Laravel?",
            description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. assumenda cumque earum.",
            data: {
                options: [
                    {uuid: "4b734f80-e5b0-43d3-bfc6-df78f0fc604c", text: "REST API"},
                    {uuid: "34014971-3268-46ca-b5e0-d22fe2ad1c7b", text: "E-commerece"},
                    {uuid: "6446b863-758e-4568-94f3-230826be26cf", text: "Real Estate"},
                    {uuid: "4a5679e1-6749-4fe1-9837-93aaf217167f", text: "All of the above"},

                    
                ],
            },

            
        },


        {
            id: 6,
            type: "text",
            question: "What's your favourite Youtuebe Channel?",
            description: null,
            data: {},

            
        },

        {
            id: 7,
            type: "textarea",
            question: "What do you think about TheCodeholic Channel?",
            description: "Write your honest opinion. Everything is anonymous.",
            data: {},

            
        },
    ],



},
    {
        id: 200,
        title: "Laravel 8",
        slug: "laravel-8",
        status: "active",
        image: "https://pbs.twimg.com/profile_images/1118059535003017221/9ZwEYqj2_400x400.png",
        description: "Laravel is a web application framework.",
        created_at: "2021-12-20 18:00:00",
        updated_at: "2021-12-20 18:00:00",
        expire_date: "2021-12-20 18:00:00",
        questions: [],
    },

    {
        id: 300,
            title: "Vue 3",
            slug: "vue-3",
            status: "draft",
            image: "https://pbs.twimg.com/profile_images/1118059535003017221/9ZwEYqj2_400x400.png",
            description: "VUE is a application preymwork",
            created_at: "2021-12-20 18:00:00",
            updated_at: "2021-12-20 18:00:00",
            expire_date: "2021-12-20 18:00:00",
            questions: [],
        },  

        
    {
        id: 400,
            title: "Tailwind 3",
            slug: "tailwind-3",
            status: "active",
            image: "https://pbs.twimg.com/profile_images/1118059535003017221/9ZwEYqj2_400x400.png",
            description: "A utility-first CSS framework packed with CSS",
            created_at: "2021-12-20 18:00:00",
            updated_at: "2021-12-20 18:00:00",
            expire_date: "2021-12-20 18:00:00",
            questions: [],
        },  

];

const store = createStore({
    state: {
    
    user:{
        data: {},
        token: sessionStorage.getItem('TOKEN'),
        },

    surveys: tmpSurveys,

    },
    getters: {},
    actions: {

    /* Login/Logout Actions */

        register({ commit }, user){
            return axiosClient.post('/register', user)
            .then(({data}) => {
                commit('setUser', data)
                return data;
            })
        },

        login({ commit }, user){
            return axiosClient.post('/login', user)
            .then(({data}) => {
                commit('setUser', data)
                return data;
            })
        },

        logout({ commit }) {
            return axiosClient.post('/logout')
            .then(response => {
                commit('logout')
                return response;
            })
        }

    },
    mutations: {

        logout: state=>{
            state.user.data = {},
            state.user.token = null;
        },

        setUser: (state, userData) => {
            state.user.token = userData.token;
            state.user.data = userData.user;
            sessionStorage.setItem('TOKEN', userData.token);

        }

    },
    modules: {}
});

export default store;
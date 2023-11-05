import {rerenderTree} from "../render" 


let state = {

    profilePage: {
        posts: [
            { id: "1", message: "u first", likes: "44" },
            { id: "2", message: "w?", likes: "1488" },
            { id: "3", message: "dddd", likes: "228" },
        ]
    },

    dialogsPage: {
        messages: [
            { id: "1", message: "Hi" },
            { id: "2", message: "IDI NAXUY!" },
            { id: "3", message: "wawawwawwaw" },
        ],

        dialogs: [
            { id: "1", name: "Oleg" },
            { id: "2", name: "Vlad" },
            { id: "3", name: "fubar" },
            { id: "4", name: "slidan" },
            { id: "5", name: "azazin" },
            { id: "6", name: "maksos" },
        ],

    },

    navBar:{
        friends:[
        { id: "1", avatarimage: "https://i1.sndcdn.com/artworks-MFWmYRBhywk1Z7dY-v7yMCQ-t500x500.jpg" },
        { id: "2", avatarimage: "https://upload.wikimedia.org/wikipedia/ru/6/6d/Yung_Lean_%E2%80%94_Starz.png" },
        { id: "3", avatarimage:  "https://upload.wikimedia.org/wikipedia/ru/thumb/5/5b/Eversince.png/800px-Eversince.png" },
    ]
}




};

export let addPost = (postMessage) => {
    let newPost = {
        id:5,
        message: postMessage,
        likes: 0
    }
    state.profilePage.posts.push(newPost)
    rerenderTree(state )
}

export default state;
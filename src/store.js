import {reactive} from "vue"
export const store = reactive({
    contacts:{
        phone:"+1(305)1234-5678",
        mail:"hello@example.com",
        adress:"Main Avenue, 987"
    },
    services: [
        {
            icon:"fa-solid fa-network-wired",
            title:"Audit & Assurance",
            parag:"Lorem ipsum dolor sit, amet consectetur adipisicing elit.",
        },
        {
            icon:"fa-solid fa-briefcase",
            title:"Financial Advisor",
            parag:"Lorem ipsum dolor sit, amet consectetur adipisicing elit.",
        },
        {
            icon:"fa-solid fa-chart-simple",
            title:"Analytics and M&A",
            parag:"Lorem ipsum dolor sit, amet consectetur adipisicing elit.",
        },
        {
            icon:"fa-solid fa-plane",
            title:"Middle Marketing",
            parag:"Lorem ipsum dolor sit, amet consectetur adipisicing elit.",
        },
        {
            icon:"fa-solid fa-globe",
            title:"Legal Consulting",
            parag:"Lorem ipsum dolor sit, amet consectetur adipisicing elit.",
        },
        {
            icon:"fa-solid fa-inbox",
            title:"Regulatory Risk",
            parag:"Lorem ipsum dolor sit, amet consectetur adipisicing elit.",
        },
            ],
    companys: [
        {
            icon:"fa-solid fa-award",
            title:"Tradition",
            parag:"Lorem ipsum dolor sit, amet consectetur adipisicing elit.",
        },
        {
            icon:"fa-solid fa-lock",
            title:"Security",
            parag:"Lorem ipsum dolor sit, amet consectetur adipisicing elit.",
        },
        {
            icon:"fa-regular fa-pen-to-square",
            title:"Certificate",
            parag:"Lorem ipsum dolor sit, amet consectetur adipisicing elit.",
        },
        {
            icon:"fa-solid fa-graduation-cap",
            title:"Expertise",
            parag:"Lorem ipsum dolor sit, amet consectetur adipisicing elit.",
        },
            ],
    projects:[
        {
            title:"Academic professional program in social media",
            parag:"Lorem ipsum dolor sit, amet consectetur adipisicing elit.",
            img:"project-1.jpg",
        },
        {
            title:"Student's speech at the annual meeting",
            parag:"Lorem ipsum dolor sit, amet consectetur adipisicing elit.",
            img:"project-2.jpg",
        },
        {
            title:"International business trip in Shanghai",
            parag:"Lorem ipsum dolor sit, amet consectetur adipisicing elit.",
            img:"project-3.jpg",
        },
        {
            title:"Technology workshop with education theme",
            parag:"Lorem ipsum dolor sit, amet consectetur adipisicing elit.",
            img:"project-4.jpg",
        },
        {
            title:"Donation of clothes and food to the partner NGO",
            parag:"Lorem ipsum dolor sit, amet consectetur adipisicing elit.",
            img:"project-5.jpg",
        },
        {
            title:"Confraternization of the procurement team",
            parag:"Lorem ipsum dolor sit, amet consectetur adipisicing elit.",
            img:"project-6.jpg",
        }
    ],
    numbers:[
        {number:128, title:"Certifications"},
        {number:230, title:"Employees"},
        {number:517, title:"Costumers"},
        {number:94, title:"Country Served"},
    ],
    partners:["logo-4.png","logo-5.png","logo-1.png","logo-2.png","logo-3.png","logo-4.png"],
    inputs:{
        name:"",
        email:"",
        phone:"",
        info:"",
        message:"",
        },
    incomeReq:[{
        name:"",
        email:"",
        phone:"",
        info: "",
        message:"",
    }],
    links:[
        {id:"About", listOpt:["The Company", "Istitutional", "Social & Events", "Innovation", "Enviroment", "Technology"]},
        {id:"Services", listOpt:["Audit & Assurance", "Financialy Advisor", "Analytics M&A", "Middle Marketing", "Legal Consulting", "Regulatory Risk"]},
        {id:"Support", listOpt:["Responsability", "Terms of Use", "About Cookies", "Privacy Policy", "Accessibility", "Information"]},
           
    ]
})
export class Projects {
    private allProjectsByTwo: Array<Array<string[]>> = [];

    constructor() {
        let project_desc = [];

        let game = {
            title: "In Game Web App",
            desc: ["Technology Stack: Angular 6+, JavaScript, RxJS",
                "Built a responsive web app with grid UI using Angular 6+, JavaScript, and third-party APIs to provide users League of Legends game history",
                "Implemented a search engine for users to search for profiles and match history of any user",
                "Provided description of multiple images and texts by hovering them over",
                "Displayed error messages of HTTP Responses and inputs from users"],
            image: "assets/angular.jpg",
            website: "https://yongkkim.github.io/myprojects/",
            github: "https://github.com/yongkkim/myprojects/tree/master/lolsearch/searchLeague",
            video: "assets/angular_proj.mp4"
        };
        project_desc.push(game);

        let calendar = {
            title: "Calendar",
            desc: ["Technology Stack: React, JavaScript, Moment.js",
                "Built a schedulable calendar using React",
                "Implemented user-friendly UI to easily change month and year and manage all scheduled plans",
                "Allowed users to view, add, delete, delete all, and undo on each day",
                "Used cookies in order to save previous plans for 30 days"],
            image: "assets/react.jpg",
            website: "https://yongkkim.github.io/calendar/",
            github: "https://github.com/yongkkim/calendar/",
            video: "assets/react_proj.mp4"
        };

        project_desc.push(calendar);

        let blog = {
            title: "Blog Website",
            desc: ["Technology Stack: React, Redux, Babel, Webpack, JavaScript, Photoshop",
                "Built a blog website to provide my opinions and information about an online game with videos, images, and texts in simple UI layout using React",
                "Used third party APIs to get resources of the game details",
                "Edited images using Photoshop to fit well to the website UI"],
            image: "assets/lol_blog.png",
            website: "https://yongkkim.github.io/lol_blog/",
            github: "https://github.com/yongkkim/lol_blog.git",
            video: "assets/blog.mp4"
        };
        project_desc.push(blog);

        let book = {
            title: "Book Collection",
            desc: ["Technology Stack: PHP, JavaScript, phpMyAdmin",
                "Built a website to store book information using PHP",
                "Displayed a collection of books by using CSS grid layout",
                "Implemented email feature to send email to users to find a password",
                "Allowed user to search for a book by words in its description",
                "Provided the authentication for web pages by storing individual user’s information using sessions"],
            image: "assets/Book_Collection.png",
            website: "",
            github: "https://github.com/yongkkim/myprojects/tree/master/Book%20Collection",
            video: "assets/book_collection.mp4"
        };
        project_desc.push(book);

        let arrayWithTwo: Array<string[]> = [];
        var userAgent = navigator.userAgent || navigator.vendor;

        if (/iPad|iPhone|iPod/.test(userAgent) && window.innerWidth < 450) {
            project_desc.forEach((proj) => {
                arrayWithTwo.push(proj);
                this.allProjectsByTwo.push(arrayWithTwo);
                arrayWithTwo = [];
            })
        } else {
            project_desc.forEach((proj, i) => {
                if (i % 2 == 1) {
                    arrayWithTwo.push(proj);
                    this.allProjectsByTwo.push(arrayWithTwo);
                    arrayWithTwo = [];
                } else if (i % 2 == 0) {
                    arrayWithTwo.push(proj);
                    if ((i + 1) == project_desc.length) {
                        this.allProjectsByTwo.push(arrayWithTwo);
                    }
                }
            })
        }
    }

    getProject() {
        console.log(this.allProjectsByTwo);
        return this.allProjectsByTwo;
    }
}
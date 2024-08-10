# Todo app

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)


## Overview

Users can:

- View the optimal layout for the app depending on their device's screen size
- See hover states for all interactive elements on the page
- Add new todos to the list
- Mark todos as complete
- Delete todos from the list
- Filter by all/active/complete todos
- Clear all completed todos
- Toggle light and dark mode
- **Bonus**: Drag and drop to reorder items on the list

### Screenshot

![light-laptop-screenshot](./screenshot/light-laptop-screenshot.png)

### Links

Solution URL TO BE ADDED

- Solution URL: [Add solution URL here](https://your-solution-url.com)
- Live Site URL: [ListyTodo](https://listy-todo.vercel.app)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- CSS Grid
- Mobile-first workflow
- [React](https://reactjs.org/) - JS library
- [Next.js](https://nextjs.org/) - React framework
- [Typescript](https://www.typescriptlang.org/) - Type safety
- [TailwindCSS](https://tailwindcss.com/) - For CSS Utility classes
- [Drizzle](https://orm.drizzle.team/) - Communicating with a relational database
- [Supabase](https://supabase.com/) - Postgres Relational Database & Auth
- [dnd-kit](https://docs.dndkit.com/) - Drag & Drop functionality
- [next-themes](https://www.npmjs.com/package/next-themes) - For light & dark themes


### What I learned


Althrough this project was just a CRUD app, it still allowed me to practice different skills and technologies that I'm currently learning. The main one being Typescript.

##### Typescript

This was only my second project using Typescript and I think it was the perfect project to learn more about it because it allowed me to use Typesript in a CRUD app, with APIs, with auth and with a project that connected to a database.

Already I'm seeing the benefit of using it, from the basic error finds like typos, to the intellisense & typesafety. I've also seen how it can speed up developement because even though you have to write more code creating the different types it will save you time in long run. This is because it will save you having to find and solve different errors that would usually occur during runtime and you will not have to spend time tracking down these errors and solving them, as typescript will help you solve these errors before they even happen.

I know I have only begun to learn about Typescript and there are many things I would like to learn more about it, such as, architecture, structure, best practices & overall setup and I look forawrd to learning about these things and gaining more experince with typescript as a whole in the coming projects.

Heres a few examples of some of my types:
```ts
export interface TodoSchema {
  id: string;
  userId: string;
  todoContent: string;
  isCompleted: boolean;
  createdAt: Date;
  updatedAt: Date;
  orderNumber: number
}

// Here I'm creating a interface called "SortableContainerProps", inheriting the types from the "UserId" interface, while also excluding the "searchParams" value from "UserId".
interface SortableContainerProps extends Omit<UserId, "searchParams"> {
  todosList: TodoSchema[];
}
```

##### Relational Databases

I saw this project as the perfect opportunity to scatch the surface and to finally learn about and use a relational database.

I had only worked with non-relational databases like MongoDB in the past, so I came into this completely blind and It was a fun learning experience.

I had to do a lot of research before I could even start using them. This is where I discovered a few things about them, like the different types of relational databases that could be used, for example, mySQL, postgres & more. I also learned about the different ways to host them, like hosting the database on my local machine and then using something like Docker to dockerize the local hosting environment which would allow me to host the database on almost any provider. Another way I found of setting up a database was through a third party software like Supabase. I ended up choosing Supabase because it allowed me to setup the database quickly so I could concentrate on building the other areas of my project.

This also lead me to discover about ORMs (Object Relational Mapping), with allows you to connect to the database through javascript like objects and methods, rather than the SQL language. This is something I definitly needed because I have never worked with any SQL language or syntax before, so this allowed me to communicate with the database in a syntax I was more familiar with, without having to learn an entirly new syntax. For this I used Drizzle.

I will be using more relational databasess in the future as they are more widely used and seem to be a more in-demand skill to have, over non-relational. I look forward to learning more about their concepts, structure, synatax and more advance use cases. I know I have only scatched the surface of the subject and will find projects in the future where I can fully concentrate on learning more about them and go more indepth in the subject.

### Continued development

The two main takeaways from the project were the use of relational databases and Typescript.

I know I have only touched the surface of learning about relational databases, their concepts, the differents types (postgres, mySQL etc), their uses and how powerful they can be and I looking forward to learning more about them and using them in future Projects. I also feel that it is an important skill to learn as relation databses seem to be so widely used.

Typescript is something I have little experience with as well, but already I'm seeing the benefits of using it in my projects. I plan to use it in all my future Javascript based projects going forward. 

### Useful resources

- [Drizzle Documentation](https://orm.drizzle.team/docs/overview) - As this was my first time working with a relational database and an ORM, I had to use this to set up and connect to the database.

- [Supabase Documentation](https://supabase.com/docs) - I used the supabase documentation to set up my postgres database and manage it. I had to use it quite a bit when creating tables and setting up the projects auth.

- [Typescript documentation](https://www.typescriptlang.org/docs/) - The documentation was something I referenced frequently when I had different type errors I couldn't figure out how to handle.

- [DnD-Kit documentation](https://docs.dndkit.com/presets/sortable#drag-overlay/) - This is what I followed in order to setup the drag & drop functionality for the project.

## Author

- Website - [David Henery](https://www.djhwebdevelopment.com)
- Frontend Mentor - [@David-Henery4](https://www.frontendmentor.io/profile/David-Henery4)
- Linkedin - [Profile](https://www.linkedin.com/in/david-henery-725458241/)